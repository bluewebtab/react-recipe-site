import axios from 'axios'

export default class SearchRecipes{
  constructor(query){
    this.query = query
  }

  async getResults(){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '235a55eb9def0283a2cc292f3b6b82da';
   try{ 
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`)
    this.result = res.data.recipes
    // console.log(this.result);
  } catch(error){
    alert(error);
  }
}

}