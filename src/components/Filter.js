// import React, { Component } from 'react';
import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const Filter = (props) => {
    const options = [
        { key: 'none', text: 'none', value: 'none'},
        { key: 'name', text: 'name', value: 'name'},
        { key: 'weight', text: 'weight', value: 'weight'},
        { key: 'greased', text: 'greased', value: 'greased'},
        { key: 'not greased', text: 'not greased', value: 'not greased'}
    ]
    // onChange = { props.changeSort }
    let handleChange = (options, query) => {
        console.log(query.value)
        props.changeSort(query.value)
        
    }

    return (
        <div className="ui search">
            <br />
            <Dropdown placeholder='Filter Hogs By...' onChange={handleChange} compact search selection options={options} />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Filter;
/* <input onChange={this.props.handleChange} name='search' className="prompt" type="text" placeholder="Search Hogs..." /> */
// const Filter = (props) => {
//     return (
//         <div className="ui search">
//             <br />
//             <Dropdown text="Filter Hogs..." onChange={props.changeSort}>
//                 <Dropdown.Menu>
//                     <Dropdown.Menu key="none" text="none" value='none' />
//                     <Dropdown.Menu key="name" text="name" value='name' />
//                     <Dropdown.Menu key="weight" text="weight" value='weight' />
//                     <Dropdown.Menu key="greased" text="greased" value='greased' />
//                     <Dropdown.Menu key="not greased" text="not greased" value='not greased' />
//                 </Dropdown.Menu>
//             </Dropdown>
//             <br />
//             <br />
//             <br />
//         </div>
//     )
// }