import React, { Component } from 'react';
import HogCard from './HogCard';

// const API = "http://api.giphy.com/v1/gifs/search?q=pig&api_key=DttQ9wIBO32ilQGEZm3VafqaxTvOet6G&limit=13";

class HogList extends Component {

    // state = {
    //     hogPics: []
    // }

    // componentDidMount() {
    //     fetch(API)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({ hogPics: res})
    //         })
    // }
    // this.setState({ hogPic: res.data[0].images.downsized_medium.url.toString() }, () => { console.log(this.state.hogPic.data[0].images.downsized_medium.url.toString()) })

    renderHogPics = () => {
        let hogPicArr = this.props.hogPics.map((hog, i) => {
            return hog.data[i].images.downsized_medium.url.toString()
        })
        return hogPicArr
    }


    renderHogs = () => {
        return this.props.hogs.map((hog, i) => {
            console.log(i)
            return <HogCard key={hog.id} hog={hog} renderDetails={this.props.renderDetails} hogPic={this.renderHogPics[i]}/>
        })
    }


    render() {
        return (
            <div className="ui gird container">
                {this.renderHogs()}
            </div>
        )
    }
}

export default HogList;
