import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GenerateImageService } from './generate-image.service';

describe('GenerateImage Service', () => {
  beforeEachProviders(() => [GenerateImageService]);

  it('should ...',
      inject([GenerateImageService], (service: GenerateImageService) => {
    expect(service).toBeTruthy();
  }));
});
