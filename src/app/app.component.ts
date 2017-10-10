import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inp: string;
  out: string;
  out2: string;
  constructor(public http: Http){

  }

  convert(){
    if(this.inp==null || this.inp==""){
      return;
    }
    var url = "https://rsa-nodejs.herokuapp.com/";
    var t = {
      'inp': this.inp
    };
    this.http.post(url,t).subscribe(res => {
      this.out = res.json().res.encrypt;
      this.out2 = res.json().res.decrypt;
    });
  }
}
