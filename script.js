const slider = document.querySelector('.slider__slider');
const price = document.querySelector('.slider__price');
const views = document.querySelector('.slider__views');
const toggleBtn = document.querySelector('#switch');
const period = document.querySelector('.slider__period')


const eight = 8;
const twelve = 12;
const sixteen = 16;
const twentyfour = 24;
const thirtysix = 36;


discount = (amount) => {
    if(toggleBtn.checked){
    let discountPrice = amount * 0.25;
    let yearlyPrice = (amount - discountPrice) * 12;
    return price.textContent = `$${yearlyPrice}.00`}
    else 
    return price.textContent = `$${amount}.00`
}


sliderValues = () => {
    return slider.value < 20 ? (discount(eight), views.textContent = "10K PAGEVIEWS")
    : slider.value < 40 ? (discount(twelve), views.textContent = "50K PAGEVIEWS")
    : slider.value < 60 ? (discount(sixteen), views.textContent = "100K PAGEVIEWS")
    : slider.value < 80 ? (discount(twentyfour), views.textContent = "500K PAGEVIEWS")
    : (discount(thirtysix), views.textContent = "1M PAGEVIEWS");    

}
slider.oninput = sliderValues;


toggle = () => {
    toggleBtn.checked ? (period.classList.add("animated"), sliderValues())
    : (period.classList.remove("animated"), sliderValues());
}
toggleBtn.oninput = toggle