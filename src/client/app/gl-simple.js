import React from "react";
import { render } from "react-dom";
import { Surface } from "gl-react-dom";
const ndarray = require("ndarray");
import createTexture from "gl-texture2d";
import type { Texture } from "gl-texture2d";
import { Shaders, Node, GLSL } from "gl-react";

class Appgl extends React.Component {
  render() {
    const canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl");
    return (
        <Surface width={300} height={300}>
          https://i.imgur.com/uTP9Xfr.jpg
        </Surface>
    );
    return <p> Hell0 React!</p>;
  }
}

render(<Appgl />, document.getElementById("canvasPlace"));
