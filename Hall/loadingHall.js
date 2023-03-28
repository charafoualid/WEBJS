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
            this.movePackages(); // start the animation
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
        const tetrominoEl = document.createElement('img');
        tetrominoEl.className = 'tetromino';
        tetrominoEl.src = tetrominoSrc;
        assembly.appendChild(tetrominoEl);
    }

    movePackages() {
        const speed = 8; // set the speed of the animation
        const assemblyLineWidth = 750; // set the width of the assembly line

        // loop through each assembly line
        this.assemblyLines.forEach((assembly, index) => {
            // check if the assembly is a valid element
            if (assembly instanceof Element) {
                // get all the tetromino elements in the assembly line
                const tetrominos = assembly.querySelectorAll('.tetromino');

                // loop through each tetromino element
                tetrominos.forEach((tetromino, tetrominoIndex) => {
                    // set the animation properties
                    tetromino.style.animation = `move ${speed}s linear`;
                    tetromino.style.animationDelay = `${(index * tetrominos.length + tetrominoIndex) / 2}s`;
                    tetromino.style.animationIterationCount = 'infinite';
                    tetromino.style.animationName = 'move-stone';

                    // create a style element with the keyframes
                    const keyframes = `@keyframes move-stone {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(${assemblyLineWidth}px);
                    }
                  }`;
                    const styleEl = document.createElement('style');
                    styleEl.textContent = keyframes;

                    // add the style element to the document head
                    document.head.appendChild(styleEl);
                });
            }
        });
    }


}