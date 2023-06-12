const Shape = require('./shapes');

class Square extends Shape {
    constructor(txt_string,
        txt_fill_color,
        square_fill,
        txt_x=115,
        txt_y=130,
        txt_font=60,
        square_x=30,
        square_y=30,
        square_width=170,
        square_height=170,
        square_stroke='black',
        square_stroke_width=2
    ){
        const square_xml_svg = `
        <rect x="${square_x}" y="${square_y}" width="${square_width}" height="${square_height}" fill="${square_fill}" stroke = "${square_stroke}" stroke-width ="${square_stroke_width}"/>
        `
        super(txt_string,
            txt_fill_color,
            txt_x,
            txt_y,
            txt_font,
            square_xml_svg)
    }
    render(){
        return this.square_xml_svg
    }

}

module.exports = Square;