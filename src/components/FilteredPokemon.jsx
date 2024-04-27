import React from "react";
import {FilterSearch} from "./ActionControls";
import PokemonGallery from "./PokemonGallery";

class FilteredPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''}
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value) {
    this.setState({...this.state, filter: value});
  }

  filter() {
    return this.props.pokemonDetails
        .filter(({name}) => name.includes(this.state.filter))
  }

  render() {
    return (<div className="pokemon-gallery">
      <FilterSearch value={this.state.filter} onChangeHandler={this.handleFilterChange}/>
      <PokemonGallery pokemonDetails={this.filter()}/>
    </div>);
  }
}

export default FilteredPokemon;