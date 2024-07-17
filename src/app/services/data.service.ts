import { Injectable } from '@angular/core'
import { QuickIt } from '../models/quick-it'
import { SnapType } from "../models/snap-type.type"

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private quickItList: QuickIt[] = [
      new QuickIt(
        "admin",
        new Date(),
        'Forêt',
        'https://i.notretemps.com/1400x787/smart/2021/03/25/sorties-nature-4-forets-ou-il-fait-bon-flaner.jpg',
        'Le chasseur de vampire.'),
      new QuickIt(
        "admin",
        new Date(),
        'Lac',
        'https://www.france-montagnes.com/sites/default/files/activite/lac-annecy-c-miroslava-arnaudova-fotolia.jpg',
        "Il croit en l'âme des cartes."),
      new QuickIt(
        "admin",
        new Date(),
        "Espace",
        'https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg',
        "Sixième oeil"),
      new QuickIt(
        "admin",
        new Date(),
        "test",
        undefined,
        "oui"
      )
      ];

	getQuickItList(): QuickIt[] {
		return [...this.quickItList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())];
	}

  getQuickItByID(quickItId: string): QuickIt {
    const foundQuickIt = this.quickItList.find(quickIt => quickIt.id === quickItId);
    if (!foundQuickIt) {
      throw new Error('not found quickIt');
    }
    return foundQuickIt;
  }

  onSnapQuickItByID(quickItId: string, snapType: SnapType): void {
    const quickIt = this.getQuickItByID(quickItId);
    quickIt.snap(snapType);
  }

  addQuickItToList(quickIt: QuickIt): void{
    this.quickItList.unshift(quickIt);
  }
}