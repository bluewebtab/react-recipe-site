import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Top from './models/Top'
import axios from 'axios'
import Recipe from './models/Recipe'
import {elements, renderLoader, clearLoader } from './base';
import SearchRecipes from './searchRecipe'
import * as searchView from './views/searchView'
import Showcase from './models/Showcase'





class Index extends Component {
  constructor (props) {
    super(props);
    this.controlSearch = this.controlSearch.bind(this)
    this.getRecipes = this.getRecipes.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.changeState = this.changeState.bind(this)

    

    this.state = {
      food: '',
      name: 'Joe',
      recipes: '',
      showbox: ''
    }
  }

 changeState(change){
   this.setState({showbox: change})
 }

 

  
  getRecipes(e){
    this.setState({food: e.target.value})
    
 }
 handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({food: e.target.value})
      this.controlSearch()
    }
  }


 controlSearch = async ()=>{
    const query = this.state.food
    console.log(query)
  if(query){
      
      
        // 2) New search object and add it to state
          const search = new SearchRecipes(query);
          
        //3)Prepare UI for results
     
  
        //4)Search for recipes
       await search.getResults()
      
        //5) Render results on UI
        // console.log(searchView.renderResults(search.result))   
           console.log(search.result)
           
           this.setState({recipes: search.result})
          //  console.log(searchView.renderRecipe(search.result))
          console.log(this.state)
           
          this.clearInput();

        
          
          

    }
  }


   clearInput = () => {
    this.setState({food: ''})
  }
  
 
  

 

 
  






  render () {
    return (<div>
      {console.log(this.state.recipes)}

       <Top  globalState = {this.state} controlSearch = {this.controlSearch} getRecipes = {this.getRecipes} handleKeyPress = {this.handleKeyPress}/>
       <div className = "box">
       <Recipe globalState = {this.state} changeState = {this.changeState} getRecipes = {this.getRecipes} controlSearch = {this.controlSearch} renderMainFood= {this.renderMainFood}/>
       <Showcase globalState = {this.state} />
       </div>
       </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Index />, app)
