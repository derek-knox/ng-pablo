import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

import { EditSettingsService } from '../../../../shared/services/edit-settings.service';

import { MoveClampedToParentDirective } from '../../shared/directives/move-clamped-to-parent.directive';
import { EditableTextComponent } from './shared/directives/editable-text/editable-text.component';

@Component({
	moduleId: module.id,
	selector: 'app-overlay-texts',
	templateUrl: 'overlay-texts.component.html',
	styleUrls: ['overlay-texts.component.css'],
	directives: [EditableTextComponent, MoveClampedToParentDirective]
})
export class OverlayTextsComponent implements OnInit {

	@ViewChildren(MoveClampedToParentDirective) moveClampedToParents: QueryList<MoveClampedToParentDirective>;
	@ViewChildren(EditableTextComponent) editableTexts: QueryList<EditableTextComponent>;

	@Input() sizeSettings: any;
	@Input() textSettings: any;

	constructor(private editSettingsService: EditSettingsService) { }

	ngOnInit() {

		//subscribe
		this.editSettingsService.storeOverlays.subscribe((isClear) => this.onUpdateOverlays(isClear));
	}

	private onUpdateOverlays(isClear: boolean) {

		//update
		if (this.moveClampedToParents) {
			this.moveClampedToParents.forEach(item => item.update());
		}

		//clear currently selected controls
		if(isClear) {

			//update selectedModel helper
			this.textSettings.selectedModelUniqueId = -1;

			//reset controls
			this.editableTexts.map(item => item.reset());
		}
	}

	private onSelected(index) {

		//only one selected overlay at a time
		this.editSettingsService.updateOverlays(true);

		//update selectedModel helper
		this.textSettings.selectedModelUniqueId = index;

		//update edit text overlay
		let editableTextComponent = this.editableTexts.filter(item => this.textSettings.selectedModelUniqueId === item.model.uniqueId);
		if(editableTextComponent.length === 1) {
			this.editSettingsService.updateEditText(editableTextComponent[0]);
		}
	}

}