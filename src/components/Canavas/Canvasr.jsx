import { useEffect } from "react";
import "./Canvasr.css";

const Hero = () => {
  useEffect(() => {
    "use strict";

    let canvas = document.querySelector("canvas");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 35,
      SPLAT_RADIUS: 0.002,
    };

    let pointers = [];
    let splatStack = [];

    let _getWebGLContext = getWebGLContext(canvas);
    let gl = _getWebGLContext.gl;
    let ext = _getWebGLContext.ext;
    let support_linear_float = _getWebGLContext.support_linear_float;

    function getWebGLContext(canvas) {
      let params = { alpha: false, depth: false, stencil: false, antialias: false };
      let gl = canvas.getContext("webgl2", params);
      let isWebGL2 = !!gl;

      if (!isWebGL2)
        gl =
          canvas.getContext("webgl", params) ||
          canvas.getContext("experimental-webgl", params);

      let halfFloat = gl.getExtension("OES_texture_half_float");
      let support_linear_float = gl.getExtension("OES_texture_half_float_linear");

      if (isWebGL2) {
        gl.getExtension("EXT_color_buffer_float");
        support_linear_float = gl.getExtension("OES_texture_float_linear");
      }

      gl.clearColor(0.0, 0.0, 0.0, 1.0);

      let internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA;
      let internalFormatRG = isWebGL2 ? gl.RG16F : gl.RGBA;
      let formatRG = isWebGL2 ? gl.RG : gl.RGBA;
      let texType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

      return {
        gl: gl,
        ext: {
          internalFormat: internalFormat,
          internalFormatRG: internalFormatRG,
          formatRG: formatRG,
          texType: texType,
        },
        support_linear_float: support_linear_float,
      };
    }

    function pointerPrototype() {
      this.id = -1;
      this.x = 0;
      this.y = 0;
      this.dx = 0;
      this.dy = 0;
      this.down = false;
      this.moved = false;
      this.color = [30, 0, 300];
    }

    pointers.push(new pointerPrototype());

    // كل كود الـ Shaders, Framebuffers, update loop, splat, resizeCanvas, event listeners
    // 👇 حطي الكود الكبير اللي بعتّيه هنا جوه useEffect، من غير تغيير

    // ==========================================================
    // ... الكود بتاع الـ Shaders و update() اللي بعتّيه فوق
    // ==========================================================

  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <canvas className="absolute inset-0 w-full h-full"></canvas>
      <h1 className="relative z-10 text-4xl font-bold">Smoke Streams</h1>
    </div>
  );
};

export default Hero;
