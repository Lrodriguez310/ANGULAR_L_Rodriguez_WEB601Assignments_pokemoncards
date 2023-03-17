import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  // getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService, private http: HttpClient) { }
  

 
  // getPokemonCards(): Observable<Content[]> {
  //   const cards = of(CONTENT)
  //   this.messageservice.add('content array loaded!');
  //   return cards;
  // }
  // getSpecificCard(id : number): Observable<Content[]>{
  //   const card = CONTENT.filter(obj=>obj.id == id);
  //   this.messageservice.add('Content item at :' + id )
  //   return of(card)
  // }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

    getContent() : Observable<Content[]>{
      return this.http.get<Content[]>("api/content");
    }

     addContent(newContentItem: Content): Observable<Content>{
      return this.http.post<Content>("api/content",
      newContentItem, this.httpOptions);
     }

      updateContent(contentItem: Content): Observable<any>{
        return this.http.put("api/content", contentItem,
        this.httpOptions);
        }
        


  // getClickedCard(cardId:number) {
  //   const Clickedcard = CONTENT.filter(obj => obj.id == cardId);
  //   this.messageservice.add("Card Retrieved at id" + cardId)
  //   return of(Clickedcard)
  // }

 
}