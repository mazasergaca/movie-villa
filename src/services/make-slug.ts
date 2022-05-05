import slugify from 'slugify';

export const makeSlug = (string: string) => slugify(string, { lower: true });
