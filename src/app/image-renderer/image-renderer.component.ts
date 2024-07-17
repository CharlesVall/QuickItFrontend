import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-renderer',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './image-renderer.component.html',
  styleUrl: './image-renderer.component.scss'
})
export class ImageRendererComponent implements OnInit{
  @Input() src: string | undefined;


  ngOnInit(): void {
  }
}
