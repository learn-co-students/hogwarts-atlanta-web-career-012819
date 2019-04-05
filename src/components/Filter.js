import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="ui search">
                <input onChange={this.props.handleChange} name='search' className="prompt" type="text" placeholder="Search Hogs..." />
                <input onChange={this.props.handleChangeWeight} name='search' className="prompt" type="text" placeholder="Search Hogs By Weight..." />
            </div>
        )
    }
}

export default Filter;