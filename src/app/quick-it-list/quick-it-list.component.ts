import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuickIt } from '../models/quick-it';
import { QuickItComponent } from '../quick-it/quick-it.component'
import { DataService } from '../services/data.service'
import { Subject, interval, tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-quick-it-list',
  standalone: true,
  imports: [
    QuickItComponent
    ],
  templateUrl: './quick-it-list.component.html',
  styleUrl: './quick-it-list.component.scss'
})
export class QuickItListComponent implements OnInit, OnDestroy {
  quickItList!: QuickIt[];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.quickItList = this.dataService.getQuickItList()
  }

  ngOnDestroy(): void {
  }
}
