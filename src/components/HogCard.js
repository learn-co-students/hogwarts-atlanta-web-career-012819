import React from 'react';
import HogDetails from './HogDetails'
import { Card, Image, Dropdown} from 'semantic-ui-react'


class HogCard extends React.Component {

    state = {
        showDetails: false
    }

    // getImage = () => {
    //     let formattedName = this.props.hog.name.split(" ").join("_").toLowerCase();
    //     let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    //     return pigPics;
    // };

    handleClick = () => {
        console.log("You Clicked ", this.props.hog.name, " and can now see his Details")
        this.setState({ showDetails: !this.state.showDetails })
    }

        render() {
            return (
                <div className="inline-block">
                    <Card className="">
                        <Card.Content><Card.Header><h2>{this.props.hog.name}</h2></Card.Header></Card.Content>
                        <Image className="card-hog-pic" alt="pic" src={this.props.hog.image} onClick={this.handleClick} />
                        {this.state.showDetails ? <Card.Content><HogDetails hog={this.props.hog} hideHog={this.props.hideHog}/></Card.Content> : null}
                    </Card>
                </div>
            )
        }
}

export default HogCard;