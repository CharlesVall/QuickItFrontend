import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { HeaderComponent } from '../header/header.component';
import { QuickIt } from '../models/quick-it';
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'
import { ImageRendererComponent } from '../image-renderer/image-renderer.component';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    ImageRendererComponent,
    HeaderComponent,
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
    ],
  templateUrl: './single-quick-it.component.html',
  styleUrl: './single-quick-it.component.scss'
})

export class SingleQuickItComponent implements OnInit {
  quickIt!: QuickIt;
  quickItDescription!: string;
  buttonSymbole: string = "<-";

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router
              ) {}

  ngOnInit(): void {
    const quickItId = this.route.snapshot.params['id'];
    this.quickIt = this.dataService.getQuickItByID(quickItId);
  }

  onSnap(): void {
    if (this.quickIt.liked == false){
      this.dataService.onSnapQuickItByID(this.quickIt.id,"snap");
    } else {
      this.dataService.onSnapQuickItByID(this.quickIt.id,"unsnap");
    }
  }

  onViewLess(): void {
    this.router.navigateByUrl(`quickit`)
  }
}