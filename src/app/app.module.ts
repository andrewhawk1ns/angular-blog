import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ // Routes work based off order, put more specific routes on top
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'archive/:year/:month',
        component:  ArchiveComponent
      },
      {
        path: '**',
        component:  NotFoundComponent
      }
    ]) // Use this to define the root route for the application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
