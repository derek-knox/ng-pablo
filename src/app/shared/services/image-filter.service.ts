import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

declare var Caman: any;

@Injectable()
export class ImageFilterService {

	private service: any = new Subject(null);
	public store: Observable<any> = this.service.asObservable();

	private canvas: HTMLCanvasElement;

	public updateCanvasReference(payload: HTMLCanvasElement) {
		this.canvas = payload;
	}

	public updateFilter(payload: any) {

		//update filter
		Caman(this.canvas, (caman) => {

			//required call when ctx changes outside of CamanJS knowledge
			caman.reloadCanvasData();

			//filter
			caman[payload.method].apply(caman, payload.args).render();

			//notify
			this.service.next();
		});

	}

}
