!function(){function e(e){return e&&e.__esModule?e.default:e}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirefd50;r.register("amuaL",(function(n,f){var t,a,o,i;t=n.exports,a="getED25519Key",o=function(){return s},Object.defineProperty(t,a,{get:o,set:i,enumerable:!0,configurable:!0});var l=r("jLWle"),u=r("brvZs"),d=r("gzLuY").Buffer,g=e(u).lowlevel;function s(e){var r;r="string"==typeof e?d.from(e,"hex"):e;var n=new Uint8Array(64),f=[g.gf(),g.gf(),g.gf(),g.gf()],t=new Uint8Array((0,l.default)(new Uint8Array(r)).concat((0,l.default)(new Uint8Array(32)))),a=new Uint8Array(32);g.crypto_hash(n,t,32),n[0]&=248,n[31]&=127,n[31]|=64,g.scalarbase(f,n),g.pack(a,f);for(var o=0;o<32;o+=1)t[o+32]=a[o];return{sk:d.from(t),pk:d.from(a)}}}))}();
//# sourceMappingURL=openloginEd25519.esm.08a2b6ef.js.map
