const Shapes = require('./shapes');

describe('Shapes Instance Methods', () => {
    test('should throw error if render() is called', () => {
        const shapes = new Shapes();
        const err = new Error('Child class must implement render() method')
        expect(shapes.render).toThrow(err);
    });
    test('should throw error if render() is called', () => {
        const shapes = new Shapes();
        const err = new Error('Child class must implement renderTxt() method')
        expect(shapes.renderTxt).toThrow(err);
    });

});


