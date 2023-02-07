import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  @Input() content: Content;
  @Input() isFirst: Boolean;

  constructor() {
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
  console.log("Image Url: " + this.content.imgURL + "Image Title:" + this.content.title);
}
}


