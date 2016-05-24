import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { EditSettingsService } from '../../../../shared/services/edit-settings.service';

import { MoveClampedToParentDirective } from '../../shared/directives/move-clamped-to-parent.directive';


@Component({
	moduleId: module.id,
	selector: 'app-overlay-logo',
	templateUrl: 'overlay-logo.component.html',
	styleUrls: ['overlay-logo.component.css'],
	directives: [MoveClampedToParentDirective]
})
export class OverlayLogoComponent implements OnInit {

	@ViewChild(MoveClampedToParentDirective) logo: MoveClampedToParentDirective;

	@Input() sizeSettings: any;
	@Input() logoSettings: any;

	private isSelected: boolean = false;

	constructor(private editSettingsService: EditSettingsService) { }

	ngOnInit() {

		//subscribe
		this.editSettingsService.storeOverlays.subscribe((isClear) => this.onUpdateOverlays(isClear));
	}

	private onUpdateOverlays(isClear: boolean) {

		//update
		if(this.logo) {
			this.logo.update();
		}

		//clear currently selected controls
		if (isClear) {
			this.isSelected = false;
		}
	}

	private onSelect() {

		//only one selected overlay at a time
		this.editSettingsService.updateOverlays(true);

		//update
		this.isSelected = true;
	}

}
