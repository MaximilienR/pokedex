
import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import {POKEMONS  } from './mock-pokemon-list'
//ex 1 changer le titre de l'application (ok)
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
       
})
//ex 2 changer les mots bulbizarre salameche qui sont statique en une liste de pokemon plus détaillé  (ok)
export class AppComponent implements OnInit {
  pokemonList:Pokemon[] =  POKEMONS;
  
//ex 3 changer pokemonname  static en passant par  la liste moke (moyen)
  ngOnInit():void{
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[0])
  }
  selectPokemon(pokemon:Pokemon){
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
