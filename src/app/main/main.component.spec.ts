import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MainComponent} from './main.component';

describe('Component: Main', () => {
    let builder: TestComponentBuilder;

    beforeEachProviders(() => [MainComponent]);
    beforeEach(
        inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

    it('should inject the component',
       inject([MainComponent], (component: MainComponent) => { expect(component).toBeTruthy(); }));

    it('should create the component', inject([], () => {
           return builder.createAsync(MainComponentTestController)
               .then((fixture: ComponentFixture<any>) => {
                   let query = fixture.debugElement.query(By.directive(MainComponent));
                   expect(query).toBeTruthy();
                   expect(query.componentInstance).toBeTruthy();
               });
       }));
});

@Component({
    selector: 'test',
    template: `
    <app-main></app-main>
  `,
    directives: [MainComponent]
})
class MainComponentTestController {
}
