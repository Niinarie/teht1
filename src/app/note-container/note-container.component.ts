import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss']
})
export class NoteContainerComponent implements OnInit {

  notes = [
    {title: 'a new note', value: 'there is text', color: 'lightblue'},
    {title: 'old note', value: 'wash laundry', color: '#e89cc3'},
    {title: 'oldest note', value: 'buy food', color: '#ffccaa'}];

  onNoteChecked(i: number){
    this.notes.splice(i, 1);
  }

  onCreateNote(note){
    this.notes.push(note);
  }

  constructor() { }

  ngOnInit() {
  }

}
