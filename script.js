class InputCreator {
    constructor(addBtn, field){
        this.addBtn = addBtn;
        this.field = field;
    }
    addInput(parentEl) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="input">
            <input class="inp" type="text" name="input-text">
            <div class="delete"></div>
        </div> `;
        newDiv.classList.add('input');
        this.setDeleteListener(newDiv);
        parentEl.append(newDiv);
        newDiv.querySelector('.inp').focus();
    }
    
    setDeleteListener(el) {
        el.addEventListener('click', (e)=>{
            if(e.target.classList.contains("delete")) {
                e.stopPropagation();
                el.remove();
                /*с последним блоком беда после удаления*/
            }
        });
    }

    init() {
        this.addInput(this.field);
        this.addBtn.addEventListener('click', (e)=> {this.addInput(field)});
        window.addEventListener('keydown', (e)=>{
            /*console.log(e.key);*/
            if(e.key == 'Enter'){
                this.addInput(field);
            }
            if(e.key == 'Escape' ||e.key == 'Delete' ){
                this.setDeleteListener(field); /* НЕ работает, почему?*/
            }
        })

    }  
}

function setSortListener() {
    
}
function sort() { 
}

function mySort(nodeList, direction) {
    let arr =[].slice.call(nodeList);
    return arr.sort((a,b)=>{
        if(a>b) return direction;
        return -direction;
    })
}




const inputCreator = new InputCreator(add, field) ;/*id of btns*/

const progStart = function() {
    inputCreator.init();
}(); /*так можно сразу вызвать, внутрь можем класть методы нужные */