import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class EthStatus extends Component {
  constructor(props) {
    super(props)

    const web3 = props.web3

    this.state = this.calculateState(web3)

    this.onSyncing = this.onSyncing.bind(this)

    if (web3.isConnected()) {
      this.ethSync = web3.eth.isSyncing(this.onSyncing)
    }
  }

  calculateState(web3) {
    return web3.isConnected()
      ? {
        isConnected: true,
        currentBlock: web3.eth.blockNumber,
      }
      : {
        isConnected: false,
        currentBlock: 0,
      }
  }

  componentWillReceiveProps(nextProps) {
    const web3 = nextProps.web3

    this.setState(this.calculateState(web3))

    if (this.ethSync) {
      this.ethSync.stopWatching()
    }

    if (web3.isConnected()) {
      this.ethSync = web3.eth.isSyncing(this.onSyncing)
    }
  }

  onSyncing(err, res) {
    if (err) return

    if (res === true) {
      console.log(`Start syncing`)
    } else if (res) {
      console.log(res.currentBlock)
      this.setState({
        currentBlock: res.currentBlock,
      })
    } else {
      console.log(`Stop syncing`)
    }
  }

  render() {
    return (
      <span>
        [connected: {this.state.isConnected ? 'yes' : 'no'}; block: {this.state.currentBlock}]
      </span>
    )
  }
}

EthStatus.propTypes = {
  web3: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    web3: state.web3.web3Instance,
  }
}

export const EthStatusContainer = connect(mapStateToProps)(EthStatus)

export default EthStatusContainer
