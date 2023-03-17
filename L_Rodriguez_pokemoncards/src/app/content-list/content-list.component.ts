import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CardserviceService } from '../cardservice.service';






@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList : Content[];
  
  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';

  
 constructor(private cardservice: CardserviceService){
  
  this.contentList= [];
 
  }

  search() {
    const content = this.contentList.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }

  ngOnInit(){
    this.cardservice.getContent().subscribe(content => this.contentList = content)
 
  } 

  addNewContent(newContent:any){
    this.contentList.push(newContent);
    this.contentList = [...this.contentList];
  }

  updateContentInList(contentItem: Content): void {
     this.cardservice.updateContent(contentItem)
    .subscribe(() =>
    console.log("Content updated successfully")
     );
     }

     addContentToList(newContentItem: Content): void {
      this.cardservice.addContent(newContentItem).subscribe(newContentFromServer =>
      this.contentList.push(newContentFromServer));
      console.log('Content added succesfully : ${newContentItem.Title}');
  
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

