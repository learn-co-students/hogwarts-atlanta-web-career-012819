import React from 'react';
import HogDetails from './HogDetails'
import { Card, Image, Dropdown} from 'semantic-ui-css'
// import { Card, Image, Dropdown} from 'semantic-ui-css'
// import { Card, Image, Dropdown} from 'semantic-ui-react'

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
        this.setState({ showDetails: !this.state.showDetails })
    }

        render() {
            return (
                <div>
                    <Card className="">
                        <Card.Content><Card.Header><h2>{this.props.hog.name}</h2></Card.Header></Card.Content>
                        <Image className="card-hog-pic" alt="pic" src={this.props.pics} onClick={this.handleClick} />
                        {this.state.showDetails ? <Card.Content><HogDetails hog={this.props.hog} /></Card.Content> : null}
                    </Card>
                    <Dropdown text='File'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New' />
                            <Dropdown.Item text='Open...' description='ctrl + o' />
                            <Dropdown.Item text='Save as...' description='ctrl + s' />
                            <Dropdown.Item text='Rename' description='ctrl + r' />
                            <Dropdown.Item text='Make a copy' />
                            <Dropdown.Item icon='folder' text='Move to folder' />
                            <Dropdown.Item icon='trash' text='Move to trash' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Download As...' />
                            <Dropdown.Item text='Publish To Web' />
                            <Dropdown.Item text='E-mail Collaborators' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            )
        }
}

export default HogCard;