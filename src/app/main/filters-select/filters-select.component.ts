import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';

@Component({
	moduleId: module.id,
	selector: 'app-filters-select',
	templateUrl: 'filters-select.component.html',
	styleUrls: ['filters-select.component.css'],
	directives: [DROPDOWN_DIRECTIVES]
})
export class FiltersSelectComponent {

	@Input() filterSettings: any;
	@Output() filterSettingsChange: EventEmitter<any> = new EventEmitter();

	onSelectFilter(index) {
		this.filterSettings.selectedFilterIndex = index;
		this.filterSettingsChange.emit(this.filterSettings);
	}
}
