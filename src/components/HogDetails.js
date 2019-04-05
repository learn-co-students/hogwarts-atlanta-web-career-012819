import React from 'react'

export default function HogDetails(props) {
    const {specialty, greased, weight, medal} = props.hog
  return (
    <div>
        <div>
            Higest Medal: {medal}
        </div>
        <div className="">
            Specialty: {specialty}
        </div>
        <div>
            {greased? "Greased" : "Non-Greased"}
        </div>
        <div>
            Weight: {weight}
        </div>
    </div>
  )
}
