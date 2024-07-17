import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
})
export class ConnexionPageComponent implements OnInit {

  userEmail!: string;
  userPassword!: string;

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value)
  }
}
