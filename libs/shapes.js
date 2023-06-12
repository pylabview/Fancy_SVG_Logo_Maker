const fs = require("fs");

class Shape {
    constructor(txt_string,
        txt_fill_color,
        txt_x,
        txt_y,
        txt_font,
        shape_xml_svg_str,
        txt_anchor="middle",
        shape_frame_width ="300",
        shape_frame_height = "200",
        shape_frame_fill = 'white',
        ){
            this.txt_string = txt_string;
            this.txt_fill_color = txt_fill_color;
            this.txt_x = txt_x;
            this.txt_y = txt_y;
            this.txt_font = txt_font;
            this.txt_anchor = txt_anchor;
            this.shape_frame_width = shape_frame_width;
            this.shape_frame_height = shape_frame_height;
            this.shape_frame_fill = shape_frame_fill;
            this.shape_xml_svg_str=shape_xml_svg_str;
            this.generatedSVGString = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width= "${this.shape_frame_width}" height= "${this.shape_frame_height}" fill="${this.shape_frame_fill}" />  
            ${this.shape_xml_svg_str}
            <text x="${this.txt_x}" y="${this.txt_y}" font-size="${this.txt_font}" text-anchor="${this.txt_anchor}" fill='${this.txt_fill_color}'>${this.txt_string}</text>
            </svg>  `;
        }
        render() {
            throw new Error('Child class must implement a render() method.');
          }

        makeSVG(){
            fs.writeFile('./examples/logo.svg', this.generatedSVGString, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
          );
        }
}

module.exports = Shape;