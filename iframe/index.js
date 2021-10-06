import { iframeResize } from 'iframe-resizer'

const script = document.getElementById('datagir_dechets')

const search = script.dataset.search
const source = window.location.href.toString()

const src = `https://quefairedemesdechets.fr/${search}&source=${source}&iframe=1`

const iframe = document.createElement('iframe')

const iframeAttributes = {
  src,
  style: 'border: none; width: 100%; display: block; margin: 0 auto;',
  allowfullscreen: true,
  webkitallowfullscreen: true,
  mozallowfullscreen: true,
  allow: 'geolocation',
}
for (var key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key])
}
iframeResize({}, iframe)

script.parentNode.insertBefore(iframe, script)
