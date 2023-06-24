/*!
  * Bootstrap scrollbar.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../dom/manipulator.js"),require("../dom/selector-engine.js"),require("./index.js")):"function"==typeof define&&define.amd?define(["../dom/manipulator","../dom/selector-engine","./index"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Scrollbar=e(t.Manipulator,t.SelectorEngine,t.Index)}(this,(function(t,e,i){"use strict";const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",r="padding-right",l="margin-right";return class{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,(e=>e+t)),this._setElementAttributes(s,r,(e=>e+t)),this._setElementAttributes(n,l,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(s,r),this._resetElementAttributes(n,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(e,i){const s=e.style.getPropertyValue(i);s&&t.setDataAttribute(e,i,s)}_resetElementAttributes(e,i){this._applyManipulationCallback(e,(e=>{const s=t.getDataAttribute(e,i);null!==s?(t.removeDataAttribute(e,i),e.style.setProperty(i,s)):e.style.removeProperty(i)}))}_applyManipulationCallback(t,s){if(i.isElement(t))s(t);else for(const i of e.find(t,this._element))s(i)}}}));