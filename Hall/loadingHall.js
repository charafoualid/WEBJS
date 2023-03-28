export class LoadingHall {

    loadingHallEl;
    assemblyLineContainer = document.createElement('div');
    assemblyLines = [3];
    tetrominoStones = ['Images/t_Tetromino.png', 'Images/straigth_Tetromino.png', 'Images/square_Tetromino.png', 'Images/skew_Tetromino.png', 'Images/l_Tetromino.png'];


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
            this.addTetromino(assembly);

        }
    }
    handleAddButton() {
        this.createAssembly();
    }

    createAssemblyContainer() {
        this.assemblyLineContainer.className = 'assemblyContainer';
        this.loadingHallEl.appendChild(this.assemblyLineContainer);
    }

    addTetromino(assembly) {
        const tetrominoIndex = Math.floor(Math.random() * this.tetrominoStones.length);
        const tetrominoSrc = this.tetrominoStones[tetrominoIndex];
        const tetrominoEl = document.createElement('div');
        tetrominoEl.className = 'tetromino';
        tetrominoEl.style.backgroundImage = `url(${tetrominoSrc})`;
        assembly.appendChild(tetrominoEl);
    }



}