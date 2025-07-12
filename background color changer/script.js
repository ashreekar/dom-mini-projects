let randomBtn=document.querySelector('.randomBtn');
let colorInput=document.querySelector('#colorInput');
let applyBtn=document.querySelector('.applyBtn');
let currentColorValue=document.querySelector('.currentColorValue');
let container=document.querySelector('.container')

const colors=['red','pink','blue','green','yellow','aqua','black','white','lightseagreen','cyan','tomato','lightcoral'];

//console.log(randomBtn,colorInput,applyBtn,currentColorValue);
const randomColor=()=>{
    let random=Math.floor(Math.random()*12);
    // console.log(random)
    return colors[random];
}

const changeColor=(color)=>{
    container.style.backgroundColor=color;
    currentColorValue.innerHTML=color;
     colorInput.value='';
}

const handleRandomBtnClick=()=>{
    let color=randomColor();
    changeColor(color);
}

const handleApplyBtnClick=()=>{
    // console.log(colorInput.value)
    changeColor(colorInput.value);
}

randomBtn.addEventListener('click',handleRandomBtnClick);
applyBtn.addEventListener('click',handleApplyBtnClick);
