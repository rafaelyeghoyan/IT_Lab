import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {



  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  seeMore(){
    this.el.nativeElement.querySelector('.teacher .abouet_teacher ul').style.overflow = "auto";
    this.el.nativeElement.querySelector('.teacher .abouet_teacher ul li span .see_more').style.display = "none";
  }

}
