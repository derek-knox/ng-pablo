import { Component } from '@angular/core';

import { MainComponent } from './main/main.component';
import { NavComponent } from './shared/nav/nav.component';

@Component({
	moduleId: module.id,
	selector: 'ng-pablo-app',
	templateUrl: 'ng-pablo.component.html',
	styleUrls: ['ng-pablo.component.css'],
	directives: [MainComponent, NavComponent]
})
export class NgPabloAppComponent {
	title = 'ng-pablo works!';
}
