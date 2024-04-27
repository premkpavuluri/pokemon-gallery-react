import './App.css';
import './styles.css'
import * as PokemonDetails from './resources/pokemon.json'
import FilteredPokemon from "./components/PokemonGallery";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (<div className="App">
    <PageTitle title={'Pokemon Gallery'}/>
    <FilteredPokemon pokemonDetails={PokemonDetails.default}/>
  </div>);
}

export default App;
