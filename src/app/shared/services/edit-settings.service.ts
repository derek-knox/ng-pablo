import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { EditableTextComponent } from '../../main/canvas-select/overlays/overlay-texts/shared/directives/editable-text/editable-text.component';

@Injectable()
export class EditSettingsService {

	//canvas observable
	private serviceCanvas: any = new BehaviorSubject(null);
	public storeCanvas: Observable<any> = this.serviceCanvas.asObservable();

	//overlays observable
	private serviceOverlays: any = new BehaviorSubject(null);
	public storeOverlays: Observable<any> = this.serviceOverlays.asObservable();

	//edit-text observable
	private serviceEditText: any = new BehaviorSubject(null);
	public storeEditText: Observable<any> = this.serviceEditText.asObservable();

	public updateCanvas() {
		this.serviceCanvas.next();
	}

	public updateOverlays(isClear?: boolean) {
		this.serviceOverlays.next(isClear);
	}

	public updateEditText(editableTextComponent: EditableTextComponent) {
		this.serviceEditText.next(editableTextComponent);
	}

	public processImgUrl(url, w, h) {

		//size args vs ignore for uploaded images
		let appender = url.indexOf('?') > -1 ? '&w=' + w + '&h=' + h : '';
		return url + appender;

	}
}
