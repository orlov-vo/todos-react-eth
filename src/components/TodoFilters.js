import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import * as f from '../redux/todo/todo.filters'

export class TodoFilters extends Component {
  constructor(props) {
    super(props)

    this.renderFilter = this.renderFilter.bind(this)
    this.renderStatusFilter = this.renderStatusFilter.bind(this)
    this.renderPriorityFilter = this.renderPriorityFilter.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(filter, callback) {
    return e => {
      e.preventDefault()
      callback(filter)
    }
  }

  renderFilter(filter, name, isActive, callback) {
    return isActive ? name : <Link onClick={this.handleClick(filter, callback)} name={name} />
  }

  renderStatusFilter(filter, name) {
    return this.renderFilter(
      filter,
      name,
      filter === this.props.statusFilter,
      this.props.onStatusFilterChange,
    )
  }

  renderPriorityFilter(filter, name) {
    return this.renderFilter(
      filter,
      name,
      filter === this.props.priorityFilter,
      this.props.onPriorityFilterChange,
    )
  }

  render() {
    return (
      <div>
        <p>
          Status: {this.renderStatusFilter(f.STATUS_ALL, 'All')}
          {', '}
          {this.renderStatusFilter(f.STATUS_COMPLETED, 'Completed')}
          {', '}
          {this.renderStatusFilter(f.STATUS_ACTIVE, 'Active')}
          .
        </p>
        <p>
          Priority: {this.renderPriorityFilter(f.PRIORITY_ALL, 'All')}
          {', '}
          {this.renderPriorityFilter(f.PRIORITY_HIGH, 'High')}
          {', '}
          {this.renderPriorityFilter(f.PRIORITY_MEDIUM, 'Medium')}
          {', '}
          {this.renderPriorityFilter(f.PRIORITY_LOW, 'Low')}
          {', '}
          {this.renderPriorityFilter(f.PRIORITY_NONE, 'None')}
          .
        </p>
      </div>
    )
  }
}

TodoFilters.propTypes = {
  onStatusFilterChange: PropTypes.func.isRequired,
  onPriorityFilterChange: PropTypes.func.isRequired,
  statusFilter: PropTypes.oneOf([f.STATUS_ALL, f.STATUS_COMPLETED, f.STATUS_ACTIVE]).isRequired,
  priorityFilter: PropTypes.oneOf([
    f.PRIORITY_ALL,
    f.PRIORITY_HIGH,
    f.PRIORITY_MEDIUM,
    f.PRIORITY_LOW,
    f.PRIORITY_NONE,
  ]).isRequired,
}

export default TodoFilters
