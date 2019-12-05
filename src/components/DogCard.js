import React from 'react'

const dogCardStyles = {
    width: "300px", 
    margin: "20px"
};

const DogCard = (props) => {
    let dog = props.dog
    const imgURL = `https://random.dog/${dog}`

 
    let faveStatus = (dog) => {
        if (props.favoriteDogs.includes(dog)){
            return "Remove from Faves?"
        } else {
            return "Add to Faves"
        }
    }
    
    const handleClick = (e) => props.toggleDogFavorite(dog)

    return(
       <div style={dogCardStyles}>
            <img src={imgURL} height="150px" style={{display:"block", margin: "0 auto"}} />
            <button onClick={handleClick} >{faveStatus(dog)}</button>
        </div>
    )
}

export default DogCard