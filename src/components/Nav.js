import React from 'react'

const Nav = (props) => {


  let toggleShowFavoritesButton = () => {
    if(props.showFavorites === true){
      return "Show All"
    } else {
      return "Show Favorites"
    }
  }

return <div style={{margin: "50px"}}>
<button class="block" onClick={props.toggleShowFavorites}>{toggleShowFavoritesButton()}</button>
</div>
}

export default Nav