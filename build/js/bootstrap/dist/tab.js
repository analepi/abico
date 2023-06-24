/*!
  * Bootstrap tab.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("./base-component.js"),require("./dom/event-handler.js"),require("./dom/selector-engine.js"),require("./util/index.js")):"function"==typeof define&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Tab=e(t.BaseComponent,t.EventHandler,t.SelectorEngine,t.Index)}(this,(function(t,e,i,s){"use strict";const n=".bs.tab",r=`hide${n}`,o=`hidden${n}`,a=`show${n}`,l=`shown${n}`,d=`click${n}`,c=`keydown${n}`,u=`load${n}`,g="ArrowLeft",h="ArrowRight",b="ArrowUp",f="ArrowDown",_="active",m="fade",A="show",p=":not(.dropdown-toggle)",v='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',w=`${`.nav-link${p}, .list-group-item${p}, [role="tab"]${p}`}, ${v}`,I=`.${_}[data-bs-toggle="tab"], .${_}[data-bs-toggle="pill"], .${_}[data-bs-toggle="list"]`;class E extends t{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),e.on(this._element,c,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const i=this._getActiveElem(),s=i?e.trigger(i,r,{relatedTarget:t}):null;e.trigger(t,a,{relatedTarget:i}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(i,t),this._activate(t,i))}_activate(t,s){if(!t)return;t.classList.add(_),this._activate(i.getElementFromSelector(t));this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),e.trigger(t,l,{relatedTarget:s})):t.classList.add(A)}),t,t.classList.contains(m))}_deactivate(t,s){if(!t)return;t.classList.remove(_),t.blur(),this._deactivate(i.getElementFromSelector(t));this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),e.trigger(t,o,{relatedTarget:s})):t.classList.remove(A)}),t,t.classList.contains(m))}_keydown(t){if(![g,h,b,f].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[h,f].includes(t.key),i=s.getNextActiveElement(this._getChildren().filter((t=>!s.isDisabled(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),E.getOrCreateInstance(i).show())}_getChildren(){return i.find(w,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=i.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains("dropdown"))return;const n=(t,n)=>{const r=i.findOne(t,s);r&&r.classList.toggle(n,e)};n(".dropdown-toggle",_),n(".dropdown-menu",A),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(_)}_getInnerElement(t){return t.matches(w)?t:i.findOne(w,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=E.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}return e.on(document,d,v,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),s.isDisabled(this)||E.getOrCreateInstance(this).show()})),e.on(window,u,(()=>{for(const t of i.find(I))E.getOrCreateInstance(t)})),s.defineJQueryPlugin(E),E}));