import React,{Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'

/*function App() {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox/>
      <CardList robots = {robots}/>
    </div>
  );
}

export default App; */

class App extends Component{

  constructor(){
    super()
    this.state = {
        robots : [],
        searchfield : ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}));
    //console.log({robots});
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length === 0){
      return(
        <h1>Loading</h1>
        );
    }else{

    return(
      <div className = 'tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange =   {this.onSearchChange}/>
        <Scroll>
          <CardList robots = {filteredRobots}/>
        </Scroll>
      </div>);
    }
    
  }
}

export default App; 