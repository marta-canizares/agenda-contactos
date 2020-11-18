import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';

// PIPES
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ListContactComponent,
    AddContactComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
