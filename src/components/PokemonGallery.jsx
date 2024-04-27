import React from "react";
import Pokemon from "./Pokemon";
import {LoadMoreButton, ResetButton} from "./ActionControls";

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadUpto: 10}
    this.loadMore = this.loadMore.bind(this);
    this.reset = this.reset.bind(this);
  }

  loadMore() {
    this.setState({loadUpto: this.state.loadUpto + 10});
  }

  reset() {
    this.setState({loadUpto: 10});
  }

  render() {
    const {pokemonDetails} = this.props;
    const pokemonList = pokemonDetails
        .slice(0, this.state.loadUpto)
        .map(({pkdx_id, name, art_url}) =>
            <Pokemon key={pkdx_id} name={name} imageUrl={art_url}/>
        );

    return (<div className="pokemon-gallery">
      <div className="pokemons-view">{pokemonList}</div>

      <div className="load-and-reset">
        <ResetButton onClick={this.reset}/>
        <LoadMoreButton onClick={this.loadMore}/>
      </div>
    </div>);
  }
}

export default PokemonGallery;