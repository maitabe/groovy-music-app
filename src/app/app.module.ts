import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MainComponent } from "./components/main/main.component";
import { BandsMusicService } from './service/band.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [BandsMusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
