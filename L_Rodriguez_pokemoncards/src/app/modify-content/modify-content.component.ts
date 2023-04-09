import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CardserviceService } from '../cardservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogComponent } from '../dialog/dialog.component';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  @Output() contentAdded = new EventEmitter<Content>();

  newContentItem: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
    id: null
  }

  constructor(private cardservice: CardserviceService, private dialog: MatDialog,private messageservice: MessageService) {}

  addContent(): void {
    this.cardservice
      .addContent(this.newContentItem)
      .subscribe(content  => { 
       // console.log('addContent() called emit'); 

        this.contentAdded.emit(content);
 
        this.newContentItem = {
          id: null,
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: [],
        };

      });

    }

    openDialog(): void {
      const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
        width: '500px',
        data: { title: 'Add Book' } 
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.bookService.addContent(result).subscribe(() => {
        //   this.messagesService.add(`Content added: ${result.title}`);
        //   this.contentAdded.emit(result);
        // });
        this.messageservice.add(`Content added: ${result.title}`);
        this.contentAdded.emit(result);
        this.cardservice.addContent(result).subscribe();
      }
      dialogRef.componentInstance.contentAdded.subscribe((content: Content) => {
        console.log(`Content added: ${content.title}`);
        this.contentAdded.emit(content);
      });
    });
  }

}
