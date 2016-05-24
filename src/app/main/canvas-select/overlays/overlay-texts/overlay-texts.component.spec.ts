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
import { OverlayTextsComponent } from './overlay-texts.component';

describe('Component: OverlayTexts', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OverlayTextsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OverlayTextsComponent],
      (component: OverlayTextsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OverlayTextsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OverlayTextsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-overlay-texts></app-overlay-texts>
  `,
  directives: [OverlayTextsComponent]
})
class OverlayTextsComponentTestController {
}

