import {Component, ElementRef, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, Validators} from "@angular/forms";

type coursesType ={
  id:number,
  image:string,
  "lesson_number":string,
  "start_date":string,
  price:string,
  "lesson_name":string,
  "about_lesson":string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef?: BsModalRef;
  form = this.fb.group({
    email:['',Validators.required],
    name:['',Validators.required],
    tel:['',[Validators.required]],
    desc:['',Validators.required]
  });
  stars:number[] = [];
  startsLenght = 5;
  courses:coursesType[] = [
    {
      id:1,
      image:'../../../assets/images/students-5ac817434431c4%201.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'PHP FULL STACK COURSE',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:2,
      image:'../../../assets/images/student-2.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'JavaScript FULL STACK COURSE',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:3,
      image:'../../../assets/images/student-3.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'HTML & CSS',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:4,
      image:'../../../assets/images/student-4.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'Ծրագրավորման հիմունքներ',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    }
  ]

  constructor(private modalService: BsModalService, private fb:FormBuilder) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    for (let i = 0 ; i < this.startsLenght ; i ++){
      this.stars.push(i);
    }
  }

}
