import React, { Component} from 'react'







 export default class Showcase extends Component{
  constructor () {
    super()
    this.renderMainFood = this.renderMainFood.bind(this)
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }

  


  renderMainFood = (recipes) =>{


  
    let recipe = Object.values(recipes)
  
  
    return recipe.map((recipe, i) => {
    
     
    if(this.props.globalState.showbox == recipe.recipe_id){

    
  
    
    console.log(recipe)
  
    
   
    
        return(<div key = {i}>
          
  
      
          <figure className="recipe__fig">
        <img src={`${recipe.image_url}`} alt={`${recipe.title}`} className="recipe__img" />
        <h1 className="recipe__title">
            <span>{recipe.title}</span>
        </h1>
    </figure>
    <div className="recipe__details">
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes"></span>
            <span className="recipe__info-text"> minutes</span>
        </div>
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people"></span>
            <span className="recipe__info-text"> servings</span>
  
            <div className="recipe__info-buttons">
                <button className="btn-tiny btn-decrease">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button className="btn-tiny btn-increase">
                    <svg>
                        <use href="image/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>
  
        </div>
       <button className="recipe__love" onClick = {() => this.props.saveInfo(recipe)}>
            <svg className="header__likes">
                <use href="img/icons.svg#icon-heart"></use>
            </svg>
        </button>
    </div>
  
  
  
    <div className="recipe__ingredients">
        <ul className="recipe__ingredient-list">
          
  
  
            
        </ul>
  
        <button className="btn-small recipe__btn recipe__btn--add">
            <svg className="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>
  
    <div className="recipe__directions">
        <h2 className="heading-2">How to cook it</h2>
        <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__by">{recipe.publisher}</span>. Please check out directions at their website.
        </p>
        <a className="btn-small recipe__btn" href={`${recipe.source_url}`} target="_blank">
            <span>Directions</span>
            <svg className="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
  
        </a>
    </div>
  
    
   </div> )
        }
    })
  
  
  }
  
  


   
  render () {
    return (
      
      <div className = "col-xs-6 col-sm-6  col-md-6 col-lg-6 show-case">
      {console.log(this.props.globalState)}
    {this.props.globalState.showbox != '' ? this.renderMainFood(this.props.globalState.recipes) : console.log('sorry')}
      </div>
      
    )
  }
}


