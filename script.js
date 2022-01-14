//Data

const stuff =[
    {
        name: 'Rain',
        likes: 0},
    {
        name: 'Dark',
        likes: 0},
    {
        name: 'Cold',
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