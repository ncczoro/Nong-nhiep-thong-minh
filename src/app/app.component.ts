
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public getUsn: string;
  public test: string ='ok chuaaaa';
  constructor( )
  {

  }
  ngOnInit()
  {

  }

  GetUsn(event){
    this.getUsn = event;
    console.log(this.getUsn);
    console.log('this.getUsn');
  }
}
