const BASE_URL = import.meta.env.BASE_URL || '/'

const normalize = path => path.split('/').map(encodeURIComponent).join('/')

export function buildPublicAssetPath(path) {
  return `${BASE_URL}${normalize(path)}`
}

export function buildAbsoluteAssetUrl(path) {
  return `${window.location.origin}${buildPublicAssetPath(path)}`
}
