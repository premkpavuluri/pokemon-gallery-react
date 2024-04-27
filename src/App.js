import './App.css';
import './styles.css'
import * as PokemonDetails from './resources/pokemon.json'
import PokemonGallery from "./components/PokemonGallery";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (<div className="App">
    <PageTitle title={'Pokemon Gallery'}/>
    <PokemonGallery pokemonDetails={PokemonDetails.default}/>
  </div>);
}

export default App;
