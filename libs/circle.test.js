const Circle = require('./circle');

describe('Circle SVG Test', () => {
    test('should render with circle SVG string with fill color blue', () => {
        const circleTxt='ABC';
        const circleTxtColor = 'black';
        const circleColorFill = 'blue';
        const circleSVGStr = `<circle cx="150" cy="100" r="95" fill="${circleColorFill}" stroke = "black" stroke-width ="2"/>`
        const shape = new Circle(circleTxt, circleTxtColor,circleColorFill);
        expect(shape.render()).toEqual(circleSVGStr);
    })

})

describe('Circle SVG Text Test', () => {

    test('should render with circle Text = ABC, black; SVG string with fill color blue', () => {
        const circleTxt='ABC';
        const circleTxtColor = 'black';
        const circleColorFill = 'blue';
        const circleSVGStr = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${circleTxtColor}">${circleTxt}</text>`
        const shape = new Circle(circleTxt, circleTxtColor,circleColorFill);
        expect(shape.renderTxt()).toEqual(circleSVGStr);
    })
})