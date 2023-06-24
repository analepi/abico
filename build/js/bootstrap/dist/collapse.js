/*!
  * Bootstrap collapse.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("./base-component.js"),require("./dom/event-handler.js"),require("./dom/selector-engine.js"),require("./util/index.js")):"function"==typeof define&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Collapse=t(e.BaseComponent,e.EventHandler,e.SelectorEngine,e.Index)}(this,(function(e,t,i,s){"use strict";const n=".bs.collapse",l=`show${n}`,r=`shown${n}`,o=`hide${n}`,a=`hidden${n}`,h=`click${n}.data-api`,g="show",c="collapse",d="collapsing",_=`:scope .${c} .${c}`,f='[data-bs-toggle="collapse"]',m={parent:null,toggle:!0},u={parent:"(null|element)",toggle:"boolean"};class p extends e{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const s=i.find(f);for(const e of s){const t=i.getSelectorFromElement(e),s=i.find(t).filter((e=>e===this._element));null!==t&&s.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m}static get DefaultType(){return u}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>p.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(t.trigger(this._element,l).defaultPrevented)return;for(const t of e)t.hide();const i=this._getDimension();this._element.classList.remove(c),this._element.classList.add(d),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(d),this._element.classList.add(c,g),this._element.style[i]="",t.trigger(this._element,r)}),this._element,!0),this._element.style[i]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(t.trigger(this._element,o).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,s.reflow(this._element),this._element.classList.add(d),this._element.classList.remove(c,g);for(const e of this._triggerArray){const t=i.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(d),this._element.classList.add(c),t.trigger(this._element,a)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(g)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=s.getElement(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(f);for(const t of e){const e=i.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=i.find(_,this._config.parent);return i.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const i of e)i.classList.toggle("collapsed",!t),i.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const i=p.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}))}}return t.on(document,h,f,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const e of i.getMultipleElementsFromSelector(this))p.getOrCreateInstance(e,{toggle:!1}).toggle()})),s.defineJQueryPlugin(p),p}));