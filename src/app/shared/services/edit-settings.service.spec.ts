import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EditSettingsService } from './edit-settings.service';

describe('EditSettings Service', () => {
  beforeEachProviders(() => [EditSettingsService]);

  it('should ...',
      inject([EditSettingsService], (service: EditSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
