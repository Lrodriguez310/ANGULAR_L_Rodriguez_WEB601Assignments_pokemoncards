import { Component,OnInit } from '@angular/core';
import { CardserviceService } from '../cardservice.service';
import { Content } from "../helper-files/content-interface";
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  contentId: number;
  contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private cardservice : CardserviceService, private messageservice:MessageService) {
    this.contentId = this.route.snapshot.params['id'];
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardservice.getContentById(id).subscribe(item => {
      this.contentItem = item;
      this.messageservice.add("Showing Content of Id " +id +" and Title "+this.contentItem.title)
    });
  }

}
