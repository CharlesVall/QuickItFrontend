import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router'
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { interval, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      AsyncPipe,
      RouterOutlet,
      ConnexionPageComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  interval$! : Observable<string>;

  ngOnInit(): void {

  }

  logger(text: string) {
    console.log(`Log : ${text}`);
  }
}
