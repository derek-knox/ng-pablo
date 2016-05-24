import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, QueryList, ViewChildren } from '@angular/core';

declare var _: any;

import { SelectableDirective } from '../../shared/directives/selectable.directive';

@Component({
	moduleId: module.id,
	selector: 'app-text-select',
	templateUrl: 'text-select.component.html',
	styleUrls: ['text-select.component.css'],
	directives: [SelectableDirective]
})
export class TextSelectComponent implements AfterViewInit {

	@Input() textSettings: any;
	@Output() textSettingsChange: EventEmitter<any> = new EventEmitter();
	@ViewChildren(SelectableDirective) selectables: QueryList<SelectableDirective>;

	private selectableHeader: SelectableDirective;
	private selectableBody: SelectableDirective;
	private selectableCaption: SelectableDirective;
	private canAddQuotes: boolean = false;

	constructor(private changeDetectionRef: ChangeDetectorRef) { }

	ngAfterViewInit() {

		//view sync
		let list = this.selectables.toArray();
		this.selectableHeader = list[0];
		this.selectableBody = list[1];
		this.selectableCaption = list[2];

		//data
		this.selectableHeader.isSelected = this.textSettings.hasHeader;
		this.selectableBody.isSelected = this.textSettings.hasBody;
		this.selectableCaption.isSelected = this.textSettings.hasCaption;
		this.canAddQuotes = this.selectableBody.isSelected;

		//recheck as this.canAddQuotes was checked prior to ngAfterViewInit being called
		this.changeDetectionRef.detectChanges();
	}

	updateQuote() {

		this.textSettings.selectedQuoteIndex = _['clamp'](this.textSettings.selectedQuoteIndex, 0, this.textSettings.quotes.length - 1);

		//update (body always middle index)
		this.textSettings.models[1].text = this.textSettings.quotes[this.textSettings.selectedQuoteIndex].text;

		//emit change
		this.textSettingsChange.emit(this.textSettings);
	}

	onIsSelectedChange($event) {
		
		//quotes check
		if ($event === this.selectableBody) {
			this.canAddQuotes = $event.isSelected;
		}

		//update
		this.textSettings.hasHeader = this.selectableHeader.isSelected;
		this.textSettings.hasBody = this.selectableBody.isSelected;
		this.textSettings.hasCaption = this.selectableCaption.isSelected;

		//emit change
		this.textSettingsChange.emit(this.textSettings);
	}

	onQuotePrev() {

		//decrement and clamp
		this.textSettings.selectedQuoteIndex -= 1;
		
		//update
		this.updateQuote();
	}

	onQuoteNext() {

		//increment and clamp
		this.textSettings.selectedQuoteIndex += 1;
		
		//update
		this.updateQuote();
	}

}
