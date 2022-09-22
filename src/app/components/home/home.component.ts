import {Component, ElementRef, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, Validators} from "@angular/forms";

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

  constructor(private modalService: BsModalService, private fb:FormBuilder,private el:ElementRef) {
    // this.el.nativeElement.querySelector('.modal-content').style.width ='616px';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

  }

}
