let num = prompt('Введите число');

for(let i = 0; i < num; ++i){   
    if(i > 9) break;
    document.write(`<div class="block"></div>`)
}
