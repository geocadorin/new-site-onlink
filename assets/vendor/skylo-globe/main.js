var Tn = Object.defineProperty;
var Us = Object.getOwnPropertySymbols;
var yn = Object.prototype.hasOwnProperty, Sn = Object.prototype.propertyIsEnumerable;
var jt = (r, e, t) => e in r ? Tn(r, e, {enumerable: !0, configurable: !0, writable: !0, value: t}) : r[e] = t,
    zs = (r, e) => {
        for (var t in e || (e = {})) yn.call(e, t) && jt(r, t, e[t]);
        if (Us) for (var t of Us(e)) Sn.call(e, t) && jt(r, t, e[t]);
        return r
    };
var P = (r, e, t) => (jt(r, typeof e != "symbol" ? e + "" : e, t), t);
import {
    d as oe,
    E as U,
    T as cs,
    e as ee,
    f as Vs,
    g as at,
    V as Pe,
    h as N,
    i as _n,
    j as Ks,
    O as us,
    D as It,
    B as Mt,
    k as ce,
    G as z,
    F as Ws,
    M as _e,
    N as di,
    L as K,
    l as H,
    m as En,
    n as On,
    o as ke,
    A as bn,
    P as Jt,
    p as xn,
    q as In,
    r as pi,
    s as Ve,
    t as wt,
    u as Mn,
    v as wn,
    w as ze,
    x as Xe,
    y as es,
    z as Pn,
    H as Ln,
    J as An,
    K as Pt,
    Q as mi,
    U as gi,
    W as ts,
    X as Rn,
    Y as qt,
    Z as Cn,
    _ as Nn,
    $ as Dn,
    a0 as kn,
    a1 as Hn,
    a2 as Fn,
    a3 as Gn,
    a4 as Bn,
    a5 as Un,
    a6 as zn,
    a7 as vi,
    a8 as Vn,
    a9 as Kn,
    aa as Ti,
    ab as Wn,
    ac as yi,
    ad as jn,
    ae as qn,
    af as Yn,
    ag as Xn,
    ah as $n,
    ai as Zn,
    aj as Qn,
    ak as Jn,
    al as er,
    am as js,
    an as tr,
    ao as sr,
    ap as qs,
    aq as ir,
    ar as nr,
    as as rr,
    at as or,
    au as ar,
    C as lr,
    S as cr,
    a as ur,
    R as hr,
    I as fr,
    b as dr,
    c as Me,
    av as pr,
    aw as hs,
    ax as mr,
    ay as fe,
    az as I
} from "./Stars2.js";

const gr = "modulepreload", Ys = {}, vr = "/", Tr = function (e, t) {
    return !t || t.length === 0 ? e() : Promise.all(t.map(i => {
        if (i = `${vr}${i}`, i in Ys) return;
        Ys[i] = !0;
        const s = i.endsWith(".css"), o = s ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${i}"]${o}`)) return;
        const a = document.createElement("link");
        if (a.rel = s ? "stylesheet" : gr, s || (a.as = "script", a.crossOrigin = ""), a.href = i, document.head.appendChild(a), s) return new Promise((l, n) => {
            a.addEventListener("load", l), a.addEventListener("error", () => n(new Error(`Unable to preload CSS for ${i}`)))
        })
    })).then(() => e())
}, ut = class {
};
let le = ut;
P(le, "AGENT", navigator.userAgent.toLowerCase()), P(le, "MOBILE", !!navigator.maxTouchPoints), P(le, "TABLET", ut.MOBILE && Math.max(window.innerWidth, window.innerHeight) > 1e3), P(le, "PHONE", ut.MOBILE && !ut.TABLET), P(le, "WEBP", !0), P(le, "GL", (() => {
    if (typeof window == "undefined") return;
    const e = {failIfMajorPerformanceCaveat: !0};
    let t = document.createElement("canvas"), i = t.getContext("webgl2", e);
    const s = !!i;
    return i = null, t = null, s
})());

function nt(r) {
    return Object.keys(r).length === 0
}

const yr = r => typeof r == "undefined";

function Sr(r) {
    return typeof Node == "object" ? r instanceof Node : r && typeof r == "object" && typeof r.nodeType == "number" && typeof r.nodeName == "string"
}

function Si(r) {
    return typeof HTMLElement == "object" ? r instanceof HTMLElement : r && typeof r == "object" && r !== null && r.nodeType === 1 && typeof r.nodeName == "string"
}

function Le(r = "") {
    return r + "_" + Math.random().toString(36).substr(2, 9).toUpperCase()
}

class ft {
    constructor(e, t = document, i = "", s = "Block") {
        Si(e) ? this.el = e !== void 0 ? e : null : this.el = t.querySelector(e), this.selector = e, this.id = Le(i), this.type = s, this.page = t, this.init(), this.addEvents()
    }

    init() {
    }

    destroy() {
        this.removeEvents()
    }

    addEvents() {
    }

    removeEvents() {
    }

    get(e, t = this.el) {
        return t.querySelector(e)
    }

    getAll(e, t = this.el) {
        return Array.from(t.querySelectorAll(e))
    }
}

class _r extends ft {
    static init() {
        this.animateIn()
    }

    static async animateIn() {
        await oe(300), U.emit("LOAD:DONE"), U.emit("ANIMATE:IN")
    }
}

const Er = new cs;

function Or(r) {
    return new Promise(e => {
        Er.load(r, t => {
            t.needsUpdate = !0, e(t)
        })
    })
}

var br = `#define GLSLIFY 1
uniform float uTime;uniform float uAlpha;uniform vec3 uColor;varying float vRndId;varying float pct;void main(){float v=sin(uTime/200.0*vRndId);float alpha=pct*0.9+v*0.15;vec3 color=uColor;gl_FragColor=vec4(color,alpha*uAlpha);}`,
    xr = `#define GLSLIFY 1
varying vec3 vNormal;varying vec3 vPosition;varying vec3 vLight;varying vec2 vUv;uniform vec3 uColor;uniform float uTime;uniform float uAlpha;varying float vTimeDelay;float dist(vec2 p0,vec2 pf){return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));}void main(){float d=dist(vUv,vec2(0.5));float alpha=(d-.23)*uAlpha*normalize(vTimeDelay);if(d<.25){alpha=(.5-d)*uAlpha*normalize(vTimeDelay);}vec3 color=uColor;gl_FragColor=vec4(color,alpha);}`,
    Ir = `#define GLSLIFY 1
uniform vec3 uColor;uniform float uAlpha;void main(){gl_FragColor=vec4(uColor,uAlpha);}`, Mr = `#define GLSLIFY 1
uniform float uTime;varying vec2 vUv;attribute float rndId;varying float vRndId;varying float pct;void main(){vUv=uv;vRndId=rndId;pct=min(1.0,uTime/(1000./max(0.2,0.2*sin(fract(rndId)))));float vNormal=1.0;vec4 modelViewPosition=modelViewMatrix*vec4(position,vNormal);gl_Position=projectionMatrix*modelViewPosition;}`,
    wr = `#define GLSLIFY 1
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec2 fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}varying vec3 vNormal;varying vec2 vUv;varying float vTimeDelay;attribute float timeDelay;uniform float uTime;void main(){vTimeDelay=timeDelay;float noise=cnoise(vec2(timeDelay+uTime*.1));vec4 mvPosition=instanceMatrix*vec4(position*noise,1.0);vec4 modelViewPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*modelViewPosition;vUv=uv;vNormal=(modelViewMatrix*instanceMatrix*vec4(normal,0.)).xyz;}`,
    Pr = `#define GLSLIFY 1
void main(){vec4 mvPosition=instanceMatrix*vec4(position*.015,1.0);vec4 modelViewPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*modelViewPosition;}`,
    D = {
        SPHERE_BASE_COLOR: "#050706",
        SPHERE_SEA_COLOR: "#666666",
        SPHERE_DOTS_COLOR: "#627366",
        SPHERE_ROTATION: {x: 0, y: -3.141592653589793, z: 0},
        LIGHTS_AMBIENT_COLOR: "#454545",
        BACK_LIGHT_COLOR: "#4ea850",
        BACK_LIGHT_POS: {x: 268.8, y: -4e3, z: 0},
        FRONT_LIGHT_COLOR: "#e2f5e2",
        FRONT_LIGHT_POS: {x: -2400, y: 3e3, z: 3300},
        SIM_POS_GLOBE_1: {x: -870, y: 2500, z: -910},
        SIM_ROT_GLOBE_1: {x: .43, y: -3, z: .3},
        SIM_POS_GLOBE_2: {x: -870, y: 580, z: -910},
        SIM_ROT_GLOBE_2: {x: .43, y: .6, z: .3},
        SIM_POS_GLOBE_3: {x: -530, y: 200, z: 670},
        SIM_ROT_GLOBE_3: {x: .26, y: 3.2600000000000002, z: .31},
        SIM_POS_PHOTOS: {x: -680, y: -160, z: 670},
        SIM_ROT_PHOTOS: {x: -.3899999999999999, y: 4.0600000000000005, z: -.8700000000000001},
        SIM_POS_PHOTOS_2: {x: -680, y: -160, z: 670},
        SIM_ROT_PHOTOS_2: {x: -.06, y: 6.23, z: .45999999999999996},
        SIM_POS_PHOTOS_3: {x: -680, y: -160, z: 670},
        SIM_ROT_PHOTOS_3: {x: .06, y: 9.39, z: .4},
        SIM_POS_STATS: {x: 0, y: 0, z: 670},
        SIM_ROT_STATS: {x: -.17999999999999994, y: 9.56, z: -.3400000000000001},
        SIM_POS_FOOTER: {x: 0, y: 100, z: 670},
        SIM_ROT_FOOTER: {x: -.17999999999999994, y: 9.56, z: -.3400000000000001},
        SIM_SCALE_DEFAULT: 1,
        SIM_SCALE_STATS: 2,
        DEVICES_POS: {x: 100, y: 670.001220703125, z: -983.33251953125},
        DEVICES_POS_MOBILE: {x: 100, y: 670.001220703125, z: -983.33251953125},
        DEVICES_ROT: {_x: 0, _y: -1.5707963267948966, _z: 0, _order: "XYZ"},
        PHONE_POS: {x: -.4999877929687504, y: 3.13333740234375, z: -3.2999999999999994},
        PHONE_POS_MOBILE: {x: -.4999877929687504, y: 3.13333740234375, z: -3.2999999999999994},
        PHONE_ROT: {_x: .46668701171875, _y: .45333618164062495, _z: .14000244140624998, _order: "XYZ"},
        WATCH_POS: {x: 1.3866687011718748, y: 1.840001220703125, z: 3.8333374023437496},
        WATCH_POS_MOBILE: {x: 1.3866687011718748, y: 1.840001220703125, z: 3.8333374023437496},
        WATCH_ROT: {_x: -.559998779296875, _y: -.36, _z: -.23333251953125003, _order: "XYZ"},
        GPS_POS: {x: -.4333251953125, y: 3.1666748046875006, z: .573333740234375},
        GPS_POS_MOBILE: {x: -.4333251953125, y: 3.1666748046875006, z: .573333740234375},
        GPS_ROT: {_x: .06666748046875004, _y: -.33332519531250004, _z: -.23333251953124998, _order: "XYZ"},
        SATELLITE_POS: {x: 0, y: 0, z: 0},
        SATELLITE_ROT: {_x: 0, _y: 0, _z: 0, _order: "XYZ"}
    };

class Lr extends ee {
    constructor(e) {
        super(), this.loaded = !1, this.radius = e, this.pulsingDots = new ee, this.pulsingOn(), this.countryPositions = [], this.seaPositions = []
    }

    async load() {
        const e = await this.getImageData("assets/vendor/bolk-skylo/images/globe/map.png"),
            t = await this.getImageData("assets/vendor/bolk-skylo/images/globe/searoutes.png");
        this.initDots(e, t)
    }

    async getImageData(e) {
        const t = await Or(e), {image: i} = t, {width: s, height: o} = i, a = document.createElement("canvas");
        a.width = s, a.height = o;
        const l = a.getContext("2d");
        return l.drawImage(i, 0, 0), l.getImageData(0, 0, s, o)
    }

    getRandomArbitrary(e, t) {
        return Math.random() * (t - e) + e
    }

    initSatellitePoints() {
        this.satellitePoints = [];
        const t = this.radius / 11, i = new Vs(t, 24);
        this.material2 = new at({
            transparent: !0,
            depthWrite: !1,
            uniforms: {
                uTime: {value: 0},
                uAlpha: {value: .16},
                uResolution: {value: new Pe},
                uColor: {value: new N(7599476)}
            },
            vertexShader: wr,
            fragmentShader: xr
        }), this.instanceDelays = [], this.positions = [...this.countryPositions, ...this.seaPositions].filter((e, s) => s % 4 === 0);
        for (let s = 0; s < this.positions.length; s++) this.instanceDelays.push(this.getRandomArbitrary(0, 5));
        this.materialStatic = new at({
            transparent: !0,
            depthWrite: !1,
            uniforms: {uColor: {value: new N(7599476)}, uAlpha: {value: .55}},
            vertexShader: Pr,
            fragmentShader: Ir
        }), i.setAttribute("timeDelay", new _n(new Float32Array(this.instanceDelays), 1)), this.satelliteMesh = new Ks(i, this.material2, this.positions.length), this.satelliteMeshStatic = new Ks(i, this.materialStatic, this.positions.length), this.dummy = new us;
        for (let s = 0; s < this.positions.length; s++) {
            const {x: o, y: a, z: l} = this.positions[s];
            this.dummy.position.set(o, a, l), this.dummy.lookAt(0, 0, 0), this.dummy.updateMatrix(), this.satelliteMesh.setMatrixAt(s, this.dummy.matrix), this.satelliteMeshStatic.setMatrixAt(s, this.dummy.matrix)
        }
        this.pulsingDots.add(this.satelliteMesh), this.pulsingDots.add(this.satelliteMeshStatic), this.satellitePointCount = this.positions.length, this.material2.side = It, this.materialStatic.side = It, this.material2.uniforms.uResolution.value.x = window.innerWidth, this.material2.uniforms.uResolution.value.y = window.innerHeight, this.loaded = !0
    }

    initImagePoints(e, t, i = !0) {
        const {radius: s} = this, o = s / 250, a = Math.floor(s / 600 * 6e4), l = new Vs(o, 5), n = new Mt, h = [],
            f = [], p = new ce;
        for (let m = a; m >= 0; m--) {
            const v = Math.acos(2 * m / a - 1), S = Math.sqrt(a * Math.PI) * v;
            if (p.setFromSphericalCoords(s, v, S), n.copy(l), n.lookAt(p), n.translate(p.x, p.y, p.z), n.computeBoundingSphere(), Rr(Ar(n.boundingSphere.center, this.position), e)[3] > 0) {
                const y = Math.random();
                y < .0275 && t.length < 500 && Math.abs(n.attributes.position.array[1]) < z.radius - 45 && t.push(new ce(n.attributes.position.array[0], n.attributes.position.array[1], n.attributes.position.array[2]));
                for (let O = 0; O < 5; O += 1) h.push(n.attributes.position.array[0], n.attributes.position.array[1], n.attributes.position.array[2], n.attributes.position.array[3 + 3 * O], n.attributes.position.array[4 + 3 * O], n.attributes.position.array[5 + 3 * O], n.attributes.position.array[6 + 3 * O], n.attributes.position.array[7 + 3 * O], n.attributes.position.array[8 + 3 * O]), f.push(y, y, y);
                h.push(n.attributes.position.array[0], n.attributes.position.array[1], n.attributes.position.array[2], n.attributes.position.array[3], n.attributes.position.array[4], n.attributes.position.array[5], n.attributes.position.array[18], n.attributes.position.array[19], n.attributes.position.array[20]), f.push(y, y, y)
            }
        }
        if (i) {
            const m = new Mt;
            m.setAttribute("position", new Ws(h, 3)), m.setAttribute("rndId", new Ws(f, 1)), this.material = new at({
                transparent: !0,
                depthWrite: !1,
                uniforms: {
                    uTime: {value: 0},
                    uAlpha: {value: 1},
                    uResolution: {value: new Pe},
                    uColor: {value: new N(D.SPHERE_DOTS_COLOR)}
                },
                vertexShader: Mr,
                fragmentShader: br
            });
            const v = new _e(m, this.material);
            this.add(v), this.material.side = di, this.material.uniforms.uResolution.value.x = window.innerWidth, this.material.uniforms.uResolution.value.y = window.innerHeight
        }
    }

    setColor(e, t, i) {
        this.material.uniforms.uColor.value = new N(e / 255, t / 255, i / 255)
    }

    pulsingOn() {
        this.pulsingDots.visible = !0
    }

    pulsingOff() {
        this.pulsingDots.visible = !1
    }

    initDots(e, t) {
        this.initImagePoints(e, this.countryPositions), this.initImagePoints(t, this.seaPositions, !1), this.initSatellitePoints(e), this.add(this.pulsingDots)
    }

    update() {
        !this.material || (this.material.uniforms.uTime.value = 3e3, this.material2.uniforms.uTime.value = z.time)
    }
}

function Ar(r, e) {
    const t = new ce;
    t.subVectors(e, r).normalize();
    const i = 1 - (.5 + Math.atan2(t.z, t.x) / (2 * Math.PI)), s = .5 + Math.asin(t.y) / Math.PI;
    return new Pe(i, s)
}

function Rr(r, e) {
    const t = e.width, i = e.height, s = 4 * Math.floor(r.x * t) + Math.floor(r.y * i) * (4 * t);
    return e.data.slice(s, s + 4)
}

function _i(r, e, t) {
    const i = r * (Math.PI / 180), s = (e + 180) * (Math.PI / 180), o = -(Math.cos(i) * Math.cos(s)) * t,
        a = Math.sin(i) * t, l = Math.cos(i) * Math.sin(s) * t;
    return {x: o, y: a, z: l}
}

class Cr extends ee {
    constructor(e) {
        super(), this.instance = e, this.camera = this.instance.camera, this.center = new ce, this.points = [], this.markers = document.querySelectorAll(".globe-marker"), this.convertMarkers(), this.initPoints()
    }

    on() {
        this.visible = !0
    }

    off() {
        this.visible = !1
    }

    convertMarkers() {
        this.markers.forEach(e => {
            const {lat: t, lng: i} = e.dataset;
            this.points.push({position: _i(parseFloat(t), parseFloat(i), z.radius), element: e})
        })
    }

    initPoints() {
        this.points.forEach(e => {
            const t = new us;
            t.position.set(e.position.x, e.position.y, e.position.z), this.add(t)
        })
    }

    update() {
        if (!!this.visible) for (let e = 0; e < this.points.length; e++) {
            const t = this.children[e], i = t.getWorldPosition(this.center).clone(),
                s = t.getWorldPosition(this.center).clone();
            i.project(this.camera);
            const o = i.x * K.w * .5, a = -i.y * K.h * .5, l = 1;
            this.points[e].element.style.transform = `translateX(${o}px) translateY(${a}px) scale(${l})`, s.z > 150 ? this.points[e].element.classList.add("visible") : this.points[e].element.classList.remove("visible")
        }
    }
}

var Ei = {
    SPHERE_BASE_COLOR: "#b4b8b4",
    SPHERE_DOTS_COLOR: "#598ed7",
    SPHERE_SEA_COLOR: "#5247c6",
    SPHERE_ROTATION: {x: .3, y: -1.6, z: 0},
    LIGHTS_AMBIENT_COLOR: "#7c7c7c",
    BACK_LIGHT_COLOR: "#7b7b7b",
    BACK_LIGHT_POS: {x: 268.8, y: -4e3, z: 0},
    FRONT_LIGHT_COLOR: "#ffffff",
    FRONT_LIGHT_POS: {x: -2300, y: 4800, z: 14e3}
};

class Nr extends ee {
    constructor(e) {
        super(), this.instance = e, this.scene = this.instance.scene, this.scene.add(this), this.el = document.querySelector(".globe-container"), this.mapTexture = new cs().load("assets/vendor/bolk-skylo/images/globe/map.png"), this.offset = new Pe, this.bounds = new Pe, this.inner = new ee, this.outer = new ee, this.outer.rotation.y = -Math.PI / 4, this.outer.add(this.inner), this.add(this.outer), this.radius = z.radius, this.segments = Math.floor(this.radius / 250 * 10) + 20, this.settings = D, this.setParams(this.settings), this.initSphere(), this.initDots(), this.initMarkers(), this.initLighting(), H.DEBUG && this.tweak()
    }

    setParams(e) {
        this.params = {
            sphere: {
                baseColor: e.SPHERE_BASE_COLOR,
                seaColor: e.SPHERE_SEA_COLOR,
                dotsColor: e.SPHERE_DOTS_COLOR,
                rotation: e.SPHERE_ROTATION
            },
            lights: {
                ambient: {color: e.LIGHTS_AMBIENT_COLOR, intensity: 1},
                point1: {color: e.BACK_LIGHT_COLOR, intensity: 1, distance: 0, decay: 2, pos: e.BACK_LIGHT_POS},
                point2: {color: e.FRONT_LIGHT_COLOR, intensity: .8, distance: 0, decay: 20, pos: e.FRONT_LIGHT_POS}
            }
        }
    }

    initSphere() {
        const e = new En(this.radius - 1, this.segments, this.segments);
        this.sphereMaterialDark = new On({
            transparent: !0,
            opacity: 1,
            color: this.params.sphere.baseColor
        }), this.sphereMaterialLight = new ke({
            transparent: !0,
            opacity: 1,
            color: this.params.sphere.baseColor
        }), this.materialParams = {saturation: 1, fresnel: 1.15};
        const t = this;
        this.sphereMaterialLight.onBeforeCompile = i => {
            i.uniforms.uMask = {value: t.mapTexture}, i.uniforms.uSeaColor = {value: new N(t.params.sphere.seaColor)}, i.uniforms.uSeaColor2 = {value: new N("#76c0a4")}, i.defines = {USE_UV: !0}, i.fragmentShader = i.fragmentShader.replace("uniform vec3 diffuse;", "uniform vec3 diffuse;uniform sampler2D uMask;uniform vec3 uSeaColor;uniform vec3 uSeaColor2;"), i.fragmentShader = i.fragmentShader.replace("#include <output_fragment>", `
           #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif
            #ifdef USE_TRANSMISSION
            diffuseColor.a *= transmissionAlpha + 0.1;
            #endif
            vec3 greenwhite = vec3(0.95, 0.95, 0.95);
            vec3 mixed = mix(outgoingLight, greenwhite, .6);
            vec4 uMaskTexture = texture2D(uMask, vUv);

            vec3 mixedColor = mix(uSeaColor, uSeaColor2, 1.-vUv.y);

            vec3 mixedSea = mix(outgoingLight, mixedColor, .5);

            mixed = mix(mixedColor, mixed, uMaskTexture.a);

            gl_FragColor = vec4( mixed, diffuseColor.a );

          `), this.sphereMaterialLight.userData.shader = i
        }, this.sphereMaterial = this.sphereMaterialDark, this.sphereMesh = new _e(e, this.sphereMaterial), this.sphereMesh.rotation.set(0, Math.PI, 0), this.inner.add(this.sphereMesh)
    }

    setOpacity(e) {
        this.sphereMaterial && (this.sphereMaterial.opacity = e), this.dots.material && (this.dots.material.uniforms.uAlpha.value = e), this.dots.material2 && (this.dots.material2.uniforms.uAlpha.value = e * .5), this.dots.materialStatic && (this.dots.materialStatic.uniforms.uAlpha.value = e)
    }

    async initDots() {
        this.dots = new Lr(this.radius), await this.dots.load(), this.params.sphere.rotation, this.inner.add(this.dots)
    }

    initMarkers() {
        this.markers = new Cr(this.instance), this.inner.add(this.markers)
    }

    initLighting() {
        const {lights: e} = this.params, {ambient: t, point1: i, point2: s} = e;
        this.ambientLight = new bn(t.color, t.intensity), this.scene.add(this.ambientLight), this.backLight = new Jt(i.color, i.intensity, i.distance, i.decay), this.backLight.position.set(i.pos.x, i.pos.y, i.pos.z), this.scene.add(this.backLight), this.frontLight = new Jt(s.color, s.intensity, s.distance, s.decay), this.frontLight.position.set(s.pos.x, s.pos.y, s.pos.z), this.scene.add(this.frontLight)
    }

    setTheme(e = "dark") {
        const t = e === "dark";
        this.sphereMaterial = t ? this.sphereMaterialDark : this.sphereMaterialLight, this.settings = t ? D : Ei, this.setParams(this.settings), this.sphereMaterial.color = new N(this.params.sphere.baseColor), this.dots.material && (this.dots.material.uniforms.uColor.value = new N(this.params.sphere.dotsColor)), this.sphereMesh.material = this.sphereMaterial, this.ambientLight.color = new N(this.params.lights.ambient.color), this.backLight.color = new N(this.params.lights.point1.color), this.frontLight.color = new N(this.params.lights.point2.color)
    }

    resize() {
    }

    update() {
        var e;
        this.dots.update(), (e = this.markers) == null || e.update()
    }

    tweak() {
        const e = z.pane.addFolder({title: "Globe", expanded: !1});
        e.addInput(this.params.sphere, "baseColor", {
            label: "Sphere base color",
            presetKey: "SPHERE_BASE_COLOR"
        }).on("change", i => {
            this.sphereMaterial.color = new N(i.value)
        }), e.addInput(this.params.sphere, "seaColor", {
            label: "Sphere sea color",
            presetKey: "SPHERE_SEA_COLOR"
        }).on("change", i => {
            this.sphereMaterial.userData.shader.uniforms.uSeaColor.value = new N(i.value)
        }), e.addInput(this.params.sphere, "dotsColor", {
            label: "Sphere dots color",
            presetKey: "SPHERE_DOTS_COLOR"
        }), e.addInput(this.params.sphere, "rotation", {
            label: "Sphere dots color",
            presetKey: "SPHERE_ROTATION"
        }).on("change", i => {
            this.dots.rotation.set(i.value.x, i.value.y, i.value.z)
        });
        const t = z.pane.addFolder({title: "Lights", expanded: !1});
        t.addInput(this.params.lights.ambient, "color", {
            label: "Ambient color",
            presetKey: "LIGHTS_AMBIENT_COLOR"
        }).on("change", i => {
            this.ambientLight.color = new N(i.value)
        }), t.addInput(this.params.lights.point1, "color", {
            label: "Back light color",
            presetKey: "BACK_LIGHT_COLOR"
        }).on("change", i => {
            this.backLight.color = new N(i.value)
        }), t.addInput(this.params.lights.point1, "pos", {
            label: "Back light position",
            presetKey: "BACK_LIGHT_POS",
            step: 100
        }).on("change", i => {
            this.backLight.position.set(i.value.x, i.value.y, i.value.z)
        }), t.addInput(this.params.lights.point2, "color", {
            label: "Front light color",
            presetKey: "FRONT_LIGHT_COLOR"
        }).on("change", i => {
            this.frontLight.color = new N(i.value)
        }), t.addInput(this.params.lights.point2, "pos", {
            label: "Front light position",
            presetKey: "FRONT_LIGHT_POS",
            step: 100
        }).on("change", i => {
            this.frontLight.position.set(i.value.x, i.value.y, i.value.z)
        })
    }
}

var Dr = `precision highp float;
#define GLSLIFY 1
#define PI 3.14159265359
#define EXP 2.71828182846
float w1=1.0;float w2=1.0;float w3=20.0;float A=1.0;float R=1.15;float horizontal(in vec2 xy,float t){float v=cos(w1*xy.x+A*t);return v;}float diagonal(in vec2 xy,float t){float v=cos(w2*(xy.x*cos(t)+5.0*xy.y*sin(t))+A*t);return v;}float radial(in vec2 xy,float t){float x=0.3*xy.x-0.5+cos(t);float y=0.3*xy.y-0.5+sin(t*0.5);float v=sin(w3*sqrt(x*x+y*y+1.0)+A*t);return v;}float map(float a,float b,float c,float d,float x){return((x-a)*(d-c)/(b-a))+c;}varying vec2 vUv;uniform float uTime;void main(){float t=uTime*3.5;vec2 xy=vUv.xy*2.;float v=horizontal(xy,t);v+=diagonal(xy,t);v+=radial(xy,t);v/=100.0;float r=map(-1.0,1.0,.75,0.5,sin(PI*v));float g=map(-1.0,1.0,1.0,0.0,sin(PI*v));float b=map(-1.0,1.0,1.0,.15,sin(PI*v));vec3 noise=vec3(pow(r,R),pow(g,R),pow(b,R)+1.);float mapNoise=map(.6,.55,1.0,0.0,noise.x);vec3 greenwhite=vec3(0.95);vec3 white=vec3(1.,1.,1.);vec3 eightWhite=vec3(0.8,0.8,0.8);vec3 pink=vec3(0.41,0.41,0.91);vec3 blue=vec3(0.94,0.36,0.60);vec3 test=vec3(pow((mapNoise)*vUv.y,mapNoise+vUv.x*vUv.y));vec3 color=mix(mix(white,eightWhite,mapNoise),mix(pink,blue,mapNoise),mapNoise);vec3 mixed=mix(color,white,test.x);mixed=min(mixed,greenwhite);mixed.g=mixed.r+vUv.x*(test.x)*.5;mixed.r=mixed.b+vUv.y*(test.x)*.5;mixed=mix(mixed,white,min(test*1.,1.));mixed=mix(mixed,greenwhite,.5);gl_FragColor=vec4(mixed,1.0);}`,
    kr = `#define GLSLIFY 1
attribute vec3 position;attribute vec2 uv;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat4 modelMatrix;varying vec2 vUv;void main(void){vUv=uv;gl_Position=vec4(position,1.0);}`;

class Hr extends ee {
    constructor(e) {
        super(), this.scene = e.scene, this.initBackground(), this.scene.add(this)
    }

    initBackground() {
        const e = new xn(2, 2);
        this.material = new In({
            uniforms: {uTime: {value: 1}, uResolution: {value: new Pe(innerWidth, innerHeight)}},
            vertexShader: kr,
            depthFunc: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: Dr
        });
        const t = new _e(e, this.material);
        t.frustumCulled = !1, this.add(t), this.frustumCulled = !1, this.off()
    }

    on() {
        this.visible = !0
    }

    off() {
        this.visible = !1
    }

    update() {
        !this.visible || (this.material.uniforms.uTime.value = z.time * .15)
    }
}

class Fr extends pi {
    constructor(e) {
        super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (t) {
            return new zr(t)
        }), this.register(function (t) {
            return new Yr(t)
        }), this.register(function (t) {
            return new Xr(t)
        }), this.register(function (t) {
            return new Vr(t)
        }), this.register(function (t) {
            return new Kr(t)
        }), this.register(function (t) {
            return new Wr(t)
        }), this.register(function (t) {
            return new jr(t)
        }), this.register(function (t) {
            return new qr(t)
        }), this.register(function (t) {
            return new Br(t)
        }), this.register(function (t) {
            return new $r(t)
        })
    }

    load(e, t, i, s) {
        const o = this;
        let a;
        this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = Ve.extractUrlBase(e), this.manager.itemStart(e);
        const l = function (h) {
            s ? s(h) : console.error(h), o.manager.itemError(e), o.manager.itemEnd(e)
        }, n = new wt(this.manager);
        n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(e, function (h) {
            try {
                o.parse(h, a, function (f) {
                    t(f), o.manager.itemEnd(e)
                }, l)
            } catch (f) {
                l(f)
            }
        }, i, l)
    }

    setDRACOLoader(e) {
        return this.dracoLoader = e, this
    }

    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }

    setKTX2Loader(e) {
        return this.ktx2Loader = e, this
    }

    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e, this
    }

    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this
    }

    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
    }

    parse(e, t, i, s) {
        let o;
        const a = {}, l = {};
        if (typeof e == "string") o = e; else if (Ve.decodeText(new Uint8Array(e, 0, 4)) === Oi) {
            try {
                a[C.KHR_BINARY_GLTF] = new Zr(e)
            } catch (p) {
                s && s(p);
                return
            }
            o = a[C.KHR_BINARY_GLTF].content
        } else o = Ve.decodeText(new Uint8Array(e));
        const n = JSON.parse(o);
        if (n.asset === void 0 || n.asset.version[0] < 2) {
            s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const h = new co(n, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        h.fileLoader.setRequestHeader(this.requestHeader);
        for (let f = 0; f < this.pluginCallbacks.length; f++) {
            const p = this.pluginCallbacks[f](h);
            l[p.name] = p, a[p.name] = !0
        }
        if (n.extensionsUsed) for (let f = 0; f < n.extensionsUsed.length; ++f) {
            const p = n.extensionsUsed[f], m = n.extensionsRequired || [];
            switch (p) {
                case C.KHR_MATERIALS_UNLIT:
                    a[p] = new Ur;
                    break;
                case C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    a[p] = new eo;
                    break;
                case C.KHR_DRACO_MESH_COMPRESSION:
                    a[p] = new Qr(n, this.dracoLoader);
                    break;
                case C.KHR_TEXTURE_TRANSFORM:
                    a[p] = new Jr;
                    break;
                case C.KHR_MESH_QUANTIZATION:
                    a[p] = new to;
                    break;
                default:
                    m.indexOf(p) >= 0 && l[p] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + p + '".')
            }
        }
        h.setExtensions(a), h.setPlugins(l), h.parse(i, s)
    }

    parseAsync(e, t) {
        const i = this;
        return new Promise(function (s, o) {
            i.parse(e, t, s, o)
        })
    }
}

function Gr() {
    let r = {};
    return {
        get: function (e) {
            return r[e]
        }, add: function (e, t) {
            r[e] = t
        }, remove: function (e) {
            delete r[e]
        }, removeAll: function () {
            r = {}
        }
    }
}

const C = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};

class Br {
    constructor(e) {
        this.parser = e, this.name = C.KHR_LIGHTS_PUNCTUAL, this.cache = {refs: {}, uses: {}}
    }

    _markDefs() {
        const e = this.parser, t = this.parser.json.nodes || [];
        for (let i = 0, s = t.length; i < s; i++) {
            const o = t[i];
            o.extensions && o.extensions[this.name] && o.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, o.extensions[this.name].light)
        }
    }

    _loadLight(e) {
        const t = this.parser, i = "light:" + e;
        let s = t.cache.get(i);
        if (s) return s;
        const o = t.json, n = ((o.extensions && o.extensions[this.name] || {}).lights || [])[e];
        let h;
        const f = new N(16777215);
        n.color !== void 0 && f.fromArray(n.color);
        const p = n.range !== void 0 ? n.range : 0;
        switch (n.type) {
            case"directional":
                h = new wn(f), h.target.position.set(0, 0, -1), h.add(h.target);
                break;
            case"point":
                h = new Jt(f), h.distance = p;
                break;
            case"spot":
                h = new Mn(f), h.distance = p, n.spot = n.spot || {}, n.spot.innerConeAngle = n.spot.innerConeAngle !== void 0 ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = n.spot.outerConeAngle !== void 0 ? n.spot.outerConeAngle : Math.PI / 4, h.angle = n.spot.outerConeAngle, h.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, h.target.position.set(0, 0, -1), h.add(h.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + n.type)
        }
        return h.position.set(0, 0, 0), h.decay = 2, n.intensity !== void 0 && (h.intensity = n.intensity), h.name = t.createUniqueName(n.name || "light_" + e), s = Promise.resolve(h), t.cache.add(i, s), s
    }

    createNodeAttachment(e) {
        const t = this, i = this.parser, o = i.json.nodes[e], l = (o.extensions && o.extensions[this.name] || {}).light;
        return l === void 0 ? null : this._loadLight(l).then(function (n) {
            return i._getNodeRef(t.cache, l, n)
        })
    }
}

class Ur {
    constructor() {
        this.name = C.KHR_MATERIALS_UNLIT
    }

    getMaterialType() {
        return ze
    }

    extendParams(e, t, i) {
        const s = [];
        e.color = new N(1, 1, 1), e.opacity = 1;
        const o = t.pbrMetallicRoughness;
        if (o) {
            if (Array.isArray(o.baseColorFactor)) {
                const a = o.baseColorFactor;
                e.color.fromArray(a), e.opacity = a[3]
            }
            o.baseColorTexture !== void 0 && s.push(i.assignTexture(e, "map", o.baseColorTexture))
        }
        return Promise.all(s)
    }
}

class zr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_CLEARCOAT
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const i = this.parser, s = i.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [], a = s.extensions[this.name];
        if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && o.push(i.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && o.push(i.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (o.push(i.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
            const l = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new Pe(l, l)
        }
        return Promise.all(o)
    }
}

class Vr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_SHEEN
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const i = this.parser, s = i.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [];
        t.sheenColor = new N(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
        const a = s.extensions[this.name];
        return a.sheenColorFactor !== void 0 && t.sheenColor.fromArray(a.sheenColorFactor), a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && o.push(i.assignTexture(t, "sheenColorMap", a.sheenColorTexture)), a.sheenRoughnessTexture !== void 0 && o.push(i.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(o)
    }
}

class Kr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_TRANSMISSION
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const i = this.parser, s = i.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [], a = s.extensions[this.name];
        return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && o.push(i.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(o)
    }
}

class Wr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_VOLUME
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const i = this.parser, s = i.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [], a = s.extensions[this.name];
        t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && o.push(i.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 0;
        const l = a.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new N(l[0], l[1], l[2]), Promise.all(o)
    }
}

class jr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_IOR
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = s.extensions[this.name];
        return t.ior = o.ior !== void 0 ? o.ior : 1.5, Promise.resolve()
    }
}

class qr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_MATERIALS_SPECULAR
    }

    getMaterialType(e) {
        const i = this.parser.json.materials[e];
        return !i.extensions || !i.extensions[this.name] ? null : Xe
    }

    extendMaterialParams(e, t) {
        const i = this.parser, s = i.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [], a = s.extensions[this.name];
        t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && o.push(i.assignTexture(t, "specularIntensityMap", a.specularTexture));
        const l = a.specularColorFactor || [1, 1, 1];
        return t.specularColor = new N(l[0], l[1], l[2]), a.specularColorTexture !== void 0 && o.push(i.assignTexture(t, "specularColorMap", a.specularColorTexture).then(function (n) {
            n.encoding = es
        })), Promise.all(o)
    }
}

class Yr {
    constructor(e) {
        this.parser = e, this.name = C.KHR_TEXTURE_BASISU
    }

    loadTexture(e) {
        const t = this.parser, i = t.json, s = i.textures[e];
        if (!s.extensions || !s.extensions[this.name]) return null;
        const o = s.extensions[this.name], a = i.images[o.source], l = t.options.ktx2Loader;
        if (!l) {
            if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, a, l)
    }
}

class Xr {
    constructor(e) {
        this.parser = e, this.name = C.EXT_TEXTURE_WEBP, this.isSupported = null
    }

    loadTexture(e) {
        const t = this.name, i = this.parser, s = i.json, o = s.textures[e];
        if (!o.extensions || !o.extensions[t]) return null;
        const a = o.extensions[t], l = s.images[a.source];
        let n = i.textureLoader;
        if (l.uri) {
            const h = i.options.manager.getHandler(l.uri);
            h !== null && (n = h)
        }
        return this.detectSupport().then(function (h) {
            if (h) return i.loadTextureImage(e, l, n);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return i.loadTexture(e)
        })
    }

    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function (e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () {
                e(t.height === 1)
            }
        })), this.isSupported
    }
}

class $r {
    constructor(e) {
        this.name = C.EXT_MESHOPT_COMPRESSION, this.parser = e
    }

    loadBufferView(e) {
        const t = this.parser.json, i = t.bufferViews[e];
        if (i.extensions && i.extensions[this.name]) {
            const s = i.extensions[this.name], o = this.parser.getDependency("buffer", s.buffer),
                a = this.parser.options.meshoptDecoder;
            if (!a || !a.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return Promise.all([o, a.ready]).then(function (l) {
                const n = s.byteOffset || 0, h = s.byteLength || 0, f = s.count, p = s.byteStride,
                    m = new ArrayBuffer(f * p), v = new Uint8Array(l[0], n, h);
                return a.decodeGltfBuffer(new Uint8Array(m), f, p, v, s.mode, s.filter), m
            })
        } else return null
    }
}

const Oi = "glTF", rt = 12, Xs = {JSON: 1313821514, BIN: 5130562};

class Zr {
    constructor(e) {
        this.name = C.KHR_BINARY_GLTF, this.content = null, this.body = null;
        const t = new DataView(e, 0, rt);
        if (this.header = {
            magic: Ve.decodeText(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        }, this.header.magic !== Oi) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const i = this.header.length - rt, s = new DataView(e, rt);
        let o = 0;
        for (; o < i;) {
            const a = s.getUint32(o, !0);
            o += 4;
            const l = s.getUint32(o, !0);
            if (o += 4, l === Xs.JSON) {
                const n = new Uint8Array(e, rt + o, a);
                this.content = Ve.decodeText(n)
            } else if (l === Xs.BIN) {
                const n = rt + o;
                this.body = e.slice(n, n + a)
            }
            o += a
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}

class Qr {
    constructor(e, t) {
        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = C.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
    }

    decodePrimitive(e, t) {
        const i = this.json, s = this.dracoLoader, o = e.extensions[this.name].bufferView,
            a = e.extensions[this.name].attributes, l = {}, n = {}, h = {};
        for (const f in a) {
            const p = is[f] || f.toLowerCase();
            l[p] = a[f]
        }
        for (const f in e.attributes) {
            const p = is[f] || f.toLowerCase();
            if (a[f] !== void 0) {
                const m = i.accessors[e.attributes[f]], v = ht[m.componentType];
                h[p] = v, n[p] = m.normalized === !0
            }
        }
        return t.getDependency("bufferView", o).then(function (f) {
            return new Promise(function (p) {
                s.decodeDracoFile(f, function (m) {
                    for (const v in m.attributes) {
                        const S = m.attributes[v], y = n[v];
                        y !== void 0 && (S.normalized = y)
                    }
                    p(m)
                }, l, h)
            })
        })
    }
}

class Jr {
    constructor() {
        this.name = C.KHR_TEXTURE_TRANSFORM
    }

    extendTexture(e, t) {
        return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
    }
}

class ss extends ke {
    constructor(e) {
        super(), this.isGLTFSpecularGlossinessMaterial = !0;
        const t = ["#ifdef USE_SPECULARMAP", "	uniform sampler2D specularMap;", "#endif"].join(`
`), i = ["#ifdef USE_GLOSSINESSMAP", "	uniform sampler2D glossinessMap;", "#endif"].join(`
`),
            s = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "	vec4 texelSpecular = texture2D( specularMap, vUv );", "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "	specularFactor *= texelSpecular.rgb;", "#endif"].join(`
`),
            o = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );", "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "	glossinessFactor *= texelGlossiness.a;", "#endif"].join(`
`),
            a = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join(`
`), l = {
                specular: {value: new N().setHex(16777215)},
                glossiness: {value: 1},
                specularMap: {value: null},
                glossinessMap: {value: null}
            };
        this._extraUniforms = l, this.onBeforeCompile = function (n) {
            for (const h in l) n.uniforms[h] = l[h];
            n.fragmentShader = n.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", i).replace("#include <roughnessmap_fragment>", s).replace("#include <metalnessmap_fragment>", o).replace("#include <lights_physical_fragment>", a)
        }, Object.defineProperties(this, {
            specular: {
                get: function () {
                    return l.specular.value
                }, set: function (n) {
                    l.specular.value = n
                }
            }, specularMap: {
                get: function () {
                    return l.specularMap.value
                }, set: function (n) {
                    l.specularMap.value = n, n ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                }
            }, glossiness: {
                get: function () {
                    return l.glossiness.value
                }, set: function (n) {
                    l.glossiness.value = n
                }
            }, glossinessMap: {
                get: function () {
                    return l.glossinessMap.value
                }, set: function (n) {
                    l.glossinessMap.value = n, n ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                }
            }
        }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
    }

    copy(e) {
        return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
    }
}

class eo {
    constructor() {
        this.name = C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"]
    }

    getMaterialType() {
        return ss
    }

    extendParams(e, t, i) {
        const s = t.extensions[this.name];
        e.color = new N(1, 1, 1), e.opacity = 1;
        const o = [];
        if (Array.isArray(s.diffuseFactor)) {
            const a = s.diffuseFactor;
            e.color.fromArray(a), e.opacity = a[3]
        }
        if (s.diffuseTexture !== void 0 && o.push(i.assignTexture(e, "map", s.diffuseTexture)), e.emissive = new N(0, 0, 0), e.glossiness = s.glossinessFactor !== void 0 ? s.glossinessFactor : 1, e.specular = new N(1, 1, 1), Array.isArray(s.specularFactor) && e.specular.fromArray(s.specularFactor), s.specularGlossinessTexture !== void 0) {
            const a = s.specularGlossinessTexture;
            o.push(i.assignTexture(e, "glossinessMap", a)), o.push(i.assignTexture(e, "specularMap", a))
        }
        return Promise.all(o)
    }

    createMaterial(e) {
        const t = new ss(e);
        return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = Pn, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t
    }
}

class to {
    constructor() {
        this.name = C.KHR_MESH_QUANTIZATION
    }
}

class Ke extends or {
    constructor(e, t, i, s) {
        super(e, t, i, s)
    }

    copySampleValue_(e) {
        const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, o = e * s * 3 + s;
        for (let a = 0; a !== s; a++) t[a] = i[o + a];
        return t
    }
}

Ke.prototype.beforeStart_ = Ke.prototype.copySampleValue_;
Ke.prototype.afterEnd_ = Ke.prototype.copySampleValue_;
Ke.prototype.interpolate_ = function (r, e, t, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, n = a * 3, h = i - e,
        f = (t - e) / h, p = f * f, m = p * f, v = r * n, S = v - n, y = -2 * m + 3 * p, O = m - p, x = 1 - y,
        E = O - p + f;
    for (let b = 0; b !== a; b++) {
        const R = o[S + b + a], V = o[S + b + l] * h, L = o[v + b + a], F = o[v + b] * h;
        s[b] = x * R + E * V + y * L + O * F
    }
    return s
};
const so = new jn;

class io extends Ke {
    interpolate_(e, t, i, s) {
        const o = super.interpolate_(e, t, i, s);
        return so.fromArray(o).normalize().toArray(o), o
    }
}

const Ie = {
        FLOAT: 5126,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        LINEAR: 9729,
        REPEAT: 10497,
        SAMPLER_2D: 35678,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_SHORT: 5123
    }, ht = {5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array},
    $s = {9728: qn, 9729: mi, 9984: Yn, 9985: Xn, 9986: di, 9987: gi}, Zs = {33071: $n, 33648: Zn, 10497: ts},
    Qs = {SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16}, is = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    }, Ne = {scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences"},
    no = {CUBICSPLINE: void 0, LINEAR: vi, STEP: Qn}, Yt = {OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND"};

function ro(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ke({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Jn
    })), r.DefaultMaterial
}

function ot(r, e, t) {
    for (const i in t.extensions) r[i] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = t.extensions[i])
}

function Ue(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}

function oo(r, e, t) {
    let i = !1, s = !1;
    for (let l = 0, n = e.length; l < n; l++) {
        const h = e[l];
        if (h.POSITION !== void 0 && (i = !0), h.NORMAL !== void 0 && (s = !0), i && s) break
    }
    if (!i && !s) return Promise.resolve(r);
    const o = [], a = [];
    for (let l = 0, n = e.length; l < n; l++) {
        const h = e[l];
        if (i) {
            const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
            o.push(f)
        }
        if (s) {
            const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
            a.push(f)
        }
    }
    return Promise.all([Promise.all(o), Promise.all(a)]).then(function (l) {
        const n = l[0], h = l[1];
        return i && (r.morphAttributes.position = n), s && (r.morphAttributes.normal = h), r.morphTargetsRelative = !0, r
    })
}

function ao(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, i = e.weights.length; t < i; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        const t = e.extras.targetNames;
        if (r.morphTargetInfluences.length === t.length) {
            r.morphTargetDictionary = {};
            for (let i = 0, s = t.length; i < s; i++) r.morphTargetDictionary[t[i]] = i
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}

function lo(r) {
    const e = r.extensions && r.extensions[C.KHR_DRACO_MESH_COMPRESSION];
    let t;
    return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Js(e.attributes) : t = r.indices + ":" + Js(r.attributes) + ":" + r.mode, t
}

function Js(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let i = 0, s = t.length; i < s; i++) e += t[i] + ":" + r[t[i]] + ";";
    return e
}

function ns(r) {
    switch (r) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}

class co {
    constructor(e = {}, t = {}) {
        this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Gr, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {refs: {}, uses: {}}, this.lightCache = {
            refs: {},
            uses: {}
        }, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap != "undefined" && /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1 ? this.textureLoader = new Ln(this.options.manager) : this.textureLoader = new cs(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new wt(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }

    setExtensions(e) {
        this.extensions = e
    }

    setPlugins(e) {
        this.plugins = e
    }

    parse(e, t) {
        const i = this, s = this.json, o = this.extensions;
        this.cache.removeAll(), this._invokeAll(function (a) {
            return a._markDefs && a._markDefs()
        }), Promise.all(this._invokeAll(function (a) {
            return a.beforeRoot && a.beforeRoot()
        })).then(function () {
            return Promise.all([i.getDependencies("scene"), i.getDependencies("animation"), i.getDependencies("camera")])
        }).then(function (a) {
            const l = {
                scene: a[0][s.scene || 0],
                scenes: a[0],
                animations: a[1],
                cameras: a[2],
                asset: s.asset,
                parser: i,
                userData: {}
            };
            ot(o, l, s), Ue(l, s), Promise.all(i._invokeAll(function (n) {
                return n.afterRoot && n.afterRoot(l)
            })).then(function () {
                e(l)
            })
        }).catch(t)
    }

    _markDefs() {
        const e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [];
        for (let s = 0, o = t.length; s < o; s++) {
            const a = t[s].joints;
            for (let l = 0, n = a.length; l < n; l++) e[a[l]].isBone = !0
        }
        for (let s = 0, o = e.length; s < o; s++) {
            const a = e[s];
            a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (i[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera)
        }
    }

    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
    }

    _getNodeRef(e, t, i) {
        if (e.refs[t] <= 1) return i;
        const s = i.clone(), o = (a, l) => {
            const n = this.associations.get(a);
            n != null && this.associations.set(l, n);
            for (const [h, f] of a.children.entries()) o(f, l.children[h])
        };
        return o(i, s), s.name += "_instance_" + e.uses[t]++, s
    }

    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let i = 0; i < t.length; i++) {
            const s = e(t[i]);
            if (s) return s
        }
        return null
    }

    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const i = [];
        for (let s = 0; s < t.length; s++) {
            const o = e(t[s]);
            o && i.push(o)
        }
        return i
    }

    getDependency(e, t) {
        const i = e + ":" + t;
        let s = this.cache.get(i);
        if (!s) {
            switch (e) {
                case"scene":
                    s = this.loadScene(t);
                    break;
                case"node":
                    s = this.loadNode(t);
                    break;
                case"mesh":
                    s = this._invokeOne(function (o) {
                        return o.loadMesh && o.loadMesh(t)
                    });
                    break;
                case"accessor":
                    s = this.loadAccessor(t);
                    break;
                case"bufferView":
                    s = this._invokeOne(function (o) {
                        return o.loadBufferView && o.loadBufferView(t)
                    });
                    break;
                case"buffer":
                    s = this.loadBuffer(t);
                    break;
                case"material":
                    s = this._invokeOne(function (o) {
                        return o.loadMaterial && o.loadMaterial(t)
                    });
                    break;
                case"texture":
                    s = this._invokeOne(function (o) {
                        return o.loadTexture && o.loadTexture(t)
                    });
                    break;
                case"skin":
                    s = this.loadSkin(t);
                    break;
                case"animation":
                    s = this.loadAnimation(t);
                    break;
                case"camera":
                    s = this.loadCamera(t);
                    break;
                default:
                    throw new Error("Unknown type: " + e)
            }
            this.cache.add(i, s)
        }
        return s
    }

    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const i = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(s.map(function (o, a) {
                return i.getDependency(e, a)
            })), this.cache.add(e, t)
        }
        return t
    }

    loadBuffer(e) {
        const t = this.json.buffers[e], i = this.fileLoader;
        if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[C.KHR_BINARY_GLTF].body);
        const s = this.options;
        return new Promise(function (o, a) {
            i.load(Ve.resolveURL(t.uri, s.path), o, void 0, function () {
                a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        })
    }

    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function (i) {
            const s = t.byteLength || 0, o = t.byteOffset || 0;
            return i.slice(o, o + s)
        })
    }

    loadAccessor(e) {
        const t = this, i = this.json, s = this.json.accessors[e];
        if (s.bufferView === void 0 && s.sparse === void 0) return Promise.resolve(null);
        const o = [];
        return s.bufferView !== void 0 ? o.push(this.getDependency("bufferView", s.bufferView)) : o.push(null), s.sparse !== void 0 && (o.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(o).then(function (a) {
            const l = a[0], n = Qs[s.type], h = ht[s.componentType], f = h.BYTES_PER_ELEMENT, p = f * n,
                m = s.byteOffset || 0, v = s.bufferView !== void 0 ? i.bufferViews[s.bufferView].byteStride : void 0,
                S = s.normalized === !0;
            let y, O;
            if (v && v !== p) {
                const x = Math.floor(m / v),
                    E = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + x + ":" + s.count;
                let b = t.cache.get(E);
                b || (y = new h(l, x * v, s.count * v / f), b = new An(y, v / f), t.cache.add(E, b)), O = new er(b, n, m % v / f, S)
            } else l === null ? y = new h(s.count * n) : y = new h(l, m, s.count * n), O = new Pt(y, n, S);
            if (s.sparse !== void 0) {
                const x = Qs.SCALAR, E = ht[s.sparse.indices.componentType], b = s.sparse.indices.byteOffset || 0,
                    R = s.sparse.values.byteOffset || 0, V = new E(a[1], b, s.sparse.count * x),
                    L = new h(a[2], R, s.sparse.count * n);
                l !== null && (O = new Pt(O.array.slice(), O.itemSize, O.normalized));
                for (let F = 0, te = V.length; F < te; F++) {
                    const Y = V[F];
                    if (O.setX(Y, L[F * n]), n >= 2 && O.setY(Y, L[F * n + 1]), n >= 3 && O.setZ(Y, L[F * n + 2]), n >= 4 && O.setW(Y, L[F * n + 3]), n >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return O
        })
    }

    loadTexture(e) {
        const t = this.json, i = this.options, s = t.textures[e], o = t.images[s.source];
        let a = this.textureLoader;
        if (o.uri) {
            const l = i.manager.getHandler(o.uri);
            l !== null && (a = l)
        }
        return this.loadTextureImage(e, o, a)
    }

    loadTextureImage(e, t, i) {
        const s = this, o = this.json, a = this.options, l = o.textures[e],
            n = (t.uri || t.bufferView) + ":" + l.sampler;
        if (this.textureCache[n]) return this.textureCache[n];
        const h = self.URL || self.webkitURL;
        let f = t.uri || "", p = !1;
        if (t.bufferView !== void 0) f = s.getDependency("bufferView", t.bufferView).then(function (v) {
            p = !0;
            const S = new Blob([v], {type: t.mimeType});
            return f = h.createObjectURL(S), f
        }); else if (t.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const m = Promise.resolve(f).then(function (v) {
            return new Promise(function (S, y) {
                let O = S;
                i.isImageBitmapLoader === !0 && (O = function (x) {
                    const E = new js(x);
                    E.needsUpdate = !0, S(E)
                }), i.load(Ve.resolveURL(v, a.path), O, void 0, y)
            })
        }).then(function (v) {
            p === !0 && h.revokeObjectURL(f), v.flipY = !1, l.name && (v.name = l.name);
            const y = (o.samplers || {})[l.sampler] || {};
            return v.magFilter = $s[y.magFilter] || mi, v.minFilter = $s[y.minFilter] || gi, v.wrapS = Zs[y.wrapS] || ts, v.wrapT = Zs[y.wrapT] || ts, s.associations.set(v, {textures: e}), v
        }).catch(function () {
            return console.error("THREE.GLTFLoader: Couldn't load texture", f), null
        });
        return this.textureCache[n] = m, m
    }

    assignTexture(e, t, i) {
        const s = this;
        return this.getDependency("texture", i.index).then(function (o) {
            if (i.texCoord !== void 0 && i.texCoord != 0 && !(t === "aoMap" && i.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + i.texCoord + " for texture " + t + " not yet supported."), s.extensions[C.KHR_TEXTURE_TRANSFORM]) {
                const a = i.extensions !== void 0 ? i.extensions[C.KHR_TEXTURE_TRANSFORM] : void 0;
                if (a) {
                    const l = s.associations.get(o);
                    o = s.extensions[C.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, l)
                }
            }
            return e[t] = o, o
        })
    }

    assignFinalMaterial(e) {
        const t = e.geometry;
        let i = e.material;
        const s = t.attributes.tangent === void 0, o = t.attributes.color !== void 0,
            a = t.attributes.normal === void 0;
        if (e.isPoints) {
            const l = "PointsMaterial:" + i.uuid;
            let n = this.cache.get(l);
            n || (n = new Rn, qt.prototype.copy.call(n, i), n.color.copy(i.color), n.map = i.map, n.sizeAttenuation = !1, this.cache.add(l, n)), i = n
        } else if (e.isLine) {
            const l = "LineBasicMaterial:" + i.uuid;
            let n = this.cache.get(l);
            n || (n = new Cn, qt.prototype.copy.call(n, i), n.color.copy(i.color), this.cache.add(l, n)), i = n
        }
        if (s || o || a) {
            let l = "ClonedMaterial:" + i.uuid + ":";
            i.isGLTFSpecularGlossinessMaterial && (l += "specular-glossiness:"), s && (l += "derivative-tangents:"), o && (l += "vertex-colors:"), a && (l += "flat-shading:");
            let n = this.cache.get(l);
            n || (n = i.clone(), o && (n.vertexColors = !0), a && (n.flatShading = !0), s && (n.normalScale && (n.normalScale.y *= -1), n.clearcoatNormalScale && (n.clearcoatNormalScale.y *= -1)), this.cache.add(l, n), this.associations.set(n, this.associations.get(i))), i = n
        }
        i.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = i
    }

    getMaterialType() {
        return ke
    }

    loadMaterial(e) {
        const t = this, i = this.json, s = this.extensions, o = i.materials[e];
        let a;
        const l = {}, n = o.extensions || {}, h = [];
        if (n[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const p = s[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            a = p.getMaterialType(), h.push(p.extendParams(l, o, t))
        } else if (n[C.KHR_MATERIALS_UNLIT]) {
            const p = s[C.KHR_MATERIALS_UNLIT];
            a = p.getMaterialType(), h.push(p.extendParams(l, o, t))
        } else {
            const p = o.pbrMetallicRoughness || {};
            if (l.color = new N(1, 1, 1), l.opacity = 1, Array.isArray(p.baseColorFactor)) {
                const m = p.baseColorFactor;
                l.color.fromArray(m), l.opacity = m[3]
            }
            p.baseColorTexture !== void 0 && h.push(t.assignTexture(l, "map", p.baseColorTexture)), l.metalness = p.metallicFactor !== void 0 ? p.metallicFactor : 1, l.roughness = p.roughnessFactor !== void 0 ? p.roughnessFactor : 1, p.metallicRoughnessTexture !== void 0 && (h.push(t.assignTexture(l, "metalnessMap", p.metallicRoughnessTexture)), h.push(t.assignTexture(l, "roughnessMap", p.metallicRoughnessTexture))), a = this._invokeOne(function (m) {
                return m.getMaterialType && m.getMaterialType(e)
            }), h.push(Promise.all(this._invokeAll(function (m) {
                return m.extendMaterialParams && m.extendMaterialParams(e, l)
            })))
        }
        o.doubleSided === !0 && (l.side = It);
        const f = o.alphaMode || Yt.OPAQUE;
        if (f === Yt.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, f === Yt.MASK && (l.alphaTest = o.alphaCutoff !== void 0 ? o.alphaCutoff : .5)), o.normalTexture !== void 0 && a !== ze && (h.push(t.assignTexture(l, "normalMap", o.normalTexture)), l.normalScale = new Pe(1, 1), o.normalTexture.scale !== void 0)) {
            const p = o.normalTexture.scale;
            l.normalScale.set(p, p)
        }
        return o.occlusionTexture !== void 0 && a !== ze && (h.push(t.assignTexture(l, "aoMap", o.occlusionTexture)), o.occlusionTexture.strength !== void 0 && (l.aoMapIntensity = o.occlusionTexture.strength)), o.emissiveFactor !== void 0 && a !== ze && (l.emissive = new N().fromArray(o.emissiveFactor)), o.emissiveTexture !== void 0 && a !== ze && h.push(t.assignTexture(l, "emissiveMap", o.emissiveTexture)), Promise.all(h).then(function () {
            let p;
            return a === ss ? p = s[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l) : p = new a(l), o.name && (p.name = o.name), p.map && (p.map.encoding = es), p.emissiveMap && (p.emissiveMap.encoding = es), Ue(p, o), t.associations.set(p, {materials: e}), o.extensions && ot(s, p, o), p
        })
    }

    createUniqueName(e) {
        const t = Nn.sanitizeNodeName(e || "");
        let i = t;
        for (let s = 1; this.nodeNamesUsed[i]; ++s) i = t + "_" + s;
        return this.nodeNamesUsed[i] = !0, i
    }

    loadGeometries(e) {
        const t = this, i = this.extensions, s = this.primitiveCache;

        function o(l) {
            return i[C.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l, t).then(function (n) {
                return ei(n, l, t)
            })
        }

        const a = [];
        for (let l = 0, n = e.length; l < n; l++) {
            const h = e[l], f = lo(h), p = s[f];
            if (p) a.push(p.promise); else {
                let m;
                h.extensions && h.extensions[C.KHR_DRACO_MESH_COMPRESSION] ? m = o(h) : m = ei(new Mt, h, t), s[f] = {
                    primitive: h,
                    promise: m
                }, a.push(m)
            }
        }
        return Promise.all(a)
    }

    loadMesh(e) {
        const t = this, i = this.json, s = this.extensions, o = i.meshes[e], a = o.primitives, l = [];
        for (let n = 0, h = a.length; n < h; n++) {
            const f = a[n].material === void 0 ? ro(this.cache) : this.getDependency("material", a[n].material);
            l.push(f)
        }
        return l.push(t.loadGeometries(a)), Promise.all(l).then(function (n) {
            const h = n.slice(0, n.length - 1), f = n[n.length - 1], p = [];
            for (let v = 0, S = f.length; v < S; v++) {
                const y = f[v], O = a[v];
                let x;
                const E = h[v];
                if (O.mode === Ie.TRIANGLES || O.mode === Ie.TRIANGLE_STRIP || O.mode === Ie.TRIANGLE_FAN || O.mode === void 0) x = o.isSkinnedMesh === !0 ? new Dn(y, E) : new _e(y, E), x.isSkinnedMesh === !0 && !x.geometry.attributes.skinWeight.normalized && x.normalizeSkinWeights(), O.mode === Ie.TRIANGLE_STRIP ? x.geometry = ti(x.geometry, tr) : O.mode === Ie.TRIANGLE_FAN && (x.geometry = ti(x.geometry, yi)); else if (O.mode === Ie.LINES) x = new kn(y, E); else if (O.mode === Ie.LINE_STRIP) x = new Hn(y, E); else if (O.mode === Ie.LINE_LOOP) x = new Fn(y, E); else if (O.mode === Ie.POINTS) x = new Gn(y, E); else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + O.mode);
                Object.keys(x.geometry.morphAttributes).length > 0 && ao(x, o), x.name = t.createUniqueName(o.name || "mesh_" + e), Ue(x, o), O.extensions && ot(s, x, O), t.assignFinalMaterial(x), p.push(x)
            }
            for (let v = 0, S = p.length; v < S; v++) t.associations.set(p[v], {meshes: e, primitives: v});
            if (p.length === 1) return p[0];
            const m = new ee;
            t.associations.set(m, {meshes: e});
            for (let v = 0, S = p.length; v < S; v++) m.add(p[v]);
            return m
        })
    }

    loadCamera(e) {
        let t;
        const i = this.json.cameras[e], s = i[i.type];
        if (!s) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return i.type === "perspective" ? t = new Bn(Un.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : i.type === "orthographic" && (t = new zn(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), i.name && (t.name = this.createUniqueName(i.name)), Ue(t, i), Promise.resolve(t)
    }

    loadSkin(e) {
        const t = this.json.skins[e], i = {joints: t.joints};
        return t.inverseBindMatrices === void 0 ? Promise.resolve(i) : this.getDependency("accessor", t.inverseBindMatrices).then(function (s) {
            return i.inverseBindMatrices = s, i
        })
    }

    loadAnimation(e) {
        const i = this.json.animations[e], s = [], o = [], a = [], l = [], n = [];
        for (let h = 0, f = i.channels.length; h < f; h++) {
            const p = i.channels[h], m = i.samplers[p.sampler], v = p.target, S = v.node !== void 0 ? v.node : v.id,
                y = i.parameters !== void 0 ? i.parameters[m.input] : m.input,
                O = i.parameters !== void 0 ? i.parameters[m.output] : m.output;
            s.push(this.getDependency("node", S)), o.push(this.getDependency("accessor", y)), a.push(this.getDependency("accessor", O)), l.push(m), n.push(v)
        }
        return Promise.all([Promise.all(s), Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(n)]).then(function (h) {
            const f = h[0], p = h[1], m = h[2], v = h[3], S = h[4], y = [];
            for (let x = 0, E = f.length; x < E; x++) {
                const b = f[x], R = p[x], V = m[x], L = v[x], F = S[x];
                if (b === void 0) continue;
                b.updateMatrix(), b.matrixAutoUpdate = !0;
                let te;
                switch (Ne[F.path]) {
                    case Ne.weights:
                        te = ir;
                        break;
                    case Ne.rotation:
                        te = qs;
                        break;
                    case Ne.position:
                    case Ne.scale:
                    default:
                        te = sr;
                        break
                }
                const Y = b.name ? b.name : b.uuid, k = L.interpolation !== void 0 ? no[L.interpolation] : vi, $ = [];
                Ne[F.path] === Ne.weights ? b.traverse(function (G) {
                    G.morphTargetInfluences && $.push(G.name ? G.name : G.uuid)
                }) : $.push(Y);
                let J = V.array;
                if (V.normalized) {
                    const G = ns(J.constructor), ae = new Float32Array(J.length);
                    for (let ne = 0, je = J.length; ne < je; ne++) ae[ne] = J[ne] * G;
                    J = ae
                }
                for (let G = 0, ae = $.length; G < ae; G++) {
                    const ne = new te($[G] + "." + Ne[F.path], R.array, J, k);
                    L.interpolation === "CUBICSPLINE" && (ne.createInterpolant = function (de) {
                        const Ee = this instanceof qs ? io : Ke;
                        return new Ee(this.times, this.values, this.getValueSize() / 3, de)
                    }, ne.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), y.push(ne)
                }
            }
            const O = i.name ? i.name : "animation_" + e;
            return new Vn(O, void 0, y)
        })
    }

    createNodeMesh(e) {
        const t = this.json, i = this, s = t.nodes[e];
        return s.mesh === void 0 ? null : i.getDependency("mesh", s.mesh).then(function (o) {
            const a = i._getNodeRef(i.meshCache, s.mesh, o);
            return s.weights !== void 0 && a.traverse(function (l) {
                if (!!l.isMesh) for (let n = 0, h = s.weights.length; n < h; n++) l.morphTargetInfluences[n] = s.weights[n]
            }), a
        })
    }

    loadNode(e) {
        const t = this.json, i = this.extensions, s = this, o = t.nodes[e],
            a = o.name ? s.createUniqueName(o.name) : "";
        return function () {
            const l = [], n = s._invokeOne(function (h) {
                return h.createNodeMesh && h.createNodeMesh(e)
            });
            return n && l.push(n), o.camera !== void 0 && l.push(s.getDependency("camera", o.camera).then(function (h) {
                return s._getNodeRef(s.cameraCache, o.camera, h)
            })), s._invokeAll(function (h) {
                return h.createNodeAttachment && h.createNodeAttachment(e)
            }).forEach(function (h) {
                l.push(h)
            }), Promise.all(l)
        }().then(function (l) {
            let n;
            if (o.isBone === !0 ? n = new Kn : l.length > 1 ? n = new ee : l.length === 1 ? n = l[0] : n = new us, n !== l[0]) for (let h = 0, f = l.length; h < f; h++) n.add(l[h]);
            if (o.name && (n.userData.name = o.name, n.name = a), Ue(n, o), o.extensions && ot(i, n, o), o.matrix !== void 0) {
                const h = new Ti;
                h.fromArray(o.matrix), n.applyMatrix4(h)
            } else o.translation !== void 0 && n.position.fromArray(o.translation), o.rotation !== void 0 && n.quaternion.fromArray(o.rotation), o.scale !== void 0 && n.scale.fromArray(o.scale);
            return s.associations.has(n) || s.associations.set(n, {}), s.associations.get(n).nodes = e, n
        })
    }

    loadScene(e) {
        const t = this.json, i = this.extensions, s = this.json.scenes[e], o = this, a = new ee;
        s.name && (a.name = o.createUniqueName(s.name)), Ue(a, s), s.extensions && ot(i, a, s);
        const l = s.nodes || [], n = [];
        for (let h = 0, f = l.length; h < f; h++) n.push(bi(l[h], a, t, o));
        return Promise.all(n).then(function () {
            const h = f => {
                const p = new Map;
                for (const [m, v] of o.associations) (m instanceof qt || m instanceof js) && p.set(m, v);
                return f.traverse(m => {
                    const v = o.associations.get(m);
                    v != null && p.set(m, v)
                }), p
            };
            return o.associations = h(a), a
        })
    }
}

function bi(r, e, t, i) {
    const s = t.nodes[r];
    return i.getDependency("node", r).then(function (o) {
        if (s.skin === void 0) return o;
        let a;
        return i.getDependency("skin", s.skin).then(function (l) {
            a = l;
            const n = [];
            for (let h = 0, f = a.joints.length; h < f; h++) n.push(i.getDependency("node", a.joints[h]));
            return Promise.all(n)
        }).then(function (l) {
            return o.traverse(function (n) {
                if (!n.isMesh) return;
                const h = [], f = [];
                for (let p = 0, m = l.length; p < m; p++) {
                    const v = l[p];
                    if (v) {
                        h.push(v);
                        const S = new Ti;
                        a.inverseBindMatrices !== void 0 && S.fromArray(a.inverseBindMatrices.array, p * 16), f.push(S)
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', a.joints[p])
                }
                n.bind(new Wn(h, f), n.matrixWorld)
            }), o
        })
    }).then(function (o) {
        e.add(o);
        const a = [];
        if (s.children) {
            const l = s.children;
            for (let n = 0, h = l.length; n < h; n++) {
                const f = l[n];
                a.push(bi(f, o, t, i))
            }
        }
        return Promise.all(a)
    })
}

function uo(r, e, t) {
    const i = e.attributes, s = new nr;
    if (i.POSITION !== void 0) {
        const l = t.json.accessors[i.POSITION], n = l.min, h = l.max;
        if (n !== void 0 && h !== void 0) {
            if (s.set(new ce(n[0], n[1], n[2]), new ce(h[0], h[1], h[2])), l.normalized) {
                const f = ns(ht[l.componentType]);
                s.min.multiplyScalar(f), s.max.multiplyScalar(f)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else return;
    const o = e.targets;
    if (o !== void 0) {
        const l = new ce, n = new ce;
        for (let h = 0, f = o.length; h < f; h++) {
            const p = o[h];
            if (p.POSITION !== void 0) {
                const m = t.json.accessors[p.POSITION], v = m.min, S = m.max;
                if (v !== void 0 && S !== void 0) {
                    if (n.setX(Math.max(Math.abs(v[0]), Math.abs(S[0]))), n.setY(Math.max(Math.abs(v[1]), Math.abs(S[1]))), n.setZ(Math.max(Math.abs(v[2]), Math.abs(S[2]))), m.normalized) {
                        const y = ns(ht[m.componentType]);
                        n.multiplyScalar(y)
                    }
                    l.max(n)
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        s.expandByVector(l)
    }
    r.boundingBox = s;
    const a = new rr;
    s.getCenter(a.center), a.radius = s.min.distanceTo(s.max) / 2, r.boundingSphere = a
}

function ei(r, e, t) {
    const i = e.attributes, s = [];

    function o(a, l) {
        return t.getDependency("accessor", a).then(function (n) {
            r.setAttribute(l, n)
        })
    }

    for (const a in i) {
        const l = is[a] || a.toLowerCase();
        l in r.attributes || s.push(o(i[a], l))
    }
    if (e.indices !== void 0 && !r.index) {
        const a = t.getDependency("accessor", e.indices).then(function (l) {
            r.setIndex(l)
        });
        s.push(a)
    }
    return Ue(r, e), uo(r, e, t), Promise.all(s).then(function () {
        return e.targets !== void 0 ? oo(r, e.targets, t) : r
    })
}

function ti(r, e) {
    let t = r.getIndex();
    if (t === null) {
        const a = [], l = r.getAttribute("position");
        if (l !== void 0) {
            for (let n = 0; n < l.count; n++) a.push(n);
            r.setIndex(a), t = r.getIndex()
        } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r
    }
    const i = t.count - 2, s = [];
    if (e === yi) for (let a = 1; a <= i; a++) s.push(t.getX(0)), s.push(t.getX(a)), s.push(t.getX(a + 1)); else for (let a = 0; a < i; a++) a % 2 === 0 ? (s.push(t.getX(a)), s.push(t.getX(a + 1)), s.push(t.getX(a + 2))) : (s.push(t.getX(a + 2)), s.push(t.getX(a + 1)), s.push(t.getX(a)));
    s.length / 3 !== i && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const o = r.clone();
    return o.setIndex(s), o
}

const Xt = new WeakMap;

class ho extends pi {
    constructor(e) {
        super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        }
    }

    setDecoderPath(e) {
        return this.decoderPath = e, this
    }

    setDecoderConfig(e) {
        return this.decoderConfig = e, this
    }

    setWorkerLimit(e) {
        return this.workerLimit = e, this
    }

    load(e, t, i, s) {
        const o = new wt(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, a => {
            const l = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(a, l).then(t).catch(s)
        }, i, s)
    }

    decodeDracoFile(e, t, i, s) {
        const o = {
            attributeIDs: i || this.defaultAttributeIDs,
            attributeTypes: s || this.defaultAttributeTypes,
            useUniqueIDs: !!i
        };
        this.decodeGeometry(e, o).then(t)
    }

    decodeGeometry(e, t) {
        for (const n in t.attributeTypes) {
            const h = t.attributeTypes[n];
            h.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[n] = h.name)
        }
        const i = JSON.stringify(t);
        if (Xt.has(e)) {
            const n = Xt.get(e);
            if (n.key === i) return n.promise;
            if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
        }
        let s;
        const o = this.workerNextTaskID++, a = e.byteLength,
            l = this._getWorker(o, a).then(n => (s = n, new Promise((h, f) => {
                s._callbacks[o] = {resolve: h, reject: f}, s.postMessage({
                    type: "decode",
                    id: o,
                    taskConfig: t,
                    buffer: e
                }, [e])
            }))).then(n => this._createGeometry(n.geometry));
        return l.catch(() => !0).then(() => {
            s && o && this._releaseTask(s, o)
        }), Xt.set(e, {key: i, promise: l}), l
    }

    _createGeometry(e) {
        const t = new Mt;
        e.index && t.setIndex(new Pt(e.index.array, 1));
        for (let i = 0; i < e.attributes.length; i++) {
            const s = e.attributes[i], o = s.name, a = s.array, l = s.itemSize;
            t.setAttribute(o, new Pt(a, l))
        }
        return t
    }

    _loadLibrary(e, t) {
        const i = new wt(this.manager);
        return i.setPath(this.decoderPath), i.setResponseType(t), i.setWithCredentials(this.withCredentials), new Promise((s, o) => {
            i.load(e, s, void 0, o)
        })
    }

    preload() {
        return this._initDecoder(), this
    }

    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
        return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(i => {
            const s = i[0];
            e || (this.decoderConfig.wasmBinary = i[1]);
            const o = fo.toString(),
                a = ["/* draco decoder */", s, "", "/* worker */", o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))].join(`
`);
            this.workerSourceURL = URL.createObjectURL(new Blob([a]))
        }), this.decoderPending
    }

    _getWorker(e, t) {
        return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
                const s = new Worker(this.workerSourceURL);
                s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }), s.onmessage = function (o) {
                    const a = o.data;
                    switch (a.type) {
                        case"decode":
                            s._callbacks[a.id].resolve(a);
                            break;
                        case"error":
                            s._callbacks[a.id].reject(a);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"')
                    }
                }, this.workerPool.push(s)
            } else this.workerPool.sort(function (s, o) {
                return s._taskLoad > o._taskLoad ? -1 : 1
            });
            const i = this.workerPool[this.workerPool.length - 1];
            return i._taskCosts[e] = t, i._taskLoad += t, i
        })
    }

    _releaseTask(e, t) {
        e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
    }

    debug() {
        console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
    }

    dispose() {
        for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
        return this.workerPool.length = 0, this
    }
}

function fo() {
    let r, e;
    onmessage = function (a) {
        const l = a.data;
        switch (l.type) {
            case"init":
                r = l.decoderConfig, e = new Promise(function (f) {
                    r.onModuleLoaded = function (p) {
                        f({draco: p})
                    }, DracoDecoderModule(r)
                });
                break;
            case"decode":
                const n = l.buffer, h = l.taskConfig;
                e.then(f => {
                    const p = f.draco, m = new p.Decoder, v = new p.DecoderBuffer;
                    v.Init(new Int8Array(n), n.byteLength);
                    try {
                        const S = t(p, m, v, h), y = S.attributes.map(O => O.array.buffer);
                        S.index && y.push(S.index.array.buffer), self.postMessage({
                            type: "decode",
                            id: l.id,
                            geometry: S
                        }, y)
                    } catch (S) {
                        console.error(S), self.postMessage({type: "error", id: l.id, error: S.message})
                    } finally {
                        p.destroy(v), p.destroy(m)
                    }
                });
                break
        }
    };

    function t(a, l, n, h) {
        const f = h.attributeIDs, p = h.attributeTypes;
        let m, v;
        const S = l.GetEncodedGeometryType(n);
        if (S === a.TRIANGULAR_MESH) m = new a.Mesh, v = l.DecodeBufferToMesh(n, m); else if (S === a.POINT_CLOUD) m = new a.PointCloud, v = l.DecodeBufferToPointCloud(n, m); else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!v.ok() || m.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + v.error_msg());
        const y = {index: null, attributes: []};
        for (const O in f) {
            const x = self[p[O]];
            let E, b;
            if (h.useUniqueIDs) b = f[O], E = l.GetAttributeByUniqueId(m, b); else {
                if (b = l.GetAttributeId(m, a[f[O]]), b === -1) continue;
                E = l.GetAttribute(m, b)
            }
            y.attributes.push(s(a, l, m, O, x, E))
        }
        return S === a.TRIANGULAR_MESH && (y.index = i(a, l, m)), a.destroy(m), y
    }

    function i(a, l, n) {
        const f = n.num_faces() * 3, p = f * 4, m = a._malloc(p);
        l.GetTrianglesUInt32Array(n, p, m);
        const v = new Uint32Array(a.HEAPF32.buffer, m, f).slice();
        return a._free(m), {array: v, itemSize: 1}
    }

    function s(a, l, n, h, f, p) {
        const m = p.num_components(), S = n.num_points() * m, y = S * f.BYTES_PER_ELEMENT, O = o(a, f),
            x = a._malloc(y);
        l.GetAttributeDataArrayForAllPoints(n, p, O, y, x);
        const E = new f(a.HEAPF32.buffer, x, S).slice();
        return a._free(x), {name: h, array: E, itemSize: m}
    }

    function o(a, l) {
        switch (l) {
            case Float32Array:
                return a.DT_FLOAT32;
            case Int8Array:
                return a.DT_INT8;
            case Int16Array:
                return a.DT_INT16;
            case Int32Array:
                return a.DT_INT32;
            case Uint8Array:
                return a.DT_UINT8;
            case Uint16Array:
                return a.DT_UINT16;
            case Uint32Array:
                return a.DT_UINT32
        }
    }
}

const si = new Fr, ii = new ho;

function lt(r, e) {
    ii.setDecoderPath("assets/vendor/bolk-skylo/models/"), si.setDRACOLoader(ii);
    const t = `${r}`;
    return new Promise(i => {
        si.load(t, s => {
            i(s)
        })
    })
}

class po extends ee {
    constructor(e) {
        super(), this.instance = e, this.scene = this.instance.scene, this.scene.add(this), this.init()
    }

    async init() {
        const e = await lt("assets/vendor/bolk-skylo/models/sim.gltf");
        this.model = e.scene, this.updateMaterials(), this.add(this.model);
        const {SIM_POS_GLOBE_1: t, SIM_ROT_GLOBE_1: i} = D;
        this.model.scale.set(60, 60, 60), this.position.copy(t), this.rotation.set(i.x, i.y, i.z), H.DEBUG && this.tweak(), this.off()
    }

    on() {
        this.visible = !0
    }

    off() {
        this.visible = !1
    }

    updateMaterials() {
        this.model.traverse(e => {
            if (e instanceof _e && e.material instanceof ke) {
                const {map: t, color: i} = e.material;
                e.material = new ze({color: i, map: t})
            }
        })
    }

    setOpacity(e) {
        !this.model || this.model.traverse(t => {
            t instanceof _e && t.material instanceof ze && (t.material.opacity = e)
        })
    }

    tweak() {
        const e = z.pane.addFolder({title: "Sim", expanded: !1});
        e.addInput(D, "SIM_POS_GLOBE_1", {label: "SIM_POS_GLOBE_1", presetKey: "SIM_POS_GLOBE_1"}).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_GLOBE_1", {
            label: "SIM_ROT_GLOBE_1",
            presetKey: "SIM_ROT_GLOBE_1"
        }).on("change", t => {
            this.rotation.copy(t.value)
        }), e.addInput(D, "SIM_POS_GLOBE_2", {
            label: "SIM_POS_GLOBE_2",
            presetKey: "SIM_POS_GLOBE_2"
        }).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_GLOBE_2", {
            label: "SIM_ROT_GLOBE_2",
            presetKey: "SIM_ROT_GLOBE_2"
        }).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_GLOBE_3", {
            label: "SIM_POS_GLOBE_3",
            presetKey: "SIM_POS_GLOBE_3"
        }).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_GLOBE_3", {
            label: "SIM_ROT_GLOBE_3",
            presetKey: "SIM_ROT_GLOBE_3"
        }).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_PHOTOS", {label: "SIM_POS_PHOTOS", presetKey: "SIM_POS_PHOTOS"}).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_PHOTOS", {label: "SIM_ROT_PHOTOS", presetKey: "SIM_ROT_PHOTOS"}).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_PHOTOS_2", {
            label: "SIM_POS_PHOTOS_2",
            presetKey: "SIM_POS_PHOTOS_2"
        }).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_PHOTOS_2", {
            label: "SIM_ROT_PHOTOS_2",
            presetKey: "SIM_ROT_PHOTOS_2"
        }).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_PHOTOS_3", {
            label: "SIM_POS_PHOTOS_3",
            presetKey: "SIM_POS_PHOTOS_3"
        }).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_PHOTOS_3", {
            label: "SIM_ROT_PHOTOS_3",
            presetKey: "SIM_ROT_PHOTOS_3"
        }).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_STATS", {label: "SIM_POS_STATS", presetKey: "SIM_POS_STATS"}).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_STATS", {label: "SIM_ROT_STATS", presetKey: "SIM_ROT_STATS"}).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_POS_FOOTER", {label: "SIM_POS_FOOTER", presetKey: "SIM_POS_FOOTER"}).on("change", t => {
            this.position.copy(t.value)
        }), e.addInput(D, "SIM_ROT_FOOTER", {label: "SIM_ROT_FOOTER", presetKey: "SIM_ROT_FOOTER"}).on("change", t => {
            this.rotation.set(t.value.x, t.value.y, t.value.z)
        }), e.addInput(D, "SIM_SCALE_DEFAULT", {
            label: "SIM_SCALE_DEFAULT",
            presetKey: "SIM_SCALE_DEFAULT"
        }).on("change", t => {
            this.scale.set(t.value, t.value, t.value)
        }), e.addInput(D, "SIM_SCALE_STATS", {
            label: "SIM_SCALE_STATS",
            presetKey: "SIM_SCALE_STATS"
        }).on("change", t => {
            this.scale.set(t.value, t.value, t.value)
        })
    }
}

var mo = `precision highp float;
#define GLSLIFY 1
varying vec2 vUv;uniform float uTime;uniform float uAlpha;uniform vec3 uColor;void main(){float pulse=sin(uTime*2.)*.15+.5;vec3 mask=vec3(vUv.y/.75)-.75;gl_FragColor=vec4(uColor,mask*uAlpha*pulse);}`,
    go = `#define GLSLIFY 1
varying vec2 vUv;void main(void){vUv=uv;vec4 pos=vec4(position,1.0);gl_Position=projectionMatrix*modelViewMatrix*pos;}`;

class vo extends ee {
    constructor(e) {
        super(), this.instance = e, this.material = new at({
            transparent: !0,
            depthWrite: !1,
            side: It,
            uniforms: {
                uTime: {value: 0},
                uAlpha: {value: .42},
                uResolution: {value: new Pe},
                uColor: {value: new N(7599476)}
            },
            vertexShader: go,
            fragmentShader: mo
        }), this.scene = this.instance.globe.inner, this.constellationMaterials = [], this.orbitGroups = [], this.satGroup = new ee, this.add(this.satGroup), this.scene.add(this), this.initConstellation(), this.init(), this.on()
    }

    initConstellation() {
        const r = z.radius || 600;
        this.constellation = new ee;
        this.meshShell = new ee;
        this.constellation.add(this.meshShell);
        this.add(this.constellation);

        const trackMat = (mat, baseOpacity) => {
            this.constellationMaterials.push({mat, baseOpacity});
            return mat;
        };

        const meshRadius = r * 1.13;
        const nodeCount = 44;
        const nodes = [];
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < nodeCount; i++) {
            const y = 1 - (i / (nodeCount - 1)) * 2;
            const rad = Math.sqrt(1 - y * y);
            const theta = goldenAngle * i;
            const x = Math.cos(theta) * rad;
            const zPos = Math.sin(theta) * rad;
            nodes.push(new ce(x * meshRadius, y * meshRadius, zPos * meshRadius));
        }

        const meshLinePositions = [];
        const maxDist = meshRadius * 0.62;

        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                if (a.distanceTo(b) <= maxDist) {
                    meshLinePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
                }
            }
        }

        const meshGeo = new Mt;
        meshGeo.setAttribute("position", new Ws(meshLinePositions, 3));
        const meshMat = trackMat(new Cn({
            color: new N("#73f574"),
            transparent: !0,
            opacity: 0.11,
            depthWrite: !1
        }), 0.11);
        this.meshShell.add(new kn(meshGeo, meshMat));

        const vertexGeo = new En(r * 0.0055, 8, 8);
        const vertexMat = trackMat(new ze({
            color: new N("#73f574"),
            transparent: !0,
            opacity: 0.55
        }), 0.55);
        const vertexInst = new Ks(vertexGeo, vertexMat, nodes.length);
        const dummy = new us;
        for (let i = 0; i < nodes.length; i++) {
            dummy.position.copy(nodes[i]);
            dummy.updateMatrix();
            vertexInst.setMatrixAt(i, dummy.matrix);
        }
        this.meshShell.add(vertexInst);

        const orbits = [
            {rx: 0.38, ry: 0.0, rz: 0.2, radiusFactor: 1.19, opacity: 0.24, color: "#73f574", speed: 0.07, sats: 4},
            {rx: -0.46, ry: 0.65, rz: 0.26, radiusFactor: 1.24, opacity: 0.18, color: "#12f6bc", speed: -0.055, sats: 3},
            {rx: 0.82, ry: 1.25, rz: -0.3, radiusFactor: 1.28, opacity: 0.15, color: "#73f574", speed: 0.045, sats: 3}
        ];

        const satNodeGeo = new En(r * 0.0085, 10, 10);
        const satHaloGeo = new En(r * 0.017, 10, 10);
        const satNodeMat = trackMat(new ze({
            color: new N("#e9fee4"),
            transparent: !0,
            opacity: 0.85
        }), 0.85);
        const satHaloMat = trackMat(new ze({
            color: new N("#73f574"),
            transparent: !0,
            opacity: 0.2,
            depthWrite: !1
        }), 0.2);

        orbits.forEach(cfg => {
            const planeGroup = new ee;
            planeGroup.rotation.set(cfg.rx, cfg.ry, cfg.rz);

            const ringGroup = new ee;
            const ringRadius = r * cfg.radiusFactor;
            const segments = 120;
            const ringPts = [];
            for (let i = 0; i < segments; i++) {
                const a = (i / segments) * Math.PI * 2;
                ringPts.push(Math.cos(a) * ringRadius, 0, Math.sin(a) * ringRadius);
            }
            const ringGeo = new Mt;
            ringGeo.setAttribute("position", new Ws(ringPts, 3));
            const ringMat = trackMat(new Cn({
                color: new N(cfg.color),
                transparent: !0,
                opacity: cfg.opacity,
                depthWrite: !1
            }), cfg.opacity);
            ringGroup.add(new Fn(ringGeo, ringMat));

            for (let s = 0; s < cfg.sats; s++) {
                const angle = (s / cfg.sats) * Math.PI * 2;
                const sx = Math.cos(angle) * ringRadius;
                const sz = Math.sin(angle) * ringRadius;

                const dot = new _e(satNodeGeo, satNodeMat);
                dot.position.set(sx, 0, sz);
                ringGroup.add(dot);

                const halo = new _e(satHaloGeo, satHaloMat);
                halo.position.set(sx, 0, sz);
                ringGroup.add(halo);
            }

            planeGroup.add(ringGroup);
            this.constellation.add(planeGroup);
            this.orbitGroups.push({group: ringGroup, speed: cfg.speed});
        });
    }

    async init() {
        const e = await lt("assets/vendor/bolk-skylo/models/satellite.gltf");
        this.model = e.scene, this.updateMaterials(), this.model.scale.set(4.5, 4.5, 4.5), this.satellite1 = this.model.clone(), this.satellite2 = this.model.clone(), this.satellite3 = this.model.clone(), this.satellite4 = this.model.clone(), this.beams = [], this.satGroup.add(this.satellite1), this.satGroup.add(this.satellite2), this.satGroup.add(this.satellite3), this.satGroup.add(this.satellite4), this.setPosition(this.satellite1, 15, -70, z.radius * 1.38), this.setPosition(this.satellite2, -18, 20, z.radius * 1.38), this.setPosition(this.satellite3, 22, 110, z.radius * 1.38), this.setPosition(this.satellite4, -14, -159, z.radius * 1.38), this.model.lookAt(this.scene.position), H.DEBUG && this.tweak(), this.loaded = !0
    }

    on() {
        this.visible = !0
    }

    off() {
        this.visible = !1
    }

    setPosition(e, t, i, s) {
        const {x: o, y: a, z: l} = _i(t, i, s);
        e.position.set(o, a, l), e.lookAt(0, 0, 0), e.rotation.z = Math.PI / 4
    }

    createRays(e, t) {
        const i = new ar(640, 600, 60, 60, !0), s = new _e(i, this.material);
        s.position.copy(e.position), s.lookAt(0, 0, 0), s.rotateX(-Math.PI / 2), s.translateY(-300), this.satGroup.add(s)
    }

    createRay(e, t) {
        const i = [];
        return i.push(e), i.push(t), i.push(e), i
    }

    setOpacity(e) {
        const clamped = Math.max(0, Math.min(1, e));
        this.material.uniforms.uAlpha.value = clamped * .55;
        if (this.constellationMaterials && this.constellationMaterials.length) {
            this.constellationMaterials.forEach(item => {
                item.mat.opacity = item.baseOpacity * clamped;
            });
        }
        !this.model || (this.satGroup.scale.set(1.3 - clamped * .3, 1.3 - clamped * .3, 1.3 - clamped * .3), this.satGroup.traverse(t => {
            t instanceof _e && t.material instanceof ke && (t.material.opacity = clamped)
        }))
    }

    resize() {
        !this.satellite1 || (this.satellite1.position.set(0, -70, z.radius * 1.42), this.satellite2.position.set(0, 20, z.radius * 1.42), this.satellite3.position.set(0, 110, z.radius * 1.42), this.satellite4.position.set(0, -159, z.radius * 1.42))
    }

    update() {
        const t = z.time || 0;
        this.material.uniforms.uTime.value = t;
        if (this.meshShell) {
            this.meshShell.rotation.y = t * 0.04;
            this.meshShell.rotation.z = Math.sin(t * 0.15) * 0.035;
        }
        if (this.orbitGroups && this.orbitGroups.length) {
            for (let i = 0; i < this.orbitGroups.length; i++) {
                const o = this.orbitGroups[i];
                o.group.rotation.y = t * o.speed;
            }
        }
        if (this.satGroup) {
            this.satGroup.rotation.y = -t * 0.025;
        }
    }

    updateMaterials() {
        this.model.traverse(e => {
            if (e instanceof _e && e.material instanceof ke) {
                e.material.transparent = !0;
                e.material.emissive = new N("#193822");
                e.material.emissiveIntensity = 0.45;
            }
        })
    }

    tweak() {
        const e = z.pane.addFolder({title: "Satellite", expanded: !1});
        e.addInput(this.model, "position", {
            label: "position",
            presetKey: "SATELLITE_POS"
        }), e.addInput(this.model, "rotation", {label: "rotation", presetKey: "SATELLITE_ROT"})
    }
}

var To = `#define GLSLIFY 1
varying vec2 vUv;uniform vec3 uColor1;uniform vec3 uColor2;void main(){vec2 uv=vUv/1.5;vec2 origin=vec2(0.5,0.5);uv-=origin;float angle=radians(90.0)-radians(45.0)+atan(uv.y,uv.x);float len=length(uv);uv=vec2(cos(angle)*len,sin(angle)*len)+origin;vec3 gradient=mix(uColor1,uColor2,smoothstep(0.0,1.0,uv.x));gl_FragColor=vec4(gradient,1.0);}`,
    yo = `#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=uv;float vNormal=1.0;vec4 modelViewPosition=modelViewMatrix*vec4(position,vNormal);gl_Position=projectionMatrix*modelViewPosition;}`;

class So extends ee {
    constructor(e) {
        super(), this.loaded = !1, this.instance = e, this.scene = this.instance.scene, this.scene.add(this), this.phoneWrap = new ee, this.gpsWrap = new ee, this.watchWrap = new ee, this.phoneWrap.position.set(0, 20, 0), this.gpsWrap.position.set(0, 20, 0), this.watchWrap.position.set(0, 20, 0), this.add(this.phoneWrap), this.add(this.gpsWrap), this.add(this.watchWrap), this.init()
    }

    async init() {
        const e = await lt("assets/vendor/bolk-skylo/models/phone.gltf"),
            t = await lt("assets/vendor/bolk-skylo/models/watch.gltf"),
            i = await lt("assets/vendor/bolk-skylo/models/gps.gltf");
        this.phone = e.scene, this.gps = i.scene, this.watch = t.scene;
        const {
            DEVICES_POS: s,
            PHONE_POS: o,
            PHONE_ROT: a,
            WATCH_POS: l,
            WATCH_ROT: n,
            GPS_POS: h,
            GPS_ROT: f,
            DEVICES_POS_MOBILE: p
        } = D;
        this.phone.position.copy(o), this.phone.rotation.copy(a), this.watch.position.copy(l), this.watch.rotation.copy(n), this.gps.position.copy(h), this.gps.rotation.copy(f), this.updateMaterials(this.phone), this.updateMaterials(this.gps), this.updateMaterials(this.watch), this.phone.scale.set(0, 0, 0), this.gps.scale.set(0, 0, 0), this.watch.scale.set(0, 0, 0), this.phoneWrap.add(this.phone), this.gpsWrap.add(this.gps), this.watchWrap.add(this.watch), this.position.set(this.phone), this.scale.set(120, 120, 120), this.rotation.set(0, -Math.PI / 2, 0), this.loaded = !0, this.resize(), H.DEBUG && this.tweak()
    }

    resize() {
        const {
            DEVICES_POS: e,
            DEVICES_POS_MOBILE: t,
            PHONE_POS_MOBILE: i,
            PHONE_POS: s,
            WATCH_POS_MOBILE: o,
            WATCH_POS: a,
            GPS_POS_MOBILE: l,
            GPS_POS: n
        } = D;
        this.position.copy(K.w < H.BREAKPOINTS.MD ? t : e), this.phone && this.phone.position.copy(K.w < H.BREAKPOINTS.MD ? i : s), this.watch && this.watch.position.copy(K.w < H.BREAKPOINTS.MD ? o : a), this.gps && this.gps.position.copy(K.w < H.BREAKPOINTS.MD ? l : n)
    }

    on() {
        this.visible = !0
    }

    off() {
        this.visible = !1
    }

    updateMaterials(e) {
        e.traverse(t => {
            if (t instanceof _e && t.material instanceof ke) {
                const {name: i} = t.material;
                i === "Lightgrey" && (t.material.color = new N(10855845)), i === "Darkgrey" && (t.material.color = new N(7566195)), i === "Screen" && (t.material = new at({
                    uniforms: {
                        uColor1: {value: new N(65535)},
                        uColor2: {value: new N(10092390)}
                    }, vertexShader: yo, fragmentShader: To
                }))
            }
        })
    }

    setOpacity(e) {
    }

    tweak() {
        const e = z.pane.addFolder({title: "Devices", expanded: !1});
        e.addInput(this, "position", {
            presetKey: "DEVICES_POS",
            label: "DEVICES_POS"
        }), e.addInput(this, "position", {
            presetKey: "DEVICES_POS_MOBILE",
            label: "DEVICES_POS_MOBILE"
        }), e.addInput(this, "rotation", {
            presetKey: "DEVICES_ROT",
            label: "DEVICES_ROT"
        }), e.addInput(this.phone, "position", {
            presetKey: "PHONE_POS",
            label: "PHONE_POS"
        }), e.addInput(this.phone, "position", {
            presetKey: "PHONE_POS_MOBILE",
            label: "PHONE_POS_MOBILE"
        }), e.addInput(this.phone, "rotation", {
            presetKey: "PHONE_ROT",
            label: "PHONE_ROT"
        }), e.addInput(this.watch, "position", {
            presetKey: "WATCH_POS",
            label: "WATCH_POS"
        }), e.addInput(this.watch, "position", {
            presetKey: "WATCH_POS_MOBILE",
            label: "WATCH_POS_MOBILE"
        }), e.addInput(this.watch, "rotation", {
            presetKey: "WATCH_ROT",
            label: "WATCH_ROT"
        }), e.addInput(this.gps, "position", {
            presetKey: "GPS_POS",
            label: "GPS_POS"
        }), e.addInput(this.gps, "position", {
            presetKey: "GPS_POS_MOBILE",
            label: "GPS_POS_MOBILE"
        }), e.addInput(this.gps, "rotation", {presetKey: "GPS_ROT", label: "GPS_ROT"})
    }
}

class _o {
    constructor(e) {
        this.container = document.querySelector(e), this.cameraDistance = 100, this.images = [], this.onResize = this.onResize.bind(this), this.update = this.update.bind(this), this.render = this.render.bind(this), this.init(this.container)
    }

    async init(e) {
        this.clock = new lr, this.scene = new cr, this.camera = new ur, this.renderer = new hr(e), this.background = new Hr(this), this.globe = new Nr(this), this.interactions = new fr(this), this.stars = new dr(this), this.satellite = new vo(this), this.simCard = new po(this), this.devices = new So(this), this.addListeners(), Me.add(this.render, "renderer:render"), await oe(100), U.emit("GL_LOADED")
    }

    async in(e) {
        this.onResize()
    }

    out() {
    }

    async animateIn() {
        U.emit("RESIZE")
    }

    setOpacity(e) {
        this.simCard.setOpacity(e), this.globe.setOpacity(e), this.satellite && this.satellite.setOpacity(e)
    }

    destroy() {
        this.renderer.dispose(), this.removeListeners()
    }

    update() {
        var e, t, i, s, o, a;
        z.deltaTime = this.clock.getDelta(), z.time += z.deltaTime, (e = this.globe) == null || e.update(), (t = this.satellite) == null || t.update(), (i = this.interactions) == null || i.update(), (s = this.stars) == null || s.update(), (o = this.background) == null || o.update(), (a = this.camera) == null || a.update(), this.renderer.render(this.scene, this.camera)
    }

    render() {
        this.update()
    }

    addListeners() {
        U.on("RESIZE", this.onResize)
    }

    removeListeners() {
        U.off("RESIZE", this.onResize)
    }

    onResize() {
        const {w: e, h: t} = K;
        this.camera.resize(e, t), this.devices.resize(), this.globe.resize(), this.renderer.resize(e, t)
    }
}

var xi = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    }, fs = {duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0},
    Eo = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
    Lt = {CSS: {}, springs: {}};

function ye(r, e, t) {
    return Math.min(Math.max(r, e), t)
}

function ct(r, e) {
    return r.indexOf(e) > -1
}

function $t(r, e) {
    return r.apply(null, e)
}

var w = {
    arr: function (r) {
        return Array.isArray(r)
    }, obj: function (r) {
        return ct(Object.prototype.toString.call(r), "Object")
    }, pth: function (r) {
        return w.obj(r) && r.hasOwnProperty("totalLength")
    }, svg: function (r) {
        return r instanceof SVGElement
    }, inp: function (r) {
        return r instanceof HTMLInputElement
    }, dom: function (r) {
        return r.nodeType || w.svg(r)
    }, str: function (r) {
        return typeof r == "string"
    }, fnc: function (r) {
        return typeof r == "function"
    }, und: function (r) {
        return typeof r == "undefined"
    }, nil: function (r) {
        return w.und(r) || r === null
    }, hex: function (r) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)
    }, rgb: function (r) {
        return /^rgb/.test(r)
    }, hsl: function (r) {
        return /^hsl/.test(r)
    }, col: function (r) {
        return w.hex(r) || w.rgb(r) || w.hsl(r)
    }, key: function (r) {
        return !xi.hasOwnProperty(r) && !fs.hasOwnProperty(r) && r !== "targets" && r !== "keyframes"
    }
};

function Ii(r) {
    var e = /\(([^)]+)\)/.exec(r);
    return e ? e[1].split(",").map(function (t) {
        return parseFloat(t)
    }) : []
}

function Mi(r, e) {
    var t = Ii(r), i = ye(w.und(t[0]) ? 1 : t[0], .1, 100), s = ye(w.und(t[1]) ? 100 : t[1], .1, 100),
        o = ye(w.und(t[2]) ? 10 : t[2], .1, 100), a = ye(w.und(t[3]) ? 0 : t[3], .1, 100), l = Math.sqrt(s / i),
        n = o / (2 * Math.sqrt(s * i)), h = n < 1 ? l * Math.sqrt(1 - n * n) : 0, f = 1,
        p = n < 1 ? (n * l + -a) / h : -a + l;

    function m(S) {
        var y = e ? e * S / 1e3 : S;
        return n < 1 ? y = Math.exp(-y * n * l) * (f * Math.cos(h * y) + p * Math.sin(h * y)) : y = (f + p * y) * Math.exp(-y * l), S === 0 || S === 1 ? S : 1 - y
    }

    function v() {
        var S = Lt.springs[r];
        if (S) return S;
        for (var y = 1 / 6, O = 0, x = 0; ;) if (O += y, m(O) === 1) {
            if (x++, x >= 16) break
        } else x = 0;
        var E = O * y * 1e3;
        return Lt.springs[r] = E, E
    }

    return e ? m : v
}

function Oo(r) {
    return r === void 0 && (r = 10), function (e) {
        return Math.ceil(ye(e, 1e-6, 1) * r) * (1 / r)
    }
}

var bo = function () {
    var r = 11, e = 1 / (r - 1);

    function t(f, p) {
        return 1 - 3 * p + 3 * f
    }

    function i(f, p) {
        return 3 * p - 6 * f
    }

    function s(f) {
        return 3 * f
    }

    function o(f, p, m) {
        return ((t(p, m) * f + i(p, m)) * f + s(p)) * f
    }

    function a(f, p, m) {
        return 3 * t(p, m) * f * f + 2 * i(p, m) * f + s(p)
    }

    function l(f, p, m, v, S) {
        var y, O, x = 0;
        do O = p + (m - p) / 2, y = o(O, v, S) - f, y > 0 ? m = O : p = O; while (Math.abs(y) > 1e-7 && ++x < 10);
        return O
    }

    function n(f, p, m, v) {
        for (var S = 0; S < 4; ++S) {
            var y = a(p, m, v);
            if (y === 0) return p;
            var O = o(p, m, v) - f;
            p -= O / y
        }
        return p
    }

    function h(f, p, m, v) {
        if (!(0 <= f && f <= 1 && 0 <= m && m <= 1)) return;
        var S = new Float32Array(r);
        if (f !== p || m !== v) for (var y = 0; y < r; ++y) S[y] = o(y * e, f, m);

        function O(x) {
            for (var E = 0, b = 1, R = r - 1; b !== R && S[b] <= x; ++b) E += e;
            --b;
            var V = (x - S[b]) / (S[b + 1] - S[b]), L = E + V * e, F = a(L, f, m);
            return F >= .001 ? n(x, L, f, m) : F === 0 ? L : l(x, E, E + e, f, m)
        }

        return function (x) {
            return f === p && m === v || x === 0 || x === 1 ? x : o(O(x), p, v)
        }
    }

    return h
}(), wi = function () {
    var r = {
        linear: function () {
            return function (i) {
                return i
            }
        }
    }, e = {
        Sine: function () {
            return function (i) {
                return 1 - Math.cos(i * Math.PI / 2)
            }
        }, Circ: function () {
            return function (i) {
                return 1 - Math.sqrt(1 - i * i)
            }
        }, Back: function () {
            return function (i) {
                return i * i * (3 * i - 2)
            }
        }, Bounce: function () {
            return function (i) {
                for (var s, o = 4; i < ((s = Math.pow(2, --o)) - 1) / 11;) ;
                return 1 / Math.pow(4, 3 - o) - 7.5625 * Math.pow((s * 3 - 2) / 22 - i, 2)
            }
        }, Elastic: function (i, s) {
            i === void 0 && (i = 1), s === void 0 && (s = .5);
            var o = ye(i, 1, 10), a = ye(s, .1, 2);
            return function (l) {
                return l === 0 || l === 1 ? l : -o * Math.pow(2, 10 * (l - 1)) * Math.sin((l - 1 - a / (Math.PI * 2) * Math.asin(1 / o)) * (Math.PI * 2) / a)
            }
        }
    }, t = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    return t.forEach(function (i, s) {
        e[i] = function () {
            return function (o) {
                return Math.pow(o, s + 2)
            }
        }
    }), Object.keys(e).forEach(function (i) {
        var s = e[i];
        r["easeIn" + i] = s, r["easeOut" + i] = function (o, a) {
            return function (l) {
                return 1 - s(o, a)(1 - l)
            }
        }, r["easeInOut" + i] = function (o, a) {
            return function (l) {
                return l < .5 ? s(o, a)(l * 2) / 2 : 1 - s(o, a)(l * -2 + 2) / 2
            }
        }, r["easeOutIn" + i] = function (o, a) {
            return function (l) {
                return l < .5 ? (1 - s(o, a)(1 - l * 2)) / 2 : (s(o, a)(l * 2 - 1) + 1) / 2
            }
        }
    }), r
}();

function ds(r, e) {
    if (w.fnc(r)) return r;
    var t = r.split("(")[0], i = wi[t], s = Ii(r);
    switch (t) {
        case"spring":
            return Mi(r, e);
        case"cubicBezier":
            return $t(bo, s);
        case"steps":
            return $t(Oo, s);
        default:
            return $t(i, s)
    }
}

function Pi(r) {
    try {
        var e = document.querySelectorAll(r);
        return e
    } catch {
        return
    }
}

function Rt(r, e) {
    for (var t = r.length, i = arguments.length >= 2 ? arguments[1] : void 0, s = [], o = 0; o < t; o++) if (o in r) {
        var a = r[o];
        e.call(i, a, o, r) && s.push(a)
    }
    return s
}

function Ct(r) {
    return r.reduce(function (e, t) {
        return e.concat(w.arr(t) ? Ct(t) : t)
    }, [])
}

function ni(r) {
    return w.arr(r) ? r : (w.str(r) && (r = Pi(r) || r), r instanceof NodeList || r instanceof HTMLCollection ? [].slice.call(r) : [r])
}

function ps(r, e) {
    return r.some(function (t) {
        return t === e
    })
}

function ms(r) {
    var e = {};
    for (var t in r) e[t] = r[t];
    return e
}

function rs(r, e) {
    var t = ms(r);
    for (var i in r) t[i] = e.hasOwnProperty(i) ? e[i] : r[i];
    return t
}

function Nt(r, e) {
    var t = ms(r);
    for (var i in e) t[i] = w.und(r[i]) ? e[i] : r[i];
    return t
}

function xo(r) {
    var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
    return e ? "rgba(" + e[1] + ",1)" : r
}

function Io(r) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, t = r.replace(e, function (l, n, h, f) {
            return n + n + h + h + f + f
        }), i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), s = parseInt(i[1], 16), o = parseInt(i[2], 16),
        a = parseInt(i[3], 16);
    return "rgba(" + s + "," + o + "," + a + ",1)"
}

function Mo(r) {
    var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),
        t = parseInt(e[1], 10) / 360, i = parseInt(e[2], 10) / 100, s = parseInt(e[3], 10) / 100, o = e[4] || 1;

    function a(m, v, S) {
        return S < 0 && (S += 1), S > 1 && (S -= 1), S < 1 / 6 ? m + (v - m) * 6 * S : S < 1 / 2 ? v : S < 2 / 3 ? m + (v - m) * (2 / 3 - S) * 6 : m
    }

    var l, n, h;
    if (i == 0) l = n = h = s; else {
        var f = s < .5 ? s * (1 + i) : s + i - s * i, p = 2 * s - f;
        l = a(p, f, t + 1 / 3), n = a(p, f, t), h = a(p, f, t - 1 / 3)
    }
    return "rgba(" + l * 255 + "," + n * 255 + "," + h * 255 + "," + o + ")"
}

function wo(r) {
    if (w.rgb(r)) return xo(r);
    if (w.hex(r)) return Io(r);
    if (w.hsl(r)) return Mo(r)
}

function we(r) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);
    if (e) return e[1]
}

function Po(r) {
    if (ct(r, "translate") || r === "perspective") return "px";
    if (ct(r, "rotate") || ct(r, "skew")) return "deg"
}

function os(r, e) {
    return w.fnc(r) ? r(e.target, e.id, e.total) : r
}

function Se(r, e) {
    return r.getAttribute(e)
}

function gs(r, e, t) {
    var i = we(e);
    if (ps([t, "deg", "rad", "turn"], i)) return e;
    var s = Lt.CSS[e + t];
    if (!w.und(s)) return s;
    var o = 100, a = document.createElement(r.tagName),
        l = r.parentNode && r.parentNode !== document ? r.parentNode : document.body;
    l.appendChild(a), a.style.position = "absolute", a.style.width = o + t;
    var n = o / a.offsetWidth;
    l.removeChild(a);
    var h = n * parseFloat(e);
    return Lt.CSS[e + t] = h, h
}

function Li(r, e, t) {
    if (e in r.style) {
        var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            s = r.style[e] || getComputedStyle(r).getPropertyValue(i) || "0";
        return t ? gs(r, s, t) : s
    }
}

function vs(r, e) {
    if (w.dom(r) && !w.inp(r) && (!w.nil(Se(r, e)) || w.svg(r) && r[e])) return "attribute";
    if (w.dom(r) && ps(Eo, e)) return "transform";
    if (w.dom(r) && e !== "transform" && Li(r, e)) return "css";
    if (r[e] != null) return "object"
}

function Ai(r) {
    if (!!w.dom(r)) {
        for (var e = r.style.transform || "", t = /(\w+)\(([^)]*)\)/g, i = new Map, s; s = t.exec(e);) i.set(s[1], s[2]);
        return i
    }
}

function Lo(r, e, t, i) {
    var s = ct(e, "scale") ? 1 : 0 + Po(e), o = Ai(r).get(e) || s;
    return t && (t.transforms.list.set(e, o), t.transforms.last = e), i ? gs(r, o, i) : o
}

function Ts(r, e, t, i) {
    switch (vs(r, e)) {
        case"transform":
            return Lo(r, e, i, t);
        case"css":
            return Li(r, e, t);
        case"attribute":
            return Se(r, e);
        default:
            return r[e] || 0
    }
}

function ys(r, e) {
    var t = /^(\*=|\+=|-=)/.exec(r);
    if (!t) return r;
    var i = we(r) || 0, s = parseFloat(e), o = parseFloat(r.replace(t[0], ""));
    switch (t[0][0]) {
        case"+":
            return s + o + i;
        case"-":
            return s - o + i;
        case"*":
            return s * o + i
    }
}

function Ri(r, e) {
    if (w.col(r)) return wo(r);
    if (/\s/g.test(r)) return r;
    var t = we(r), i = t ? r.substr(0, r.length - t.length) : r;
    return e ? i + e : i
}

function Ss(r, e) {
    return Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2))
}

function Ao(r) {
    return Math.PI * 2 * Se(r, "r")
}

function Ro(r) {
    return Se(r, "width") * 2 + Se(r, "height") * 2
}

function Co(r) {
    return Ss({x: Se(r, "x1"), y: Se(r, "y1")}, {x: Se(r, "x2"), y: Se(r, "y2")})
}

function Ci(r) {
    for (var e = r.points, t = 0, i, s = 0; s < e.numberOfItems; s++) {
        var o = e.getItem(s);
        s > 0 && (t += Ss(i, o)), i = o
    }
    return t
}

function No(r) {
    var e = r.points;
    return Ci(r) + Ss(e.getItem(e.numberOfItems - 1), e.getItem(0))
}

function Ni(r) {
    if (r.getTotalLength) return r.getTotalLength();
    switch (r.tagName.toLowerCase()) {
        case"circle":
            return Ao(r);
        case"rect":
            return Ro(r);
        case"line":
            return Co(r);
        case"polyline":
            return Ci(r);
        case"polygon":
            return No(r)
    }
}

function Do(r) {
    var e = Ni(r);
    return r.setAttribute("stroke-dasharray", e), e
}

function ko(r) {
    for (var e = r.parentNode; w.svg(e) && w.svg(e.parentNode);) e = e.parentNode;
    return e
}

function Di(r, e) {
    var t = e || {}, i = t.el || ko(r), s = i.getBoundingClientRect(), o = Se(i, "viewBox"), a = s.width, l = s.height,
        n = t.viewBox || (o ? o.split(" ") : [0, 0, a, l]);
    return {el: i, viewBox: n, x: n[0] / 1, y: n[1] / 1, w: a, h: l, vW: n[2], vH: n[3]}
}

function Ho(r, e) {
    var t = w.str(r) ? Pi(r)[0] : r, i = e || 100;
    return function (s) {
        return {property: s, el: t, svg: Di(t), totalLength: Ni(t) * (i / 100)}
    }
}

function Fo(r, e, t) {
    function i(f) {
        f === void 0 && (f = 0);
        var p = e + f >= 1 ? e + f : 0;
        return r.el.getPointAtLength(p)
    }

    var s = Di(r.el, r.svg), o = i(), a = i(-1), l = i(1), n = t ? 1 : s.w / s.vW, h = t ? 1 : s.h / s.vH;
    switch (r.property) {
        case"x":
            return (o.x - s.x) * n;
        case"y":
            return (o.y - s.y) * h;
        case"angle":
            return Math.atan2(l.y - a.y, l.x - a.x) * 180 / Math.PI
    }
}

function ri(r, e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, i = Ri(w.pth(r) ? r.totalLength : r, e) + "";
    return {original: i, numbers: i.match(t) ? i.match(t).map(Number) : [0], strings: w.str(r) || e ? i.split(t) : []}
}

function _s(r) {
    var e = r ? Ct(w.arr(r) ? r.map(ni) : ni(r)) : [];
    return Rt(e, function (t, i, s) {
        return s.indexOf(t) === i
    })
}

function ki(r) {
    var e = _s(r);
    return e.map(function (t, i) {
        return {target: t, id: i, total: e.length, transforms: {list: Ai(t)}}
    })
}

function Go(r, e) {
    var t = ms(e);
    if (/^spring/.test(t.easing) && (t.duration = Mi(t.easing)), w.arr(r)) {
        var i = r.length, s = i === 2 && !w.obj(r[0]);
        s ? r = {value: r} : w.fnc(e.duration) || (t.duration = e.duration / i)
    }
    var o = w.arr(r) ? r : [r];
    return o.map(function (a, l) {
        var n = w.obj(a) && !w.pth(a) ? a : {value: a};
        return w.und(n.delay) && (n.delay = l ? 0 : e.delay), w.und(n.endDelay) && (n.endDelay = l === o.length - 1 ? e.endDelay : 0), n
    }).map(function (a) {
        return Nt(a, t)
    })
}

function Bo(r) {
    for (var e = Rt(Ct(r.map(function (o) {
        return Object.keys(o)
    })), function (o) {
        return w.key(o)
    }).reduce(function (o, a) {
        return o.indexOf(a) < 0 && o.push(a), o
    }, []), t = {}, i = function (o) {
        var a = e[o];
        t[a] = r.map(function (l) {
            var n = {};
            for (var h in l) w.key(h) ? h == a && (n.value = l[h]) : n[h] = l[h];
            return n
        })
    }, s = 0; s < e.length; s++) i(s);
    return t
}

function Uo(r, e) {
    var t = [], i = e.keyframes;
    i && (e = Nt(Bo(i), e));
    for (var s in e) w.key(s) && t.push({name: s, tweens: Go(e[s], r)});
    return t
}

function zo(r, e) {
    var t = {};
    for (var i in r) {
        var s = os(r[i], e);
        w.arr(s) && (s = s.map(function (o) {
            return os(o, e)
        }), s.length === 1 && (s = s[0])), t[i] = s
    }
    return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t
}

function Vo(r, e) {
    var t;
    return r.tweens.map(function (i) {
        var s = zo(i, e), o = s.value, a = w.arr(o) ? o[1] : o, l = we(a), n = Ts(e.target, r.name, l, e),
            h = t ? t.to.original : n, f = w.arr(o) ? o[0] : h, p = we(f) || we(n), m = l || p;
        return w.und(a) && (a = h), s.from = ri(f, m), s.to = ri(ys(a, f), m), s.start = t ? t.end : 0, s.end = s.start + s.delay + s.duration + s.endDelay, s.easing = ds(s.easing, s.duration), s.isPath = w.pth(o), s.isPathTargetInsideSVG = s.isPath && w.svg(e.target), s.isColor = w.col(s.from.original), s.isColor && (s.round = 1), t = s, s
    })
}

var Hi = {
    css: function (r, e, t) {
        return r.style[e] = t
    }, attribute: function (r, e, t) {
        return r.setAttribute(e, t)
    }, object: function (r, e, t) {
        return r[e] = t
    }, transform: function (r, e, t, i, s) {
        if (i.list.set(e, t), e === i.last || s) {
            var o = "";
            i.list.forEach(function (a, l) {
                o += l + "(" + a + ") "
            }), r.style.transform = o
        }
    }
};

function Fi(r, e) {
    var t = ki(r);
    t.forEach(function (i) {
        for (var s in e) {
            var o = os(e[s], i), a = i.target, l = we(o), n = Ts(a, s, l, i), h = l || we(n), f = ys(Ri(o, h), n),
                p = vs(a, s);
            Hi[p](a, s, f, i.transforms, !0)
        }
    })
}

function Ko(r, e) {
    var t = vs(r.target, e.name);
    if (t) {
        var i = Vo(e, r), s = i[i.length - 1];
        return {
            type: t,
            property: e.name,
            animatable: r,
            tweens: i,
            duration: s.end,
            delay: i[0].delay,
            endDelay: s.endDelay
        }
    }
}

function Wo(r, e) {
    return Rt(Ct(r.map(function (t) {
        return e.map(function (i) {
            return Ko(t, i)
        })
    })), function (t) {
        return !w.und(t)
    })
}

function Gi(r, e) {
    var t = r.length, i = function (o) {
        return o.timelineOffset ? o.timelineOffset : 0
    }, s = {};
    return s.duration = t ? Math.max.apply(Math, r.map(function (o) {
        return i(o) + o.duration
    })) : e.duration, s.delay = t ? Math.min.apply(Math, r.map(function (o) {
        return i(o) + o.delay
    })) : e.delay, s.endDelay = t ? s.duration - Math.max.apply(Math, r.map(function (o) {
        return i(o) + o.duration - o.endDelay
    })) : e.endDelay, s
}

var oi = 0;

function jo(r) {
    var e = rs(xi, r), t = rs(fs, r), i = Uo(t, r), s = ki(r.targets), o = Wo(s, i), a = Gi(o, t), l = oi;
    return oi++, Nt(e, {
        id: l,
        children: [],
        animatables: s,
        animations: o,
        duration: a.duration,
        delay: a.delay,
        endDelay: a.endDelay
    })
}

var me = [], Bi = function () {
    var r;

    function e() {
        !r && (!ai() || !q.suspendWhenDocumentHidden) && me.length > 0 && (r = requestAnimationFrame(t))
    }

    function t(s) {
        for (var o = me.length, a = 0; a < o;) {
            var l = me[a];
            l.paused ? (me.splice(a, 1), o--) : (l.tick(s), a++)
        }
        r = a > 0 ? requestAnimationFrame(t) : void 0
    }

    function i() {
        !q.suspendWhenDocumentHidden || (ai() ? r = cancelAnimationFrame(r) : (me.forEach(function (s) {
            return s._onDocumentVisibility()
        }), Bi()))
    }

    return typeof document != "undefined" && document.addEventListener("visibilitychange", i), e
}();

function ai() {
    return !!document && document.hidden
}

function q(r) {
    r === void 0 && (r = {});
    var e = 0, t = 0, i = 0, s, o = 0, a = null;

    function l(E) {
        var b = window.Promise && new Promise(function (R) {
            return a = R
        });
        return E.finished = b, b
    }

    var n = jo(r);
    l(n);

    function h() {
        var E = n.direction;
        E !== "alternate" && (n.direction = E !== "normal" ? "normal" : "reverse"), n.reversed = !n.reversed, s.forEach(function (b) {
            return b.reversed = n.reversed
        })
    }

    function f(E) {
        return n.reversed ? n.duration - E : E
    }

    function p() {
        e = 0, t = f(n.currentTime) * (1 / q.speed)
    }

    function m(E, b) {
        b && b.seek(E - b.timelineOffset)
    }

    function v(E) {
        if (n.reversePlayback) for (var R = o; R--;) m(E, s[R]); else for (var b = 0; b < o; b++) m(E, s[b])
    }

    function S(E) {
        for (var b = 0, R = n.animations, V = R.length; b < V;) {
            var L = R[b], F = L.animatable, te = L.tweens, Y = te.length - 1, k = te[Y];
            Y && (k = Rt(te, function (Dt) {
                return E < Dt.end
            })[0] || k);
            for (var $ = ye(E - k.start - k.delay, 0, k.duration) / k.duration, J = isNaN($) ? 1 : k.easing($), G = k.to.strings, ae = k.round, ne = [], je = k.to.numbers.length, de = void 0, Ee = 0; Ee < je; Ee++) {
                var Ae = void 0, dt = k.to.numbers[Ee], pt = k.from.numbers[Ee] || 0;
                k.isPath ? Ae = Fo(k.value, J * dt, k.isPathTargetInsideSVG) : Ae = pt + J * (dt - pt), ae && (k.isColor && Ee > 2 || (Ae = Math.round(Ae * ae) / ae)), ne.push(Ae)
            }
            var Re = G.length;
            if (!Re) de = ne[0]; else {
                de = G[0];
                for (var He = 0; He < Re; He++) {
                    G[He];
                    var qe = G[He + 1], $e = ne[He];
                    isNaN($e) || (qe ? de += $e + qe : de += $e + " ")
                }
            }
            Hi[L.type](F.target, L.property, de, F.transforms), L.currentValue = de, b++
        }
    }

    function y(E) {
        n[E] && !n.passThrough && n[E](n)
    }

    function O() {
        n.remaining && n.remaining !== !0 && n.remaining--
    }

    function x(E) {
        var b = n.duration, R = n.delay, V = b - n.endDelay, L = f(E);
        n.progress = ye(L / b * 100, 0, 100), n.reversePlayback = L < n.currentTime, s && v(L), !n.began && n.currentTime > 0 && (n.began = !0, y("begin")), !n.loopBegan && n.currentTime > 0 && (n.loopBegan = !0, y("loopBegin")), L <= R && n.currentTime !== 0 && S(0), (L >= V && n.currentTime !== b || !b) && S(b), L > R && L < V ? (n.changeBegan || (n.changeBegan = !0, n.changeCompleted = !1, y("changeBegin")), y("change"), S(L)) : n.changeBegan && (n.changeCompleted = !0, n.changeBegan = !1, y("changeComplete")), n.currentTime = ye(L, 0, b), n.began && y("update"), E >= b && (t = 0, O(), n.remaining ? (e = i, y("loopComplete"), n.loopBegan = !1, n.direction === "alternate" && h()) : (n.paused = !0, n.completed || (n.completed = !0, y("loopComplete"), y("complete"), !n.passThrough && "Promise" in window && (a(), l(n)))))
    }

    return n.reset = function () {
        var E = n.direction;
        n.passThrough = !1, n.currentTime = 0, n.progress = 0, n.paused = !0, n.began = !1, n.loopBegan = !1, n.changeBegan = !1, n.completed = !1, n.changeCompleted = !1, n.reversePlayback = !1, n.reversed = E === "reverse", n.remaining = n.loop, s = n.children, o = s.length;
        for (var b = o; b--;) n.children[b].reset();
        (n.reversed && n.loop !== !0 || E === "alternate" && n.loop === 1) && n.remaining++, S(n.reversed ? n.duration : 0)
    }, n._onDocumentVisibility = p, n.set = function (E, b) {
        return Fi(E, b), n
    }, n.tick = function (E) {
        i = E, e || (e = i), x((i + (t - e)) * q.speed)
    }, n.seek = function (E) {
        x(f(E))
    }, n.pause = function () {
        n.paused = !0, p()
    }, n.play = function () {
        !n.paused || (n.completed && n.reset(), n.paused = !1, me.push(n), p(), Bi())
    }, n.reverse = function () {
        h(), n.completed = !n.reversed, p()
    }, n.restart = function () {
        n.reset(), n.play()
    }, n.remove = function (E) {
        var b = _s(E);
        Ui(b, n)
    }, n.reset(), n.autoplay && n.play(), n
}

function li(r, e) {
    for (var t = e.length; t--;) ps(r, e[t].animatable.target) && e.splice(t, 1)
}

function Ui(r, e) {
    var t = e.animations, i = e.children;
    li(r, t);
    for (var s = i.length; s--;) {
        var o = i[s], a = o.animations;
        li(r, a), !a.length && !o.children.length && i.splice(s, 1)
    }
    !t.length && !i.length && e.pause()
}

function qo(r) {
    for (var e = _s(r), t = me.length; t--;) {
        var i = me[t];
        Ui(e, i)
    }
}

function Yo(r, e) {
    e === void 0 && (e = {});
    var t = e.direction || "normal", i = e.easing ? ds(e.easing) : null, s = e.grid, o = e.axis, a = e.from || 0,
        l = a === "first", n = a === "center", h = a === "last", f = w.arr(r), p = parseFloat(f ? r[0] : r),
        m = f ? parseFloat(r[1]) : 0, v = we(f ? r[1] : r) || 0, S = e.start || 0 + (f ? p : 0), y = [], O = 0;
    return function (x, E, b) {
        if (l && (a = 0), n && (a = (b - 1) / 2), h && (a = b - 1), !y.length) {
            for (var R = 0; R < b; R++) {
                if (!s) y.push(Math.abs(a - R)); else {
                    var V = n ? (s[0] - 1) / 2 : a % s[0], L = n ? (s[1] - 1) / 2 : Math.floor(a / s[0]), F = R % s[0],
                        te = Math.floor(R / s[0]), Y = V - F, k = L - te, $ = Math.sqrt(Y * Y + k * k);
                    o === "x" && ($ = -Y), o === "y" && ($ = -k), y.push($)
                }
                O = Math.max.apply(Math, y)
            }
            i && (y = y.map(function (G) {
                return i(G / O) * O
            })), t === "reverse" && (y = y.map(function (G) {
                return o ? G < 0 ? G * -1 : -G : Math.abs(O - G)
            }))
        }
        var J = f ? (m - p) / O : p;
        return S + J * (Math.round(y[E] * 100) / 100) + v
    }
}

function Xo(r) {
    r === void 0 && (r = {});
    var e = q(r);
    return e.duration = 0, e.add = function (t, i) {
        var s = me.indexOf(e), o = e.children;
        s > -1 && me.splice(s, 1);

        function a(m) {
            m.passThrough = !0
        }

        for (var l = 0; l < o.length; l++) a(o[l]);
        var n = Nt(t, rs(fs, r));
        n.targets = n.targets || r.targets;
        var h = e.duration;
        n.autoplay = !1, n.direction = e.direction, n.timelineOffset = w.und(i) ? h : ys(i, h), a(e), e.seek(n.timelineOffset);
        var f = q(n);
        a(f), o.push(f);
        var p = Gi(o, r);
        return e.delay = p.delay, e.endDelay = p.endDelay, e.duration = p.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
    }, e
}

q.version = "3.2.1";
q.speed = 1;
q.suspendWhenDocumentHidden = !0;
q.running = me;
q.remove = qo;
q.get = Ts;
q.set = Fi;
q.convertPx = gs;
q.path = Ho;
q.setDashoffset = Do;
q.stagger = Yo;
q.timeline = Xo;
q.easing = ds;
q.penner = wi;
q.random = function (r, e) {
    return Math.floor(Math.random() * (e - r + 1)) + r
};
var zi = {exports: {}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function (r) {
    (function (e, t, i, s) {
        var o = ["", "webkit", "Moz", "MS", "ms", "o"], a = t.createElement("div"), l = "function", n = Math.round,
            h = Math.abs, f = Date.now;

        function p(c, u, d) {
            return setTimeout(b(c, d), u)
        }

        function m(c, u, d) {
            return Array.isArray(c) ? (v(c, d[u], d), !0) : !1
        }

        function v(c, u, d) {
            var g;
            if (!!c) if (c.forEach) c.forEach(u, d); else if (c.length !== s) for (g = 0; g < c.length;) u.call(d, c[g], g, c), g++; else for (g in c) c.hasOwnProperty(g) && u.call(d, c[g], g, c)
        }

        function S(c, u, d) {
            var g = "DEPRECATED METHOD: " + u + `
` + d + ` AT 
`;
            return function () {
                var _ = new Error("get-stack-trace"),
                    M = _ && _.stack ? _.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    A = e.console && (e.console.warn || e.console.log);
                return A && A.call(e.console, g, M), c.apply(this, arguments)
            }
        }

        var y;
        typeof Object.assign != "function" ? y = function (u) {
            if (u === s || u === null) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = Object(u), g = 1; g < arguments.length; g++) {
                var _ = arguments[g];
                if (_ !== s && _ !== null) for (var M in _) _.hasOwnProperty(M) && (d[M] = _[M])
            }
            return d
        } : y = Object.assign;
        var O = S(function (u, d, g) {
            for (var _ = Object.keys(d), M = 0; M < _.length;) (!g || g && u[_[M]] === s) && (u[_[M]] = d[_[M]]), M++;
            return u
        }, "extend", "Use `assign`."), x = S(function (u, d) {
            return O(u, d, !0)
        }, "merge", "Use `assign`.");

        function E(c, u, d) {
            var g = u.prototype, _;
            _ = c.prototype = Object.create(g), _.constructor = c, _._super = g, d && y(_, d)
        }

        function b(c, u) {
            return function () {
                return c.apply(u, arguments)
            }
        }

        function R(c, u) {
            return typeof c == l ? c.apply(u && u[0] || s, u) : c
        }

        function V(c, u) {
            return c === s ? u : c
        }

        function L(c, u, d) {
            v(k(u), function (g) {
                c.addEventListener(g, d, !1)
            })
        }

        function F(c, u, d) {
            v(k(u), function (g) {
                c.removeEventListener(g, d, !1)
            })
        }

        function te(c, u) {
            for (; c;) {
                if (c == u) return !0;
                c = c.parentNode
            }
            return !1
        }

        function Y(c, u) {
            return c.indexOf(u) > -1
        }

        function k(c) {
            return c.trim().split(/\s+/g)
        }

        function $(c, u, d) {
            if (c.indexOf && !d) return c.indexOf(u);
            for (var g = 0; g < c.length;) {
                if (d && c[g][d] == u || !d && c[g] === u) return g;
                g++
            }
            return -1
        }

        function J(c) {
            return Array.prototype.slice.call(c, 0)
        }

        function G(c, u, d) {
            for (var g = [], _ = [], M = 0; M < c.length;) {
                var A = u ? c[M][u] : c[M];
                $(_, A) < 0 && g.push(c[M]), _[M] = A, M++
            }
            return d && (u ? g = g.sort(function (Q, ie) {
                return Q[u] > ie[u]
            }) : g = g.sort()), g
        }

        function ae(c, u) {
            for (var d, g, _ = u[0].toUpperCase() + u.slice(1), M = 0; M < o.length;) {
                if (d = o[M], g = d ? d + _ : u, g in c) return g;
                M++
            }
            return s
        }

        var ne = 1;

        function je() {
            return ne++
        }

        function de(c) {
            var u = c.ownerDocument || c;
            return u.defaultView || u.parentWindow || e
        }

        var Ee = /mobile|tablet|ip(ad|hone|od)|android/i, Ae = "ontouchstart" in e, dt = ae(e, "PointerEvent") !== s,
            pt = Ae && Ee.test(navigator.userAgent), Re = "touch", He = "pen", qe = "mouse", $e = "kinect", Dt = 25,
            se = 1, Fe = 2, X = 4, re = 8, mt = 1, Ze = 2, Qe = 4, Je = 8, et = 16, ge = Ze | Qe, Ge = Je | et,
            Es = ge | Ge, Os = ["x", "y"], gt = ["clientX", "clientY"];

        function ue(c, u) {
            var d = this;
            this.manager = c, this.callback = u, this.element = c.element, this.target = c.options.inputTarget, this.domHandler = function (g) {
                R(c.options.enable, [c]) && d.handler(g)
            }, this.init()
        }

        ue.prototype = {
            handler: function () {
            }, init: function () {
                this.evEl && L(this.element, this.evEl, this.domHandler), this.evTarget && L(this.target, this.evTarget, this.domHandler), this.evWin && L(de(this.element), this.evWin, this.domHandler)
            }, destroy: function () {
                this.evEl && F(this.element, this.evEl, this.domHandler), this.evTarget && F(this.target, this.evTarget, this.domHandler), this.evWin && F(de(this.element), this.evWin, this.domHandler)
            }
        };

        function Ki(c) {
            var u, d = c.options.inputClass;
            return d ? u = d : dt ? u = Ht : pt ? u = yt : Ae ? u = Ft : u = Tt, new u(c, Wi)
        }

        function Wi(c, u, d) {
            var g = d.pointers.length, _ = d.changedPointers.length, M = u & se && g - _ === 0,
                A = u & (X | re) && g - _ === 0;
            d.isFirst = !!M, d.isFinal = !!A, M && (c.session = {}), d.eventType = u, ji(c, d), c.emit("hammer.input", d), c.recognize(d), c.session.prevInput = d
        }

        function ji(c, u) {
            var d = c.session, g = u.pointers, _ = g.length;
            d.firstInput || (d.firstInput = bs(u)), _ > 1 && !d.firstMultiple ? d.firstMultiple = bs(u) : _ === 1 && (d.firstMultiple = !1);
            var M = d.firstInput, A = d.firstMultiple, Z = A ? A.center : M.center, Q = u.center = xs(g);
            u.timeStamp = f(), u.deltaTime = u.timeStamp - M.timeStamp, u.angle = kt(Z, Q), u.distance = vt(Z, Q), qi(d, u), u.offsetDirection = Ms(u.deltaX, u.deltaY);
            var ie = Is(u.deltaTime, u.deltaX, u.deltaY);
            u.overallVelocityX = ie.x, u.overallVelocityY = ie.y, u.overallVelocity = h(ie.x) > h(ie.y) ? ie.x : ie.y, u.scale = A ? $i(A.pointers, g) : 1, u.rotation = A ? Xi(A.pointers, g) : 0, u.maxPointers = d.prevInput ? u.pointers.length > d.prevInput.maxPointers ? u.pointers.length : d.prevInput.maxPointers : u.pointers.length, Yi(d, u);
            var Te = c.element;
            te(u.srcEvent.target, Te) && (Te = u.srcEvent.target), u.target = Te
        }

        function qi(c, u) {
            var d = u.center, g = c.offsetDelta || {}, _ = c.prevDelta || {}, M = c.prevInput || {};
            (u.eventType === se || M.eventType === X) && (_ = c.prevDelta = {
                x: M.deltaX || 0,
                y: M.deltaY || 0
            }, g = c.offsetDelta = {x: d.x, y: d.y}), u.deltaX = _.x + (d.x - g.x), u.deltaY = _.y + (d.y - g.y)
        }

        function Yi(c, u) {
            var d = c.lastInterval || u, g = u.timeStamp - d.timeStamp, _, M, A, Z;
            if (u.eventType != re && (g > Dt || d.velocity === s)) {
                var Q = u.deltaX - d.deltaX, ie = u.deltaY - d.deltaY, Te = Is(g, Q, ie);
                M = Te.x, A = Te.y, _ = h(Te.x) > h(Te.y) ? Te.x : Te.y, Z = Ms(Q, ie), c.lastInterval = u
            } else _ = d.velocity, M = d.velocityX, A = d.velocityY, Z = d.direction;
            u.velocity = _, u.velocityX = M, u.velocityY = A, u.direction = Z
        }

        function bs(c) {
            for (var u = [], d = 0; d < c.pointers.length;) u[d] = {
                clientX: n(c.pointers[d].clientX),
                clientY: n(c.pointers[d].clientY)
            }, d++;
            return {timeStamp: f(), pointers: u, center: xs(u), deltaX: c.deltaX, deltaY: c.deltaY}
        }

        function xs(c) {
            var u = c.length;
            if (u === 1) return {x: n(c[0].clientX), y: n(c[0].clientY)};
            for (var d = 0, g = 0, _ = 0; _ < u;) d += c[_].clientX, g += c[_].clientY, _++;
            return {x: n(d / u), y: n(g / u)}
        }

        function Is(c, u, d) {
            return {x: u / c || 0, y: d / c || 0}
        }

        function Ms(c, u) {
            return c === u ? mt : h(c) >= h(u) ? c < 0 ? Ze : Qe : u < 0 ? Je : et
        }

        function vt(c, u, d) {
            d || (d = Os);
            var g = u[d[0]] - c[d[0]], _ = u[d[1]] - c[d[1]];
            return Math.sqrt(g * g + _ * _)
        }

        function kt(c, u, d) {
            d || (d = Os);
            var g = u[d[0]] - c[d[0]], _ = u[d[1]] - c[d[1]];
            return Math.atan2(_, g) * 180 / Math.PI
        }

        function Xi(c, u) {
            return kt(u[1], u[0], gt) + kt(c[1], c[0], gt)
        }

        function $i(c, u) {
            return vt(u[0], u[1], gt) / vt(c[0], c[1], gt)
        }

        var Zi = {mousedown: se, mousemove: Fe, mouseup: X}, Qi = "mousedown", Ji = "mousemove mouseup";

        function Tt() {
            this.evEl = Qi, this.evWin = Ji, this.pressed = !1, ue.apply(this, arguments)
        }

        E(Tt, ue, {
            handler: function (u) {
                var d = Zi[u.type];
                d & se && u.button === 0 && (this.pressed = !0), d & Fe && u.which !== 1 && (d = X), this.pressed && (d & X && (this.pressed = !1), this.callback(this.manager, d, {
                    pointers: [u],
                    changedPointers: [u],
                    pointerType: qe,
                    srcEvent: u
                }))
            }
        });
        var en = {pointerdown: se, pointermove: Fe, pointerup: X, pointercancel: re, pointerout: re},
            tn = {2: Re, 3: He, 4: qe, 5: $e}, ws = "pointerdown", Ps = "pointermove pointerup pointercancel";
        e.MSPointerEvent && !e.PointerEvent && (ws = "MSPointerDown", Ps = "MSPointerMove MSPointerUp MSPointerCancel");

        function Ht() {
            this.evEl = ws, this.evWin = Ps, ue.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        E(Ht, ue, {
            handler: function (u) {
                var d = this.store, g = !1, _ = u.type.toLowerCase().replace("ms", ""), M = en[_],
                    A = tn[u.pointerType] || u.pointerType, Z = A == Re, Q = $(d, u.pointerId, "pointerId");
                M & se && (u.button === 0 || Z) ? Q < 0 && (d.push(u), Q = d.length - 1) : M & (X | re) && (g = !0), !(Q < 0) && (d[Q] = u, this.callback(this.manager, M, {
                    pointers: d,
                    changedPointers: [u],
                    pointerType: A,
                    srcEvent: u
                }), g && d.splice(Q, 1))
            }
        });
        var sn = {touchstart: se, touchmove: Fe, touchend: X, touchcancel: re}, nn = "touchstart",
            rn = "touchstart touchmove touchend touchcancel";

        function Ls() {
            this.evTarget = nn, this.evWin = rn, this.started = !1, ue.apply(this, arguments)
        }

        E(Ls, ue, {
            handler: function (u) {
                var d = sn[u.type];
                if (d === se && (this.started = !0), !!this.started) {
                    var g = on.call(this, u, d);
                    d & (X | re) && g[0].length - g[1].length === 0 && (this.started = !1), this.callback(this.manager, d, {
                        pointers: g[0],
                        changedPointers: g[1],
                        pointerType: Re,
                        srcEvent: u
                    })
                }
            }
        });

        function on(c, u) {
            var d = J(c.touches), g = J(c.changedTouches);
            return u & (X | re) && (d = G(d.concat(g), "identifier", !0)), [d, g]
        }

        var an = {touchstart: se, touchmove: Fe, touchend: X, touchcancel: re},
            ln = "touchstart touchmove touchend touchcancel";

        function yt() {
            this.evTarget = ln, this.targetIds = {}, ue.apply(this, arguments)
        }

        E(yt, ue, {
            handler: function (u) {
                var d = an[u.type], g = cn.call(this, u, d);
                !g || this.callback(this.manager, d, {
                    pointers: g[0],
                    changedPointers: g[1],
                    pointerType: Re,
                    srcEvent: u
                })
            }
        });

        function cn(c, u) {
            var d = J(c.touches), g = this.targetIds;
            if (u & (se | Fe) && d.length === 1) return g[d[0].identifier] = !0, [d, d];
            var _, M, A = J(c.changedTouches), Z = [], Q = this.target;
            if (M = d.filter(function (ie) {
                return te(ie.target, Q)
            }), u === se) for (_ = 0; _ < M.length;) g[M[_].identifier] = !0, _++;
            for (_ = 0; _ < A.length;) g[A[_].identifier] && Z.push(A[_]), u & (X | re) && delete g[A[_].identifier], _++;
            if (!!Z.length) return [G(M.concat(Z), "identifier", !0), Z]
        }

        var un = 2500, As = 25;

        function Ft() {
            ue.apply(this, arguments);
            var c = b(this.handler, this);
            this.touch = new yt(this.manager, c), this.mouse = new Tt(this.manager, c), this.primaryTouch = null, this.lastTouches = []
        }

        E(Ft, ue, {
            handler: function (u, d, g) {
                var _ = g.pointerType == Re, M = g.pointerType == qe;
                if (!(M && g.sourceCapabilities && g.sourceCapabilities.firesTouchEvents)) {
                    if (_) hn.call(this, d, g); else if (M && fn.call(this, g)) return;
                    this.callback(u, d, g)
                }
            }, destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });

        function hn(c, u) {
            c & se ? (this.primaryTouch = u.changedPointers[0].identifier, Rs.call(this, u)) : c & (X | re) && Rs.call(this, u)
        }

        function Rs(c) {
            var u = c.changedPointers[0];
            if (u.identifier === this.primaryTouch) {
                var d = {x: u.clientX, y: u.clientY};
                this.lastTouches.push(d);
                var g = this.lastTouches, _ = function () {
                    var M = g.indexOf(d);
                    M > -1 && g.splice(M, 1)
                };
                setTimeout(_, un)
            }
        }

        function fn(c) {
            for (var u = c.srcEvent.clientX, d = c.srcEvent.clientY, g = 0; g < this.lastTouches.length; g++) {
                var _ = this.lastTouches[g], M = Math.abs(u - _.x), A = Math.abs(d - _.y);
                if (M <= As && A <= As) return !0
            }
            return !1
        }

        var Cs = ae(a.style, "touchAction"), Ns = Cs !== s, Ds = "compute", ks = "auto", Gt = "manipulation",
            Be = "none", tt = "pan-x", st = "pan-y", St = pn();

        function Bt(c, u) {
            this.manager = c, this.set(u)
        }

        Bt.prototype = {
            set: function (c) {
                c == Ds && (c = this.compute()), Ns && this.manager.element.style && St[c] && (this.manager.element.style[Cs] = c), this.actions = c.toLowerCase().trim()
            }, update: function () {
                this.set(this.manager.options.touchAction)
            }, compute: function () {
                var c = [];
                return v(this.manager.recognizers, function (u) {
                    R(u.options.enable, [u]) && (c = c.concat(u.getTouchAction()))
                }), dn(c.join(" "))
            }, preventDefaults: function (c) {
                var u = c.srcEvent, d = c.offsetDirection;
                if (this.manager.session.prevented) {
                    u.preventDefault();
                    return
                }
                var g = this.actions, _ = Y(g, Be) && !St[Be], M = Y(g, st) && !St[st], A = Y(g, tt) && !St[tt];
                if (_) {
                    var Z = c.pointers.length === 1, Q = c.distance < 2, ie = c.deltaTime < 250;
                    if (Z && Q && ie) return
                }
                if (!(A && M) && (_ || M && d & ge || A && d & Ge)) return this.preventSrc(u)
            }, preventSrc: function (c) {
                this.manager.session.prevented = !0, c.preventDefault()
            }
        };

        function dn(c) {
            if (Y(c, Be)) return Be;
            var u = Y(c, tt), d = Y(c, st);
            return u && d ? Be : u || d ? u ? tt : st : Y(c, Gt) ? Gt : ks
        }

        function pn() {
            if (!Ns) return !1;
            var c = {}, u = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
                c[d] = u ? e.CSS.supports("touch-action", d) : !0
            }), c
        }

        var _t = 1, he = 2, Ye = 4, Ce = 8, Oe = Ce, it = 16, ve = 32;

        function be(c) {
            this.options = y({}, this.defaults, c || {}), this.id = je(), this.manager = null, this.options.enable = V(this.options.enable, !0), this.state = _t, this.simultaneous = {}, this.requireFail = []
        }

        be.prototype = {
            defaults: {}, set: function (c) {
                return y(this.options, c), this.manager && this.manager.touchAction.update(), this
            }, recognizeWith: function (c) {
                if (m(c, "recognizeWith", this)) return this;
                var u = this.simultaneous;
                return c = Et(c, this), u[c.id] || (u[c.id] = c, c.recognizeWith(this)), this
            }, dropRecognizeWith: function (c) {
                return m(c, "dropRecognizeWith", this) ? this : (c = Et(c, this), delete this.simultaneous[c.id], this)
            }, requireFailure: function (c) {
                if (m(c, "requireFailure", this)) return this;
                var u = this.requireFail;
                return c = Et(c, this), $(u, c) === -1 && (u.push(c), c.requireFailure(this)), this
            }, dropRequireFailure: function (c) {
                if (m(c, "dropRequireFailure", this)) return this;
                c = Et(c, this);
                var u = $(this.requireFail, c);
                return u > -1 && this.requireFail.splice(u, 1), this
            }, hasRequireFailures: function () {
                return this.requireFail.length > 0
            }, canRecognizeWith: function (c) {
                return !!this.simultaneous[c.id]
            }, emit: function (c) {
                var u = this, d = this.state;

                function g(_) {
                    u.manager.emit(_, c)
                }

                d < Ce && g(u.options.event + Hs(d)), g(u.options.event), c.additionalEvent && g(c.additionalEvent), d >= Ce && g(u.options.event + Hs(d))
            }, tryEmit: function (c) {
                if (this.canEmit()) return this.emit(c);
                this.state = ve
            }, canEmit: function () {
                for (var c = 0; c < this.requireFail.length;) {
                    if (!(this.requireFail[c].state & (ve | _t))) return !1;
                    c++
                }
                return !0
            }, recognize: function (c) {
                var u = y({}, c);
                if (!R(this.options.enable, [this, u])) {
                    this.reset(), this.state = ve;
                    return
                }
                this.state & (Oe | it | ve) && (this.state = _t), this.state = this.process(u), this.state & (he | Ye | Ce | it) && this.tryEmit(u)
            }, process: function (c) {
            }, getTouchAction: function () {
            }, reset: function () {
            }
        };

        function Hs(c) {
            return c & it ? "cancel" : c & Ce ? "end" : c & Ye ? "move" : c & he ? "start" : ""
        }

        function Fs(c) {
            return c == et ? "down" : c == Je ? "up" : c == Ze ? "left" : c == Qe ? "right" : ""
        }

        function Et(c, u) {
            var d = u.manager;
            return d ? d.get(c) : c
        }

        function pe() {
            be.apply(this, arguments)
        }

        E(pe, be, {
            defaults: {pointers: 1}, attrTest: function (c) {
                var u = this.options.pointers;
                return u === 0 || c.pointers.length === u
            }, process: function (c) {
                var u = this.state, d = c.eventType, g = u & (he | Ye), _ = this.attrTest(c);
                return g && (d & re || !_) ? u | it : g || _ ? d & X ? u | Ce : u & he ? u | Ye : he : ve
            }
        });

        function Ot() {
            pe.apply(this, arguments), this.pX = null, this.pY = null
        }

        E(Ot, pe, {
            defaults: {event: "pan", threshold: 10, pointers: 1, direction: Es}, getTouchAction: function () {
                var c = this.options.direction, u = [];
                return c & ge && u.push(st), c & Ge && u.push(tt), u
            }, directionTest: function (c) {
                var u = this.options, d = !0, g = c.distance, _ = c.direction, M = c.deltaX, A = c.deltaY;
                return _ & u.direction || (u.direction & ge ? (_ = M === 0 ? mt : M < 0 ? Ze : Qe, d = M != this.pX, g = Math.abs(c.deltaX)) : (_ = A === 0 ? mt : A < 0 ? Je : et, d = A != this.pY, g = Math.abs(c.deltaY))), c.direction = _, d && g > u.threshold && _ & u.direction
            }, attrTest: function (c) {
                return pe.prototype.attrTest.call(this, c) && (this.state & he || !(this.state & he) && this.directionTest(c))
            }, emit: function (c) {
                this.pX = c.deltaX, this.pY = c.deltaY;
                var u = Fs(c.direction);
                u && (c.additionalEvent = this.options.event + u), this._super.emit.call(this, c)
            }
        });

        function Ut() {
            pe.apply(this, arguments)
        }

        E(Ut, pe, {
            defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                return [Be]
            }, attrTest: function (c) {
                return this._super.attrTest.call(this, c) && (Math.abs(c.scale - 1) > this.options.threshold || this.state & he)
            }, emit: function (c) {
                if (c.scale !== 1) {
                    var u = c.scale < 1 ? "in" : "out";
                    c.additionalEvent = this.options.event + u
                }
                this._super.emit.call(this, c)
            }
        });

        function zt() {
            be.apply(this, arguments), this._timer = null, this._input = null
        }

        E(zt, be, {
            defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
                return [ks]
            }, process: function (c) {
                var u = this.options, d = c.pointers.length === u.pointers, g = c.distance < u.threshold,
                    _ = c.deltaTime > u.time;
                if (this._input = c, !g || !d || c.eventType & (X | re) && !_) this.reset(); else if (c.eventType & se) this.reset(), this._timer = p(function () {
                    this.state = Oe, this.tryEmit()
                }, u.time, this); else if (c.eventType & X) return Oe;
                return ve
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function (c) {
                this.state === Oe && (c && c.eventType & X ? this.manager.emit(this.options.event + "up", c) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
            }
        });

        function Vt() {
            pe.apply(this, arguments)
        }

        E(Vt, pe, {
            defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                return [Be]
            }, attrTest: function (c) {
                return this._super.attrTest.call(this, c) && (Math.abs(c.rotation) > this.options.threshold || this.state & he)
            }
        });

        function Kt() {
            pe.apply(this, arguments)
        }

        E(Kt, pe, {
            defaults: {event: "swipe", threshold: 10, velocity: .3, direction: ge | Ge, pointers: 1},
            getTouchAction: function () {
                return Ot.prototype.getTouchAction.call(this)
            },
            attrTest: function (c) {
                var u = this.options.direction, d;
                return u & (ge | Ge) ? d = c.overallVelocity : u & ge ? d = c.overallVelocityX : u & Ge && (d = c.overallVelocityY), this._super.attrTest.call(this, c) && u & c.offsetDirection && c.distance > this.options.threshold && c.maxPointers == this.options.pointers && h(d) > this.options.velocity && c.eventType & X
            },
            emit: function (c) {
                var u = Fs(c.offsetDirection);
                u && this.manager.emit(this.options.event + u, c), this.manager.emit(this.options.event, c)
            }
        });

        function bt() {
            be.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        E(bt, be, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            }, getTouchAction: function () {
                return [Gt]
            }, process: function (c) {
                var u = this.options, d = c.pointers.length === u.pointers, g = c.distance < u.threshold,
                    _ = c.deltaTime < u.time;
                if (this.reset(), c.eventType & se && this.count === 0) return this.failTimeout();
                if (g && _ && d) {
                    if (c.eventType != X) return this.failTimeout();
                    var M = this.pTime ? c.timeStamp - this.pTime < u.interval : !0,
                        A = !this.pCenter || vt(this.pCenter, c.center) < u.posThreshold;
                    this.pTime = c.timeStamp, this.pCenter = c.center, !A || !M ? this.count = 1 : this.count += 1, this._input = c;
                    var Z = this.count % u.taps;
                    if (Z === 0) return this.hasRequireFailures() ? (this._timer = p(function () {
                        this.state = Oe, this.tryEmit()
                    }, u.interval, this), he) : Oe
                }
                return ve
            }, failTimeout: function () {
                return this._timer = p(function () {
                    this.state = ve
                }, this.options.interval, this), ve
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function () {
                this.state == Oe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        });

        function xe(c, u) {
            return u = u || {}, u.recognizers = V(u.recognizers, xe.defaults.preset), new Wt(c, u)
        }

        xe.VERSION = "2.0.7", xe.defaults = {
            domEvents: !1,
            touchAction: Ds,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[Vt, {enable: !1}], [Ut, {enable: !1}, ["rotate"]], [Kt, {direction: ge}], [Ot, {direction: ge}, ["swipe"]], [bt], [bt, {
                event: "doubletap",
                taps: 2
            }, ["tap"]], [zt]],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var mn = 1, Gs = 2;

        function Wt(c, u) {
            this.options = y({}, xe.defaults, u || {}), this.options.inputTarget = this.options.inputTarget || c, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = c, this.input = Ki(this), this.touchAction = new Bt(this, this.options.touchAction), Bs(this, !0), v(this.options.recognizers, function (d) {
                var g = this.add(new d[0](d[1]));
                d[2] && g.recognizeWith(d[2]), d[3] && g.requireFailure(d[3])
            }, this)
        }

        Wt.prototype = {
            set: function (c) {
                return y(this.options, c), c.touchAction && this.touchAction.update(), c.inputTarget && (this.input.destroy(), this.input.target = c.inputTarget, this.input.init()), this
            }, stop: function (c) {
                this.session.stopped = c ? Gs : mn
            }, recognize: function (c) {
                var u = this.session;
                if (!u.stopped) {
                    this.touchAction.preventDefaults(c);
                    var d, g = this.recognizers, _ = u.curRecognizer;
                    (!_ || _ && _.state & Oe) && (_ = u.curRecognizer = null);
                    for (var M = 0; M < g.length;) d = g[M], u.stopped !== Gs && (!_ || d == _ || d.canRecognizeWith(_)) ? d.recognize(c) : d.reset(), !_ && d.state & (he | Ye | Ce) && (_ = u.curRecognizer = d), M++
                }
            }, get: function (c) {
                if (c instanceof be) return c;
                for (var u = this.recognizers, d = 0; d < u.length; d++) if (u[d].options.event == c) return u[d];
                return null
            }, add: function (c) {
                if (m(c, "add", this)) return this;
                var u = this.get(c.options.event);
                return u && this.remove(u), this.recognizers.push(c), c.manager = this, this.touchAction.update(), c
            }, remove: function (c) {
                if (m(c, "remove", this)) return this;
                if (c = this.get(c), c) {
                    var u = this.recognizers, d = $(u, c);
                    d !== -1 && (u.splice(d, 1), this.touchAction.update())
                }
                return this
            }, on: function (c, u) {
                if (c !== s && u !== s) {
                    var d = this.handlers;
                    return v(k(c), function (g) {
                        d[g] = d[g] || [], d[g].push(u)
                    }), this
                }
            }, off: function (c, u) {
                if (c !== s) {
                    var d = this.handlers;
                    return v(k(c), function (g) {
                        u ? d[g] && d[g].splice($(d[g], u), 1) : delete d[g]
                    }), this
                }
            }, emit: function (c, u) {
                this.options.domEvents && gn(c, u);
                var d = this.handlers[c] && this.handlers[c].slice();
                if (!(!d || !d.length)) {
                    u.type = c, u.preventDefault = function () {
                        u.srcEvent.preventDefault()
                    };
                    for (var g = 0; g < d.length;) d[g](u), g++
                }
            }, destroy: function () {
                this.element && Bs(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        };

        function Bs(c, u) {
            var d = c.element;
            if (!!d.style) {
                var g;
                v(c.options.cssProps, function (_, M) {
                    g = ae(d.style, M), u ? (c.oldCssProps[g] = d.style[g], d.style[g] = _) : d.style[g] = c.oldCssProps[g] || ""
                }), u || (c.oldCssProps = {})
            }
        }

        function gn(c, u) {
            var d = t.createEvent("Event");
            d.initEvent(c, !0, !0), d.gesture = u, u.target.dispatchEvent(d)
        }

        y(xe, {
            INPUT_START: se,
            INPUT_MOVE: Fe,
            INPUT_END: X,
            INPUT_CANCEL: re,
            STATE_POSSIBLE: _t,
            STATE_BEGAN: he,
            STATE_CHANGED: Ye,
            STATE_ENDED: Ce,
            STATE_RECOGNIZED: Oe,
            STATE_CANCELLED: it,
            STATE_FAILED: ve,
            DIRECTION_NONE: mt,
            DIRECTION_LEFT: Ze,
            DIRECTION_RIGHT: Qe,
            DIRECTION_UP: Je,
            DIRECTION_DOWN: et,
            DIRECTION_HORIZONTAL: ge,
            DIRECTION_VERTICAL: Ge,
            DIRECTION_ALL: Es,
            Manager: Wt,
            Input: ue,
            TouchAction: Bt,
            TouchInput: yt,
            MouseInput: Tt,
            PointerEventInput: Ht,
            TouchMouseInput: Ft,
            SingleTouchInput: Ls,
            Recognizer: be,
            AttrRecognizer: pe,
            Tap: bt,
            Pan: Ot,
            Swipe: Kt,
            Pinch: Ut,
            Rotate: Vt,
            Press: zt,
            on: L,
            off: F,
            each: v,
            merge: x,
            extend: O,
            assign: y,
            inherit: E,
            bindFn: b,
            prefixed: ae
        });
        var vn = typeof e != "undefined" ? e : typeof self != "undefined" ? self : {};
        vn.Hammer = xe, typeof s == "function" && s.amd ? s(function () {
            return xe
        }) : r.exports ? r.exports = xe : e[i] = xe
    })(window, document, "Hammer")
})(zi);
var Zt = zi.exports;
const $o = function () {
    let r = 10, e = 40, t = 800, i = {};
    return i.normalizeWheel = function (s) {
        let o = 0, a = 0, l = 0, n = 0;
        return "detail" in s && (a = s.detail), "wheelDelta" in s && (a = -s.wheelDelta / 120), "wheelDeltaY" in s && (a = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (o = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (o = a, a = 0), l = o * r, n = a * r, "deltaY" in s && (n = s.deltaY), "deltaX" in s && (l = s.deltaX), (l || n) && s.deltaMode && (s.deltaMode == 1 ? (l *= e, n *= e) : (l *= t, n *= t)), l && !o && (o = l < 1 ? -1 : 1), n && !a && (a = n < 1 ? -1 : 1), {
            spinX: o,
            spinY: a,
            pixelX: l,
            pixelY: n
        }
    }, i
}(), At = 100;

function W(r, e, t = "px") {
    return r.style.transform = `translate3d(0, ${Math.round(e * At) / At}${t}, 0)`
}

function De(r, e, t = "px") {
    return r.style.transform = `translate3d(${Math.round(e * At) / At}${t}, 0, 0)`
}

function Zo(r, e, t) {
    let i = {tolerance: 100, horizontal: !1, parent: null};
    if (Object.assign(i, t), i.horizontal) {
        const s = -e + i.w, o = r.offsetLeft;
        return r.offsetWidth + o + i.tolerance > -e && o - i.tolerance <= s
    } else {
        const o = -e + r.h, a = r.offsetTop + 0;
        return r.offsetHeight + a + i.tolerance > -e && a - i.tolerance <= o
    }
}

class Qo {
    constructor(e) {
        this.options = {
            events: !0,
            page: document,
            selector: "[data-scroll]",
            selectorChild: "[data-scroll-item]",
            selectorGroup: "[data-scroll-items]",
            infinite: !1,
            horizontal: !1,
            snap: !1,
            propagation: !0,
            scrollY: !0,
            debug: !1,
            scrollX: !0
        }, Object.assign(this.options, e), Si(this.options.selector) ? this.el = this.options.selector !== void 0 ? this.options.selector : null : this.el = this.options.page.querySelector(this.options.selector), this.id = Le("scroll"), this.init(), this.addEvents()
    }

    async init() {
        this.setDefaults(), this.animate = this.animate.bind(this), this.onWheel = this.onWheel.bind(this), this.onResize = this.onResize.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.getSections = this.getSections.bind(this), this.getSection = this.getSection.bind(this), this.scrollTo = this.scrollTo.bind(this), this.activate = this.activate.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.mouseDownHandler = this.mouseDownHandler.bind(this), this.mouseMoveHandler = this.mouseMoveHandler.bind(this), this.mouseUpHandler = this.mouseUpHandler.bind(this), this.onSwipe = this.onSwipe.bind(this), this.selector = this.options.selector, this.selectorChild = this.options.selectorChild, this.selectorGroup = this.options.selectorGroup, this.container = this.el || document.querySelector(this.selector), this.refreshSections(), this.options.snap || (this.options.snap = this.el.hasAttribute("data-scroll-snap")), this.options.infinite || (this.options.infinite = this.el.hasAttribute("data-scroll-infinite")), this.options.horizontal || (this.options.horizontal = this.el.hasAttribute("data-scroll-horizontal")), this.offsetTop = 0, this.offsetLeft = 0, this.isScrolling = !1, this.scrollClassAdded = !1, this.isDraggingScrollbar = !1, this.resizing = !1, this.scrollDirection = "forwards", document.body.classList.remove("is-scrolling"), this.offsetTop = 0, await oe(), this.onResize(), await oe(), Me.add(this.animate, this.id), Me.moveToFirst(this.id)
    }

    refreshSections() {
        this.els = [...this.el.querySelectorAll(`${this.selectorChild}`)], this.elGroups = [...this.el.querySelectorAll(`${this.selectorGroup}`)]
    }

    addEvents() {
        if (U.on("LOAD:DONE", this.activate), U.on("RESIZE", this.onResize), !this.options.events) return;
        const e = window;
        e.addEventListener("wheel", this.onWheel, {passive: !0}), this.hammer = new Zt.Manager(e), this.hammer.add(new Zt.Swipe({direction: Zt.DIRECTION_ALL})), this.hammer.on("swipe", this.onSwipe), addEventListener("keydown", this.onKeyDown, !1), this.addScrollbarEvents(), H.DRAG && ("ontouchmove" in window ? (e.addEventListener("touchstart", this.mouseDownHandler, {passive: !0}), e.addEventListener("touchmove", this.mouseMoveHandler, {passive: !0}), e.addEventListener("touchend", this.mouseUpHandler)) : (e.addEventListener("mousedown", this.mouseDownHandler), e.addEventListener("mousemove", this.mouseMoveHandler), e.addEventListener("mouseup", this.mouseUpHandler)))
    }

    setDefaults() {
        this.container = null, this.els = [], this.sections = [], this.layout = {
            h: 0,
            w: 0
        }, this.settings = {
            interpolation: .1,
            speed: 1,
            speedFirefox: 1.4,
            dragSpeed: 2,
            horizontal: !1,
            scrollToDuration: 1600,
            snap: !1,
            infinite: !1
        }, this.pointer = {active: !1, move: !1, y: 0, x: 0}, this.index = {
            current: 0,
            total: 0
        }, this.scroll = {
            current: 0,
            lerped: 0,
            limit: 0,
            delta: 0,
            deltaY: 0,
            dragY: 0,
            dragX: 0,
            max: 0
        }, this.state = {active: !1, animating: !1, ticking: !1, gesture: !1}
    }

    activate() {
        this.onResize(), this.state.active = !0
    }

    start() {
        this.state.ticking = !0
    }

    stop() {
        this.state.ticking = !1
    }

    async destroy() {
        U.off("LOAD:DONE", this.activate), U.off("RESIZE", this.onResize), this.options.events && (this.container.removeEventListener("wheel", this.onWheel, {passive: !0}), window.removeEventListener("keydown", this.onKeyDown, !1), H.DRAG && ("ontouchmove" in window ? (this.container.removeEventListener("touchstart", this.mouseDownHandler, {passive: !0}), this.container.removeEventListener("touchmove", this.mouseMoveHandler, {passive: !0}), this.container.removeEventListener("touchend", this.mouseUpHandler)) : (this.container.removeEventListener("mousedown", this.mouseDownHandler), this.container.removeEventListener("mousemove", this.mouseMoveHandler), this.container.removeEventListener("mouseup", this.mouseUpHandler))), await oe(), this.stop(), this.container = null, this.els = null, this.elGroups = null, await oe(200), Me.remove(this.id), this.offsetTop = 0, this.offsetLeft = 0)
    }

    async snapToClosest() {
        let e;
        this.sections.forEach((t, i) => {
            if (t.inView) {
                const s = -this.scroll.current, o = t.elBounds.offsetTop - t.elBounds.h / 2;
                s > o && (this.index.current = i, e = t)
            }
        }), await oe(), this.scrollTo(-e.elBounds.offsetTop)
    }

    scrollTo(e) {
        this.scrollAnimation = q({
            duration: this.settings.scrollToDuration,
            targets: this.scroll,
            current: e,
            easing: "easeOutExpo",
            begin: () => {
                this.start()
            },
            complete: () => {
                this.stop()
            }
        })
    }

    calculateScroll() {
        if (this.scroll.max < 0) this.scroll.current = 0, this.isScrolling = !1; else {
            this.scroll.current = this.scroll.current + this.scroll.delta;
            const e = Math.abs(this.scroll.current) > this.scroll.max;
            this.options.infinite || (-this.scroll.current < 0 ? this.scroll.current = 0 : e && (this.scroll.current = -this.scroll.max)), this.isScrolling = -this.scroll.current > 20
        }
        this.isScrolling && !this.scrollClassAdded && (this.scrollClassAdded = !0), !this.isScrolling && this.scrollClassAdded && (this.scrollClassAdded = !1)
    }

    lerpScroll() {
        this.scroll.lerped = pr(this.scroll.lerped, this.scroll.current, this.settings.interpolation), this.options.horizontal ? this.offsetLeft = -this.scroll.lerped : this.offsetTop = -this.scroll.lerped
    }

    syncScroll(e) {
        this.scroll.lerped = this.scroll.current = e
    }

    transformSection({
                         active: e,
                         el: t,
                         partsTop: i,
                         parts: s,
                         partsBottom: o,
                         parent: a,
                         inView: l,
                         id: n,
                         elBounds: h
                     }, f) {
        if (l) {
            if (e = !0, this.options.horizontal ? De(t, f) : W(t, f), t.classList.add("in-view"), t.style.visibility = "", i.length) for (let p = 0; p < i.length; p++) this.transformPart(i[p], f);
            if (s.length) for (let p = 0; p < s.length; p++) {
                const m = s[p];
                m.el.classList.add("in-view");
                {
                    const y = (-this.scroll.lerped + this.layout.h / 2 - m.middle) * -m.parallax;
                    m.el.parallax = y, this.options.horizontal ? (De(m.el, y), m.el.transform.x = y) : (W(m.el, y), m.el.transform.y = y)
                }
            }
        } else {
            if (t.classList.remove("in-view"), t.style.visibility = "hidden", s.length) for (let p = 0; p < s.length; p++) s[p].el.classList.remove("in-view");
            e = !1
        }
    }

    checkInView(e) {
        for (let t = 0; t < e.length; t++) e[t].inView = Zo(e[t].elBounds, this.scroll.lerped - e[t].scrollOffset, {
            parent: e[t].parent,
            horizontal: this.options.horizontal,
            tolerance: 300,
            w: this.layout.w,
            h: this.layout.h
        })
    }

    transformPart({el: e, parallax: t}, i) {
        e.parallax = i * t - i, this.options.horizontal ? De(e, i * t - i) : W(e, i * t - i)
    }

    transformSections(e) {
        const {lerped: t} = this.scroll;
        for (let i = 0; i < e.length; i++) this.emitProgress(e[i], t - e[i].scrollOffset), this.updateImages(e[i], t - e[i].scrollOffset), this.transformSection(e[i], t - e[i].scrollOffset)
    }

    emitProgress(e, t) {
        const i = t + e.elBounds.offsetTop, s = hs(1 - i / e.elBounds.h), o = fe(s, 0, 1);
        this.resizing && (e.progress = o, U.emit("SCROLL_PROGRESS", e)), o !== e.progress && (e.progress = o, e.progress === e.progress && s <= 1 && s > 0 && U.emit("SCROLL_PROGRESS", e))
    }

    updateImages({images: e}, t) {
        if (!!e.length) for (let i = 0; i < e.length; i++) this.options.horizontal ? e[i].updateX(-t) : e[i].updateY(-t)
    }

    animate() {
        this.state.active && H.SMOOTH && (this.state.animating || this.calculateScroll(), this.checkInView(this.sections)), this.calcOffsets(), this.lerpScroll(), this.transformSections(this.sections), this.scroll.delta = 0
    }

    calcOffsets() {
        const {infinite: e, horizontal: t} = this.options, {w: i, h: s} = this.layout, {
            lerped: o,
            current: a,
            max: l
        } = this.scroll, {sections: n} = this;
        if (!e) {
            for (let h = 0; h < n.length; h++) n[h].elBounds.current = o;
            return
        }
        if (e) {
            const h = o - a, f = t ? i : s, p = t ? "offsetLeft" : "offsetTop";
            -o > l ? (this.scroll.lerped = f, this.scroll.current = this.scroll.lerped - h) : -o + f < 0 && (this.scroll.lerped = -this.scroll.max, this.scroll.current = this.scroll.lerped - h);
            for (let m = 0; m < n.length; m++) Math.abs(n[m].elBounds[p]) / 2 > Math.abs(this.scroll.lerped - f) ? n[m].scrollOffset = l + f : n[m].scrollOffset = 0, n[m].elBounds.current = this.scroll.lerped - n[m].scrollOffset
        }
    }

    onSwipe(e) {
        !le.MOBILE || (e.deltaY > 60 && this.toPrevious(), e.deltaY < -60 && this.toNext())
    }

    mouseDownHandler(e) {
        if (!this.dragComponent) {
            if (!this.state.active || this.state.animating) return !1;
            this.pointer.active || (this.pointer.active = !0, this.state.ticking = !0, this.pointer.y = e.touches ? e.touches[0].clientY : e.clientY, this.pointer.x = e.touches ? e.touches[0].clientX : e.clientX)
        }
    }

    mouseMoveHandler(e) {
        if (this.options.propagation || e.stopPropagation(), !this.state.active || this.state.animating) return !1;
        if (this.mouseMoveTimeOut1 && clearTimeout(this.mouseMoveTimeOut1), this.mouseMoveTimeOut2 && clearTimeout(this.mouseMoveTimeOut2), this.dragComponent || !this.pointer.active) return;
        this.options.snap && this.clearSnapTl(), this.start(), this.checkInView(this.sections);
        const t = e.touches ? e.touches[0].clientY : e.clientY, i = e.touches ? e.touches[0].clientX : e.clientX;
        this.pointer.move = !0, this.scroll.dragX = this.options.horizontal ? i - this.pointer.x : 0, this.scroll.dragY = this.options.horizontal ? 0 : t - this.pointer.y, this.scroll.current += (this.scroll.dragX + this.scroll.dragY) * this.settings.dragSpeed, this.pointer.y = t, this.pointer.x = i, U.emit("MOUSE_DRAG"), this.mouseMoveTimeOut1 = setTimeout(() => {
            this.pointer.active = !1
        }, 100), this.mouseMoveTimeOut2 = setTimeout(() => {
            this.pointer.active = !1, this.pointer.move = !1, this.stop()
        }, 1e3)
    }

    mouseUpHandler() {
        this.pointer.active = !1, this.options.snap && (this.snapTimeOut = setTimeout(() => {
            this.snapToClosest()
        }, 500)), setTimeout(() => {
            this.pointer.move = !1
        }, 1e3), this.scroll.dragY = 0
    }

    clearSnapTl() {
        this.snapTimeOut && (clearTimeout(this.snapTimeOut), this.scrollAnimation && this.scrollAnimation.pause())
    }

    checkGestures(e, t = 50) {
        this.clearSnapTl(), clearTimeout(this.gestureTl), this.state.gesture = !0, e < -t && this.toNext(), e > t && this.toPrevious(), this.gestureTl = setTimeout(() => {
            this.state.gesture = !1
        }, 300)
    }

    onWheel(e) {
        {
            const {pixelX: t, pixelY: i} = $o.normalizeWheel(e), {scrollX: s, scrollY: o} = this.options,
                a = s ? Math.max(Math.min(-1 * t, 300), -300) : 0, l = o ? Math.max(Math.min(-1 * i, 300), -300) : 0,
                n = this.options.horizontal && Math.abs(a) >= Math.abs(l) ? a : l;
            if (!this.state.active || this.state.animating) return !1;
            this.options.snap && this.clearSnapTl(), this.wheelTimeOut && clearTimeout(this.wheelTimeOut), this.start(), this.scroll.delta = n, this.scroll.delta *= this.settings.speed, this.scrollDirection = this.scroll.delta < 0 ? "forwards" : "backwards", mr && (this.scroll.delta *= this.settings.speedFirefox), this.options.snap && (this.checkGestures(this.scroll.delta), this.snapTimeOut = setTimeout(() => {
                this.snapToClosest()
            }, 500)), this.wheelTimeOut = setTimeout(() => {
                this.pointer.move || this.stop()
            }, 800)
        }
    }

    toPrevious() {
        if (!this.state.active) return !1;
        this.clearSnapTl(), clearTimeout(this.wheelTimeOut), clearTimeout(this.prevTl), this.state.animating = !0, this.index.current > 0 && this.index.current--, U.emit(`${this.sections[this.index.current].id}_PROGRESS`), this.scrollTo(-this.sections[this.index.current].elBounds.offsetTop), this.prevTl = setTimeout(() => {
            this.state.animating = !1
        }, this.settings.scrollToDuration / 2)
    }

    toNext() {
        if (!this.state.active) return !1;
        this.clearSnapTl(), clearTimeout(this.wheelTimeOut), clearTimeout(this.nextTl), this.state.animating = !0, this.index.total - 1 > this.index.current && this.index.current++, U.emit(`${this.sections[this.index.current].id}_PROGRESS`), this.scrollTo(-this.sections[this.index.current].elBounds.offsetTop), this.nextTl = setTimeout(() => {
            this.state.animating = !1
        }, this.settings.scrollToDuration / 2)
    }

    onKeyDown(e) {
        if (!this.state.active) return !1;
        switch (e.code) {
            case"ArrowUp":
                this.options.snap ? this.toPrevious() : this.scroll.current += 150;
                break;
            case"ArrowDown":
                this.options.snap ? this.toNext() : this.scroll.current -= 150;
                break;
            case"PageUp":
                this.scroll.current += this.layout.h;
                break;
            case"PageDown":
                this.scroll.current -= this.layout.h;
                break;
            case"Space":
                !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && (e.shiftKey ? this.scroll.current += this.layout.h : this.scroll.current -= this.layout.h);
                break
        }
    }

    getSection(e) {
        let t;
        return this.sections.forEach(i => {
            i.el === e && (t = i)
        }), t
    }

    getSections() {
        this.sections = [], this.index.total = this.els.length;
        for (let e = 0; e < this.els.length; e++) {
            const t = this.els[e], i = t.closest(this.selectorGroup);
            this.sections.push({
                active: !1,
                el: t,
                id: `${t.dataset.scrollItem}` || Le("SCROLL_SECTION"),
                images: [],
                elBounds: {
                    offsetTop: i ? i.offsetTop : t.offsetTop,
                    offsetHeight: i ? i.offsetHeight : t.offsetHeight,
                    offsetWidth: i ? i.offsetWidth : t.offsetWidth,
                    offsetLeft: i ? i.offsetLeft : t.offsetLeft,
                    w: this.layout.w,
                    h: this.layout.h,
                    current: 0
                },
                passedTop: !1,
                scrollOffset: 0,
                inView: !0,
                partsTop: [],
                partsBottom: [],
                parts: [],
                parent: i
            })
        }
        for (let e = 0; e < this.sections.length; e++) {
            const t = this.sections[e], i = t.el.querySelectorAll("[data-parallax-top]"),
                s = t.el.querySelectorAll("[data-parallax]"), o = t.el.querySelectorAll("[data-parallax-bottom]");
            if (i.length) for (let a = 0; a < i.length; a++) {
                const l = i[a];
                t.partsTop.push({el: l, parallax: le.GL && l.dataset.parallaxTop || 1})
            }
            if (o.length) for (let a = 0; a < o.length; a++) {
                const l = o[a];
                t.partsBottom.push({el: l, parallax: le.GL && l.dataset.parallaxBottom || 1})
            }
            if (s.length) for (let a = 0; a < s.length; a++) {
                const l = s[a], {top: n, bottom: h} = t.el.getBoundingClientRect();
                l.transform = {x: 0, y: 0};
                const f = {
                    top: n,
                    bottom: h,
                    el: l,
                    debug: l.dataset.scrollDebug !== void 0,
                    middle: (h - n) / 2 + n,
                    parallax: le.GL && l.dataset.parallax / 10 || 0
                };
                f.debug && console.dir(f), t.parts.push(f)
            }
        }
    }

    scrollSize() {
        if (!this.options.horizontal) this.container && (this.scroll.max = this.container.getBoundingClientRect().height - this.layout.h); else {
            let e = 0;
            for (let t = 0; t < this.sections.length; t++) {
                const {offsetWidth: i} = this.sections[t].elBounds;
                e += i
            }
            this.container && (this.scroll.max = e - this.layout.w)
        }
    }

    reset() {
        const e = [...this.el.querySelectorAll(this.selectorChild), ...this.el.querySelectorAll("[data-parallax-top]"), ...this.el.querySelectorAll("[data-parallax]")];
        for (let t = 0; t < e.length; t++) e[t].style.transform = ""
    }

    calcSizes() {
        this.getSections(), this.scrollSize()
    }

    onResize() {
        this.layout.h = window.innerHeight, this.layout.w = window.innerWidth, this.reset(), this.resizing = !0, this.calcSizes(), this.checkInView(this.sections), U.emit("SCROLL_RESIZE"), this.resizing = !1, setTimeout(() => {
            this.transformSections(this.sections)
        }, 100), this.options.snap && (this.snapTimeOut = setTimeout(() => {
            this.snapToClosest()
        }, 500))
    }

    makeScrollBar() {
        this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("scrollbar"), this.scrollbarThumb.classList.add("scrollbar-thumb"), this.scrollbar.append(this.scrollbarThumb), document.body.append(this.scrollbar), this.hasScrollbar = !1
    }

    addScrollbarEvents() {
        window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar)
    }
}

class Jo extends ft {
    init() {
        super.init(), this.active = !1, this.menuButton = this.get(".navbar_menu-button"), this.menuOverlay = this.get(".w-nav-overlay"), this.navBarMenu = this.get(".w-nav-overlay > .navbar_menu"), this.bg = this.get(".nav__bg"), this.paddingNavBar = this.get(".page-padding.is-navbar"), this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
    }

    addEvents() {
        super.addEvents(), this.menuButton.addEventListener("click", this.onMenuButtonClick)
    }

    themeLight() {
        this.el.style.color = "rgb(0,0,0)", this.bg.style.opacity = 1, this.paddingNavBar.height = 80
    }

    open() {
        this.active = !0, this.el.classList.add("is-open")
    }

    close() {
        this.active = !1, this.el.classList.remove("is-open")
    }

    onMenuButtonClick() {
        this.active ? this.close() : this.open()
    }
}

function ea(r) {
    const e = {};
    for (let t in r) e[t] = r[t];
    return e
}

function as(r, e) {
    const t = ea(r);
    for (let i in e) t[i] = yr(r[i]) ? e[i] : r[i];
    return t
}

class j {
}

P(j, "linear", e => e), P(j, "circIn", e => 1 - Math.cos(e * (Math.PI / 2))), P(j, "circOut", e => Math.sin(e * (Math.PI / 2))), P(j, "circInOut", e => -.5 * (Math.cos(Math.PI * e) - 1)), P(j, "quadIn", e => e * e), P(j, "quadOut", e => e * (2 - e)), P(j, "quadInOut", e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1), P(j, "cubicIn", e => e * e * e), P(j, "cubicOut", e => --e * e * e + 1), P(j, "cubicInOut", e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1), P(j, "quartIn", e => e * e * e * e), P(j, "quartOut", e => --e * e * e * e + 1), P(j, "quartInOut", e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e), P(j, "quintIn", e => e * e * e * e * e), P(j, "quinOut", e => --e * e * e * e * e + 1), P(j, "quinInOut", e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e), P(j, "expoIn", e => e === 0 ? 0 : Math.pow(2, 10 * (e - 1))), P(j, "expoOut", e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e)), P(j, "expoInOut", e => e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))), P(j, "elasticIn", e => Math.pow(2, -10 * e) * Math.sin((e - .1) * 5 * Math.PI) + 1), P(j, "elasticOut", e => Math.pow(2, -10 * e) * Math.sin((e - .1) * 5 * Math.PI) + 1);

class B {
}

P(B, "circIn", "cubic-bezier(0.600, 0.040, 0.980, 0.335)"), P(B, "circOut", "cubic-bezier(0.075, 0.820, 0.165, 1.000)"), P(B, "circInOut", "cubic-bezier(0.785, 0.135, 0.150, 0.860)"), P(B, "quadIn", "cubic-bezier(0.550, 0.085, 0.680, 0.530)"), P(B, "quadOut", "cubic-bezier(0.250, 0.460, 0.450, 0.940)"), P(B, "quadInOut", "cubic-bezier(0.455, 0.030, 0.515, 0.955)"), P(B, "cubicIn", "cubic-bezier(0.550, 0.055, 0.675, 0.190)"), P(B, "cubic", "cubic-bezier(0.215, 0.610, 0.355, 1.000)"), P(B, "cubicInOut", "cubic-bezier(0.645, 0.045, 0.355, 1.000)"), P(B, "quartIn", "cubic-bezier(0.895, 0.030, 0.685, 0.220)"), P(B, "quartOut", "cubic-bezier(0.165, 0.840, 0.440, 1.000)"), P(B, "quartInOut", "cubic-bezier(0.770, 0.000, 0.175, 1.000)"), P(B, "quintIn", "cubic-bezier(0.755, 0.050, 0.855, 0.060)"), P(B, "quintOut", "cubic-bezier(0.230, 1.000, 0.320, 1.000)"), P(B, "quintInOut", "cubic-bezier(0.860, 0.000, 0.070, 1.000)"), P(B, "expoIn", "cubic-bezier(0.950, 0.050, 0.795, 0.035)"), P(B, "expoOut", "cubic-bezier(0.190, 1.000, 0.220, 1.000)"), P(B, "expoInOut", "cubic-bezier(1.000, 0.000, 0.000, 1.000)"), P(B, "sineIn", "cubic-bezier(0.470, 0.000, 0.745, 0.715)"), P(B, "sineOut", "cubic-bezier(0.390, 0.575, 0.565, 1.000)"), P(B, "sineInOut", "cubic-bezier(0.445, 0.050, 0.550, 0.950)"), P(B, "backIn", "cubic-bezier(0.600, -0.280, 0.735, 0.045)"), P(B, "backOut", "cubic-bezier(0.175,  0.885, 0.320, 1.275)"), P(B, "BackInOut", "cubic-bezier(0.680, -0.550, 0.265, 1.550)");
const xt = {
    el: null,
    delay: null,
    fill: "both",
    duration: 1e3,
    ease: "linear",
    raf: !1,
    end: null,
    debug: !1,
    paused: !1,
    keyframes: []
};

class ls {
    static css(e) {
        const t = as(e, xt);
        return new ci(t)
    }

    static raf(e) {
        const t = as(e, xt);
        t.ownProperties = [];
        for (let i in t) t.el.hasOwnProperty(i) && t.ownProperties.push(i);
        if (t.ownProperties.length) {
            const i = {}, s = {};
            t.ownProperties.forEach(o => {
                i[o] = t.el[o], s[o] = t[o]
            }), t.keyframes = [i, s]
        }
        return t.raf = !0, new ci(t)
    }
}

P(ls, "iskey", e => xt.hasOwnProperty(e));

class ci {
    constructor(e = {}) {
        this.params = as(e, xt), this.els = [], this.params.raf && (this.params.transformsConverted = this.convertTransforms(e.keyframes)), this.animations = [], this.finished = !1, this.id = Le(), this.init()
    }

    async init() {
        const {params: e, finished: t, animations: i} = this, {el: s, raf: o, stagger: a, end: l} = e;
        let n;
        if (s.length === void 0 ? (o ? n = new hi(s, e) : n = new ui(s, e), i.push(n)) : (this.els = [...s], a < 0 && this.els.reverse(), this.els.forEach((h, f) => {
            a !== void 0 && (this.params.delay += f * Math.abs(a)), i.push(new (o ? hi : ui)(h, e))
        })), l !== null) {
            if (t) return !1;
            this.finished = !0, this.onFinish(l)
        }
    }

    onFinish(e) {
        const {params: t, animations: i} = this, {raf: s} = t;
        s ? (this.promises = [], i.forEach(o => {
            this.promises.push(o.done)
        }), Promise.all(this.promises).then(() => {
            e()
        })) : (this.last = i[i.length - 1].instance, this.last.onfinish = () => {
            e()
        })
    }

    seek(e) {
        this.animations.forEach(t => t.seek(e))
    }

    start() {
        this.animations.forEach(e => {
            e.start()
        })
    }

    pause() {
        this.animations.forEach(e => {
            e.pause()
        })
    }

    convertTransforms(e) {
        let t = [];
        return e.forEach(i => {
            let s = {}, o = {}, a = {}, l = {}, n = {}, h = [];
            for (const [f, p] of Object.entries(i)) {
                const {val: m, unit: v} = this.seperateUnitAndValue(p);
                switch (f) {
                    case"x":
                    case"y":
                    case"z":
                        s[f] = m, v && (s.unit = v);
                        break;
                    case"sc":
                        o = {scX: m, scY: m};
                        break;
                    case"scX":
                    case"scY":
                        o[f] = m;
                        break;
                    case"rX":
                    case"rY":
                    case"rZ":
                        a[f] = m, v && (a.unit = v);
                        break;
                    case"skX":
                    case"skY":
                        l[f] = m, v && (l.unit = v);
                        break;
                    default:
                        n[f] = m;
                        break
                }
            }
            nt(s) || h.push({translate: s}), nt(a) || h.push({rotate: a}), nt(o) || h.push({scale: o}), nt(l) || h.push({skew: l}), nt(n) || h.push({misc: n}), t.push(zs({}, h))
        }), t
    }

    seperateUnitAndValue(e) {
        const t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|em|rem|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
        if (t) return {unit: t[1], val: parseFloat(e)}
    }
}

class ui {
    constructor(e, t) {
        this.el = e, this.params = t, this.el.style = "", this.keyframes = this.params.keyframes, this.init(), !this.params.paused && this.start()
    }

    init() {
        this.instance = this.el.animate(this.keyframes, {
            delay: this.params.delay,
            fill: this.params.fill,
            duration: this.params.duration,
            easing: B[this.params.ease]
        }), this.pause()
    }

    start() {
        this.instance.play(), this.params.start && this.params.start()
    }

    pause() {
        this.instance.pause()
    }

    seek(e) {
        this.instance.currentTime = e
    }
}

class hi {
    constructor(e, t) {
        this.tick = this.tick.bind(this), this.el = e, this.params = t, this.isNode = Sr(e), this.transforms = this.params.transformsConverted, this.begin = this.transforms[0], this.end = this.transforms[1], this.singleTransform = this.end.length === 1, this.isDone = !1, this.isPaused = !1, this.done = new Promise((i, s) => {
            this.resolve = i
        }), this.duration = this.params.duration, this.id = Le(), this.params.paused ? this.setProgress(0) : this.start()
    }

    async start() {
        const {params: e, tick: t, id: i} = this, {delay: s, start: o, duration: a} = e;
        this.isPaused = !1, await oe(s), o && o(), this.time = {start: performance.now(), total: a}, Me.add(t, i)
    }

    pause() {
        this.isPaused = !0
    }

    getTypeAnimation(e) {
        let t = [];
        return e.y !== void 0 && t.push("translateY"), e.x !== void 0 && t.push("translateX"), e.z !== void 0 && t.push("translateZ"), t
    }

    getElementTransforms(e) {
        const t = e.style.transform || "", i = /(\w+)\(([^)]*)\)/g, s = new Map;
        let o;
        for (; o = i.exec(t);) s.set(o[1], o[2]);
        return s
    }

    getProgress({elapsed: e, total: t}) {
        return Math.min(e / t, 1)
    }

    round(e) {
        return Math.round(e * 1e3) / 1e3
    }

    getTransform(e, t, i, s, o) {
        const a = t[o][s] - i[o][s];
        return this.round(t[o][s] - a * e) || 0
    }

    getTransformSimple(e, t, i, s, o) {
        const a = t[o][s] - i[o][s];
        return this.round(t[o][s] - a * e) || 0
    }

    tick(e) {
        if (this.isDone || this.paused) return;
        this.time.elapsed = e - this.time.start;
        const t = this.getProgress(this.time);
        this.setProgress(t), t === 1 && this.onDone()
    }

    seek(e) {
        setProgress(e)
    }

    setProgress(e) {
        const {params: t, end: i, isNode: s} = this, {ease: o} = t, a = j[o](e), l = [];
        for (let n = 0; n < Object.keys(i).length; n++) {
            const h = this.begin[n], f = this.end[n];
            if (f.translate) {
                const p = this.getTransform(a, h, f, "x", "translate"),
                    m = this.getTransform(a, h, f, "y", "translate"), v = this.getTransform(a, h, f, "z", "translate"),
                    S = f.translate.unit || h.translate.unit;
                l.push(`translate3d(${p}${p !== 0 ? S : ""}, ${m}${m !== 0 ? S : ""}, ${v}${v !== 0 ? S : ""})`)
            }
            if (f.rotate) {
                const p = this.getTransform(a, h, f, "rX", "rotate"), m = this.getTransform(a, h, f, "rY", "rotate"),
                    v = this.getTransform(a, h, f, "rZ", "rotate"), S = f.rotate.unit || h.rotate.unit;
                p !== 0 && l.push(`rotateX(${p}${p !== 0 ? S : ""})`), m !== 0 && l.push(`rotateY(${m}${m !== 0 ? S : ""})`), v !== 0 && l.push(`rotateZ(${v}${v !== 0 ? S : ""})`)
            }
        }
        if (s) this.el.style.transform = l.join(" "); else for (let n = 0; n < Object.keys(this.end).length; n++) {
            const h = this.begin[n], f = this.end[n], p = Object.keys(f.misc)[0];
            this.el[p] = this.getTransformSimple(a, h, f, p, "misc")
        }
    }

    onDone() {
        this.isDone = !0, this.resolve(), Me.remove(this.id)
    }
}

function fi(r, e) {
    let t = {classWord: "word", classWords: "words", classLine: "line", classLetter: "letter", splitLetters: !1};
    Object.assign(t, e);
    const i = r.querySelectorAll("p"), s = [];
    i.length ? i.forEach(a => {
        o(a), r.removeChild(a)
    }) : o(r);

    function o(a) {
        const n = a.innerHTML.split("<br>");
        a.innerHTML = "", n.forEach(h => {
            if (h === "") return !1;
            const f = document.createElement("div");
            f.innerHTML = h, f.classList.add(`${t.classLine}-inner`);
            const p = document.createElement("div");
            p.innerHTML = f.outerHTML, p.classList.add(t.classLine), t.splitLetters && ta(p, {
                setClassName: function () {
                    return "char"
                }
            }), s.push(p)
        }), s.forEach(h => {
            r.appendChild(h)
        })
    }
}

function Qt(r, e = {}) {
    Object.assign({debug: !1}, e);

    function i(s) {
        const o = s.children;
        let a = 0, l = "";
        s.innerHTML = s.textContent.replace(/\S+/g, "<n>$&</n>");
        for (let h = 0; h < o.length; h++) {
            var n = o[h].getBoundingClientRect().top;
            a < n && (l += '</span></span><span class="line"><span class="line-inner">'), a = n, l += o[h].textContent + " "
        }
        s.innerHTML = l += "</span></span>"
    }

    i(r)
}

function ta(r, {
    tagName: e = "span", split: t, setClassName: i = function (s) {
        return "char" + s
    }
} = {}) {
    r.normalize();
    let s = 1;

    function o(a) {
        const l = a.parentNode, n = a.nodeValue;
        (t ? t(n) : n.split("")).forEach(function (f) {
            const p = document.createElement(e), m = i(s++, f);
            m && (p.className = m), f === " " && (f = "&nbsp;"), p.innerHTML = f, p.setAttribute("aria-hidden", "true"), l.insertBefore(p, a)
        }), n.trim() !== "" && l.setAttribute("aria-label", n), l.removeChild(a)
    }

    (function a(l) {
        if (l.nodeType === 3) return o(l);
        const n = Array.prototype.slice.call(l.childNodes);
        if (n.length === 1 && n[0].nodeType === 3) return o(n[0]);
        n.forEach(function (f) {
            a(f)
        })
    })(r)
}

class sa extends ft {
    init() {
        super.init(), this.splitText()
    }

    splitText() {
        const e = this.getAll("[data-split-lines]"), t = this.getAll("[data-split-articles]"),
            i = this.getAll("[data-split-titles]"), s = this.getAll("[data-split-chars]");
        e.length && e.forEach(o => fi(o)), i.length && i.forEach(o => {
            o.querySelectorAll("h1, h2, h3, h4, h4").forEach(l => Qt(l))
        }), t.length && t.forEach(o => {
            const a = o.querySelectorAll("h2, h3"), l = o.querySelectorAll("p");
            a.forEach(n => Qt(n)), l.forEach(n => {
                Qt(n)
            })
        }), s.length && s.forEach(o => {
            fi(o, {classWord: "word", classWords: "words", classLine: "line", classLetter: "letter", splitLetters: !0})
        })
    }
}

class Vi extends ft {
    init() {
        super.init(), this.onScroll = this.onScroll.bind(this), this.onResize = this.onResize.bind(this)
    }

    addEvents() {
        super.addEvents(), U.on("SCROLL_PROGRESS", this.onScroll), U.on("SCROLL_RESIZE", this.onResize)
    }

    removeEvents() {
        super.removeEvents(), U.off("SCROLL_PROGRESS", this.onScroll), U.off("SCROLL_RESIZE", this.onScrollResize)
    }

    onResize() {
        this.tlResize && clearTimeout(this.tlResize), this.sectionEl && (this.sectionEl.style.opacity = 0)
    }

    onScroll() {
    }
}

class We extends Vi {
    init() {
        super.init(), this.sectionViewed = !1, this.lastViewed = !1, this.inView = this.inView.bind(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.el.style.pointerEvents = "none", this.activeObserver = !1
    }

    observe() {
        !this.sectionEl || (this.observer = new IntersectionObserver(this.inView, {
            threshold: .15,
            rootMargin: "0% 0% 0% 0%"
        }), this.observer.observe(this.sectionEl))
    }

    unobserve() {
        !this.sectionEl || this.observer.unobserve(this.sectionEl)
    }

    animateIn() {
        this.el.style.pointerEvents = "auto"
    }

    animateOut() {
        this.el.style.pointerEvents = "none"
    }

    inView(e) {
        e.forEach(t => {
            const {isIntersecting: i, target: s} = t;
            if (i) this.isIntersecting = !0, s === this.sectionEl && (this.animateIn(), this.sectionViewed = !0); else {
                if (!this.sectionViewed) return;
                s === this.sectionEl && this.animateOut()
            }
        })
    }
}



class dd extends We {
    init() {
        super.init(), this.sheet = z.theatre.sheet("globe"), this.text = document.querySelector(".globe-step-0-section"), this.markers = document.querySelector(".globe-markers"), this.nextButton = document.querySelector(".interactive-globes_next"), this.sectionEl = document.querySelector(".globe-step-0"), this.observe()
    }

    addEvents() {
        super.addEvents(), this.nextButton.addEventListener("click", () => T.scroll.toNext())

    }

    onResize() {
        super.onResize()
    }

    onScroll(e) {
        if (!!T.gl && ((e.id !== "GLOBE-STEP-0" || e.id !== "GLOBE-STEP-1") && (this.el.style.opacity = 0), e.id === "GLOBE-STEP-1" && T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile : T.gl.camera.centerDefaults.dekstop), e.id === "GLOBE-STEP-1")) {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }


        if (e.id === "GLOBE-STEP-1") {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }
    }
}

class kk extends We {
    init() {
        super.init(), this.sheet = z.theatre.sheet("globe"), this.text = document.querySelector(".globe-step-11-section"), this.markers = document.querySelector(".globe-markers"), this.nextButton = document.querySelector(".interactive-globes_next"), this.sectionEl = document.querySelector(".globe-step-11"), this.observe()
    }

    addEvents() {
        super.addEvents(), this.nextButton.addEventListener("click", () => T.scroll.toNext())

    }

    onResize() {
        super.onResize()
    }

    onScroll(e) {
        if (!!T.gl && ((e.id !== "GLOBE-STEP-11" || e.id !== "GLOBE-STEP-2") && (this.el.style.opacity = 0), e.id === "GLOBE-STEP-2" && T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile : T.gl.camera.centerDefaults.dekstop), e.id === "GLOBE-STEP-2")) {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }
        // console.log(77777);

        if (e.id === "GLOBE-STEP-2") {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }
    }
}
class na extends We {
    init() {
        super.init(), this.sheet = z.theatre.sheet("globe"), this.text = document.querySelector(".section-globe"), this.markers = document.querySelector(".globe-markers"), this.nextButton = document.querySelector(".interactive-globes_next"), this.sectionEl = document.querySelector(".globe-step-1"), this.observe()
    }

    addEvents() {
        super.addEvents(), this.nextButton.addEventListener("click", () => T.scroll.toNext())
        // console.log(2323);
    }

    onResize() {
        super.onResize()
    }

    onScroll(e) {
        if (!!T.gl && ((e.id !== "GLOBE-STEP-1" || e.id !== "GLOBE-STEP-11") && (this.el.style.opacity = 0), e.id === "GLOBE-STEP-11" && T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile : T.gl.camera.centerDefaults.dekstop), e.id === "GLOBE-STEP-11")) {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }

        if (e.id === "GLOBE-STEP-11") {
            if (!e.inView) return;
            const t = I(e.progress, 0, 1, 1, 3);
            T.gl.setOpacity(I(e.progress, 0, .5, 1, 0)), W(this.text, I(e.progress, 0, 1, 0, -800)), this.text.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), this.markers.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1)
        }
    }
}

class ra extends Vi {
    init() {
        super.init(), this.onScrollResize = this.onScrollResize.bind(this), this.onRaf = this.onRaf.bind(this), this.onGlLoaded = this.onGlLoaded.bind(this), this.ready = !1, this.passedTop = !1
    }

    async onScrollResize() {
        await oe(100), this.scrollSection = T.scroll.getSection(this.el), this.ready = !0
    }

    addEvents() {
        super.addEvents(), U.on("SCROLL_RESIZE", this.onScrollResize), U.on("GL_LOADED", this.onGlLoaded), Me.add(this.onRaf, this.id)
    }

    removeEvents() {
        U.off("SCROLL_RESIZE", this.onScrollResize), Me.remove(this.id)
    }

    onGlLoaded() {
        this.animateOut()
    }

    animateIn() {
        T.gl.stars.off(), T.gl.background.on(), T.gl.globe.markers.off(), T.gl.globe.setTheme("light"), T.gl.satellite.on(), T.gl.globe.dots.pulsingOn(), T.gl.simCard.on(), T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02)
    }

    animateOut() {
        T.gl.stars.on(), T.gl.background.off(), T.gl.globe.markers.on(), T.gl.globe.setTheme("dark"), T.gl.satellite.off(), T.gl.globe.dots.pulsingOff(), T.gl.simCard.off(), T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile : T.gl.camera.centerDefaults.dekstop)
    }

    onRaf() {
        if (!this.ready) return;
        hs(T.scroll.scroll.lerped + this.scrollSection.elBounds.offsetTop) < 0 ? this.passedTop || (this.animateIn(), this.passedTop = !0) : this.passedTop && (this.animateOut(), this.passedTop = !1)
    }
}

class oa extends We {
    init() {
        super.init(), this.rotationVector = new ce, this.sectionEl = document.querySelector(".globe-step-2"), this.observe()
    }

    onScroll(e) {
        if (!!T.gl) {
            if ((e.id !== "GLOBE-STEP-2" || e.id !== "GLOBE-STEP-3") && (this.el.style.opacity = 0), e.id === "GLOBE-STEP-2") {
                if (!e.inView) return;
                // console.log(6);
                T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02);
                const t = I(e.progress, 0, 1, 3, 1);
                T.gl.globe.scale.set(t, t, t), T.gl.simCard.scale.set(t, t, t);
                const {SIM_POS_GLOBE_1: i, SIM_POS_GLOBE_2: s, SIM_ROT_GLOBE_1: o, SIM_ROT_GLOBE_2: a} = D;
                T.gl.simCard.position.lerpVectors(i, s, e.progress), this.rotationVector.lerpVectors(o, a, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z), T.gl.setOpacity(I(e.progress, .25, 1, 0, 1)), T.gl.satellite.setOpacity(I(e.progress, .25, 1, 0, 1)), this.el.style.opacity = fe(I(e.progress, .5, 1, 0, 1), 0, 1), W(this.el, I(e.progress, 0, 1, 300, 0));
                const l = fe(I(e.progress, .5, .75, 255, 0), 0, 255);
                T.nav.el.style.color = `rgb(${l},${l},${l})`, T.nav.bg.style.opacity = I(e.progress, .5, 1, 0, 1), W(T.nav.el, I(e.progress, .5, 1, 0, -1.5, !0), "rem"), W(T.nav.menuOverlay, I(e.progress, .5, 1, 0, 1.5, !0), "rem")
            }
            if (e.id === "GLOBE-STEP-3") {
                if (!e.inView) return;
                this.el.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), W(this.el, I(e.progress, 0, 1, 0, -300)), T.nav.themeLight()
            }
        }
    }
}

class aa extends We {
    init() {
        super.init(), this.sectionEl = document.querySelector(".globe-step-3"), this.dotsColor = new N(Ei.SPHERE_DOTS_COLOR), this.rotationVector = new ce, this.observe()
    }

    onScroll(e) {
        if (!!T.gl) {
            if ((e.id !== "GLOBE-STEP-3" || e.id !== "PHOTOS-STEP-1") && (this.el.style.opacity = 0), e.id === "GLOBE-STEP-3") {
                if (!e.inView) return;
                T.gl.camera.center.lerpVectors(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02, K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobileGlobe2 : T.gl.camera.centerDefaults.dekstopGlobe2, I(e.progress, 0, 1, 0, 1)), this.el.style.opacity = fe(I(e.progress, .5, 1, 0, 1), 0, 1), W(this.el, I(e.progress, 0, 1, 300, 0));
                const {SIM_POS_GLOBE_3: t, SIM_POS_GLOBE_2: i, SIM_ROT_GLOBE_3: s, SIM_ROT_GLOBE_2: o} = D;
                if (T.gl.simCard && T.gl.simCard.position.lerpVectors(i, t, e.progress), this.rotationVector.lerpVectors(o, s, e.progress), T.gl.simCard && T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z), T.gl.devices.loaded) {
                    T.gl.devices.phoneWrap.position.y = I(e.progress, .5, 1, 20, 0), T.gl.devices.gpsWrap.position.y = I(e.progress, .25, 1, 20, 0), T.gl.devices.watchWrap.position.y = I(e.progress, 0, 1, 20, 0);
                    const a = I(e.progress, .5, 1, 0, 1), l = I(e.progress, .25, 1, 0, 1),
                        n = I(e.progress, 0, 1, 0, 1);
                    T.gl.devices.phone.scale.set(a, a, a), T.gl.devices.gps.scale.set(l, l, l), T.gl.devices.watch.scale.set(n, n, n)
                }
                if (T.gl.globe.dots.loaded) {
                    const a = I(e.progress, 0, 1, this.dotsColor.r * 255, 115),
                        l = I(e.progress, 0, 1, this.dotsColor.g * 255, 245),
                        n = I(e.progress, 0, 1, this.dotsColor.b * 255, 116);
                    T.gl.globe.dots.setColor(a, l, n), T.gl.satellite.setOpacity(I(e.progress, 0, .5, 1, 0))
                }
            }
            if (e.id === "PHOTOS-STEP-1") {
                if (!e.inView) return;
                this.el.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), W(this.el, I(e.progress, 0, 1, 0, -300)), T.nav.themeLight()
            }
        }
    }
}

class la extends We {
    init() {
        super.init(), this.text = this.get(".section-text"), this.col1 = this.get(".section-photos-row-1"), this.col1inner = this.get(".section-photos-row-1 > .section-photos-row-inner"), this.col2 = this.get(".section-photos-row-2"), this.col2inner = this.get(".section-photos-row-2 > .section-photos-row-inner"), this.isStatsActive = !1, this.isPhotosActive = !1, this.rotationVector = new ce
    }

    translate(e, t, i) {
        K.w < H.BREAKPOINTS.LG ? De(e, t, i) : W(e, t, i)
    }

    onScroll(e) {
        if (!T.gl) return;
        const {w: t} = K, i = t > H.BREAKPOINTS.LG;
        let s = 25;
        if (i && (s = 20), (e.id !== "PHOTOS-STEP-1" || e.id !== "PHOTOS-STEP-2" || e.id !== "PHOTOS-STEP-3" || e.id === "STATS-STEP") && (this.el.style.opacity = 0), e.id === "PHOTOS-STEP-1") {
            if (!e.inView) return;
            T.gl.camera.center.lerpVectors(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobileGlobe2 : T.gl.camera.centerDefaults.dekstopGlobe2, K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02, I(e.progress, 0, 1, 0, 1)), e.progress > .25 ? (T.gl.camera.panning = !1, this.isPhotosActive || this.animateIn(), this.isPhotosActive = !0) : (T.gl.camera.panning = !0, this.isPhotosActive && this.animateOut(), this.isPhotosActive = !1), T.gl.setOpacity(fe(I(e.progress, 0, .5, 1, 0), 0, 1));
            const o = I(e.progress, 0, .5, 1, .85);
            T.gl.globe.scale.set(o, o, o);
            const {SIM_POS_GLOBE_3: a, SIM_POS_PHOTOS: l, SIM_ROT_GLOBE_3: n, SIM_ROT_PHOTOS: h} = D;
            if (T.gl.simCard.position.lerpVectors(a, l, e.progress), this.rotationVector.lerpVectors(n, h, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z), T.gl.devices.loaded) {
                const f = I(e.progress, 0, .5, 1, 0);
                T.gl.devices.phone.scale.set(f, f, f), T.gl.devices.gps.scale.set(f, f, f), T.gl.devices.watch.scale.set(f, f, f)
            }
            this.el.style.opacity = fe(I(e.progress, .5, 1, 0, 1), 0, 1), W(this.text, I(e.progress, 0, 1, 300, 0)), this.translate(this.col1inner, I(e.progress, 0, 1, s, 0), "%"), this.translate(this.col2inner, I(e.progress, 0, 1, -s, 0), "%")
        }
        if (e.id === "PHOTOS-STEP-2") {
            if (!e.inView) return;
            T.nav.themeLight();
            const {SIM_POS_PHOTOS: o, SIM_ROT_PHOTOS: a, SIM_POS_PHOTOS_2: l, SIM_ROT_PHOTOS_2: n} = D;
            T.gl.simCard.position.lerpVectors(o, l, e.progress), this.rotationVector.lerpVectors(a, n, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z), T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02), this.el.style.opacity = 1, this.translate(this.col1inner, I(e.progress, 0, 1, 0, -s), "%"), this.translate(this.col2inner, I(e.progress, 0, 1, 0, s), "%")
        }
        if (e.id === "PHOTOS-STEP-3") {
            if (!e.inView) return;
            T.nav.themeLight(), T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02);
            const {SIM_POS_PHOTOS_3: o, SIM_ROT_PHOTOS_3: a, SIM_POS_PHOTOS_2: l, SIM_ROT_PHOTOS_2: n} = D;
            T.gl.simCard.position.lerpVectors(l, o, e.progress), this.rotationVector.lerpVectors(n, a, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z), this.el.style.opacity = 1, this.translate(this.col1inner, I(e.progress, 0, 1, -s, -s * 2), "%"), this.translate(this.col2inner, I(e.progress, 0, 1, s, s * 2), "%")

        }
        if (e.id === "STATS-STEP") {
            if (!e.inView) return;
            e.progress > .25 ? (this.isStatsActive && this.animateOut(), this.isStatsActive = !1) : (this.isStatsActive || this.animateIn(), this.isStatsActive = !0), this.el.style.opacity = fe(I(e.progress, 0, .5, 1, 0), 0, 1), W(this.text, I(e.progress, 0, 1, 0, -200)), this.translate(this.col1inner, I(e.progress, 0, 1, -s * 2, -s * 3), "%"), this.translate(this.col2inner, I(e.progress, 0, 1, s * 2, s * 3), "%")
        }

    }
}

class ca extends We {
    init() {
        super.init(), this.coverage = this.get(".stats-coverage"), this.price = this.get(".stats-price"), this.hardware = this.get(".stats-hardware"), this.cols = this.getAll(".stats-col"), this.sectionEl = document.querySelector('[data-scroll-item="STATS-STEP"]'), this.el.style.pointerEvents = "none", this.rotationVector = new ce, this.observe()
    }

    countAnimation(e, t, i, s, o) {
        const a = parseFloat(t.innerHTML), l = I(e, 0, 1, i, s), n = hs(l, o);
        a !== n && (t.innerHTML = n)
    }

    onResize() {
        super.onResize()
    }

    onScroll(e) {
        if (!!T.gl) {
            if ((e.id !== "STATS-STEP" || e.id !== "STATS-STEP") && (this.el.style.opacity = 0), e.id === "STATS-STEP") {
                if (!e.inView) return;
                T.nav.themeLight(), T.gl.camera.center.lerpVectors(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile02 : T.gl.camera.centerDefaults.dekstop02, K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile03 : T.gl.camera.centerDefaults.dekstop03, I(e.progress, 0, 1, 0, 1));
                const {
                    SIM_POS_STATS: t,
                    SIM_POS_PHOTOS_3: i,
                    SIM_ROT_STATS: s,
                    SIM_ROT_PHOTOS_3: o,
                    SIM_SCALE_DEFAULT: a,
                    SIM_SCALE_STATS: l
                } = D;
                T.gl.simCard.position.lerpVectors(i, t, e.progress), this.rotationVector.lerpVectors(o, s, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z);
                const n = I(e.progress, 0, 1, a, l);
                T.gl.simCard.scale.set(n, n, n), this.el.style.opacity = I(e.progress, .5, 1, 0, 1), this.countAnimation(e.progress, this.coverage, 0, 15.3, 1), this.cols[0].style.opacity = I(e.progress, 0, 1, 0, 1), this.countAnimation(e.progress, this.price, 20, 6, 0), this.countAnimation(e.progress, this.hardware, 20, 0, 0), W(this.cols[1], I(e.progress, 0, 1, 400, 0)), W(this.cols[2], I(e.progress, 0, 1, 500, 0)), this.cols[1].style.opacity = I(e.progress, 0, 1, 0, 1), this.cols[2].style.opacity = I(e.progress, 0, 1, 0, 1), W(this.cols[0], I(e.progress, 0, 1, 300, 0))
            }
            if (e.id === "FOOTER-STEP") {
                if (!e.inView) return;
                T.nav.themeLight(), this.el.style.opacity = I(e.progress, 0, .5, 1, 0), W(this.cols[0], I(e.progress, 0, 1, 0, -300)), W(this.cols[1], I(e.progress, 0, 1, 0, -400)), W(this.cols[2], I(e.progress, 0, 1, 0, -500))
                this.el.style.opacity = fe(I(e.progress, .5, .5, 1, 0), 1, 1)
            }
        }
    }
}

class ua extends We {
    init() {
        super.init(), this.sectionEl = document.querySelector('[data-scroll-item="FOOTER-STEP"]'), this.observe(), this.rotationVector = new ce
    }

    onScroll(e) {
        if (!!T.gl && (e.id !== "FOOTER-STEP" && (this.el.style.opacity = 0), e.id === "FOOTER-STEP")) {
            if (!e.inView) return;

            T.gl.camera.center.copy(K.w < H.BREAKPOINTS.MD ? T.gl.camera.centerDefaults.mobile03 : T.gl.camera.centerDefaults.dekstop03);
            const {
                SIM_POS_STATS: t,
                SIM_POS_FOOTER: i,
                SIM_ROT_STATS: s,
                SIM_ROT_FOOTER: o,
                SIM_SCALE_STATS: a,
                SIM_SCALE_DEFAULT: l
            } = D;
            T.gl.simCard.position.lerpVectors(t, i, e.progress), this.rotationVector.lerpVectors(s, o, e.progress), T.gl.simCard.rotation.set(this.rotationVector.x, this.rotationVector.y, this.rotationVector.z);
            const n = I(e.progress, 0, 1, a, l);

            T.gl.simCard.scale.set(n, n, n), this.el.style.opacity = I(e.progress, 0, 1, 0, 1), W(this.el, I(e.progress, 0, 1, 400, 0))
            this.el.style.opacity = fe(I(e.progress, 1, .5, 1, 0), .5, 1)
        }
    }
}

class ha extends ft {
    async init() {
        super.init(), this.pageElements = [], this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.settings = {
            socials: !0,
            images: !0,
            in: {fromBottom: !0}
        }, this.splitTexts = new sa(this.el), this.animatedParts = this.getAll("[data-animate]"),this.addComponents(".globe-step-0", dd), this.addComponents(".globe-step-1", na),this.addComponents(".globe-step-11", kk), this.addComponents(".globe-switch", ra), this.addComponents(".globe-text-2", oa), this.addComponents(".globe-text-3", aa), this.addComponents(".section-photos", la), this.addComponents(".newsroom-footer-wrapper", ua), await oe(200), this.animateIn()
    }

    addComponents(e, t, i = this.el, s = !1) {
        let o = [];
        if (s) {
            const a = this.getAll(e, i);
            a.length && a.forEach(l => {
                if (l) {
                    const n = new t(l, this.el, Le("comp"));
                    o.push(n), this.pageElements.push(n)
                }
            })
        } else {
            const a = this.get(e, i);
            a && (o = new t(a, this.el, Le("comp")), this.pageElements.push(o))
        }
        return o
    }

    addEvents() {
        super.addEvents(), U.on("ANIMATE:IN", this.animateIn)
    }

    removeEvents() {
        super.removeEvents(), U.off("ANIMATE:IN", this.animateIn)
    }

    animateIn() {
        var e, t;
        (e = T.scroll) == null || e.activate(), this.pageElements.forEach(i => {
            i.autoAnimation && i.animateIn && i.animateIn(), i.activeObserver && i.observe && i.observe()
        }), document.querySelector(".page-mask") && ls.css({
            el: document.querySelector(".page-mask"),
            duration: 500,
            ease: "linear",
            keyframes: [{opacity: 1}, {opacity: 0}]
        }), this.settings.images && ((t = T.images) == null || t.animateIn())
    }

    animateOut() {
        this.pageElements.forEach(e => {
            e.animateOut && e.animateOut(), e.activeObserver && e.unobserve && e.unobserve(), e.destroy && e.destroy()
        }), ls.css({
            el: document.querySelector(".page-mask"),
            duration: 400,
            ease: "linear",
            keyframes: [{opacity: 0}, {opacity: 1}]
        })
    }
}

function fa() {
    return new Promise(r => {
        document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", r) : r()
    })
}

class T {
    static async init() {
        if (await fa(), await document.fonts.ready, H.DEBUG) {
            const {Debug: e} = await Tr(() => import("./Debug.js"), ["assets/Debug.js", "assets/Debug.css", "assets/Stars2.js"]);
            this.debugInstance = new e
        }
        _r.init(), this.nav = document.querySelector(".navbar_component") ? new Jo(".navbar_component") : null, this.scroll = document.querySelector("[data-scroll]") ? new Qo : null, window.onlinkScroll = this.scroll, this.view = {}, Me.init(), K.init(), this.build(), await oe(100), le.GL && (this.gl = new _o(".gl-canvas", document, Le("images")), this.gl.in(this.view.current.el)), await oe(500), this.loaded = !0
    }

    static build(e = null) {
        e === null && (e = document.body), this.getView(e)
    }

    static getView(e) {
        this.view.current = new ha(e, e, Le("home"), "home")
    }

    static serviceWorker() {
        "serviceWorker" in navigator && window.addEventListener("load", () => {
            navigator.serviceWorker.register("/sw.js").then(e => {
                e.update()
            }).catch(e => {
                console.log("SW registration failed: ", e)
            })
        })
    }
}

T.init();

