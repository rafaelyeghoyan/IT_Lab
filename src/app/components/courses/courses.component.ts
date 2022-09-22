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

