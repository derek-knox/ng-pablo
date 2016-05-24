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
import { FiltersSelectComponent } from './filters-select.component';

describe('Component: FiltersSelect', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FiltersSelectComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FiltersSelectComponent],
      (component: FiltersSelectComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FiltersSelectComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FiltersSelectComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-filters-select></app-filters-select>
  `,
  directives: [FiltersSelectComponent]
})
class FiltersSelectComponentTestController {
}

