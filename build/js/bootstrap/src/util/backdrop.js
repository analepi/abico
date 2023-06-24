import EventHandler from"../dom/event-handler.js";import Config from"./config.js";import{execute,executeAfterTransition,getElement,reflow}from"./index.js";const NAME="backdrop",CLASS_NAME_FADE="fade",CLASS_NAME_SHOW="show",EVENT_MOUSEDOWN=`mousedown.bs.${NAME}`,Default={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},DefaultType={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Backdrop extends Config{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}show(e){if(!this._config.isVisible)return void execute(e);this._append();const t=this._getElement();this._config.isAnimated&&reflow(t),t.classList.add("show"),this._emulateAnimation((()=>{execute(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation((()=>{this.dispose(),execute(e)}))):execute(e)}dispose(){this._isAppended&&(EventHandler.off(this._element,EVENT_MOUSEDOWN),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=getElement(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),EventHandler.on(e,EVENT_MOUSEDOWN,(()=>{execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){executeAfterTransition(e,this._getElement(),this._config.isAnimated)}}export default Backdrop;