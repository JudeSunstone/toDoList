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
        this.setDeleteListener(newDiv);
        parentEl.append(newDiv);
        newDiv.querySelector('.inp').focus();
    }
    
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

function setSortListener() {
    const sortBtn = getElementById('sortBtn');
    sortBtn.addEventListener('click', (e)=>{

    });
}

function sort() { 
}

function mySort(nodeList, direction) {
    let arr =[].slice.call(nodeList);
    return arr.sort((a,b)=>{
        if(a>b) return direction;
        return -direction;
    });
}


const inputCreator = new InputCreator(add, field) ;/*id of btns*/

const progStart = function() {
    inputCreator.init();
}(); /*так можно сразу вызвать, внутрь можем класть методы нужные */


