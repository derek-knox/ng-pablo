import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-logo-select',
	templateUrl: 'logo-select.component.html',
	styleUrls: ['logo-select.component.css']
})
export class LogoSelectComponent {

	@Input() logoSettings: any;
	@Output() logoSettingsChange: EventEmitter<any> = new EventEmitter();

	onVisibilityToggle() {
		this.logoSettings.isGraphicHidden = !this.logoSettings.isGraphicHidden;
		this.logoSettingsChange.emit(this.logoSettings);
	}

	onRemove() {
		this.logoSettings.selectedFile = null;
		this.logoSettings.isGraphicHidden = false;
		this.logoSettingsChange.emit(this.logoSettings);
	}

	onSelectFileChange($event) {
		
		//cancel check
		let files = $event.srcElement.files;
		if(files.length > 0) {

			//base64 encode file (TODO extract to a service)
			let reader = new FileReader();
			reader.onload = (e) => {
				let url = (<FileReader>e.target).result;
				let file = { url: url, name: 'Uploaded Image' };

				this.logoSettings.selectedFile = file;
				this.logoSettingsChange.emit(this.logoSettings);
			};
			reader.readAsDataURL($event.srcElement.files[0]);
		}
	}

}
