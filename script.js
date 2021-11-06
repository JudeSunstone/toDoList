class InputCreator {
    constructor(addBtn, list){
        this.addBtn = addBtn;
        this.list = list;
    }
    addMyInputTo(parentEl) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<input id="myInput" class="inp" type="text">
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
        this.addMyInputTo(this.list);
        this.addBtn.addEventListener('click', (e)=> {this.addMyInputTo(list)})
    }
    
    /*add.addEventListener('click', addMyInputTo(list));*/
    

}

сonst inputCreator = new InputCreator(add, list) ;/*id of btns*/

const start = function() {
    inputCreator.init();
}();