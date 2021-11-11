const { dir } = require("console");

class InputCreator {
    constructor(addBtn, field){
        this.addBtn = addBtn;
        this.field = field;
    }
    addInput(parentEl) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<input class="inp" type="text" name="input-text">
            <div class="delete"></div> `;
        newDiv.classList.add('input');
        /*чтобы нельзя было добавлять пустую строчку  */
        let nodelist = parentEl.querySelectorAll('.input');
        try { /* код выполнится */
            if(nodelist[nodelist.length - 1].querySelector('input').value.length) {
                parentEl.append(newDiv);
                newDiv.querySelector('.inp').focus();
                capitalize(newDiv.querySelector('.inp'))
            } 
        } catch { /*если тот код не выолнтся, будет другое */
                parentEl.append(newDiv);
                newDiv.querySelector('.inp').focus();
                capitalize(newDiv.querySelector('.inp'))
            }
        this.setDeleteListener(newDiv);  
    }
   /*сделать большие буквы в начале ввода*/
   capitalize(input) {
        input.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (input.value.length == 1)  {
                input.value = input.value[0].toUpperCase();
            }
        });
    }*
    
    setDeleteListener(el) {
        el.addEventListener('click', (e)=>{
            if(e.target.classList.contains("delete")) {
                e.stopPropagation();
                if(this.field.querySelectorAll('.input').length == 1) {
                    el.querySelector('input').value = '';
                } else { 
                    el.remove(); 
                }
            }
        });
    }

    init() {
        this.addInput(this.field);
        this.addBtn.addEventListener('click', (e)=> {this.addInput(field)});
        window.addEventListener('keydown', (e)=>{
            /*console.log(e.key);*/
            /*добавляем по нажатию */
            if(e.key == 'Enter'){
                this.addInput(field);
            }
            /*удаляем по нажатию*/
            if(e.key == 'Escape' ||e.key == 'Delete' ){
                let inps = this.field.querySelectorAll('.input');
                let el = inps[inps.length -1]; 
                /*последний элемент*/
                if(this.field.querySelectorAll('.input').length == 1) { 
                    /*если последний элемент, то просто очищаем ввод */
                    el.querySelector('input').value = '';
                    el.querySelector('input').focus(); 
                    /*добавялем фокус после уадления*/
                } else { 
                    el.remove(); 
                }
            }
        });

    }  
}

function sort() { 
}

function init() {
    setListenerSort(sortBtn);
}
let direction = 1
function setSortListener(btn) {
    const sortBtn = getElementById('sortBtn');
    sortBtn.addEventListener('click', (e)=>{
        let arr = getArr();
        direction = -direction;
        let sorted = mySort(arr, direction);
        rerender(sorted, field);
        changeBtnIcon(btn);
    });
}
function getArr() {
    let nodelist = field.querySelectorAll('.input');
    let arr = [];
    nodeList.array.forEach(element => {
        arr.push(element);
    });
    /* let arr = [].slice.call(nodelist); */
    return arr;
    
}

function mySort(arr, direction) {
    let arrResult = [...arr];
    arrResult.sort((a, b)=>{
        if(a.querySelector('input').value > b.querySelector('input').value) {
            return direction;
        } else {
            return -direction;
        }
    });
    return arrResult;
}

function rerender(arr, field) {
    field.innerHTML = '';
    arr.forEach(element => {
        field.append(element);
    });
}

function changeBtnIcon(btn) {
    btn.classList.toggle('sortUp');
    btn.classList.toggle('sortDown');
}


init ();

const inputCreator = new InputCreator(add, field) ;/*id of btns*/

const progStart = function() {
    inputCreator.init();
}(); /*так можно сразу вызвать, внутрь можем класть методы нужные */


