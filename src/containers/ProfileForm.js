import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2) {
      return console.error('Please fill in your name.')
    }

    this.props.onProfileFormSubmit(this.state.name)
  }

  render() {
    return (
      <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={this.state.name}
            onChange={this.onInputChange}
            placeholder='Name'
          />
          <span className='pure-form-message'>This is a required field.</span>

          <br />

          <button type='submit' className='pure-button pure-button-primary'>
            Update
          </button>
        </fieldset>
      </form>
    )
  }
}

ProfileForm.propTypes = {
  name: PropTypes.string,
  onProfileFormSubmit: PropTypes.func.isRequired,
}

export default ProfileForm
