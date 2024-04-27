import React from "react";
import Pokemon from "./Pokemon";
import {FilterSearch, LoadMoreButton, ResetButton} from "./ActionControls";

class FilteredPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadUpto: 10, filter: ''}
    this.loadMore = this.loadMore.bind(this);
    this.reset = this.reset.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  loadMore() {
    this.setState({
      ...this.state,
      loadUpto: this.state.loadUpto + 10
    });
  }

  reset() {
    this.setState({
      ...this.state,
      loadUpto: 10
    });
  }

  handleFilterChange(value) {
    this.setState({...this.state, filter: value});
  }

  filter() {
    return this.props.pokemonDetails
        .filter(({name}) => name.toLowerCase().includes(this.state.filter.toLowerCase()))
        .slice(0, this.state.loadUpto);
  }

  render() {
    const pokemonList = this.filter()
        .map(({pkdx_id, name, art_url}) =>
            <Pokemon key={pkdx_id} name={name} imageUrl={art_url}/>
        );

    return (<div className="pokemon-gallery">
      <FilterSearch value={this.state.filter} onChangeHandler={this.handleFilterChange}/>
      <div className="pokemons-view">{pokemonList}</div>
      <div className="load-and-reset">
        <ResetButton onClick={this.reset}/>
        <LoadMoreButton onClick={this.loadMore}/>
      </div>
    </div>);
  }
}

export default FilteredPokemon;