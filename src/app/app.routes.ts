import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { SingleQuickItComponent } from './single-quick-it/single-quick-it.component'
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { NewQuickItComponent } from './new-quick-it/new-quick-it.component';

export const routes: Routes = [
	{ path: '', component: ConnexionPageComponent},
	{ path: 'quickit', component: MainPageComponent },
	{ path: 'home', component: LandingPageComponent },
	{ path: 'quickit/create', component: NewQuickItComponent},
	{ path: 'quickit/:id', component: SingleQuickItComponent }
];