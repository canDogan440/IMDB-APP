import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Top250MoviesComponent } from './top250-movies/top250-movies.component';
import { MovieDetailsComponent } from './top250-movies/movie-details/movie-details.component';
import { FullcastComponent } from './top250-movies/movie-details/fullcast/fullcast.component';
import { ImagesComponent } from './top250-movies/movie-details/images/images.component';
import { PostersComponent } from './top250-movies/movie-details/posters/posters.component';
import { TrailersComponent } from './top250-movies/movie-details/trailers/trailers.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Top250MoviesComponent,
    MovieDetailsComponent,
    FullcastComponent,
    ImagesComponent,
    PostersComponent,
    TrailersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: Top250MoviesComponent,
      },

      {
        path: 'details',
        component: MovieDetailsComponent,
      },

      {
        path: 'fullcast',
        component: FullcastComponent,
      },
      {
        path: 'posters',
        component: PostersComponent,
      },
      {
        path: 'trailer',
        component: TrailersComponent,
      },
      {
        path: 'images',
        component: ImagesComponent,
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent ,
      // },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
