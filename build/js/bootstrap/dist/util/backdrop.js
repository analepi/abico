/*!
  * Bootstrap backdrop.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../dom/event-handler.js"),require("./config.js"),require("./index.js")):"function"==typeof define&&define.amd?define(["../dom/event-handler","./config","./index"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Backdrop=t(e.EventHandler,e.Config,e.Index)}(this,(function(e,t,i){"use strict";const n="backdrop",s="show",o=`mousedown.bs.${n}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};return class extends t{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return c}static get NAME(){return n}show(e){if(!this._config.isVisible)return void i.execute(e);this._append();const t=this._getElement();this._config.isAnimated&&i.reflow(t),t.classList.add(s),this._emulateAnimation((()=>{i.execute(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(s),this._emulateAnimation((()=>{this.dispose(),i.execute(e)}))):i.execute(e)}dispose(){this._isAppended&&(e.off(this._element,o),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=i.getElement(e.rootElement),e}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),e.on(t,o,(()=>{i.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){i.executeAfterTransition(e,this._getElement(),this._config.isAnimated)}}}));