import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="ui search">
                <input onChange={this.props.handleChange} name='search' className="prompt" type="text" placeholder="Search Hogs..." />
                <br />
                <select onChange={this.props.changeSort}>
                    <option value='none'>None</option>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                    <option value='greased'>Greased</option>
                    <option value='not greased'>Not Greased</option>
                </select>
                <br />
            </div>
        )
    }
}

export default Filter;