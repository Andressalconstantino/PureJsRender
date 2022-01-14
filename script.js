//Data

const stuff =[
    {
        name: 'Winter',
        likes: 0},
    {
        name: 'Autumn',
        likes: 0},
    {
        name: 'Spring',
        likes: 0},
]

//===========================================

function handleClick(name){
    stuff.forEach((current)=> {
        if (name === current.name){
            current.likes += 1;
        }
    });
    render();
}

//Rendering Logic
const buttonTemplate = function (name, likes){
    return `
        <button class="rb" onclick="handleClick('${name}')">
            <span>${name}</span>
            <span class="likes">${likes}</span>
            <span><img width="12%" src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png"></span>
        </button>`;
}

function render(){
    console.log([render]);
    const $screen = document.querySelector('.container');
    $screen.innerHTML = stuff.map((stuff) =>{
        return buttonTemplate(stuff.name, stuff.likes);
    }).join('');
}

render();