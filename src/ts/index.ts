import 'bootstrap/dist/js/bootstrap.bundle' // used for eg. collapse of topnav
import '@lottiefiles/lottie-player'
import '@lottiefiles/lottie-interactivity'

function hexToRGB (hex: string, alpha: number): string {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

const resolveColor = (color: string, alpha: number):string => {
  // Grab the hex value from the CSS root vars
  let colorHex = window.getComputedStyle(document.body).getPropertyValue(color).trim()

  if (alpha) {
    return hexToRGB(colorHex, alpha)
  } else {
    return colorHex
  }
}

export {
  resolveColor
}
