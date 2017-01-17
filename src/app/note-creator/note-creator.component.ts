import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent implements OnInit {
  @Output() createNote = new EventEmitter();
  colors: string[] = ['#fff','#ffccaa', '#e89cc3', 'lightblue', '#c3e89c', '#c5b9cf'];
  newNote = {
    title: '',
    value: '',
    color: 'white'
  }

  fullForm: boolean = false;

  onCreateNote(){
    const {title, value,color} = this.newNote;

    if (title && value){
      this.createNote.next({title,value,color});
    }

    this.reset();
    this.toggle(false);
  }

  reset(){
    this.newNote = {
    title: '',
    value: '',
    color: 'white'
    }
  }

  toggle(value: boolean){
    this.fullForm = value;
  }

  onColorSelect(color: string){
    this.newNote.color = color;
  }
  constructor() { }

  ngOnInit() {
  }

}
