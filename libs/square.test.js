const Square = require('./square');

describe('square SVG Test', () => {
    test('should render with square SVG string with fill color blue', () => {
        const squareTxt='ABC';
        const squareTxtColor = 'black';
        const squareColorFill = 'blue';
        const squareSVGStr = `<rect x="30" y="30" width="170" height="170" fill="${squareColorFill}" stroke = "black" stroke-width ="2"/>`
        const shape = new Square(squareTxt, squareTxtColor,squareColorFill);
        expect(shape.render()).toEqual(squareSVGStr);
    })

})

describe('square SVG Text Test', () => {

    test('should render with square Text = ABC, black; SVG string with fill color blue', () => {
        const squareTxt='ABC';
        const squareTxtColor = 'black';
        const squareColorFill = 'blue';
        const squareSVGStr = `<text x="115" y="130" font-size="60" text-anchor="middle" fill="${squareTxtColor}">${squareTxt}</text>`
        const shape = new Square(squareTxt, squareTxtColor,squareColorFill);
        expect(shape.renderTxt()).toEqual(squareSVGStr);
    })
})