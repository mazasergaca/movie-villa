export default function makeIdFromSlug(slug: any) {
  return slug.match(/[a-z0-9]+$/)[0];
}
