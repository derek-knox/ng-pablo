import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SelectableDirective } from '../../shared/directives/selectable.directive';

@Component({
	moduleId: module.id,
	selector: 'app-sizes-select',
	templateUrl: 'sizes-select.component.html',
	styleUrls: ['sizes-select.component.css'],
	directives: [SelectableDirective]
})
export class SizesSelectComponent {

	@Input() sizeSettings: any;
	@Output() sizeSettingsChange: EventEmitter<any> = new EventEmitter();

	onIsSelectedChange($index) {

		//update settings
		this.sizeSettings.selectedSizeIndex = $index;

		//emit change
		this.sizeSettingsChange.emit(this.sizeSettings);
	}

}
