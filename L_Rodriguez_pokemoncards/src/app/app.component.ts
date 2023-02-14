import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luis_Rodriguez_mypokemoncards';

  contentItem:Content = {
    id: 1,
      title:"Charizard",
      description:"Fire lizard",
      creator:"Luis",
      imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5/SWSH12PT5_EN_55.png",
      type:"Fire",
      tags:["Charmeleon", "Charmander"]
  };
  contentItem2:Content = {
    id: 2,
    title:"Blastoise",
    description:"water turtle",
    creator:"Luis Rod",
    imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5/SWSH12PT5_EN_46.png",
    type:"water",
    tags:["wartortle", "squirtle"]
  };
  contentItem3:Content = {
    id: 3,
      title:"Venusaur",
      description:"grass frog",
      creator:"Luis",
      imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5GG/SWSH12PT5GG_EN_GG17.png",
      type:"grass",
      tags:["ivysaur", "bulbasaur"]
  };
  contentItem4:Content = {
    id: 4,
    title:"Yveltal",
    description:"Black and Red moth",
    creator:"Luis",
    imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5GG/SWSH12PT5GG_EN_GG44.png",
    type:"Dark and Flying",
    tags:["lifeabsorb", "Yvel"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Deoxys",
    description:"alien pokemon",
    creator:"Luis Rodriguez",
    imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5GG/SWSH12PT5GG_EN_GG24.png",
    type:"psychic",
    tags:["strong", "Alien"]
  };
  contentItem6:Content = {
    id: 6,
      title:"Gliscor",
      description:"bat type pokemon",
      creator:"Luis",
      imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5/SWSH12PT5_EN_105.png",
      type:"Ground and flying",
      tags:["stall", "gligar"]
  };
  contentItem7:Content = {
    id: 7,
      title:"Chansey",
      description:"egg type pokemon",
      creator:"Luis",
      imgURL:"https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH12PT5/SWSH12PT5_EN_105.png",
      type:"Normal",
      tags:["stall", "blissey"]
  };

  contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];

    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
    this.contentArray.push(this.contentItem7);
  }
}

