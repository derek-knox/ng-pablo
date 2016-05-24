import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OverlayLogoComponent } from './overlay-logo.component';

describe('Component: OverlayLogo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OverlayLogoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OverlayLogoComponent],
      (component: OverlayLogoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OverlayLogoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OverlayLogoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-overlay-logo></app-overlay-logo>
  `,
  directives: [OverlayLogoComponent]
})
class OverlayLogoComponentTestController {
}

