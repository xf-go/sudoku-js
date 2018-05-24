const toolkit = require('./toolkit')

class Grid {
    constructor(container) {
        this._container = container;
    }

    build() {
        const matrix = toolkit.makeMatrix();

        const rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom'];
        const colGroupClasses = ['col_g_left', 'col_g_center', 'col_g_right'];

        const cells = matrix.map(rowValues => rowValues.map((cellValue, colIndex) => {
            return $('<span>')
                .addClass(colGroupClasses[colIndex % 3])
                .text(cellValue);
        }))

        const divArray = cells.map((spanArray, rowIndex) => {
            return $('<div>')
                .addClass('row')
                .addClass(rowGroupClasses[rowIndex % 3])
                .append(spanArray);
        })

        this._container.append(divArray);
    }

    layout() {
        const width = $('span:first', this._container).width();
        $('span', this._container)
            .height(width)
            .css({
                'line-height': `${width}px`,
                'font-size': width < 32 ? `${width / 2}px` : ''
            });
    }
}

const grid = new Grid($('#container'));
grid.build();
grid.layout();