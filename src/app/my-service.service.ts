import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyServiceService {

  constructor(private http: Http) { }

  getData(){
    this.http.get('data/student.json').map(
      (response)=> response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }

  // In above function map is used to get response in json format and so to use it later

  obj = {
    id: "1",
    name: "Shweta",
    profession: "Software Engineer"
  }

  success() {
    return "Service successfully run";
  }

}
