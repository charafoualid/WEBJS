export class LoadingHall {

    loadingHallEl;
    assemblyLineContainer = document.createElement('div');
    assemblyLines = [3];

    constructor(addbutton, switchHall, loadingHallEl) {
        this.loadingHallEl = loadingHallEl;
        this.addbutton = addbutton;
        this.switchHall = switchHall;
        this.addbutton.addEventListener('click', this.handleAddButton.bind(this));
        this.createAssemblyContainer();
    }

    createAssembly() {
        if (this.assemblyLines.length < 4) {
            const assembly = document.createElement('div');
            assembly.className = 'assembly';
            this.assemblyLines.push(assembly);
            this.assemblyLineContainer.appendChild(assembly);
        }

    }
    handleAddButton() {
        this.createAssembly();
    }

    createAssemblyContainer() {
        this.assemblyLineContainer.className = 'assemblyContainer';
        this.loadingHallEl.appendChild(this.assemblyLineContainer);
    }



}