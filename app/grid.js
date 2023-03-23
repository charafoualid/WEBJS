export class Grid{

    constructor(parentEl){
        this.parentEl = parentEl;
    }

    addButton(button){
        let btn = document.createElement('button');
        btn.innerText = "Test!";
        this.parentEl.appendChild(btn);
    }

}