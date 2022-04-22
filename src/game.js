
class game {
  selectedPokemon= null
  pokemonTypes= "normal fire water electric grass ice fighting poison ground flying psychic bug rock ghost dragon dark steel fairy".split(" ")
  pokemonUrl= null
  questionData= []
  nameData=[]
  score= null
  questions= null
  difficulty= null
  constructor(difficulty) {
    this.difficulty = difficulty
  }

  selectRandomPokemon() {
    let temp = Math.floor(Math.random()*898)

    if( game.nameData.indexOf(temp)>= 0) {
      return game.selectRandomPokemon()
    }
    else {
      return temp
    }
  },

  setPokemonUrl(pokemonIdNo) {
    game.pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdNo}`
    return game.pokemonUrl
  },
}