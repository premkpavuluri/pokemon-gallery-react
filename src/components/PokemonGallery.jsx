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

  sliceByCount() {
    return this.props.pokemonDetails
        .slice(0, this.state.loadUpto);
  }

  render() {
    const pokemonList = this.sliceByCount()
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