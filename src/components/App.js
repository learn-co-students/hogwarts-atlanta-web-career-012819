import React from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogList from './HogList'
import hogs from '../porkers_data';

const API = "http://api.giphy.com/v1/gifs/search?q=pig&api_key=DttQ9wIBO32ilQGEZm3VafqaxTvOet6G&limit=13";

    // componentDidMount() {
    //     fetch(API)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({ hogPics: res })
    //         })
    // }
    // this.setState({ hogPic: res.data[0].images.downsized_medium.url.toString() }, () => { console.log(this.state.hogPic.data[0].images.downsized_medium.url.toString()) })


    // renderHogs = () => {
    //     return this.props.hogs.map((hog, i) => {
    //         console.log(i)
    //         return <HogCard key={hog.id} hog={hog} renderDetails={this.props.renderDetails} hogPic={this.state.hogPics.data[i].images.downsized_medium.url.toString()} />
    //     })
    // }

class App extends React.Component {

    state = {
        hogs: hogs, 
        filteredHogs: hogs
    }

    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(gif => {
                let selectedHogPics = gif.data.map((hog, i) => (true ? hog.images.downsized_medium.url.toString() : "Failure Loading"))
                const hogsAddedData = this.state.hogs.map((hog, i) => ({ ...hog, image: selectedHogPics[i], hidden: false, id: i }))
                this.setState({ hogs: hogsAddedData, filteredHogs: hogsAddedData }, () => { this.whatHappens()})
            })
    }

    whatHappens = () => {
        console.log('Invoked')
    }

    hideHog = (hog) => {
        let hiddenHogs = [...this.state.hogs].map((h) => (h.id === hog.id ? { ...h, hidden: true } : h ))
        this.setState({ hogs: hiddenHogs, filteredHogs: hiddenHogs }, () => console.log("Hidden Hogs... ", hiddenHogs))
    }

    changeSort = (value) => {
        let selected = value

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

    // findHiddenPicsAfterSort = () => {
    //     let sortedFilteredHidenHogs = [...this.state.filteredHogs].filter(hog => {
    //         return !hog.hidden
    //     })
    //     this.setState({ filteredHogs: sortedFilteredHidenHogs }, () => console.log("Hidden & Sorted Hogs... ", sortedFilteredHidenHogs))
    // }

    render() {
        return (
            <div className="App">
                <Nav />
                <Filter changeSort={this.changeSort} />
                {this.renderDetails}
                <HogList hogs={this.state.filteredHogs} renderDetails={this.renderDetails} hideHog={this.hideHog} />
            </div>
        )
    }
}

export default App;
