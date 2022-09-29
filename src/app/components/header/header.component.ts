import {Component, Input, OnInit} from '@angular/core';
type routeType = {
  id: number;
  title: string;
  rout: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() style!: string;
  menuIsOpening = false;
  menuList: routeType[] = [
    {
      id:1,
      title:"Գլխավոր",
      rout:"/home"
    },
    {
      id:2,
      title:"Մեր մասին",
      rout:"/about-us"
    },
    {
      id:3,
      title:"Դասընթացներ",
      rout:"/courses"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
  openDropDown(): void {
    this.menuIsOpening = !this.menuIsOpening;
  }

  onClickedOutside(): void {
    this.menuIsOpening = false;
  }
}
