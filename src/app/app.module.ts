import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbDatepickerModule, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from "ngx-bootstrap/modal";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatNativeDateModule} from "@angular/material/core";
import {MatMomentDateModule, MomentDateModule} from "@angular/material-moment-adapter";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CoursesComponent } from './components/courses/courses.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MaterialModule} from "../material.module";
import { MorecoursaboutComponent } from './components/morecoursabout/morecoursabout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {CarouselModule} from "@coreui/angular";
import { AdvantagesComponent } from './components/advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignInComponent,
    CoursesComponent,
    MorecoursaboutComponent,
    AboutUsComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MomentDateModule,
    NgbModalModule,
    BsDatepickerModule,
    MatMomentDateModule,
    AccordionModule,
    AppRoutingModule,
    MatTabsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
