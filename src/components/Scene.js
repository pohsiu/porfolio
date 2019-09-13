import React, { Component } from 'react';
import * as THREE from 'three';
import { TweenMax, Expo } from 'gsap';

var vertex = `
  varying vec2 vUv;
  void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

var fragment = `
  varying vec2 vUv;

  uniform sampler2D texture;
  uniform sampler2D texture2;
  uniform sampler2D disp;

  // uniform float time;
  // uniform float _rot;
  uniform float dispFactor;
  uniform float effectFactor;

  // vec2 rotate(vec2 v, float a) {
  //  float s = sin(a);
  //  float c = cos(a);
  //  mat2 m = mat2(c, -s, s, c);
  //  return m * v;
  // }

  void main() {

  vec2 uv = vUv;

  // uv -= 0.5;
  // vec2 rotUV = rotate(uv, _rot);
  // uv += 0.5;

  vec4 disp = texture2D(disp, uv);

  vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
  vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

  vec4 _texture = texture2D(texture, distortedPosition);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);

  vec4 finalTexture = mix(_texture, _texture2, dispFactor);

  gl_FragColor = finalTexture;
  // gl_FragColor = disp;
  }
`;

const srcs = [
  './images/bg1.jpg',
  './images/bg2.jpg'
]
var speedIn = "1.2";
var speedOut = "0.5";
var easing = Expo.easeOut;
var intensity = "0.6";
  
var image1 = srcs[0];
var image2 = srcs[1];
var dispImage = "./images/displacement/6.jpg"

class ThreeScene extends Component{
  componentDidMount(){
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.OrthographicCamera(
        this.mount.offsetWidth / -2,
        this.mount.offsetWidth / 2,
        this.mount.offsetHeight / 2,
        this.mount.offsetHeight / -2,
        1,
        1000
    );
    this.camera.position.z = 1
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: false })
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xffffff, 0.0);
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
    this.mount.appendChild(this.renderer.domElement)

    var loader = new THREE.TextureLoader();
    loader.crossOrigin = "";
    var texture1 = loader.load(image1);
    var texture2 = loader.load(image2);

    var disp = loader.load(dispImage);
    disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

    texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
    texture1.minFilter = texture2.minFilter = THREE.LinearFilter;

    texture1.anisotropy = this.renderer.getMaxAnisotropy();
    texture2.anisotropy = this.renderer.getMaxAnisotropy();
    

    this.mat = new THREE.ShaderMaterial({
        uniforms: {
        effectFactor: { type: "f", value: intensity },
        dispFactor: { type: "f", value: 0.0 },
        texture: { type: "t", value: texture1 },
        texture2: { type: "t", value: texture2 },
        disp: { type: "t", value: disp }
        },

        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
    });

    var geometry = new THREE.PlaneBufferGeometry(
        this.mount.offsetWidth,
        this.mount.offsetHeight,
        1
    );
    var object = new THREE.Mesh(geometry, this.mat);
    this.scene.add(object)
    this.start()
  }
  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  componentDidUpdate() {
      const { selectedProjectIndex } = this.props;
      if (selectedProjectIndex % 2 === 0) {
          this.next();
      } else {
          this.previous();
      }
  }
  start = () => {
    if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  next = () => {
    TweenMax.to(this.mat.uniforms.dispFactor, speedIn, {
        value: 1,
        ease: easing
    });
  }

  previous = () => {
    TweenMax.to(this.mat.uniforms.dispFactor, speedOut, {
        value: 0,
        ease: easing
    });
  };
  render() {
    return (
        <div 
            className={this.props.className}
            ref={(mount) => { this.mount = mount }}
        />
    )
  }
}
export default ThreeScene