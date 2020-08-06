import React  from 'react';
import CharacterContainer from './CharacterContainer'
import './App.css';
import Filters from './Filters'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: [],
      filters: {
       gender: 'all' 
      }
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          this.setState({
            isLoaded: true,
            characters: data.results
          });
        }
    
      )
  }

  onChangeType = (event) =>{
    this.setState({
      filters: {
        gender: event.target.value
      }
    })
  }

  filterCharacters = () => {
    let newArray = [...this.state.characters]
    let gender = this.state.filters.gender
    if(gender !== 'all'){
      newArray = newArray.filter(character => character.gender === gender)
    }
    return newArray 
  }

  

  render() {
    const { error, isLoaded, characters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Filters onChangeType={this.onChangeType} />  
          <CharacterContainer characters={this.filterCharacters()} /> 
        </div>
      );
    }
  }
}
   

export default App



