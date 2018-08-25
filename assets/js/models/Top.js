import React, { Component} from 'react'
import {elements} from '../base'
import Recipe from './Recipe'




export default class Top extends Component{
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: 'Joe'
    }
  }

  handleSubmit(event){
      event.preventDefault()
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
              <div className="likes__icon">
              <i className=" icon-heart far fa-heart"></i>
              
              </div>
          </div>
          <div className="likes__panel">
              <ul className="likes__list">
              
              
              </ul>

          </div>
      </div>
      </div>
  </header>
      
        
      </div>
    )
  }
}


