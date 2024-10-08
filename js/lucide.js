/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

(function(a, n) {
    typeof exports == "object" && typeof module < "u" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : (a = typeof globalThis < "u" ? globalThis : a || self, n(a.lucide = {}))
})(this, function(a) {
        "use strict";
        const n = (t, d, c = []) => {
            const e = document.createElementNS("http://www.w3.org/2000/svg", t);
            return Object.keys(d).forEach(M => {
                e.setAttribute(M, String(d[M]))
            }), c.length && c.forEach(M => {
                const l = n(...M);
                e.appendChild(l)
            }), e
        };
        var u0 = ([t, d, c]) => n(t, d, c);
        const Ry = t => Array.from(t.attributes).reduce((d, c) => (d[c.name] = c.value, d), {}),
            qy = t => typeof t == "string" ? t : !t || !t.class ? "" : t.class && typeof t.class == "string" ? t.class.split(" ") : t.class && Array.isArray(t.class) ? t.class : "",
            Ty = t => t.flatMap(qy).map(d => d.trim()).filter(Boolean).filter((d, c, e) => e.indexOf(d) === c).join(" "),
            zy = t => t.replace(/(\w)(\w*)(_|-|\s*)/g, (d, c, e) => c.toUpperCase() + e.toLowerCase()),
            C0 = (t, {
                nameAttr: d,
                icons: c,
                attrs: e
            }) => {
                const M = t.getAttribute(d);
                if (M == null) return;
                const l = zy(M),
                    By = c[l];
                if (!By) return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);
                const Fy = Ry(t),
                    [xy, Uy, Oy] = By,
                    Dy = {
                        ...Uy,
                        "data-lucide": M,
                        ...e,
                        ...Fy
                    },
                    Zy = Ty(["lucide", `lucide-${M}`, Fy, e]);
                Zy && Object.assign(Dy, {
                    class: Zy
                });
                const Gy = u0([xy, Dy, Oy]);
                return t.parentNode?.replaceChild(Gy, t)
            },
            h = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            },
            H0 = ["svg", h, [
                ["path", {
                    d: "M3.5 13h6"
                }],
                ["path", {
                    d: "m2 16 4.5-9 4.5 9"
                }],
                ["path", {
                    d: "M18 7v9"
                }],
                ["path", {
                    d: "m14 12 4 4 4-4"
                }]
            ]],
            w0 = ["svg", h, [
                ["path", {
                    d: "M3.5 13h6"
                }],
                ["path", {
                    d: "m2 16 4.5-9 4.5 9"
                }],
                ["path", {
                    d: "M18 16V7"
                }],
                ["path", {
                    d: "m14 11 4-4 4 4"
                }]
            ]],
            V0 = ["svg", h, [
                ["path", {
                    d: "M21 14h-5"
                }],
                ["path", {
                    d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"
                }],
                ["path", {
                    d: "M4.5 13h6"
                }],
                ["path", {
                    d: "m3 16 4.5-9 4.5 9"
                }]
            ]],
            S0 = ["svg", h, [
                ["circle", {
                    cx: "16",
                    cy: "4",
                    r: "1"
                }],
                ["path", {
                    d: "m18 19 1-7-6 1"
                }],
                ["path", {
                    d: "m5 8 3-3 5.5 3-2.36 3.5"
                }],
                ["path", {
                    d: "M4.24 14.5a5 5 0 0 0 6.88 6"
                }],
                ["path", {
                    d: "M13.76 17.5a5 5 0 0 0-6.88-6"
                }]
            ]],
            A0 = ["svg", h, [
                ["path", {
                    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                }]
            ]],
            L0 = ["svg", h, [
                ["path", {
                    d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M6 8h12"
                }],
                ["path", {
                    d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
                }],
                ["path", {
                    d: "M6.6 15.6A2 2 0 1 0 10 17v-5"
                }]
            ]],
            f0 = ["svg", h, [
                ["path", {
                    d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                }],
                ["path", {
                    d: "m12 15 5 6H7Z"
                }]
            ]],
            v = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "8"
                }],
                ["path", {
                    d: "M5 3 2 6"
                }],
                ["path", {
                    d: "m22 6-3-3"
                }],
                ["path", {
                    d: "M6.38 18.7 4 21"
                }],
                ["path", {
                    d: "M17.64 18.67 20 21"
                }],
                ["path", {
                    d: "m9 13 2 2 4-4"
                }]
            ]],
            o = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "8"
                }],
                ["path", {
                    d: "M5 3 2 6"
                }],
                ["path", {
                    d: "m22 6-3-3"
                }],
                ["path", {
                    d: "M6.38 18.7 4 21"
                }],
                ["path", {
                    d: "M17.64 18.67 20 21"
                }],
                ["path", {
                    d: "M9 13h6"
                }]
            ]],
            k0 = ["svg", h, [
                ["path", {
                    d: "M6.87 6.87a8 8 0 1 0 11.26 11.26"
                }],
                ["path", {
                    d: "M19.9 14.25a8 8 0 0 0-9.15-9.15"
                }],
                ["path", {
                    d: "m22 6-3-3"
                }],
                ["path", {
                    d: "M6.26 18.67 4 21"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M4 4 2 6"
                }]
            ]],
            s = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "8"
                }],
                ["path", {
                    d: "M5 3 2 6"
                }],
                ["path", {
                    d: "m22 6-3-3"
                }],
                ["path", {
                    d: "M6.38 18.7 4 21"
                }],
                ["path", {
                    d: "M17.64 18.67 20 21"
                }],
                ["path", {
                    d: "M12 10v6"
                }],
                ["path", {
                    d: "M9 13h6"
                }]
            ]],
            P0 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "8"
                }],
                ["path", {
                    d: "M12 9v4l2 2"
                }],
                ["path", {
                    d: "M5 3 2 6"
                }],
                ["path", {
                    d: "m22 6-3-3"
                }],
                ["path", {
                    d: "M6.38 18.7 4 21"
                }],
                ["path", {
                    d: "M17.64 18.67 20 21"
                }]
            ]],
            B0 = ["svg", h, [
                ["path", {
                    d: "M11 21c0-2.5 2-2.5 2-5"
                }],
                ["path", {
                    d: "M16 21c0-2.5 2-2.5 2-5"
                }],
                ["path", {
                    d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"
                }],
                ["path", {
                    d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"
                }],
                ["path", {
                    d: "M6 21c0-2.5 2-2.5 2-5"
                }]
            ]],
            F0 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["polyline", {
                    points: "11 3 11 11 14 8 17 11 17 3"
                }]
            ]],
            D0 = ["svg", h, [
                ["path", {
                    d: "M2 12h20"
                }],
                ["path", {
                    d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
                }],
                ["path", {
                    d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
                }],
                ["path", {
                    d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
                }]
            ]],
            Z0 = ["svg", h, [
                ["path", {
                    d: "M12 2v20"
                }],
                ["path", {
                    d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
                }],
                ["path", {
                    d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
                }],
                ["path", {
                    d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
                }],
                ["path", {
                    d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
                }]
            ]],
            R0 = ["svg", h, [
                ["line", {
                    x1: "21",
                    x2: "3",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "17",
                    x2: "7",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "19",
                    x2: "5",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            q0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "16",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "9",
                    x: "14",
                    y: "9",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 22H2"
                }]
            ]],
            T0 = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "6",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["rect", {
                    width: "9",
                    height: "6",
                    x: "9",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 22V2"
                }]
            ]],
            z0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "4",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "14",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M17 22v-5"
                }],
                ["path", {
                    d: "M17 7V2"
                }],
                ["path", {
                    d: "M7 22v-3"
                }],
                ["path", {
                    d: "M7 5V2"
                }]
            ]],
            b0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "4",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "14",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M10 2v20"
                }],
                ["path", {
                    d: "M20 2v20"
                }]
            ]],
            x0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "4",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "14",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 2v20"
                }],
                ["path", {
                    d: "M14 2v20"
                }]
            ]],
            U0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "16",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 2v20"
                }]
            ]],
            O0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "12",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 2v20"
                }]
            ]],
            G0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "6",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "16",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 2v20"
                }]
            ]],
            E0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "9",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 22V2"
                }],
                ["path", {
                    d: "M20 22V2"
                }]
            ]],
            W0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "14",
                    x: "3",
                    y: "5",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "15",
                    y: "7",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 2v20"
                }],
                ["path", {
                    d: "M21 2v20"
                }]
            ]],
            I0 = ["svg", h, [
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            X0 = ["svg", h, [
                ["line", {
                    x1: "21",
                    x2: "3",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "15",
                    x2: "3",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "17",
                    x2: "3",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            N0 = ["svg", h, [
                ["line", {
                    x1: "21",
                    x2: "3",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "21",
                    x2: "9",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "21",
                    x2: "7",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            K0 = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "16",
                    x: "4",
                    y: "6",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "9",
                    x: "14",
                    y: "6",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 2H2"
                }]
            ]],
            J0 = ["svg", h, [
                ["rect", {
                    width: "9",
                    height: "6",
                    x: "6",
                    y: "14",
                    rx: "2"
                }],
                ["rect", {
                    width: "16",
                    height: "6",
                    x: "6",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 2v20"
                }]
            ]],
            j0 = ["svg", h, [
                ["path", {
                    d: "M22 17h-3"
                }],
                ["path", {
                    d: "M22 7h-5"
                }],
                ["path", {
                    d: "M5 17H2"
                }],
                ["path", {
                    d: "M7 7H2"
                }],
                ["rect", {
                    x: "5",
                    y: "14",
                    width: "14",
                    height: "6",
                    rx: "2"
                }],
                ["rect", {
                    x: "7",
                    y: "4",
                    width: "10",
                    height: "6",
                    rx: "2"
                }]
            ]],
            Q0 = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "14",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 20h20"
                }],
                ["path", {
                    d: "M2 10h20"
                }]
            ]],
            Y0 = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "14",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 14h20"
                }],
                ["path", {
                    d: "M2 4h20"
                }]
            ]],
            _0 = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "16",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 12h20"
                }]
            ]],
            aa = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "12",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 22h20"
                }]
            ]],
            ha = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "16",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "6",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 2h20"
                }]
            ]],
            ta = ["svg", h, [
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "9",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 20H2"
                }],
                ["path", {
                    d: "M22 4H2"
                }]
            ]],
            da = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "6",
                    x: "5",
                    y: "15",
                    rx: "2"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "7",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 21h20"
                }],
                ["path", {
                    d: "M2 3h20"
                }]
            ]],
            ca = ["svg", h, [
                ["path", {
                    d: "M10 10H6"
                }],
                ["path", {
                    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
                }],
                ["path", {
                    d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
                }],
                ["path", {
                    d: "M8 8v4"
                }],
                ["path", {
                    d: "M9 18h6"
                }],
                ["circle", {
                    cx: "17",
                    cy: "18",
                    r: "2"
                }],
                ["circle", {
                    cx: "7",
                    cy: "18",
                    r: "2"
                }]
            ]],
            Ma = ["svg", h, [
                ["path", {
                    d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
                }],
                ["path", {
                    d: "M16 12h3"
                }]
            ]],
            ea = ["svg", h, [
                ["path", {
                    d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
                }],
                ["path", {
                    d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
                }]
            ]],
            ia = ["svg", h, [
                ["path", {
                    d: "M12 22V8"
                }],
                ["path", {
                    d: "M5 12H2a10 10 0 0 0 20 0h-3"
                }],
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "3"
                }]
            ]],
            na = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M16 16s-1.5-2-4-2-4 2-4 2"
                }],
                ["path", {
                    d: "M7.5 8 10 9"
                }],
                ["path", {
                    d: "m14 9 2.5-1"
                }],
                ["path", {
                    d: "M9 10h.01"
                }],
                ["path", {
                    d: "M15 10h.01"
                }]
            ]],
            pa = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M8 15h8"
                }],
                ["path", {
                    d: "M8 9h2"
                }],
                ["path", {
                    d: "M14 9h2"
                }]
            ]],
            la = ["svg", h, [
                ["path", {
                    d: "M2 12 7 2"
                }],
                ["path", {
                    d: "m7 12 5-10"
                }],
                ["path", {
                    d: "m12 12 5-10"
                }],
                ["path", {
                    d: "m17 12 5-10"
                }],
                ["path", {
                    d: "M4.5 7h15"
                }],
                ["path", {
                    d: "M12 16v6"
                }]
            ]],
            va = ["svg", h, [
                ["path", {
                    d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"
                }],
                ["path", {
                    d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"
                }],
                ["path", {
                    d: "M9 12v5"
                }],
                ["path", {
                    d: "M15 12v5"
                }],
                ["path", {
                    d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
                }]
            ]],
            oa = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m14.31 8 5.74 9.94"
                }],
                ["path", {
                    d: "M9.69 8h11.48"
                }],
                ["path", {
                    d: "m7.38 12 5.74-9.94"
                }],
                ["path", {
                    d: "M9.69 16 3.95 6.06"
                }],
                ["path", {
                    d: "M14.31 16H2.83"
                }],
                ["path", {
                    d: "m16.62 12-5.74 9.94"
                }]
            ]],
            sa = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 8h.01"
                }],
                ["path", {
                    d: "M10 8h.01"
                }],
                ["path", {
                    d: "M14 8h.01"
                }]
            ]],
            ra = ["svg", h, [
                ["rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2"
                }],
                ["path", {
                    d: "M10 4v4"
                }],
                ["path", {
                    d: "M2 8h20"
                }],
                ["path", {
                    d: "M6 4v4"
                }]
            ]],
            ga = ["svg", h, [
                ["path", {
                    d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
                }],
                ["path", {
                    d: "M10 2c1 .5 2 2 2 5"
                }]
            ]],
            ya = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "5",
                    x: "2",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "M4 8v11a2 2 0 0 0 2 2h2"
                }],
                ["path", {
                    d: "M20 8v11a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "m9 15 3-3 3 3"
                }],
                ["path", {
                    d: "M12 12v9"
                }]
            ]],
            $a = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "5",
                    x: "2",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
                }],
                ["path", {
                    d: "m9.5 17 5-5"
                }],
                ["path", {
                    d: "m9.5 12 5 5"
                }]
            ]],
            ma = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "5",
                    x: "2",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
                }],
                ["path", {
                    d: "M10 12h4"
                }]
            ]],
            ua = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["path", {
                    d: "M7 12v5h12V8l-5 5-4-4Z"
                }]
            ]],
            Ca = ["svg", h, [
                ["path", {
                    d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
                }],
                ["path", {
                    d: "M5 18v2"
                }],
                ["path", {
                    d: "M19 18v2"
                }]
            ]],
            Ha = ["svg", h, [
                ["path", {
                    d: "M15 5H9"
                }],
                ["path", {
                    d: "M15 9v3h4l-7 7-7-7h4V9z"
                }]
            ]],
            wa = ["svg", h, [
                ["path", {
                    d: "M15 6v6h4l-7 7-7-7h4V6h6z"
                }]
            ]],
            Va = ["svg", h, [
                ["path", {
                    d: "M19 15V9"
                }],
                ["path", {
                    d: "M15 15h-3v4l-7-7 7-7v4h3v6z"
                }]
            ]],
            Sa = ["svg", h, [
                ["path", {
                    d: "M18 15h-6v4l-7-7 7-7v4h6v6z"
                }]
            ]],
            Aa = ["svg", h, [
                ["path", {
                    d: "M5 9v6"
                }],
                ["path", {
                    d: "M9 9h3V5l7 7-7 7v-4H9V9z"
                }]
            ]],
            La = ["svg", h, [
                ["path", {
                    d: "M6 9h6V5l7 7-7 7v-4H6V9z"
                }]
            ]],
            fa = ["svg", h, [
                ["path", {
                    d: "M9 19h6"
                }],
                ["path", {
                    d: "M9 15v-3H5l7-7 7 7h-4v3H9z"
                }]
            ]],
            ka = ["svg", h, [
                ["path", {
                    d: "M9 18v-6H5l7-7 7 7h-4v6H9z"
                }]
            ]],
            Pa = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["rect", {
                    x: "15",
                    y: "4",
                    width: "4",
                    height: "6",
                    ry: "2"
                }],
                ["path", {
                    d: "M17 20v-6h-2"
                }],
                ["path", {
                    d: "M15 20h4"
                }]
            ]],
            Ba = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["path", {
                    d: "M17 10V4h-2"
                }],
                ["path", {
                    d: "M15 10h4"
                }],
                ["rect", {
                    x: "15",
                    y: "14",
                    width: "4",
                    height: "6",
                    ry: "2"
                }]
            ]],
            r = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["path", {
                    d: "M20 8h-5"
                }],
                ["path", {
                    d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
                }],
                ["path", {
                    d: "M15 14h5l-5 6h5"
                }]
            ]],
            Fa = ["svg", h, [
                ["path", {
                    d: "M19 3H5"
                }],
                ["path", {
                    d: "M12 21V7"
                }],
                ["path", {
                    d: "m6 15 6 6 6-6"
                }]
            ]],
            Da = ["svg", h, [
                ["path", {
                    d: "M17 7 7 17"
                }],
                ["path", {
                    d: "M17 17H7V7"
                }]
            ]],
            Za = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["path", {
                    d: "M11 4h4"
                }],
                ["path", {
                    d: "M11 8h7"
                }],
                ["path", {
                    d: "M11 12h10"
                }]
            ]],
            Ra = ["svg", h, [
                ["path", {
                    d: "m7 7 10 10"
                }],
                ["path", {
                    d: "M17 7v10H7"
                }]
            ]],
            qa = ["svg", h, [
                ["path", {
                    d: "M12 2v14"
                }],
                ["path", {
                    d: "m19 9-7 7-7-7"
                }],
                ["circle", {
                    cx: "12",
                    cy: "21",
                    r: "1"
                }]
            ]],
            Ta = ["svg", h, [
                ["path", {
                    d: "M12 17V3"
                }],
                ["path", {
                    d: "m6 11 6 6 6-6"
                }],
                ["path", {
                    d: "M19 21H5"
                }]
            ]],
            za = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["path", {
                    d: "m21 8-4-4-4 4"
                }],
                ["path", {
                    d: "M17 4v16"
                }]
            ]],
            g = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 20V4"
                }],
                ["path", {
                    d: "M11 4h10"
                }],
                ["path", {
                    d: "M11 8h7"
                }],
                ["path", {
                    d: "M11 12h4"
                }]
            ]],
            y = ["svg", h, [
                ["path", {
                    d: "m3 16 4 4 4-4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M15 4h5l-5 6h5"
                }],
                ["path", {
                    d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
                }],
                ["path", {
                    d: "M20 18h-5"
                }]
            ]],
            ba = ["svg", h, [
                ["path", {
                    d: "M12 5v14"
                }],
                ["path", {
                    d: "m19 12-7 7-7-7"
                }]
            ]],
            xa = ["svg", h, [
                ["path", {
                    d: "m9 6-6 6 6 6"
                }],
                ["path", {
                    d: "M3 12h14"
                }],
                ["path", {
                    d: "M21 19V5"
                }]
            ]],
            Ua = ["svg", h, [
                ["path", {
                    d: "M8 3 4 7l4 4"
                }],
                ["path", {
                    d: "M4 7h16"
                }],
                ["path", {
                    d: "m16 21 4-4-4-4"
                }],
                ["path", {
                    d: "M20 17H4"
                }]
            ]],
            Oa = ["svg", h, [
                ["path", {
                    d: "M3 19V5"
                }],
                ["path", {
                    d: "m13 6-6 6 6 6"
                }],
                ["path", {
                    d: "M7 12h14"
                }]
            ]],
            Ga = ["svg", h, [
                ["path", {
                    d: "m12 19-7-7 7-7"
                }],
                ["path", {
                    d: "M19 12H5"
                }]
            ]],
            Ea = ["svg", h, [
                ["path", {
                    d: "M3 5v14"
                }],
                ["path", {
                    d: "M21 12H7"
                }],
                ["path", {
                    d: "m15 18 6-6-6-6"
                }]
            ]],
            Wa = ["svg", h, [
                ["path", {
                    d: "m16 3 4 4-4 4"
                }],
                ["path", {
                    d: "M20 7H4"
                }],
                ["path", {
                    d: "m8 21-4-4 4-4"
                }],
                ["path", {
                    d: "M4 17h16"
                }]
            ]],
            Ia = ["svg", h, [
                ["path", {
                    d: "M17 12H3"
                }],
                ["path", {
                    d: "m11 18 6-6-6-6"
                }],
                ["path", {
                    d: "M21 5v14"
                }]
            ]],
            Xa = ["svg", h, [
                ["path", {
                    d: "M5 12h14"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7"
                }]
            ]],
            Na = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["rect", {
                    x: "15",
                    y: "4",
                    width: "4",
                    height: "6",
                    ry: "2"
                }],
                ["path", {
                    d: "M17 20v-6h-2"
                }],
                ["path", {
                    d: "M15 20h4"
                }]
            ]],
            Ka = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M17 10V4h-2"
                }],
                ["path", {
                    d: "M15 10h4"
                }],
                ["rect", {
                    x: "15",
                    y: "14",
                    width: "4",
                    height: "6",
                    ry: "2"
                }]
            ]],
            $ = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M20 8h-5"
                }],
                ["path", {
                    d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
                }],
                ["path", {
                    d: "M15 14h5l-5 6h5"
                }]
            ]],
            Ja = ["svg", h, [
                ["path", {
                    d: "m21 16-4 4-4-4"
                }],
                ["path", {
                    d: "M17 20V4"
                }],
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }]
            ]],
            ja = ["svg", h, [
                ["path", {
                    d: "m5 9 7-7 7 7"
                }],
                ["path", {
                    d: "M12 16V2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "21",
                    r: "1"
                }]
            ]],
            Qa = ["svg", h, [
                ["path", {
                    d: "m18 9-6-6-6 6"
                }],
                ["path", {
                    d: "M12 3v14"
                }],
                ["path", {
                    d: "M5 21h14"
                }]
            ]],
            Ya = ["svg", h, [
                ["path", {
                    d: "M7 17V7h10"
                }],
                ["path", {
                    d: "M17 17 7 7"
                }]
            ]],
            m = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M11 12h4"
                }],
                ["path", {
                    d: "M11 16h7"
                }],
                ["path", {
                    d: "M11 20h10"
                }]
            ]],
            _a = ["svg", h, [
                ["path", {
                    d: "M7 7h10v10"
                }],
                ["path", {
                    d: "M7 17 17 7"
                }]
            ]],
            ah = ["svg", h, [
                ["path", {
                    d: "M5 3h14"
                }],
                ["path", {
                    d: "m18 13-6-6-6 6"
                }],
                ["path", {
                    d: "M12 7v14"
                }]
            ]],
            hh = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M11 12h10"
                }],
                ["path", {
                    d: "M11 16h7"
                }],
                ["path", {
                    d: "M11 20h4"
                }]
            ]],
            u = ["svg", h, [
                ["path", {
                    d: "m3 8 4-4 4 4"
                }],
                ["path", {
                    d: "M7 4v16"
                }],
                ["path", {
                    d: "M15 4h5l-5 6h5"
                }],
                ["path", {
                    d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
                }],
                ["path", {
                    d: "M20 18h-5"
                }]
            ]],
            th = ["svg", h, [
                ["path", {
                    d: "m5 12 7-7 7 7"
                }],
                ["path", {
                    d: "M12 19V5"
                }]
            ]],
            dh = ["svg", h, [
                ["path", {
                    d: "m4 6 3-3 3 3"
                }],
                ["path", {
                    d: "M7 17V3"
                }],
                ["path", {
                    d: "m14 6 3-3 3 3"
                }],
                ["path", {
                    d: "M17 17V3"
                }],
                ["path", {
                    d: "M4 21h16"
                }]
            ]],
            ch = ["svg", h, [
                ["path", {
                    d: "M12 6v12"
                }],
                ["path", {
                    d: "M17.196 9 6.804 15"
                }],
                ["path", {
                    d: "m6.804 9 10.392 6"
                }]
            ]],
            Mh = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["path", {
                    d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
                }]
            ]],
            eh = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }],
                ["path", {
                    d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
                }],
                ["path", {
                    d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
                }]
            ]],
            ih = ["svg", h, [
                ["path", {
                    d: "M2 10v3"
                }],
                ["path", {
                    d: "M6 6v11"
                }],
                ["path", {
                    d: "M10 3v18"
                }],
                ["path", {
                    d: "M14 8v7"
                }],
                ["path", {
                    d: "M18 5v13"
                }],
                ["path", {
                    d: "M22 10v3"
                }]
            ]],
            nh = ["svg", h, [
                ["path", {
                    d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
                }]
            ]],
            ph = ["svg", h, [
                ["path", {
                    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "6"
                }]
            ]],
            lh = ["svg", h, [
                ["path", {
                    d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"
                }],
                ["path", {
                    d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"
                }]
            ]],
            C = ["svg", h, [
                ["path", {
                    d: "M4 4v16h16"
                }],
                ["path", {
                    d: "m4 20 7-7"
                }]
            ]],
            vh = ["svg", h, [
                ["path", {
                    d: "M9 12h.01"
                }],
                ["path", {
                    d: "M15 12h.01"
                }],
                ["path", {
                    d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
                }],
                ["path", {
                    d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
                }]
            ]],
            oh = ["svg", h, [
                ["path", {
                    d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                }],
                ["path", {
                    d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"
                }],
                ["path", {
                    d: "M8 10h8"
                }],
                ["path", {
                    d: "M8 18h8"
                }]
            ]],
            sh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            rh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M12 7v10"
                }],
                ["path", {
                    d: "M15.4 10a4 4 0 1 0 0 4"
                }]
            ]],
            H = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "m9 12 2 2 4-4"
                }]
            ]],
            gh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
                }],
                ["path", {
                    d: "M12 18V6"
                }]
            ]],
            yh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M7 12h5"
                }],
                ["path", {
                    d: "M15 9.4a4 4 0 1 0 0 5.2"
                }]
            ]],
            $h = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "17",
                    y2: "17"
                }]
            ]],
            mh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M8 8h8"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "m13 17-5-1h1a4 4 0 0 0 0-8"
                }]
            ]],
            uh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "16",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "8",
                    y2: "8"
                }]
            ]],
            Ch = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "m9 8 3 3v7"
                }],
                ["path", {
                    d: "m12 11 3-3"
                }],
                ["path", {
                    d: "M9 12h6"
                }],
                ["path", {
                    d: "M9 16h6"
                }]
            ]],
            Hh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            wh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["path", {
                    d: "M15 15h.01"
                }]
            ]],
            Vh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "16"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            Sh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M8 12h4"
                }],
                ["path", {
                    d: "M10 16V9.5a2.5 2.5 0 0 1 5 0"
                }],
                ["path", {
                    d: "M8 16h7"
                }]
            ]],
            Ah = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M9 16h5"
                }],
                ["path", {
                    d: "M9 12h5a2 2 0 1 0 0-4h-3v9"
                }]
            ]],
            Lh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["path", {
                    d: "M11 17V8h4"
                }],
                ["path", {
                    d: "M11 12h3"
                }],
                ["path", {
                    d: "M9 16h4"
                }]
            ]],
            fh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }],
                ["line", {
                    x1: "15",
                    x2: "9",
                    y1: "9",
                    y2: "15"
                }],
                ["line", {
                    x1: "9",
                    x2: "15",
                    y1: "9",
                    y2: "15"
                }]
            ]],
            kh = ["svg", h, [
                ["path", {
                    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                }]
            ]],
            Ph = ["svg", h, [
                ["path", {
                    d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
                }],
                ["path", {
                    d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
                }],
                ["rect", {
                    width: "13",
                    height: "8",
                    x: "8",
                    y: "6",
                    rx: "1"
                }],
                ["circle", {
                    cx: "18",
                    cy: "20",
                    r: "2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "20",
                    r: "2"
                }]
            ]],
            Bh = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m4.9 4.9 14.2 14.2"
                }]
            ]],
            Fh = ["svg", h, [
                ["path", {
                    d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"
                }],
                ["path", {
                    d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
                }]
            ]],
            Dh = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M6 12h.01M18 12h.01"
                }]
            ]],
            Zh = ["svg", h, [
                ["line", {
                    x1: "18",
                    x2: "18",
                    y1: "20",
                    y2: "10"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "20",
                    y2: "4"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "20",
                    y2: "14"
                }]
            ]],
            Rh = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["path", {
                    d: "M18 17V9"
                }],
                ["path", {
                    d: "M13 17V5"
                }],
                ["path", {
                    d: "M8 17v-3"
                }]
            ]],
            qh = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["path", {
                    d: "M13 17V9"
                }],
                ["path", {
                    d: "M18 17V5"
                }],
                ["path", {
                    d: "M8 17v-3"
                }]
            ]],
            Th = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["rect", {
                    width: "4",
                    height: "7",
                    x: "7",
                    y: "10",
                    rx: "1"
                }],
                ["rect", {
                    width: "4",
                    height: "12",
                    x: "15",
                    y: "5",
                    rx: "1"
                }]
            ]],
            zh = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["rect", {
                    width: "12",
                    height: "4",
                    x: "7",
                    y: "5",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "4",
                    x: "7",
                    y: "13",
                    rx: "1"
                }]
            ]],
            bh = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["path", {
                    d: "M7 16h8"
                }],
                ["path", {
                    d: "M7 11h12"
                }],
                ["path", {
                    d: "M7 6h3"
                }]
            ]],
            xh = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "20",
                    y2: "10"
                }],
                ["line", {
                    x1: "18",
                    x2: "18",
                    y1: "20",
                    y2: "4"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "20",
                    y2: "16"
                }]
            ]],
            Uh = ["svg", h, [
                ["path", {
                    d: "M3 5v14"
                }],
                ["path", {
                    d: "M8 5v14"
                }],
                ["path", {
                    d: "M12 5v14"
                }],
                ["path", {
                    d: "M17 5v14"
                }],
                ["path", {
                    d: "M21 5v14"
                }]
            ]],
            Oh = ["svg", h, [
                ["path", {
                    d: "M4 20h16"
                }],
                ["path", {
                    d: "m6 16 6-12 6 12"
                }],
                ["path", {
                    d: "M8 12h8"
                }]
            ]],
            Gh = ["svg", h, [
                ["path", {
                    d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
                }],
                ["line", {
                    x1: "10",
                    x2: "8",
                    y1: "5",
                    y2: "7"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "7",
                    x2: "7",
                    y1: "19",
                    y2: "21"
                }],
                ["line", {
                    x1: "17",
                    x2: "17",
                    y1: "19",
                    y2: "21"
                }]
            ]],
            Eh = ["svg", h, [
                ["path", {
                    d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
                }],
                ["path", {
                    d: "m11 7-3 5h4l-3 5"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }]
            ]],
            Wh = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "10",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "11",
                    y2: "13"
                }]
            ]],
            Ih = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "10",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "11",
                    y2: "13"
                }]
            ]],
            Xh = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "10",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "11",
                    y2: "13"
                }]
            ]],
            Nh = ["svg", h, [
                ["path", {
                    d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"
                }],
                ["path", {
                    d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "7",
                    y2: "13"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "17",
                    y2: "17.01"
                }]
            ]],
            Kh = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "10",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "22",
                    x2: "22",
                    y1: "11",
                    y2: "13"
                }]
            ]],
            Jh = ["svg", h, [
                ["path", {
                    d: "M4.5 3h15"
                }],
                ["path", {
                    d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"
                }],
                ["path", {
                    d: "M6 14h12"
                }]
            ]],
            jh = ["svg", h, [
                ["path", {
                    d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
                }],
                ["path", {
                    d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"
                }],
                ["path", {
                    d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Qh = ["svg", h, [
                ["path", {
                    d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
                }],
                ["path", {
                    d: "M5.341 10.62a4 4 0 1 0 5.279-5.28"
                }]
            ]],
            Yh = ["svg", h, [
                ["path", {
                    d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
                }],
                ["path", {
                    d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
                }],
                ["path", {
                    d: "M12 4v6"
                }],
                ["path", {
                    d: "M2 18h20"
                }]
            ]],
            _h = ["svg", h, [
                ["path", {
                    d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
                }],
                ["path", {
                    d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
                }],
                ["path", {
                    d: "M3 18h18"
                }]
            ]],
            at = ["svg", h, [
                ["path", {
                    d: "M2 4v16"
                }],
                ["path", {
                    d: "M2 8h18a2 2 0 0 1 2 2v10"
                }],
                ["path", {
                    d: "M2 17h20"
                }],
                ["path", {
                    d: "M6 8v9"
                }]
            ]],
            ht = ["svg", h, [
                ["circle", {
                    cx: "12.5",
                    cy: "8.5",
                    r: "2.5"
                }],
                ["path", {
                    d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
                }],
                ["path", {
                    d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
                }]
            ]],
            tt = ["svg", h, [
                ["path", {
                    d: "M13 13v5"
                }],
                ["path", {
                    d: "M17 11.47V8"
                }],
                ["path", {
                    d: "M17 11h1a3 3 0 0 1 2.745 4.211"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"
                }],
                ["path", {
                    d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"
                }],
                ["path", {
                    d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
                }],
                ["path", {
                    d: "M9 14.6V18"
                }]
            ]],
            dt = ["svg", h, [
                ["path", {
                    d: "M17 11h1a3 3 0 0 1 0 6h-1"
                }],
                ["path", {
                    d: "M9 12v6"
                }],
                ["path", {
                    d: "M13 12v6"
                }],
                ["path", {
                    d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
                }],
                ["path", {
                    d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
                }]
            ]],
            ct = ["svg", h, [
                ["path", {
                    d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }],
                ["circle", {
                    cx: "18",
                    cy: "8",
                    r: "3"
                }]
            ]],
            Mt = ["svg", h, [
                ["path", {
                    d: "M18.8 4A6.3 8.7 0 0 1 20 9"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "7"
                }],
                ["rect", {
                    width: "10",
                    height: "6",
                    x: "4",
                    y: "16",
                    rx: "2"
                }],
                ["path", {
                    d: "M14 19c3 0 4.6-1.6 4.6-1.6"
                }],
                ["circle", {
                    cx: "20",
                    cy: "16",
                    r: "2"
                }]
            ]],
            et = ["svg", h, [
                ["path", {
                    d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }],
                ["path", {
                    d: "M15 8h6"
                }]
            ]],
            it = ["svg", h, [
                ["path", {
                    d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
                }],
                ["path", {
                    d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            nt = ["svg", h, [
                ["path", {
                    d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }],
                ["path", {
                    d: "M15 8h6"
                }],
                ["path", {
                    d: "M18 5v6"
                }]
            ]],
            pt = ["svg", h, [
                ["path", {
                    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }],
                ["path", {
                    d: "M4 2C2.8 3.7 2 5.7 2 8"
                }],
                ["path", {
                    d: "M22 8c0-2.3-.8-4.3-2-6"
                }]
            ]],
            lt = ["svg", h, [
                ["path", {
                    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                }],
                ["path", {
                    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                }]
            ]],
            w = ["svg", h, [
                ["rect", {
                    width: "13",
                    height: "7",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "m22 15-3-3 3-3"
                }],
                ["rect", {
                    width: "13",
                    height: "7",
                    x: "3",
                    y: "14",
                    rx: "1"
                }]
            ]],
            V = ["svg", h, [
                ["rect", {
                    width: "13",
                    height: "7",
                    x: "8",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "m2 9 3 3-3 3"
                }],
                ["rect", {
                    width: "13",
                    height: "7",
                    x: "8",
                    y: "14",
                    rx: "1"
                }]
            ]],
            vt = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "13",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "m9 22 3-3 3 3"
                }],
                ["rect", {
                    width: "7",
                    height: "13",
                    x: "14",
                    y: "3",
                    rx: "1"
                }]
            ]],
            ot = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "13",
                    x: "3",
                    y: "8",
                    rx: "1"
                }],
                ["path", {
                    d: "m15 2-3 3-3-3"
                }],
                ["rect", {
                    width: "7",
                    height: "13",
                    x: "14",
                    y: "8",
                    rx: "1"
                }]
            ]],
            st = ["svg", h, [
                ["path", {
                    d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
                }],
                ["path", {
                    d: "M15 14a5 5 0 0 0-7.584 2"
                }],
                ["path", {
                    d: "M9.964 6.825C8.019 7.977 9.5 13 8 15"
                }]
            ]],
            rt = ["svg", h, [
                ["circle", {
                    cx: "18.5",
                    cy: "17.5",
                    r: "3.5"
                }],
                ["circle", {
                    cx: "5.5",
                    cy: "17.5",
                    r: "3.5"
                }],
                ["circle", {
                    cx: "15",
                    cy: "5",
                    r: "1"
                }],
                ["path", {
                    d: "M12 17.5V14l-3-3 4-3 2 3h2"
                }]
            ]],
            gt = ["svg", h, [
                ["rect", {
                    x: "14",
                    y: "14",
                    width: "4",
                    height: "6",
                    rx: "2"
                }],
                ["rect", {
                    x: "6",
                    y: "4",
                    width: "4",
                    height: "6",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 20h4"
                }],
                ["path", {
                    d: "M14 10h4"
                }],
                ["path", {
                    d: "M6 14h2v6"
                }],
                ["path", {
                    d: "M14 4h2v6"
                }]
            ]],
            yt = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "11.9",
                    r: "2"
                }],
                ["path", {
                    d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
                }],
                ["path", {
                    d: "m8.9 10.1 1.4.8"
                }],
                ["path", {
                    d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
                }],
                ["path", {
                    d: "m15.1 10.1-1.4.8"
                }],
                ["path", {
                    d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
                }],
                ["path", {
                    d: "M12 13.9v1.6"
                }],
                ["path", {
                    d: "M13.5 5.4c-1-.2-2-.2-3 0"
                }],
                ["path", {
                    d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"
                }],
                ["path", {
                    d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5"
                }]
            ]],
            $t = ["svg", h, [
                ["path", {
                    d: "M16 7h.01"
                }],
                ["path", {
                    d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
                }],
                ["path", {
                    d: "m20 7 2 .5-2 .5"
                }],
                ["path", {
                    d: "M10 18v3"
                }],
                ["path", {
                    d: "M14 17.75V21"
                }],
                ["path", {
                    d: "M7 18a6 6 0 0 0 3.84-10.61"
                }]
            ]],
            mt = ["svg", h, [
                ["path", {
                    d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
                }]
            ]],
            ut = ["svg", h, [
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "7"
                }],
                ["circle", {
                    cx: "15",
                    cy: "15",
                    r: "7"
                }]
            ]],
            Ct = ["svg", h, [
                ["path", {
                    d: "M3 3h18"
                }],
                ["path", {
                    d: "M20 7H8"
                }],
                ["path", {
                    d: "M20 11H8"
                }],
                ["path", {
                    d: "M10 19h10"
                }],
                ["path", {
                    d: "M8 15h12"
                }],
                ["path", {
                    d: "M4 3v14"
                }],
                ["circle", {
                    cx: "4",
                    cy: "19",
                    r: "2"
                }]
            ]],
            Ht = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
                }]
            ]],
            wt = ["svg", h, [
                ["path", {
                    d: "m7 7 10 10-5 5V2l5 5L7 17"
                }],
                ["line", {
                    x1: "18",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "3",
                    x2: "6",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            Vt = ["svg", h, [
                ["path", {
                    d: "m17 17-5 5V12l-5 5"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M14.5 9.5 17 7l-5-5v4.5"
                }]
            ]],
            St = ["svg", h, [
                ["path", {
                    d: "m7 7 10 10-5 5V2l5 5L7 17"
                }],
                ["path", {
                    d: "M20.83 14.83a4 4 0 0 0 0-5.66"
                }],
                ["path", {
                    d: "M18 12h.01"
                }]
            ]],
            At = ["svg", h, [
                ["path", {
                    d: "m7 7 10 10-5 5V2l5 5L7 17"
                }]
            ]],
            Lt = ["svg", h, [
                ["path", {
                    d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
                }]
            ]],
            ft = ["svg", h, [
                ["path", {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }]
            ]],
            kt = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "13",
                    r: "9"
                }],
                ["path", {
                    d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
                }],
                ["path", {
                    d: "m22 2-1.5 1.5"
                }]
            ]],
            Pt = ["svg", h, [
                ["path", {
                    d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
                }]
            ]],
            Bt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "m8 13 4-7 4 7"
                }],
                ["path", {
                    d: "M9.1 11h5.7"
                }]
            ]],
            Ft = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M8 8v3"
                }],
                ["path", {
                    d: "M12 6v7"
                }],
                ["path", {
                    d: "M16 8v3"
                }]
            ]],
            Dt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "m9 9.5 2 2 4-4"
                }]
            ]],
            Zt = ["svg", h, [
                ["path", {
                    d: "M2 16V4a2 2 0 0 1 2-2h11"
                }],
                ["path", {
                    d: "M5 14H4a2 2 0 1 0 0 4h1"
                }],
                ["path", {
                    d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"
                }]
            ]],
            S = ["svg", h, [
                ["path", {
                    d: "M20 22h-2"
                }],
                ["path", {
                    d: "M20 15v2h-2"
                }],
                ["path", {
                    d: "M4 19.5V15"
                }],
                ["path", {
                    d: "M20 8v3"
                }],
                ["path", {
                    d: "M18 2h2v2"
                }],
                ["path", {
                    d: "M4 11V9"
                }],
                ["path", {
                    d: "M12 2h2"
                }],
                ["path", {
                    d: "M12 22h2"
                }],
                ["path", {
                    d: "M12 17h2"
                }],
                ["path", {
                    d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"
                }],
                ["path", {
                    d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"
                }]
            ]],
            Rt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M12 13V7"
                }],
                ["path", {
                    d: "m9 10 3 3 3-3"
                }]
            ]],
            qt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["circle", {
                    cx: "9",
                    cy: "12",
                    r: "1"
                }],
                ["path", {
                    d: "M8 12v-2a4 4 0 0 1 8 0v2"
                }],
                ["circle", {
                    cx: "15",
                    cy: "12",
                    r: "1"
                }]
            ]],
            Tt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6C10 11.1 12 13 12 13s2-1.9 3.3-3.1c.4-.4.7-1 .7-1.7z"
                }]
            ]],
            zt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"
                }]
            ]],
            bt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"
                }],
                ["path", {
                    d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["circle", {
                    cx: "14",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "m20 2-4.5 4.5"
                }],
                ["path", {
                    d: "m19 3 1 1"
                }]
            ]],
            xt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
                }],
                ["path", {
                    d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["rect", {
                    width: "8",
                    height: "5",
                    x: "12",
                    y: "6",
                    rx: "1"
                }],
                ["path", {
                    d: "M18 6V4a2 2 0 1 0-4 0v2"
                }]
            ]],
            Ut = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["polyline", {
                    points: "10 2 10 10 13 7 16 10 16 2"
                }]
            ]],
            Ot = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M9 10h6"
                }]
            ]],
            Gt = ["svg", h, [
                ["path", {
                    d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"
                }],
                ["path", {
                    d: "m16 12 2 2 4-4"
                }],
                ["path", {
                    d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"
                }]
            ]],
            Et = ["svg", h, [
                ["path", {
                    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                }],
                ["path", {
                    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                }],
                ["path", {
                    d: "M6 8h2"
                }],
                ["path", {
                    d: "M6 12h2"
                }],
                ["path", {
                    d: "M16 8h2"
                }],
                ["path", {
                    d: "M16 12h2"
                }]
            ]],
            Wt = ["svg", h, [
                ["path", {
                    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                }],
                ["path", {
                    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                }]
            ]],
            It = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M9 10h6"
                }],
                ["path", {
                    d: "M12 7v6"
                }]
            ]],
            Xt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M8 7h6"
                }],
                ["path", {
                    d: "M8 11h8"
                }]
            ]],
            Nt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M16 8V6H8v2"
                }],
                ["path", {
                    d: "M12 6v7"
                }],
                ["path", {
                    d: "M10 13h4"
                }]
            ]],
            Kt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"
                }],
                ["path", {
                    d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M12 13V7"
                }],
                ["path", {
                    d: "m9 10 3-3 3 3"
                }],
                ["path", {
                    d: "m9 5 3-3 3 3"
                }]
            ]],
            Jt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "M12 13V7"
                }],
                ["path", {
                    d: "m9 10 3-3 3 3"
                }]
            ]],
            jt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "M15 13a3 3 0 1 0-6 0"
                }]
            ]],
            Qt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }],
                ["path", {
                    d: "m14.5 7-5 5"
                }],
                ["path", {
                    d: "m9.5 7 5 5"
                }]
            ]],
            Yt = ["svg", h, [
                ["path", {
                    d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                }]
            ]],
            _t = ["svg", h, [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
                }],
                ["path", {
                    d: "m9 10 2 2 4-4"
                }]
            ]],
            a4 = ["svg", h, [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
                }],
                ["line", {
                    x1: "15",
                    x2: "9",
                    y1: "10",
                    y2: "10"
                }]
            ]],
            h4 = ["svg", h, [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "7",
                    y2: "13"
                }],
                ["line", {
                    x1: "15",
                    x2: "9",
                    y1: "10",
                    y2: "10"
                }]
            ]],
            t4 = ["svg", h, [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
                }],
                ["path", {
                    d: "m14.5 7.5-5 5"
                }],
                ["path", {
                    d: "m9.5 7.5 5 5"
                }]
            ]],
            d4 = ["svg", h, [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
                }]
            ]],
            c4 = ["svg", h, [
                ["path", {
                    d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
                }],
                ["path", {
                    d: "M8 8v1"
                }],
                ["path", {
                    d: "M12 8v1"
                }],
                ["path", {
                    d: "M16 8v1"
                }],
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "9",
                    rx: "2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "15",
                    r: "2"
                }],
                ["circle", {
                    cx: "16",
                    cy: "15",
                    r: "2"
                }]
            ]],
            M4 = ["svg", h, [
                ["path", {
                    d: "M12 6V2H8"
                }],
                ["path", {
                    d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
                }],
                ["path", {
                    d: "M2 12h2"
                }],
                ["path", {
                    d: "M9 11v2"
                }],
                ["path", {
                    d: "M15 11v2"
                }],
                ["path", {
                    d: "M20 12h2"
                }]
            ]],
            e4 = ["svg", h, [
                ["path", {
                    d: "M13.67 8H18a2 2 0 0 1 2 2v4.33"
                }],
                ["path", {
                    d: "M2 14h2"
                }],
                ["path", {
                    d: "M20 14h2"
                }],
                ["path", {
                    d: "M22 22 2 2"
                }],
                ["path", {
                    d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"
                }],
                ["path", {
                    d: "M9 13v2"
                }],
                ["path", {
                    d: "M9.67 4H12v2.33"
                }]
            ]],
            i4 = ["svg", h, [
                ["path", {
                    d: "M12 8V4H8"
                }],
                ["rect", {
                    width: "16",
                    height: "12",
                    x: "4",
                    y: "8",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 14h2"
                }],
                ["path", {
                    d: "M20 14h2"
                }],
                ["path", {
                    d: "M15 13v2"
                }],
                ["path", {
                    d: "M9 13v2"
                }]
            ]],
            n4 = ["svg", h, [
                ["path", {
                    d: "M5 3a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M19 3a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M21 19a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2"
                }],
                ["path", {
                    d: "M9 3h1"
                }],
                ["path", {
                    d: "M9 21h1"
                }],
                ["path", {
                    d: "M14 3h1"
                }],
                ["path", {
                    d: "M14 21h1"
                }],
                ["path", {
                    d: "M3 9v1"
                }],
                ["path", {
                    d: "M21 9v1"
                }],
                ["path", {
                    d: "M3 14v1"
                }],
                ["path", {
                    d: "M21 14v1"
                }]
            ]],
            p4 = ["svg", h, [
                ["path", {
                    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                }],
                ["path", {
                    d: "m3.3 7 8.7 5 8.7-5"
                }],
                ["path", {
                    d: "M12 22V12"
                }]
            ]],
            l4 = ["svg", h, [
                ["path", {
                    d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
                }],
                ["path", {
                    d: "m7 16.5-4.74-2.85"
                }],
                ["path", {
                    d: "m7 16.5 5-3"
                }],
                ["path", {
                    d: "M7 16.5v5.17"
                }],
                ["path", {
                    d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
                }],
                ["path", {
                    d: "m17 16.5-5-3"
                }],
                ["path", {
                    d: "m17 16.5 4.74-2.85"
                }],
                ["path", {
                    d: "M17 16.5v5.17"
                }],
                ["path", {
                    d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
                }],
                ["path", {
                    d: "M12 8 7.26 5.15"
                }],
                ["path", {
                    d: "m12 8 4.74-2.85"
                }],
                ["path", {
                    d: "M12 13.5V8"
                }]
            ]],
            A = ["svg", h, [
                ["path", {
                    d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
                }],
                ["path", {
                    d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
                }]
            ]],
            v4 = ["svg", h, [
                ["path", {
                    d: "M16 3h3v18h-3"
                }],
                ["path", {
                    d: "M8 21H5V3h3"
                }]
            ]],
            o4 = ["svg", h, [
                ["path", {
                    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
                }],
                ["path", {
                    d: "M9 13a4.5 4.5 0 0 0 3-4"
                }],
                ["path", {
                    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
                }],
                ["path", {
                    d: "M3.477 10.896a4 4 0 0 1 .585-.396"
                }],
                ["path", {
                    d: "M6 18a4 4 0 0 1-1.967-.516"
                }],
                ["path", {
                    d: "M12 13h4"
                }],
                ["path", {
                    d: "M12 18h6a2 2 0 0 1 2 2v1"
                }],
                ["path", {
                    d: "M12 8h8"
                }],
                ["path", {
                    d: "M16 8V5a2 2 0 0 1 2-2"
                }],
                ["circle", {
                    cx: "16",
                    cy: "13",
                    r: ".5"
                }],
                ["circle", {
                    cx: "18",
                    cy: "3",
                    r: ".5"
                }],
                ["circle", {
                    cx: "20",
                    cy: "21",
                    r: ".5"
                }],
                ["circle", {
                    cx: "20",
                    cy: "8",
                    r: ".5"
                }]
            ]],
            s4 = ["svg", h, [
                ["path", {
                    d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
                }],
                ["path", {
                    d: "M17.599 6.5a3 3 0 0 0 .399-1.375"
                }],
                ["path", {
                    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
                }],
                ["path", {
                    d: "M3.477 10.896a4 4 0 0 1 .585-.396"
                }],
                ["path", {
                    d: "M19.938 10.5a4 4 0 0 1 .585.396"
                }],
                ["path", {
                    d: "M6 18a4 4 0 0 1-1.967-.516"
                }],
                ["path", {
                    d: "M19.967 17.484A4 4 0 0 1 18 18"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "m15.7 10.4-.9.4"
                }],
                ["path", {
                    d: "m9.2 13.2-.9.4"
                }],
                ["path", {
                    d: "m13.6 15.7-.4-.9"
                }],
                ["path", {
                    d: "m10.8 9.2-.4-.9"
                }],
                ["path", {
                    d: "m15.7 13.5-.9-.4"
                }],
                ["path", {
                    d: "m9.2 10.9-.9-.4"
                }],
                ["path", {
                    d: "m10.5 15.7.4-.9"
                }],
                ["path", {
                    d: "m13.1 9.2.4-.9"
                }]
            ]],
            r4 = ["svg", h, [
                ["path", {
                    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
                }],
                ["path", {
                    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
                }],
                ["path", {
                    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"
                }],
                ["path", {
                    d: "M17.599 6.5a3 3 0 0 0 .399-1.375"
                }],
                ["path", {
                    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
                }],
                ["path", {
                    d: "M3.477 10.896a4 4 0 0 1 .585-.396"
                }],
                ["path", {
                    d: "M19.938 10.5a4 4 0 0 1 .585.396"
                }],
                ["path", {
                    d: "M6 18a4 4 0 0 1-1.967-.516"
                }],
                ["path", {
                    d: "M19.967 17.484A4 4 0 0 1 18 18"
                }]
            ]],
            g4 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 9v6"
                }],
                ["path", {
                    d: "M16 15v6"
                }],
                ["path", {
                    d: "M16 3v6"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "M8 15v6"
                }],
                ["path", {
                    d: "M8 3v6"
                }]
            ]],
            y4 = ["svg", h, [
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M22 13a18.15 18.15 0 0 1-20 0"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            $4 = ["svg", h, [
                ["path", {
                    d: "M12 11v4"
                }],
                ["path", {
                    d: "M14 13h-4"
                }],
                ["path", {
                    d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M18 6v14"
                }],
                ["path", {
                    d: "M6 6v14"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            m4 = ["svg", h, [
                ["path", {
                    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            u4 = ["svg", h, [
                ["rect", {
                    x: "8",
                    y: "8",
                    width: "8",
                    height: "8",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
                }]
            ]],
            C4 = ["svg", h, [
                ["path", {
                    d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
                }],
                ["path", {
                    d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
                }]
            ]],
            H4 = ["svg", h, [
                ["path", {
                    d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"
                }],
                ["path", {
                    d: "M14.12 3.88 16 2"
                }],
                ["path", {
                    d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"
                }],
                ["path", {
                    d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"
                }],
                ["path", {
                    d: "M12 20v-8"
                }],
                ["path", {
                    d: "M6 13H2"
                }],
                ["path", {
                    d: "M3 21c0-2.1 1.7-3.9 3.8-4"
                }]
            ]],
            w4 = ["svg", h, [
                ["path", {
                    d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
                }],
                ["path", {
                    d: "M14.12 3.88 16 2"
                }],
                ["path", {
                    d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
                }],
                ["path", {
                    d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
                }],
                ["path", {
                    d: "M3 21c0-2.1 1.7-3.9 3.8-4"
                }],
                ["path", {
                    d: "M6 13H2"
                }],
                ["path", {
                    d: "M6.53 9C4.6 8.8 3 7.1 3 5"
                }],
                ["path", {
                    d: "m8 2 1.88 1.88"
                }],
                ["path", {
                    d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
                }]
            ]],
            V4 = ["svg", h, [
                ["path", {
                    d: "m8 2 1.88 1.88"
                }],
                ["path", {
                    d: "M14.12 3.88 16 2"
                }],
                ["path", {
                    d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
                }],
                ["path", {
                    d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
                }],
                ["path", {
                    d: "M12 20v-9"
                }],
                ["path", {
                    d: "M6.53 9C4.6 8.8 3 7.1 3 5"
                }],
                ["path", {
                    d: "M6 13H2"
                }],
                ["path", {
                    d: "M3 21c0-2.1 1.7-3.9 3.8-4"
                }],
                ["path", {
                    d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
                }],
                ["path", {
                    d: "M22 13h-4"
                }],
                ["path", {
                    d: "M17.2 17c2.1.1 3.8 1.9 3.8 4"
                }]
            ]],
            S4 = ["svg", h, [
                ["path", {
                    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
                }],
                ["path", {
                    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
                }],
                ["path", {
                    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M10 6h4"
                }],
                ["path", {
                    d: "M10 10h4"
                }],
                ["path", {
                    d: "M10 14h4"
                }],
                ["path", {
                    d: "M10 18h4"
                }]
            ]],
            A4 = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M9 22v-4h6v4"
                }],
                ["path", {
                    d: "M8 6h.01"
                }],
                ["path", {
                    d: "M16 6h.01"
                }],
                ["path", {
                    d: "M12 6h.01"
                }],
                ["path", {
                    d: "M12 10h.01"
                }],
                ["path", {
                    d: "M12 14h.01"
                }],
                ["path", {
                    d: "M16 10h.01"
                }],
                ["path", {
                    d: "M16 14h.01"
                }],
                ["path", {
                    d: "M8 10h.01"
                }],
                ["path", {
                    d: "M8 14h.01"
                }]
            ]],
            L4 = ["svg", h, [
                ["path", {
                    d: "M4 6 2 7"
                }],
                ["path", {
                    d: "M10 6h4"
                }],
                ["path", {
                    d: "m22 7-2-1"
                }],
                ["rect", {
                    width: "16",
                    height: "16",
                    x: "4",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 11h16"
                }],
                ["path", {
                    d: "M8 15h.01"
                }],
                ["path", {
                    d: "M16 15h.01"
                }],
                ["path", {
                    d: "M6 19v2"
                }],
                ["path", {
                    d: "M18 21v-2"
                }]
            ]],
            f4 = ["svg", h, [
                ["path", {
                    d: "M8 6v6"
                }],
                ["path", {
                    d: "M15 6v6"
                }],
                ["path", {
                    d: "M2 12h19.6"
                }],
                ["path", {
                    d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
                }],
                ["circle", {
                    cx: "7",
                    cy: "18",
                    r: "2"
                }],
                ["path", {
                    d: "M9 18h5"
                }],
                ["circle", {
                    cx: "16",
                    cy: "18",
                    r: "2"
                }]
            ]],
            k4 = ["svg", h, [
                ["path", {
                    d: "M10 3h.01"
                }],
                ["path", {
                    d: "M14 2h.01"
                }],
                ["path", {
                    d: "m2 9 20-5"
                }],
                ["path", {
                    d: "M12 12V6.5"
                }],
                ["rect", {
                    width: "16",
                    height: "10",
                    x: "4",
                    y: "12",
                    rx: "3"
                }],
                ["path", {
                    d: "M9 12v5"
                }],
                ["path", {
                    d: "M15 12v5"
                }],
                ["path", {
                    d: "M4 17h16"
                }]
            ]],
            P4 = ["svg", h, [
                ["path", {
                    d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
                }],
                ["path", {
                    d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"
                }],
                ["path", {
                    d: "M21 21v-2h-4"
                }],
                ["path", {
                    d: "M3 5h4V3"
                }],
                ["path", {
                    d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
                }]
            ]],
            B4 = ["svg", h, [
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "2"
                }],
                ["path", {
                    d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
                }],
                ["path", {
                    d: "M16 13H3"
                }],
                ["path", {
                    d: "M16 17H3"
                }]
            ]],
            F4 = ["svg", h, [
                ["path", {
                    d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
                }],
                ["path", {
                    d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
                }],
                ["path", {
                    d: "M2 21h20"
                }],
                ["path", {
                    d: "M7 8v3"
                }],
                ["path", {
                    d: "M12 8v3"
                }],
                ["path", {
                    d: "M17 8v3"
                }],
                ["path", {
                    d: "M7 4h.01"
                }],
                ["path", {
                    d: "M12 4h.01"
                }],
                ["path", {
                    d: "M17 4h.01"
                }]
            ]],
            D4 = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "16",
                    x2: "16",
                    y1: "14",
                    y2: "18"
                }],
                ["path", {
                    d: "M16 10h.01"
                }],
                ["path", {
                    d: "M12 10h.01"
                }],
                ["path", {
                    d: "M8 10h.01"
                }],
                ["path", {
                    d: "M12 14h.01"
                }],
                ["path", {
                    d: "M8 14h.01"
                }],
                ["path", {
                    d: "M12 18h.01"
                }],
                ["path", {
                    d: "M8 18h.01"
                }]
            ]],
            Z4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "m16 20 2 2 4-4"
                }]
            ]],
            R4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "m9 16 2 2 4-4"
                }]
            ]],
            q4 = ["svg", h, [
                ["path", {
                    d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M3 10h5"
                }],
                ["path", {
                    d: "M17.5 17.5 16 16.3V14"
                }],
                ["circle", {
                    cx: "16",
                    cy: "16",
                    r: "6"
                }]
            ]],
            T4 = ["svg", h, [
                ["path", {
                    d: "m15.2 16.9-.9-.4"
                }],
                ["path", {
                    d: "m15.2 19.1-.9.4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "m16.9 15.2-.4-.9"
                }],
                ["path", {
                    d: "m16.9 20.8-.4.9"
                }],
                ["path", {
                    d: "m19.5 14.3-.4.9"
                }],
                ["path", {
                    d: "m19.5 21.7-.4-.9"
                }],
                ["path", {
                    d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
                }],
                ["path", {
                    d: "m21.7 16.5-.9.4"
                }],
                ["path", {
                    d: "m21.7 19.5-.9-.4"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M8 2v4"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }]
            ]],
            z4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M8 14h.01"
                }],
                ["path", {
                    d: "M12 14h.01"
                }],
                ["path", {
                    d: "M16 14h.01"
                }],
                ["path", {
                    d: "M8 18h.01"
                }],
                ["path", {
                    d: "M12 18h.01"
                }],
                ["path", {
                    d: "M16 18h.01"
                }]
            ]],
            b4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M15 22v-4a2 2 0 0 1 2-2h4"
                }]
            ]],
            x4 = ["svg", h, [
                ["path", {
                    d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
                }],
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
                }]
            ]],
            U4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M10 16h4"
                }]
            ]],
            O4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M16 19h6"
                }]
            ]],
            G4 = ["svg", h, [
                ["path", {
                    d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
                }],
                ["path", {
                    d: "M21 15.5V6a2 2 0 0 0-2-2H9.5"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M3 10h7"
                }],
                ["path", {
                    d: "M21 10h-5.5"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            E4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M10 16h4"
                }],
                ["path", {
                    d: "M12 14v4"
                }]
            ]],
            W4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M16 19h6"
                }],
                ["path", {
                    d: "M19 16v6"
                }]
            ]],
            I4 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M17 14h-6"
                }],
                ["path", {
                    d: "M13 18H7"
                }],
                ["path", {
                    d: "M7 14h.01"
                }],
                ["path", {
                    d: "M17 18h.01"
                }]
            ]],
            X4 = ["svg", h, [
                ["path", {
                    d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "m22 22-1.5-1.5"
                }]
            ]],
            N4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "m17 22 5-5"
                }],
                ["path", {
                    d: "m17 17 5 5"
                }]
            ]],
            K4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }],
                ["path", {
                    d: "m14 14-4 4"
                }],
                ["path", {
                    d: "m10 14 4 4"
                }]
            ]],
            J4 = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 10h18"
                }]
            ]],
            j4 = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"
                }],
                ["path", {
                    d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"
                }],
                ["path", {
                    d: "M14.121 15.121A3 3 0 1 1 9.88 10.88"
                }]
            ]],
            Q4 = ["svg", h, [
                ["path", {
                    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "3"
                }]
            ]],
            Y4 = ["svg", h, [
                ["path", {
                    d: "M9 5v4"
                }],
                ["rect", {
                    width: "4",
                    height: "6",
                    x: "7",
                    y: "9",
                    rx: "1"
                }],
                ["path", {
                    d: "M9 15v2"
                }],
                ["path", {
                    d: "M17 3v2"
                }],
                ["rect", {
                    width: "4",
                    height: "8",
                    x: "15",
                    y: "5",
                    rx: "1"
                }],
                ["path", {
                    d: "M17 13v3"
                }],
                ["path", {
                    d: "M3 3v18h18"
                }]
            ]],
            _4 = ["svg", h, [
                ["path", {
                    d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
                }],
                ["path", {
                    d: "M17.75 7 15 2.1"
                }],
                ["path", {
                    d: "M10.9 4.8 13 9"
                }],
                ["path", {
                    d: "m7.9 9.7 2 4.4"
                }],
                ["path", {
                    d: "M4.9 14.7 7 18.9"
                }]
            ]],
            a5 = ["svg", h, [
                ["path", {
                    d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"
                }],
                ["path", {
                    d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
                }],
                ["path", {
                    d: "M14 16.5V14"
                }],
                ["path", {
                    d: "M14 6.5v1.843"
                }],
                ["path", {
                    d: "M10 10v7.5"
                }],
                ["path", {
                    d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
                }],
                ["path", {
                    d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            h5 = ["svg", h, [
                ["path", {
                    d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"
                }],
                ["path", {
                    d: "M14 6.5v10"
                }],
                ["path", {
                    d: "M10 7.5v10"
                }],
                ["path", {
                    d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
                }],
                ["path", {
                    d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
                }]
            ]],
            t5 = ["svg", h, [
                ["path", {
                    d: "M12 22v-4"
                }],
                ["path", {
                    d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
                }]
            ]],
            d5 = ["svg", h, [
                ["path", {
                    d: "M10.5 5H19a2 2 0 0 1 2 2v8.5"
                }],
                ["path", {
                    d: "M17 11h-.5"
                }],
                ["path", {
                    d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M7 11h4"
                }],
                ["path", {
                    d: "M7 15h2.5"
                }]
            ]],
            L = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "14",
                    x: "3",
                    y: "5",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M7 15h4M15 15h2M7 11h2M13 11h4"
                }]
            ]],
            c5 = ["svg", h, [
                ["path", {
                    d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
                }],
                ["path", {
                    d: "M7 14h.01"
                }],
                ["path", {
                    d: "M17 14h.01"
                }],
                ["rect", {
                    width: "18",
                    height: "8",
                    x: "3",
                    y: "10",
                    rx: "2"
                }],
                ["path", {
                    d: "M5 18v2"
                }],
                ["path", {
                    d: "M19 18v2"
                }]
            ]],
            M5 = ["svg", h, [
                ["path", {
                    d: "M10 2h4"
                }],
                ["path", {
                    d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
                }],
                ["path", {
                    d: "M7 14h.01"
                }],
                ["path", {
                    d: "M17 14h.01"
                }],
                ["rect", {
                    width: "18",
                    height: "8",
                    x: "3",
                    y: "10",
                    rx: "2"
                }],
                ["path", {
                    d: "M5 18v2"
                }],
                ["path", {
                    d: "M19 18v2"
                }]
            ]],
            e5 = ["svg", h, [
                ["path", {
                    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
                }],
                ["circle", {
                    cx: "7",
                    cy: "17",
                    r: "2"
                }],
                ["path", {
                    d: "M9 17h6"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "2"
                }]
            ]],
            i5 = ["svg", h, [
                ["rect", {
                    width: "4",
                    height: "4",
                    x: "2",
                    y: "9"
                }],
                ["rect", {
                    width: "4",
                    height: "10",
                    x: "10",
                    y: "9"
                }],
                ["path", {
                    d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "M10 19h12v-2"
                }]
            ]],
            n5 = ["svg", h, [
                ["path", {
                    d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
                }],
                ["path", {
                    d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
                }],
                ["path", {
                    d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
                }]
            ]],
            p5 = ["svg", h, [
                ["circle", {
                    cx: "7",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M10 9v6"
                }],
                ["circle", {
                    cx: "17",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M14 7v8"
                }]
            ]],
            l5 = ["svg", h, [
                ["path", {
                    d: "m3 15 4-8 4 8"
                }],
                ["path", {
                    d: "M4 13h6"
                }],
                ["circle", {
                    cx: "18",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M21 9v6"
                }]
            ]],
            v5 = ["svg", h, [
                ["path", {
                    d: "m3 15 4-8 4 8"
                }],
                ["path", {
                    d: "M4 13h6"
                }],
                ["path", {
                    d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
                }]
            ]],
            o5 = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "10",
                    r: "2"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["circle", {
                    cx: "16",
                    cy: "10",
                    r: "2"
                }],
                ["path", {
                    d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
                }]
            ]],
            s5 = ["svg", h, [
                ["path", {
                    d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
                }],
                ["path", {
                    d: "M2 12a9 9 0 0 1 8 8"
                }],
                ["path", {
                    d: "M2 16a5 5 0 0 1 4 4"
                }],
                ["line", {
                    x1: "2",
                    x2: "2.01",
                    y1: "20",
                    y2: "20"
                }]
            ]],
            r5 = ["svg", h, [
                ["path", {
                    d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
                }],
                ["path", {
                    d: "M18 11V4H6v7"
                }],
                ["path", {
                    d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"
                }],
                ["path", {
                    d: "M22 11V9"
                }],
                ["path", {
                    d: "M2 11V9"
                }],
                ["path", {
                    d: "M6 4V2"
                }],
                ["path", {
                    d: "M18 4V2"
                }],
                ["path", {
                    d: "M10 4V2"
                }],
                ["path", {
                    d: "M14 4V2"
                }]
            ]],
            g5 = ["svg", h, [
                ["path", {
                    d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
                }],
                ["path", {
                    d: "M8 14v.5"
                }],
                ["path", {
                    d: "M16 14v.5"
                }],
                ["path", {
                    d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
                }]
            ]],
            y5 = ["svg", h, [
                ["path", {
                    d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"
                }],
                ["path", {
                    d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
                }],
                ["path", {
                    d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"
                }],
                ["path", {
                    d: "M2 21v-4"
                }],
                ["path", {
                    d: "M7 9h.01"
                }]
            ]],
            $5 = ["svg", h, [
                ["path", {
                    d: "M18 6 7 17l-5-5"
                }],
                ["path", {
                    d: "m22 10-7.5 7.5L13 16"
                }]
            ]],
            m5 = ["svg", h, [
                ["path", {
                    d: "M20 6 9 17l-5-5"
                }]
            ]],
            u5 = ["svg", h, [
                ["path", {
                    d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
                }],
                ["path", {
                    d: "M6 17h12"
                }]
            ]],
            C5 = ["svg", h, [
                ["path", {
                    d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
                }],
                ["path", {
                    d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
                }],
                ["path", {
                    d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"
                }],
                ["path", {
                    d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
                }]
            ]],
            H5 = ["svg", h, [
                ["path", {
                    d: "m6 9 6 6 6-6"
                }]
            ]],
            w5 = ["svg", h, [
                ["path", {
                    d: "m17 18-6-6 6-6"
                }],
                ["path", {
                    d: "M7 6v12"
                }]
            ]],
            V5 = ["svg", h, [
                ["path", {
                    d: "m7 18 6-6-6-6"
                }],
                ["path", {
                    d: "M17 6v12"
                }]
            ]],
            S5 = ["svg", h, [
                ["path", {
                    d: "m15 18-6-6 6-6"
                }]
            ]],
            A5 = ["svg", h, [
                ["path", {
                    d: "m9 18 6-6-6-6"
                }]
            ]],
            L5 = ["svg", h, [
                ["path", {
                    d: "m18 15-6-6-6 6"
                }]
            ]],
            f5 = ["svg", h, [
                ["path", {
                    d: "m7 20 5-5 5 5"
                }],
                ["path", {
                    d: "m7 4 5 5 5-5"
                }]
            ]],
            k5 = ["svg", h, [
                ["path", {
                    d: "m7 6 5 5 5-5"
                }],
                ["path", {
                    d: "m7 13 5 5 5-5"
                }]
            ]],
            P5 = ["svg", h, [
                ["path", {
                    d: "m9 7-5 5 5 5"
                }],
                ["path", {
                    d: "m15 7 5 5-5 5"
                }]
            ]],
            B5 = ["svg", h, [
                ["path", {
                    d: "m11 17-5-5 5-5"
                }],
                ["path", {
                    d: "m18 17-5-5 5-5"
                }]
            ]],
            F5 = ["svg", h, [
                ["path", {
                    d: "m20 17-5-5 5-5"
                }],
                ["path", {
                    d: "m4 17 5-5-5-5"
                }]
            ]],
            D5 = ["svg", h, [
                ["path", {
                    d: "m6 17 5-5-5-5"
                }],
                ["path", {
                    d: "m13 17 5-5-5-5"
                }]
            ]],
            Z5 = ["svg", h, [
                ["path", {
                    d: "m7 15 5 5 5-5"
                }],
                ["path", {
                    d: "m7 9 5-5 5 5"
                }]
            ]],
            R5 = ["svg", h, [
                ["path", {
                    d: "m17 11-5-5-5 5"
                }],
                ["path", {
                    d: "m17 18-5-5-5 5"
                }]
            ]],
            q5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["line", {
                    x1: "21.17",
                    x2: "12",
                    y1: "8",
                    y2: "8"
                }],
                ["line", {
                    x1: "3.95",
                    x2: "8.54",
                    y1: "6.06",
                    y2: "14"
                }],
                ["line", {
                    x1: "10.88",
                    x2: "15.46",
                    y1: "21.94",
                    y2: "14"
                }]
            ]],
            T5 = ["svg", h, [
                ["path", {
                    d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"
                }],
                ["path", {
                    d: "M14 22v-4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M18 22V5l-6-3-6 3v17"
                }],
                ["path", {
                    d: "M12 7v5"
                }],
                ["path", {
                    d: "M10 9h4"
                }]
            ]],
            z5 = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "M12 12H2v4h14"
                }],
                ["path", {
                    d: "M22 12v4"
                }],
                ["path", {
                    d: "M18 12h-.5"
                }],
                ["path", {
                    d: "M7 12v4"
                }],
                ["path", {
                    d: "M18 8c0-2.5-2-2.5-2-5"
                }],
                ["path", {
                    d: "M22 8c0-2.5-2-2.5-2-5"
                }]
            ]],
            b5 = ["svg", h, [
                ["path", {
                    d: "M18 12H2v4h16"
                }],
                ["path", {
                    d: "M22 12v4"
                }],
                ["path", {
                    d: "M7 12v4"
                }],
                ["path", {
                    d: "M18 8c0-2.5-2-2.5-2-5"
                }],
                ["path", {
                    d: "M22 8c0-2.5-2-2.5-2-5"
                }]
            ]],
            f = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            k = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 8v8"
                }],
                ["path", {
                    d: "m8 12 4 4 4-4"
                }]
            ]],
            P = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M16 12H8"
                }],
                ["path", {
                    d: "m12 8-4 4 4 4"
                }]
            ]],
            B = ["svg", h, [
                ["path", {
                    d: "M2 12a10 10 0 1 1 10 10"
                }],
                ["path", {
                    d: "m2 22 10-10"
                }],
                ["path", {
                    d: "M8 22H2v-6"
                }]
            ]],
            F = ["svg", h, [
                ["path", {
                    d: "M12 22a10 10 0 1 1 10-10"
                }],
                ["path", {
                    d: "M22 22 12 12"
                }],
                ["path", {
                    d: "M22 16v6h-6"
                }]
            ]],
            D = ["svg", h, [
                ["path", {
                    d: "M2 8V2h6"
                }],
                ["path", {
                    d: "m2 2 10 10"
                }],
                ["path", {
                    d: "M12 2A10 10 0 1 1 2 12"
                }]
            ]],
            Z = ["svg", h, [
                ["path", {
                    d: "M22 12A10 10 0 1 1 12 2"
                }],
                ["path", {
                    d: "M22 2 12 12"
                }],
                ["path", {
                    d: "M16 2h6v6"
                }]
            ]],
            R = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "m12 16 4-4-4-4"
                }]
            ]],
            q = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m16 12-4-4-4 4"
                }],
                ["path", {
                    d: "M12 16V8"
                }]
            ]],
            T = ["svg", h, [
                ["path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }],
                ["path", {
                    d: "m9 11 3 3L22 4"
                }]
            ]],
            z = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m9 12 2 2 4-4"
                }]
            ]],
            b = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m16 10-4 4-4-4"
                }]
            ]],
            x = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m14 16-4-4 4-4"
                }]
            ]],
            U = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m10 8 4 4-4 4"
                }]
            ]],
            O = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m8 14 4-4 4 4"
                }]
            ]],
            x5 = ["svg", h, [
                ["path", {
                    d: "M10.1 2.182a10 10 0 0 1 3.8 0"
                }],
                ["path", {
                    d: "M13.9 21.818a10 10 0 0 1-3.8 0"
                }],
                ["path", {
                    d: "M17.609 3.721a10 10 0 0 1 2.69 2.7"
                }],
                ["path", {
                    d: "M2.182 13.9a10 10 0 0 1 0-3.8"
                }],
                ["path", {
                    d: "M20.279 17.609a10 10 0 0 1-2.7 2.69"
                }],
                ["path", {
                    d: "M21.818 10.1a10 10 0 0 1 0 3.8"
                }],
                ["path", {
                    d: "M3.721 6.391a10 10 0 0 1 2.7-2.69"
                }],
                ["path", {
                    d: "M6.391 20.279a10 10 0 0 1-2.69-2.7"
                }]
            ]],
            G = ["svg", h, [
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "16",
                    y2: "16"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "8"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            U5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
                }],
                ["path", {
                    d: "M12 18V6"
                }]
            ]],
            O5 = ["svg", h, [
                ["path", {
                    d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
                }],
                ["path", {
                    d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
                }],
                ["path", {
                    d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
                }],
                ["path", {
                    d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
                }],
                ["path", {
                    d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
                }],
                ["path", {
                    d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
                }],
                ["path", {
                    d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
                }],
                ["path", {
                    d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }]
            ]],
            G5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }]
            ]],
            E5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M17 12h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M7 12h.01"
                }]
            ]],
            W5 = ["svg", h, [
                ["path", {
                    d: "M7 10h10"
                }],
                ["path", {
                    d: "M7 14h10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            I5 = ["svg", h, [
                ["path", {
                    d: "M12 2a10 10 0 0 1 7.38 16.75"
                }],
                ["path", {
                    d: "M12 8v8"
                }],
                ["path", {
                    d: "M16 12H8"
                }],
                ["path", {
                    d: "M2.5 8.875a10 10 0 0 0-.5 3"
                }],
                ["path", {
                    d: "M2.83 16a10 10 0 0 0 2.43 3.4"
                }],
                ["path", {
                    d: "M4.636 5.235a10 10 0 0 1 .891-.857"
                }],
                ["path", {
                    d: "M8.644 21.42a10 10 0 0 0 7.631-.38"
                }]
            ]],
            E = ["svg", h, [
                ["path", {
                    d: "M15.6 2.7a10 10 0 1 0 5.7 5.7"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M13.4 10.6 19 5"
                }]
            ]],
            W = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                }],
                ["path", {
                    d: "M12 17h.01"
                }]
            ]],
            I = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M8 12h8"
                }]
            ]],
            X5 = ["svg", h, [
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M8.35 2.69A10 10 0 0 1 21.3 15.65"
                }],
                ["path", {
                    d: "M19.08 19.08A10 10 0 1 1 4.92 4.92"
                }]
            ]],
            X = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m5 5 14 14"
                }],
                ["path", {
                    d: "M13 13a3 3 0 1 0 0-6H9v2"
                }],
                ["path", {
                    d: "M9 17v-2.34"
                }]
            ]],
            N = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M9 17V7h4a3 3 0 0 1 0 6H9"
                }]
            ]],
            K = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "15",
                    y2: "9"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "15",
                    y2: "9"
                }]
            ]],
            J = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["path", {
                    d: "M15 15h.01"
                }]
            ]],
            j = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polygon", {
                    points: "10 8 16 12 10 16 10 8"
                }]
            ]],
            Q = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "M12 8v8"
                }]
            ]],
            Y = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 12V7"
                }],
                ["path", {
                    d: "M16 9a5 5 0 1 1-8 0"
                }]
            ]],
            _ = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M22 2 2 22"
                }]
            ]],
            N5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["line", {
                    x1: "9",
                    x2: "15",
                    y1: "15",
                    y2: "9"
                }]
            ]],
            a1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["rect", {
                    width: "6",
                    height: "6",
                    x: "9",
                    y: "9"
                }]
            ]],
            h1 = ["svg", h, [
                ["path", {
                    d: "M18 20a6 6 0 0 0-12 0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "4"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            t1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }],
                ["path", {
                    d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
                }]
            ]],
            d1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "m9 9 6 6"
                }]
            ]],
            K5 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            J5 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M11 9h4a2 2 0 0 0 2-2V3"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "M7 21v-4a2 2 0 0 1 2-2h4"
                }],
                ["circle", {
                    cx: "15",
                    cy: "15",
                    r: "2"
                }]
            ]],
            j5 = ["svg", h, [
                ["path", {
                    d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
                }],
                ["path", {
                    d: "M19.65 15.66A8 8 0 0 1 8.35 4.34"
                }],
                ["path", {
                    d: "m14 10-5.5 5.5"
                }],
                ["path", {
                    d: "M14 17.85V10H6.15"
                }]
            ]],
            Q5 = ["svg", h, [
                ["path", {
                    d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
                }],
                ["path", {
                    d: "m6.2 5.3 3.1 3.9"
                }],
                ["path", {
                    d: "m12.4 3.4 3.1 4"
                }],
                ["path", {
                    d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                }]
            ]],
            Y5 = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "m9 14 2 2 4-4"
                }]
            ]],
            _5 = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v4"
                }],
                ["path", {
                    d: "M21 14H11"
                }],
                ["path", {
                    d: "m15 10-4 4 4 4"
                }]
            ]],
            ad = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M12 11h4"
                }],
                ["path", {
                    d: "M12 16h4"
                }],
                ["path", {
                    d: "M8 11h.01"
                }],
                ["path", {
                    d: "M8 16h.01"
                }]
            ]],
            hd = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M9 14h6"
                }]
            ]],
            td = ["svg", h, [
                ["path", {
                    d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
                }],
                ["path", {
                    d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
                }],
                ["path", {
                    d: "m17 10 4 4-4 4"
                }]
            ]],
            c1 = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1"
                }],
                ["path", {
                    d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 1.73 1"
                }],
                ["path", {
                    d: "M8 18h1"
                }],
                ["path", {
                    d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }]
            ]],
            M1 = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"
                }],
                ["path", {
                    d: "M4 13.5V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }]
            ]],
            dd = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M9 14h6"
                }],
                ["path", {
                    d: "M12 17v-6"
                }]
            ]],
            cd = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M9 12v-1h6v1"
                }],
                ["path", {
                    d: "M11 17h2"
                }],
                ["path", {
                    d: "M12 11v6"
                }]
            ]],
            Md = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "m15 11-6 6"
                }],
                ["path", {
                    d: "m9 11 6 6"
                }]
            ]],
            ed = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "4",
                    x: "8",
                    y: "2",
                    rx: "1",
                    ry: "1"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }]
            ]],
            id = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 14.5 8"
                }]
            ]],
            nd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 8 10"
                }]
            ]],
            pd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 9.5 8"
                }]
            ]],
            ld = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12"
                }]
            ]],
            vd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 16 10"
                }]
            ]],
            od = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 16.5 12"
                }]
            ]],
            sd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 16 14"
                }]
            ]],
            rd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 14.5 16"
                }]
            ]],
            gd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 12 16.5"
                }]
            ]],
            yd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 9.5 16"
                }]
            ]],
            $d = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 8 14"
                }]
            ]],
            md = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 7.5 12"
                }]
            ]],
            ud = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["polyline", {
                    points: "12 6 12 12 16 14"
                }]
            ]],
            Cd = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "17",
                    r: "3"
                }],
                ["path", {
                    d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
                }],
                ["path", {
                    d: "m15.7 18.4-.9-.3"
                }],
                ["path", {
                    d: "m9.2 15.9-.9-.3"
                }],
                ["path", {
                    d: "m10.6 20.7.3-.9"
                }],
                ["path", {
                    d: "m13.1 14.2.3-.9"
                }],
                ["path", {
                    d: "m13.6 20.7-.4-1"
                }],
                ["path", {
                    d: "m10.8 14.3-.4-1"
                }],
                ["path", {
                    d: "m8.3 18.6 1-.4"
                }],
                ["path", {
                    d: "m14.7 15.8 1-.4"
                }]
            ]],
            e1 = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M12 12v9"
                }],
                ["path", {
                    d: "m8 17 4 4 4-4"
                }]
            ]],
            Hd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M8 19v1"
                }],
                ["path", {
                    d: "M8 14v1"
                }],
                ["path", {
                    d: "M16 19v1"
                }],
                ["path", {
                    d: "M16 14v1"
                }],
                ["path", {
                    d: "M12 21v1"
                }],
                ["path", {
                    d: "M12 16v1"
                }]
            ]],
            wd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M16 17H7"
                }],
                ["path", {
                    d: "M17 21H9"
                }]
            ]],
            Vd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M16 14v2"
                }],
                ["path", {
                    d: "M8 14v2"
                }],
                ["path", {
                    d: "M16 20h.01"
                }],
                ["path", {
                    d: "M8 20h.01"
                }],
                ["path", {
                    d: "M12 16v2"
                }],
                ["path", {
                    d: "M12 22h.01"
                }]
            ]],
            Sd = ["svg", h, [
                ["path", {
                    d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
                }],
                ["path", {
                    d: "m13 12-3 5h4l-3 5"
                }]
            ]],
            Ad = ["svg", h, [
                ["path", {
                    d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
                }],
                ["path", {
                    d: "M11 20v2"
                }],
                ["path", {
                    d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
                }],
                ["path", {
                    d: "M7 19v2"
                }]
            ]],
            Ld = ["svg", h, [
                ["path", {
                    d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
                }],
                ["path", {
                    d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"
                }]
            ]],
            fd = ["svg", h, [
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
                }],
                ["path", {
                    d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
                }]
            ]],
            kd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "m9.2 22 3-7"
                }],
                ["path", {
                    d: "m9 13-3 7"
                }],
                ["path", {
                    d: "m17 13-3 7"
                }]
            ]],
            Pd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M16 14v6"
                }],
                ["path", {
                    d: "M8 14v6"
                }],
                ["path", {
                    d: "M12 16v6"
                }]
            ]],
            Bd = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M8 15h.01"
                }],
                ["path", {
                    d: "M8 19h.01"
                }],
                ["path", {
                    d: "M12 17h.01"
                }],
                ["path", {
                    d: "M12 21h.01"
                }],
                ["path", {
                    d: "M16 15h.01"
                }],
                ["path", {
                    d: "M16 19h.01"
                }]
            ]],
            Fd = ["svg", h, [
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41"
                }],
                ["path", {
                    d: "M20 12h2"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41"
                }],
                ["path", {
                    d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
                }],
                ["path", {
                    d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
                }],
                ["path", {
                    d: "M11 20v2"
                }],
                ["path", {
                    d: "M7 19v2"
                }]
            ]],
            Dd = ["svg", h, [
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41"
                }],
                ["path", {
                    d: "M20 12h2"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41"
                }],
                ["path", {
                    d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
                }],
                ["path", {
                    d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
                }]
            ]],
            i1 = ["svg", h, [
                ["path", {
                    d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                }],
                ["path", {
                    d: "M12 12v9"
                }],
                ["path", {
                    d: "m16 16-4-4-4 4"
                }]
            ]],
            Zd = ["svg", h, [
                ["path", {
                    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                }]
            ]],
            Rd = ["svg", h, [
                ["path", {
                    d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                }],
                ["path", {
                    d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"
                }]
            ]],
            qd = ["svg", h, [
                ["path", {
                    d: "M16.17 7.83 2 22"
                }],
                ["path", {
                    d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
                }],
                ["path", {
                    d: "m7.83 7.83 8.34 8.34"
                }]
            ]],
            Td = ["svg", h, [
                ["path", {
                    d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
                }],
                ["path", {
                    d: "M12 17.66L12 22"
                }]
            ]],
            n1 = ["svg", h, [
                ["path", {
                    d: "m18 16 4-4-4-4"
                }],
                ["path", {
                    d: "m6 8-4 4 4 4"
                }],
                ["path", {
                    d: "m14.5 4-5 16"
                }]
            ]],
            zd = ["svg", h, [
                ["polyline", {
                    points: "16 18 22 12 16 6"
                }],
                ["polyline", {
                    points: "8 6 2 12 8 18"
                }]
            ]],
            bd = ["svg", h, [
                ["polygon", {
                    points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "15.5"
                }],
                ["polyline", {
                    points: "22 8.5 12 15.5 2 8.5"
                }],
                ["polyline", {
                    points: "2 15.5 12 8.5 22 15.5"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "8.5"
                }]
            ]],
            xd = ["svg", h, [
                ["path", {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                }],
                ["polyline", {
                    points: "7.5 4.21 12 6.81 16.5 4.21"
                }],
                ["polyline", {
                    points: "7.5 19.79 7.5 14.6 3 12"
                }],
                ["polyline", {
                    points: "21 12 16.5 14.6 16.5 19.79"
                }],
                ["polyline", {
                    points: "3.27 6.96 12 12.01 20.73 6.96"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22.08",
                    y2: "12"
                }]
            ]],
            Ud = ["svg", h, [
                ["path", {
                    d: "M10 2v2"
                }],
                ["path", {
                    d: "M14 2v2"
                }],
                ["path", {
                    d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
                }],
                ["path", {
                    d: "M6 2v2"
                }]
            ]],
            Od = ["svg", h, [
                ["path", {
                    d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                }],
                ["path", {
                    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                }],
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "M12 22v-2"
                }],
                ["path", {
                    d: "m17 20.66-1-1.73"
                }],
                ["path", {
                    d: "M11 10.27 7 3.34"
                }],
                ["path", {
                    d: "m20.66 17-1.73-1"
                }],
                ["path", {
                    d: "m3.34 7 1.73 1"
                }],
                ["path", {
                    d: "M14 12h8"
                }],
                ["path", {
                    d: "M2 12h2"
                }],
                ["path", {
                    d: "m20.66 7-1.73 1"
                }],
                ["path", {
                    d: "m3.34 17 1.73-1"
                }],
                ["path", {
                    d: "m17 3.34-1 1.73"
                }],
                ["path", {
                    d: "m11 13.73-4 6.93"
                }]
            ]],
            Gd = ["svg", h, [
                ["circle", {
                    cx: "8",
                    cy: "8",
                    r: "6"
                }],
                ["path", {
                    d: "M18.09 10.37A6 6 0 1 1 10.34 18"
                }],
                ["path", {
                    d: "M7 6h1v4"
                }],
                ["path", {
                    d: "m16.71 13.88.7.71-2.82 2.82"
                }]
            ]],
            p1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 3v18"
                }]
            ]],
            l1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 3v18"
                }],
                ["path", {
                    d: "M15 3v18"
                }]
            ]],
            Ed = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7.5 3v18"
                }],
                ["path", {
                    d: "M12 3v18"
                }],
                ["path", {
                    d: "M16.5 3v18"
                }]
            ]],
            Wd = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "2",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
                }],
                ["path", {
                    d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
                }],
                ["path", {
                    d: "M10 18H5c-1.7 0-3-1.3-3-3v-1"
                }],
                ["polyline", {
                    points: "7 21 10 18 7 15"
                }],
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "14",
                    y: "14",
                    rx: "2"
                }]
            ]],
            Id = ["svg", h, [
                ["path", {
                    d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                }]
            ]],
            Xd = ["svg", h, [
                ["path", {
                    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            Nd = ["svg", h, [
                ["path", {
                    d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
                }],
                ["path", {
                    d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"
                }],
                ["path", {
                    d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
                }],
                ["path", {
                    d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
                }]
            ]],
            Kd = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "8",
                    x: "5",
                    y: "2",
                    rx: "2"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 18h2"
                }],
                ["path", {
                    d: "M12 18h6"
                }]
            ]],
            Jd = ["svg", h, [
                ["path", {
                    d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"
                }],
                ["path", {
                    d: "M20 16a8 8 0 1 0-16 0"
                }],
                ["path", {
                    d: "M12 4v4"
                }],
                ["path", {
                    d: "M10 4h4"
                }]
            ]],
            jd = ["svg", h, [
                ["path", {
                    d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
                }],
                ["ellipse", {
                    cx: "12",
                    cy: "19",
                    rx: "9",
                    ry: "3"
                }]
            ]],
            Qd = ["svg", h, [
                ["rect", {
                    x: "2",
                    y: "6",
                    width: "20",
                    height: "8",
                    rx: "1"
                }],
                ["path", {
                    d: "M17 14v7"
                }],
                ["path", {
                    d: "M7 14v7"
                }],
                ["path", {
                    d: "M17 3v3"
                }],
                ["path", {
                    d: "M7 3v3"
                }],
                ["path", {
                    d: "M10 14 2.3 6.3"
                }],
                ["path", {
                    d: "m14 6 7.7 7.7"
                }],
                ["path", {
                    d: "m8 6 8 8"
                }]
            ]],
            v1 = ["svg", h, [
                ["path", {
                    d: "M16 18a4 4 0 0 0-8 0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "11",
                    r: "3"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "2",
                    y2: "4"
                }],
                ["line", {
                    x1: "16",
                    x2: "16",
                    y1: "2",
                    y2: "4"
                }]
            ]],
            Yd = ["svg", h, [
                ["path", {
                    d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "2"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "2",
                    y2: "4"
                }],
                ["line", {
                    x1: "16",
                    x2: "16",
                    y1: "2",
                    y2: "4"
                }]
            ]],
            _d = ["svg", h, [
                ["path", {
                    d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
                }],
                ["path", {
                    d: "M10 21.9V14L2.1 9.1"
                }],
                ["path", {
                    d: "m10 14 11.9-6.9"
                }],
                ["path", {
                    d: "M14 19.8v-8.1"
                }],
                ["path", {
                    d: "M18 17.5V9.4"
                }]
            ]],
            a3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 18a6 6 0 0 0 0-12v12z"
                }]
            ]],
            h3 = ["svg", h, [
                ["path", {
                    d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
                }],
                ["path", {
                    d: "M8.5 8.5v.01"
                }],
                ["path", {
                    d: "M16 15.5v.01"
                }],
                ["path", {
                    d: "M12 12v.01"
                }],
                ["path", {
                    d: "M11 17v.01"
                }],
                ["path", {
                    d: "M7 14v.01"
                }]
            ]],
            t3 = ["svg", h, [
                ["path", {
                    d: "M2 12h20"
                }],
                ["path", {
                    d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
                }],
                ["path", {
                    d: "m4 8 16-4"
                }],
                ["path", {
                    d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
                }]
            ]],
            d3 = ["svg", h, [
                ["path", {
                    d: "m12 15 2 2 4-4"
                }],
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            c3 = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "15",
                    y2: "15"
                }],
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            M3 = ["svg", h, [
                ["line", {
                    x1: "15",
                    x2: "15",
                    y1: "12",
                    y2: "18"
                }],
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "15",
                    y2: "15"
                }],
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            e3 = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "18",
                    y2: "12"
                }],
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            i3 = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "12",
                    y2: "18"
                }],
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "18",
                    y2: "12"
                }],
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            n3 = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "14",
                    x: "8",
                    y: "8",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                }]
            ]],
            p3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M9.17 14.83a4 4 0 1 0 0-5.66"
                }]
            ]],
            l3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M14.83 14.83a4 4 0 1 1 0-5.66"
                }]
            ]],
            v3 = ["svg", h, [
                ["polyline", {
                    points: "9 10 4 15 9 20"
                }],
                ["path", {
                    d: "M20 4v7a4 4 0 0 1-4 4H4"
                }]
            ]],
            o3 = ["svg", h, [
                ["polyline", {
                    points: "15 10 20 15 15 20"
                }],
                ["path", {
                    d: "M4 4v7a4 4 0 0 0 4 4h12"
                }]
            ]],
            s3 = ["svg", h, [
                ["polyline", {
                    points: "14 15 9 20 4 15"
                }],
                ["path", {
                    d: "M20 4h-7a4 4 0 0 0-4 4v12"
                }]
            ]],
            r3 = ["svg", h, [
                ["polyline", {
                    points: "14 9 9 4 4 9"
                }],
                ["path", {
                    d: "M20 20h-7a4 4 0 0 1-4-4V4"
                }]
            ]],
            g3 = ["svg", h, [
                ["polyline", {
                    points: "10 15 15 20 20 15"
                }],
                ["path", {
                    d: "M4 4h7a4 4 0 0 1 4 4v12"
                }]
            ]],
            y3 = ["svg", h, [
                ["polyline", {
                    points: "10 9 15 4 20 9"
                }],
                ["path", {
                    d: "M4 20h7a4 4 0 0 0 4-4V4"
                }]
            ]],
            $3 = ["svg", h, [
                ["polyline", {
                    points: "9 14 4 9 9 4"
                }],
                ["path", {
                    d: "M20 20v-7a4 4 0 0 0-4-4H4"
                }]
            ]],
            m3 = ["svg", h, [
                ["polyline", {
                    points: "15 14 20 9 15 4"
                }],
                ["path", {
                    d: "M4 20v-7a4 4 0 0 1 4-4h12"
                }]
            ]],
            u3 = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "16",
                    x: "4",
                    y: "4",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "6",
                    x: "9",
                    y: "9",
                    rx: "1"
                }],
                ["path", {
                    d: "M15 2v2"
                }],
                ["path", {
                    d: "M15 20v2"
                }],
                ["path", {
                    d: "M2 15h2"
                }],
                ["path", {
                    d: "M2 9h2"
                }],
                ["path", {
                    d: "M20 15h2"
                }],
                ["path", {
                    d: "M20 9h2"
                }],
                ["path", {
                    d: "M9 2v2"
                }],
                ["path", {
                    d: "M9 20v2"
                }]
            ]],
            C3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
                }],
                ["path", {
                    d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
                }]
            ]],
            H3 = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "10",
                    y2: "10"
                }]
            ]],
            w3 = ["svg", h, [
                ["path", {
                    d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
                }],
                ["path", {
                    d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
                }],
                ["path", {
                    d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"
                }],
                ["path", {
                    d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
                }],
                ["path", {
                    d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"
                }]
            ]],
            V3 = ["svg", h, [
                ["path", {
                    d: "M6 2v14a2 2 0 0 0 2 2h14"
                }],
                ["path", {
                    d: "M18 22V8a2 2 0 0 0-2-2H2"
                }]
            ]],
            S3 = ["svg", h, [
                ["path", {
                    d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
                }]
            ]],
            A3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["line", {
                    x1: "22",
                    x2: "18",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "6",
                    x2: "2",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "6",
                    y2: "2"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "18"
                }]
            ]],
            L3 = ["svg", h, [
                ["path", {
                    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
                }],
                ["path", {
                    d: "M5 21h14"
                }]
            ]],
            f3 = ["svg", h, [
                ["path", {
                    d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
                }],
                ["path", {
                    d: "M10 22v-8L2.25 9.15"
                }],
                ["path", {
                    d: "m10 14 11.77-6.87"
                }]
            ]],
            k3 = ["svg", h, [
                ["path", {
                    d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
                }],
                ["path", {
                    d: "M5 8h14"
                }],
                ["path", {
                    d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
                }],
                ["path", {
                    d: "m12 8 1-6h2"
                }]
            ]],
            P3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "8"
                }],
                ["line", {
                    x1: "3",
                    x2: "6",
                    y1: "3",
                    y2: "6"
                }],
                ["line", {
                    x1: "21",
                    x2: "18",
                    y1: "3",
                    y2: "6"
                }],
                ["line", {
                    x1: "3",
                    x2: "6",
                    y1: "21",
                    y2: "18"
                }],
                ["line", {
                    x1: "21",
                    x2: "18",
                    y1: "21",
                    y2: "18"
                }]
            ]],
            B3 = ["svg", h, [
                ["ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }],
                ["path", {
                    d: "M3 5v14a9 3 0 0 0 18 0V5"
                }]
            ]],
            F3 = ["svg", h, [
                ["ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }],
                ["path", {
                    d: "M3 12a9 3 0 0 0 5 2.69"
                }],
                ["path", {
                    d: "M21 9.3V5"
                }],
                ["path", {
                    d: "M3 5v14a9 3 0 0 0 6.47 2.88"
                }],
                ["path", {
                    d: "M12 12v4h4"
                }],
                ["path", {
                    d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
                }]
            ]],
            D3 = ["svg", h, [
                ["ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }],
                ["path", {
                    d: "M3 5V19A9 3 0 0 0 15 21.84"
                }],
                ["path", {
                    d: "M21 5V8"
                }],
                ["path", {
                    d: "M21 12L18 17H22L19 22"
                }],
                ["path", {
                    d: "M3 12A9 3 0 0 0 14.59 14.87"
                }]
            ]],
            Z3 = ["svg", h, [
                ["ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }],
                ["path", {
                    d: "M3 5V19A9 3 0 0 0 21 19V5"
                }],
                ["path", {
                    d: "M3 12A9 3 0 0 0 21 12"
                }]
            ]],
            R3 = ["svg", h, [
                ["path", {
                    d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
                }],
                ["line", {
                    x1: "18",
                    x2: "12",
                    y1: "9",
                    y2: "15"
                }],
                ["line", {
                    x1: "12",
                    x2: "18",
                    y1: "9",
                    y2: "15"
                }]
            ]],
            q3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "4",
                    r: "2"
                }],
                ["path", {
                    d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
                }],
                ["path", {
                    d: "M3.2 14.8a9 9 0 0 0 17.6 0"
                }]
            ]],
            T3 = ["svg", h, [
                ["circle", {
                    cx: "19",
                    cy: "19",
                    r: "2"
                }],
                ["circle", {
                    cx: "5",
                    cy: "5",
                    r: "2"
                }],
                ["path", {
                    d: "M6.48 3.66a10 10 0 0 1 13.86 13.86"
                }],
                ["path", {
                    d: "m6.41 6.41 11.18 11.18"
                }],
                ["path", {
                    d: "M3.66 6.48a10 10 0 0 0 13.86 13.86"
                }]
            ]],
            z3 = ["svg", h, [
                ["path", {
                    d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
                }],
                ["path", {
                    d: "M8 12h8"
                }]
            ]],
            o1 = ["svg", h, [
                ["path", {
                    d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
                }],
                ["path", {
                    d: "M9.2 9.2h.01"
                }],
                ["path", {
                    d: "m14.5 9.5-5 5"
                }],
                ["path", {
                    d: "M14.7 14.8h.01"
                }]
            ]],
            b3 = ["svg", h, [
                ["path", {
                    d: "M12 8v8"
                }],
                ["path", {
                    d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
                }],
                ["path", {
                    d: "M8 12h8"
                }]
            ]],
            x3 = ["svg", h, [
                ["path", {
                    d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
                }]
            ]],
            U3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M12 12h.01"
                }]
            ]],
            O3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M15 9h.01"
                }],
                ["path", {
                    d: "M9 15h.01"
                }]
            ]],
            G3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M16 8h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M8 16h.01"
                }]
            ]],
            E3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M16 8h.01"
                }],
                ["path", {
                    d: "M8 8h.01"
                }],
                ["path", {
                    d: "M8 16h.01"
                }],
                ["path", {
                    d: "M16 16h.01"
                }]
            ]],
            W3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M16 8h.01"
                }],
                ["path", {
                    d: "M8 8h.01"
                }],
                ["path", {
                    d: "M8 16h.01"
                }],
                ["path", {
                    d: "M16 16h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }]
            ]],
            I3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M16 8h.01"
                }],
                ["path", {
                    d: "M16 12h.01"
                }],
                ["path", {
                    d: "M16 16h.01"
                }],
                ["path", {
                    d: "M8 8h.01"
                }],
                ["path", {
                    d: "M8 12h.01"
                }],
                ["path", {
                    d: "M8 16h.01"
                }]
            ]],
            X3 = ["svg", h, [
                ["rect", {
                    width: "12",
                    height: "12",
                    x: "2",
                    y: "10",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "M10 14h.01"
                }],
                ["path", {
                    d: "M15 6h.01"
                }],
                ["path", {
                    d: "M18 9h.01"
                }]
            ]],
            N3 = ["svg", h, [
                ["path", {
                    d: "M12 3v14"
                }],
                ["path", {
                    d: "M5 10h14"
                }],
                ["path", {
                    d: "M5 21h14"
                }]
            ]],
            K3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["path", {
                    d: "M12 12h.01"
                }]
            ]],
            J3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M6 12c0-1.7.7-3.2 1.8-4.2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M18 12c0 1.7-.7 3.2-1.8 4.2"
                }]
            ]],
            j3 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }],
                ["path", {
                    d: "M12 12h.01"
                }]
            ]],
            Q3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }]
            ]],
            Y3 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "6",
                    r: "1"
                }],
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "12",
                    y2: "12"
                }],
                ["circle", {
                    cx: "12",
                    cy: "18",
                    r: "1"
                }]
            ]],
            _3 = ["svg", h, [
                ["path", {
                    d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"
                }],
                ["path", {
                    d: "m17 6-2.891-2.891"
                }],
                ["path", {
                    d: "M2 15c3.333-3 6.667-3 10-3"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "m20 9 .891.891"
                }],
                ["path", {
                    d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"
                }],
                ["path", {
                    d: "M3.109 14.109 4 15"
                }],
                ["path", {
                    d: "m6.5 12.5 1 1"
                }],
                ["path", {
                    d: "m7 18 2.891 2.891"
                }],
                ["path", {
                    d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"
                }]
            ]],
            ac = ["svg", h, [
                ["path", {
                    d: "m10 16 1.5 1.5"
                }],
                ["path", {
                    d: "m14 8-1.5-1.5"
                }],
                ["path", {
                    d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
                }],
                ["path", {
                    d: "m16.5 10.5 1 1"
                }],
                ["path", {
                    d: "m17 6-2.891-2.891"
                }],
                ["path", {
                    d: "M2 15c6.667-6 13.333 0 20-6"
                }],
                ["path", {
                    d: "m20 9 .891.891"
                }],
                ["path", {
                    d: "M3.109 14.109 4 15"
                }],
                ["path", {
                    d: "m6.5 12.5 1 1"
                }],
                ["path", {
                    d: "m7 18 2.891 2.891"
                }],
                ["path", {
                    d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
                }]
            ]],
            hc = ["svg", h, [
                ["path", {
                    d: "M2 8h20"
                }],
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 16h12"
                }]
            ]],
            tc = ["svg", h, [
                ["path", {
                    d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"
                }],
                ["path", {
                    d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
                }],
                ["path", {
                    d: "M8 14v.5"
                }],
                ["path", {
                    d: "M16 14v.5"
                }],
                ["path", {
                    d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
                }],
                ["path", {
                    d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"
                }]
            ]],
            dc = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                }]
            ]],
            cc = ["svg", h, [
                ["path", {
                    d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }]
            ]],
            Mc = ["svg", h, [
                ["path", {
                    d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
                }],
                ["path", {
                    d: "M2 20h20"
                }],
                ["path", {
                    d: "M14 12v.01"
                }]
            ]],
            ec = ["svg", h, [
                ["path", {
                    d: "M13 4h3a2 2 0 0 1 2 2v14"
                }],
                ["path", {
                    d: "M2 20h3"
                }],
                ["path", {
                    d: "M13 20h9"
                }],
                ["path", {
                    d: "M10 12v.01"
                }],
                ["path", {
                    d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
                }]
            ]],
            ic = ["svg", h, [
                ["circle", {
                    cx: "12.1",
                    cy: "12.1",
                    r: "1"
                }]
            ]],
            nc = ["svg", h, [
                ["path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }],
                ["polyline", {
                    points: "7 10 12 15 17 10"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "15",
                    y2: "3"
                }]
            ]],
            pc = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "2"
                }],
                ["path", {
                    d: "m3 21 8.02-14.26"
                }],
                ["path", {
                    d: "m12.99 6.74 1.93 3.44"
                }],
                ["path", {
                    d: "M19 12c-3.87 4-10.13 4-14 0"
                }],
                ["path", {
                    d: "m21 21-2.16-3.84"
                }]
            ]],
            lc = ["svg", h, [
                ["path", {
                    d: "M10 11h.01"
                }],
                ["path", {
                    d: "M14 6h.01"
                }],
                ["path", {
                    d: "M18 6h.01"
                }],
                ["path", {
                    d: "M6.5 13.1h.01"
                }],
                ["path", {
                    d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
                }],
                ["path", {
                    d: "M17.4 9.9c-.8.8-2 .8-2.8 0"
                }],
                ["path", {
                    d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
                }],
                ["path", {
                    d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
                }]
            ]],
            vc = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
                }],
                ["path", {
                    d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
                }],
                ["path", {
                    d: "M8.56 2.75c4.37 6 6 9.42 8 17.72"
                }]
            ]],
            oc = ["svg", h, [
                ["path", {
                    d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"
                }],
                ["path", {
                    d: "M18 6h4"
                }],
                ["path", {
                    d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"
                }],
                ["path", {
                    d: "m5 10-2 8"
                }],
                ["path", {
                    d: "M12 10v3c0 .6-.4 1-1 1H8"
                }],
                ["path", {
                    d: "m7 18 2-8"
                }],
                ["path", {
                    d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"
                }]
            ]],
            sc = ["svg", h, [
                ["path", {
                    d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
                }]
            ]],
            rc = ["svg", h, [
                ["path", {
                    d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
                }],
                ["path", {
                    d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
                }]
            ]],
            gc = ["svg", h, [
                ["path", {
                    d: "m2 2 8 8"
                }],
                ["path", {
                    d: "m22 2-8 8"
                }],
                ["ellipse", {
                    cx: "12",
                    cy: "9",
                    rx: "10",
                    ry: "5"
                }],
                ["path", {
                    d: "M7 13.4v7.9"
                }],
                ["path", {
                    d: "M12 14v8"
                }],
                ["path", {
                    d: "M17 13.4v7.9"
                }],
                ["path", {
                    d: "M2 9v8a10 5 0 0 0 20 0V9"
                }]
            ]],
            yc = ["svg", h, [
                ["path", {
                    d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"
                }],
                ["path", {
                    d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"
                }]
            ]],
            $c = ["svg", h, [
                ["path", {
                    d: "M14.4 14.4 9.6 9.6"
                }],
                ["path", {
                    d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
                }],
                ["path", {
                    d: "m21.5 21.5-1.4-1.4"
                }],
                ["path", {
                    d: "M3.9 3.9 2.5 2.5"
                }],
                ["path", {
                    d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
                }]
            ]],
            mc = ["svg", h, [
                ["path", {
                    d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"
                }],
                ["path", {
                    d: "M6 8.5c0-.75.13-1.47.36-2.14"
                }],
                ["path", {
                    d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"
                }],
                ["path", {
                    d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            uc = ["svg", h, [
                ["path", {
                    d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
                }],
                ["path", {
                    d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
                }]
            ]],
            Cc = ["svg", h, [
                ["path", {
                    d: "M7 3.34V5a3 3 0 0 0 3 3"
                }],
                ["path", {
                    d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                }],
                ["path", {
                    d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
                }],
                ["path", {
                    d: "M12 2a10 10 0 1 0 9.54 13"
                }],
                ["path", {
                    d: "M20 6V4a2 2 0 1 0-4 0v2"
                }],
                ["rect", {
                    width: "8",
                    height: "5",
                    x: "14",
                    y: "6",
                    rx: "1"
                }]
            ]],
            s1 = ["svg", h, [
                ["path", {
                    d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
                }],
                ["path", {
                    d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
                }],
                ["path", {
                    d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            Hc = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 2a7 7 0 1 0 10 10"
                }]
            ]],
            wc = ["svg", h, [
                ["circle", {
                    cx: "11.5",
                    cy: "12.5",
                    r: "3.5"
                }],
                ["path", {
                    d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
                }]
            ]],
            Vc = ["svg", h, [
                ["path", {
                    d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
                }],
                ["path", {
                    d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Sc = ["svg", h, [
                ["path", {
                    d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
                }]
            ]],
            r1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "19",
                    r: "1"
                }]
            ]],
            g1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "12",
                    r: "1"
                }]
            ]],
            Ac = ["svg", h, [
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "15",
                    y2: "15"
                }],
                ["line", {
                    x1: "19",
                    x2: "5",
                    y1: "5",
                    y2: "19"
                }]
            ]],
            Lc = ["svg", h, [
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "15",
                    y2: "15"
                }]
            ]],
            fc = ["svg", h, [
                ["path", {
                    d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
                }],
                ["path", {
                    d: "M22 21H7"
                }],
                ["path", {
                    d: "m5 11 9 9"
                }]
            ]],
            kc = ["svg", h, [
                ["path", {
                    d: "M4 10h12"
                }],
                ["path", {
                    d: "M4 14h9"
                }],
                ["path", {
                    d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
                }]
            ]],
            Pc = ["svg", h, [
                ["path", {
                    d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
                }],
                ["path", {
                    d: "M3 16.2V21m0 0h4.8M3 21l6-6"
                }],
                ["path", {
                    d: "M21 7.8V3m0 0h-4.8M21 3l-6 6"
                }],
                ["path", {
                    d: "M3 7.8V3m0 0h4.8M3 3l6 6"
                }]
            ]],
            Bc = ["svg", h, [
                ["path", {
                    d: "M15 3h6v6"
                }],
                ["path", {
                    d: "M10 14 21 3"
                }],
                ["path", {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                }]
            ]],
            Fc = ["svg", h, [
                ["path", {
                    d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
                }],
                ["path", {
                    d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                }],
                ["path", {
                    d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Dc = ["svg", h, [
                ["path", {
                    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }]
            ]],
            Zc = ["svg", h, [
                ["path", {
                    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                }]
            ]],
            Rc = ["svg", h, [
                ["path", {
                    d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "M17 18h1"
                }],
                ["path", {
                    d: "M12 18h1"
                }],
                ["path", {
                    d: "M7 18h1"
                }]
            ]],
            qc = ["svg", h, [
                ["path", {
                    d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
                }],
                ["path", {
                    d: "M12 12v.01"
                }]
            ]],
            Tc = ["svg", h, [
                ["polygon", {
                    points: "13 19 22 12 13 5 13 19"
                }],
                ["polygon", {
                    points: "2 19 11 12 2 5 2 19"
                }]
            ]],
            zc = ["svg", h, [
                ["path", {
                    d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
                }],
                ["path", {
                    d: "M16 8 2 22"
                }],
                ["path", {
                    d: "M17.5 15H9"
                }]
            ]],
            bc = ["svg", h, [
                ["path", {
                    d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
                }],
                ["path", {
                    d: "M6 8h4"
                }],
                ["path", {
                    d: "M6 18h4"
                }],
                ["path", {
                    d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
                }],
                ["path", {
                    d: "M14 8h4"
                }],
                ["path", {
                    d: "M14 18h4"
                }],
                ["path", {
                    d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
                }]
            ]],
            xc = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M12 2v4"
                }],
                ["path", {
                    d: "m6.8 15-3.5 2"
                }],
                ["path", {
                    d: "m20.7 7-3.5 2"
                }],
                ["path", {
                    d: "M6.8 9 3.3 7"
                }],
                ["path", {
                    d: "m20.7 17-3.5-2"
                }],
                ["path", {
                    d: "m9 22 3-8 3 8"
                }],
                ["path", {
                    d: "M8 22h8"
                }],
                ["path", {
                    d: "M18 18.7a9 9 0 1 0-12 0"
                }]
            ]],
            Uc = ["svg", h, [
                ["path", {
                    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                }],
                ["path", {
                    d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
                }],
                ["path", {
                    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
                }],
                ["path", {
                    d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                }],
                ["path", {
                    d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                }]
            ]],
            Oc = ["svg", h, [
                ["path", {
                    d: "M10 12v-1"
                }],
                ["path", {
                    d: "M10 18v-2"
                }],
                ["path", {
                    d: "M10 7V6"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"
                }],
                ["circle", {
                    cx: "10",
                    cy: "20",
                    r: "2"
                }]
            ]],
            Gc = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "3",
                    cy: "17",
                    r: "1"
                }],
                ["path", {
                    d: "M2 17v-3a4 4 0 0 1 8 0v3"
                }],
                ["circle", {
                    cx: "9",
                    cy: "17",
                    r: "1"
                }]
            ]],
            Ec = ["svg", h, [
                ["path", {
                    d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
                }]
            ]],
            y1 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m8 18 4-4"
                }],
                ["path", {
                    d: "M8 10v8h8"
                }]
            ]],
            Wc = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m14 12.5 1 5.5-3-1-3 1 1-5.5"
                }]
            ]],
            Ic = ["svg", h, [
                ["path", {
                    d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                }],
                ["path", {
                    d: "M7 16.5 8 22l-3-1-3 1 1-5.5"
                }]
            ]],
            Xc = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 18v-1"
                }],
                ["path", {
                    d: "M12 18v-6"
                }],
                ["path", {
                    d: "M16 18v-3"
                }]
            ]],
            Nc = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 18v-2"
                }],
                ["path", {
                    d: "M12 18v-4"
                }],
                ["path", {
                    d: "M16 18v-6"
                }]
            ]],
            Kc = ["svg", h, [
                ["path", {
                    d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
                }],
                ["path", {
                    d: "M7 17v5"
                }],
                ["path", {
                    d: "M11.7 14.2 7 17l-4.7-2.8"
                }]
            ]],
            Jc = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m3 15 2 2 4-4"
                }]
            ]],
            jc = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m9 15 2 2 4-4"
                }]
            ]],
            Qc = ["svg", h, [
                ["path", {
                    d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "8",
                    cy: "16",
                    r: "6"
                }],
                ["path", {
                    d: "M9.5 17.5 8 16.25V14"
                }]
            ]],
            Yc = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m5 12-3 3 3 3"
                }],
                ["path", {
                    d: "m9 18 3-3-3-3"
                }]
            ]],
            _c = ["svg", h, [
                ["path", {
                    d: "M10 12.5 8 15l2 2.5"
                }],
                ["path", {
                    d: "m14 12.5 2 2.5-2 2.5"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
                }]
            ]],
            $1 = ["svg", h, [
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m3.2 12.9-.9-.4"
                }],
                ["path", {
                    d: "m3.2 15.1-.9.4"
                }],
                ["path", {
                    d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
                }],
                ["path", {
                    d: "m4.9 11.2-.4-.9"
                }],
                ["path", {
                    d: "m4.9 16.8-.4.9"
                }],
                ["path", {
                    d: "m7.5 10.3-.4.9"
                }],
                ["path", {
                    d: "m7.5 17.7-.4-.9"
                }],
                ["path", {
                    d: "m9.7 12.5-.9.4"
                }],
                ["path", {
                    d: "m9.7 15.5-.9-.4"
                }],
                ["circle", {
                    cx: "6",
                    cy: "14",
                    r: "3"
                }]
            ]],
            a6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M9 10h6"
                }],
                ["path", {
                    d: "M12 13V7"
                }],
                ["path", {
                    d: "M9 17h6"
                }]
            ]],
            h6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["rect", {
                    width: "4",
                    height: "6",
                    x: "2",
                    y: "12",
                    rx: "2"
                }],
                ["path", {
                    d: "M10 12h2v6"
                }],
                ["path", {
                    d: "M10 18h4"
                }]
            ]],
            t6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M12 18v-6"
                }],
                ["path", {
                    d: "m9 15 3 3 3-3"
                }]
            ]],
            d6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
                }]
            ]],
            c6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "10",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"
                }]
            ]],
            M6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M2 15h10"
                }],
                ["path", {
                    d: "m9 18 3-3-3-3"
                }]
            ]],
            e6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
                }],
                ["path", {
                    d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
                }]
            ]],
            i6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
                }],
                ["path", {
                    d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
                }]
            ]],
            n6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "4",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "m10 10-4.5 4.5"
                }],
                ["path", {
                    d: "m9 11 1 1"
                }]
            ]],
            p6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["circle", {
                    cx: "10",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "m16 10-4.5 4.5"
                }],
                ["path", {
                    d: "m15 11 1 1"
                }]
            ]],
            l6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m16 13-3.5 3.5-2-2L8 17"
                }]
            ]],
            v6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["rect", {
                    width: "8",
                    height: "5",
                    x: "2",
                    y: "13",
                    rx: "1"
                }],
                ["path", {
                    d: "M8 13v-2a2 2 0 1 0-4 0v2"
                }]
            ]],
            o6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["rect", {
                    width: "8",
                    height: "6",
                    x: "8",
                    y: "12",
                    rx: "1"
                }],
                ["path", {
                    d: "M10 12v-2a2 2 0 1 1 4 0v2"
                }]
            ]],
            s6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M3 15h6"
                }]
            ]],
            r6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M9 15h6"
                }]
            ]],
            g6 = ["svg", h, [
                ["circle", {
                    cx: "14",
                    cy: "16",
                    r: "2"
                }],
                ["circle", {
                    cx: "6",
                    cy: "18",
                    r: "2"
                }],
                ["path", {
                    d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"
                }],
                ["path", {
                    d: "M8 18v-7.7L16 9v7"
                }]
            ]],
            y6 = ["svg", h, [
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"
                }],
                ["path", {
                    d: "m5 11-3 3"
                }],
                ["path", {
                    d: "m5 17-3-3h10"
                }]
            ]],
            m1 = ["svg", h, [
                ["path", {
                    d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                }],
                ["path", {
                    d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }],
                ["path", {
                    d: "M8 18h1"
                }]
            ]],
            u1 = ["svg", h, [
                ["path", {
                    d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }]
            ]],
            $6 = ["svg", h, [
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"
                }],
                ["path", {
                    d: "M4.017 11.512a6 6 0 1 0 8.466 8.475"
                }],
                ["path", {
                    d: "M8 16v-6a6 6 0 0 1 6 6z"
                }]
            ]],
            m6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M3 15h6"
                }],
                ["path", {
                    d: "M6 12v6"
                }]
            ]],
            u6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M9 15h6"
                }],
                ["path", {
                    d: "M12 18v-6"
                }]
            ]],
            C6 = ["svg", h, [
                ["path", {
                    d: "M12 17h.01"
                }],
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
                }],
                ["path", {
                    d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
                }]
            ]],
            H6 = ["svg", h, [
                ["path", {
                    d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M16 14a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M20 14a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M20 22a2 2 0 0 0 2-2"
                }],
                ["path", {
                    d: "M16 22a2 2 0 0 1-2-2"
                }]
            ]],
            w6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "11.5",
                    cy: "14.5",
                    r: "2.5"
                }],
                ["path", {
                    d: "M13.3 16.3 15 18"
                }]
            ]],
            V6 = ["svg", h, [
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "m9 18-1.5-1.5"
                }],
                ["circle", {
                    cx: "5",
                    cy: "14",
                    r: "3"
                }]
            ]],
            S6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "M10 11v2"
                }],
                ["path", {
                    d: "M8 17h8"
                }],
                ["path", {
                    d: "M14 16v2"
                }]
            ]],
            A6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 13h2"
                }],
                ["path", {
                    d: "M14 13h2"
                }],
                ["path", {
                    d: "M8 17h2"
                }],
                ["path", {
                    d: "M14 17h2"
                }]
            ]],
            L6 = ["svg", h, [
                ["path", {
                    d: "M21 7h-3a2 2 0 0 1-2-2V2"
                }],
                ["path", {
                    d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
                }],
                ["path", {
                    d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"
                }],
                ["path", {
                    d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
                }]
            ]],
            f6 = ["svg", h, [
                ["path", {
                    d: "m10 18 3-3-3-3"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
                }]
            ]],
            k6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m8 16 2-2-2-2"
                }],
                ["path", {
                    d: "M12 18h4"
                }]
            ]],
            P6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M10 9H8"
                }],
                ["path", {
                    d: "M16 13H8"
                }],
                ["path", {
                    d: "M16 17H8"
                }]
            ]],
            B6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M2 13v-1h6v1"
                }],
                ["path", {
                    d: "M5 12v6"
                }],
                ["path", {
                    d: "M4 18h2"
                }]
            ]],
            F6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M9 13v-1h6v1"
                }],
                ["path", {
                    d: "M12 12v6"
                }],
                ["path", {
                    d: "M11 18h2"
                }]
            ]],
            D6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M12 12v6"
                }],
                ["path", {
                    d: "m15 15-3-3-3 3"
                }]
            ]],
            Z6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["rect", {
                    width: "8",
                    height: "6",
                    x: "2",
                    y: "12",
                    rx: "1"
                }],
                ["path", {
                    d: "m10 15.5 4 2.5v-6l-4 2.5"
                }]
            ]],
            R6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m10 11 5 3-5 3v-6Z"
                }]
            ]],
            q6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 15h.01"
                }],
                ["path", {
                    d: "M11.5 13.5a2.5 2.5 0 0 1 0 3"
                }],
                ["path", {
                    d: "M15 12a5 5 0 0 1 0 6"
                }]
            ]],
            T6 = ["svg", h, [
                ["path", {
                    d: "M11 11a5 5 0 0 1 0 6"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "m7 10-3 2H2v4h2l3 2z"
                }]
            ]],
            z6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M12 9v4"
                }],
                ["path", {
                    d: "M12 17h.01"
                }]
            ]],
            b6 = ["svg", h, [
                ["path", {
                    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m8 12.5-5 5"
                }],
                ["path", {
                    d: "m3 12.5 5 5"
                }]
            ]],
            x6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "m14.5 12.5-5 5"
                }],
                ["path", {
                    d: "m9.5 12.5 5 5"
                }]
            ]],
            U6 = ["svg", h, [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4"
                }]
            ]],
            O6 = ["svg", h, [
                ["path", {
                    d: "M20 7h-3a2 2 0 0 1-2-2V2"
                }],
                ["path", {
                    d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"
                }],
                ["path", {
                    d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"
                }]
            ]],
            G6 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 3v18"
                }],
                ["path", {
                    d: "M3 7.5h4"
                }],
                ["path", {
                    d: "M3 12h18"
                }],
                ["path", {
                    d: "M3 16.5h4"
                }],
                ["path", {
                    d: "M17 3v18"
                }],
                ["path", {
                    d: "M17 7.5h4"
                }],
                ["path", {
                    d: "M17 16.5h4"
                }]
            ]],
            E6 = ["svg", h, [
                ["path", {
                    d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"
                }],
                ["path", {
                    d: "m22 3-5 5"
                }],
                ["path", {
                    d: "m17 3 5 5"
                }]
            ]],
            W6 = ["svg", h, [
                ["polygon", {
                    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                }]
            ]],
            I6 = ["svg", h, [
                ["path", {
                    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
                }],
                ["path", {
                    d: "M14 13.12c0 2.38 0 6.38-1 8.88"
                }],
                ["path", {
                    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02"
                }],
                ["path", {
                    d: "M2 12a10 10 0 0 1 18-6"
                }],
                ["path", {
                    d: "M2 16h.01"
                }],
                ["path", {
                    d: "M21.8 16c.2-2 .131-5.354 0-6"
                }],
                ["path", {
                    d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
                }],
                ["path", {
                    d: "M8.65 22c.21-.66.45-1.32.57-2"
                }],
                ["path", {
                    d: "M9 6.8a6 6 0 0 1 9 5.2v2"
                }]
            ]],
            X6 = ["svg", h, [
                ["path", {
                    d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"
                }],
                ["path", {
                    d: "M9 18h8"
                }],
                ["path", {
                    d: "M18 3h-3"
                }],
                ["path", {
                    d: "M11 3a6 6 0 0 0-6 6v11"
                }],
                ["path", {
                    d: "M5 13h4"
                }],
                ["path", {
                    d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"
                }]
            ]],
            N6 = ["svg", h, [
                ["path", {
                    d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
                }],
                ["path", {
                    d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
                }],
                ["path", {
                    d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
                }]
            ]],
            K6 = ["svg", h, [
                ["path", {
                    d: "M2 16s9-15 20-4C11 23 2 8 2 8"
                }]
            ]],
            J6 = ["svg", h, [
                ["path", {
                    d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
                }],
                ["path", {
                    d: "M18 12v.5"
                }],
                ["path", {
                    d: "M16 17.93a9.77 9.77 0 0 1 0-11.86"
                }],
                ["path", {
                    d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
                }],
                ["path", {
                    d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
                }],
                ["path", {
                    d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
                }]
            ]],
            j6 = ["svg", h, [
                ["path", {
                    d: "M8 2c3 0 5 2 8 2s4-1 4-1v11"
                }],
                ["path", {
                    d: "M4 22V4"
                }],
                ["path", {
                    d: "M4 15s1-1 4-1 5 2 8 2"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Q6 = ["svg", h, [
                ["path", {
                    d: "M17 22V2L7 7l10 5"
                }]
            ]],
            Y6 = ["svg", h, [
                ["path", {
                    d: "M7 22V2l10 5-10 5"
                }]
            ]],
            _6 = ["svg", h, [
                ["path", {
                    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                }],
                ["line", {
                    x1: "4",
                    x2: "4",
                    y1: "22",
                    y2: "15"
                }]
            ]],
            a8 = ["svg", h, [
                ["path", {
                    d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
                }],
                ["path", {
                    d: "m5 22 14-4"
                }],
                ["path", {
                    d: "m5 18 14 4"
                }]
            ]],
            h8 = ["svg", h, [
                ["path", {
                    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                }]
            ]],
            t8 = ["svg", h, [
                ["path", {
                    d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
                }],
                ["path", {
                    d: "M7 2h11v4c0 2-2 2-2 4v1"
                }],
                ["line", {
                    x1: "11",
                    x2: "18",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            d8 = ["svg", h, [
                ["path", {
                    d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
                }],
                ["line", {
                    x1: "6",
                    x2: "18",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            c8 = ["svg", h, [
                ["path", {
                    d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"
                }],
                ["path", {
                    d: "M10 2v2.343"
                }],
                ["path", {
                    d: "M14 2v6.343"
                }],
                ["path", {
                    d: "M8.5 2h7"
                }],
                ["path", {
                    d: "M7 16h9"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            M8 = ["svg", h, [
                ["path", {
                    d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
                }],
                ["path", {
                    d: "M8.5 2h7"
                }],
                ["path", {
                    d: "M7 16h10"
                }]
            ]],
            e8 = ["svg", h, [
                ["path", {
                    d: "M10 2v7.31"
                }],
                ["path", {
                    d: "M14 9.3V1.99"
                }],
                ["path", {
                    d: "M8.5 2h7"
                }],
                ["path", {
                    d: "M14 9.3a6.5 6.5 0 1 1-4 0"
                }],
                ["path", {
                    d: "M5.52 16h12.96"
                }]
            ]],
            i8 = ["svg", h, [
                ["path", {
                    d: "m3 7 5 5-5 5V7"
                }],
                ["path", {
                    d: "m21 7-5 5 5 5V7"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "M12 14v2"
                }],
                ["path", {
                    d: "M12 8v2"
                }],
                ["path", {
                    d: "M12 2v2"
                }]
            ]],
            n8 = ["svg", h, [
                ["path", {
                    d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
                }],
                ["path", {
                    d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "M12 14v2"
                }],
                ["path", {
                    d: "M12 8v2"
                }],
                ["path", {
                    d: "M12 2v2"
                }]
            ]],
            p8 = ["svg", h, [
                ["path", {
                    d: "m17 3-5 5-5-5h10"
                }],
                ["path", {
                    d: "m17 21-5-5-5 5h10"
                }],
                ["path", {
                    d: "M4 12H2"
                }],
                ["path", {
                    d: "M10 12H8"
                }],
                ["path", {
                    d: "M16 12h-2"
                }],
                ["path", {
                    d: "M22 12h-2"
                }]
            ]],
            l8 = ["svg", h, [
                ["path", {
                    d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
                }],
                ["path", {
                    d: "M4 12H2"
                }],
                ["path", {
                    d: "M10 12H8"
                }],
                ["path", {
                    d: "M16 12h-2"
                }],
                ["path", {
                    d: "M22 12h-2"
                }]
            ]],
            v8 = ["svg", h, [
                ["path", {
                    d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "M12 10v12"
                }],
                ["path", {
                    d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
                }],
                ["path", {
                    d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
                }]
            ]],
            o8 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
                }],
                ["path", {
                    d: "M12 7.5V9"
                }],
                ["path", {
                    d: "M7.5 12H9"
                }],
                ["path", {
                    d: "M16.5 12H15"
                }],
                ["path", {
                    d: "M12 16.5V15"
                }],
                ["path", {
                    d: "m8 8 1.88 1.88"
                }],
                ["path", {
                    d: "M14.12 9.88 16 8"
                }],
                ["path", {
                    d: "m8 16 1.88-1.88"
                }],
                ["path", {
                    d: "M14.12 14.12 16 16"
                }]
            ]],
            s8 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }]
            ]],
            r8 = ["svg", h, [
                ["path", {
                    d: "M2 12h6"
                }],
                ["path", {
                    d: "M22 12h-6"
                }],
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "M12 8v2"
                }],
                ["path", {
                    d: "M12 14v2"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "m19 9-3 3 3 3"
                }],
                ["path", {
                    d: "m5 15 3-3-3-3"
                }]
            ]],
            g8 = ["svg", h, [
                ["path", {
                    d: "M12 22v-6"
                }],
                ["path", {
                    d: "M12 8V2"
                }],
                ["path", {
                    d: "M4 12H2"
                }],
                ["path", {
                    d: "M10 12H8"
                }],
                ["path", {
                    d: "M16 12h-2"
                }],
                ["path", {
                    d: "M22 12h-2"
                }],
                ["path", {
                    d: "m15 19-3-3-3 3"
                }],
                ["path", {
                    d: "m15 5-3 3-3-3"
                }]
            ]],
            y8 = ["svg", h, [
                ["circle", {
                    cx: "15",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
                }],
                ["path", {
                    d: "M15 11v-1"
                }],
                ["path", {
                    d: "M15 17v-2"
                }]
            ]],
            $8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "m9 13 2 2 4-4"
                }]
            ]],
            m8 = ["svg", h, [
                ["circle", {
                    cx: "16",
                    cy: "16",
                    r: "6"
                }],
                ["path", {
                    d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M16 14v2l1 1"
                }]
            ]],
            u8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M2 10h20"
                }]
            ]],
            C1 = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
                }],
                ["path", {
                    d: "m21.7 19.4-.9-.3"
                }],
                ["path", {
                    d: "m15.2 16.9-.9-.3"
                }],
                ["path", {
                    d: "m16.6 21.7.3-.9"
                }],
                ["path", {
                    d: "m19.1 15.2.3-.9"
                }],
                ["path", {
                    d: "m19.6 21.7-.4-1"
                }],
                ["path", {
                    d: "m16.8 15.3-.4-1"
                }],
                ["path", {
                    d: "m14.3 19.6 1-.4"
                }],
                ["path", {
                    d: "m20.7 16.8 1-.4"
                }]
            ]],
            C8 = ["svg", h, [
                ["path", {
                    d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "1"
                }]
            ]],
            H8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M12 10v6"
                }],
                ["path", {
                    d: "m15 13-3 3-3-3"
                }]
            ]],
            w8 = ["svg", h, [
                ["path", {
                    d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
                }],
                ["circle", {
                    cx: "13",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M18 19c-2.8 0-5-2.2-5-5v8"
                }],
                ["circle", {
                    cx: "20",
                    cy: "19",
                    r: "2"
                }]
            ]],
            V8 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "2"
                }],
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M14 13h3"
                }],
                ["path", {
                    d: "M7 13h3"
                }]
            ]],
            S8 = ["svg", h, [
                ["path", {
                    d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
                }],
                ["path", {
                    d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
                }]
            ]],
            A8 = ["svg", h, [
                ["path", {
                    d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
                }],
                ["path", {
                    d: "M2 13h10"
                }],
                ["path", {
                    d: "m9 16 3-3-3-3"
                }]
            ]],
            L8 = ["svg", h, [
                ["path", {
                    d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
                }],
                ["path", {
                    d: "M8 10v4"
                }],
                ["path", {
                    d: "M12 10v2"
                }],
                ["path", {
                    d: "M16 10v6"
                }]
            ]],
            f8 = ["svg", h, [
                ["circle", {
                    cx: "16",
                    cy: "20",
                    r: "2"
                }],
                ["path", {
                    d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "m22 14-4.5 4.5"
                }],
                ["path", {
                    d: "m21 15 1 1"
                }]
            ]],
            k8 = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "5",
                    x: "14",
                    y: "17",
                    rx: "1"
                }],
                ["path", {
                    d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
                }],
                ["path", {
                    d: "M20 17v-2a2 2 0 1 0-4 0v2"
                }]
            ]],
            P8 = ["svg", h, [
                ["path", {
                    d: "M9 13h6"
                }],
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }]
            ]],
            B8 = ["svg", h, [
                ["path", {
                    d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
                }],
                ["circle", {
                    cx: "14",
                    cy: "15",
                    r: "1"
                }]
            ]],
            F8 = ["svg", h, [
                ["path", {
                    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
                }]
            ]],
            D8 = ["svg", h, [
                ["path", {
                    d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
                }],
                ["path", {
                    d: "M2 13h10"
                }],
                ["path", {
                    d: "m5 10-3 3 3 3"
                }]
            ]],
            H1 = ["svg", h, [
                ["path", {
                    d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
                }],
                ["path", {
                    d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }]
            ]],
            Z8 = ["svg", h, [
                ["path", {
                    d: "M12 10v6"
                }],
                ["path", {
                    d: "M9 13h6"
                }],
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }]
            ]],
            R8 = ["svg", h, [
                ["path", {
                    d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "2"
                }],
                ["path", {
                    d: "M12 15v5"
                }]
            ]],
            q8 = ["svg", h, [
                ["circle", {
                    cx: "11.5",
                    cy: "12.5",
                    r: "2.5"
                }],
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M13.3 14.3 15 16"
                }]
            ]],
            T8 = ["svg", h, [
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "3"
                }],
                ["path", {
                    d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
                }],
                ["path", {
                    d: "m21 21-1.5-1.5"
                }]
            ]],
            z8 = ["svg", h, [
                ["path", {
                    d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
                }],
                ["path", {
                    d: "m8 16 3-3-3-3"
                }]
            ]],
            b8 = ["svg", h, [
                ["path", {
                    d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
                }],
                ["path", {
                    d: "M12 10v4h4"
                }],
                ["path", {
                    d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5"
                }],
                ["path", {
                    d: "M22 22v-4h-4"
                }],
                ["path", {
                    d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5"
                }]
            ]],
            x8 = ["svg", h, [
                ["path", {
                    d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
                }],
                ["path", {
                    d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
                }],
                ["path", {
                    d: "M3 5a2 2 0 0 0 2 2h3"
                }],
                ["path", {
                    d: "M3 3v13a2 2 0 0 0 2 2h3"
                }]
            ]],
            U8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M12 10v6"
                }],
                ["path", {
                    d: "m9 13 3-3 3 3"
                }]
            ]],
            O8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "m9.5 10.5 5 5"
                }],
                ["path", {
                    d: "m14.5 10.5-5 5"
                }]
            ]],
            G8 = ["svg", h, [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                }]
            ]],
            E8 = ["svg", h, [
                ["path", {
                    d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
                }],
                ["path", {
                    d: "M2 8v11a2 2 0 0 0 2 2h14"
                }]
            ]],
            W8 = ["svg", h, [
                ["path", {
                    d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
                }],
                ["path", {
                    d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
                }],
                ["path", {
                    d: "M16 17h4"
                }],
                ["path", {
                    d: "M4 13h4"
                }]
            ]],
            I8 = ["svg", h, [
                ["path", {
                    d: "M12 12H5a2 2 0 0 0-2 2v5"
                }],
                ["circle", {
                    cx: "13",
                    cy: "19",
                    r: "2"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"
                }]
            ]],
            X8 = ["svg", h, [
                ["polyline", {
                    points: "15 17 20 12 15 7"
                }],
                ["path", {
                    d: "M4 18v-2a4 4 0 0 1 4-4h12"
                }]
            ]],
            N8 = ["svg", h, [
                ["line", {
                    x1: "22",
                    x2: "2",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "22",
                    x2: "2",
                    y1: "18",
                    y2: "18"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "2",
                    y2: "22"
                }],
                ["line", {
                    x1: "18",
                    x2: "18",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            K8 = ["svg", h, [
                ["path", {
                    d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"
                }]
            ]],
            J8 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M16 16s-1.5-2-4-2-4 2-4 2"
                }],
                ["line", {
                    x1: "9",
                    x2: "9.01",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "9",
                    y2: "9"
                }]
            ]],
            j8 = ["svg", h, [
                ["line", {
                    x1: "3",
                    x2: "15",
                    y1: "22",
                    y2: "22"
                }],
                ["line", {
                    x1: "4",
                    x2: "14",
                    y1: "9",
                    y2: "9"
                }],
                ["path", {
                    d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"
                }],
                ["path", {
                    d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
                }]
            ]],
            Q8 = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["rect", {
                    width: "10",
                    height: "8",
                    x: "7",
                    y: "8",
                    rx: "1"
                }]
            ]],
            Y8 = ["svg", h, [
                ["path", {
                    d: "M2 7v10"
                }],
                ["path", {
                    d: "M6 5v14"
                }],
                ["rect", {
                    width: "12",
                    height: "18",
                    x: "10",
                    y: "3",
                    rx: "2"
                }]
            ]],
            _8 = ["svg", h, [
                ["path", {
                    d: "M2 3v18"
                }],
                ["rect", {
                    width: "12",
                    height: "18",
                    x: "6",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M22 3v18"
                }]
            ]],
            a7 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "14",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 21h1"
                }],
                ["path", {
                    d: "M9 21h1"
                }],
                ["path", {
                    d: "M14 21h1"
                }],
                ["path", {
                    d: "M19 21h1"
                }]
            ]],
            h7 = ["svg", h, [
                ["path", {
                    d: "M7 2h10"
                }],
                ["path", {
                    d: "M5 6h14"
                }],
                ["rect", {
                    width: "18",
                    height: "12",
                    x: "3",
                    y: "10",
                    rx: "2"
                }]
            ]],
            t7 = ["svg", h, [
                ["path", {
                    d: "M3 2h18"
                }],
                ["rect", {
                    width: "18",
                    height: "12",
                    x: "3",
                    y: "6",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 22h18"
                }]
            ]],
            d7 = ["svg", h, [
                ["line", {
                    x1: "6",
                    x2: "10",
                    y1: "11",
                    y2: "11"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "9",
                    y2: "13"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "18",
                    x2: "18.01",
                    y1: "10",
                    y2: "10"
                }],
                ["path", {
                    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
                }]
            ]],
            c7 = ["svg", h, [
                ["line", {
                    x1: "6",
                    x2: "10",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "10",
                    y2: "14"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "13",
                    y2: "13"
                }],
                ["line", {
                    x1: "18",
                    x2: "18.01",
                    y1: "11",
                    y2: "11"
                }],
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            M7 = ["svg", h, [
                ["path", {
                    d: "M8 6h10"
                }],
                ["path", {
                    d: "M6 12h9"
                }],
                ["path", {
                    d: "M11 18h7"
                }]
            ]],
            e7 = ["svg", h, [
                ["path", {
                    d: "m12 14 4-4"
                }],
                ["path", {
                    d: "M3.34 19a10 10 0 1 1 17.32 0"
                }]
            ]],
            i7 = ["svg", h, [
                ["path", {
                    d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"
                }],
                ["path", {
                    d: "m16 16 6-6"
                }],
                ["path", {
                    d: "m8 8 6-6"
                }],
                ["path", {
                    d: "m9 7 8 8"
                }],
                ["path", {
                    d: "m21 11-8-8"
                }]
            ]],
            n7 = ["svg", h, [
                ["path", {
                    d: "M6 3h12l4 6-10 13L2 9Z"
                }],
                ["path", {
                    d: "M11 3 8 9l4 13 4-13-3-6"
                }],
                ["path", {
                    d: "M2 9h20"
                }]
            ]],
            p7 = ["svg", h, [
                ["path", {
                    d: "M9 10h.01"
                }],
                ["path", {
                    d: "M15 10h.01"
                }],
                ["path", {
                    d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
                }]
            ]],
            l7 = ["svg", h, [
                ["rect", {
                    x: "3",
                    y: "8",
                    width: "18",
                    height: "4",
                    rx: "1"
                }],
                ["path", {
                    d: "M12 8v13"
                }],
                ["path", {
                    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
                }],
                ["path", {
                    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
                }]
            ]],
            v7 = ["svg", h, [
                ["path", {
                    d: "M6 3v12"
                }],
                ["path", {
                    d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                }],
                ["path", {
                    d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                }],
                ["path", {
                    d: "M15 6a9 9 0 0 0-9 9"
                }],
                ["path", {
                    d: "M18 15v6"
                }],
                ["path", {
                    d: "M21 18h-6"
                }]
            ]],
            o7 = ["svg", h, [
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "3",
                    y2: "15"
                }],
                ["circle", {
                    cx: "18",
                    cy: "6",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "M18 9a9 9 0 0 1-9 9"
                }]
            ]],
            w1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["line", {
                    x1: "3",
                    x2: "9",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "15",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            s7 = ["svg", h, [
                ["path", {
                    d: "M12 3v6"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M12 15v6"
                }]
            ]],
            r7 = ["svg", h, [
                ["circle", {
                    cx: "5",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M12 6h5a2 2 0 0 1 2 2v7"
                }],
                ["path", {
                    d: "m15 9-3-3 3-3"
                }],
                ["circle", {
                    cx: "19",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "M12 18H7a2 2 0 0 1-2-2V9"
                }],
                ["path", {
                    d: "m9 15 3 3-3 3"
                }]
            ]],
            g7 = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M13 6h3a2 2 0 0 1 2 2v7"
                }],
                ["path", {
                    d: "M11 18H8a2 2 0 0 1-2-2V9"
                }]
            ]],
            y7 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["circle", {
                    cx: "18",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
                }],
                ["path", {
                    d: "M12 12v3"
                }]
            ]],
            $7 = ["svg", h, [
                ["circle", {
                    cx: "5",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M5 9v6"
                }],
                ["circle", {
                    cx: "5",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "M12 3v18"
                }],
                ["circle", {
                    cx: "19",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M16 15.7A9 9 0 0 0 19 9"
                }]
            ]],
            m7 = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M6 21V9a9 9 0 0 0 9 9"
                }]
            ]],
            u7 = ["svg", h, [
                ["circle", {
                    cx: "5",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M5 9v12"
                }],
                ["circle", {
                    cx: "19",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "m15 9-3-3 3-3"
                }],
                ["path", {
                    d: "M12 6h5a2 2 0 0 1 2 2v7"
                }]
            ]],
            C7 = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M6 9v12"
                }],
                ["path", {
                    d: "m21 3-6 6"
                }],
                ["path", {
                    d: "m21 9-6-6"
                }],
                ["path", {
                    d: "M18 11.5V15"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }]
            ]],
            H7 = ["svg", h, [
                ["circle", {
                    cx: "5",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M5 9v12"
                }],
                ["path", {
                    d: "m15 9-3-3 3-3"
                }],
                ["path", {
                    d: "M12 6h5a2 2 0 0 1 2 2v3"
                }],
                ["path", {
                    d: "M19 15v6"
                }],
                ["path", {
                    d: "M22 18h-6"
                }]
            ]],
            w7 = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M6 9v12"
                }],
                ["path", {
                    d: "M13 6h3a2 2 0 0 1 2 2v3"
                }],
                ["path", {
                    d: "M18 15v6"
                }],
                ["path", {
                    d: "M21 18h-6"
                }]
            ]],
            V7 = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M18 6V5"
                }],
                ["path", {
                    d: "M18 11v-1"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "9",
                    y2: "21"
                }]
            ]],
            S7 = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M13 6h3a2 2 0 0 1 2 2v7"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "9",
                    y2: "21"
                }]
            ]],
            A7 = ["svg", h, [
                ["path", {
                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                }],
                ["path", {
                    d: "M9 18c-4.51 2-5-2-7-2"
                }]
            ]],
            L7 = ["svg", h, [
                ["path", {
                    d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
                }]
            ]],
            f7 = ["svg", h, [
                ["path", {
                    d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"
                }],
                ["path", {
                    d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"
                }]
            ]],
            k7 = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "15",
                    r: "4"
                }],
                ["circle", {
                    cx: "18",
                    cy: "15",
                    r: "4"
                }],
                ["path", {
                    d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
                }],
                ["path", {
                    d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
                }]
            ]],
            P7 = ["svg", h, [
                ["path", {
                    d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"
                }],
                ["path", {
                    d: "M2 12h8.5"
                }],
                ["path", {
                    d: "M20 6V4a2 2 0 1 0-4 0v2"
                }],
                ["rect", {
                    width: "8",
                    height: "5",
                    x: "14",
                    y: "6",
                    rx: "1"
                }]
            ]],
            B7 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                }],
                ["path", {
                    d: "M2 12h20"
                }]
            ]],
            F7 = ["svg", h, [
                ["path", {
                    d: "M12 13V2l8 4-8 4"
                }],
                ["path", {
                    d: "M20.561 10.222a9 9 0 1 1-12.55-5.29"
                }],
                ["path", {
                    d: "M8.002 9.997a5 5 0 1 0 8.9 2.02"
                }]
            ]],
            D7 = ["svg", h, [
                ["path", {
                    d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
                }],
                ["path", {
                    d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
                }],
                ["path", {
                    d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
                }]
            ]],
            Z7 = ["svg", h, [
                ["path", {
                    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
                }],
                ["path", {
                    d: "M22 10v6"
                }],
                ["path", {
                    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
                }]
            ]],
            R7 = ["svg", h, [
                ["path", {
                    d: "M22 5V2l-5.89 5.89"
                }],
                ["circle", {
                    cx: "16.6",
                    cy: "15.89",
                    r: "3"
                }],
                ["circle", {
                    cx: "8.11",
                    cy: "7.4",
                    r: "3"
                }],
                ["circle", {
                    cx: "12.35",
                    cy: "11.65",
                    r: "3"
                }],
                ["circle", {
                    cx: "13.91",
                    cy: "5.85",
                    r: "3"
                }],
                ["circle", {
                    cx: "18.15",
                    cy: "10.09",
                    r: "3"
                }],
                ["circle", {
                    cx: "6.56",
                    cy: "13.2",
                    r: "3"
                }],
                ["circle", {
                    cx: "10.8",
                    cy: "17.44",
                    r: "3"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "3"
                }]
            ]],
            q7 = ["svg", h, [
                ["path", {
                    d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4"
                }]
            ]],
            T7 = ["svg", h, [
                ["path", {
                    d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
                }],
                ["path", {
                    d: "m16 16 5 5"
                }],
                ["path", {
                    d: "m16 21 5-5"
                }]
            ]],
            V1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 12h18"
                }],
                ["path", {
                    d: "M12 3v18"
                }]
            ]],
            p = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "M9 3v18"
                }],
                ["path", {
                    d: "M15 3v18"
                }]
            ]],
            z7 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "9",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "9",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "9",
                    r: "1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "15",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "15",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "15",
                    r: "1"
                }]
            ]],
            b7 = ["svg", h, [
                ["circle", {
                    cx: "9",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "9",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "9",
                    cy: "19",
                    r: "1"
                }],
                ["circle", {
                    cx: "15",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "15",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "15",
                    cy: "19",
                    r: "1"
                }]
            ]],
            x7 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "5",
                    r: "1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "12",
                    cy: "19",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "19",
                    r: "1"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "1"
                }]
            ]],
            U7 = ["svg", h, [
                ["path", {
                    d: "M3 7V5c0-1.1.9-2 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2c1.1 0 2 .9 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2c0 1.1-.9 2-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5c-1.1 0-2-.9-2-2v-2"
                }],
                ["rect", {
                    width: "7",
                    height: "5",
                    x: "7",
                    y: "7",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "5",
                    x: "10",
                    y: "12",
                    rx: "1"
                }]
            ]],
            O7 = ["svg", h, [
                ["path", {
                    d: "m11.9 12.1 4.514-4.514"
                }],
                ["path", {
                    d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
                }],
                ["path", {
                    d: "m6 16 2 2"
                }],
                ["path", {
                    d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
                }],
                ["circle", {
                    cx: "11.5",
                    cy: "12.5",
                    r: ".5",
                    fill: "currentColor"
                }]
            ]],
            G7 = ["svg", h, [
                ["path", {
                    d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"
                }],
                ["path", {
                    d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"
                }],
                ["path", {
                    d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
                }],
                ["path", {
                    d: "m8.5 16.5-1-1"
                }]
            ]],
            E7 = ["svg", h, [
                ["path", {
                    d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"
                }],
                ["path", {
                    d: "m18 15 4-4"
                }],
                ["path", {
                    d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
                }]
            ]],
            W7 = ["svg", h, [
                ["path", {
                    d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
                }],
                ["path", {
                    d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
                }],
                ["path", {
                    d: "m2 16 6 6"
                }],
                ["circle", {
                    cx: "16",
                    cy: "9",
                    r: "2.9"
                }],
                ["circle", {
                    cx: "6",
                    cy: "5",
                    r: "3"
                }]
            ]],
            I7 = ["svg", h, [
                ["path", {
                    d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"
                }],
                ["path", {
                    d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
                }],
                ["path", {
                    d: "m2 15 6 6"
                }],
                ["path", {
                    d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
                }]
            ]],
            S1 = ["svg", h, [
                ["path", {
                    d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"
                }],
                ["path", {
                    d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
                }],
                ["path", {
                    d: "m2 13 6 6"
                }]
            ]],
            X7 = ["svg", h, [
                ["path", {
                    d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
                }],
                ["path", {
                    d: "M14 11V9a2 2 0 1 0-4 0v2"
                }],
                ["path", {
                    d: "M10 10.5V5a2 2 0 1 0-4 0v9"
                }],
                ["path", {
                    d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
                }]
            ]],
            N7 = ["svg", h, [
                ["path", {
                    d: "M12 3V2"
                }],
                ["path", {
                    d: "M5 10a7.1 7.1 0 0 1 14 0"
                }],
                ["path", {
                    d: "M4 10h16"
                }],
                ["path", {
                    d: "M2 14h12a2 2 0 1 1 0 4h-2"
                }],
                ["path", {
                    d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"
                }],
                ["path", {
                    d: "M5 14v7H2"
                }]
            ]],
            K7 = ["svg", h, [
                ["path", {
                    d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
                }],
                ["path", {
                    d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"
                }],
                ["path", {
                    d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
                }]
            ]],
            J7 = ["svg", h, [
                ["path", {
                    d: "m11 17 2 2a1 1 0 1 0 3-3"
                }],
                ["path", {
                    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
                }],
                ["path", {
                    d: "m21 3 1 11h-2"
                }],
                ["path", {
                    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
                }],
                ["path", {
                    d: "M3 4h8"
                }]
            ]],
            j7 = ["svg", h, [
                ["path", {
                    d: "M12 2v8"
                }],
                ["path", {
                    d: "m16 6-4 4-4-4"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "M10 18h.01"
                }]
            ]],
            Q7 = ["svg", h, [
                ["path", {
                    d: "m16 6-4-4-4 4"
                }],
                ["path", {
                    d: "M12 2v8"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "M10 18h.01"
                }]
            ]],
            Y7 = ["svg", h, [
                ["line", {
                    x1: "22",
                    x2: "2",
                    y1: "12",
                    y2: "12"
                }],
                ["path", {
                    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                }],
                ["line", {
                    x1: "6",
                    x2: "6.01",
                    y1: "16",
                    y2: "16"
                }],
                ["line", {
                    x1: "10",
                    x2: "10.01",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            _7 = ["svg", h, [
                ["path", {
                    d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
                }],
                ["path", {
                    d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
                }],
                ["path", {
                    d: "M4 15v-3a6 6 0 0 1 6-6"
                }],
                ["path", {
                    d: "M14 6a6 6 0 0 1 6 6v3"
                }]
            ]],
            aM = ["svg", h, [
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "15",
                    y2: "15"
                }],
                ["line", {
                    x1: "10",
                    x2: "8",
                    y1: "3",
                    y2: "21"
                }],
                ["line", {
                    x1: "16",
                    x2: "14",
                    y1: "3",
                    y2: "21"
                }]
            ]],
            hM = ["svg", h, [
                ["path", {
                    d: "m5.2 6.2 1.4 1.4"
                }],
                ["path", {
                    d: "M2 13h2"
                }],
                ["path", {
                    d: "M20 13h2"
                }],
                ["path", {
                    d: "m17.4 7.6 1.4-1.4"
                }],
                ["path", {
                    d: "M22 17H2"
                }],
                ["path", {
                    d: "M22 21H2"
                }],
                ["path", {
                    d: "M16 13a4 4 0 0 0-8 0"
                }],
                ["path", {
                    d: "M12 5V2.5"
                }]
            ]],
            tM = ["svg", h, [
                ["path", {
                    d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
                }],
                ["path", {
                    d: "M7.5 12h9"
                }]
            ]],
            dM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["path", {
                    d: "m17 12 3-2v8"
                }]
            ]],
            cM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["path", {
                    d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
                }]
            ]],
            MM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["path", {
                    d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"
                }]
            ]],
            eM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["path", {
                    d: "M17 10v4h4"
                }],
                ["path", {
                    d: "M21 10v8"
                }]
            ]],
            iM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["path", {
                    d: "M17 13v-3h4"
                }],
                ["path", {
                    d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
                }]
            ]],
            nM = ["svg", h, [
                ["path", {
                    d: "M4 12h8"
                }],
                ["path", {
                    d: "M4 18V6"
                }],
                ["path", {
                    d: "M12 18V6"
                }],
                ["circle", {
                    cx: "19",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "M20 10c-2 2-3 3.5-3 6"
                }]
            ]],
            pM = ["svg", h, [
                ["path", {
                    d: "M6 12h12"
                }],
                ["path", {
                    d: "M6 20V4"
                }],
                ["path", {
                    d: "M18 20V4"
                }]
            ]],
            lM = ["svg", h, [
                ["path", {
                    d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
                }]
            ]],
            vM = ["svg", h, [
                ["path", {
                    d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
                }],
                ["path", {
                    d: "M21 16v2a4 4 0 0 1-4 4h-5"
                }]
            ]],
            oM = ["svg", h, [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                }],
                ["path", {
                    d: "m12 13-1-1 2-2-3-3 2-2"
                }]
            ]],
            sM = ["svg", h, [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                }],
                ["path", {
                    d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
                }],
                ["path", {
                    d: "m18 15-2-2"
                }],
                ["path", {
                    d: "m15 18-2-2"
                }]
            ]],
            rM = ["svg", h, [
                ["line", {
                    x1: "2",
                    y1: "2",
                    x2: "22",
                    y2: "22"
                }],
                ["path", {
                    d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
                }],
                ["path", {
                    d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
                }]
            ]],
            gM = ["svg", h, [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                }],
                ["path", {
                    d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
                }]
            ]],
            yM = ["svg", h, [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                }]
            ]],
            $M = ["svg", h, [
                ["path", {
                    d: "M11 8c2-3-2-3 0-6"
                }],
                ["path", {
                    d: "M15.5 8c2-3-2-3 0-6"
                }],
                ["path", {
                    d: "M6 10h.01"
                }],
                ["path", {
                    d: "M6 14h.01"
                }],
                ["path", {
                    d: "M10 16v-4"
                }],
                ["path", {
                    d: "M14 16v-4"
                }],
                ["path", {
                    d: "M18 16v-4"
                }],
                ["path", {
                    d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
                }],
                ["path", {
                    d: "M5 20v2"
                }],
                ["path", {
                    d: "M19 20v2"
                }]
            ]],
            mM = ["svg", h, [
                ["path", {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                }]
            ]],
            uM = ["svg", h, [
                ["path", {
                    d: "m9 11-6 6v3h9l3-3"
                }],
                ["path", {
                    d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
                }]
            ]],
            CM = ["svg", h, [
                ["path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                }],
                ["path", {
                    d: "M3 3v5h5"
                }],
                ["path", {
                    d: "M12 7v5l4 2"
                }]
            ]],
            HM = ["svg", h, [
                ["path", {
                    d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"
                }],
                ["path", {
                    d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"
                }],
                ["path", {
                    d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"
                }],
                ["path", {
                    d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"
                }],
                ["path", {
                    d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"
                }],
                ["path", {
                    d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
                }],
                ["path", {
                    d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"
                }],
                ["path", {
                    d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            wM = ["svg", h, [
                ["path", {
                    d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"
                }],
                ["path", {
                    d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
                }],
                ["path", {
                    d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"
                }],
                ["path", {
                    d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"
                }],
                ["path", {
                    d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"
                }],
                ["path", {
                    d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"
                }],
                ["path", {
                    d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1"
                }],
                ["path", {
                    d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
                }]
            ]],
            VM = ["svg", h, [
                ["path", {
                    d: "M12 6v4"
                }],
                ["path", {
                    d: "M14 14h-4"
                }],
                ["path", {
                    d: "M14 18h-4"
                }],
                ["path", {
                    d: "M14 8h-4"
                }],
                ["path", {
                    d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"
                }]
            ]],
            SM = ["svg", h, [
                ["path", {
                    d: "M10 22v-6.57"
                }],
                ["path", {
                    d: "M12 11h.01"
                }],
                ["path", {
                    d: "M12 7h.01"
                }],
                ["path", {
                    d: "M14 15.43V22"
                }],
                ["path", {
                    d: "M15 16a5 5 0 0 0-6 0"
                }],
                ["path", {
                    d: "M16 11h.01"
                }],
                ["path", {
                    d: "M16 7h.01"
                }],
                ["path", {
                    d: "M8 11h.01"
                }],
                ["path", {
                    d: "M8 7h.01"
                }],
                ["rect", {
                    x: "4",
                    y: "2",
                    width: "16",
                    height: "20",
                    rx: "2"
                }]
            ]],
            AM = ["svg", h, [
                ["path", {
                    d: "M5 22h14"
                }],
                ["path", {
                    d: "M5 2h14"
                }],
                ["path", {
                    d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
                }],
                ["path", {
                    d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
                }]
            ]],
            LM = ["svg", h, [
                ["path", {
                    d: "M10 12V8.964"
                }],
                ["path", {
                    d: "M14 12V8.964"
                }],
                ["path", {
                    d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"
                }],
                ["path", {
                    d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
                }]
            ]],
            fM = ["svg", h, [
                ["path", {
                    d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
                }],
                ["path", {
                    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                }],
                ["path", {
                    d: "M15 6h6"
                }],
                ["path", {
                    d: "M18 3v6"
                }]
            ]],
            A1 = ["svg", h, [
                ["path", {
                    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                }],
                ["path", {
                    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }]
            ]],
            L1 = ["svg", h, [
                ["path", {
                    d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
                }],
                ["path", {
                    d: "M12.14 11a3.5 3.5 0 1 1 6.71 0"
                }],
                ["path", {
                    d: "M15.5 6.5a3.5 3.5 0 1 0-7 0"
                }]
            ]],
            f1 = ["svg", h, [
                ["path", {
                    d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"
                }],
                ["path", {
                    d: "M17 7A5 5 0 0 0 7 7"
                }],
                ["path", {
                    d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"
                }]
            ]],
            kM = ["svg", h, [
                ["path", {
                    d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
                }],
                ["path", {
                    d: "m14 19 3 3v-5.5"
                }],
                ["path", {
                    d: "m17 22 3-3"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }]
            ]],
            PM = ["svg", h, [
                ["path", {
                    d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "5",
                    y2: "5"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                }]
            ]],
            BM = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "M10.41 10.41a2 2 0 1 1-2.83-2.83"
                }],
                ["line", {
                    x1: "13.5",
                    x2: "6",
                    y1: "13.5",
                    y2: "21"
                }],
                ["line", {
                    x1: "18",
                    x2: "21",
                    y1: "12",
                    y2: "15"
                }],
                ["path", {
                    d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
                }],
                ["path", {
                    d: "M21 15V5a2 2 0 0 0-2-2H9"
                }]
            ]],
            FM = ["svg", h, [
                ["path", {
                    d: "m11 16-5 5"
                }],
                ["path", {
                    d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"
                }],
                ["path", {
                    d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }]
            ]],
            DM = ["svg", h, [
                ["path", {
                    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "5",
                    y2: "5"
                }],
                ["line", {
                    x1: "19",
                    x2: "19",
                    y1: "2",
                    y2: "8"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                }]
            ]],
            ZM = ["svg", h, [
                ["path", {
                    d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
                }],
                ["path", {
                    d: "m14 19.5 3-3 3 3"
                }],
                ["path", {
                    d: "M17 22v-5.5"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }]
            ]],
            RM = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                }]
            ]],
            qM = ["svg", h, [
                ["path", {
                    d: "M18 22H4a2 2 0 0 1-2-2V6"
                }],
                ["path", {
                    d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "2"
                }],
                ["rect", {
                    width: "16",
                    height: "16",
                    x: "6",
                    y: "2",
                    rx: "2"
                }]
            ]],
            TM = ["svg", h, [
                ["path", {
                    d: "M12 3v12"
                }],
                ["path", {
                    d: "m8 11 4 4 4-4"
                }],
                ["path", {
                    d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
                }]
            ]],
            zM = ["svg", h, [
                ["polyline", {
                    points: "22 12 16 12 14 15 10 15 8 12 2 12"
                }],
                ["path", {
                    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                }]
            ]],
            k1 = ["svg", h, [
                ["polyline", {
                    points: "7 8 3 12 7 16"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            P1 = ["svg", h, [
                ["polyline", {
                    points: "3 8 7 12 3 16"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "21",
                    x2: "11",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            bM = ["svg", h, [
                ["path", {
                    d: "M6 3h12"
                }],
                ["path", {
                    d: "M6 8h12"
                }],
                ["path", {
                    d: "m6 13 8.5 8"
                }],
                ["path", {
                    d: "M6 13h3"
                }],
                ["path", {
                    d: "M9 13c6.667 0 6.667-10 0-10"
                }]
            ]],
            xM = ["svg", h, [
                ["path", {
                    d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
                }]
            ]],
            UM = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M12 16v-4"
                }],
                ["path", {
                    d: "M12 8h.01"
                }]
            ]],
            OM = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 7h.01"
                }],
                ["path", {
                    d: "M17 7h.01"
                }],
                ["path", {
                    d: "M7 17h.01"
                }],
                ["path", {
                    d: "M17 17h.01"
                }]
            ]],
            GM = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "20",
                    x: "2",
                    y: "2",
                    rx: "5",
                    ry: "5"
                }],
                ["path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }],
                ["line", {
                    x1: "17.5",
                    x2: "17.51",
                    y1: "6.5",
                    y2: "6.5"
                }]
            ]],
            EM = ["svg", h, [
                ["line", {
                    x1: "19",
                    x2: "10",
                    y1: "4",
                    y2: "4"
                }],
                ["line", {
                    x1: "14",
                    x2: "5",
                    y1: "20",
                    y2: "20"
                }],
                ["line", {
                    x1: "15",
                    x2: "9",
                    y1: "4",
                    y2: "20"
                }]
            ]],
            WM = ["svg", h, [
                ["path", {
                    d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"
                }],
                ["polyline", {
                    points: "16 14 20 18 16 22"
                }]
            ]],
            IM = ["svg", h, [
                ["path", {
                    d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"
                }],
                ["polyline", {
                    points: "8 22 4 18 8 14"
                }]
            ]],
            XM = ["svg", h, [
                ["path", {
                    d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"
                }],
                ["path", {
                    d: "M6 15h12"
                }],
                ["path", {
                    d: "M6 11h12"
                }]
            ]],
            NM = ["svg", h, [
                ["path", {
                    d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
                }],
                ["path", {
                    d: "M6 15v-2"
                }],
                ["path", {
                    d: "M12 15V9"
                }],
                ["circle", {
                    cx: "12",
                    cy: "6",
                    r: "3"
                }]
            ]],
            KM = ["svg", h, [
                ["path", {
                    d: "M6 5v11"
                }],
                ["path", {
                    d: "M12 5v6"
                }],
                ["path", {
                    d: "M18 5v14"
                }]
            ]],
            JM = ["svg", h, [
                ["path", {
                    d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"
                }],
                ["circle", {
                    cx: "16.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }]
            ]],
            jM = ["svg", h, [
                ["path", {
                    d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"
                }],
                ["path", {
                    d: "m14 7 3 3"
                }],
                ["path", {
                    d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"
                }]
            ]],
            QM = ["svg", h, [
                ["path", {
                    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
                }],
                ["path", {
                    d: "m21 2-9.6 9.6"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "15.5",
                    r: "5.5"
                }]
            ]],
            YM = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M6 8h4"
                }],
                ["path", {
                    d: "M14 8h.01"
                }],
                ["path", {
                    d: "M18 8h.01"
                }],
                ["path", {
                    d: "M2 12h20"
                }],
                ["path", {
                    d: "M6 12v4"
                }],
                ["path", {
                    d: "M10 12v4"
                }],
                ["path", {
                    d: "M14 12v4"
                }],
                ["path", {
                    d: "M18 12v4"
                }]
            ]],
            _M = ["svg", h, [
                ["path", {
                    d: "M 20 4 A2 2 0 0 1 22 6"
                }],
                ["path", {
                    d: "M 22 6 L 22 16.41"
                }],
                ["path", {
                    d: "M 7 16 L 16 16"
                }],
                ["path", {
                    d: "M 9.69 4 L 20 4"
                }],
                ["path", {
                    d: "M14 8h.01"
                }],
                ["path", {
                    d: "M18 8h.01"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
                }],
                ["path", {
                    d: "M6 8h.01"
                }],
                ["path", {
                    d: "M8 12h.01"
                }]
            ]],
            ae = ["svg", h, [
                ["path", {
                    d: "M10 8h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M14 8h.01"
                }],
                ["path", {
                    d: "M16 12h.01"
                }],
                ["path", {
                    d: "M18 8h.01"
                }],
                ["path", {
                    d: "M6 8h.01"
                }],
                ["path", {
                    d: "M7 16h10"
                }],
                ["path", {
                    d: "M8 12h.01"
                }],
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }]
            ]],
            he = ["svg", h, [
                ["path", {
                    d: "M12 2v5"
                }],
                ["path", {
                    d: "M6 7h12l4 9H2l4-9Z"
                }],
                ["path", {
                    d: "M9.17 16a3 3 0 1 0 5.66 0"
                }]
            ]],
            te = ["svg", h, [
                ["path", {
                    d: "m14 5-3 3 2 7 8-8-7-2Z"
                }],
                ["path", {
                    d: "m14 5-3 3-3-3 3-3 3 3Z"
                }],
                ["path", {
                    d: "M9.5 6.5 4 12l3 6"
                }],
                ["path", {
                    d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"
                }]
            ]],
            de = ["svg", h, [
                ["path", {
                    d: "M9 2h6l3 7H6l3-7Z"
                }],
                ["path", {
                    d: "M12 9v13"
                }],
                ["path", {
                    d: "M9 22h6"
                }]
            ]],
            ce = ["svg", h, [
                ["path", {
                    d: "M11 13h6l3 7H8l3-7Z"
                }],
                ["path", {
                    d: "M14 13V8a2 2 0 0 0-2-2H8"
                }],
                ["path", {
                    d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"
                }]
            ]],
            Me = ["svg", h, [
                ["path", {
                    d: "M11 4h6l3 7H8l3-7Z"
                }],
                ["path", {
                    d: "M14 11v5a2 2 0 0 1-2 2H8"
                }],
                ["path", {
                    d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"
                }]
            ]],
            ee = ["svg", h, [
                ["path", {
                    d: "M8 2h8l4 10H4L8 2Z"
                }],
                ["path", {
                    d: "M12 12v6"
                }],
                ["path", {
                    d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"
                }]
            ]],
            ie = ["svg", h, [
                ["path", {
                    d: "m12 8 6-3-6-3v10"
                }],
                ["path", {
                    d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
                }],
                ["path", {
                    d: "m6.49 12.85 11.02 6.3"
                }],
                ["path", {
                    d: "M17.51 12.85 6.5 19.15"
                }]
            ]],
            ne = ["svg", h, [
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "22",
                    y2: "22"
                }],
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "18",
                    y2: "11"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "18",
                    y2: "11"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "18",
                    y2: "11"
                }],
                ["line", {
                    x1: "18",
                    x2: "18",
                    y1: "18",
                    y2: "11"
                }],
                ["polygon", {
                    points: "12 2 20 7 4 7"
                }]
            ]],
            pe = ["svg", h, [
                ["path", {
                    d: "m5 8 6 6"
                }],
                ["path", {
                    d: "m4 14 6-6 2-3"
                }],
                ["path", {
                    d: "M2 5h12"
                }],
                ["path", {
                    d: "M7 2h1"
                }],
                ["path", {
                    d: "m22 22-5-10-5 10"
                }],
                ["path", {
                    d: "M14 18h6"
                }]
            ]],
            B1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "12",
                    x: "3",
                    y: "4",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "20",
                    y2: "20"
                }]
            ]],
            le = ["svg", h, [
                ["path", {
                    d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
                }]
            ]],
            ve = ["svg", h, [
                ["path", {
                    d: "M7 22a5 5 0 0 1-2-4"
                }],
                ["path", {
                    d: "M7 16.93c.96.43 1.96.74 2.99.91"
                }],
                ["path", {
                    d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
                }],
                ["path", {
                    d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                }],
                ["path", {
                    d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
                }]
            ]],
            oe = ["svg", h, [
                ["path", {
                    d: "M7 22a5 5 0 0 1-2-4"
                }],
                ["path", {
                    d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
                }],
                ["path", {
                    d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                }]
            ]],
            se = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"
                }],
                ["line", {
                    x1: "9",
                    x2: "9.01",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "9",
                    y2: "9"
                }]
            ]],
            re = ["svg", h, [
                ["path", {
                    d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
                }],
                ["path", {
                    d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
                }]
            ]],
            ge = ["svg", h, [
                ["path", {
                    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                }],
                ["path", {
                    d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
                }],
                ["path", {
                    d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
                }]
            ]],
            ye = ["svg", h, [
                ["path", {
                    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                }],
                ["path", {
                    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
                }],
                ["path", {
                    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
                }]
            ]],
            $e = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "9",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "5",
                    x: "14",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "9",
                    x: "14",
                    y: "12",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "5",
                    x: "3",
                    y: "16",
                    rx: "1"
                }]
            ]],
            me = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "14",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "3",
                    y: "14",
                    rx: "1"
                }]
            ]],
            ue = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "3",
                    y: "14",
                    rx: "1"
                }],
                ["path", {
                    d: "M14 4h7"
                }],
                ["path", {
                    d: "M14 9h7"
                }],
                ["path", {
                    d: "M14 15h7"
                }],
                ["path", {
                    d: "M14 20h7"
                }]
            ]],
            Ce = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "14",
                    rx: "1"
                }]
            ]],
            He = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "7",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "3",
                    y: "14",
                    rx: "1"
                }],
                ["rect", {
                    width: "7",
                    height: "7",
                    x: "14",
                    y: "14",
                    rx: "1"
                }]
            ]],
            we = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "7",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "9",
                    height: "7",
                    x: "3",
                    y: "14",
                    rx: "1"
                }],
                ["rect", {
                    width: "5",
                    height: "7",
                    x: "16",
                    y: "14",
                    rx: "1"
                }]
            ]],
            Ve = ["svg", h, [
                ["path", {
                    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                }],
                ["path", {
                    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                }]
            ]],
            Se = ["svg", h, [
                ["path", {
                    d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
                }],
                ["path", {
                    d: "M2 22 17 7"
                }]
            ]],
            Ae = ["svg", h, [
                ["path", {
                    d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
                }],
                ["path", {
                    d: "M18 6V3a1 1 0 0 0-1-1h-3"
                }],
                ["rect", {
                    width: "8",
                    height: "12",
                    x: "8",
                    y: "10",
                    rx: "1"
                }]
            ]],
            Le = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["path", {
                    d: "M7 3v18"
                }],
                ["path", {
                    d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
                }]
            ]],
            fe = ["svg", h, [
                ["path", {
                    d: "m16 6 4 14"
                }],
                ["path", {
                    d: "M12 6v14"
                }],
                ["path", {
                    d: "M8 8v12"
                }],
                ["path", {
                    d: "M4 4v16"
                }]
            ]],
            ke = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "m4.93 4.93 4.24 4.24"
                }],
                ["path", {
                    d: "m14.83 9.17 4.24-4.24"
                }],
                ["path", {
                    d: "m14.83 14.83 4.24 4.24"
                }],
                ["path", {
                    d: "m9.17 14.83-4.24 4.24"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }]
            ]],
            Pe = ["svg", h, [
                ["path", {
                    d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"
                }],
                ["path", {
                    d: "M6 12h4"
                }],
                ["path", {
                    d: "M14 12h2v8"
                }],
                ["path", {
                    d: "M6 20h4"
                }],
                ["path", {
                    d: "M14 20h4"
                }]
            ]],
            Be = ["svg", h, [
                ["path", {
                    d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
                }],
                ["path", {
                    d: "M9 18h6"
                }],
                ["path", {
                    d: "M10 22h4"
                }]
            ]],
            Fe = ["svg", h, [
                ["path", {
                    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                }],
                ["path", {
                    d: "M9 18h6"
                }],
                ["path", {
                    d: "M10 22h4"
                }]
            ]],
            De = ["svg", h, [
                ["path", {
                    d: "M3 3v18h18"
                }],
                ["path", {
                    d: "m19 9-5 5-4-4-3 3"
                }]
            ]],
            Ze = ["svg", h, [
                ["path", {
                    d: "M9 17H7A5 5 0 0 1 7 7"
                }],
                ["path", {
                    d: "M15 7h2a5 5 0 0 1 4 8"
                }],
                ["line", {
                    x1: "8",
                    x2: "12",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Re = ["svg", h, [
                ["path", {
                    d: "M9 17H7A5 5 0 0 1 7 7h2"
                }],
                ["path", {
                    d: "M15 7h2a5 5 0 1 1 0 10h-2"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            qe = ["svg", h, [
                ["path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                }],
                ["path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                }]
            ]],
            Te = ["svg", h, [
                ["path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }],
                ["rect", {
                    width: "4",
                    height: "12",
                    x: "2",
                    y: "9"
                }],
                ["circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }]
            ]],
            ze = ["svg", h, [
                ["path", {
                    d: "m3 17 2 2 4-4"
                }],
                ["path", {
                    d: "m3 7 2 2 4-4"
                }],
                ["path", {
                    d: "M13 6h8"
                }],
                ["path", {
                    d: "M13 12h8"
                }],
                ["path", {
                    d: "M13 18h8"
                }]
            ]],
            be = ["svg", h, [
                ["path", {
                    d: "m3 10 2.5-2.5L3 5"
                }],
                ["path", {
                    d: "m3 19 2.5-2.5L3 14"
                }],
                ["path", {
                    d: "M10 6h11"
                }],
                ["path", {
                    d: "M10 12h11"
                }],
                ["path", {
                    d: "M10 18h11"
                }]
            ]],
            xe = ["svg", h, [
                ["path", {
                    d: "M16 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M10 18H3"
                }],
                ["path", {
                    d: "M21 6v10a2 2 0 0 1-2 2h-5"
                }],
                ["path", {
                    d: "m16 16-2 2 2 2"
                }]
            ]],
            Ue = ["svg", h, [
                ["path", {
                    d: "M3 6h18"
                }],
                ["path", {
                    d: "M7 12h10"
                }],
                ["path", {
                    d: "M10 18h4"
                }]
            ]],
            Oe = ["svg", h, [
                ["path", {
                    d: "M11 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M16 18H3"
                }],
                ["path", {
                    d: "M21 12h-6"
                }]
            ]],
            Ge = ["svg", h, [
                ["path", {
                    d: "M21 15V6"
                }],
                ["path", {
                    d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                }],
                ["path", {
                    d: "M12 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M12 18H3"
                }]
            ]],
            Ee = ["svg", h, [
                ["line", {
                    x1: "10",
                    x2: "21",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "10",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "10",
                    x2: "21",
                    y1: "18",
                    y2: "18"
                }],
                ["path", {
                    d: "M4 6h1v4"
                }],
                ["path", {
                    d: "M4 10h2"
                }],
                ["path", {
                    d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
                }]
            ]],
            We = ["svg", h, [
                ["path", {
                    d: "M11 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M16 18H3"
                }],
                ["path", {
                    d: "M18 9v6"
                }],
                ["path", {
                    d: "M21 12h-6"
                }]
            ]],
            Ie = ["svg", h, [
                ["path", {
                    d: "M21 6H3"
                }],
                ["path", {
                    d: "M7 12H3"
                }],
                ["path", {
                    d: "M7 18H3"
                }],
                ["path", {
                    d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
                }],
                ["path", {
                    d: "M11 10v4h4"
                }]
            ]],
            Xe = ["svg", h, [
                ["path", {
                    d: "M16 12H3"
                }],
                ["path", {
                    d: "M16 18H3"
                }],
                ["path", {
                    d: "M10 6H3"
                }],
                ["path", {
                    d: "M21 18V8a2 2 0 0 0-2-2h-5"
                }],
                ["path", {
                    d: "m16 8-2-2 2-2"
                }]
            ]],
            Ne = ["svg", h, [
                ["rect", {
                    x: "3",
                    y: "5",
                    width: "6",
                    height: "6",
                    rx: "1"
                }],
                ["path", {
                    d: "m3 17 2 2 4-4"
                }],
                ["path", {
                    d: "M13 6h8"
                }],
                ["path", {
                    d: "M13 12h8"
                }],
                ["path", {
                    d: "M13 18h8"
                }]
            ]],
            Ke = ["svg", h, [
                ["path", {
                    d: "M21 12h-8"
                }],
                ["path", {
                    d: "M21 6H8"
                }],
                ["path", {
                    d: "M21 18h-8"
                }],
                ["path", {
                    d: "M3 6v4c0 1.1.9 2 2 2h3"
                }],
                ["path", {
                    d: "M3 10v6c0 1.1.9 2 2 2h3"
                }]
            ]],
            Je = ["svg", h, [
                ["path", {
                    d: "M12 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M12 18H3"
                }],
                ["path", {
                    d: "m16 12 5 3-5 3v-6Z"
                }]
            ]],
            je = ["svg", h, [
                ["path", {
                    d: "M11 12H3"
                }],
                ["path", {
                    d: "M16 6H3"
                }],
                ["path", {
                    d: "M16 18H3"
                }],
                ["path", {
                    d: "m19 10-4 4"
                }],
                ["path", {
                    d: "m15 10 4 4"
                }]
            ]],
            Qe = ["svg", h, [
                ["line", {
                    x1: "8",
                    x2: "21",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "8",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "8",
                    x2: "21",
                    y1: "18",
                    y2: "18"
                }],
                ["line", {
                    x1: "3",
                    x2: "3.01",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "3",
                    x2: "3.01",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "3",
                    x2: "3.01",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            F1 = ["svg", h, [
                ["path", {
                    d: "M21 12a9 9 0 1 1-6.219-8.56"
                }]
            ]],
            Ye = ["svg", h, [
                ["path", {
                    d: "M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5"
                }],
                ["path", {
                    d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"
                }],
                ["path", {
                    d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }]
            ]],
            _e = ["svg", h, [
                ["path", {
                    d: "M12 2v4"
                }],
                ["path", {
                    d: "m16.2 7.8 2.9-2.9"
                }],
                ["path", {
                    d: "M18 12h4"
                }],
                ["path", {
                    d: "m16.2 16.2 2.9 2.9"
                }],
                ["path", {
                    d: "M12 18v4"
                }],
                ["path", {
                    d: "m4.9 19.1 2.9-2.9"
                }],
                ["path", {
                    d: "M2 12h4"
                }],
                ["path", {
                    d: "m4.9 4.9 2.9 2.9"
                }]
            ]],
            ai = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "5",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "19",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "5"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "19",
                    y2: "22"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "7"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }]
            ]],
            hi = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "5",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "19",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "5"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "19",
                    y2: "22"
                }],
                ["path", {
                    d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
                }],
                ["path", {
                    d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            ti = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "5",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "19",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "5"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "19",
                    y2: "22"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "7"
                }]
            ]],
            D1 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "16",
                    r: "1"
                }],
                ["rect", {
                    width: "18",
                    height: "12",
                    x: "3",
                    y: "10",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 10V7a5 5 0 0 1 9.33-2.5"
                }]
            ]],
            di = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "16",
                    r: "1"
                }],
                ["rect", {
                    x: "3",
                    y: "10",
                    width: "18",
                    height: "12",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 10V7a5 5 0 0 1 10 0v3"
                }]
            ]],
            Z1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "11",
                    x: "3",
                    y: "11",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M7 11V7a5 5 0 0 1 9.9-1"
                }]
            ]],
            ci = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "11",
                    x: "3",
                    y: "11",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }]
            ]],
            Mi = ["svg", h, [
                ["path", {
                    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                }],
                ["polyline", {
                    points: "10 17 15 12 10 7"
                }],
                ["line", {
                    x1: "15",
                    x2: "3",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            ei = ["svg", h, [
                ["path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                }],
                ["polyline", {
                    points: "16 17 21 12 16 7"
                }],
                ["line", {
                    x1: "21",
                    x2: "9",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            ii = ["svg", h, [
                ["path", {
                    d: "M13 12h8"
                }],
                ["path", {
                    d: "M13 18h8"
                }],
                ["path", {
                    d: "M13 6h8"
                }],
                ["path", {
                    d: "M3 12h1"
                }],
                ["path", {
                    d: "M3 18h1"
                }],
                ["path", {
                    d: "M3 6h1"
                }],
                ["path", {
                    d: "M8 12h1"
                }],
                ["path", {
                    d: "M8 18h1"
                }],
                ["path", {
                    d: "M8 6h1"
                }]
            ]],
            ni = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }],
                ["path", {
                    d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
                }]
            ]],
            pi = ["svg", h, [
                ["path", {
                    d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
                }],
                ["path", {
                    d: "M10 20h4"
                }],
                ["circle", {
                    cx: "16",
                    cy: "20",
                    r: "2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "20",
                    r: "2"
                }]
            ]],
            li = ["svg", h, [
                ["path", {
                    d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
                }],
                ["path", {
                    d: "m5 8 4 4"
                }],
                ["path", {
                    d: "m12 15 4 4"
                }]
            ]],
            vi = ["svg", h, [
                ["path", {
                    d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4"
                }]
            ]],
            oi = ["svg", h, [
                ["path", {
                    d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "M16 19h6"
                }]
            ]],
            si = ["svg", h, [
                ["path", {
                    d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
                }],
                ["path", {
                    d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
                }]
            ]],
            ri = ["svg", h, [
                ["path", {
                    d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "M19 16v6"
                }],
                ["path", {
                    d: "M16 19h6"
                }]
            ]],
            gi = ["svg", h, [
                ["path", {
                    d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
                }],
                ["path", {
                    d: "M20 22v.01"
                }]
            ]],
            yi = ["svg", h, [
                ["path", {
                    d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "m22 22-1.5-1.5"
                }]
            ]],
            $i = ["svg", h, [
                ["path", {
                    d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "M20 14v4"
                }],
                ["path", {
                    d: "M20 22v.01"
                }]
            ]],
            mi = ["svg", h, [
                ["path", {
                    d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }],
                ["path", {
                    d: "m17 17 4 4"
                }],
                ["path", {
                    d: "m21 17-4 4"
                }]
            ]],
            ui = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }]
            ]],
            Ci = ["svg", h, [
                ["path", {
                    d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
                }],
                ["polyline", {
                    points: "15,9 18,9 18,11"
                }],
                ["path", {
                    d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"
                }],
                ["line", {
                    x1: "6",
                    x2: "7",
                    y1: "10",
                    y2: "10"
                }]
            ]],
            Hi = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "13",
                    x: "6",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
                }],
                ["path", {
                    d: "M2 8v11c0 1.1.9 2 2 2h14"
                }]
            ]],
            wi = ["svg", h, [
                ["path", {
                    d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"
                }],
                ["path", {
                    d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"
                }],
                ["path", {
                    d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"
                }],
                ["path", {
                    d: "M14.9 9.25a3 3 0 0 0-2.15-2.16"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Vi = ["svg", h, [
                ["path", {
                    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }]
            ]],
            Si = ["svg", h, [
                ["path", {
                    d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"
                }]
            ]],
            Ai = ["svg", h, [
                ["path", {
                    d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                }],
                ["path", {
                    d: "M15 5.764v15"
                }],
                ["path", {
                    d: "M9 3.236v15"
                }]
            ]],
            Li = ["svg", h, [
                ["path", {
                    d: "M8 22h8"
                }],
                ["path", {
                    d: "M12 11v11"
                }],
                ["path", {
                    d: "m19 3-7 8-7-8Z"
                }]
            ]],
            fi = ["svg", h, [
                ["polyline", {
                    points: "15 3 21 3 21 9"
                }],
                ["polyline", {
                    points: "9 21 3 21 3 15"
                }],
                ["line", {
                    x1: "21",
                    x2: "14",
                    y1: "3",
                    y2: "10"
                }],
                ["line", {
                    x1: "3",
                    x2: "10",
                    y1: "21",
                    y2: "14"
                }]
            ]],
            ki = ["svg", h, [
                ["path", {
                    d: "M8 3H5a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M21 8V5a2 2 0 0 0-2-2h-3"
                }],
                ["path", {
                    d: "M3 16v3a2 2 0 0 0 2 2h3"
                }],
                ["path", {
                    d: "M16 21h3a2 2 0 0 0 2-2v-3"
                }]
            ]],
            Pi = ["svg", h, [
                ["path", {
                    d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
                }],
                ["path", {
                    d: "M11 12 5.12 2.2"
                }],
                ["path", {
                    d: "m13 12 5.88-9.8"
                }],
                ["path", {
                    d: "M8 7h8"
                }],
                ["circle", {
                    cx: "12",
                    cy: "17",
                    r: "5"
                }],
                ["path", {
                    d: "M12 18v-2h-.5"
                }]
            ]],
            Bi = ["svg", h, [
                ["path", {
                    d: "M9.26 9.26 3 11v3l14.14 3.14"
                }],
                ["path", {
                    d: "M21 15.34V6l-7.31 2.03"
                }],
                ["path", {
                    d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Fi = ["svg", h, [
                ["path", {
                    d: "m3 11 18-5v12L3 14v-3z"
                }],
                ["path", {
                    d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
                }]
            ]],
            Di = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "15",
                    y2: "15"
                }],
                ["line", {
                    x1: "9",
                    x2: "9.01",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "9",
                    y2: "9"
                }]
            ]],
            Zi = ["svg", h, [
                ["path", {
                    d: "M6 19v-3"
                }],
                ["path", {
                    d: "M10 19v-3"
                }],
                ["path", {
                    d: "M14 19v-3"
                }],
                ["path", {
                    d: "M18 19v-3"
                }],
                ["path", {
                    d: "M8 11V9"
                }],
                ["path", {
                    d: "M16 11V9"
                }],
                ["path", {
                    d: "M12 11V9"
                }],
                ["path", {
                    d: "M2 15h20"
                }],
                ["path", {
                    d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
                }]
            ]],
            Ri = ["svg", h, [
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            qi = ["svg", h, [
                ["path", {
                    d: "m8 6 4-4 4 4"
                }],
                ["path", {
                    d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
                }],
                ["path", {
                    d: "m20 22-5-5"
                }]
            ]],
            Ti = ["svg", h, [
                ["path", {
                    d: "M10 9.5 8 12l2 2.5"
                }],
                ["path", {
                    d: "m14 9.5 2 2.5-2 2.5"
                }],
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z"
                }]
            ]],
            zi = ["svg", h, [
                ["path", {
                    d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"
                }],
                ["path", {
                    d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"
                }],
                ["path", {
                    d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"
                }],
                ["path", {
                    d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"
                }],
                ["path", {
                    d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"
                }],
                ["path", {
                    d: "M3.5 17.5 2 22l4.5-1.5"
                }],
                ["path", {
                    d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"
                }],
                ["path", {
                    d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"
                }]
            ]],
            bi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
                }]
            ]],
            xi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "M8 12h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M16 12h.01"
                }]
            ]],
            Ui = ["svg", h, [
                ["path", {
                    d: "M20.5 14.9A9 9 0 0 0 9.1 3.5"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"
                }]
            ]],
            Oi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "M12 8v8"
                }]
            ]],
            Gi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                }],
                ["path", {
                    d: "M12 17h.01"
                }]
            ]],
            Ei = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "m10 15-3-3 3-3"
                }],
                ["path", {
                    d: "M7 12h7a2 2 0 0 1 2 2v1"
                }]
            ]],
            Wi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "M12 8v4"
                }],
                ["path", {
                    d: "M12 16h.01"
                }]
            ]],
            Ii = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "m9 9 6 6"
                }]
            ]],
            Xi = ["svg", h, [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                }]
            ]],
            Ni = ["svg", h, [
                ["path", {
                    d: "M10 7.5 8 10l2 2.5"
                }],
                ["path", {
                    d: "m14 7.5 2 2.5-2 2.5"
                }],
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }]
            ]],
            Ki = ["svg", h, [
                ["path", {
                    d: "M3 6V5c0-1.1.9-2 2-2h2"
                }],
                ["path", {
                    d: "M11 3h3"
                }],
                ["path", {
                    d: "M18 3h1c1.1 0 2 .9 2 2"
                }],
                ["path", {
                    d: "M21 9v2"
                }],
                ["path", {
                    d: "M21 15c0 1.1-.9 2-2 2h-1"
                }],
                ["path", {
                    d: "M14 17h-3"
                }],
                ["path", {
                    d: "m7 17-4 4v-5"
                }],
                ["path", {
                    d: "M3 12v-2"
                }]
            ]],
            Ji = ["svg", h, [
                ["path", {
                    d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M9 10h6"
                }],
                ["path", {
                    d: "M12 7v6"
                }],
                ["path", {
                    d: "M9 17h6"
                }]
            ]],
            ji = ["svg", h, [
                ["path", {
                    d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
                }],
                ["circle", {
                    cx: "18",
                    cy: "6",
                    r: "3"
                }]
            ]],
            Qi = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
                }]
            ]],
            Yi = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M8 10h.01"
                }],
                ["path", {
                    d: "M12 10h.01"
                }],
                ["path", {
                    d: "M16 10h.01"
                }]
            ]],
            _i = ["svg", h, [
                ["path", {
                    d: "M21 15V5a2 2 0 0 0-2-2H9"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"
                }]
            ]],
            an = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M12 7v6"
                }],
                ["path", {
                    d: "M9 10h6"
                }]
            ]],
            hn = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M8 12a2 2 0 0 0 2-2V8H8"
                }],
                ["path", {
                    d: "M14 12a2 2 0 0 0 2-2V8h-2"
                }]
            ]],
            tn = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "m10 7-3 3 3 3"
                }],
                ["path", {
                    d: "M17 13v-1a2 2 0 0 0-2-2H7"
                }]
            ]],
            dn = ["svg", h, [
                ["path", {
                    d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"
                }],
                ["path", {
                    d: "M16 3h5v5"
                }],
                ["path", {
                    d: "m16 8 5-5"
                }]
            ]],
            cn = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M13 8H7"
                }],
                ["path", {
                    d: "M17 12H7"
                }]
            ]],
            Mn = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M12 7v2"
                }],
                ["path", {
                    d: "M12 13h.01"
                }]
            ]],
            en = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "m14.5 7.5-5 5"
                }],
                ["path", {
                    d: "m9.5 7.5 5 5"
                }]
            ]],
            nn = ["svg", h, [
                ["path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }]
            ]],
            pn = ["svg", h, [
                ["path", {
                    d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"
                }],
                ["path", {
                    d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
                }]
            ]],
            ln = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
                }],
                ["path", {
                    d: "M5 10v2a7 7 0 0 0 12 5"
                }],
                ["path", {
                    d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
                }],
                ["path", {
                    d: "M9 9v3a3 3 0 0 0 5.12 2.12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "19",
                    y2: "22"
                }]
            ]],
            R1 = ["svg", h, [
                ["path", {
                    d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"
                }],
                ["path", {
                    d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
                }],
                ["circle", {
                    cx: "16",
                    cy: "7",
                    r: "5"
                }]
            ]],
            vn = ["svg", h, [
                ["path", {
                    d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                }],
                ["path", {
                    d: "M19 10v2a7 7 0 0 1-14 0v-2"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "19",
                    y2: "22"
                }]
            ]],
            on = ["svg", h, [
                ["path", {
                    d: "M6 18h8"
                }],
                ["path", {
                    d: "M3 22h18"
                }],
                ["path", {
                    d: "M14 22a7 7 0 1 0 0-14h-1"
                }],
                ["path", {
                    d: "M9 14h2"
                }],
                ["path", {
                    d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
                }],
                ["path", {
                    d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                }]
            ]],
            sn = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "15",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["rect", {
                    width: "8",
                    height: "7",
                    x: "6",
                    y: "8",
                    rx: "1"
                }],
                ["path", {
                    d: "M18 8v7"
                }],
                ["path", {
                    d: "M6 19v2"
                }],
                ["path", {
                    d: "M18 19v2"
                }]
            ]],
            rn = ["svg", h, [
                ["path", {
                    d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"
                }],
                ["path", {
                    d: "M12 13v8"
                }],
                ["path", {
                    d: "M12 3v3"
                }]
            ]],
            gn = ["svg", h, [
                ["path", {
                    d: "M8 2h8"
                }],
                ["path", {
                    d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
                }],
                ["path", {
                    d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            yn = ["svg", h, [
                ["path", {
                    d: "M8 2h8"
                }],
                ["path", {
                    d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
                }],
                ["path", {
                    d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
                }]
            ]],
            $n = ["svg", h, [
                ["polyline", {
                    points: "4 14 10 14 10 20"
                }],
                ["polyline", {
                    points: "20 10 14 10 14 4"
                }],
                ["line", {
                    x1: "14",
                    x2: "21",
                    y1: "10",
                    y2: "3"
                }],
                ["line", {
                    x1: "3",
                    x2: "10",
                    y1: "21",
                    y2: "14"
                }]
            ]],
            mn = ["svg", h, [
                ["path", {
                    d: "M8 3v3a2 2 0 0 1-2 2H3"
                }],
                ["path", {
                    d: "M21 8h-3a2 2 0 0 1-2-2V3"
                }],
                ["path", {
                    d: "M3 16h3a2 2 0 0 1 2 2v3"
                }],
                ["path", {
                    d: "M16 21v-3a2 2 0 0 1 2-2h3"
                }]
            ]],
            un = ["svg", h, [
                ["path", {
                    d: "M5 12h14"
                }]
            ]],
            Cn = ["svg", h, [
                ["path", {
                    d: "m9 10 2 2 4-4"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            Hn = ["svg", h, [
                ["circle", {
                    cx: "19",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            wn = ["svg", h, [
                ["path", {
                    d: "M12 13V7"
                }],
                ["path", {
                    d: "m15 10-3 3-3-3"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            Vn = ["svg", h, [
                ["path", {
                    d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"
                }],
                ["path", {
                    d: "M22 15V5a2 2 0 0 0-2-2H9"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            Sn = ["svg", h, [
                ["path", {
                    d: "M10 13V7"
                }],
                ["path", {
                    d: "M14 13V7"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            An = ["svg", h, [
                ["path", {
                    d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2"
                }]
            ]],
            Ln = ["svg", h, [
                ["path", {
                    d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
                }],
                ["path", {
                    d: "M10 19v-3.96 3.15"
                }],
                ["path", {
                    d: "M7 19h5"
                }],
                ["rect", {
                    width: "6",
                    height: "10",
                    x: "16",
                    y: "12",
                    rx: "2"
                }]
            ]],
            fn = ["svg", h, [
                ["path", {
                    d: "M5.5 20H8"
                }],
                ["path", {
                    d: "M17 9h.01"
                }],
                ["rect", {
                    width: "10",
                    height: "16",
                    x: "12",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"
                }],
                ["circle", {
                    cx: "17",
                    cy: "15",
                    r: "1"
                }]
            ]],
            kn = ["svg", h, [
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2"
                }],
                ["rect", {
                    x: "9",
                    y: "7",
                    width: "6",
                    height: "6",
                    rx: "1"
                }]
            ]],
            Pn = ["svg", h, [
                ["path", {
                    d: "m9 10 3-3 3 3"
                }],
                ["path", {
                    d: "M12 13V7"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            Bn = ["svg", h, [
                ["path", {
                    d: "m14.5 12.5-5-5"
                }],
                ["path", {
                    d: "m9.5 12.5 5-5"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "M8 21h8"
                }]
            ]],
            Fn = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "21",
                    y2: "21"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "17",
                    y2: "21"
                }]
            ]],
            Dn = ["svg", h, [
                ["path", {
                    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"
                }],
                ["path", {
                    d: "M20 3v4"
                }],
                ["path", {
                    d: "M22 5h-4"
                }]
            ]],
            Zn = ["svg", h, [
                ["path", {
                    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                }]
            ]],
            Rn = ["svg", h, [
                ["path", {
                    d: "m8 3 4 8 5-5 5 15H2L8 3z"
                }],
                ["path", {
                    d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
                }]
            ]],
            qn = ["svg", h, [
                ["path", {
                    d: "m8 3 4 8 5-5 5 15H2L8 3z"
                }]
            ]],
            Tn = ["svg", h, [
                ["path", {
                    d: "M12 6v.343"
                }],
                ["path", {
                    d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"
                }],
                ["path", {
                    d: "M19 13.343V9A7 7 0 0 0 8.56 2.902"
                }],
                ["path", {
                    d: "M22 22 2 2"
                }]
            ]],
            zn = ["svg", h, [
                ["path", {
                    d: "m4 4 7.07 17 2.51-7.39L21 11.07z"
                }]
            ]],
            bn = ["svg", h, [
                ["path", {
                    d: "m2 2 4 11 2-5 5-2Z"
                }],
                ["circle", {
                    cx: "16",
                    cy: "16",
                    r: "6"
                }],
                ["path", {
                    d: "m11.8 11.8 8.4 8.4"
                }]
            ]],
            xn = ["svg", h, [
                ["path", {
                    d: "m9 9 5 12 1.8-5.2L21 14Z"
                }],
                ["path", {
                    d: "M7.2 2.2 8 5.1"
                }],
                ["path", {
                    d: "m5.1 8-2.9-.8"
                }],
                ["path", {
                    d: "M14 4.1 12 6"
                }],
                ["path", {
                    d: "m6 12-1.9 2"
                }]
            ]],
            Un = ["svg", h, [
                ["path", {
                    d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
                }],
                ["path", {
                    d: "m13 13 6 6"
                }]
            ]],
            On = ["svg", h, [
                ["rect", {
                    x: "5",
                    y: "2",
                    width: "14",
                    height: "20",
                    rx: "7"
                }],
                ["path", {
                    d: "M12 6v4"
                }]
            ]],
            q1 = ["svg", h, [
                ["path", {
                    d: "M5 3v16h16"
                }],
                ["path", {
                    d: "m5 19 6-6"
                }],
                ["path", {
                    d: "m2 6 3-3 3 3"
                }],
                ["path", {
                    d: "m18 16 3 3-3 3"
                }]
            ]],
            Gn = ["svg", h, [
                ["polyline", {
                    points: "5 11 5 5 11 5"
                }],
                ["polyline", {
                    points: "19 13 19 19 13 19"
                }],
                ["line", {
                    x1: "5",
                    x2: "19",
                    y1: "5",
                    y2: "19"
                }]
            ]],
            En = ["svg", h, [
                ["polyline", {
                    points: "13 5 19 5 19 11"
                }],
                ["polyline", {
                    points: "11 19 5 19 5 13"
                }],
                ["line", {
                    x1: "19",
                    x2: "5",
                    y1: "5",
                    y2: "19"
                }]
            ]],
            Wn = ["svg", h, [
                ["path", {
                    d: "M11 19H5V13"
                }],
                ["path", {
                    d: "M19 5L5 19"
                }]
            ]],
            In = ["svg", h, [
                ["path", {
                    d: "M19 13V19H13"
                }],
                ["path", {
                    d: "M5 5L19 19"
                }]
            ]],
            Xn = ["svg", h, [
                ["path", {
                    d: "M8 18L12 22L16 18"
                }],
                ["path", {
                    d: "M12 2V22"
                }]
            ]],
            Nn = ["svg", h, [
                ["polyline", {
                    points: "18 8 22 12 18 16"
                }],
                ["polyline", {
                    points: "6 8 2 12 6 16"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            Kn = ["svg", h, [
                ["path", {
                    d: "M6 8L2 12L6 16"
                }],
                ["path", {
                    d: "M2 12H22"
                }]
            ]],
            Jn = ["svg", h, [
                ["path", {
                    d: "M18 8L22 12L18 16"
                }],
                ["path", {
                    d: "M2 12H22"
                }]
            ]],
            jn = ["svg", h, [
                ["path", {
                    d: "M5 11V5H11"
                }],
                ["path", {
                    d: "M5 5L19 19"
                }]
            ]],
            Qn = ["svg", h, [
                ["path", {
                    d: "M13 5H19V11"
                }],
                ["path", {
                    d: "M19 5L5 19"
                }]
            ]],
            Yn = ["svg", h, [
                ["path", {
                    d: "M8 6L12 2L16 6"
                }],
                ["path", {
                    d: "M12 2V22"
                }]
            ]],
            _n = ["svg", h, [
                ["polyline", {
                    points: "8 18 12 22 16 18"
                }],
                ["polyline", {
                    points: "8 6 12 2 16 6"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            ap = ["svg", h, [
                ["polyline", {
                    points: "5 9 2 12 5 15"
                }],
                ["polyline", {
                    points: "9 5 12 2 15 5"
                }],
                ["polyline", {
                    points: "15 19 12 22 9 19"
                }],
                ["polyline", {
                    points: "19 9 22 12 19 15"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            hp = ["svg", h, [
                ["circle", {
                    cx: "8",
                    cy: "18",
                    r: "4"
                }],
                ["path", {
                    d: "M12 18V2l7 4"
                }]
            ]],
            tp = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "18",
                    r: "4"
                }],
                ["path", {
                    d: "M16 18V2"
                }]
            ]],
            dp = ["svg", h, [
                ["path", {
                    d: "M9 18V5l12-2v13"
                }],
                ["path", {
                    d: "m9 9 12-2"
                }],
                ["circle", {
                    cx: "6",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "18",
                    cy: "16",
                    r: "3"
                }]
            ]],
            cp = ["svg", h, [
                ["path", {
                    d: "M9 18V5l12-2v13"
                }],
                ["circle", {
                    cx: "6",
                    cy: "18",
                    r: "3"
                }],
                ["circle", {
                    cx: "18",
                    cy: "16",
                    r: "3"
                }]
            ]],
            Mp = ["svg", h, [
                ["path", {
                    d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"
                }],
                ["path", {
                    d: "M14.53 8.88 12 2l-1.17 3.17"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            ep = ["svg", h, [
                ["polygon", {
                    points: "12 2 19 21 12 17 5 21 12 2"
                }]
            ]],
            ip = ["svg", h, [
                ["path", {
                    d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"
                }],
                ["path", {
                    d: "M17.39 11.73 22 2l-9.73 4.61"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            np = ["svg", h, [
                ["polygon", {
                    points: "3 11 22 2 13 21 11 13 3 11"
                }]
            ]],
            pp = ["svg", h, [
                ["rect", {
                    x: "16",
                    y: "16",
                    width: "6",
                    height: "6",
                    rx: "1"
                }],
                ["rect", {
                    x: "2",
                    y: "16",
                    width: "6",
                    height: "6",
                    rx: "1"
                }],
                ["rect", {
                    x: "9",
                    y: "2",
                    width: "6",
                    height: "6",
                    rx: "1"
                }],
                ["path", {
                    d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
                }],
                ["path", {
                    d: "M12 12V8"
                }]
            ]],
            lp = ["svg", h, [
                ["path", {
                    d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                }],
                ["path", {
                    d: "M18 14h-8"
                }],
                ["path", {
                    d: "M15 18h-5"
                }],
                ["path", {
                    d: "M10 6h8v4h-8V6Z"
                }]
            ]],
            vp = ["svg", h, [
                ["path", {
                    d: "M6 8.32a7.43 7.43 0 0 1 0 7.36"
                }],
                ["path", {
                    d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
                }],
                ["path", {
                    d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
                }],
                ["path", {
                    d: "M16.37 2a20.16 20.16 0 0 1 0 20"
                }]
            ]],
            op = ["svg", h, [
                ["path", {
                    d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
                }],
                ["path", {
                    d: "M2 6h4"
                }],
                ["path", {
                    d: "M2 10h4"
                }],
                ["path", {
                    d: "M2 14h4"
                }],
                ["path", {
                    d: "M2 18h4"
                }],
                ["path", {
                    d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                }]
            ]],
            sp = ["svg", h, [
                ["path", {
                    d: "M2 6h4"
                }],
                ["path", {
                    d: "M2 10h4"
                }],
                ["path", {
                    d: "M2 14h4"
                }],
                ["path", {
                    d: "M2 18h4"
                }],
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 2v20"
                }],
                ["path", {
                    d: "M15 7h5"
                }],
                ["path", {
                    d: "M15 12h5"
                }],
                ["path", {
                    d: "M15 17h5"
                }]
            ]],
            rp = ["svg", h, [
                ["path", {
                    d: "M2 6h4"
                }],
                ["path", {
                    d: "M2 10h4"
                }],
                ["path", {
                    d: "M2 14h4"
                }],
                ["path", {
                    d: "M2 18h4"
                }],
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M9.5 8h5"
                }],
                ["path", {
                    d: "M9.5 12H16"
                }],
                ["path", {
                    d: "M9.5 16H14"
                }]
            ]],
            gp = ["svg", h, [
                ["path", {
                    d: "M2 6h4"
                }],
                ["path", {
                    d: "M2 10h4"
                }],
                ["path", {
                    d: "M2 14h4"
                }],
                ["path", {
                    d: "M2 18h4"
                }],
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M16 2v20"
                }]
            ]],
            yp = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M12 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M20 12v2"
                }],
                ["path", {
                    d: "M20 18v2a2 2 0 0 1-2 2h-1"
                }],
                ["path", {
                    d: "M13 22h-2"
                }],
                ["path", {
                    d: "M7 22H6a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M4 14v-2"
                }],
                ["path", {
                    d: "M4 8V6a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M8 10h6"
                }],
                ["path", {
                    d: "M8 14h8"
                }],
                ["path", {
                    d: "M8 18h5"
                }]
            ]],
            $p = ["svg", h, [
                ["path", {
                    d: "M8 2v4"
                }],
                ["path", {
                    d: "M12 2v4"
                }],
                ["path", {
                    d: "M16 2v4"
                }],
                ["rect", {
                    width: "16",
                    height: "18",
                    x: "4",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 10h6"
                }],
                ["path", {
                    d: "M8 14h8"
                }],
                ["path", {
                    d: "M8 18h5"
                }]
            ]],
            mp = ["svg", h, [
                ["path", {
                    d: "M12 4V2"
                }],
                ["path", {
                    d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
                }],
                ["path", {
                    d: "M19 10v3.343"
                }],
                ["path", {
                    d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            up = ["svg", h, [
                ["path", {
                    d: "M12 4V2"
                }],
                ["path", {
                    d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
                }],
                ["path", {
                    d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
                }]
            ]],
            T1 = ["svg", h, [
                ["polygon", {
                    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            z1 = ["svg", h, [
                ["path", {
                    d: "M10 15V9"
                }],
                ["path", {
                    d: "M14 15V9"
                }],
                ["path", {
                    d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z"
                }]
            ]],
            b1 = ["svg", h, [
                ["polygon", {
                    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "m9 9 6 6"
                }]
            ]],
            Cp = ["svg", h, [
                ["polygon", {
                    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                }]
            ]],
            Hp = ["svg", h, [
                ["path", {
                    d: "M3 3h6l6 18h6"
                }],
                ["path", {
                    d: "M14 3h7"
                }]
            ]],
            wp = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["circle", {
                    cx: "19",
                    cy: "5",
                    r: "2"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
                }],
                ["path", {
                    d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
                }]
            ]],
            Vp = ["svg", h, [
                ["path", {
                    d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"
                }],
                ["path", {
                    d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"
                }],
                ["path", {
                    d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
                }]
            ]],
            Sp = ["svg", h, [
                ["path", {
                    d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
                }],
                ["path", {
                    d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"
                }],
                ["path", {
                    d: "M12 3v6"
                }]
            ]],
            Ap = ["svg", h, [
                ["path", {
                    d: "m16 16 2 2 4-4"
                }],
                ["path", {
                    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                }],
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["polyline", {
                    points: "3.29 7 12 12 20.71 7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "12"
                }]
            ]],
            Lp = ["svg", h, [
                ["path", {
                    d: "M16 16h6"
                }],
                ["path", {
                    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                }],
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["polyline", {
                    points: "3.29 7 12 12 20.71 7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "12"
                }]
            ]],
            fp = ["svg", h, [
                ["path", {
                    d: "M12 22v-9"
                }],
                ["path", {
                    d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
                }],
                ["path", {
                    d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
                }],
                ["path", {
                    d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
                }]
            ]],
            kp = ["svg", h, [
                ["path", {
                    d: "M16 16h6"
                }],
                ["path", {
                    d: "M19 13v6"
                }],
                ["path", {
                    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                }],
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["polyline", {
                    points: "3.29 7 12 12 20.71 7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "12"
                }]
            ]],
            Pp = ["svg", h, [
                ["path", {
                    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                }],
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["polyline", {
                    points: "3.29 7 12 12 20.71 7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "12"
                }],
                ["circle", {
                    cx: "18.5",
                    cy: "15.5",
                    r: "2.5"
                }],
                ["path", {
                    d: "M20.27 17.27 22 19"
                }]
            ]],
            Bp = ["svg", h, [
                ["path", {
                    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                }],
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["polyline", {
                    points: "3.29 7 12 12 20.71 7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "22",
                    y2: "12"
                }],
                ["path", {
                    d: "m17 13 5 5m-5 0 5-5"
                }]
            ]],
            Fp = ["svg", h, [
                ["path", {
                    d: "m7.5 4.27 9 5.15"
                }],
                ["path", {
                    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                }],
                ["path", {
                    d: "m3.3 7 8.7 5 8.7-5"
                }],
                ["path", {
                    d: "M12 22V12"
                }]
            ]],
            Dp = ["svg", h, [
                ["path", {
                    d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
                }],
                ["path", {
                    d: "m5 2 5 5"
                }],
                ["path", {
                    d: "M2 13h15"
                }],
                ["path", {
                    d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
                }]
            ]],
            Zp = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "6",
                    x: "2",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                }],
                ["rect", {
                    width: "4",
                    height: "6",
                    x: "8",
                    y: "16",
                    rx: "1"
                }]
            ]],
            x1 = ["svg", h, [
                ["path", {
                    d: "M10 2v2"
                }],
                ["path", {
                    d: "M14 2v4"
                }],
                ["path", {
                    d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"
                }],
                ["path", {
                    d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
                }]
            ]],
            Rp = ["svg", h, [
                ["path", {
                    d: "m14.622 17.897-10.68-2.913"
                }],
                ["path", {
                    d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
                }],
                ["path", {
                    d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                }]
            ]],
            qp = ["svg", h, [
                ["circle", {
                    cx: "13.5",
                    cy: "6.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "10.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "8.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "6.5",
                    cy: "12.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                }]
            ]],
            Tp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "m15 8-3 3-3-3"
                }]
            ]],
            U1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M14 15h1"
                }],
                ["path", {
                    d: "M19 15h2"
                }],
                ["path", {
                    d: "M3 15h2"
                }],
                ["path", {
                    d: "M9 15h1"
                }]
            ]],
            zp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "m9 10 3-3 3 3"
                }]
            ]],
            bp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 15h18"
                }]
            ]],
            O1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 3v18"
                }],
                ["path", {
                    d: "m16 15-3-3 3-3"
                }]
            ]],
            G1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 14v1"
                }],
                ["path", {
                    d: "M9 19v2"
                }],
                ["path", {
                    d: "M9 3v2"
                }],
                ["path", {
                    d: "M9 9v1"
                }]
            ]],
            E1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 3v18"
                }],
                ["path", {
                    d: "m14 9 3 3-3 3"
                }]
            ]],
            W1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 3v18"
                }]
            ]],
            xp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 3v18"
                }],
                ["path", {
                    d: "m8 9 3 3-3 3"
                }]
            ]],
            I1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 14v1"
                }],
                ["path", {
                    d: "M15 19v2"
                }],
                ["path", {
                    d: "M15 3v2"
                }],
                ["path", {
                    d: "M15 9v1"
                }]
            ]],
            Up = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 3v18"
                }],
                ["path", {
                    d: "m10 15-3-3 3-3"
                }]
            ]],
            Op = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 3v18"
                }]
            ]],
            Gp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "m9 16 3-3 3 3"
                }]
            ]],
            X1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M14 9h1"
                }],
                ["path", {
                    d: "M19 9h2"
                }],
                ["path", {
                    d: "M3 9h2"
                }],
                ["path", {
                    d: "M9 9h1"
                }]
            ]],
            Ep = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "m15 14-3 3-3-3"
                }]
            ]],
            Wp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }]
            ]],
            Ip = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 3v18"
                }],
                ["path", {
                    d: "M9 15h12"
                }]
            ]],
            Xp = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 15h12"
                }],
                ["path", {
                    d: "M15 3v18"
                }]
            ]],
            N1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "M9 21V9"
                }]
            ]],
            Np = ["svg", h, [
                ["path", {
                    d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                }]
            ]],
            Kp = ["svg", h, [
                ["path", {
                    d: "M8 21s-4-3-4-9 4-9 4-9"
                }],
                ["path", {
                    d: "M16 3s4 3 4 9-4 9-4 9"
                }]
            ]],
            Jp = ["svg", h, [
                ["path", {
                    d: "M9 9a3 3 0 1 1 6 0"
                }],
                ["path", {
                    d: "M12 12v3"
                }],
                ["path", {
                    d: "M11 15h2"
                }],
                ["path", {
                    d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"
                }],
                ["path", {
                    d: "M12 19v3"
                }]
            ]],
            jp = ["svg", h, [
                ["path", {
                    d: "M5.8 11.3 2 22l10.7-3.79"
                }],
                ["path", {
                    d: "M4 3h.01"
                }],
                ["path", {
                    d: "M22 8h.01"
                }],
                ["path", {
                    d: "M15 2h.01"
                }],
                ["path", {
                    d: "M22 20h.01"
                }],
                ["path", {
                    d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
                }],
                ["path", {
                    d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
                }],
                ["path", {
                    d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
                }],
                ["path", {
                    d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
                }]
            ]],
            Qp = ["svg", h, [
                ["rect", {
                    x: "14",
                    y: "4",
                    width: "4",
                    height: "16",
                    rx: "1"
                }],
                ["rect", {
                    x: "6",
                    y: "4",
                    width: "4",
                    height: "16",
                    rx: "1"
                }]
            ]],
            Yp = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "4",
                    r: "2"
                }],
                ["circle", {
                    cx: "18",
                    cy: "8",
                    r: "2"
                }],
                ["circle", {
                    cx: "20",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
                }]
            ]],
            _p = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M15 14h.01"
                }],
                ["path", {
                    d: "M9 6h6"
                }],
                ["path", {
                    d: "M9 10h6"
                }]
            ]],
            K1 = ["svg", h, [
                ["path", {
                    d: "M12 20h9"
                }],
                ["path", {
                    d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
                }]
            ]],
            a9 = ["svg", h, [
                ["path", {
                    d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
                }],
                ["path", {
                    d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            h9 = ["svg", h, [
                ["path", {
                    d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
                }],
                ["path", {
                    d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
                }],
                ["path", {
                    d: "m2.3 2.3 7.286 7.286"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "2"
                }]
            ]],
            J1 = ["svg", h, [
                ["path", {
                    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                }]
            ]],
            t9 = ["svg", h, [
                ["path", {
                    d: "M12 20h9"
                }],
                ["path", {
                    d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
                }],
                ["path", {
                    d: "m15 5 3 3"
                }]
            ]],
            d9 = ["svg", h, [
                ["path", {
                    d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
                }],
                ["path", {
                    d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
                }],
                ["path", {
                    d: "m15 5 4 4"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            c9 = ["svg", h, [
                ["path", {
                    d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
                }],
                ["path", {
                    d: "m8 6 2-2"
                }],
                ["path", {
                    d: "m18 16 2-2"
                }],
                ["path", {
                    d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
                }],
                ["path", {
                    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                }],
                ["path", {
                    d: "m15 5 4 4"
                }]
            ]],
            M9 = ["svg", h, [
                ["path", {
                    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                }],
                ["path", {
                    d: "m15 5 4 4"
                }]
            ]],
            e9 = ["svg", h, [
                ["path", {
                    d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"
                }]
            ]],
            i9 = ["svg", h, [
                ["line", {
                    x1: "19",
                    x2: "5",
                    y1: "5",
                    y2: "19"
                }],
                ["circle", {
                    cx: "6.5",
                    cy: "6.5",
                    r: "2.5"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "17.5",
                    r: "2.5"
                }]
            ]],
            n9 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "1"
                }],
                ["path", {
                    d: "m9 20 3-6 3 6"
                }],
                ["path", {
                    d: "m6 8 6 2 6-2"
                }],
                ["path", {
                    d: "M12 10v4"
                }]
            ]],
            p9 = ["svg", h, [
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }],
                ["path", {
                    d: "M14.05 2a9 9 0 0 1 8 7.94"
                }],
                ["path", {
                    d: "M14.05 6A5 5 0 0 1 18 10"
                }]
            ]],
            l9 = ["svg", h, [
                ["polyline", {
                    points: "18 2 22 6 18 10"
                }],
                ["line", {
                    x1: "14",
                    x2: "22",
                    y1: "6",
                    y2: "6"
                }],
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }]
            ]],
            v9 = ["svg", h, [
                ["polyline", {
                    points: "16 2 16 8 22 8"
                }],
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "2",
                    y2: "8"
                }],
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }]
            ]],
            o9 = ["svg", h, [
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "2",
                    y2: "8"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "2",
                    y2: "8"
                }],
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }]
            ]],
            s9 = ["svg", h, [
                ["path", {
                    d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
                }],
                ["line", {
                    x1: "22",
                    x2: "2",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            r9 = ["svg", h, [
                ["polyline", {
                    points: "22 8 22 2 16 2"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "8",
                    y2: "2"
                }],
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }]
            ]],
            g9 = ["svg", h, [
                ["path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }]
            ]],
            y9 = ["svg", h, [
                ["line", {
                    x1: "9",
                    x2: "9",
                    y1: "4",
                    y2: "20"
                }],
                ["path", {
                    d: "M4 7c0-1.7 1.3-3 3-3h13"
                }],
                ["path", {
                    d: "M18 20c-1.7 0-3-1.3-3-3V4"
                }]
            ]],
            $9 = ["svg", h, [
                ["path", {
                    d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
                }],
                ["path", {
                    d: "M2 14h20"
                }],
                ["path", {
                    d: "M6 14v4"
                }],
                ["path", {
                    d: "M10 14v4"
                }],
                ["path", {
                    d: "M14 14v4"
                }],
                ["path", {
                    d: "M18 14v4"
                }]
            ]],
            m9 = ["svg", h, [
                ["path", {
                    d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"
                }],
                ["path", {
                    d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
                }],
                ["path", {
                    d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
                }],
                ["path", {
                    d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
                }]
            ]],
            u9 = ["svg", h, [
                ["path", {
                    d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"
                }],
                ["rect", {
                    width: "10",
                    height: "7",
                    x: "12",
                    y: "13",
                    rx: "2"
                }]
            ]],
            C9 = ["svg", h, [
                ["path", {
                    d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"
                }],
                ["rect", {
                    width: "10",
                    height: "7",
                    x: "12",
                    y: "13.5",
                    ry: "2"
                }]
            ]],
            H9 = ["svg", h, [
                ["path", {
                    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
                }],
                ["path", {
                    d: "M22 12A10 10 0 0 0 12 2v10z"
                }]
            ]],
            w9 = ["svg", h, [
                ["path", {
                    d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"
                }],
                ["path", {
                    d: "M2 9v1c0 1.1.9 2 2 2h1"
                }],
                ["path", {
                    d: "M16 11h.01"
                }]
            ]],
            V9 = ["svg", h, [
                ["path", {
                    d: "M14 3v11"
                }],
                ["path", {
                    d: "M14 9h-3a3 3 0 0 1 0-6h9"
                }],
                ["path", {
                    d: "M18 3v11"
                }],
                ["path", {
                    d: "M22 18H2l4-4"
                }],
                ["path", {
                    d: "m6 22-4-4"
                }]
            ]],
            S9 = ["svg", h, [
                ["path", {
                    d: "M10 3v11"
                }],
                ["path", {
                    d: "M10 9H7a1 1 0 0 1 0-6h8"
                }],
                ["path", {
                    d: "M14 3v11"
                }],
                ["path", {
                    d: "m18 14 4 4H2"
                }],
                ["path", {
                    d: "m22 18-4 4"
                }]
            ]],
            A9 = ["svg", h, [
                ["path", {
                    d: "M13 4v16"
                }],
                ["path", {
                    d: "M17 4v16"
                }],
                ["path", {
                    d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"
                }]
            ]],
            L9 = ["svg", h, [
                ["path", {
                    d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"
                }],
                ["path", {
                    d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
                }],
                ["rect", {
                    width: "16",
                    height: "5",
                    x: "4",
                    y: "2",
                    rx: "1"
                }]
            ]],
            f9 = ["svg", h, [
                ["path", {
                    d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
                }],
                ["path", {
                    d: "m8.5 8.5 7 7"
                }]
            ]],
            k9 = ["svg", h, [
                ["path", {
                    d: "M12 17v5"
                }],
                ["path", {
                    d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"
                }]
            ]],
            P9 = ["svg", h, [
                ["path", {
                    d: "M12 17v5"
                }],
                ["path", {
                    d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                }]
            ]],
            B9 = ["svg", h, [
                ["path", {
                    d: "m2 22 1-1h3l9-9"
                }],
                ["path", {
                    d: "M3 21v-3l9-9"
                }],
                ["path", {
                    d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
                }]
            ]],
            F9 = ["svg", h, [
                ["path", {
                    d: "M15 11h.01"
                }],
                ["path", {
                    d: "M11 15h.01"
                }],
                ["path", {
                    d: "M16 16h.01"
                }],
                ["path", {
                    d: "m2 16 20 6-6-20A20 20 0 0 0 2 16"
                }],
                ["path", {
                    d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"
                }]
            ]],
            D9 = ["svg", h, [
                ["path", {
                    d: "M2 22h20"
                }],
                ["path", {
                    d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
                }]
            ]],
            Z9 = ["svg", h, [
                ["path", {
                    d: "M2 22h20"
                }],
                ["path", {
                    d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
                }]
            ]],
            R9 = ["svg", h, [
                ["path", {
                    d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                }]
            ]],
            q9 = ["svg", h, [
                ["polygon", {
                    points: "6 3 20 12 6 21 6 3"
                }]
            ]],
            T9 = ["svg", h, [
                ["path", {
                    d: "M9 2v6"
                }],
                ["path", {
                    d: "M15 2v6"
                }],
                ["path", {
                    d: "M12 17v5"
                }],
                ["path", {
                    d: "M5 8h14"
                }],
                ["path", {
                    d: "M6 11V8h12v3a6 6 0 1 1-12 0Z"
                }]
            ]],
            z9 = ["svg", h, [
                ["path", {
                    d: "m13 2-2 2.5h3L12 7"
                }],
                ["path", {
                    d: "M10 14v-3"
                }],
                ["path", {
                    d: "M14 14v-3"
                }],
                ["path", {
                    d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"
                }],
                ["path", {
                    d: "M12 22v-3"
                }]
            ]],
            b9 = ["svg", h, [
                ["path", {
                    d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
                }],
                ["path", {
                    d: "m2 22 3-3"
                }],
                ["path", {
                    d: "M7.5 13.5 10 11"
                }],
                ["path", {
                    d: "M10.5 16.5 13 14"
                }],
                ["path", {
                    d: "m18 3-4 4h6l-4 4"
                }]
            ]],
            x9 = ["svg", h, [
                ["path", {
                    d: "M12 22v-5"
                }],
                ["path", {
                    d: "M9 8V2"
                }],
                ["path", {
                    d: "M15 8V2"
                }],
                ["path", {
                    d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
                }]
            ]],
            U9 = ["svg", h, [
                ["path", {
                    d: "M5 12h14"
                }],
                ["path", {
                    d: "M12 5v14"
                }]
            ]],
            O9 = ["svg", h, [
                ["path", {
                    d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
                }],
                ["path", {
                    d: "M18 6h.01"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"
                }],
                ["path", {
                    d: "M18 11.66V22a4 4 0 0 0 4-4V6"
                }]
            ]],
            G9 = ["svg", h, [
                ["path", {
                    d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
                }],
                ["polyline", {
                    points: "8 10 12 14 16 10"
                }]
            ]],
            E9 = ["svg", h, [
                ["path", {
                    d: "M16.85 18.58a9 9 0 1 0-9.7 0"
                }],
                ["path", {
                    d: "M8 14a5 5 0 1 1 8 0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "11",
                    r: "1"
                }],
                ["path", {
                    d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"
                }]
            ]],
            W9 = ["svg", h, [
                ["path", {
                    d: "M10 4.5V4a2 2 0 0 0-2.41-1.957"
                }],
                ["path", {
                    d: "M13.9 8.4a2 2 0 0 0-1.26-1.295"
                }],
                ["path", {
                    d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"
                }],
                ["path", {
                    d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
                }],
                ["path", {
                    d: "M6 6v8"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            I9 = ["svg", h, [
                ["path", {
                    d: "M22 14a8 8 0 0 1-8 8"
                }],
                ["path", {
                    d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"
                }],
                ["path", {
                    d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"
                }],
                ["path", {
                    d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
                }]
            ]],
            X9 = ["svg", h, [
                ["path", {
                    d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
                }],
                ["path", {
                    d: "M10 22 9 8"
                }],
                ["path", {
                    d: "m14 22 1-14"
                }],
                ["path", {
                    d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
                }]
            ]],
            N9 = ["svg", h, [
                ["path", {
                    d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
                }],
                ["path", {
                    d: "m22 22-5.5-5.5"
                }]
            ]],
            K9 = ["svg", h, [
                ["path", {
                    d: "M18 7c0-5.333-8-5.333-8 0"
                }],
                ["path", {
                    d: "M10 7v14"
                }],
                ["path", {
                    d: "M6 21h12"
                }],
                ["path", {
                    d: "M6 13h10"
                }]
            ]],
            J9 = ["svg", h, [
                ["path", {
                    d: "M18.36 6.64A9 9 0 0 1 20.77 15"
                }],
                ["path", {
                    d: "M6.16 6.16a9 9 0 1 0 12.68 12.68"
                }],
                ["path", {
                    d: "M12 2v4"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            j9 = ["svg", h, [
                ["path", {
                    d: "M12 2v10"
                }],
                ["path", {
                    d: "M18.4 6.6a9 9 0 1 1-12.77.04"
                }]
            ]],
            Q9 = ["svg", h, [
                ["path", {
                    d: "M2 3h20"
                }],
                ["path", {
                    d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
                }],
                ["path", {
                    d: "m7 21 5-5 5 5"
                }]
            ]],
            Y9 = ["svg", h, [
                ["path", {
                    d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4"
                }],
                ["path", {
                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
                }]
            ]],
            _9 = ["svg", h, [
                ["path", {
                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
                }],
                ["rect", {
                    x: "6",
                    y: "14",
                    width: "12",
                    height: "8",
                    rx: "1"
                }]
            ]],
            al = ["svg", h, [
                ["path", {
                    d: "M5 7 3 5"
                }],
                ["path", {
                    d: "M9 6V3"
                }],
                ["path", {
                    d: "m13 7 2-2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "13",
                    r: "3"
                }],
                ["path", {
                    d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
                }],
                ["path", {
                    d: "M16 16h2"
                }]
            ]],
            hl = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 9v11"
                }],
                ["path", {
                    d: "M2 9h13a2 2 0 0 1 2 2v9"
                }]
            ]],
            tl = ["svg", h, [
                ["path", {
                    d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
                }]
            ]],
            dl = ["svg", h, [
                ["path", {
                    d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
                }],
                ["path", {
                    d: "M12 2v20"
                }]
            ]],
            cl = ["svg", h, [
                ["rect", {
                    width: "5",
                    height: "5",
                    x: "3",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "5",
                    height: "5",
                    x: "16",
                    y: "3",
                    rx: "1"
                }],
                ["rect", {
                    width: "5",
                    height: "5",
                    x: "3",
                    y: "16",
                    rx: "1"
                }],
                ["path", {
                    d: "M21 16h-3a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M21 21v.01"
                }],
                ["path", {
                    d: "M12 7v3a2 2 0 0 1-2 2H7"
                }],
                ["path", {
                    d: "M3 12h.01"
                }],
                ["path", {
                    d: "M12 3h.01"
                }],
                ["path", {
                    d: "M12 16v.01"
                }],
                ["path", {
                    d: "M16 12h1"
                }],
                ["path", {
                    d: "M21 12v.01"
                }],
                ["path", {
                    d: "M12 21v-1"
                }]
            ]],
            Ml = ["svg", h, [
                ["path", {
                    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                }],
                ["path", {
                    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                }]
            ]],
            el = ["svg", h, [
                ["path", {
                    d: "M13 16a3 3 0 0 1 2.24 5"
                }],
                ["path", {
                    d: "M18 12h.01"
                }],
                ["path", {
                    d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
                }],
                ["path", {
                    d: "M20 8.54V4a2 2 0 1 0-4 0v3"
                }],
                ["path", {
                    d: "M7.612 12.524a3 3 0 1 0-1.6 4.3"
                }]
            ]],
            il = ["svg", h, [
                ["path", {
                    d: "M19.07 4.93A10 10 0 0 0 6.99 3.34"
                }],
                ["path", {
                    d: "M4 6h.01"
                }],
                ["path", {
                    d: "M2.29 9.62A10 10 0 1 0 21.31 8.35"
                }],
                ["path", {
                    d: "M16.24 7.76A6 6 0 1 0 8.23 16.67"
                }],
                ["path", {
                    d: "M12 18h.01"
                }],
                ["path", {
                    d: "M17.99 11.66A6 6 0 0 1 15.77 16.67"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "m13.41 10.59 5.66-5.66"
                }]
            ]],
            nl = ["svg", h, [
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
                }],
                ["path", {
                    d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
                }],
                ["path", {
                    d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
                }]
            ]],
            pl = ["svg", h, [
                ["path", {
                    d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
                }]
            ]],
            ll = ["svg", h, [
                ["path", {
                    d: "M5 16v2"
                }],
                ["path", {
                    d: "M19 16v2"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "8",
                    rx: "2"
                }],
                ["path", {
                    d: "M18 12h.01"
                }]
            ]],
            vl = ["svg", h, [
                ["path", {
                    d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
                }],
                ["path", {
                    d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
                }],
                ["circle", {
                    cx: "12",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "M16.2 4.8c2 2 2.26 5.11.8 7.47"
                }],
                ["path", {
                    d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
                }],
                ["path", {
                    d: "M9.5 18h5"
                }],
                ["path", {
                    d: "m8 22 4-11 4 11"
                }]
            ]],
            ol = ["svg", h, [
                ["path", {
                    d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
                }],
                ["path", {
                    d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }],
                ["path", {
                    d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
                }],
                ["path", {
                    d: "M19.1 4.9C23 8.8 23 15.1 19.1 19"
                }]
            ]],
            sl = ["svg", h, [
                ["path", {
                    d: "M20.34 17.52a10 10 0 1 0-2.82 2.82"
                }],
                ["circle", {
                    cx: "19",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "m13.41 13.41 4.18 4.18"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }]
            ]],
            rl = ["svg", h, [
                ["path", {
                    d: "M5 15h14"
                }],
                ["path", {
                    d: "M5 9h14"
                }],
                ["path", {
                    d: "m14 20-5-5 6-6-5-5"
                }]
            ]],
            gl = ["svg", h, [
                ["path", {
                    d: "M22 17a10 10 0 0 0-20 0"
                }],
                ["path", {
                    d: "M6 17a6 6 0 0 1 12 0"
                }],
                ["path", {
                    d: "M10 17a2 2 0 0 1 4 0"
                }]
            ]],
            yl = ["svg", h, [
                ["path", {
                    d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"
                }],
                ["path", {
                    d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
                }],
                ["path", {
                    d: "M13.2 18a3 3 0 0 0-2.2-5"
                }],
                ["path", {
                    d: "M13 22H4a2 2 0 0 1 0-4h12"
                }],
                ["path", {
                    d: "M16 9h.01"
                }]
            ]],
            $l = ["svg", h, [
                ["rect", {
                    width: "12",
                    height: "20",
                    x: "6",
                    y: "2",
                    rx: "2"
                }],
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            ml = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M12 6.5v11"
                }],
                ["path", {
                    d: "M15 9.4a4 4 0 1 0 0 5.2"
                }]
            ]],
            ul = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M8 12h5"
                }],
                ["path", {
                    d: "M16 9.5a4 4 0 1 0 0 5.2"
                }]
            ]],
            Cl = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M8 7h8"
                }],
                ["path", {
                    d: "M12 17.5 8 15h1a4 4 0 0 0 0-8"
                }],
                ["path", {
                    d: "M8 11h8"
                }]
            ]],
            Hl = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "m12 10 3-3"
                }],
                ["path", {
                    d: "m9 7 3 3v7.5"
                }],
                ["path", {
                    d: "M9 11h6"
                }],
                ["path", {
                    d: "M9 15h6"
                }]
            ]],
            wl = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M8 13h5"
                }],
                ["path", {
                    d: "M10 17V9.5a2.5 2.5 0 0 1 5 0"
                }],
                ["path", {
                    d: "M8 17h7"
                }]
            ]],
            Vl = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M8 15h5"
                }],
                ["path", {
                    d: "M8 11h5a2 2 0 1 0 0-4h-3v10"
                }]
            ]],
            Sl = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M10 17V7h5"
                }],
                ["path", {
                    d: "M10 11h4"
                }],
                ["path", {
                    d: "M8 15h5"
                }]
            ]],
            Al = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M14 8H8"
                }],
                ["path", {
                    d: "M16 12H8"
                }],
                ["path", {
                    d: "M13 16H8"
                }]
            ]],
            Ll = ["svg", h, [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
                }],
                ["path", {
                    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
                }],
                ["path", {
                    d: "M12 17.5v-11"
                }]
            ]],
            j1 = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M17 12h.01"
                }],
                ["path", {
                    d: "M7 12h.01"
                }]
            ]],
            fl = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "2"
                }]
            ]],
            kl = ["svg", h, [
                ["rect", {
                    width: "12",
                    height: "20",
                    x: "6",
                    y: "2",
                    rx: "2"
                }]
            ]],
            Pl = ["svg", h, [
                ["path", {
                    d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
                }],
                ["path", {
                    d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
                }],
                ["path", {
                    d: "m14 16-3 3 3 3"
                }],
                ["path", {
                    d: "M8.293 13.596 7.196 9.5 3.1 10.598"
                }],
                ["path", {
                    d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
                }],
                ["path", {
                    d: "m13.378 9.633 4.096 1.098 1.097-4.096"
                }]
            ]],
            Bl = ["svg", h, [
                ["path", {
                    d: "m15 14 5-5-5-5"
                }],
                ["path", {
                    d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"
                }]
            ]],
            Fl = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "17",
                    r: "1"
                }],
                ["path", {
                    d: "M21 7v6h-6"
                }],
                ["path", {
                    d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                }]
            ]],
            Dl = ["svg", h, [
                ["path", {
                    d: "M21 7v6h-6"
                }],
                ["path", {
                    d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                }]
            ]],
            Zl = ["svg", h, [
                ["path", {
                    d: "M3 2v6h6"
                }],
                ["path", {
                    d: "M21 12A9 9 0 0 0 6 5.3L3 8"
                }],
                ["path", {
                    d: "M21 22v-6h-6"
                }],
                ["path", {
                    d: "M3 12a9 9 0 0 0 15 6.7l3-2.7"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }]
            ]],
            Rl = ["svg", h, [
                ["path", {
                    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                }],
                ["path", {
                    d: "M3 3v5h5"
                }],
                ["path", {
                    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
                }],
                ["path", {
                    d: "M16 16h5v5"
                }]
            ]],
            ql = ["svg", h, [
                ["path", {
                    d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
                }],
                ["path", {
                    d: "M8 16H3v5"
                }],
                ["path", {
                    d: "M3 12C3 9.51 4 7.26 5.64 5.64"
                }],
                ["path", {
                    d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
                }],
                ["path", {
                    d: "M21 12c0 1-.16 1.97-.47 2.87"
                }],
                ["path", {
                    d: "M21 3v5h-5"
                }],
                ["path", {
                    d: "M22 22 2 2"
                }]
            ]],
            Tl = ["svg", h, [
                ["path", {
                    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                }],
                ["path", {
                    d: "M21 3v5h-5"
                }],
                ["path", {
                    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                }],
                ["path", {
                    d: "M8 16H3v5"
                }]
            ]],
            zl = ["svg", h, [
                ["path", {
                    d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
                }],
                ["path", {
                    d: "M5 10h14"
                }],
                ["path", {
                    d: "M15 7v6"
                }]
            ]],
            bl = ["svg", h, [
                ["path", {
                    d: "M17 3v10"
                }],
                ["path", {
                    d: "m12.67 5.5 8.66 5"
                }],
                ["path", {
                    d: "m12.67 10.5 8.66-5"
                }],
                ["path", {
                    d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
                }]
            ]],
            xl = ["svg", h, [
                ["path", {
                    d: "M4 7V4h16v3"
                }],
                ["path", {
                    d: "M5 20h6"
                }],
                ["path", {
                    d: "M13 4 8 20"
                }],
                ["path", {
                    d: "m15 15 5 5"
                }],
                ["path", {
                    d: "m20 15-5 5"
                }]
            ]],
            Ul = ["svg", h, [
                ["path", {
                    d: "m17 2 4 4-4 4"
                }],
                ["path", {
                    d: "M3 11v-1a4 4 0 0 1 4-4h14"
                }],
                ["path", {
                    d: "m7 22-4-4 4-4"
                }],
                ["path", {
                    d: "M21 13v1a4 4 0 0 1-4 4H3"
                }],
                ["path", {
                    d: "M11 10h1v4"
                }]
            ]],
            Ol = ["svg", h, [
                ["path", {
                    d: "m2 9 3-3 3 3"
                }],
                ["path", {
                    d: "M13 18H7a2 2 0 0 1-2-2V6"
                }],
                ["path", {
                    d: "m22 15-3 3-3-3"
                }],
                ["path", {
                    d: "M11 6h6a2 2 0 0 1 2 2v10"
                }]
            ]],
            Gl = ["svg", h, [
                ["path", {
                    d: "m17 2 4 4-4 4"
                }],
                ["path", {
                    d: "M3 11v-1a4 4 0 0 1 4-4h14"
                }],
                ["path", {
                    d: "m7 22-4-4 4-4"
                }],
                ["path", {
                    d: "M21 13v1a4 4 0 0 1-4 4H3"
                }]
            ]],
            El = ["svg", h, [
                ["path", {
                    d: "M14 4c0-1.1.9-2 2-2"
                }],
                ["path", {
                    d: "M20 2c1.1 0 2 .9 2 2"
                }],
                ["path", {
                    d: "M22 8c0 1.1-.9 2-2 2"
                }],
                ["path", {
                    d: "M16 10c-1.1 0-2-.9-2-2"
                }],
                ["path", {
                    d: "m3 7 3 3 3-3"
                }],
                ["path", {
                    d: "M6 10V5c0-1.7 1.3-3 3-3h1"
                }],
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
                }],
                ["path", {
                    d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
                }]
            ]],
            Wl = ["svg", h, [
                ["path", {
                    d: "M14 4c0-1.1.9-2 2-2"
                }],
                ["path", {
                    d: "M20 2c1.1 0 2 .9 2 2"
                }],
                ["path", {
                    d: "M22 8c0 1.1-.9 2-2 2"
                }],
                ["path", {
                    d: "M16 10c-1.1 0-2-.9-2-2"
                }],
                ["path", {
                    d: "m3 7 3 3 3-3"
                }],
                ["path", {
                    d: "M6 10V5c0-1.7 1.3-3 3-3h1"
                }],
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }]
            ]],
            Il = ["svg", h, [
                ["polyline", {
                    points: "7 17 2 12 7 7"
                }],
                ["polyline", {
                    points: "12 17 7 12 12 7"
                }],
                ["path", {
                    d: "M22 18v-2a4 4 0 0 0-4-4H7"
                }]
            ]],
            Xl = ["svg", h, [
                ["polyline", {
                    points: "9 17 4 12 9 7"
                }],
                ["path", {
                    d: "M20 18v-2a4 4 0 0 0-4-4H4"
                }]
            ]],
            Nl = ["svg", h, [
                ["polygon", {
                    points: "11 19 2 12 11 5 11 19"
                }],
                ["polygon", {
                    points: "22 19 13 12 22 5 22 19"
                }]
            ]],
            Kl = ["svg", h, [
                ["path", {
                    d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"
                }],
                ["path", {
                    d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"
                }],
                ["path", {
                    d: "m9.35 14.53 2.64-3.31"
                }],
                ["path", {
                    d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5"
                }],
                ["path", {
                    d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"
                }]
            ]],
            Jl = ["svg", h, [
                ["path", {
                    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                }],
                ["path", {
                    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                }],
                ["path", {
                    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
                }],
                ["path", {
                    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                }]
            ]],
            jl = ["svg", h, [
                ["polyline", {
                    points: "3.5 2 6.5 12.5 18 12.5"
                }],
                ["line", {
                    x1: "9.5",
                    x2: "5.5",
                    y1: "12.5",
                    y2: "20"
                }],
                ["line", {
                    x1: "15",
                    x2: "18.5",
                    y1: "12.5",
                    y2: "20"
                }],
                ["path", {
                    d: "M2.75 18a13 13 0 0 0 18.5 0"
                }]
            ]],
            Ql = ["svg", h, [
                ["path", {
                    d: "M6 19V5"
                }],
                ["path", {
                    d: "M10 19V6.8"
                }],
                ["path", {
                    d: "M14 19v-7.8"
                }],
                ["path", {
                    d: "M18 5v4"
                }],
                ["path", {
                    d: "M18 19v-6"
                }],
                ["path", {
                    d: "M22 19V9"
                }],
                ["path", {
                    d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
                }]
            ]],
            Q1 = ["svg", h, [
                ["path", {
                    d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
                }],
                ["path", {
                    d: "m15.194 13.707 3.814 1.86-1.86 3.814"
                }],
                ["path", {
                    d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
                }]
            ]],
            Yl = ["svg", h, [
                ["path", {
                    d: "M20 9V7a2 2 0 0 0-2-2h-6"
                }],
                ["path", {
                    d: "m15 2-3 3 3 3"
                }],
                ["path", {
                    d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
                }]
            ]],
            _l = ["svg", h, [
                ["path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                }],
                ["path", {
                    d: "M3 3v5h5"
                }]
            ]],
            av = ["svg", h, [
                ["path", {
                    d: "M12 5H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "m9 8 3-3-3-3"
                }],
                ["path", {
                    d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                }]
            ]],
            hv = ["svg", h, [
                ["path", {
                    d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
                }],
                ["path", {
                    d: "M21 3v5h-5"
                }]
            ]],
            tv = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "19",
                    r: "3"
                }],
                ["path", {
                    d: "M9 19h8.5c.4 0 .9-.1 1.3-.2"
                }],
                ["path", {
                    d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3"
                }],
                ["path", {
                    d: "M15 5h-4.3"
                }],
                ["circle", {
                    cx: "18",
                    cy: "5",
                    r: "3"
                }]
            ]],
            dv = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "19",
                    r: "3"
                }],
                ["path", {
                    d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
                }],
                ["circle", {
                    cx: "18",
                    cy: "5",
                    r: "3"
                }]
            ]],
            cv = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2"
                }],
                ["path", {
                    d: "M6.01 18H6"
                }],
                ["path", {
                    d: "M10.01 18H10"
                }],
                ["path", {
                    d: "M15 10v4"
                }],
                ["path", {
                    d: "M17.84 7.17a4 4 0 0 0-5.66 0"
                }],
                ["path", {
                    d: "M20.66 4.34a8 8 0 0 0-11.31 0"
                }]
            ]],
            Y1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 12h18"
                }]
            ]],
            _1 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M21 9H3"
                }],
                ["path", {
                    d: "M21 15H3"
                }]
            ]],
            Mv = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M21 7.5H3"
                }],
                ["path", {
                    d: "M21 12H3"
                }],
                ["path", {
                    d: "M21 16.5H3"
                }]
            ]],
            ev = ["svg", h, [
                ["path", {
                    d: "M4 11a9 9 0 0 1 9 9"
                }],
                ["path", {
                    d: "M4 4a16 16 0 0 1 16 16"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "1"
                }]
            ]],
            iv = ["svg", h, [
                ["path", {
                    d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
                }],
                ["path", {
                    d: "m14.5 12.5 2-2"
                }],
                ["path", {
                    d: "m11.5 9.5 2-2"
                }],
                ["path", {
                    d: "m8.5 6.5 2-2"
                }],
                ["path", {
                    d: "m17.5 15.5 2-2"
                }]
            ]],
            nv = ["svg", h, [
                ["path", {
                    d: "M6 11h8a4 4 0 0 0 0-8H9v18"
                }],
                ["path", {
                    d: "M6 15h8"
                }]
            ]],
            pv = ["svg", h, [
                ["path", {
                    d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"
                }],
                ["path", {
                    d: "M21 14 10 2 3 14h18Z"
                }],
                ["path", {
                    d: "M10 2v16"
                }]
            ]],
            lv = ["svg", h, [
                ["path", {
                    d: "M7 21h10"
                }],
                ["path", {
                    d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
                }],
                ["path", {
                    d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
                }],
                ["path", {
                    d: "m13 12 4-4"
                }],
                ["path", {
                    d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
                }]
            ]],
            vv = ["svg", h, [
                ["path", {
                    d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"
                }],
                ["path", {
                    d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
                }],
                ["path", {
                    d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"
                }],
                ["path", {
                    d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"
                }]
            ]],
            ov = ["svg", h, [
                ["path", {
                    d: "M4 10a7.31 7.31 0 0 0 10 10Z"
                }],
                ["path", {
                    d: "m9 15 3-3"
                }],
                ["path", {
                    d: "M17 13a6 6 0 0 0-6-6"
                }],
                ["path", {
                    d: "M21 13A10 10 0 0 0 11 3"
                }]
            ]],
            sv = ["svg", h, [
                ["path", {
                    d: "M13 7 9 3 5 7l4 4"
                }],
                ["path", {
                    d: "m17 11 4 4-4 4-4-4"
                }],
                ["path", {
                    d: "m8 12 4 4 6-6-4-4Z"
                }],
                ["path", {
                    d: "m16 8 3-3"
                }],
                ["path", {
                    d: "M9 21a6 6 0 0 0-6-6"
                }]
            ]],
            rv = ["svg", h, [
                ["path", {
                    d: "M10 2v3a1 1 0 0 0 1 1h5"
                }],
                ["path", {
                    d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"
                }],
                ["path", {
                    d: "M18 22H4a2 2 0 0 1-2-2V6"
                }],
                ["path", {
                    d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
                }]
            ]],
            gv = ["svg", h, [
                ["path", {
                    d: "M13 13H8a1 1 0 0 0-1 1v7"
                }],
                ["path", {
                    d: "M14 8h1"
                }],
                ["path", {
                    d: "M17 21v-4"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"
                }],
                ["path", {
                    d: "M29.5 11.5s5 5 4 5"
                }],
                ["path", {
                    d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"
                }]
            ]],
            yv = ["svg", h, [
                ["path", {
                    d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                }],
                ["path", {
                    d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
                }],
                ["path", {
                    d: "M7 3v4a1 1 0 0 0 1 1h7"
                }]
            ]],
            a2 = ["svg", h, [
                ["circle", {
                    cx: "19",
                    cy: "19",
                    r: "2"
                }],
                ["circle", {
                    cx: "5",
                    cy: "5",
                    r: "2"
                }],
                ["path", {
                    d: "M5 7v12h12"
                }],
                ["path", {
                    d: "m5 19 6-6"
                }]
            ]],
            $v = ["svg", h, [
                ["path", {
                    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                }],
                ["path", {
                    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                }],
                ["path", {
                    d: "M7 21h10"
                }],
                ["path", {
                    d: "M12 3v18"
                }],
                ["path", {
                    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
                }]
            ]],
            mv = ["svg", h, [
                ["path", {
                    d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }],
                ["path", {
                    d: "M14 15H9v-5"
                }],
                ["path", {
                    d: "M16 3h5v5"
                }],
                ["path", {
                    d: "M21 3 9 15"
                }]
            ]],
            uv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M8 7v10"
                }],
                ["path", {
                    d: "M12 7v10"
                }],
                ["path", {
                    d: "M17 7v10"
                }]
            ]],
            Cv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }],
                ["path", {
                    d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"
                }]
            ]],
            Hv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M8 14s1.5 2 4 2 4-2 4-2"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["path", {
                    d: "M15 9h.01"
                }]
            ]],
            wv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M7 12h10"
                }]
            ]],
            Vv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "m16 16-1.9-1.9"
                }]
            ]],
            Sv = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M7 8h8"
                }],
                ["path", {
                    d: "M7 12h10"
                }],
                ["path", {
                    d: "M7 16h6"
                }]
            ]],
            Av = ["svg", h, [
                ["path", {
                    d: "M3 7V5a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "M17 3h2a2 2 0 0 1 2 2v2"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M7 21H5a2 2 0 0 1-2-2v-2"
                }]
            ]],
            Lv = ["svg", h, [
                ["circle", {
                    cx: "7.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "18.5",
                    cy: "5.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "11.5",
                    cy: "11.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "16.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "14.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "M3 3v18h18"
                }]
            ]],
            fv = ["svg", h, [
                ["path", {
                    d: "M14 22v-4a2 2 0 1 0-4 0v4"
                }],
                ["path", {
                    d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"
                }],
                ["path", {
                    d: "M18 5v17"
                }],
                ["path", {
                    d: "m4 6 8-4 8 4"
                }],
                ["path", {
                    d: "M6 5v17"
                }],
                ["circle", {
                    cx: "12",
                    cy: "9",
                    r: "2"
                }]
            ]],
            kv = ["svg", h, [
                ["path", {
                    d: "M5.42 9.42 8 12"
                }],
                ["circle", {
                    cx: "4",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "m14 6-8.58 8.58"
                }],
                ["circle", {
                    cx: "4",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "M10.8 14.8 14 18"
                }],
                ["path", {
                    d: "M16 12h-2"
                }],
                ["path", {
                    d: "M22 12h-2"
                }]
            ]],
            Pv = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "6",
                    r: "3"
                }],
                ["path", {
                    d: "M8.12 8.12 12 12"
                }],
                ["path", {
                    d: "M20 4 8.12 15.88"
                }],
                ["circle", {
                    cx: "6",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "M14.8 14.8 20 20"
                }]
            ]],
            Bv = ["svg", h, [
                ["path", {
                    d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "m22 3-5 5"
                }],
                ["path", {
                    d: "m17 3 5 5"
                }]
            ]],
            Fv = ["svg", h, [
                ["path", {
                    d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["path", {
                    d: "M12 17v4"
                }],
                ["path", {
                    d: "m17 8 5-5"
                }],
                ["path", {
                    d: "M17 3h5v5"
                }]
            ]],
            Dv = ["svg", h, [
                ["path", {
                    d: "M15 12h-5"
                }],
                ["path", {
                    d: "M15 8h-5"
                }],
                ["path", {
                    d: "M19 17V5a2 2 0 0 0-2-2H4"
                }],
                ["path", {
                    d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                }]
            ]],
            Zv = ["svg", h, [
                ["path", {
                    d: "M19 17V5a2 2 0 0 0-2-2H4"
                }],
                ["path", {
                    d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                }]
            ]],
            Rv = ["svg", h, [
                ["path", {
                    d: "m8 11 2 2 4-4"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }]
            ]],
            qv = ["svg", h, [
                ["path", {
                    d: "m13 13.5 2-2.5-2-2.5"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }],
                ["path", {
                    d: "M9 8.5 7 11l2 2.5"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }]
            ]],
            Tv = ["svg", h, [
                ["path", {
                    d: "m13.5 8.5-5 5"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }]
            ]],
            zv = ["svg", h, [
                ["path", {
                    d: "m13.5 8.5-5 5"
                }],
                ["path", {
                    d: "m8.5 8.5 5 5"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }]
            ]],
            bv = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3"
                }]
            ]],
            xv = ["svg", h, [
                ["path", {
                    d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"
                }],
                ["path", {
                    d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"
                }]
            ]],
            h2 = ["svg", h, [
                ["path", {
                    d: "m3 3 3 9-3 9 19-9Z"
                }],
                ["path", {
                    d: "M6 12h16"
                }]
            ]],
            Uv = ["svg", h, [
                ["rect", {
                    x: "14",
                    y: "14",
                    width: "8",
                    height: "8",
                    rx: "2"
                }],
                ["rect", {
                    x: "2",
                    y: "2",
                    width: "8",
                    height: "8",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 14v1a2 2 0 0 0 2 2h1"
                }],
                ["path", {
                    d: "M14 7h1a2 2 0 0 1 2 2v1"
                }]
            ]],
            Ov = ["svg", h, [
                ["path", {
                    d: "m22 2-7 20-4-9-9-4Z"
                }],
                ["path", {
                    d: "M22 2 11 13"
                }]
            ]],
            Gv = ["svg", h, [
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "12",
                    y2: "12"
                }],
                ["polyline", {
                    points: "8 8 12 4 16 8"
                }],
                ["polyline", {
                    points: "16 16 12 20 8 16"
                }]
            ]],
            Ev = ["svg", h, [
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "3",
                    y2: "21"
                }],
                ["polyline", {
                    points: "8 8 4 12 8 16"
                }],
                ["polyline", {
                    points: "16 16 20 12 16 8"
                }]
            ]],
            Wv = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
                }],
                ["path", {
                    d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
                }],
                ["path", {
                    d: "M6 6h.01"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "m15.7 13.4-.9-.3"
                }],
                ["path", {
                    d: "m9.2 10.9-.9-.3"
                }],
                ["path", {
                    d: "m10.6 15.7.3-.9"
                }],
                ["path", {
                    d: "m13.6 15.7-.4-1"
                }],
                ["path", {
                    d: "m10.8 9.3-.4-1"
                }],
                ["path", {
                    d: "m8.3 13.6 1-.4"
                }],
                ["path", {
                    d: "m14.7 10.8 1-.4"
                }],
                ["path", {
                    d: "m13.4 8.3-.3.9"
                }]
            ]],
            Iv = ["svg", h, [
                ["path", {
                    d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
                }],
                ["path", {
                    d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
                }],
                ["path", {
                    d: "M6 6h.01"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "m13 6-4 6h6l-4 6"
                }]
            ]],
            Xv = ["svg", h, [
                ["path", {
                    d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"
                }],
                ["path", {
                    d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"
                }],
                ["path", {
                    d: "M22 17v-1a2 2 0 0 0-2-2h-1"
                }],
                ["path", {
                    d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"
                }],
                ["path", {
                    d: "M6 18h.01"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            Nv = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "2",
                    rx: "2",
                    ry: "2"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "6",
                    x2: "6.01",
                    y1: "6",
                    y2: "6"
                }],
                ["line", {
                    x1: "6",
                    x2: "6.01",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            Kv = ["svg", h, [
                ["path", {
                    d: "M20 7h-9"
                }],
                ["path", {
                    d: "M14 17H5"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "3"
                }],
                ["circle", {
                    cx: "7",
                    cy: "7",
                    r: "3"
                }]
            ]],
            Jv = ["svg", h, [
                ["path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }]
            ]],
            jv = ["svg", h, [
                ["path", {
                    d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                }],
                ["rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "17.5",
                    r: "3.5"
                }]
            ]],
            Qv = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "5",
                    r: "3"
                }],
                ["circle", {
                    cx: "6",
                    cy: "12",
                    r: "3"
                }],
                ["circle", {
                    cx: "18",
                    cy: "19",
                    r: "3"
                }],
                ["line", {
                    x1: "8.59",
                    x2: "15.42",
                    y1: "13.51",
                    y2: "17.49"
                }],
                ["line", {
                    x1: "15.41",
                    x2: "8.59",
                    y1: "6.51",
                    y2: "10.49"
                }]
            ]],
            Yv = ["svg", h, [
                ["path", {
                    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                }],
                ["polyline", {
                    points: "16 6 12 2 8 6"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "15"
                }]
            ]],
            _v = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "15",
                    y2: "15"
                }],
                ["line", {
                    x1: "9",
                    x2: "9",
                    y1: "9",
                    y2: "21"
                }],
                ["line", {
                    x1: "15",
                    x2: "15",
                    y1: "9",
                    y2: "21"
                }]
            ]],
            ao = ["svg", h, [
                ["path", {
                    d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
                }]
            ]],
            ho = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M12 8v4"
                }],
                ["path", {
                    d: "M12 16h.01"
                }]
            ]],
            to = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "m4.243 5.21 14.39 12.472"
                }]
            ]],
            co = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "m9 12 2 2 4-4"
                }]
            ]],
            Mo = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M8 12h.01"
                }],
                ["path", {
                    d: "M12 12h.01"
                }],
                ["path", {
                    d: "M16 12h.01"
                }]
            ]],
            eo = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M12 22V2"
                }]
            ]],
            io = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M9 12h6"
                }]
            ]],
            no = ["svg", h, [
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
                }],
                ["path", {
                    d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
                }]
            ]],
            po = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M9 12h6"
                }],
                ["path", {
                    d: "M12 9v6"
                }]
            ]],
            lo = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
                }],
                ["path", {
                    d: "M12 17h.01"
                }]
            ]],
            t2 = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }],
                ["path", {
                    d: "m14.5 9.5-5 5"
                }],
                ["path", {
                    d: "m9.5 9.5 5 5"
                }]
            ]],
            vo = ["svg", h, [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                }]
            ]],
            oo = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "8"
                }],
                ["path", {
                    d: "M12 2v7.5"
                }],
                ["path", {
                    d: "m19 5-5.23 5.23"
                }],
                ["path", {
                    d: "M22 12h-7.5"
                }],
                ["path", {
                    d: "m19 19-5.23-5.23"
                }],
                ["path", {
                    d: "M12 14.5V22"
                }],
                ["path", {
                    d: "M10.23 13.77 5 19"
                }],
                ["path", {
                    d: "M9.5 12H2"
                }],
                ["path", {
                    d: "M10.23 10.23 5 5"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.5"
                }]
            ]],
            so = ["svg", h, [
                ["path", {
                    d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                }],
                ["path", {
                    d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"
                }],
                ["path", {
                    d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
                }],
                ["path", {
                    d: "M12 10v4"
                }],
                ["path", {
                    d: "M12 2v3"
                }]
            ]],
            ro = ["svg", h, [
                ["path", {
                    d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
                }]
            ]],
            go = ["svg", h, [
                ["path", {
                    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                }],
                ["path", {
                    d: "M3 6h18"
                }],
                ["path", {
                    d: "M16 10a4 4 0 0 1-8 0"
                }]
            ]],
            yo = ["svg", h, [
                ["path", {
                    d: "m15 11-1 9"
                }],
                ["path", {
                    d: "m19 11-4-7"
                }],
                ["path", {
                    d: "M2 11h20"
                }],
                ["path", {
                    d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
                }],
                ["path", {
                    d: "M4.5 15.5h15"
                }],
                ["path", {
                    d: "m5 11 4-7"
                }],
                ["path", {
                    d: "m9 11 1 9"
                }]
            ]],
            $o = ["svg", h, [
                ["circle", {
                    cx: "8",
                    cy: "21",
                    r: "1"
                }],
                ["circle", {
                    cx: "19",
                    cy: "21",
                    r: "1"
                }],
                ["path", {
                    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                }]
            ]],
            mo = ["svg", h, [
                ["path", {
                    d: "M2 22v-5l5-5 5 5-5 5z"
                }],
                ["path", {
                    d: "M9.5 14.5 16 8"
                }],
                ["path", {
                    d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
                }]
            ]],
            uo = ["svg", h, [
                ["path", {
                    d: "m4 4 2.5 2.5"
                }],
                ["path", {
                    d: "M13.5 6.5a4.95 4.95 0 0 0-7 7"
                }],
                ["path", {
                    d: "M15 5 5 15"
                }],
                ["path", {
                    d: "M14 17v.01"
                }],
                ["path", {
                    d: "M10 16v.01"
                }],
                ["path", {
                    d: "M13 13v.01"
                }],
                ["path", {
                    d: "M16 10v.01"
                }],
                ["path", {
                    d: "M11 20v.01"
                }],
                ["path", {
                    d: "M17 14v.01"
                }],
                ["path", {
                    d: "M20 11v.01"
                }]
            ]],
            Co = ["svg", h, [
                ["path", {
                    d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8"
                }],
                ["path", {
                    d: "M9 19.8V15m0 0H4.2M9 15l-6 6"
                }],
                ["path", {
                    d: "M15 4.2V9m0 0h4.8M15 9l6-6"
                }],
                ["path", {
                    d: "M9 4.2V9m0 0H4.2M9 9 3 3"
                }]
            ]],
            Ho = ["svg", h, [
                ["path", {
                    d: "M12 22v-7l-2-2"
                }],
                ["path", {
                    d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"
                }],
                ["path", {
                    d: "m14 14-2 2"
                }]
            ]],
            wo = ["svg", h, [
                ["path", {
                    d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
                }],
                ["path", {
                    d: "m18 2 4 4-4 4"
                }],
                ["path", {
                    d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"
                }],
                ["path", {
                    d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"
                }],
                ["path", {
                    d: "m18 14 4 4-4 4"
                }]
            ]],
            Vo = ["svg", h, [
                ["path", {
                    d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
                }]
            ]],
            So = ["svg", h, [
                ["path", {
                    d: "M2 20h.01"
                }],
                ["path", {
                    d: "M7 20v-4"
                }],
                ["path", {
                    d: "M12 20v-8"
                }],
                ["path", {
                    d: "M17 20V8"
                }]
            ]],
            Ao = ["svg", h, [
                ["path", {
                    d: "M2 20h.01"
                }],
                ["path", {
                    d: "M7 20v-4"
                }]
            ]],
            Lo = ["svg", h, [
                ["path", {
                    d: "M2 20h.01"
                }],
                ["path", {
                    d: "M7 20v-4"
                }],
                ["path", {
                    d: "M12 20v-8"
                }]
            ]],
            fo = ["svg", h, [
                ["path", {
                    d: "M2 20h.01"
                }]
            ]],
            ko = ["svg", h, [
                ["path", {
                    d: "M2 20h.01"
                }],
                ["path", {
                    d: "M7 20v-4"
                }],
                ["path", {
                    d: "M12 20v-8"
                }],
                ["path", {
                    d: "M17 20V8"
                }],
                ["path", {
                    d: "M22 4v16"
                }]
            ]],
            Po = ["svg", h, [
                ["path", {
                    d: "M14.218 7.183a2.5 2.5 0 1 0-3.712-2.354c-.349 2.295-.853 12.217-5.006 12.217a1 1 0 0 1 0-5.091c4.509.03 8.516 1.676 8.516 4.221a1 1 0 0 0 .781.803l2.429.015a1 1 0 0 0 1.006-1v-.4a.5.5 0 0 1 .838-.368L21 17"
                }],
                ["path", {
                    d: "M3 21h18"
                }]
            ]],
            Bo = ["svg", h, [
                ["path", {
                    d: "M10 9H4L2 7l2-2h6"
                }],
                ["path", {
                    d: "M14 5h6l2 2-2 2h-6"
                }],
                ["path", {
                    d: "M10 22V4a2 2 0 1 1 4 0v18"
                }],
                ["path", {
                    d: "M8 22h8"
                }]
            ]],
            Fo = ["svg", h, [
                ["path", {
                    d: "M12 13v8"
                }],
                ["path", {
                    d: "M12 3v3"
                }],
                ["path", {
                    d: "M18 6a2 2 0 0 1 1.414.586l2.293 2.207a1 1 0 0 1 0 1.414l-2.27 2.184a2 2 0 0 1-1.742.586L6 13a2 2 0 0 1-1.414-.586l-2.293-2.207a1 1 0 0 1 0-1.414l2.293-2.207A2 2 0 0 1 6 6z"
                }]
            ]],
            Do = ["svg", h, [
                ["path", {
                    d: "M7 18v-6a5 5 0 1 1 10 0v6"
                }],
                ["path", {
                    d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
                }],
                ["path", {
                    d: "M21 12h1"
                }],
                ["path", {
                    d: "M18.5 4.5 18 5"
                }],
                ["path", {
                    d: "M2 12h1"
                }],
                ["path", {
                    d: "M12 2v1"
                }],
                ["path", {
                    d: "m4.929 4.929.707.707"
                }],
                ["path", {
                    d: "M12 12v6"
                }]
            ]],
            Zo = ["svg", h, [
                ["polygon", {
                    points: "19 20 9 12 19 4 19 20"
                }],
                ["line", {
                    x1: "5",
                    x2: "5",
                    y1: "19",
                    y2: "5"
                }]
            ]],
            Ro = ["svg", h, [
                ["polygon", {
                    points: "5 4 15 12 5 20 5 4"
                }],
                ["line", {
                    x1: "19",
                    x2: "19",
                    y1: "5",
                    y2: "19"
                }]
            ]],
            qo = ["svg", h, [
                ["circle", {
                    cx: "9",
                    cy: "12",
                    r: "1"
                }],
                ["circle", {
                    cx: "15",
                    cy: "12",
                    r: "1"
                }],
                ["path", {
                    d: "M8 20v2h8v-2"
                }],
                ["path", {
                    d: "m12.5 17-.5-1-.5 1h1z"
                }],
                ["path", {
                    d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"
                }]
            ]],
            To = ["svg", h, [
                ["rect", {
                    width: "3",
                    height: "8",
                    x: "13",
                    y: "2",
                    rx: "1.5"
                }],
                ["path", {
                    d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
                }],
                ["rect", {
                    width: "3",
                    height: "8",
                    x: "8",
                    y: "14",
                    rx: "1.5"
                }],
                ["path", {
                    d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
                }],
                ["rect", {
                    width: "8",
                    height: "3",
                    x: "14",
                    y: "13",
                    rx: "1.5"
                }],
                ["path", {
                    d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
                }],
                ["rect", {
                    width: "8",
                    height: "3",
                    x: "2",
                    y: "8",
                    rx: "1.5"
                }],
                ["path", {
                    d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
                }]
            ]],
            zo = ["svg", h, [
                ["path", {
                    d: "M22 2 2 22"
                }]
            ]],
            bo = ["svg", h, [
                ["path", {
                    d: "m8 14-6 6h9v-3"
                }],
                ["path", {
                    d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"
                }]
            ]],
            xo = ["svg", h, [
                ["line", {
                    x1: "21",
                    x2: "14",
                    y1: "4",
                    y2: "4"
                }],
                ["line", {
                    x1: "10",
                    x2: "3",
                    y1: "4",
                    y2: "4"
                }],
                ["line", {
                    x1: "21",
                    x2: "12",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "8",
                    x2: "3",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "21",
                    x2: "16",
                    y1: "20",
                    y2: "20"
                }],
                ["line", {
                    x1: "12",
                    x2: "3",
                    y1: "20",
                    y2: "20"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "2",
                    y2: "6"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "10",
                    y2: "14"
                }],
                ["line", {
                    x1: "16",
                    x2: "16",
                    y1: "18",
                    y2: "22"
                }]
            ]],
            d2 = ["svg", h, [
                ["line", {
                    x1: "4",
                    x2: "4",
                    y1: "21",
                    y2: "14"
                }],
                ["line", {
                    x1: "4",
                    x2: "4",
                    y1: "10",
                    y2: "3"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "21",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "3"
                }],
                ["line", {
                    x1: "20",
                    x2: "20",
                    y1: "21",
                    y2: "16"
                }],
                ["line", {
                    x1: "20",
                    x2: "20",
                    y1: "12",
                    y2: "3"
                }],
                ["line", {
                    x1: "2",
                    x2: "6",
                    y1: "14",
                    y2: "14"
                }],
                ["line", {
                    x1: "10",
                    x2: "14",
                    y1: "8",
                    y2: "8"
                }],
                ["line", {
                    x1: "18",
                    x2: "22",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            Uo = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M12.667 8 10 12h4l-2.667 4"
                }]
            ]],
            Oo = ["svg", h, [
                ["rect", {
                    width: "7",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "1"
                }],
                ["path", {
                    d: "M13 8.32a7.43 7.43 0 0 1 0 7.36"
                }],
                ["path", {
                    d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
                }],
                ["path", {
                    d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
                }]
            ]],
            Go = ["svg", h, [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M12 18h.01"
                }]
            ]],
            Eo = ["svg", h, [
                ["path", {
                    d: "M22 11v1a10 10 0 1 1-9-10"
                }],
                ["path", {
                    d: "M8 14s1.5 2 4 2 4-2 4-2"
                }],
                ["line", {
                    x1: "9",
                    x2: "9.01",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "9",
                    y2: "9"
                }],
                ["path", {
                    d: "M16 5h6"
                }],
                ["path", {
                    d: "M19 2v6"
                }]
            ]],
            Wo = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["path", {
                    d: "M8 14s1.5 2 4 2 4-2 4-2"
                }],
                ["line", {
                    x1: "9",
                    x2: "9.01",
                    y1: "9",
                    y2: "9"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "9",
                    y2: "9"
                }]
            ]],
            Io = ["svg", h, [
                ["path", {
                    d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
                }],
                ["circle", {
                    cx: "10",
                    cy: "13",
                    r: "8"
                }],
                ["path", {
                    d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
                }],
                ["path", {
                    d: "M18 3 19.1 5.2"
                }],
                ["path", {
                    d: "M22 3 20.9 5.2"
                }]
            ]],
            Xo = ["svg", h, [
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "22"
                }],
                ["path", {
                    d: "m20 16-4-4 4-4"
                }],
                ["path", {
                    d: "m4 8 4 4-4 4"
                }],
                ["path", {
                    d: "m16 4-4 4-4-4"
                }],
                ["path", {
                    d: "m8 20 4-4 4 4"
                }]
            ]],
            No = ["svg", h, [
                ["path", {
                    d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
                }],
                ["path", {
                    d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
                }],
                ["path", {
                    d: "M4 18v2"
                }],
                ["path", {
                    d: "M20 18v2"
                }],
                ["path", {
                    d: "M12 4v9"
                }]
            ]],
            Ko = ["svg", h, [
                ["path", {
                    d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
                }],
                ["path", {
                    d: "M7 21h10"
                }],
                ["path", {
                    d: "M19.5 12 22 6"
                }],
                ["path", {
                    d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
                }],
                ["path", {
                    d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
                }],
                ["path", {
                    d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
                }]
            ]],
            Jo = ["svg", h, [
                ["path", {
                    d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
                }]
            ]],
            jo = ["svg", h, [
                ["path", {
                    d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
                }],
                ["path", {
                    d: "M12 18v4"
                }]
            ]],
            Qo = ["svg", h, [
                ["path", {
                    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                }]
            ]],
            c2 = ["svg", h, [
                ["path", {
                    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                }],
                ["path", {
                    d: "M20 3v4"
                }],
                ["path", {
                    d: "M22 5h-4"
                }],
                ["path", {
                    d: "M4 17v2"
                }],
                ["path", {
                    d: "M5 18H3"
                }]
            ]],
            Yo = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 6h.01"
                }],
                ["circle", {
                    cx: "12",
                    cy: "14",
                    r: "4"
                }],
                ["path", {
                    d: "M12 14h.01"
                }]
            ]],
            _o = ["svg", h, [
                ["path", {
                    d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
                }],
                ["path", {
                    d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
                }],
                ["path", {
                    d: "M17 15a3.5 3.5 0 0 0-.025-4.975"
                }]
            ]],
            as = ["svg", h, [
                ["path", {
                    d: "m6 16 6-12 6 12"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
                }]
            ]],
            hs = ["svg", h, [
                ["path", {
                    d: "m6 16 6-12 6 12"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "m16 20 2 2 4-4"
                }]
            ]],
            ts = ["svg", h, [
                ["circle", {
                    cx: "19",
                    cy: "5",
                    r: "2"
                }],
                ["circle", {
                    cx: "5",
                    cy: "19",
                    r: "2"
                }],
                ["path", {
                    d: "M5 17A12 12 0 0 1 17 5"
                }]
            ]],
            ds = ["svg", h, [
                ["path", {
                    d: "M16 3h5v5"
                }],
                ["path", {
                    d: "M8 3H3v5"
                }],
                ["path", {
                    d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
                }],
                ["path", {
                    d: "m15 9 6-6"
                }]
            ]],
            cs = ["svg", h, [
                ["path", {
                    d: "M3 3h.01"
                }],
                ["path", {
                    d: "M7 5h.01"
                }],
                ["path", {
                    d: "M11 7h.01"
                }],
                ["path", {
                    d: "M3 7h.01"
                }],
                ["path", {
                    d: "M7 9h.01"
                }],
                ["path", {
                    d: "M3 11h.01"
                }],
                ["rect", {
                    width: "4",
                    height: "4",
                    x: "15",
                    y: "5"
                }],
                ["path", {
                    d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
                }],
                ["path", {
                    d: "m13 14 8-2"
                }],
                ["path", {
                    d: "m13 19 8-2"
                }]
            ]],
            Ms = ["svg", h, [
                ["path", {
                    d: "M7 20h10"
                }],
                ["path", {
                    d: "M10 20c5.5-2.5.8-6.4 3-10"
                }],
                ["path", {
                    d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
                }],
                ["path", {
                    d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
                }]
            ]],
            M2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M17 12h-2l-2 5-2-10-2 5H7"
                }]
            ]],
            e2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m16 8-8 8"
                }],
                ["path", {
                    d: "M16 16H8V8"
                }]
            ]],
            i2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m8 8 8 8"
                }],
                ["path", {
                    d: "M16 8v8H8"
                }]
            ]],
            n2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 8v8"
                }],
                ["path", {
                    d: "m8 12 4 4 4-4"
                }]
            ]],
            p2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m12 8-4 4 4 4"
                }],
                ["path", {
                    d: "M16 12H8"
                }]
            ]],
            l2 = ["svg", h, [
                ["path", {
                    d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"
                }],
                ["path", {
                    d: "m3 21 9-9"
                }],
                ["path", {
                    d: "M9 21H3v-6"
                }]
            ]],
            v2 = ["svg", h, [
                ["path", {
                    d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
                }],
                ["path", {
                    d: "m21 21-9-9"
                }],
                ["path", {
                    d: "M21 15v6h-6"
                }]
            ]],
            o2 = ["svg", h, [
                ["path", {
                    d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"
                }],
                ["path", {
                    d: "m3 3 9 9"
                }],
                ["path", {
                    d: "M3 9V3h6"
                }]
            ]],
            s2 = ["svg", h, [
                ["path", {
                    d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                }],
                ["path", {
                    d: "m21 3-9 9"
                }],
                ["path", {
                    d: "M15 3h6v6"
                }]
            ]],
            r2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "m12 16 4-4-4-4"
                }]
            ]],
            g2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 16V8h8"
                }],
                ["path", {
                    d: "M16 16 8 8"
                }]
            ]],
            y2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 8h8v8"
                }],
                ["path", {
                    d: "m8 16 8-8"
                }]
            ]],
            $2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m16 12-4-4-4 4"
                }],
                ["path", {
                    d: "M12 16V8"
                }]
            ]],
            m2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 8v8"
                }],
                ["path", {
                    d: "m8.5 14 7-4"
                }],
                ["path", {
                    d: "m8.5 10 7 4"
                }]
            ]],
            u2 = ["svg", h, [
                ["path", {
                    d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M10 22H8"
                }],
                ["path", {
                    d: "M16 22h-2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "M9.414 9.414 12 12"
                }],
                ["path", {
                    d: "M14.8 14.8 18 18"
                }],
                ["circle", {
                    cx: "8",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "m18 6-8.586 8.586"
                }]
            ]],
            C2 = ["svg", h, [
                ["path", {
                    d: "m9 11 3 3L22 4"
                }],
                ["path", {
                    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                }]
            ]],
            H2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m9 12 2 2 4-4"
                }]
            ]],
            w2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m16 10-4 4-4-4"
                }]
            ]],
            V2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m14 16-4-4 4-4"
                }]
            ]],
            S2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m10 8 4 4-4 4"
                }]
            ]],
            A2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m8 14 4-4 4 4"
                }]
            ]],
            L2 = ["svg", h, [
                ["path", {
                    d: "M10 9.5 8 12l2 2.5"
                }],
                ["path", {
                    d: "m14 9.5 2 2.5-2 2.5"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }]
            ]],
            es = ["svg", h, [
                ["path", {
                    d: "M10 9.5 8 12l2 2.5"
                }],
                ["path", {
                    d: "M14 21h1"
                }],
                ["path", {
                    d: "m14 9.5 2 2.5-2 2.5"
                }],
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M9 21h1"
                }]
            ]],
            is = ["svg", h, [
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M9 21h1"
                }],
                ["path", {
                    d: "M14 21h1"
                }]
            ]],
            f2 = ["svg", h, [
                ["path", {
                    d: "M8 7v7"
                }],
                ["path", {
                    d: "M12 7v4"
                }],
                ["path", {
                    d: "M16 7v9"
                }],
                ["path", {
                    d: "M5 3a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M9 3h1"
                }],
                ["path", {
                    d: "M14 3h1"
                }],
                ["path", {
                    d: "M19 3a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M21 9v1"
                }],
                ["path", {
                    d: "M21 14v1"
                }],
                ["path", {
                    d: "M21 19a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M14 21h1"
                }],
                ["path", {
                    d: "M9 21h1"
                }],
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2"
                }],
                ["path", {
                    d: "M3 14v1"
                }],
                ["path", {
                    d: "M3 9v1"
                }]
            ]],
            k2 = ["svg", h, [
                ["path", {
                    d: "M5 3a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M19 3a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "m12 12 4 10 1.7-4.3L22 16Z"
                }],
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2"
                }],
                ["path", {
                    d: "M9 3h1"
                }],
                ["path", {
                    d: "M9 21h2"
                }],
                ["path", {
                    d: "M14 3h1"
                }],
                ["path", {
                    d: "M3 9v1"
                }],
                ["path", {
                    d: "M21 9v2"
                }],
                ["path", {
                    d: "M3 14v1"
                }]
            ]],
            P2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "16",
                    y2: "16"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "8"
                }]
            ]],
            B2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1"
                }]
            ]],
            F2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 10h10"
                }],
                ["path", {
                    d: "M7 14h10"
                }]
            ]],
            D2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
                }],
                ["path", {
                    d: "M9 11.2h5.7"
                }]
            ]],
            Z2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 8h7"
                }],
                ["path", {
                    d: "M8 12h6"
                }],
                ["path", {
                    d: "M11 16h5"
                }]
            ]],
            R2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 7v7"
                }],
                ["path", {
                    d: "M12 7v4"
                }],
                ["path", {
                    d: "M16 7v9"
                }]
            ]],
            q2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 7v10"
                }],
                ["path", {
                    d: "M11 7v10"
                }],
                ["path", {
                    d: "m15 7 2 10"
                }]
            ]],
            T2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 16V8l4 4 4-4v8"
                }]
            ]],
            z2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 8h10"
                }],
                ["path", {
                    d: "M7 12h10"
                }],
                ["path", {
                    d: "M7 16h10"
                }]
            ]],
            b2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 12h8"
                }]
            ]],
            x2 = ["svg", h, [
                ["path", {
                    d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
                }],
                ["path", {
                    d: "m12 12 4 10 1.7-4.3L22 16Z"
                }]
            ]],
            U2 = ["svg", h, [
                ["path", {
                    d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
                }],
                ["path", {
                    d: "M3 8.7V19a2 2 0 0 0 2 2h10.3"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M13 13a3 3 0 1 0 0-6H9v2"
                }],
                ["path", {
                    d: "M9 17v-2.3"
                }]
            ]],
            O2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M9 17V7h4a3 3 0 0 1 0 6H9"
                }]
            ]],
            i = ["svg", h, [
                ["path", {
                    d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }],
                ["path", {
                    d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                }]
            ]],
            G2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["path", {
                    d: "M15 15h.01"
                }]
            ]],
            E2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 7h10"
                }],
                ["path", {
                    d: "M10 7v10"
                }],
                ["path", {
                    d: "M16 17a2 2 0 0 1-2-2V7"
                }]
            ]],
            W2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"
                }],
                ["path", {
                    d: "M12 7v10"
                }],
                ["path", {
                    d: "M16 7v10"
                }]
            ]],
            I2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "m9 8 6 4-6 4Z"
                }]
            ]],
            X2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["path", {
                    d: "M12 8v8"
                }]
            ]],
            N2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M12 7v5"
                }],
                ["path", {
                    d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"
                }]
            ]],
            ns = ["svg", h, [
                ["path", {
                    d: "M7 12h2l2 5 2-10h4"
                }],
                ["rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2"
                }]
            ]],
            K2 = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "20",
                    x: "2",
                    y: "2",
                    rx: "2"
                }],
                ["circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                }],
                ["path", {
                    d: "M9.414 9.414 12 12"
                }],
                ["path", {
                    d: "M14.8 14.8 18 18"
                }],
                ["circle", {
                    cx: "8",
                    cy: "16",
                    r: "2"
                }],
                ["path", {
                    d: "m18 6-8.586 8.586"
                }]
            ]],
            J2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M16 8.9V7H8l4 5-4 5h8v-1.9"
                }]
            ]],
            j2 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["line", {
                    x1: "9",
                    x2: "15",
                    y1: "15",
                    y2: "9"
                }]
            ]],
            Q2 = ["svg", h, [
                ["path", {
                    d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"
                }],
                ["path", {
                    d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "4",
                    y2: "20"
                }]
            ]],
            Y2 = ["svg", h, [
                ["path", {
                    d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
                }],
                ["path", {
                    d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            ps = ["svg", h, [
                ["path", {
                    d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
                }],
                ["path", {
                    d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
                }],
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "14",
                    y: "14",
                    rx: "2"
                }]
            ]],
            _2 = ["svg", h, [
                ["path", {
                    d: "m7 11 2-2-2-2"
                }],
                ["path", {
                    d: "M11 13h4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }]
            ]],
            a0 = ["svg", h, [
                ["path", {
                    d: "M18 21a6 6 0 0 0-12 0"
                }],
                ["circle", {
                    cx: "12",
                    cy: "11",
                    r: "4"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }]
            ]],
            h0 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }],
                ["path", {
                    d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                }]
            ]],
            t0 = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "m9 9 6 6"
                }]
            ]],
            ls = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }]
            ]],
            vs = ["svg", h, [
                ["path", {
                    d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"
                }]
            ]],
            os = ["svg", h, [
                ["path", {
                    d: "M15.236 22a3 3 0 0 0-2.2-5"
                }],
                ["path", {
                    d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"
                }],
                ["path", {
                    d: "M18 13h.01"
                }],
                ["path", {
                    d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
                }]
            ]],
            ss = ["svg", h, [
                ["path", {
                    d: "M5 22h14"
                }],
                ["path", {
                    d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
                }],
                ["path", {
                    d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
                }]
            ]],
            rs = ["svg", h, [
                ["path", {
                    d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"
                }]
            ]],
            gs = ["svg", h, [
                ["path", {
                    d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
                }],
                ["path", {
                    d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            ys = ["svg", h, [
                ["polygon", {
                    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                }]
            ]],
            $s = ["svg", h, [
                ["line", {
                    x1: "18",
                    x2: "18",
                    y1: "20",
                    y2: "4"
                }],
                ["polygon", {
                    points: "14,20 4,12 14,4"
                }]
            ]],
            ms = ["svg", h, [
                ["line", {
                    x1: "6",
                    x2: "6",
                    y1: "4",
                    y2: "20"
                }],
                ["polygon", {
                    points: "10,4 20,12 10,20"
                }]
            ]],
            us = ["svg", h, [
                ["path", {
                    d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"
                }],
                ["path", {
                    d: "M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4"
                }],
                ["circle", {
                    cx: "20",
                    cy: "10",
                    r: "2"
                }]
            ]],
            Cs = ["svg", h, [
                ["path", {
                    d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
                }],
                ["path", {
                    d: "M14 3v4a2 2 0 0 0 2 2h4"
                }],
                ["path", {
                    d: "M8 13h.01"
                }],
                ["path", {
                    d: "M16 13h.01"
                }],
                ["path", {
                    d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1"
                }]
            ]],
            Hs = ["svg", h, [
                ["path", {
                    d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"
                }],
                ["path", {
                    d: "M15 3v4a2 2 0 0 0 2 2h4"
                }]
            ]],
            ws = ["svg", h, [
                ["path", {
                    d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
                }],
                ["path", {
                    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                }],
                ["path", {
                    d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
                }],
                ["path", {
                    d: "M2 7h20"
                }],
                ["path", {
                    d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
                }]
            ]],
            Vs = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "6",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["rect", {
                    width: "20",
                    height: "6",
                    x: "2",
                    y: "14",
                    rx: "2"
                }]
            ]],
            Ss = ["svg", h, [
                ["rect", {
                    width: "6",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2"
                }],
                ["rect", {
                    width: "6",
                    height: "20",
                    x: "14",
                    y: "2",
                    rx: "2"
                }]
            ]],
            As = ["svg", h, [
                ["path", {
                    d: "M16 4H9a3 3 0 0 0-2.83 4"
                }],
                ["path", {
                    d: "M14 12a4 4 0 0 1 0 8H6"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12"
                }]
            ]],
            Ls = ["svg", h, [
                ["path", {
                    d: "m4 5 8 8"
                }],
                ["path", {
                    d: "m12 5-8 8"
                }],
                ["path", {
                    d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
                }]
            ]],
            fs = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["path", {
                    d: "M12 4h.01"
                }],
                ["path", {
                    d: "M20 12h.01"
                }],
                ["path", {
                    d: "M12 20h.01"
                }],
                ["path", {
                    d: "M4 12h.01"
                }],
                ["path", {
                    d: "M17.657 6.343h.01"
                }],
                ["path", {
                    d: "M17.657 17.657h.01"
                }],
                ["path", {
                    d: "M6.343 17.657h.01"
                }],
                ["path", {
                    d: "M6.343 6.343h.01"
                }]
            ]],
            ks = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["path", {
                    d: "M12 3v1"
                }],
                ["path", {
                    d: "M12 20v1"
                }],
                ["path", {
                    d: "M3 12h1"
                }],
                ["path", {
                    d: "M20 12h1"
                }],
                ["path", {
                    d: "m18.364 5.636-.707.707"
                }],
                ["path", {
                    d: "m6.343 17.657-.707.707"
                }],
                ["path", {
                    d: "m5.636 5.636.707.707"
                }],
                ["path", {
                    d: "m17.657 17.657.707.707"
                }]
            ]],
            Ps = ["svg", h, [
                ["path", {
                    d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"
                }],
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "m4.9 4.9 1.4 1.4"
                }],
                ["path", {
                    d: "m17.7 17.7 1.4 1.4"
                }],
                ["path", {
                    d: "M2 12h2"
                }],
                ["path", {
                    d: "M20 12h2"
                }],
                ["path", {
                    d: "m6.3 17.7-1.4 1.4"
                }],
                ["path", {
                    d: "m19.1 4.9-1.4 1.4"
                }]
            ]],
            Bs = ["svg", h, [
                ["path", {
                    d: "M10 9a3 3 0 1 0 0 6"
                }],
                ["path", {
                    d: "M2 12h1"
                }],
                ["path", {
                    d: "M14 21V3"
                }],
                ["path", {
                    d: "M10 4V3"
                }],
                ["path", {
                    d: "M10 21v-1"
                }],
                ["path", {
                    d: "m3.64 18.36.7-.7"
                }],
                ["path", {
                    d: "m4.34 6.34-.7-.7"
                }],
                ["path", {
                    d: "M14 12h8"
                }],
                ["path", {
                    d: "m17 4-3 3"
                }],
                ["path", {
                    d: "m14 17 3 3"
                }],
                ["path", {
                    d: "m21 15-3-3 3-3"
                }]
            ]],
            Fs = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }],
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41"
                }],
                ["path", {
                    d: "m17.66 17.66 1.41 1.41"
                }],
                ["path", {
                    d: "M2 12h2"
                }],
                ["path", {
                    d: "M20 12h2"
                }],
                ["path", {
                    d: "m6.34 17.66-1.41 1.41"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41"
                }]
            ]],
            Ds = ["svg", h, [
                ["path", {
                    d: "M12 2v8"
                }],
                ["path", {
                    d: "m4.93 10.93 1.41 1.41"
                }],
                ["path", {
                    d: "M2 18h2"
                }],
                ["path", {
                    d: "M20 18h2"
                }],
                ["path", {
                    d: "m19.07 10.93-1.41 1.41"
                }],
                ["path", {
                    d: "M22 22H2"
                }],
                ["path", {
                    d: "m8 6 4-4 4 4"
                }],
                ["path", {
                    d: "M16 18a4 4 0 0 0-8 0"
                }]
            ]],
            Zs = ["svg", h, [
                ["path", {
                    d: "M12 10V2"
                }],
                ["path", {
                    d: "m4.93 10.93 1.41 1.41"
                }],
                ["path", {
                    d: "M2 18h2"
                }],
                ["path", {
                    d: "M20 18h2"
                }],
                ["path", {
                    d: "m19.07 10.93-1.41 1.41"
                }],
                ["path", {
                    d: "M22 22H2"
                }],
                ["path", {
                    d: "m16 6-4 4-4-4"
                }],
                ["path", {
                    d: "M16 18a4 4 0 0 0-8 0"
                }]
            ]],
            Rs = ["svg", h, [
                ["path", {
                    d: "m4 19 8-8"
                }],
                ["path", {
                    d: "m12 19-8-8"
                }],
                ["path", {
                    d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
                }]
            ]],
            qs = ["svg", h, [
                ["path", {
                    d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"
                }],
                ["path", {
                    d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
                }],
                ["path", {
                    d: "M 7 17h.01"
                }],
                ["path", {
                    d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
                }]
            ]],
            Ts = ["svg", h, [
                ["path", {
                    d: "M10 21V3h8"
                }],
                ["path", {
                    d: "M6 16h9"
                }],
                ["path", {
                    d: "M10 9.5h7"
                }]
            ]],
            zs = ["svg", h, [
                ["path", {
                    d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
                }],
                ["path", {
                    d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "m18 22-3-3 3-3"
                }],
                ["path", {
                    d: "m6 2 3 3-3 3"
                }]
            ]],
            bs = ["svg", h, [
                ["polyline", {
                    points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
                }],
                ["line", {
                    x1: "13",
                    x2: "19",
                    y1: "19",
                    y2: "13"
                }],
                ["line", {
                    x1: "16",
                    x2: "20",
                    y1: "16",
                    y2: "20"
                }],
                ["line", {
                    x1: "19",
                    x2: "21",
                    y1: "21",
                    y2: "19"
                }]
            ]],
            xs = ["svg", h, [
                ["polyline", {
                    points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
                }],
                ["line", {
                    x1: "13",
                    x2: "19",
                    y1: "19",
                    y2: "13"
                }],
                ["line", {
                    x1: "16",
                    x2: "20",
                    y1: "16",
                    y2: "20"
                }],
                ["line", {
                    x1: "19",
                    x2: "21",
                    y1: "21",
                    y2: "19"
                }],
                ["polyline", {
                    points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5"
                }],
                ["line", {
                    x1: "5",
                    x2: "9",
                    y1: "14",
                    y2: "18"
                }],
                ["line", {
                    x1: "7",
                    x2: "4",
                    y1: "17",
                    y2: "20"
                }],
                ["line", {
                    x1: "3",
                    x2: "5",
                    y1: "19",
                    y2: "21"
                }]
            ]],
            Us = ["svg", h, [
                ["path", {
                    d: "m18 2 4 4"
                }],
                ["path", {
                    d: "m17 7 3-3"
                }],
                ["path", {
                    d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
                }],
                ["path", {
                    d: "m9 11 4 4"
                }],
                ["path", {
                    d: "m5 19-3 3"
                }],
                ["path", {
                    d: "m14 4 6 6"
                }]
            ]],
            Os = ["svg", h, [
                ["path", {
                    d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
                }]
            ]],
            Gs = ["svg", h, [
                ["path", {
                    d: "M12 21v-6"
                }],
                ["path", {
                    d: "M12 9V3"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }]
            ]],
            Es = ["svg", h, [
                ["path", {
                    d: "M12 15V9"
                }],
                ["path", {
                    d: "M3 15h18"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }]
            ]],
            Ws = ["svg", h, [
                ["path", {
                    d: "M14 14v2"
                }],
                ["path", {
                    d: "M14 20v2"
                }],
                ["path", {
                    d: "M14 2v2"
                }],
                ["path", {
                    d: "M14 8v2"
                }],
                ["path", {
                    d: "M2 15h8"
                }],
                ["path", {
                    d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"
                }],
                ["path", {
                    d: "M2 9h8"
                }],
                ["path", {
                    d: "M22 15h-4"
                }],
                ["path", {
                    d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"
                }],
                ["path", {
                    d: "M22 9h-4"
                }],
                ["path", {
                    d: "M5 3v18"
                }]
            ]],
            Is = ["svg", h, [
                ["path", {
                    d: "M15 3v18"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M21 9H3"
                }],
                ["path", {
                    d: "M21 15H3"
                }]
            ]],
            Xs = ["svg", h, [
                ["path", {
                    d: "M14 10h2"
                }],
                ["path", {
                    d: "M15 22v-8"
                }],
                ["path", {
                    d: "M15 2v4"
                }],
                ["path", {
                    d: "M2 10h2"
                }],
                ["path", {
                    d: "M20 10h2"
                }],
                ["path", {
                    d: "M3 19h18"
                }],
                ["path", {
                    d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"
                }],
                ["path", {
                    d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"
                }],
                ["path", {
                    d: "M8 10h2"
                }],
                ["path", {
                    d: "M9 22v-8"
                }],
                ["path", {
                    d: "M9 2v4"
                }]
            ]],
            Ns = ["svg", h, [
                ["path", {
                    d: "M12 3v18"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9h18"
                }],
                ["path", {
                    d: "M3 15h18"
                }]
            ]],
            Ks = ["svg", h, [
                ["rect", {
                    width: "10",
                    height: "14",
                    x: "3",
                    y: "8",
                    rx: "2"
                }],
                ["path", {
                    d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
                }],
                ["path", {
                    d: "M8 18h.01"
                }]
            ]],
            Js = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "20",
                    x: "4",
                    y: "2",
                    rx: "2",
                    ry: "2"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            js = ["svg", h, [
                ["circle", {
                    cx: "7",
                    cy: "7",
                    r: "5"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "5"
                }],
                ["path", {
                    d: "M12 17h10"
                }],
                ["path", {
                    d: "m3.46 10.54 7.08-7.08"
                }]
            ]],
            Qs = ["svg", h, [
                ["path", {
                    d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }]
            ]],
            Ys = ["svg", h, [
                ["path", {
                    d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
                }],
                ["path", {
                    d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
                }],
                ["circle", {
                    cx: "6.5",
                    cy: "9.5",
                    r: ".5",
                    fill: "currentColor"
                }]
            ]],
            _s = ["svg", h, [
                ["path", {
                    d: "M4 4v16"
                }]
            ]],
            ar = ["svg", h, [
                ["path", {
                    d: "M4 4v16"
                }],
                ["path", {
                    d: "M9 4v16"
                }]
            ]],
            hr = ["svg", h, [
                ["path", {
                    d: "M4 4v16"
                }],
                ["path", {
                    d: "M9 4v16"
                }],
                ["path", {
                    d: "M14 4v16"
                }]
            ]],
            tr = ["svg", h, [
                ["path", {
                    d: "M4 4v16"
                }],
                ["path", {
                    d: "M9 4v16"
                }],
                ["path", {
                    d: "M14 4v16"
                }],
                ["path", {
                    d: "M19 4v16"
                }]
            ]],
            dr = ["svg", h, [
                ["path", {
                    d: "M4 4v16"
                }],
                ["path", {
                    d: "M9 4v16"
                }],
                ["path", {
                    d: "M14 4v16"
                }],
                ["path", {
                    d: "M19 4v16"
                }],
                ["path", {
                    d: "M22 6 2 18"
                }]
            ]],
            cr = ["svg", h, [
                ["circle", {
                    cx: "17",
                    cy: "4",
                    r: "2"
                }],
                ["path", {
                    d: "M15.59 5.41 5.41 15.59"
                }],
                ["circle", {
                    cx: "4",
                    cy: "17",
                    r: "2"
                }],
                ["path", {
                    d: "M12 22s-4-9-1.5-11.5S22 12 22 12"
                }]
            ]],
            Mr = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "6"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }]
            ]],
            er = ["svg", h, [
                ["path", {
                    d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
                }],
                ["path", {
                    d: "m13.56 11.747 4.332-.924"
                }],
                ["path", {
                    d: "m16 21-3.105-6.21"
                }],
                ["path", {
                    d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
                }],
                ["path", {
                    d: "m6.158 8.633 1.114 4.456"
                }],
                ["path", {
                    d: "m8 21 3.105-6.21"
                }],
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "2"
                }]
            ]],
            ir = ["svg", h, [
                ["circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }],
                ["path", {
                    d: "m14 5 3-3 3 3"
                }],
                ["path", {
                    d: "m14 10 3-3 3 3"
                }],
                ["path", {
                    d: "M17 14V2"
                }],
                ["path", {
                    d: "M17 14H7l-5 8h20Z"
                }],
                ["path", {
                    d: "M8 14v8"
                }],
                ["path", {
                    d: "m9 14 5 8"
                }]
            ]],
            nr = ["svg", h, [
                ["path", {
                    d: "M3.5 21 14 3"
                }],
                ["path", {
                    d: "M20.5 21 10 3"
                }],
                ["path", {
                    d: "M15.5 21 12 15l-3.5 6"
                }],
                ["path", {
                    d: "M2 21h20"
                }]
            ]],
            pr = ["svg", h, [
                ["polyline", {
                    points: "4 17 10 11 4 5"
                }],
                ["line", {
                    x1: "12",
                    x2: "20",
                    y1: "19",
                    y2: "19"
                }]
            ]],
            d0 = ["svg", h, [
                ["path", {
                    d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"
                }],
                ["path", {
                    d: "m16 2 6 6"
                }],
                ["path", {
                    d: "M12 16H4"
                }]
            ]],
            lr = ["svg", h, [
                ["path", {
                    d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"
                }],
                ["path", {
                    d: "M8.5 2h7"
                }],
                ["path", {
                    d: "M14.5 16h-5"
                }]
            ]],
            vr = ["svg", h, [
                ["path", {
                    d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"
                }],
                ["path", {
                    d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"
                }],
                ["path", {
                    d: "M3 2h7"
                }],
                ["path", {
                    d: "M14 2h7"
                }],
                ["path", {
                    d: "M9 16H4"
                }],
                ["path", {
                    d: "M20 16h-5"
                }]
            ]],
            or = ["svg", h, [
                ["path", {
                    d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"
                }],
                ["path", {
                    d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"
                }],
                ["path", {
                    d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
                }],
                ["path", {
                    d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
                }],
                ["path", {
                    d: "M9 7v10"
                }]
            ]],
            sr = ["svg", h, [
                ["path", {
                    d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"
                }],
                ["path", {
                    d: "M7 22h1a4 4 0 0 0 4-4v-1"
                }],
                ["path", {
                    d: "M7 2h1a4 4 0 0 1 4 4v1"
                }]
            ]],
            rr = ["svg", h, [
                ["path", {
                    d: "M17 6H3"
                }],
                ["path", {
                    d: "M21 12H8"
                }],
                ["path", {
                    d: "M21 18H8"
                }],
                ["path", {
                    d: "M3 12v6"
                }]
            ]],
            gr = ["svg", h, [
                ["path", {
                    d: "M21 6H3"
                }],
                ["path", {
                    d: "M10 12H3"
                }],
                ["path", {
                    d: "M10 18H3"
                }],
                ["circle", {
                    cx: "17",
                    cy: "15",
                    r: "3"
                }],
                ["path", {
                    d: "m21 19-1.9-1.9"
                }]
            ]],
            c0 = ["svg", h, [
                ["path", {
                    d: "M5 3a2 2 0 0 0-2 2"
                }],
                ["path", {
                    d: "M19 3a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M21 19a2 2 0 0 1-2 2"
                }],
                ["path", {
                    d: "M5 21a2 2 0 0 1-2-2"
                }],
                ["path", {
                    d: "M9 3h1"
                }],
                ["path", {
                    d: "M9 21h1"
                }],
                ["path", {
                    d: "M14 3h1"
                }],
                ["path", {
                    d: "M14 21h1"
                }],
                ["path", {
                    d: "M3 9v1"
                }],
                ["path", {
                    d: "M21 9v1"
                }],
                ["path", {
                    d: "M3 14v1"
                }],
                ["path", {
                    d: "M21 14v1"
                }],
                ["line", {
                    x1: "7",
                    x2: "15",
                    y1: "8",
                    y2: "8"
                }],
                ["line", {
                    x1: "7",
                    x2: "17",
                    y1: "12",
                    y2: "12"
                }],
                ["line", {
                    x1: "7",
                    x2: "13",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            yr = ["svg", h, [
                ["path", {
                    d: "M17 6.1H3"
                }],
                ["path", {
                    d: "M21 12.1H3"
                }],
                ["path", {
                    d: "M15.1 18H3"
                }]
            ]],
            $r = ["svg", h, [
                ["path", {
                    d: "M2 10s3-3 3-8"
                }],
                ["path", {
                    d: "M22 10s-3-3-3-8"
                }],
                ["path", {
                    d: "M10 2c0 4.4-3.6 8-8 8"
                }],
                ["path", {
                    d: "M14 2c0 4.4 3.6 8 8 8"
                }],
                ["path", {
                    d: "M2 10s2 2 2 5"
                }],
                ["path", {
                    d: "M22 10s-2 2-2 5"
                }],
                ["path", {
                    d: "M8 15h8"
                }],
                ["path", {
                    d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                }],
                ["path", {
                    d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                }]
            ]],
            mr = ["svg", h, [
                ["path", {
                    d: "M2 12h10"
                }],
                ["path", {
                    d: "M9 4v16"
                }],
                ["path", {
                    d: "m3 9 3 3-3 3"
                }],
                ["path", {
                    d: "M12 6 9 9 6 6"
                }],
                ["path", {
                    d: "m6 18 3-3 1.5 1.5"
                }],
                ["path", {
                    d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
                }]
            ]],
            ur = ["svg", h, [
                ["path", {
                    d: "M12 9a4 4 0 0 0-2 7.5"
                }],
                ["path", {
                    d: "M12 3v2"
                }],
                ["path", {
                    d: "m6.6 18.4-1.4 1.4"
                }],
                ["path", {
                    d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
                }],
                ["path", {
                    d: "M4 13H2"
                }],
                ["path", {
                    d: "M6.34 7.34 4.93 5.93"
                }]
            ]],
            Cr = ["svg", h, [
                ["path", {
                    d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
                }]
            ]],
            Hr = ["svg", h, [
                ["path", {
                    d: "M17 14V2"
                }],
                ["path", {
                    d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
                }]
            ]],
            wr = ["svg", h, [
                ["path", {
                    d: "M7 10v12"
                }],
                ["path", {
                    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                }]
            ]],
            Vr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "m9 12 2 2 4-4"
                }]
            ]],
            Sr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "M9 12h6"
                }]
            ]],
            Ar = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "M9 9h.01"
                }],
                ["path", {
                    d: "m15 9-6 6"
                }],
                ["path", {
                    d: "M15 15h.01"
                }]
            ]],
            Lr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "M9 12h6"
                }],
                ["path", {
                    d: "M12 9v6"
                }]
            ]],
            fr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "m9.5 14.5 5-5"
                }]
            ]],
            kr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "m9.5 14.5 5-5"
                }],
                ["path", {
                    d: "m9.5 9.5 5 5"
                }]
            ]],
            Pr = ["svg", h, [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                }],
                ["path", {
                    d: "M13 5v2"
                }],
                ["path", {
                    d: "M13 17v2"
                }],
                ["path", {
                    d: "M13 11v2"
                }]
            ]],
            Br = ["svg", h, [
                ["path", {
                    d: "M10 2h4"
                }],
                ["path", {
                    d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"
                }],
                ["path", {
                    d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M12 12v-2"
                }]
            ]],
            Fr = ["svg", h, [
                ["path", {
                    d: "M10 2h4"
                }],
                ["path", {
                    d: "M12 14v-4"
                }],
                ["path", {
                    d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
                }],
                ["path", {
                    d: "M9 17H4v5"
                }]
            ]],
            Dr = ["svg", h, [
                ["line", {
                    x1: "10",
                    x2: "14",
                    y1: "2",
                    y2: "2"
                }],
                ["line", {
                    x1: "12",
                    x2: "15",
                    y1: "14",
                    y2: "11"
                }],
                ["circle", {
                    cx: "12",
                    cy: "14",
                    r: "8"
                }]
            ]],
            Zr = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "6",
                    ry: "6"
                }],
                ["circle", {
                    cx: "8",
                    cy: "12",
                    r: "2"
                }]
            ]],
            Rr = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "12",
                    x: "2",
                    y: "6",
                    rx: "6",
                    ry: "6"
                }],
                ["circle", {
                    cx: "16",
                    cy: "12",
                    r: "2"
                }]
            ]],
            qr = ["svg", h, [
                ["path", {
                    d: "M21 4H3"
                }],
                ["path", {
                    d: "M18 8H6"
                }],
                ["path", {
                    d: "M19 12H9"
                }],
                ["path", {
                    d: "M16 16h-6"
                }],
                ["path", {
                    d: "M11 20H9"
                }]
            ]],
            Tr = ["svg", h, [
                ["ellipse", {
                    cx: "12",
                    cy: "11",
                    rx: "3",
                    ry: "2"
                }],
                ["ellipse", {
                    cx: "12",
                    cy: "12.5",
                    rx: "10",
                    ry: "8.5"
                }]
            ]],
            zr = ["svg", h, [
                ["path", {
                    d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"
                }],
                ["path", {
                    d: "M2 14h12"
                }],
                ["path", {
                    d: "M22 14h-2"
                }],
                ["path", {
                    d: "M12 20v-6"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }],
                ["path", {
                    d: "M22 16V6a2 2 0 0 0-2-2H10"
                }]
            ]],
            br = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 14h20"
                }],
                ["path", {
                    d: "M12 20v-6"
                }]
            ]],
            xr = ["svg", h, [
                ["path", {
                    d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
                }],
                ["path", {
                    d: "M8 13v9"
                }],
                ["path", {
                    d: "M16 22v-9"
                }],
                ["path", {
                    d: "m9 6 1 7"
                }],
                ["path", {
                    d: "m15 6-1 7"
                }],
                ["path", {
                    d: "M12 6V2"
                }],
                ["path", {
                    d: "M13 2h-2"
                }]
            ]],
            Ur = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "12",
                    x: "3",
                    y: "8",
                    rx: "1"
                }],
                ["path", {
                    d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
                }],
                ["path", {
                    d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
                }]
            ]],
            Or = ["svg", h, [
                ["path", {
                    d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"
                }],
                ["path", {
                    d: "M16 18h-5"
                }],
                ["path", {
                    d: "M18 5a1 1 0 0 0-1 1v5.573"
                }],
                ["path", {
                    d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"
                }],
                ["path", {
                    d: "M4 11V4"
                }],
                ["path", {
                    d: "M7 15h.01"
                }],
                ["path", {
                    d: "M8 10.1V4"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "2"
                }],
                ["circle", {
                    cx: "7",
                    cy: "15",
                    r: "5"
                }]
            ]],
            Gr = ["svg", h, [
                ["path", {
                    d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"
                }],
                ["path", {
                    d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"
                }],
                ["path", {
                    d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
                }],
                ["path", {
                    d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
                }]
            ]],
            Er = ["svg", h, [
                ["path", {
                    d: "M2 22V12a10 10 0 1 1 20 0v10"
                }],
                ["path", {
                    d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
                }],
                ["path", {
                    d: "M10 15h.01"
                }],
                ["path", {
                    d: "M14 15h.01"
                }],
                ["path", {
                    d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
                }],
                ["path", {
                    d: "m9 19-2 3"
                }],
                ["path", {
                    d: "m15 19 2 3"
                }]
            ]],
            Wr = ["svg", h, [
                ["path", {
                    d: "M8 3.1V7a4 4 0 0 0 8 0V3.1"
                }],
                ["path", {
                    d: "m9 15-1-1"
                }],
                ["path", {
                    d: "m15 15 1-1"
                }],
                ["path", {
                    d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
                }],
                ["path", {
                    d: "m8 19-2 3"
                }],
                ["path", {
                    d: "m16 19 2 3"
                }]
            ]],
            Ir = ["svg", h, [
                ["path", {
                    d: "M2 17 17 2"
                }],
                ["path", {
                    d: "m2 14 8 8"
                }],
                ["path", {
                    d: "m5 11 8 8"
                }],
                ["path", {
                    d: "m8 8 8 8"
                }],
                ["path", {
                    d: "m11 5 8 8"
                }],
                ["path", {
                    d: "m14 2 8 8"
                }],
                ["path", {
                    d: "M7 22 22 7"
                }]
            ]],
            M0 = ["svg", h, [
                ["rect", {
                    width: "16",
                    height: "16",
                    x: "4",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M4 11h16"
                }],
                ["path", {
                    d: "M12 3v8"
                }],
                ["path", {
                    d: "m8 19-2 3"
                }],
                ["path", {
                    d: "m18 22-2-3"
                }],
                ["path", {
                    d: "M8 15h.01"
                }],
                ["path", {
                    d: "M16 15h.01"
                }]
            ]],
            Xr = ["svg", h, [
                ["path", {
                    d: "M3 6h18"
                }],
                ["path", {
                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                }],
                ["path", {
                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "11",
                    y2: "17"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "11",
                    y2: "17"
                }]
            ]],
            Nr = ["svg", h, [
                ["path", {
                    d: "M3 6h18"
                }],
                ["path", {
                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                }],
                ["path", {
                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                }]
            ]],
            Kr = ["svg", h, [
                ["path", {
                    d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
                }],
                ["path", {
                    d: "M12 19v3"
                }]
            ]],
            e0 = ["svg", h, [
                ["path", {
                    d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
                }],
                ["path", {
                    d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
                }],
                ["path", {
                    d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
                }],
                ["path", {
                    d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"
                }]
            ]],
            Jr = ["svg", h, [
                ["path", {
                    d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
                }],
                ["path", {
                    d: "M12 22v-3"
                }]
            ]],
            jr = ["svg", h, [
                ["path", {
                    d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
                }],
                ["path", {
                    d: "M7 16v6"
                }],
                ["path", {
                    d: "M13 19v3"
                }],
                ["path", {
                    d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
                }]
            ]],
            Qr = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2"
                }],
                ["rect", {
                    width: "3",
                    height: "9",
                    x: "7",
                    y: "7"
                }],
                ["rect", {
                    width: "3",
                    height: "5",
                    x: "14",
                    y: "7"
                }]
            ]],
            Yr = ["svg", h, [
                ["polyline", {
                    points: "22 17 13.5 8.5 8.5 13.5 2 7"
                }],
                ["polyline", {
                    points: "16 17 22 17 22 11"
                }]
            ]],
            _r = ["svg", h, [
                ["polyline", {
                    points: "22 7 13.5 15.5 8.5 10.5 2 17"
                }],
                ["polyline", {
                    points: "16 7 22 7 22 13"
                }]
            ]],
            i0 = ["svg", h, [
                ["path", {
                    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                }],
                ["path", {
                    d: "M12 9v4"
                }],
                ["path", {
                    d: "M12 17h.01"
                }]
            ]],
            ag = ["svg", h, [
                ["path", {
                    d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
                }]
            ]],
            hg = ["svg", h, [
                ["path", {
                    d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                }]
            ]],
            tg = ["svg", h, [
                ["path", {
                    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                }],
                ["path", {
                    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                }],
                ["path", {
                    d: "M4 22h16"
                }],
                ["path", {
                    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                }],
                ["path", {
                    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                }],
                ["path", {
                    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
                }]
            ]],
            dg = ["svg", h, [
                ["path", {
                    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
                }],
                ["path", {
                    d: "M15 18H9"
                }],
                ["path", {
                    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
                }],
                ["circle", {
                    cx: "17",
                    cy: "18",
                    r: "2"
                }],
                ["circle", {
                    cx: "7",
                    cy: "18",
                    r: "2"
                }]
            ]],
            cg = ["svg", h, [
                ["path", {
                    d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
                }],
                ["path", {
                    d: "M4.82 7.9 8 10"
                }],
                ["path", {
                    d: "M15.18 7.9 12 10"
                }],
                ["path", {
                    d: "M16.93 10H20a2 2 0 0 1 0 4H2"
                }]
            ]],
            Mg = ["svg", h, [
                ["path", {
                    d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
                }],
                ["path", {
                    d: "M7 21h10"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }]
            ]],
            n0 = ["svg", h, [
                ["path", {
                    d: "M7 21h10"
                }],
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2"
                }]
            ]],
            eg = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "15",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }],
                ["polyline", {
                    points: "17 2 12 7 7 2"
                }]
            ]],
            ig = ["svg", h, [
                ["path", {
                    d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
                }]
            ]],
            ng = ["svg", h, [
                ["path", {
                    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                }]
            ]],
            pg = ["svg", h, [
                ["polyline", {
                    points: "4 7 4 4 20 4 20 7"
                }],
                ["line", {
                    x1: "9",
                    x2: "15",
                    y1: "20",
                    y2: "20"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "4",
                    y2: "20"
                }]
            ]],
            lg = ["svg", h, [
                ["path", {
                    d: "M12 2v1"
                }],
                ["path", {
                    d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"
                }],
                ["path", {
                    d: "M17.5 12H22A10 10 0 0 0 9.004 3.455"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            vg = ["svg", h, [
                ["path", {
                    d: "M22 12a10.06 10.06 1 0 0-20 0Z"
                }],
                ["path", {
                    d: "M12 12v8a2 2 0 0 0 4 0"
                }],
                ["path", {
                    d: "M12 2v1"
                }]
            ]],
            og = ["svg", h, [
                ["path", {
                    d: "M6 4v6a6 6 0 0 0 12 0V4"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "20",
                    y2: "20"
                }]
            ]],
            sg = ["svg", h, [
                ["path", {
                    d: "M9 14 4 9l5-5"
                }],
                ["path", {
                    d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
                }]
            ]],
            rg = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "17",
                    r: "1"
                }],
                ["path", {
                    d: "M3 7v6h6"
                }],
                ["path", {
                    d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
                }]
            ]],
            gg = ["svg", h, [
                ["path", {
                    d: "M3 7v6h6"
                }],
                ["path", {
                    d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
                }]
            ]],
            yg = ["svg", h, [
                ["path", {
                    d: "M16 12h6"
                }],
                ["path", {
                    d: "M8 12H2"
                }],
                ["path", {
                    d: "M12 2v2"
                }],
                ["path", {
                    d: "M12 8v2"
                }],
                ["path", {
                    d: "M12 14v2"
                }],
                ["path", {
                    d: "M12 20v2"
                }],
                ["path", {
                    d: "m19 15 3-3-3-3"
                }],
                ["path", {
                    d: "m5 9-3 3 3 3"
                }]
            ]],
            $g = ["svg", h, [
                ["path", {
                    d: "M12 22v-6"
                }],
                ["path", {
                    d: "M12 8V2"
                }],
                ["path", {
                    d: "M4 12H2"
                }],
                ["path", {
                    d: "M10 12H8"
                }],
                ["path", {
                    d: "M16 12h-2"
                }],
                ["path", {
                    d: "M22 12h-2"
                }],
                ["path", {
                    d: "m15 19-3 3-3-3"
                }],
                ["path", {
                    d: "m15 5-3-3-3 3"
                }]
            ]],
            mg = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "6",
                    x: "5",
                    y: "4",
                    rx: "1"
                }],
                ["rect", {
                    width: "8",
                    height: "6",
                    x: "11",
                    y: "14",
                    rx: "1"
                }]
            ]],
            p0 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "1"
                }],
                ["path", {
                    d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
                }],
                ["path", {
                    d: "M6 17v.01"
                }],
                ["path", {
                    d: "M6 13v.01"
                }],
                ["path", {
                    d: "M18 17v.01"
                }],
                ["path", {
                    d: "M18 13v.01"
                }],
                ["path", {
                    d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
                }]
            ]],
            ug = ["svg", h, [
                ["path", {
                    d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"
                }]
            ]],
            Cg = ["svg", h, [
                ["path", {
                    d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
                }],
                ["path", {
                    d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "2",
                    y2: "5"
                }],
                ["line", {
                    x1: "2",
                    x2: "5",
                    y1: "8",
                    y2: "8"
                }],
                ["line", {
                    x1: "16",
                    x2: "16",
                    y1: "19",
                    y2: "22"
                }],
                ["line", {
                    x1: "19",
                    x2: "22",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            Hg = ["svg", h, [
                ["path", {
                    d: "m19 5 3-3"
                }],
                ["path", {
                    d: "m2 22 3-3"
                }],
                ["path", {
                    d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
                }],
                ["path", {
                    d: "M7.5 13.5 10 11"
                }],
                ["path", {
                    d: "M10.5 16.5 13 14"
                }],
                ["path", {
                    d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
                }]
            ]],
            wg = ["svg", h, [
                ["path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }],
                ["polyline", {
                    points: "17 8 12 3 7 8"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "3",
                    y2: "15"
                }]
            ]],
            Vg = ["svg", h, [
                ["circle", {
                    cx: "10",
                    cy: "7",
                    r: "1"
                }],
                ["circle", {
                    cx: "4",
                    cy: "20",
                    r: "1"
                }],
                ["path", {
                    d: "M4.7 19.3 19 5"
                }],
                ["path", {
                    d: "m21 3-3 1 2 2Z"
                }],
                ["path", {
                    d: "M9.26 7.68 5 12l2 5"
                }],
                ["path", {
                    d: "m10 14 5 2 3.5-3.5"
                }],
                ["path", {
                    d: "m18 12 1-1 1 1-1 1Z"
                }]
            ]],
            Sg = ["svg", h, [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["polyline", {
                    points: "16 11 18 13 22 9"
                }]
            ]],
            Ag = ["svg", h, [
                ["circle", {
                    cx: "18",
                    cy: "15",
                    r: "3"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["path", {
                    d: "M10 15H6a4 4 0 0 0-4 4v2"
                }],
                ["path", {
                    d: "m21.7 16.4-.9-.3"
                }],
                ["path", {
                    d: "m15.2 13.9-.9-.3"
                }],
                ["path", {
                    d: "m16.6 18.7.3-.9"
                }],
                ["path", {
                    d: "m19.1 12.2.3-.9"
                }],
                ["path", {
                    d: "m19.6 18.7-.4-1"
                }],
                ["path", {
                    d: "m16.8 12.3-.4-1"
                }],
                ["path", {
                    d: "m14.3 16.6 1-.4"
                }],
                ["path", {
                    d: "m20.7 13.8 1-.4"
                }]
            ]],
            Lg = ["svg", h, [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "11",
                    y2: "11"
                }]
            ]],
            fg = ["svg", h, [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["line", {
                    x1: "19",
                    x2: "19",
                    y1: "8",
                    y2: "14"
                }],
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "11",
                    y2: "11"
                }]
            ]],
            l0 = ["svg", h, [
                ["path", {
                    d: "M2 21a8 8 0 0 1 13.292-6"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4"
                }]
            ]],
            v0 = ["svg", h, [
                ["path", {
                    d: "M2 21a8 8 0 0 1 10.434-7.62"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "m19.5 14.3-.4.9"
                }],
                ["path", {
                    d: "m16.9 20.8-.4.9"
                }],
                ["path", {
                    d: "m21.7 19.5-.9-.4"
                }],
                ["path", {
                    d: "m15.2 16.9-.9-.4"
                }],
                ["path", {
                    d: "m21.7 16.5-.9.4"
                }],
                ["path", {
                    d: "m15.2 19.1-.9.4"
                }],
                ["path", {
                    d: "m19.5 21.7-.4-.9"
                }],
                ["path", {
                    d: "m16.9 15.2-.4-.9"
                }]
            ]],
            o0 = ["svg", h, [
                ["path", {
                    d: "M2 21a8 8 0 0 1 13.292-6"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "M22 19h-6"
                }]
            ]],
            s0 = ["svg", h, [
                ["path", {
                    d: "M2 21a8 8 0 0 1 13.292-6"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "M19 16v6"
                }],
                ["path", {
                    d: "M22 19h-6"
                }]
            ]],
            kg = ["svg", h, [
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "M2 21a8 8 0 0 1 10.434-7.62"
                }],
                ["circle", {
                    cx: "18",
                    cy: "18",
                    r: "3"
                }],
                ["path", {
                    d: "m22 22-1.9-1.9"
                }]
            ]],
            r0 = ["svg", h, [
                ["path", {
                    d: "M2 21a8 8 0 0 1 11.873-7"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "m17 17 5 5"
                }],
                ["path", {
                    d: "m22 17-5 5"
                }]
            ]],
            g0 = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "M20 21a8 8 0 0 0-16 0"
                }]
            ]],
            Pg = ["svg", h, [
                ["circle", {
                    cx: "10",
                    cy: "7",
                    r: "4"
                }],
                ["path", {
                    d: "M10.3 15H7a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "3"
                }],
                ["path", {
                    d: "m21 21-1.9-1.9"
                }]
            ]],
            Bg = ["svg", h, [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["line", {
                    x1: "17",
                    x2: "22",
                    y1: "8",
                    y2: "13"
                }],
                ["line", {
                    x1: "22",
                    x2: "17",
                    y1: "8",
                    y2: "13"
                }]
            ]],
            Fg = ["svg", h, [
                ["path", {
                    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }]
            ]],
            y0 = ["svg", h, [
                ["path", {
                    d: "M18 21a8 8 0 0 0-16 0"
                }],
                ["circle", {
                    cx: "10",
                    cy: "8",
                    r: "5"
                }],
                ["path", {
                    d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
                }]
            ]],
            Dg = ["svg", h, [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }],
                ["path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                }],
                ["path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }]
            ]],
            Zg = ["svg", h, [
                ["path", {
                    d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
                }],
                ["path", {
                    d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
                }],
                ["path", {
                    d: "m2.1 21.8 6.4-6.3"
                }],
                ["path", {
                    d: "m19 5-7 7"
                }]
            ]],
            Rg = ["svg", h, [
                ["path", {
                    d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
                }],
                ["path", {
                    d: "M7 2v20"
                }],
                ["path", {
                    d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                }]
            ]],
            qg = ["svg", h, [
                ["path", {
                    d: "M12 2v20"
                }],
                ["path", {
                    d: "M2 5h20"
                }],
                ["path", {
                    d: "M3 3v2"
                }],
                ["path", {
                    d: "M7 3v2"
                }],
                ["path", {
                    d: "M17 3v2"
                }],
                ["path", {
                    d: "M21 3v2"
                }],
                ["path", {
                    d: "m19 5-7 7-7-7"
                }]
            ]],
            Tg = ["svg", h, [
                ["path", {
                    d: "M8 21s-4-3-4-9 4-9 4-9"
                }],
                ["path", {
                    d: "M16 3s4 3 4 9-4 9-4 9"
                }],
                ["line", {
                    x1: "15",
                    x2: "9",
                    y1: "9",
                    y2: "15"
                }],
                ["line", {
                    x1: "9",
                    x2: "15",
                    y1: "9",
                    y2: "15"
                }]
            ]],
            zg = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "m7.9 7.9 2.7 2.7"
                }],
                ["circle", {
                    cx: "16.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "m13.4 10.6 2.7-2.7"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "16.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "m7.9 16.1 2.7-2.7"
                }],
                ["circle", {
                    cx: "16.5",
                    cy: "16.5",
                    r: ".5",
                    fill: "currentColor"
                }],
                ["path", {
                    d: "m13.4 13.4 2.7 2.7"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }]
            ]],
            bg = ["svg", h, [
                ["path", {
                    d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"
                }],
                ["path", {
                    d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6"
                }],
                ["path", {
                    d: "M17.41 3.6a10 10 0 1 0 3 3"
                }]
            ]],
            xg = ["svg", h, [
                ["path", {
                    d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
                }],
                ["path", {
                    d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"
                }],
                ["path", {
                    d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"
                }]
            ]],
            Ug = ["svg", h, [
                ["path", {
                    d: "m2 8 2 2-2 2 2 2-2 2"
                }],
                ["path", {
                    d: "m22 8-2 2 2 2-2 2 2 2"
                }],
                ["path", {
                    d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
                }],
                ["path", {
                    d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            Og = ["svg", h, [
                ["path", {
                    d: "m2 8 2 2-2 2 2 2-2 2"
                }],
                ["path", {
                    d: "m22 8-2 2 2 2-2 2 2 2"
                }],
                ["rect", {
                    width: "8",
                    height: "14",
                    x: "8",
                    y: "5",
                    rx: "1"
                }]
            ]],
            Gg = ["svg", h, [
                ["path", {
                    d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"
                }],
                ["path", {
                    d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            Eg = ["svg", h, [
                ["path", {
                    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
                }],
                ["rect", {
                    x: "2",
                    y: "6",
                    width: "14",
                    height: "12",
                    rx: "2"
                }]
            ]],
            Wg = ["svg", h, [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }],
                ["path", {
                    d: "M2 8h20"
                }],
                ["circle", {
                    cx: "8",
                    cy: "14",
                    r: "2"
                }],
                ["path", {
                    d: "M8 12h8"
                }],
                ["circle", {
                    cx: "16",
                    cy: "14",
                    r: "2"
                }]
            ]],
            Ig = ["svg", h, [
                ["path", {
                    d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"
                }],
                ["path", {
                    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                }],
                ["path", {
                    d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
                }],
                ["path", {
                    d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
                }]
            ]],
            Xg = ["svg", h, [
                ["circle", {
                    cx: "6",
                    cy: "12",
                    r: "4"
                }],
                ["circle", {
                    cx: "18",
                    cy: "12",
                    r: "4"
                }],
                ["line", {
                    x1: "6",
                    x2: "18",
                    y1: "16",
                    y2: "16"
                }]
            ]],
            Ng = ["svg", h, [
                ["polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }],
                ["path", {
                    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
                }]
            ]],
            Kg = ["svg", h, [
                ["polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }],
                ["path", {
                    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
                }],
                ["path", {
                    d: "M19.07 4.93a10 10 0 0 1 0 14.14"
                }]
            ]],
            Jg = ["svg", h, [
                ["polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }],
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "9",
                    y2: "15"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "9",
                    y2: "15"
                }]
            ]],
            jg = ["svg", h, [
                ["polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }]
            ]],
            Qg = ["svg", h, [
                ["path", {
                    d: "m9 12 2 2 4-4"
                }],
                ["path", {
                    d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
                }],
                ["path", {
                    d: "M22 19H2"
                }]
            ]],
            Yg = ["svg", h, [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
                }],
                ["path", {
                    d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
                }]
            ]],
            $0 = ["svg", h, [
                ["path", {
                    d: "M17 14h.01"
                }],
                ["path", {
                    d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
                }]
            ]],
            _g = ["svg", h, [
                ["path", {
                    d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
                }],
                ["path", {
                    d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
                }]
            ]],
            ay = ["svg", h, [
                ["circle", {
                    cx: "8",
                    cy: "9",
                    r: "2"
                }],
                ["path", {
                    d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
                }],
                ["path", {
                    d: "M8 21h8"
                }],
                ["path", {
                    d: "M12 17v4"
                }]
            ]],
            m0 = ["svg", h, [
                ["path", {
                    d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
                }],
                ["path", {
                    d: "m14 7 3 3"
                }],
                ["path", {
                    d: "M5 6v4"
                }],
                ["path", {
                    d: "M19 14v4"
                }],
                ["path", {
                    d: "M10 2v2"
                }],
                ["path", {
                    d: "M7 8H3"
                }],
                ["path", {
                    d: "M21 16h-4"
                }],
                ["path", {
                    d: "M11 3H9"
                }]
            ]],
            hy = ["svg", h, [
                ["path", {
                    d: "M15 4V2"
                }],
                ["path", {
                    d: "M15 16v-2"
                }],
                ["path", {
                    d: "M8 9h2"
                }],
                ["path", {
                    d: "M20 9h2"
                }],
                ["path", {
                    d: "M17.8 11.8 19 13"
                }],
                ["path", {
                    d: "M15 9h.01"
                }],
                ["path", {
                    d: "M17.8 6.2 19 5"
                }],
                ["path", {
                    d: "m3 21 9-9"
                }],
                ["path", {
                    d: "M12.2 6.2 11 5"
                }]
            ]],
            ty = ["svg", h, [
                ["path", {
                    d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
                }],
                ["path", {
                    d: "M6 18h12"
                }],
                ["path", {
                    d: "M6 14h12"
                }],
                ["rect", {
                    width: "12",
                    height: "12",
                    x: "6",
                    y: "10"
                }]
            ]],
            dy = ["svg", h, [
                ["path", {
                    d: "M3 6h3"
                }],
                ["path", {
                    d: "M17 6h.01"
                }],
                ["rect", {
                    width: "18",
                    height: "20",
                    x: "3",
                    y: "2",
                    rx: "2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "13",
                    r: "5"
                }],
                ["path", {
                    d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"
                }]
            ]],
            cy = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "6"
                }],
                ["polyline", {
                    points: "12 10 12 12 13 13"
                }],
                ["path", {
                    d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
                }],
                ["path", {
                    d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
                }]
            ]],
            My = ["svg", h, [
                ["path", {
                    d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                }],
                ["path", {
                    d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                }],
                ["path", {
                    d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                }]
            ]],
            ey = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "4.5",
                    r: "2.5"
                }],
                ["path", {
                    d: "m10.2 6.3-3.9 3.9"
                }],
                ["circle", {
                    cx: "4.5",
                    cy: "12",
                    r: "2.5"
                }],
                ["path", {
                    d: "M7 12h10"
                }],
                ["circle", {
                    cx: "19.5",
                    cy: "12",
                    r: "2.5"
                }],
                ["path", {
                    d: "m13.8 17.7 3.9-3.9"
                }],
                ["circle", {
                    cx: "12",
                    cy: "19.5",
                    r: "2.5"
                }]
            ]],
            iy = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "8"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }],
                ["path", {
                    d: "M7 22h10"
                }],
                ["path", {
                    d: "M12 22v-4"
                }]
            ]],
            ny = ["svg", h, [
                ["path", {
                    d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"
                }],
                ["path", {
                    d: "M9 3.4a4 4 0 0 1 6.52.66"
                }],
                ["path", {
                    d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"
                }],
                ["path", {
                    d: "M20.3 20.3a4 4 0 0 1-2.3.7"
                }],
                ["path", {
                    d: "M18.6 13a4 4 0 0 1 3.357 3.414"
                }],
                ["path", {
                    d: "m12 6 .6 1"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            py = ["svg", h, [
                ["path", {
                    d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
                }],
                ["path", {
                    d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
                }],
                ["path", {
                    d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
                }]
            ]],
            ly = ["svg", h, [
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "3"
                }],
                ["path", {
                    d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
                }]
            ]],
            vy = ["svg", h, [
                ["path", {
                    d: "m2 22 10-10"
                }],
                ["path", {
                    d: "m16 8-1.17 1.17"
                }],
                ["path", {
                    d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                }],
                ["path", {
                    d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
                }],
                ["path", {
                    d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
                }],
                ["path", {
                    d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
                }],
                ["path", {
                    d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                }],
                ["path", {
                    d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
                }],
                ["path", {
                    d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            oy = ["svg", h, [
                ["path", {
                    d: "M2 22 16 8"
                }],
                ["path", {
                    d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                }],
                ["path", {
                    d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                }],
                ["path", {
                    d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                }],
                ["path", {
                    d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
                }],
                ["path", {
                    d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                }],
                ["path", {
                    d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                }],
                ["path", {
                    d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                }]
            ]],
            sy = ["svg", h, [
                ["circle", {
                    cx: "7",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M10 9v6"
                }],
                ["circle", {
                    cx: "17",
                    cy: "12",
                    r: "3"
                }],
                ["path", {
                    d: "M14 7v8"
                }],
                ["path", {
                    d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
                }]
            ]],
            ry = ["svg", h, [
                ["path", {
                    d: "M12 20h.01"
                }],
                ["path", {
                    d: "M8.5 16.429a5 5 0 0 1 7 0"
                }],
                ["path", {
                    d: "M5 12.859a10 10 0 0 1 5.17-2.69"
                }],
                ["path", {
                    d: "M19 12.859a10 10 0 0 0-2.007-1.523"
                }],
                ["path", {
                    d: "M2 8.82a15 15 0 0 1 4.177-2.643"
                }],
                ["path", {
                    d: "M22 8.82a15 15 0 0 0-11.288-3.764"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            gy = ["svg", h, [
                ["path", {
                    d: "M12 20h.01"
                }],
                ["path", {
                    d: "M2 8.82a15 15 0 0 1 20 0"
                }],
                ["path", {
                    d: "M5 12.859a10 10 0 0 1 14 0"
                }],
                ["path", {
                    d: "M8.5 16.429a5 5 0 0 1 7 0"
                }]
            ]],
            yy = ["svg", h, [
                ["path", {
                    d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
                }],
                ["path", {
                    d: "M9.6 4.6A2 2 0 1 1 11 8H2"
                }],
                ["path", {
                    d: "M12.6 19.4A2 2 0 1 0 14 16H2"
                }]
            ]],
            $y = ["svg", h, [
                ["path", {
                    d: "M8 22h8"
                }],
                ["path", {
                    d: "M7 10h3m7 0h-1.343"
                }],
                ["path", {
                    d: "M12 15v7"
                }],
                ["path", {
                    d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22"
                }]
            ]],
            my = ["svg", h, [
                ["path", {
                    d: "M8 22h8"
                }],
                ["path", {
                    d: "M7 10h10"
                }],
                ["path", {
                    d: "M12 15v7"
                }],
                ["path", {
                    d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
                }]
            ]],
            uy = ["svg", h, [
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "3",
                    y: "3",
                    rx: "2"
                }],
                ["path", {
                    d: "M7 11v4a2 2 0 0 0 2 2h4"
                }],
                ["rect", {
                    width: "8",
                    height: "8",
                    x: "13",
                    y: "13",
                    rx: "2"
                }]
            ]],
            Cy = ["svg", h, [
                ["path", {
                    d: "m19 12-1.5 3"
                }],
                ["path", {
                    d: "M19.63 18.81 22 20"
                }],
                ["path", {
                    d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
                }]
            ]],
            Hy = ["svg", h, [
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "6",
                    y2: "6"
                }],
                ["path", {
                    d: "M3 12h15a3 3 0 1 1 0 6h-4"
                }],
                ["polyline", {
                    points: "16 16 14 18 16 20"
                }],
                ["line", {
                    x1: "3",
                    x2: "10",
                    y1: "18",
                    y2: "18"
                }]
            ]],
            wy = ["svg", h, [
                ["path", {
                    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                }]
            ]],
            Vy = ["svg", h, [
                ["path", {
                    d: "M18 6 6 18"
                }],
                ["path", {
                    d: "m6 6 12 12"
                }]
            ]],
            Sy = ["svg", h, [
                ["path", {
                    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                }],
                ["path", {
                    d: "m10 15 5-3-5-3z"
                }]
            ]],
            Ay = ["svg", h, [
                ["path", {
                    d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"
                }],
                ["path", {
                    d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"
                }],
                ["path", {
                    d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
                }],
                ["path", {
                    d: "m2 2 20 20"
                }]
            ]],
            Ly = ["svg", h, [
                ["path", {
                    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                }]
            ]],
            fy = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["line", {
                    x1: "21",
                    x2: "16.65",
                    y1: "21",
                    y2: "16.65"
                }],
                ["line", {
                    x1: "11",
                    x2: "11",
                    y1: "8",
                    y2: "14"
                }],
                ["line", {
                    x1: "8",
                    x2: "14",
                    y1: "11",
                    y2: "11"
                }]
            ]],
            ky = ["svg", h, [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }],
                ["line", {
                    x1: "21",
                    x2: "16.65",
                    y1: "21",
                    y2: "16.65"
                }],
                ["line", {
                    x1: "8",
                    x2: "14",
                    y1: "11",
                    y2: "11"
                }]
            ]];
        var Py = Object.freeze({
                    __proto__: null,
                    AArrowDown: H0,
                    AArrowUp: w0,
                    ALargeSmall: V0,
                    Accessibility: S0,
                    Activity: A0,
                    ActivitySquare: M2,
                    AirVent: L0,
                    Airplay: f0,
                    AlarmCheck: v,
                    AlarmClock: P0,
                    AlarmClockCheck: v,
                    AlarmClockMinus: o,
                    AlarmClockOff: k0,
                    AlarmClockPlus: s,
                    AlarmMinus: o,
                    AlarmPlus: s,
                    AlarmSmoke: B0,
                    Album: F0,
                    AlertCircle: f,
                    AlertOctagon: T1,
                    AlertTriangle: i0,
                    AlignCenter: R0,
                    AlignCenterHorizontal: D0,
                    AlignCenterVertical: Z0,
                    AlignEndHorizontal: q0,
                    AlignEndVertical: T0,
                    AlignHorizontalDistributeCenter: z0,
                    AlignHorizontalDistributeEnd: b0,
                    AlignHorizontalDistributeStart: x0,
                    AlignHorizontalJustifyCenter: U0,
                    AlignHorizontalJustifyEnd: O0,
                    AlignHorizontalJustifyStart: G0,
                    AlignHorizontalSpaceAround: E0,
                    AlignHorizontalSpaceBetween: W0,
                    AlignJustify: I0,
                    AlignLeft: X0,
                    AlignRight: N0,
                    AlignStartHorizontal: K0,
                    AlignStartVertical: J0,
                    AlignVerticalDistributeCenter: j0,
                    AlignVerticalDistributeEnd: Q0,
                    AlignVerticalDistributeStart: Y0,
                    AlignVerticalJustifyCenter: _0,
                    AlignVerticalJustifyEnd: aa,
                    AlignVerticalJustifyStart: ha,
                    AlignVerticalSpaceAround: ta,
                    AlignVerticalSpaceBetween: da,
                    Ambulance: ca,
                    Ampersand: Ma,
                    Ampersands: ea,
                    Anchor: ia,
                    Angry: na,
                    Annoyed: pa,
                    Antenna: la,
                    Anvil: va,
                    Aperture: oa,
                    AppWindow: ra,
                    AppWindowMac: sa,
                    Apple: ga,
                    Archive: ma,
                    ArchiveRestore: ya,
                    ArchiveX: $a,
                    AreaChart: ua,
                    Armchair: Ca,
                    ArrowBigDown: wa,
                    ArrowBigDownDash: Ha,
                    ArrowBigLeft: Sa,
                    ArrowBigLeftDash: Va,
                    ArrowBigRight: La,
                    ArrowBigRightDash: Aa,
                    ArrowBigUp: ka,
                    ArrowBigUpDash: fa,
                    ArrowDown: ba,
                    ArrowDown01: Pa,
                    ArrowDown10: Ba,
                    ArrowDownAZ: r,
                    ArrowDownAz: r,
                    ArrowDownCircle: k,
                    ArrowDownFromLine: Fa,
                    ArrowDownLeft: Da,
                    ArrowDownLeftFromCircle: B,
                    ArrowDownLeftFromSquare: l2,
                    ArrowDownLeftSquare: e2,
                    ArrowDownNarrowWide: Za,
                    ArrowDownRight: Ra,
                    ArrowDownRightFromCircle: F,
                    ArrowDownRightFromSquare: v2,
                    ArrowDownRightSquare: i2,
                    ArrowDownSquare: n2,
                    ArrowDownToDot: qa,
                    ArrowDownToLine: Ta,
                    ArrowDownUp: za,
                    ArrowDownWideNarrow: g,
                    ArrowDownZA: y,
                    ArrowDownZa: y,
                    ArrowLeft: Ga,
                    ArrowLeftCircle: P,
                    ArrowLeftFromLine: xa,
                    ArrowLeftRight: Ua,
                    ArrowLeftSquare: p2,
                    ArrowLeftToLine: Oa,
                    ArrowRight: Xa,
                    ArrowRightCircle: R,
                    ArrowRightFromLine: Ea,
                    ArrowRightLeft: Wa,
                    ArrowRightSquare: r2,
                    ArrowRightToLine: Ia,
                    ArrowUp: th,
                    ArrowUp01: Na,
                    ArrowUp10: Ka,
                    ArrowUpAZ: $,
                    ArrowUpAz: $,
                    ArrowUpCircle: q,
                    ArrowUpDown: Ja,
                    ArrowUpFromDot: ja,
                    ArrowUpFromLine: Qa,
                    ArrowUpLeft: Ya,
                    ArrowUpLeftFromCircle: D,
                    ArrowUpLeftFromSquare: o2,
                    ArrowUpLeftSquare: g2,
                    ArrowUpNarrowWide: m,
                    ArrowUpRight: _a,
                    ArrowUpRightFromCircle: Z,
                    ArrowUpRightFromSquare: s2,
                    ArrowUpRightSquare: y2,
                    ArrowUpSquare: $2,
                    ArrowUpToLine: ah,
                    ArrowUpWideNarrow: hh,
                    ArrowUpZA: u,
                    ArrowUpZa: u,
                    ArrowsUpFromLine: dh,
                    Asterisk: ch,
                    AsteriskSquare: m2,
                    AtSign: Mh,
                    Atom: eh,
                    AudioLines: ih,
                    AudioWaveform: nh,
                    Award: ph,
                    Axe: lh,
                    Axis3D: C,
                    Axis3d: C,
                    Baby: vh,
                    Backpack: oh,
                    Badge: kh,
                    BadgeAlert: sh,
                    BadgeCent: rh,
                    BadgeCheck: H,
                    BadgeDollarSign: gh,
                    BadgeEuro: yh,
                    BadgeHelp: $h,
                    BadgeIndianRupee: mh,
                    BadgeInfo: uh,
                    BadgeJapaneseYen: Ch,
                    BadgeMinus: Hh,
                    BadgePercent: wh,
                    BadgePlus: Vh,
                    BadgePoundSterling: Sh,
                    BadgeRussianRuble: Ah,
                    BadgeSwissFranc: Lh,
                    BadgeX: fh,
                    BaggageClaim: Ph,
                    Ban: Bh,
                    Banana: Fh,
                    Banknote: Dh,
                    BarChart: xh,
                    BarChart2: Zh,
                    BarChart3: Rh,
                    BarChart4: qh,
                    BarChartBig: Th,
                    BarChartHorizontal: bh,
                    BarChartHorizontalBig: zh,
                    Barcode: Uh,
                    Baseline: Oh,
                    Bath: Gh,
                    Battery: Kh,
                    BatteryCharging: Eh,
                    BatteryFull: Wh,
                    BatteryLow: Ih,
                    BatteryMedium: Xh,
                    BatteryWarning: Nh,
                    Beaker: Jh,
                    Bean: Qh,
                    BeanOff: jh,
                    Bed: at,
                    BedDouble: Yh,
                    BedSingle: _h,
                    Beef: ht,
                    Beer: dt,
                    BeerOff: tt,
                    Bell: lt,
                    BellDot: ct,
                    BellElectric: Mt,
                    BellMinus: et,
                    BellOff: it,
                    BellPlus: nt,
                    BellRing: pt,
                    BetweenHorizonalEnd: w,
                    BetweenHorizonalStart: V,
                    BetweenHorizontalEnd: w,
                    BetweenHorizontalStart: V,
                    BetweenVerticalEnd: vt,
                    BetweenVerticalStart: ot,
                    BicepsFlexed: st,
                    Bike: rt,
                    Binary: gt,
                    Biohazard: yt,
                    Bird: $t,
                    Bitcoin: mt,
                    Blend: ut,
                    Blinds: Ct,
                    Blocks: Ht,
                    Bluetooth: At,
                    BluetoothConnected: wt,
                    BluetoothOff: Vt,
                    BluetoothSearching: St,
                    Bold: Lt,
                    Bolt: ft,
                    Bomb: kt,
                    Bone: Pt,
                    Book: Yt,
                    BookA: Bt,
                    BookAudio: Ft,
                    BookCheck: Dt,
                    BookCopy: Zt,
                    BookDashed: S,
                    BookDown: Rt,
                    BookHeadphones: qt,
                    BookHeart: Tt,
                    BookImage: zt,
                    BookKey: bt,
                    BookLock: xt,
                    BookMarked: Ut,
                    BookMinus: Ot,
                    BookOpen: Wt,
                    BookOpenCheck: Gt,
                    BookOpenText: Et,
                    BookPlus: It,
                    BookTemplate: S,
                    BookText: Xt,
                    BookType: Nt,
                    BookUp: Jt,
                    BookUp2: Kt,
                    BookUser: jt,
                    BookX: Qt,
                    Bookmark: d4,
                    BookmarkCheck: _t,
                    BookmarkMinus: a4,
                    BookmarkPlus: h4,
                    BookmarkX: t4,
                    BoomBox: c4,
                    Bot: i4,
                    BotMessageSquare: M4,
                    BotOff: e4,
                    Box: p4,
                    BoxSelect: n4,
                    Boxes: l4,
                    Braces: A,
                    Brackets: v4,
                    Brain: r4,
                    BrainCircuit: o4,
                    BrainCog: s4,
                    BrickWall: g4,
                    Briefcase: m4,
                    BriefcaseBusiness: y4,
                    BriefcaseMedical: $4,
                    BringToFront: u4,
                    Brush: C4,
                    Bug: V4,
                    BugOff: H4,
                    BugPlay: w4,
                    Building: A4,
                    Building2: S4,
                    Bus: f4,
                    BusFront: L4,
                    Cable: P4,
                    CableCar: k4,
                    Cake: F4,
                    CakeSlice: B4,
                    Calculator: D4,
                    Calendar: J4,
                    CalendarCheck: R4,
                    CalendarCheck2: Z4,
                    CalendarClock: q4,
                    CalendarCog: T4,
                    CalendarDays: z4,
                    CalendarFold: b4,
                    CalendarHeart: x4,
                    CalendarMinus: O4,
                    CalendarMinus2: U4,
                    CalendarOff: G4,
                    CalendarPlus: W4,
                    CalendarPlus2: E4,
                    CalendarRange: I4,
                    CalendarSearch: X4,
                    CalendarX: K4,
                    CalendarX2: N4,
                    Camera: Q4,
                    CameraOff: j4,
                    CandlestickChart: Y4,
                    Candy: h5,
                    CandyCane: _4,
                    CandyOff: a5,
                    Cannabis: t5,
                    Captions: L,
                    CaptionsOff: d5,
                    Car: e5,
                    CarFront: c5,
                    CarTaxiFront: M5,
                    Caravan: i5,
                    Carrot: n5,
                    CaseLower: p5,
                    CaseSensitive: l5,
                    CaseUpper: v5,
                    CassetteTape: o5,
                    Cast: s5,
                    Castle: r5,
                    Cat: g5,
                    Cctv: y5,
                    Check: m5,
                    CheckCheck: $5,
                    CheckCircle: T,
                    CheckCircle2: z,
                    CheckSquare: C2,
                    CheckSquare2: H2,
                    ChefHat: u5,
                    Cherry: C5,
                    ChevronDown: H5,
                    ChevronDownCircle: b,
                    ChevronDownSquare: w2,
                    ChevronFirst: w5,
                    ChevronLast: V5,
                    ChevronLeft: S5,
                    ChevronLeftCircle: x,
                    ChevronLeftSquare: V2,
                    ChevronRight: A5,
                    ChevronRightCircle: U,
                    ChevronRightSquare: S2,
                    ChevronUp: L5,
                    ChevronUpCircle: O,
                    ChevronUpSquare: A2,
                    ChevronsDown: k5,
                    ChevronsDownUp: f5,
                    ChevronsLeft: B5,
                    ChevronsLeftRight: P5,
                    ChevronsRight: D5,
                    ChevronsRightLeft: F5,
                    ChevronsUp: R5,
                    ChevronsUpDown: Z5,
                    Chrome: q5,
                    Church: T5,
                    Cigarette: b5,
                    CigaretteOff: z5,
                    Circle: K5,
                    CircleAlert: f,
                    CircleArrowDown: k,
                    CircleArrowLeft: P,
                    CircleArrowOutDownLeft: B,
                    CircleArrowOutDownRight: F,
                    CircleArrowOutUpLeft: D,
                    CircleArrowOutUpRight: Z,
                    CircleArrowRight: R,
                    CircleArrowUp: q,
                    CircleCheck: z,
                    CircleCheckBig: T,
                    CircleChevronDown: b,
                    CircleChevronLeft: x,
                    CircleChevronRight: U,
                    CircleChevronUp: O,
                    CircleDashed: x5,
                    CircleDivide: G,
                    CircleDollarSign: U5,
                    CircleDot: G5,
                    CircleDotDashed: O5,
                    CircleEllipsis: E5,
                    CircleEqual: W5,
                    CircleFadingPlus: I5,
                    CircleGauge: E,
                    CircleHelp: W,
                    CircleMinus: I,
                    CircleOff: X5,
                    CircleParking: N,
                    CircleParkingOff: X,
                    CirclePause: K,
                    CirclePercent: J,
                    CirclePlay: j,
                    CirclePlus: Q,
                    CirclePower: Y,
                    CircleSlash: N5,
                    CircleSlash2: _,
                    CircleSlashed: _,
                    CircleStop: a1,
                    CircleUser: t1,
                    CircleUserRound: h1,
                    CircleX: d1,
                    CircuitBoard: J5,
                    Citrus: j5,
                    Clapperboard: Q5,
                    Clipboard: ed,
                    ClipboardCheck: Y5,
                    ClipboardCopy: _5,
                    ClipboardEdit: M1,
                    ClipboardList: ad,
                    ClipboardMinus: hd,
                    ClipboardPaste: td,
                    ClipboardPen: M1,
                    ClipboardPenLine: c1,
                    ClipboardPlus: dd,
                    ClipboardSignature: c1,
                    ClipboardType: cd,
                    ClipboardX: Md,
                    Clock: ud,
                    Clock1: id,
                    Clock10: nd,
                    Clock11: pd,
                    Clock12: ld,
                    Clock2: vd,
                    Clock3: od,
                    Clock4: sd,
                    Clock5: rd,
                    Clock6: gd,
                    Clock7: yd,
                    Clock8: $d,
                    Clock9: md,
                    Cloud: Zd,
                    CloudCog: Cd,
                    CloudDownload: e1,
                    CloudDrizzle: Hd,
                    CloudFog: wd,
                    CloudHail: Vd,
                    CloudLightning: Sd,
                    CloudMoon: Ld,
                    CloudMoonRain: Ad,
                    CloudOff: fd,
                    CloudRain: Pd,
                    CloudRainWind: kd,
                    CloudSnow: Bd,
                    CloudSun: Dd,
                    CloudSunRain: Fd,
                    CloudUpload: i1,
                    Cloudy: Rd,
                    Clover: qd,
                    Club: Td,
                    Code: zd,
                    Code2: n1,
                    CodeSquare: L2,
                    CodeXml: n1,
                    Codepen: bd,
                    Codesandbox: xd,
                    Coffee: Ud,
                    Cog: Od,
                    Coins: Gd,
                    Columns: p1,
                    Columns2: p1,
                    Columns3: l1,
                    Columns4: Ed,
                    Combine: Wd,
                    Command: Id,
                    Compass: Xd,
                    Component: Nd,
                    Computer: Kd,
                    ConciergeBell: Jd,
                    Cone: jd,
                    Construction: Qd,
                    Contact: Yd,
                    Contact2: v1,
                    ContactRound: v1,
                    Container: _d,
                    Contrast: a3,
                    Cookie: h3,
                    CookingPot: t3,
                    Copy: n3,
                    CopyCheck: d3,
                    CopyMinus: c3,
                    CopyPlus: M3,
                    CopySlash: e3,
                    CopyX: i3,
                    Copyleft: p3,
                    Copyright: l3,
                    CornerDownLeft: v3,
                    CornerDownRight: o3,
                    CornerLeftDown: s3,
                    CornerLeftUp: r3,
                    CornerRightDown: g3,
                    CornerRightUp: y3,
                    CornerUpLeft: $3,
                    CornerUpRight: m3,
                    Cpu: u3,
                    CreativeCommons: C3,
                    CreditCard: H3,
                    Croissant: w3,
                    Crop: V3,
                    Cross: S3,
                    Crosshair: A3,
                    Crown: L3,
                    Cuboid: f3,
                    CupSoda: k3,
                    CurlyBraces: A,
                    Currency: P3,
                    Cylinder: B3,
                    Database: Z3,
                    DatabaseBackup: F3,
                    DatabaseZap: D3,
                    Delete: R3,
                    Dessert: q3,
                    Diameter: T3,
                    Diamond: x3,
                    DiamondMinus: z3,
                    DiamondPercent: o1,
                    DiamondPlus: b3,
                    Dice1: U3,
                    Dice2: O3,
                    Dice3: G3,
                    Dice4: E3,
                    Dice5: W3,
                    Dice6: I3,
                    Dices: X3,
                    Diff: N3,
                    Disc: Q3,
                    Disc2: K3,
                    Disc3: J3,
                    DiscAlbum: j3,
                    Divide: Y3,
                    DivideCircle: G,
                    DivideSquare: P2,
                    Dna: ac,
                    DnaOff: _3,
                    Dock: hc,
                    Dog: tc,
                    DollarSign: dc,
                    Donut: cc,
                    DoorClosed: Mc,
                    DoorOpen: ec,
                    Dot: ic,
                    DotSquare: B2,
                    Download: nc,
                    DownloadCloud: e1,
                    DraftingCompass: pc,
                    Drama: lc,
                    Dribbble: vc,
                    Drill: oc,
                    Droplet: sc,
                    Droplets: rc,
                    Drum: gc,
                    Drumstick: yc,
                    Dumbbell: $c,
                    Ear: uc,
                    EarOff: mc,
                    Earth: s1,
                    EarthLock: Cc,
                    Eclipse: Hc,
                    Edit: i,
                    Edit2: J1,
                    Edit3: K1,
                    Egg: Sc,
                    EggFried: wc,
                    EggOff: Vc,
                    Ellipsis: g1,
                    EllipsisVertical: r1,
                    Equal: Lc,
                    EqualNot: Ac,
                    EqualSquare: F2,
                    Eraser: fc,
                    Euro: kc,
                    Expand: Pc,
                    ExternalLink: Bc,
                    Eye: Dc,
                    EyeOff: Fc,
                    Facebook: Zc,
                    Factory: Rc,
                    Fan: qc,
                    FastForward: Tc,
                    Feather: zc,
                    Fence: bc,
                    FerrisWheel: xc,
                    Figma: Uc,
                    File: U6,
                    FileArchive: Oc,
                    FileAudio: Ec,
                    FileAudio2: Gc,
                    FileAxis3D: y1,
                    FileAxis3d: y1,
                    FileBadge: Ic,
                    FileBadge2: Wc,
                    FileBarChart: Nc,
                    FileBarChart2: Xc,
                    FileBox: Kc,
                    FileCheck: jc,
                    FileCheck2: Jc,
                    FileClock: Qc,
                    FileCode: _c,
                    FileCode2: Yc,
                    FileCog: $1,
                    FileCog2: $1,
                    FileDiff: a6,
                    FileDigit: h6,
                    FileDown: t6,
                    FileEdit: u1,
                    FileHeart: d6,
                    FileImage: c6,
                    FileInput: M6,
                    FileJson: i6,
                    FileJson2: e6,
                    FileKey: p6,
                    FileKey2: n6,
                    FileLineChart: l6,
                    FileLock: o6,
                    FileLock2: v6,
                    FileMinus: r6,
                    FileMinus2: s6,
                    FileMusic: g6,
                    FileOutput: y6,
                    FilePen: u1,
                    FilePenLine: m1,
                    FilePieChart: $6,
                    FilePlus: u6,
                    FilePlus2: m6,
                    FileQuestion: C6,
                    FileScan: H6,
                    FileSearch: V6,
                    FileSearch2: w6,
                    FileSignature: m1,
                    FileSliders: S6,
                    FileSpreadsheet: A6,
                    FileStack: L6,
                    FileSymlink: f6,
                    FileTerminal: k6,
                    FileText: P6,
                    FileType: F6,
                    FileType2: B6,
                    FileUp: D6,
                    FileVideo: R6,
                    FileVideo2: Z6,
                    FileVolume: T6,
                    FileVolume2: q6,
                    FileWarning: z6,
                    FileX: x6,
                    FileX2: b6,
                    Files: O6,
                    Film: G6,
                    Filter: W6,
                    FilterX: E6,
                    Fingerprint: I6,
                    FireExtinguisher: X6,
                    Fish: J6,
                    FishOff: N6,
                    FishSymbol: K6,
                    Flag: _6,
                    FlagOff: j6,
                    FlagTriangleLeft: Q6,
                    FlagTriangleRight: Y6,
                    Flame: h8,
                    FlameKindling: a8,
                    Flashlight: d8,
                    FlashlightOff: t8,
                    FlaskConical: M8,
                    FlaskConicalOff: c8,
                    FlaskRound: e8,
                    FlipHorizontal: n8,
                    FlipHorizontal2: i8,
                    FlipVertical: l8,
                    FlipVertical2: p8,
                    Flower: o8,
                    Flower2: v8,
                    Focus: s8,
                    FoldHorizontal: r8,
                    FoldVertical: g8,
                    Folder: G8,
                    FolderArchive: y8,
                    FolderCheck: $8,
                    FolderClock: m8,
                    FolderClosed: u8,
                    FolderCog: C1,
                    FolderCog2: C1,
                    FolderDot: C8,
                    FolderDown: H8,
                    FolderEdit: H1,
                    FolderGit: V8,
                    FolderGit2: w8,
                    FolderHeart: S8,
                    FolderInput: A8,
                    FolderKanban: L8,
                    FolderKey: f8,
                    FolderLock: k8,
                    FolderMinus: P8,
                    FolderOpen: F8,
                    FolderOpenDot: B8,
                    FolderOutput: D8,
                    FolderPen: H1,
                    FolderPlus: Z8,
                    FolderRoot: R8,
                    FolderSearch: T8,
                    FolderSearch2: q8,
                    FolderSymlink: z8,
                    FolderSync: b8,
                    FolderTree: x8,
                    FolderUp: U8,
                    FolderX: O8,
                    Folders: E8,
                    Footprints: W8,
                    Forklift: I8,
                    FormInput: j1,
                    Forward: X8,
                    Frame: N8,
                    Framer: K8,
                    Frown: J8,
                    Fuel: j8,
                    Fullscreen: Q8,
                    FunctionSquare: D2,
                    GalleryHorizontal: _8,
                    GalleryHorizontalEnd: Y8,
                    GalleryThumbnails: a7,
                    GalleryVertical: t7,
                    GalleryVerticalEnd: h7,
                    Gamepad: c7,
                    Gamepad2: d7,
                    GanttChart: M7,
                    GanttChartSquare: Z2,
                    Gauge: e7,
                    GaugeCircle: E,
                    Gavel: i7,
                    Gem: n7,
                    Ghost: p7,
                    Gift: l7,
                    GitBranch: o7,
                    GitBranchPlus: v7,
                    GitCommit: w1,
                    GitCommitHorizontal: w1,
                    GitCommitVertical: s7,
                    GitCompare: g7,
                    GitCompareArrows: r7,
                    GitFork: y7,
                    GitGraph: $7,
                    GitMerge: m7,
                    GitPullRequest: S7,
                    GitPullRequestArrow: u7,
                    GitPullRequestClosed: C7,
                    GitPullRequestCreate: w7,
                    GitPullRequestCreateArrow: H7,
                    GitPullRequestDraft: V7,
                    Github: A7,
                    Gitlab: L7,
                    GlassWater: f7,
                    Glasses: k7,
                    Globe: B7,
                    Globe2: s1,
                    GlobeLock: P7,
                    Goal: F7,
                    Grab: D7,
                    GraduationCap: Z7,
                    Grape: R7,
                    Grid: p,
                    Grid2X2: V1,
                    Grid2x2: V1,
                    Grid2x2Check: q7,
                    Grid2x2X: T7,
                    Grid3X3: p,
                    Grid3x3: p,
                    Grip: x7,
                    GripHorizontal: z7,
                    GripVertical: b7,
                    Group: U7,
                    Guitar: O7,
                    Ham: G7,
                    Hammer: E7,
                    Hand: K7,
                    HandCoins: W7,
                    HandHeart: I7,
                    HandHelping: S1,
                    HandMetal: X7,
                    HandPlatter: N7,
                    Handshake: J7,
                    HardDrive: Y7,
                    HardDriveDownload: j7,
                    HardDriveUpload: Q7,
                    HardHat: _7,
                    Hash: aM,
                    Haze: hM,
                    HdmiPort: tM,
                    Heading: pM,
                    Heading1: dM,
                    Heading2: cM,
                    Heading3: MM,
                    Heading4: eM,
                    Heading5: iM,
                    Heading6: nM,
                    Headphones: lM,
                    Headset: vM,
                    Heart: yM,
                    HeartCrack: oM,
                    HeartHandshake: sM,
                    HeartOff: rM,
                    HeartPulse: gM,
                    Heater: $M,
                    HelpCircle: W,
                    HelpingHand: S1,
                    Hexagon: mM,
                    Highlighter: uM,
                    History: CM,
                    Home: A1,
                    Hop: wM,
                    HopOff: HM,
                    Hospital: VM,
                    Hotel: SM,
                    Hourglass: AM,
                    House: A1,
                    HousePlug: LM,
                    HousePlus: fM,
                    IceCream: f1,
                    IceCream2: L1,
                    IceCreamBowl: L1,
                    IceCreamCone: f1,
                    Image: RM,
                    ImageDown: kM,
                    ImageMinus: PM,
                    ImageOff: BM,
                    ImagePlay: FM,
                    ImagePlus: DM,
                    ImageUp: ZM,
                    Images: qM,
                    Import: TM,
                    Inbox: zM,
                    Indent: P1,
                    IndentDecrease: k1,
                    IndentIncrease: P1,
                    IndianRupee: bM,
                    Infinity: xM,
                    Info: UM,
                    Inspect: x2,
                    InspectionPanel: OM,
                    Instagram: GM,
                    Italic: EM,
                    IterationCcw: WM,
                    IterationCw: IM,
                    JapaneseYen: XM,
                    Joystick: NM,
                    Kanban: KM,
                    KanbanSquare: R2,
                    KanbanSquareDashed: f2,
                    Key: QM,
                    KeyRound: JM,
                    KeySquare: jM,
                    Keyboard: ae,
                    KeyboardMusic: YM,
                    KeyboardOff: _M,
                    Lamp: ee,
                    LampCeiling: he,
                    LampDesk: te,
                    LampFloor: de,
                    LampWallDown: ce,
                    LampWallUp: Me,
                    LandPlot: ie,
                    Landmark: ne,
                    Languages: pe,
                    Laptop: le,
                    Laptop2: B1,
                    LaptopMinimal: B1,
                    Lasso: oe,
                    LassoSelect: ve,
                    Laugh: se,
                    Layers: ye,
                    Layers2: re,
                    Layers3: ge,
                    Layout: N1,
                    LayoutDashboard: $e,
                    LayoutGrid: me,
                    LayoutList: ue,
                    LayoutPanelLeft: Ce,
                    LayoutPanelTop: He,
                    LayoutTemplate: we,
                    Leaf: Ve,
                    LeafyGreen: Se,
                    Lectern: Ae,
                    Library: fe,
                    LibraryBig: Le,
                    LibrarySquare: q2,
                    LifeBuoy: ke,
                    Ligature: Pe,
                    Lightbulb: Fe,
                    LightbulbOff: Be,
                    LineChart: De,
                    Link: qe,
                    Link2: Re,
                    Link2Off: Ze,
                    Linkedin: Te,
                    List: Qe,
                    ListChecks: ze,
                    ListCollapse: be,
                    ListEnd: xe,
                    ListFilter: Ue,
                    ListMinus: Oe,
                    ListMusic: Ge,
                    ListOrdered: Ee,
                    ListPlus: We,
                    ListRestart: Ie,
                    ListStart: Xe,
                    ListTodo: Ne,
                    ListTree: Ke,
                    ListVideo: Je,
                    ListX: je,
                    Loader: _e,
                    Loader2: F1,
                    LoaderCircle: F1,
                    LoaderPinwheel: Ye,
                    Locate: ti,
                    LocateFixed: ai,
                    LocateOff: hi,
                    Lock: ci,
                    LockKeyhole: di,
                    LockKeyholeOpen: D1,
                    LockOpen: Z1,
                    LogIn: Mi,
                    LogOut: ei,
                    Logs: ii,
                    Lollipop: ni,
                    Luggage: pi,
                    MSquare: T2,
                    Magnet: li,
                    Mail: ui,
                    MailCheck: vi,
                    MailMinus: oi,
                    MailOpen: si,
                    MailPlus: ri,
                    MailQuestion: gi,
                    MailSearch: yi,
                    MailWarning: $i,
                    MailX: mi,
                    Mailbox: Ci,
                    Mails: Hi,
                    Map: Ai,
                    MapPin: Vi,
                    MapPinOff: wi,
                    MapPinned: Si,
                    Martini: Li,
                    Maximize: ki,
                    Maximize2: fi,
                    Medal: Pi,
                    Megaphone: Fi,
                    MegaphoneOff: Bi,
                    Meh: Di,
                    MemoryStick: Zi,
                    Menu: Ri,
                    MenuSquare: z2,
                    Merge: qi,
                    MessageCircle: Xi,
                    MessageCircleCode: Ti,
                    MessageCircleDashed: zi,
                    MessageCircleHeart: bi,
                    MessageCircleMore: xi,
                    MessageCircleOff: Ui,
                    MessageCirclePlus: Oi,
                    MessageCircleQuestion: Gi,
                    MessageCircleReply: Ei,
                    MessageCircleWarning: Wi,
                    MessageCircleX: Ii,
                    MessageSquare: nn,
                    MessageSquareCode: Ni,
                    MessageSquareDashed: Ki,
                    MessageSquareDiff: Ji,
                    MessageSquareDot: ji,
                    MessageSquareHeart: Qi,
                    MessageSquareMore: Yi,
                    MessageSquareOff: _i,
                    MessageSquarePlus: an,
                    MessageSquareQuote: hn,
                    MessageSquareReply: tn,
                    MessageSquareShare: dn,
                    MessageSquareText: cn,
                    MessageSquareWarning: Mn,
                    MessageSquareX: en,
                    MessagesSquare: pn,
                    Mic: vn,
                    Mic2: R1,
                    MicOff: ln,
                    MicVocal: R1,
                    Microscope: on,
                    Microwave: sn,
                    Milestone: rn,
                    Milk: yn,
                    MilkOff: gn,
                    Minimize: mn,
                    Minimize2: $n,
                    Minus: un,
                    MinusCircle: I,
                    MinusSquare: b2,
                    Monitor: Fn,
                    MonitorCheck: Cn,
                    MonitorDot: Hn,
                    MonitorDown: wn,
                    MonitorOff: Vn,
                    MonitorPause: Sn,
                    MonitorPlay: An,
                    MonitorSmartphone: Ln,
                    MonitorSpeaker: fn,
                    MonitorStop: kn,
                    MonitorUp: Pn,
                    MonitorX: Bn,
                    Moon: Zn,
                    MoonStar: Dn,
                    Mo