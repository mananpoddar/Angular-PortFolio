import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { blackHeader } from '../header/header.component';
import * as $ from 'jquery';
import { isMobile } from '../app.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact Me');
  }

  ngOnInit() {
    blackHeader();
    // $('.contact .nav-top a').click(aboutInit);
  }

}
