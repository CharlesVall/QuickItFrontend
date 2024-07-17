import { Component, Input, OnInit } from '@angular/core';
import { QuickIt } from '../models/quick-it';
import { DataService } from '../services/data.service'
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Router } from'@angular/router';
import { ImageRendererComponent } from '../image-renderer/image-renderer.component';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    ImageRendererComponent,
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
    ],
  templateUrl: './quick-it.component.html',
  styleUrl: './quick-it.component.scss'
})

export class QuickItComponent implements OnInit {
  @Input() quickIt!: QuickIt;

  constructor(private dataService: DataService,
              private router: Router) {
    this.dataService = dataService
  }

  ngOnInit(): void {
  }

  onSnap(): void {
    if (this.quickIt.liked == false){
      this.dataService.onSnapQuickItByID(this.quickIt.id,"snap");
    } else {
      this.dataService.onSnapQuickItByID(this.quickIt.id,"unsnap");
    }
  }

  onViewMore(): void {
    this.router.navigateByUrl(`quickit/${this.quickIt.id}`)
  }
}
