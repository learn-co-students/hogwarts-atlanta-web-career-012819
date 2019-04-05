import React from 'react'

export default function HogCard(props) {
    const {name, medal, specialty, greased, weight, img} = props.hog
    console.log('img', img)
    const hogImg = require(`../hog-imgs/${img}`)
  return (
    <div className="pigTile">
        <div className="image">
            <img src={hogImg} alt="hog" />
        </div>
        <div className="content">
            <h3>{name}</h3>
            <div>
                Higest Medal: {medal}
            </div>
            <div className="normalText">
                Specialty: {specialty}
            </div>
            <div>
                {greased? "Greased" : "Non-Greased"}
            </div>
            <div>
                Weight: {weight}
            </div>
        </div>
    </div>
  )
}
