import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
