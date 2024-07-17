import { Component } from '@angular/core';
import { Router } from'@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
      FormsModule,
      HeaderComponent
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router) {
    this.router = router
  }

  onContinue() {
    this.router.navigateByUrl('/quickit')
  }
}
