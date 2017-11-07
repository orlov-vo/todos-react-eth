import { render } from 'react-dom'

// Utils
import './utils/bem'
import './utils/moment'

export function bootstrap(element) {
  return render(element, document.getElementById('root'))
}

export default bootstrap
