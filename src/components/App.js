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

    changeSort = (e) => {
        let selected = e.target.value

        if (selected === 'name') {
            let newHogs = [...this.state.hogs].sort((HogA, HogB) => {
                let  textA = HogA.name
                let  textB = HogB.name
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            this.setState({ filteredHogs: newHogs })

        } else if (selected === 'weight') {
            let newHogs = [...this.state.hogs].sort((HogA, HogB) => {
                let textA = HogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
                let textB = HogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            this.setState({ filteredHogs: newHogs })

        } else if (selected === 'greased') {
            let newHogs = [...this.state.hogs].filter(hog => {
                return hog.greased
            })
            this.setState({ filteredHogs: newHogs })

        } else if (selected === 'not greased') {
            let newHogs = [...this.state.hogs].filter(hog => {
                return !hog.greased
            })
            this.setState({ filteredHogs: newHogs })

        } else { 
            this.setState({ filteredHogs: this.state.hogs })
        }
    }

    render() {
        return (
            <div className="App">
                <Nav />
                <Filter handleChange={this.handleChange} changeSort={this.changeSort} />
                {this.renderDetails}
                <HogList hogs={this.state.filteredHogs} renderDetails={this.renderDetails} />
            </div>
        )
    }
}

export default App;