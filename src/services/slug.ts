export default function makeIdFromSlug(slug) {
  return slug.match(/[a-z0-9]+$/)[0];
}
