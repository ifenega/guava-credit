const sliderInfo = [
    {
        id : 0,
        text: "Increase your Conversion rate +35%"
    },
    {
        id : 1,
        text: "Increase repeat purchases"
    },
    {
        id : 2,
        text: "Protect your working capital"
    }
]

const textContainer = document.getElementById('text-container')
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
    
    
})


//slider
//set starting item
let currentItem = 0

//load initial item 
window.addEventListener("DOMContentLoaded", ()=> {
    changeText(currentItem)
})

const changeText = () => {
    const item = sliderInfo[currentItem]
    textContainer.textContent = item.text
}

nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > sliderInfo.length-1) {
        currentItem = 0
    }
    changeText(currentItem)
})

prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0 ) {
        currentItem = sliderInfo.length-1
    }
    changeText(currentItem)
})




