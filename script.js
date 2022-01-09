const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    
    
})