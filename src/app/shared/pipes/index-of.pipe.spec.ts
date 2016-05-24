import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { IndexOfPipe } from './index-of.pipe';

describe('IndexOf Pipe', () => {
	beforeEachProviders(() => [IndexOfPipe]);

  // it('should transform the input', inject([IndexOf], (pipe: IndexOf) => {
  //     expect(pipe.transform(true)).toBe(null);
  // }));
});
