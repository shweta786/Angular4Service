import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
