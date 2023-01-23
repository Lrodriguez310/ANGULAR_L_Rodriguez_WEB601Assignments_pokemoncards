import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  
  pokemonCard:Content = {
    id:1,
    title:"Charizard",
    description:"dragon lizard",
    creator:"Luis",
    type:"fire"
  }
  pokemonCard2:Content = {
    id:2,
    title:"Blastoise",
    description:"turtle",
    creator:"Luis",
    type:"water"
  }
  pokemonCard3:Content = {
    id:3,
    title:"venusaur",
    description:"frog",
    creator:"Luis",
    type:"Plant"
  }

myPokemonCards = new ContentList(this.pokemonCard);
  contentList = this.myPokemonCards.getitems();

  

  constructor(){
    this.myPokemonCards.addContent(this.pokemonCard);
    this.myPokemonCards.addContent(this.pokemonCard2);
    this.myPokemonCards.addContent(this.pokemonCard3);
  }
  
  
  
    ngOnInit(): void {
      const div = document.getElementById('pokemonCards');
      console.log(div);
      if(div) {
        div.innerHTML += this.myPokemonCards.printProperties(0);
        div.innerHTML += this.myPokemonCards.printProperties(1);
        div.innerHTML += this.myPokemonCards.printProperties(2);
      }
  
    }
  }









