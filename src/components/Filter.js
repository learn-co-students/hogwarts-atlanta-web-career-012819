import React from 'react'

export default function Filter(props) {
  return (
    <div className="ui two column grid">
        <div className="column">
            <label>Sort Hogs by:</label> <br />
            <select name="sort" className="ui form dropdown" onChange={props.sortAction}>
                <option value="none">Select an option..</option>
                <option value="name">Hog Name</option>
                <option value="weight">Hog Weight</option>
            </select>
        </div>
        <div className="column" >
            <div className="">
                <label>Show Greased pigs?</label>
                <input type="checkbox" name="greased" value="true" onChange={props.greasedAction}/>
            </div>
        </div>
    </div>
  )
}
