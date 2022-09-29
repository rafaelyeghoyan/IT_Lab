import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ItLab';
  hello = ''
  constructor(
    private route:Router
  ) {
  }
  ngOnInit(): void {
    this.route.events.subscribe((res=>{
      if (res  instanceof NavigationEnd){
        if(res.url === '/sign-in' || res.url === '/morecourse'){
          this.hello='blue'
        }else{
          this.hello=''
        }
      }
    }))
  }
}
