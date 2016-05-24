import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';

import { EditTextComponent } from '../../../../../../edit-text/edit-text.component';

@Component({
	moduleId: module.id,
	selector: 'app-editable-text',
	templateUrl: 'editable-text.component.html',
	styleUrls: ['editable-text.component.css']
})
export class EditableTextComponent {

	@ViewChild('textInput', { read: ElementRef }) textInput;

	@Input() model: any;
	@Input() options: any;

	private isEditing: boolean;

	constructor(private renderer: Renderer, private el: ElementRef) {
		this.el = el.nativeElement;
	}

	public reset() {

		//update edit flag
		this.isEditing = false;
	}

	public addEditTextControls(editTextComponent: EditTextComponent) {
		this.renderer.invokeElementMethod(this.el, 'appendChild', [editTextComponent.el]);
	}

	private onDoubleClick($event) {

		//update edit flag
		this.isEditing = true;

		//update textInput
		this.renderer.invokeElementMethod(this.textInput.nativeElement, 'focus', []);
		this.renderer.invokeElementMethod(this.textInput.nativeElement, 'select', []);
	}

}
