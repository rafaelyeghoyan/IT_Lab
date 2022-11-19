import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

type teacherType = [{
  id:number,
  img:string,
  name:string,
  "cours_name":string,
  "about_teacher": any[]
}]

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  teachersInfo: teacherType[] = [
    [{
      id: 1,
      img: "../../../assets/img/Rectangle%2054.png",
      name: 'Անի Արամյան',
      "cours_name": "Ծրագրավորման հիմունքներ",
      "about_teacher": [
        {
          "list_icon": '../../../assets/img/circle-check.png',
          "list_text": "Ծրագորավորման 15 տարվա փորձ"
        },
        {
          "list_icon": '../../../assets/img/circle-check.png',
          "list_text": "Դիպլոմային աշխատանքների ղեկավարում"
        },
        {
          "list_icon": '../../../assets/img/circle-check.png',
          "list_text": "Քննական հանձնաժողովների նախագահում"
        },
        {
          "list_icon": '../../../assets/img/circle-check.png',
          "list_text": "Դասավանդման տարիների փորձ"
        }
      ]
    }],
    [
      {
        id: 2,
        img: "../../../assets/img/Rectangle%20544.png",
        name: "Գուրգեն Ղարիբյան",
        "cours_name": "Full stack PHP դասընթացի դասընթացավար",
        "about_teacher": [
          {
            "list_icon": '../../../assets/img/circle-check.png',
            "list_text": "Գուրգենը ծրագրավորման ոլորտում ավելի քան 15 տարվա փորձ ունի։"
          }, {
            "list_icon": '../../../assets/img/circle-check.png',
            "list_text": "Հայաստանի Մայքրոսոֆթ ինովացիոն կենտրոնի և Գյումրու տեղեկատվական տեխնոլոգիաների\n" +
              "                  կենտրոնի (GITC) կողմից համատեղ իրականացվող\n" +
              "                  «Ծրագրավորման դասընթացներ Գյումրիում» ծրագրի շրջանակներում եղել է\n" +
              "                  «Full Stack with JavaScript» դասընթացի թրեյներ։"
          },
          {
            "list_icon": '../../../assets/img/circle-check.png',
            "list_text": "Դիպլոմային և կուրսային աշխատանքների վերահսկում Հայաստանի ազգային\n" +
              "                  պոլիտեխնիկական համալսարանի Գյումրու մասնաճյուղում,\n" +
              "                  Շիրակի պետական համալսարանում և Շիրակի պետական տարածքային քոլեջում:"
          },
          {
            "list_icon": '../../../assets/img/circle-check.png',
            "list_text": "Շիրակի պետական համալսարանի բնագիտության և մաթեմատիկական ֆակուլտետի խորհրդի անդամ է",
            "see_more": "...ավելին"
          }
        ]
      }
    ]
  ]
  seemore: Boolean = false;
  moreButton :Boolean = true;
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  seeMore(openSeeMore:Boolean , moreButton:Boolean) {
    this.seemore = openSeeMore;
    this.moreButton = moreButton;
  }

  ngAfterViewInit(): void {

  }
}
