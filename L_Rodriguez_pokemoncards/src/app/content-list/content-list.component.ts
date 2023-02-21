import { style } from '@angular/animations';
import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 /*  @Input() content: Content;
  @Input() isFirst: Boolean; */

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
    type:"fire",
    tags:["Charmander", "Charizard"]
  }
 pokemonCard2:Content = {
    id:2,
    title:"Blastoise",
    description:"turtle",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"water",
    tags:["Squirtle", "Wartortle"]
 }
 pokemonCard3:Content = {
    id:3,
    title:"venusaur",
   description:"frog",
    creator:"Luis",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
    type:"Plant",
    tags:["Bulbasaur", "Ivysaur"]
  }
  pokemonCard4:Content = {
   id:4,
   title:"Mewtwo",
  description:"alien",
   creator:"Luis",
   imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
   type:"Plant",
   tags:["Mew", "Two"]
 }
 pokemonCard5:Content = {
   id:5,
   title:"Happiny",
  description:"frog",
   creator:"Luis",
   imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
   type:"Fire",
   tags:["Took", "Take"]
 }
 pokemonCard6:Content = {
   id:6,
   title:"Topper",
  description:"frog",
   creator:"Luis",
   imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
   type:"Water",
   tags:["Topper", "frogger"]
 }
 pokemonCard7:Content = {
   id:7,
   title:"venus",
  description:"frog",
   creator:"Luis",
   imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
   type:"Plant",
   tags:["frog", "venus"]
 }
 pokemonCard8:Content = {
   id:8,
   title:"ven",
  description:"frog",
   creator:"Luis",
   /*imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s", */
   type:"Fire",
   tags:["Venum", "Poison"]
 };


 contentArray: Content[];
  
 constructor(){
   /*  this.myFootballPlayers.addContent(this.footballPlayer);
    this.myFootballPlayers.addContent(this.footballPlayer2);
    this.myFootballPlayers.addContent(this.footballPlayer3); */
    this.contentArray = [this.pokemonCard];
    /*  this.contentArray.push(this.contentItem); */
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

  ngOnInit():void{
   /*  const card = document.getElementById('pokemonCards');
    console.log(card);
    if(card){
      card.innerHTML += this.pokemonCards.printProperties(0);
      card.innerHTML += this.pokemonCards.printProperties(1);
      card.innerHTML += this.pokemonCards.printProperties(2);
    } */
  } 


}












  /* constructor() {
    this.isFirst=false;
    this.content = {
      id: 1,
      title:"Charizard",
      description:"fire lizard",
      creator:"Luis Rodriguez",
      imgURL:"https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png",
      type:"Fire",
      tags:["Charmeleon", "Charmander"]
    };
}
ngOnInit(): void {


}
imageText() {
  console.log( "Image ID: " + this.content.id  +  " Image Url: " + this.content.imgURL + " Image Title: " + this.content.title);
}
}
 */

