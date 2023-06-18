const Triangle = require('./triangle');

describe('Triangle SVG Test', () => {
    test('should render with triangle SVG string with fill color blue', () => {
        const triangleTxt='ABC';
        const triangleTxtColor = 'black';
        const triangleColorFill = 'blue';
        const triangleSVGStr = `<polygon points="0,195 145,0 300,195" fill="${triangleColorFill}" stroke = "black" stroke-width ='2'/>`
        const shape = new Triangle(triangleTxt, triangleTxtColor,triangleColorFill);
        expect(shape.render()).toEqual(triangleSVGStr);
    })

})

describe('Triangle SVG Text Test', () => {

    test('should render with triangle Text = ABC, black; SVG string with fill color blue', () => {
        const triangleTxt='ABC';
        const triangleTxtColor = 'black';
        const triangleColorFill = 'blue';
        const triangleSVGStr = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangleTxtColor}">${triangleTxt}</text>`
        const shape = new Triangle(triangleTxt, triangleTxtColor,triangleColorFill);
        expect(shape.renderTxt()).toEqual(triangleSVGStr);
    })
})