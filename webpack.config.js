// const webpack = require('webpack')
const path = require('path')

// Webpack Blocks
const {
  createConfig,
  match,
  entryPoint,
  setOutput,
  env,
  defineConstants,
  sourceMaps,
  resolve,
  addPlugins,
} = require('@webpack-blocks/webpack')
const { css, file } = require('@webpack-blocks/assets')
const babel = require('@webpack-blocks/babel')
const devServer = require('@webpack-blocks/dev-server')
const extractText = require('@webpack-blocks/extract-text')
const postcss = require('@webpack-blocks/postcss')
const sass = require('@webpack-blocks/sass')
const uglify = require('@webpack-blocks/uglify')

// Webpak Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const ManifestPlugin = require('webpack-manifest-plugin')

// PostCSS Plugins
const autoprefixer = require('autoprefixer')
const postcssShort = require('postcss-short')

// Local deps
const paths = require('./paths')

// Constants
const port = parseInt(process.env.PORT, 10) || 3000
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || 'localhost'
const publicUrl = './'

if (process.env.NODE_ENV == null) {
  process.env.NODE_ENV = 'development'
}

const shortConfig = { fontWeights: false }
;['border', 'borderRadius', 'color', 'fontSize', 'position', 'size', 'spacing'].forEach(val => {
  shortConfig[val] = { skip: '_' }
})

const postcssPlugins = [
  postcssShort(shortConfig),
  autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9'], // https://github.com/ai/browserslist
  }),
]

// Webpack Config
module.exports = createConfig([
  resolve({
    extensions: ['.js', '.jsx'],
  }),
  entryPoint({
    polyfills: ['./src/polyfills.js'],
  }),
  setOutput({
    filename: 'js/[name].[hash].js',
    path: paths.appBuild,
    chunkFilename: 'js/[name].chunk.js',
    publicPath: publicUrl,
  }),
  babel(),
  match(/\.css$/, { exclude: path.resolve('node_modules') }, [
    css(),
    postcss({ plugins: postcssPlugins }),
    env('production', [extractText()]),
  ]),
  match(/\.s(c|a)ss$/, { exclude: path.resolve('node_modules') }, [
    css(),
    postcss({ plugins: postcssPlugins }),
    sass(),
    env('production', [extractText()]),
  ]),
  match(/\.(gif|jpe?g|png|webp)$/, [file()]),
  match(/\.(eot|svg|ttf|woff2?)$/, [file()]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  addPlugins([
    new CopyWebpackPlugin([{ from: 'public' }], {
      ignore: [
        // Doesn't copy any files with a html extension
        '*.html',
      ],
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ]),
  env('development', [
    entryPoint({
      bundle: ['react-hot-loader/patch', paths.appIndexDevJsRel, paths.appStylesRel],
    }),
    setOutput({
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: true,
    }),
    devServer({
      contentBase: paths.appPublic,
      publicPath: '/',
      host: host,
      https: protocol === 'https',
      port: port,
    }),
    sourceMaps(),
    addPlugins([
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtmlRel,
      }),
      // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    ]),
  ]),
  env('production', [
    entryPoint({
      bundle: [paths.appIndexProdJsRel, paths.appStylesRel],
    }),
    uglify(),
    addPlugins([
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtmlRel,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html|css)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]),
  ]),
])
