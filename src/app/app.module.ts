import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BarComponent } from './bar/bar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BarComponent,
    NoteCardComponent,
    NoteContainerComponent,
    NoteCreatorComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
