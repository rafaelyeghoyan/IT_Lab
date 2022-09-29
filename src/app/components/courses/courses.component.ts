import {Component, ElementRef, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbCalendar, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  closeResult = '';
  model: NgbDateStruct | any;
  date: {year: number, month: number} | any;
  selected!: Date | null;
  coursesInfo:any[] = [
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
    },
    {
      id:5,
      image:'../../../assets/images/students-5ac817434431c4%201.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'Node.js',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:6,
      image:'../../../assets/images/students-5ac817434431c4%201.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'Angular',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:7,
      image:'../../../assets/images/student-2.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'MongoDB',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    },
    {
      id:8,
      image:'../../../assets/images/student-3.png',
      "lesson_number": '30 դաս',
      "start_date":'20․05․2022',
      price: '30.000 AMD',
      "lesson_name":'MySQL',
      "about_lesson":'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն'
    }
  ]
  comingCourses:any[] = [
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

  constructor(private el:ElementRef,private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

