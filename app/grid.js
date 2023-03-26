export class Grid {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.grids = [];
    }

    generateGrid(width, height) {
        const grid = document.createElement("table");
        for (let i = 0; i < height; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < width; j++) {
                const cell = document.createElement("td");
                cell.setAttribute("data-x", j);
                cell.setAttribute("data-y", i);
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        this.grids.push(grid);
        this.parentEl.appendChild(grid);
    }


}