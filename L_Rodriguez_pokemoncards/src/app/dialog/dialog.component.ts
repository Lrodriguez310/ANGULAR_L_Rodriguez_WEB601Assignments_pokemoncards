import { Component, OnInit, Inject ,Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

export interface DialogData {
  title: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent implements OnInit {

  @Output() contentAdded = new EventEmitter<Content>();
  
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };
  contentType: string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {DialogData: any, contentType: string }) {    
    this.contentType = data.contentType;
  }

  ngOnInit(): void {
    this.newContent.type = this.data.contentType;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.contentAdded.emit(this.newContent);
    this.dialogRef.close(this.newContent);
  }

}