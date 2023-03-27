export class LoadingHall {

    loadingHallEl;
    assemblyLines = [3];

    constructor(addbutton, switchHall, loadingHallEl) {
        this.loadingHallEl = loadingHallEl;
        this.addbutton = addbutton;
        this.switchHall = switchHall;
        this.addbutton.addEventListener('click', this.handleAddButton.bind(this));
    }

    createAssembly() {
        const assembly = document.createElement('div');
        assembly.className = 'assembly';
        this.assemblyLines.push(assembly);
        this.loadingHallEl.appendChild(assembly);
    }

    handleAddButton() {
        this.createAssembly();
    }



}