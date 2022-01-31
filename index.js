let colorList = ['red', 'green', 'blue', 'pink', 'white', 'yellow', 'gray'];

let container = document.getElementById('Color-Container')
for(let i = 0; i <colorList.length; i++){
    container.innerHTML += "<div class='color-pick'></div>"
}

let colorPicker = document.getElementsByClassName('color-pick');
let output = document.getElementById('output');
// console.log(colorPicker, output)

for (let i=0; i < colorPicker.length; i++){
    colorPicker[i].style.backgroundColor = colorList[i];
    colorPicker[i].addEventListener('click', function(){
        changeColor(colorList[i], i);
    })
}

changeColor = (color, active) => {
    for(let i =0; i< colorPicker.length; i++){
        colorPicker[i].classList.remove('active');
    }
    colorPicker[active].classList.add('active');
    output.style.backgroundColor = color;
}