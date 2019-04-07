import React from 'react';
import HogDetails from './HogDetails'
import { Card, Image, Button, Container, Header } from 'semantic-ui-react'

//javascript, jQuery
// const API = "http://api.giphy.com/v1/gifs/search?q=pig&api_key=DttQ9wIBO32ilQGEZm3VafqaxTvOet6G&limit=13";
// xhr.done(function (data) { console.log("success got data", data); });

// DttQ9wIBO32ilQGEZm3VafqaxTvOet6G

class HogCard extends React.Component {

    state = {
        showDetails: false
        // hogPic: []
    }

    // componentDidMount() {
    //     fetch(API)
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState({ hogPic: res.data[0].images.downsized_medium.url.toString() }, () => {console.log(this.state.hogPic.data[0].images.downsized_medium.url.toString())})
    //     })
    // }

    getImage = () => {
        let formattedName = this.props.hog.name.split(" ").join("_").toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    handleClick = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

        render() {
            console.log(this.state.hogPic)
            return (
                <div>
                    <Card className="">
                        <Card.Content><Card.Header><h2>{this.props.hog.name}</h2></Card.Header></Card.Content>
                        <Image className="card-hog-pic" alt="pic" src={this.props.hogPic} onClick={this.handleClick} />
                        {this.state.showDetails ? <Card.Content><HogDetails hog={this.props.hog} /></Card.Content> : null}
                    </Card>
                </div>
            )
        }
}

export default HogCard;

// name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'
