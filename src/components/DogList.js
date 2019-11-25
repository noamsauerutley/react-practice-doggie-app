import React from 'react'
import DogCard from './DogCard'

const DogList = (props) => {

    const dogCards = props.dogs.map(dog => {
        return < DogCard dog={dog} toggleDogFavorite={props.toggleDogFavorite} favoriteDogs={props.favoriteDogs}/>
    })

return <div className="container">{dogCards}</div>
}

export default DogList