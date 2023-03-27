import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';

// import { CONTENT } from '../helper-files/contentDB';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = this.CONTENT;
    return {content};
  }

  // genId(content: Content[]): number {
  //   return content.length > 0 ? Math.max(...content.map(c =>
  //   c.id)) + 1 : 2000;
  //   }



  CONTENT:Content[]=[
      {
          id:1,
         title:"Charizard",
         description:"dragon lizard",
          creator:"Luis",
          imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
          type:"fire",
          tags:["Charmander", "Charizard"]
        },
      {
          id:2,
          title:"Blastoise",
          description:"turtle",
          creator:"Luis",
          imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
          type:"water",
          tags:["Squirtle", "Wartortle"]
       },
       {
          id:3,
          title:"venusaur",
         description:"frog",
          creator:"Luis",
          imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
          type:"Plant",
          tags:["Bulbasaur", "Ivysaur"]
        },
        {
         id:4,
         title:"Mewtwo",
        description:"alien",
         creator:"Luis",
         imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
         type:"Plant",
         tags:["Mew", "Two"]
       },
       {
         id:5,
         title:"Happiny",
        description:"frog",
         creator:"Luis",
         imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
         type:"Fire",
         tags:["Took", "Take"]
       },
       {
         id:6,
         title:"Topper",
        description:"frog",
         creator:"Luis",
         imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
         type:"Water",
         tags:["Topper", "frogger"]
       },
       {
         id:7,
         title:"venus",
        description:"frog",
         creator:"Luis",
         imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s",
         type:"Plant",
         tags:["frog", "venus"]
       },
       {
         id:8,
         title:"ven",
        description:"frog",
         creator:"Luis",
         /*imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9TZfhWvUVctdeIdJ9LPrU63DUN6bM8Bh_qOJ8gjn4rtelNELyKf1w&s", */
         type:"Fire",
         tags:["Venum", "Poison"]
       }
      ];
    
  
  
}



