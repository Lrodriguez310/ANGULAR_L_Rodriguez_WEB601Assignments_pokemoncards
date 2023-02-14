import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';

  pokemonCard:Content = {
     id:1,
    title:"Charizard",
    description:"dragon lizard",
     creator:"Luis",
     imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
     type:"fire"
   }
  pokemonCard2:Content = {
     id:2,
     title:"Blastoise",
     description:"turtle",
     creator:"Luis",
     imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
     type:"water"
  }
  pokemonCard3:Content = {
     id:3,
     title:"venusaur",
    description:"frog",
     creator:"Luis",
     imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
     type:"Plant"
   }
   pokemonCard4:Content = {
    id:4,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant"
  }
  pokemonCard5:Content = {
    id:5,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant"
  }
  pokemonCard6:Content = {
    id:6,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant"
  }
  pokemonCard7:Content = {
    id:7,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant"
  }
  pokemonCard8:Content = {
    id:8,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant"
  }

// myPokemonCards = new ContentList(this.pokemonCard);
//   contentList = this.myPokemonCards.getitems();

  

contentArray: Content[];

 constructor(){
  this.contentArray=[this.pokemonCard];
     
     this.contentArray.push(this.pokemonCard2);
     this.contentArray.push(this.pokemonCard3);
     this.contentArray.push(this.pokemonCard4);
     this.contentArray.push(this.pokemonCard5);
     this.contentArray.push(this.pokemonCard6);
     this.contentArray.push(this.pokemonCard7);
     this.contentArray.push(this.pokemonCard8);
  }

  search() {
    const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';

    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }
  
  
  
    ngOnInit(): void {
//       const div = document.getElementById('pokemonCards');
//       console.log(div);
//       if(div) {
//         div.innerHTML += this.myPokemonCards.printProperties(0);
//         div.innerHTML += this.myPokemonCards.printProperties(1);
//         div.innerHTML += this.myPokemonCards.printProperties(2);
//       }
  
    }
  }









