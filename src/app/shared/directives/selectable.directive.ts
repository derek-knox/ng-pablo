import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
	selector: '[selectable]',
	host: {
		'(click)': 'onClick()'
	}
})
export class SelectableDirective {

	el;
	@Input() isSelected: boolean;
	@Output() isSelectedChange: EventEmitter<any> = new EventEmitter();

	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}

	select() {
		this.isSelected = true;
	}

	deselect() {
		this.isSelected = false;
	}

	private onClick() {
		this.isSelected = !this.isSelected;
		this.isSelectedChange.emit(this);
	}

}
