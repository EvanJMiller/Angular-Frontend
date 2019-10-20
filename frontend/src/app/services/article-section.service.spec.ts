import { TestBed } from '@angular/core/testing';

import { ArticleSectionService } from './article-section.service';

describe('ArticleSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleSectionService = TestBed.get(ArticleSectionService);
    expect(service).toBeTruthy();
  });
});
