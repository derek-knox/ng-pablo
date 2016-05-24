import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-control-panel',
	templateUrl: 'control-panel.component.html',
	styleUrls: ['control-panel.component.css']
})
export class ControlPanelComponent {

	@Input() label: string;
	@Input() classes: string;
}
