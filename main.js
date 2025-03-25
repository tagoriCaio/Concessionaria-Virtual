const elements = {
  container: document.querySelector("#container"),
  item: container.querySelectorAll(".list .item"),
  prevB: document.getElementById("prev"),
  nextB: document.getElementById("next"),
  number: document.querySelector(".number"),
  list: document.querySelector(".list"),
  indicators: document.querySelector("#indicators"),
  dots: indicators.querySelectorAll("ul li"),
}

const position = {
  active: 0,
  first: 0,
  last: elements.item.length - 1
}

function clickButton(side, pos) {
  const option = {
    next: () => {
      pos.active = pos.active + 1 > pos.last ? 0 : pos.active + 1
      elements.list.style.setProperty('--calculation', 1)
      slider(elements, pos.active)
    },
    prev: () => {
      pos.active = pos.active - 1 < pos.first ? pos.last : pos.active - 1
      elements.list.style.setProperty('--calculation', -1)
      slider(elements, pos.active)
    }
  }

  return option[side](); 
}

function slider(el, pos) {
  let itemOld = el.container.querySelector(".list .activeItem")
  let dotsOld = el.indicators.querySelector("ul li.active")

  itemOld.classList.remove("activeItem")
  dotsOld.classList.remove("active")

  el.item[pos].classList.add("activeItem")
  el.dots[pos].classList.add("active")

  el.number.innerText = "0" + (pos + 1)
}

elements.nextB.addEventListener("click", () => {
  clickButton("next", position, elements)
})

elements.prevB.addEventListener("click", () => {
  clickButton("prev", position, elements)
})
