const maxFallingElements = 50
var currentColor = 'rgb(97, 40, 197)' // purple
var nextColor = 'rgb(197, 153, 40)' // orange

const getNewFallingElement = () => {
    let newEl = document.createElement('div')
    newEl.classList.add('animation-element')
    newEl.classList.add('sliding')
    return newEl
}

const getNewColor = () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}

const main = () => {
    const body = document.getElementsByTagName('body')[0]

    for (let i = 0; i < maxFallingElements; i++) {
        let newEl = getNewFallingElement()
        newEl.style.animationDelay = (i * 100) + 'ms'
        newEl.style.backgroundColor = currentColor
        
        if (i == maxFallingElements - 1) {
            newEl.addEventListener('animationiteration', () => {
                newEl.style.backgroundColor = nextColor
                currentColor = nextColor
                nextColor = getNewColor()
            })
        } else {
            newEl.addEventListener('animationiteration', () => {
                newEl.style.backgroundColor = nextColor
            })
        }

        body.appendChild(newEl)
    }
}

window.onload = main