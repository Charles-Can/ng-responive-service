/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ResponsiveService } from './responsive.service';

describe('Responsive Service', () => {
  beforeEachProviders(() => [ResponsiveService]);

  it('should ...',
      inject([ResponsiveService], (service: ResponsiveService) => {
    expect(service).toBeTruthy();
  }));
});
