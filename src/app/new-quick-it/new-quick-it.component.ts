import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { ImageRendererComponent } from '../image-renderer/image-renderer.component';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { QuickIt } from '../models/quick-it';

@Component({
  selector: 'app-new-quick-it',
  standalone: true,
  imports: [
    UpperCasePipe,
    AsyncPipe,
    ReactiveFormsModule,
    HeaderComponent,
    ImageRendererComponent
  ],
  templateUrl: './new-quick-it.component.html',
  styleUrl: './new-quick-it.component.scss'
})
export class NewQuickItComponent implements OnInit{

  quickItForm!: FormGroup;
  imagePreview$!: Observable<any>;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private dataService: DataService
  ){}

  ngOnInit(): void {
    this.quickItForm = this.formBuilder.group({
      author: [null, Validators.required],
      title: [null, Validators.required],
      imageUrl: [null],
      message: [null]
    })
    // Observer uniquement les changements de la variable imageUrl
    const imageUrlControl: AbstractControl | null = this.quickItForm.get('imageUrl');

    if (imageUrlControl) {
      this.imagePreview$ = imageUrlControl.valueChanges.pipe(
        map(value => value || '')
      );
    }
  }

  onSubmitForm(): void {
    let quickItToSubmit = 
      new QuickIt(this.quickItForm.value.author,
                  new Date(),
                  this.quickItForm.value.title,
                  this.quickItForm.value.imageUrl,
                  this.quickItForm.value.message)
    this.dataService.addQuickItToList(quickItToSubmit)
    this.router.navigateByUrl("/quickit");
  }
}