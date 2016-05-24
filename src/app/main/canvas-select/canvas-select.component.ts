import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

declare var _: any;

import { EditSettingsService } from '../../shared/services/edit-settings.service';
import { GenerateImageService } from '../../shared/services/generate-image.service';
import { ImageFilterService } from '../../shared/services/image-filter.service';

import { OverlayLogoComponent } from './overlays/overlay-logo/overlay-logo.component';
import { OverlayTextsComponent } from './overlays/overlay-texts/overlay-texts.component';

@Component({
	moduleId: module.id,
	selector: 'app-canvas-select',
	templateUrl: 'canvas-select.component.html',
	styleUrls: ['canvas-select.component.css'],
	directives: [OverlayLogoComponent, OverlayTextsComponent]
})
export class CanvasSelectComponent implements AfterViewInit {

	@ViewChild('photoCanvas') canvasArtboard: ElementRef;

	@Input() canvasSettings: any;
	@Input() imageSettings: any;
	@Input() sizeSettings: any;
	@Input() textSettings: any;
	@Input() logoSettings: any;

	private ctx: CanvasRenderingContext2D;

	constructor(private editSettingsService: EditSettingsService,
				private generateImageService: GenerateImageService,
				private imageFilterService: ImageFilterService ) {}

	ngAfterViewInit() {

		//canvas context
		this.ctx = this.canvasArtboard.nativeElement.getContext('2d');

		//subscribe
		this.editSettingsService.storeCanvas.subscribe(() => this.onUpdateCanvas());
		this.imageFilterService.store.subscribe(() => this.onUpdateFilter());
		this.generateImageService.store.subscribe(() => this.onGenerateDownloadableImage());
	}

	// load image into canvas
	private onUpdateCanvas() {

		//new image
		let image = new Image();
		let sizeData = this.sizeSettings.sizes[this.sizeSettings.selectedSizeIndex];
		let modelMatch = _.find(this.imageSettings.images, ['uniqueId', this.imageSettings.selectedImageUniqueId]);
		image.src = this.editSettingsService.processImgUrl(modelMatch['url'], sizeData.width, sizeData.height);
        image.crossOrigin = "Anonymous";

		//clean canvas
		this.ctx.clearRect(0, 0, sizeData.width, sizeData.height);

		//provide imageFilterService with a new canvas
		this.imageFilterService.updateCanvasReference(this.canvasArtboard.nativeElement);

		//update canvas
		image.onload = () => this.ctx.drawImage(image, 0, 0);
	}

	private onGenerateDownloadableImage() {
		let image = new Image();
        image.src = this.canvasArtboard.nativeElement.toDataURL("image/png");
        image.crossOrigin = "Anonymous";
        this.canvasSettings.downloadableImage = image;
	}

	private onUpdateFilter() {
		// console.log('update filter: likely use the imageFilterService canvas ref');
	}

	private onClearOverlaysSelection() {
		this.editSettingsService.updateOverlays(true);
	}

}
