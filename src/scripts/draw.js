var canvas = document.getElementById('tutorial')
window.addEventListener('resize', resizeCanvas, false)

function draw () {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d')
  }
}

function resizeCanvas (e) {
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight
}
