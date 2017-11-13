import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  obj = {
    id: "1",
    name: "Shweta",
    profession: "Software Engineer"
  }

  success() {
    return "Service successfully run";
  }

}
