const btn = document.querySelector('.submit');
let rating = 0;
const value_1 = document.getElementById('value-1');
const value_2 = document.getElementById('value-2');
const value_3 = document.getElementById('value-3');
const value_4 = document.getElementById('value-4');
const value_5 = document.getElementById('value-5');

// Getting Ratting value
value_1.addEventListener('click', ()=>{
    if(!value_1.classList.contains("active"))
    {
        value_1.classList.add("active");
        value_2.classList.remove("active");
        value_3.classList.remove("active");
        value_4.classList.remove("active");
        value_5.classList.remove("active");
        rating = value_1.innerHTML;
        return rating;
    }
})
value_2.addEventListener('click', ()=>{
    if(!value_2.classList.contains("active"))
    {
        
        value_2.classList.add("active");
        value_1.classList.remove("active");
        value_3.classList.remove("active");
        value_4.classList.remove("active");
        value_5.classList.remove("active");
        rating = value_2.innerHTML;
        return rating
    }
})
value_3.addEventListener('click', ()=>{
    if(!value_3.classList.contains("active"))
    {
        value_3.classList.add("active");
        value_2.classList.remove("active");
        value_1.classList.remove("active");
        value_4.classList.remove("active");
        value_5.classList.remove("active");
        rating = value_3.innerHTML;
        return rating
    }
})
value_4.addEventListener('click', ()=>{
    if(!value_4.classList.contains("active"))
    {
        value_4.classList.add("active");
        value_2.classList.remove("active");
        value_3.classList.remove("active");
        value_1.classList.remove("active");
        value_5.classList.remove("active");
        rating = value_4.innerHTML;
        return rating
    }
})
value_5.addEventListener('click', ()=>{
    if(!value_5.classList.contains("active"))
    {
        value_5.classList.add("active");
        value_2.classList.remove("active");
        value_3.classList.remove("active");
        value_4.classList.remove("active");
        value_1.classList.remove("active");
        rating = value_5.innerHTML;
        return rating;
    }
})

btn.addEventListener('click', () => {
    document.querySelector('.given-rating').innerHTML = rating;
    document.querySelector('.rate-us').style.display = 'none';
    document.querySelector('.thanks-page').style.display = 'block'
})