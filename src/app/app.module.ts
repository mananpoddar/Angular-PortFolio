import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { FivehundredComponent } from './fivehundred/fivehundred.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectsComponent } from './projects/projects.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Manan Poddar',
      animation: 'HomePage'
    },
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: {
      title: 'Introduction',
      animation: 'IntroductionPage'
    }
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    data: {
      title: 'Timeline',
      animation: 'TimelinePage'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
      animation: 'ProjectsPage'
    }
  },
  {
    path: 'contact',
    component: ContactusComponent,
    data: {
      title: 'Contact Me',
      animation: 'ContactUsPage'
    }
  },
  {
    path: '404',
    component: FourohfourComponent,
    data: {
      title: 'Error 404',
      animation: ''
    }
  }, {
    path: '500',
    component: FivehundredComponent,
    data: {
      title: 'Error 500',
      animation: ''
    }
  },
  { path: '**', component: FourohfourComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    BackgroundComponent,
    FourohfourComponent,
    FivehundredComponent,
    IntroductionComponent,
    TimelineComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
