import { SnapType } from "./snap-type.type"

export class QuickIt {

	public id: string = crypto.randomUUID().substring(0,8)
	public snaps: number = 0
	public liked: boolean = false;

	constructor(
		public author: string,
		public createdAt: Date,
		public title: string,
		public imageUrl?: string,
		public message?: string) {}

	snap(snapType: SnapType): void {
		if (snapType === "snap") {
      		this.addSnap()
    	} else if (snapType === "unsnap") {
      		this.unSnap();
    	}
  	}

	addSnap(): void {
      this.snaps++;
      this.liked = true
  	}
  	
  	unSnap(): void{
      this.snaps--;
      this.liked = false
    }
}