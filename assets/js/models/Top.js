import React, { Component} from 'react'
import {elements} from '../base'
import Recipe from './Recipe'




export default class Top extends Component{
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.savedRecipes = this.savedRecipes.bind(this)
    this.limitTitle = this.limitTitle.bind(this)
    this.state = {
      name: 'Joe'
    }
  }

  handleSubmit(event){
      event.preventDefault()
  }

  limitTitle = (title, limit = 17) =>{
  if(title){
    let recipeTitle = [];
    if(title.length > limit){
      title.split(' ').reduce((acc, cur) => {
        
          if(acc + cur.length <= limit){
            recipeTitle.push(cur)
            
  
          }
          return acc + cur.length;
      }, 0);
      return `${recipeTitle.join(' ')} ...`
      
  
    }
    return title;

  }
  
  }
  
  

  savedRecipes(){
    let  recipes = this.props.globalState.savedItems
     return recipes.map((recipe, i) => { 
     return (<li>
<a className="likes_link" href={`#${recipe.recipe_id}`} >
<figure className="likes__fig">
 
    <img src={`${recipe.image_url}`} alt={`${recipe.title}`} />
</figure>
<div className="likes_data">
    <h4 className="results__name item__likes">{this.limitTitle(recipe.title)}</h4>
    <p className="results__author item__likes">{recipe.publisher}</p>
</div>
</a>
                  
</li>)    
    })
  }
  

 

  

  

  
        
  
  render () {
    
    return (
      <div>
      <header className=" row header">
      <div className= 'col-xs-4 col-sm-4 col-md-4 col-lg-4'>
      <h1 className=" header__logo" >RecipeFinder</h1>
      
      </div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <form className="search" onSubmit = {this.handleSubmit}>
    
          <input type="text" ref = "Recipes" value={this.props.globalState.food} onChange = {this.props.getRecipes} onKeyPress = {this.props.handleKeyPress} className="search__field"  placeholder="Search over 1,000,000 recipes..." />
          <div className=" search__btn-header" onClick = {this.props.controlSearch}>
            {console.log(this.props.globalState.food)}
              <div className="search__icon">
              <i className="icon-search fas fa-search"></i>              
              </div>
              
          </div>
      </form>
      </div>
      <div className = "col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="  likes">
          <div className="likes__field">
              
          </div>
          <div className="likes__panel">
          <div className="likes__icon" onClick = {() => this.props.showItem()}>
          <i className=" icon-heart far fa-heart"></i>
         
          </div>
              <ul className="likes__list">
              
              {this.props.globalState.showItems == true && this.props.globalState.savedItems !== '' ? this.savedRecipes() : console.log('nope')}

              
              </ul>

          </div>
      </div>
      </div>
  </header>
      
        
      </div>
    )
  }
}


