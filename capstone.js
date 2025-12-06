let bgcolor = document.getElementById('ser-box')

bgcolor.addEventListener('mouseover', function(){
    bgcolor.style.backgroundColor = '#d54040ff'
})

bgcolor.addEventListener('mouseout', function(){
    bgcolor.style.backgroundColor = '#007bff'
})

let barbgcolor = document.getElementById('ser-bar')

barbgcolor.addEventListener('mouseover', function(){
    barbgcolor.style.backgroundColor = '#a6ab9bff'
})

barbgcolor.addEventListener('mouseout', function(){
    barbgcolor.style.backgroundColor = 'white'
})

const search = document.getElementById('ser-bar')
const suggest = document.getElementById('suggestions')

search.addEventListener('input', function(){
    suggest.innerHTML = `
    <li>${search.value}</li>
    `
})

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

