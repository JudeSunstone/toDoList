class InputCreator {
    constructor(parentEl, field){
        this.parentEl = parentEl;
        this.field = field;
    }
    addInput() {
        let newDiv = this.getMyInput();
        try { /* код выполнится */
            if(nodelist[nodelist.length - 1].querySelector('input').value.length) {
                parentEl.append(newDiv);
                newDiv.querySelector('.inp').focus();
                /*this.capitalize(newDiv.querySelector('.inp'));*/
                } 
             } catch { /*если тот код не выолнтся, будет другое */
                parentEl.append(newDiv);
                newDiv.querySelector('.inp').focus();
                /*this.capitalize(newDiv.querySelector('.inp'));*/
            }
    }
    getMyInput() {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<input class="inp" type="text" name="input-text">
            <div class="delete"></div> `;
        newDiv.classList.add('input');
        /*чтобы нельзя было добавлять пустую строчку, но вот пробелы всё ещё можно :) */
        let nodelist = this.parentEl.querySelectorAll('.input');
        /*разбить пред инпут */ 
        this.setDeleteListener(newDiv); 
    }
   /*сделать большие буквы в начале ввода - пока не работает*/ 
   /*capitalize(input) {
        input.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (input.value.length == 1)  {
                input.value = input.value[0].toUpperCase();
            }
        });
    }*/
    
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
                    /*добавляем фокус после удаления*/
                } else { 
                    el.remove(); 
                }
            }
        });

    }  
}

class Sort {
    constructor(sortBtn) {
        this.direction = 1;
        this.sortBtn = sortBtn;
        this.field = field;
        this.sortDown = sortDown;
        this.sortUp = sortUp;
        
    }
    setSortListener(btn) {
        const sortBtn = getElementById('sortBtn');
        this.sortBtn.addEventListener('click', (e)=>{
            let arr = getArr();
            this.direction = -this.direction;
            let sorted = this.mySort(arr, direction);
            this.rerender(sorted, field);
            this.changeBtnIcon(btn);
        });
    }
    getArr(){ 
        let nodelist = this.field.querySelectorAll('.input');
        let arr = [];
        nodeList.array.forEach(element => {
            arr.push(element);
    });
    /* let arr = [].slice.call(nodelist); */
    /*return arr; */
    }

    mySort(arr, direction) {
        let arrResult = [...arr];
        arrResult.sort((a, b)=>{
            if(a.querySelector('input').value > b.querySelector('input').value) {
                return this.direction;
            } else {
                return -this.direction;
                /*меняет направление сортировки*/
            }
        });
        return arrResult;
    }

    rerender(arr, field) {
        this.field.innerHTML = '';
        arr.forEach(element => {
            this.field.append(element);
        });
    }

     changeBtnIcon(btn) {
        btn.classList.toggle(this.sortUp);
        btn.classList.toggle(this.sortDown);
    }
    
    init() {
        this.setListenerSort(this.sortBtn);
    }

}

const progStart = function() {
    const inputCreator = new InputCreator(add, field) ;/*id of btns*/
    inputCreator.init();
    const sort =  new Sort(sortBtn);
    sort.init();
}(); /*так можно сразу вызвать, внутрь можем класть методы нужные */


