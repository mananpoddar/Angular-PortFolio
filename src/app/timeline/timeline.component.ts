import { Component, OnInit } from '@angular/core';
import { whiteHeader } from '../header/header.component';
import { isMobile } from '../app.component';
import { Title } from '@angular/platform-browser';
declare const require;

const TIMELINE = {
  "timeline":[
    {
      date:" ",
      time:" ",
      heading:"IIT Bombay <br> -Fellowship at FOSSEE 2019- ",
      data:" "
    },
    {
      date:" ",
      time:" ",
      heading:" ",
      data:" "
    },
    {
      date:" ",
      time:" ",
      heading:" ",
      data:" "
    },
    {
      date:" ",
      time:" ",
      heading:" ",
      data:" "
    },
    {
      date:" ",
      time:" ",
      heading:" ",
      data:" "
    }
  ]
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  isMobile = isMobile;
  timeline = TIMELINE.timeline;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Timeline');
    console.log(this.timeline);
    console.log(TIMELINE);
  }

  ngOnInit() {
  }

}
