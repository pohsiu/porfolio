import React, { Component } from 'react';
import * as THREE from 'three';
import { TweenMax, Expo } from 'gsap';
// import getPath from '../utils/getPath';
// const imgPath = getPath('images');

// https://greensock.com/docs/v2/TweenMax/static.to()
// https://codepen.io/ashthornton/pen/KRQbMO

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

const fragment = `
  varying vec2 vUv;
  uniform sampler2D currentImage;
  uniform sampler2D nextImage;
  uniform sampler2D disp;
  uniform float dispFactor;
  uniform float effectFactor;

  void main() {
    vec2 uv = vUv;
    vec4 disp = texture2D(disp, uv);

    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
    vec4 _currentImage = texture2D(currentImage, distortedPosition);
    vec4 _nextImage = texture2D(nextImage, distortedPosition2);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

    gl_FragColor = finalTexture;

  }
`;
const speedIn = "1.2";
// const speedOut = "0.5";
const easing = Expo.easeOut;
const intensity = "0.6";
const dispImage = "./images/displacement/6.jpg"


const images = [
  '',
  './images/bg3.jpg',
  './images/bg2.jpg',
  './images/bg4.jpg',
  './images/bg5.jpg',
  './images/bg1.jpg',
]
class BackgroundSection extends Component{
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
    this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    this.mount.appendChild(this.renderer.domElement)

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";
    // eslint-disable-next-line array-callback-return
    this.sliderImages = images.map(img => {
      const image = loader.load(img);
      image.magFilter = image.minFilter = THREE.LinearFilter;
      image.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      return image;
    });

    const disp = loader.load(dispImage);
    disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
    
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        effectFactor: { type: "f", value: intensity },
        dispFactor: { type: "f", value: 0.0 },
        currentImage: { type: "t", value: this.sliderImages[0] },
        nextImage: { type: "t", value: this.sliderImages[1] },
        disp: { type: "t", value: disp }
      },

      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      opacity: 1.0
    });

    const geometry = new THREE.PlaneBufferGeometry(
        this.mount.offsetWidth,
        this.mount.offsetHeight,
        1
    );
    this.object = new THREE.Mesh(geometry, this.mat);
    this.object.position.set(0, 0, 0);
    this.scene.add(this.object);

    window.addEventListener("resize", (e) => {
      this.mount && this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
    });
    this.start();
  }
  componentDidUpdate(prevProps) {
    const { sectionIndex } = prevProps;
    if (!this.props.sectionIndex) return;
    if (sectionIndex === this.props.sectionIndex) return;
    if (this.currentProcess) {
      this.next().then(() => this.next());
    } else {
      this.next();
    }
    
  }
  componentWillUnmount(){
    this.stop();
    window.removeEventListener("resize", () => {} );
    this.mount.removeChild(this.renderer.domElement)
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

  next = async () => {
    if (this.currentProcess) return this.currentProcess;
    const id = this.props.sectionIndex;
    this.mat.uniforms.nextImage.value = this.sliderImages[id];
    this.mat.uniforms.nextImage.needsUpdate = true;
    return this.currentProcess = new Promise((resolve, reject) => {

      TweenMax.to(this.mat.uniforms.dispFactor, speedIn, {
        value: 1,
        ease: easing,
        onComplete: () => {
          this.mat.uniforms.currentImage.value = this.sliderImages[id];
          this.mat.uniforms.currentImage.needsUpdate = true;
          this.mat.uniforms.dispFactor.value = 0.0;
          this.currentProcess = null;
          resolve();
        },
      });
    })
  }

  // previous = () => {
  //   const id = parseInt(this.props.sectionIndex, 10);
  //   this.mat.uniforms.currentImage.value = this.sliderImages[id];
  //   this.mat.uniforms.currentImage.needsUpdate = true;
  //   TweenMax.to(this.mat.uniforms.dispFactor, speedOut, {
  //     value: 0,
  //     ease: easing,
  //     onComplete: () => {
  //       this.mat.uniforms.nextImage.value = this.sliderImages[id];
  //       this.mat.uniforms.nextImage.needsUpdate = true;
  //       this.mat.uniforms.dispFactor.value = 1;
  //     },
  //   });
  // };
  render() {
    return (
        <div 
            className={this.props.className}
            ref={(mount) => { this.mount = mount }}
        />
    )
  }
}
export default BackgroundSection