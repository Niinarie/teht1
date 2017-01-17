import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() colors: string [] = [];
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;

  showSelector(value: boolean){
    this.isSelectorVisible = value;
  }

  selectColor(color: string){
    this.selected.next(color);
    this.showSelector(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
