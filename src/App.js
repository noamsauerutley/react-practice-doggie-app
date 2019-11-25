import React from 'react';
import './App.css';
import Nav from './components/Nav'
import DogList from './components/DogList'

class App extends React.Component{
  state ={
    dogs: [],
    favoriteDogs: [],
    showFavorites: false
  }
  
  async componentDidMount(){
    let rawDoggies = await fetch('https://random.dog/doggos')
    let parsedDoggies = await rawDoggies.json()
    let filteredDoggies = parsedDoggies.filter(dog => {
      const extension = dog.split(".")[1]
      return extension !== "mp4"
    })
    this.setState({
      dogs: filteredDoggies
    })
  }

  toggleDogFavorite = (dog) => {
    console.log(dog)
    if (this.state.favoriteDogs.includes(dog)) {
      const updatedFavorites = this.state.favoriteDogs.filter(fave => fave !== dog)
      this.setState({ favoriteDogs: updatedFavorites })
    } else {
      const currentFaves = [...this.state.favoriteDogs];
      this.setState({
        favoriteDogs: [...currentFaves, dog]
      });
    }
  }


  toggleShowFavorites = () => {
    this.setState({
      showFavorites: !this.state.showFavorites
    })
  }

  selectDisplayedDogs = () =>{
    if(this.state.showFavorites===false){
      return this.state.dogs
    } else {return this.state.favoriteDogs}
  }

 
  render(){
    return (
      <div>
      < Nav  toggleShowFavorites={this.toggleShowFavorites} toggleShowFavoritesButton={this.toggleShowFavoritesButton} showFavorites={this.state.showFavorites}/>
      < DogList dogs={this.selectDisplayedDogs()} toggleDogFavorite={this.toggleDogFavorite} favoriteDogs={this.state.favoriteDogs}/>
      </div>
    )
  }
}

export default App;
