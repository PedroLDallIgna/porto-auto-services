const sections = document.querySelectorAll('.section')

const observeFunction = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear')
      entry.target.classList.add('stack')
    } else {
      entry.target.classList.remove('appear')
    }
  });
}

const io = new IntersectionObserver(observeFunction, { threshold: 0.2 })

sections.forEach((section) => io.observe(section))
