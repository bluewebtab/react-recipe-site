import React, { Component} from 'react'
import searchView from '../views/searchView'
import {renderRecipe} from '../views/searchView'
import { stringify } from 'querystring';
import Showcase from './Showcase'




 export default class Recipe extends Component{
  constructor (props) {
    super(props);
    this.captureRecipes = this.captureRecipes.bind(this)
    // this.renderResults = this.renderResults.bind(this)
    this.limitRecipeTitle = this.limitRecipeTitle.bind(this);
    this.createButton = this.createButton.bind(this)
    // this.changePage = this.changePage.bind(this)
    this.state = {
      name: 'ron'
    }
  }

  //  renderRecipe = (recipe)=>{
  //   return (<div>
  //     <li>
  //     <a class="results__link" >

  // {console.log(recipe.recipe_id)}
  //   </a>
                        
  //   </li>
    
          
  //     </div>)
    
  //   }
   
  // captureRecipes(){
  // let arrayRecipes = this.props.globalState.recipes
  // for( let x = 0; x < arrayRecipes.length; x++){
  //  this.renderRecipe(arrayRecipes[x])
  // }
    


  // }



createButton(page, type){
  let types = this.props.globalState.changePage

 if(types == 2 || types == 3 || types == 4){
  return this.props.globalState.pageType.map(item => {
    return(
      <button onClick = { () => item == 'prev' ? this.props.minPage(): this.props.addPage() }  className={`btn-inline results__btn--${item}`} data-goto={`${item === 'prev' ? page  : page }`}>
<span>Page {item === 'prev' ? page -1 : page }</span>

    <svg className="search__icon">
        <use href={`img/icons.svg#icon-triangle-${item === 'prev' ? 'left' : 'right'}`}></use>
    </svg>
</button>

    )
  })
}else if(types == 1 ){
  return(
   <button onClick = { () => this.props.addPage() }  className={`btn-inline results__btn--${type[1]}`} data-goto={`${type[1] === 'prev' ? page : page }`}>
 <span>Page {type[1] === 'prev' ? page  : page }</span>
 
     <svg className="search__icon">
         <use href={`img/icons.svg#icon-triangle-${type[1] === 'prev' ? 'left' : 'right'}`}></use>
     </svg>
 </button>
 
 
 
  )
 


}else if(types == 5){
  return(
   <button onClick = { () => this.props.minPage() }  className={`btn-inline results__btn--${type[0]}`} data-goto={`${type[0] === 'prev' ? page : page }`}>
 <span>Page {type[0] === 'prev' ? page  : page }</span>
 
     <svg className="search__icon">
         <use href={`img/icons.svg#icon-triangle-${type[0] === 'prev' ? 'left' : 'right'}`}></use>
     </svg>
 </button>
 
 
 
  )
 


}




}


limitRecipeTitle = (title, limit = 17) =>{
  
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


  captureRecipes = (recipes,page , resPerPage ) => {

    if(this.props.globalState.recipes != undefined){
      const start = (page-1)*resPerPage;
    const end = page * resPerPage;
    // recipes.slice(start, end).forEach(this.captureRecipes())
    let recipe = recipes.slice(start,end)
    let rec = Object.values(recipe)
    console.log(rec)
      console.log(this.props.globalState.recipes)

      return rec.map((item, i) => {
        return (
          <div className="item"  key = {i} onClick = {() => this.props.changeState(item.recipe_id)} >
          <li >
  <a className="results__link" href={`#${item.recipe_id}`} >
  <figure className="results__fig">
   
      <img src={`${item.image_url}`} alt={`${item.title}`} />
  </figure>
  <div className="results__data">
      <h4 className="results__name">{this.limitRecipeTitle(item.title)}</h4>
      <p className="results__author">{item.publisher}</p>
  </div>
</a>
                    
  </li>

        </div>
        )
      })
      }

    
  }



   


  render () {

    return (
      <div className = "col-xs-3 col-sm-3  col-md-3 col-lg-3 recipe">
          <h1 className= 'recipe__name'>Recipes</h1>
          <div className = "results">
          <ul className = "results__list">
          
          {this.captureRecipes(this.props.globalState.recipes, this.props.globalState.changePage, this.props.globalState.resPage)}
          
          {this.props.globalState.recipes != '' ? this.createButton(this.props.globalState.changePage, this.props.globalState.pageType) : ''}
          </ul>
        </div>
        </div>
        

    
    )
  }
}


