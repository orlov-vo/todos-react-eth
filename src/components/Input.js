import React, { Component } from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'

import './Input.scss'

const b = block('input')
export class Input extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }

    this.handleInput = this.handleInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.processInputEvent = this.processInputEvent.bind(this)
  }

  componentWillMount() {
    this.setState({
      value: this.props.value || '',
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: this.props.value || '',
      })
    }
  }

  value() {
    return this.state.value
  }

  focus() {
    this.elem.focus()
  }

  blur() {
    this.elem.blur()
  }

  clear() {
    this.elem.value = ''
    this.setState({
      value: '',
    })
  }

  handleInput(e) {
    const event = this.processInputEvent(e)

    if (this.props.onInput) {
      this.props.onInput(event)
    }
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  processInputEvent(event) {
    this.setState({
      value: event.target.value || '',
    })

    return event
  }

  render() {
    const inputProps = {
      className: b('control'),
      value: this.value(),
      onBeforeInput: this.props.onBeforeInput,
      onInput: this.handleInput,
      onChange: this.handleChange,
      placeholder: this.props.placeholder,
      ref: elem => (this.elem = elem),
    }

    const input =
      this.props.type === 'textarea' ? (
        <textarea {...inputProps} />
      ) : typeof this.props.options === 'object' ? (
        <select {...inputProps}>
          <option value='' disabled>
            {this.props.placeholder || 'Select your option'}
          </option>
          {!!this.props.options &&
            Object.keys(this.props.options).map((key, idx) => (
              <option key={idx} value={key}>
                {this.props.options[key]}
              </option>
            ))}
        </select>
      ) : (
        <input {...inputProps} type={this.props.type || 'text'} />
      )

    return (
      <span className={b()}>
        {!!this.props.label && <span className={b('label')}>{this.props.label}</span>}
        {input}
        {(!!this.props.hint || !!this.props.error) && (
          <span className={this.props.error ? b('error') : b('hint')}>
            {this.props.error || this.props.hint}
          </span>
        )}
      </span>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.object,
  type: PropTypes.string,
  onBeforeInput: PropTypes.func,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Input
