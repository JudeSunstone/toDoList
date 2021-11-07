class InputCreator {
    constructor(addBtn, list){
        this.addBtn = addBtn;
        this.list = list;
    }
    addInput(parentEl) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<input class="inp" type="text">
        <div class="delete"></div>`;
        newDiv.classList.add('input');
        this.setDeleteListener(newDiv);
        parentEl.append(newDiv);
    }
    
    setDeleteListener(el) {
        el.addEventListener('click', (e)=>{
            if(e.target.classList.contains("close")) {
                e.stopPropagation();
                el.remove();
            }
        });
    }
    
    init() {
        this.addInput(this.list);
        this.addBtn.addEventListener('click', (e)=> {this.addInput(list)})
    }
    
    /*add.addEventListener('click', addMyInputTo(list));*/
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
сonst inputCreator = new InputCreator(add, list) ;/*id of btns*/

const start = function() {
    inputCreator.init();
}(); /*иак можно сразу вызвать, внутрь можем класть методы нужные */