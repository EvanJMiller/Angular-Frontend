import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article("title", "subtitle", new Date(), "body")).toBeTruthy();
  });
});
