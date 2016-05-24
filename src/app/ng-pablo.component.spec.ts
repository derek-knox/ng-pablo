import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgPabloAppComponent } from '../app/ng-pablo.component';

beforeEachProviders(() => [NgPabloAppComponent]);

describe('App: NgPablo', () => {
  it('should create the app',
      inject([NgPabloAppComponent], (app: NgPabloAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-pablo works!\'',
      inject([NgPabloAppComponent], (app: NgPabloAppComponent) => {
    expect(app.title).toEqual('ng-pablo works!');
  }));
});
