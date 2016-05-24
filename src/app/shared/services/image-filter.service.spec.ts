import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ImageFilterService } from './image-filter.service';

describe('ImageFilterService Service', () => {
  beforeEachProviders(() => [ImageFilterService]);

  it('should ...',
      inject([ImageFilterService], (service: ImageFilterService) => {
    expect(service).toBeTruthy();
  }));
});
