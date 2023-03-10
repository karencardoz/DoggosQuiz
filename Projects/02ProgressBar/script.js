const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//On click of the Next button
next.addEventListener('click', () => {
  currentActive++
  //ensure, current active doesn't exceed number of circles
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

//On click of the Prev button
prev.addEventListener('click', () => {
  currentActive--
  //ensure, current active doesn't go below 1
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  //update the active class on the current active circle
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  //update the blue progress bar style
  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  //update the disabled attribute
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
