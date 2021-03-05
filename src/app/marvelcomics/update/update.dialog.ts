import {Component, EventEmitter} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  templateUrl: './update.dialog.html',
  styleUrls: ['./update.dialog.sass']
})
export class UpdateDialog {

  openArcEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<UpdateDialog>) {
  }

  onLink(arc: string) {
    this.openArcEventEmitter.emit(arc);
  }

}
