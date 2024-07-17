import { Component, OnInit } from '@angular/core';
import { QuickItListComponent } from '../quick-it-list/quick-it-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    QuickItListComponent,
    HeaderComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  ngOnInit(): void {
  }
}
