import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  constructor() { }

  ngOnInit() {
  }

  onChecked() {
    this.checked.next(this.note);
  }


}
