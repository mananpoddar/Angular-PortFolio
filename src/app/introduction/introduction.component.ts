import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { isMobile } from '../app.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  isMobile = isMobile;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Introduction');
  }

  ngOnInit() {
  }

}
