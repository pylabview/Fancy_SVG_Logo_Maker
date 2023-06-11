const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(txt_string,
        txt_fill_color,
        txt_x=150,
        txt_y=125,
        txt_font=60,
        shape_fill_color,
        triangle_fill,
        triangle_points ="0,195 145,0 300,195",
        triangle_stroke='black',
        triangle_stroke_width=1,)
        {
            this.triangle_xml_svg = `
            <polygon points=${triangle_points} fill=${triangle_fill} stroke = ${triangle_stroke} stroke-width ='${triangle_stroke}' />
            `
            super(txt_string,
                txt_fill_color,
                txt_x,
                txt_y,
                txt_font,
                shape_fill_color,
                shape_xml_svg_str= this.triangle_xml_svg)
        }
        render(){
            return this.triangle_xml_svg
        }


}

module.exports = Triangle;