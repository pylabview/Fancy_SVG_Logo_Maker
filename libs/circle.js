const Shape = require('./shapes');

class Circle extends Shape {
    constructor(txt_string,
        txt_fill_color,
        txt_x=150,
        txt_y=125,
        txt_font=60,
        shape_fill_color,
        cx=150,
        cy=100,
        circle_radius=95,
        circle_fill,
        circle_stroke='black',
        circle_stroke_width=2
        ){
            this.circle_xml_svg = `
            <circle cx="${cx}" cy="${cy}" r="${circle_radius}" fill=${circle_fill} stroke = '${circle_stroke}' stroke-width =${circle_stroke_width}/>
            `
            super(txt_string,
                txt_fill_color,
                txt_x,
                txt_y,
                txt_font,
                shape_fill_color,
                shape_xml_svg_str= this.circle_xml_svg)
        }
        render(){
            return this.circle_xml_svg
        }

}

module.exports = Circle;