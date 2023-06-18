const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(txt_string,
        txt_fill_color,
        triangle_fill,
        txt_x=150,
        txt_y=125,
        txt_font=60,
        triangle_points ="0,195 145,0 300,195",
        triangle_stroke='black',
        triangle_stroke_width=2,)
        {
            const triangle_xml_svg = `<polygon points="${triangle_points}" ` +
            `fill="${triangle_fill}" `+ 
            `stroke = "${triangle_stroke}" ` + 
            `stroke-width ='${triangle_stroke_width}'/>`
            super(txt_string,
                txt_fill_color,
                txt_x,
                txt_y,
                txt_font,
                triangle_xml_svg)
            this.triangle_xml_svg = triangle_xml_svg;
        }
        render(){
            return this.triangle_xml_svg
        }
        renderTxt(){
            return super.shape_xml_text_svg_str;
        }

}

module.exports = Triangle;