function getDocumentHeight() {
  // body: property represents the <body> or <frameset> node of the current document (or null)
  const body = document.body
  // documentElement: returns the Element that is the root element of the document
  const html = document.documentElement

  return Math.max(
    // scrollHeight: read-only property is a measurement of the height of an element's content,
    // including content not visible on the screen due to overflow
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )
}

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
}

function generateImageSourceUrl() {
  const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  return `http://api.adorable.io/avatars/250/${hash}`
}

function getElementImage() {
  const cssImageClass = 'element-list__item__image'
  const cssImageLoadingClass = `${cssImageClass}--loading`

  const image = new Image()
  image.className = `${cssImageClass} ${cssImageLoadingClass}`
  image.src = generateImageSourceUrl()
  image.onload = function() {
    setTimeout(() => image.classList.remove(cssImageLoadingClass), 5000)
  }

  return image
}

function getElement() {
  const elementImage = getElementImage()
  const element = document.createElement('div')
  element.className = 'element-list__item'
  element.appendChild(elementImage)
  return element
}

function loadNextBatch(batchSize = 9) {
  while (batchSize--) {
    const element = getElement()
    elementList.appendChild(element)
  }
}

const elementList = document.querySelector('.element-list')

// Load the first batch of elements
loadNextBatch()

// Load more batches when scrolling to the end
window.onscroll = function() {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) return
  loadNextBatch()
}
