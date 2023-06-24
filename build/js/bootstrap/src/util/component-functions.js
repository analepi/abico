import EventHandler from"../dom/event-handler.js";import SelectorEngine from"../dom/selector-engine.js";import{isDisabled}from"./index.js";const enableDismissTrigger=(e,s="hide")=>{const t=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;EventHandler.on(document,t,`[data-bs-dismiss="${i}"]`,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),isDisabled(this))return;const n=SelectorEngine.getElementFromSelector(this)||this.closest(`.${i}`);e.getOrCreateInstance(n)[s]()}))};export{enableDismissTrigger};