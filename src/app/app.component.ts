import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private newService: MyServiceService){
  }

  ngOnInit() {
    console.log(this.newService.success());
    // console.log(this.newService.obj);
    this.newService.getData();
  }

}
