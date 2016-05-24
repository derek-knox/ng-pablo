import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

declare var _: any;

@Directive({
	selector: '[move-clamped-to-parent]',
	host: {
		'(mousedown)': 'onMouseDown($event)',
		'(document: mousemove)': 'onMouseMove($event)',
		'(document: mouseup)': 'onMouseUp($event)',
		'(keydown.ArrowUp)': 'onNudge($event)',
		'(keydown.ArrowRight)': 'onNudge($event)',
		'(keydown.ArrowDown)': 'onNudge($event)',
		'(keydown.ArrowLeft)': 'onNudge($event)',
		'(keyup.ArrowUp)': 'onNudge($event)',
		'(keyup.ArrowRight)': 'onNudge($event)',
		'(keyup.ArrowDown)': 'onNudge($event)',
		'(keyup.ArrowLeft)': 'onNudge($event)'
	}
})
export class MoveClampedToParentDirective {

	//element refs
	private el: HTMLElement;
	private parent: HTMLElement;

	//movable flag
	private isMovable: boolean = false;
	
	//position model helper
	private pos: any = { x: 0, y: 0, clampX: 0, clampY: 0 };
	
	//arrow key store
	private keys: Array<number> = [37, 38, 39, 40];

	constructor(el: ElementRef) {

		//el ref
		this.el = el.nativeElement;

		//tab index allows div to accept key events
		this.el.tabIndex = 1;

		//default key values
		this.keys[37] = this.keys[38] = this.keys[39] = this.keys[40] = 0;
	}

	public update() {

		//update ref due to ngIf
		this.parent = this.el.parentElement;

		//update clamp settings
		this.pos.clampX = parseInt(this.parent.style.width.replace('px', '')) - parseInt(this.el.style.width.replace('px', ''));
		this.pos.clampY = parseInt(this.parent.style.height.replace('px', '')) - parseInt(this.el.style.height.replace('px', ''));

		//update position
		this.updatePosition();
	}

	private updatePosition(x: number = 0, y: number = 0) {

		//update data
		this.pos.x += x;
		this.pos.y += y;

		//clamp data
		this.pos.x = _['clamp'](this.pos.x, 0, this.pos.clampX);
		this.pos.y = _['clamp'](this.pos.y, 0, this.pos.clampY);

		//update view
		this.el.style.left = this.pos.x + 'px';
		this.el.style.top = this.pos.y + 'px';
	}

	private onMouseDown($event) {

		//ensure fresh size calculation accounted for
		this.update();

		//update drag flag
		this.isMovable = true;
	}

	private onMouseMove($event) {
		
		//exit condition
		if (!this.isMovable) { return; }

		//update position
		this.updatePosition($event.movementX, $event.movementY);
	}

	private onMouseUp($event) {

		//update drag flag
		this.isMovable = false;
	}

	private onNudge($event) {
		
		//update keys
		this.keys[$event.keyCode] = $event.type === 'keydown' ? 1 : 0;

		//update move targets accommodating multiple keys
		let x = 0 - this.keys[37] + this.keys[39];
		let y = 0 - this.keys[38] + this.keys[40];

		//update position
		this.updatePosition(x, y);
	}

}