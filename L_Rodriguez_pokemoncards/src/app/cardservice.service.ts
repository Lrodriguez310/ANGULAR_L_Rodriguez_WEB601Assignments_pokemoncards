import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService) { }
  
  getPokemonCards(): Observable<Content[]> {
    const cards = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return cards;
  }
  getSpecificCard(id : number): Observable<Content[]>{
    const card = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(card)
  }


  // getClickedCard(cardId:number) {
  //   const Clickedcard = CONTENT.filter(obj => obj.id == cardId);
  //   this.messageservice.add("Card Retrieved at id" + cardId)
  //   return of(Clickedcard)
  // }

 
}