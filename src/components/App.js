import React from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogList from './HogList'
import hogs from '../porkers_data';

class App extends React.Component {

    state = {
        hogs: hogs, 
        filteredHogs: hogs
    }

    // renderDetails = (hog) => {
    //     console.log("clicked")
    //     console.log(hog)
        
    // }

    handleChange = (e) => {
        console.log(e.target.value)
        let resultsHogs = this.state.hogs.filter((hog) => {
            if(hog.name.toLowerCase().includes(e.target.value))
                return true
        })
        
        this.setState({ filteredHogs: resultsHogs})
    }

    handleChangeWeight = (e) => {
        console.log(e.target.value)
        let resultsHogs = this.state.hogs.filter((hog) => {
            const weight = (hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']).toString()
            console.log(weight)
            if (weight === e.target.value)
                return true
        })
        this.setState({ filteredHogs: resultsHogs })
    }

    render() {
        return (
            <div className="App">
                <Nav />
                <Filter handleChange={this.handleChange} handleChangeWeight={this.handleChangeWeight}/>
                {this.renderDetails}
                <HogList hogs={this.state.filteredHogs} renderDetails={this.renderDetails} />
            </div>
        )
    }
}

export default App;
