import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms'
import { countingComponent } from './counting/counting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    countingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
