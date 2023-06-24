import BaseComponent from"./base-component.js";import EventHandler from"./dom/event-handler.js";import SelectorEngine from"./dom/selector-engine.js";import{defineJQueryPlugin,getElement,isDisabled,isVisible}from"./util/index.js";const NAME="scrollspy",DATA_KEY="bs.scrollspy",EVENT_KEY=`.${DATA_KEY}`,DATA_API_KEY=".data-api",EVENT_ACTIVATE=`activate${EVENT_KEY}`,EVENT_CLICK=`click${EVENT_KEY}`,EVENT_LOAD_DATA_API=`load${EVENT_KEY}.data-api`,CLASS_NAME_DROPDOWN_ITEM="dropdown-item",CLASS_NAME_ACTIVE="active",SELECTOR_DATA_SPY='[data-bs-spy="scroll"]',SELECTOR_TARGET_LINKS="[href]",SELECTOR_NAV_LIST_GROUP=".nav, .list-group",SELECTOR_NAV_LINKS=".nav-link",SELECTOR_NAV_ITEMS=".nav-item",SELECTOR_LIST_ITEMS=".list-group-item",SELECTOR_LINK_ITEMS=".nav-link, .nav-item > .nav-link, .list-group-item",SELECTOR_DROPDOWN=".dropdown",SELECTOR_DROPDOWN_TOGGLE=".dropdown-toggle",Default={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},DefaultType={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ScrollSpy extends BaseComponent{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=getElement(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(EventHandler.off(this._config.target,EVENT_CLICK),EventHandler.on(this._config.target,EVENT_CLICK,"[href]",(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const o=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(o.scrollTo)return void o.scrollTo({top:s,behavior:"smooth"});o.scrollTop=s}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),o=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const i of e){if(!i.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(i));continue}const e=i.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&e){if(o(i),!s)return}else r||e||o(i)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=SelectorEngine.find("[href]",this._config.target);for(const t of e){if(!t.hash||isDisabled(t))continue;const e=SelectorEngine.findOne(decodeURI(t.hash),this._element);isVisible(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add("active"),this._activateParents(e),EventHandler.trigger(this._element,EVENT_ACTIVATE,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))SelectorEngine.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add("active");else for(const t of SelectorEngine.parents(e,".nav, .list-group"))for(const e of SelectorEngine.prev(t,SELECTOR_LINK_ITEMS))e.classList.add("active")}_clearActiveClass(e){e.classList.remove("active");const t=SelectorEngine.find("[href].active",e);for(const e of t)e.classList.remove("active")}static jQueryInterface(e){return this.each((function(){const t=ScrollSpy.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}EventHandler.on(window,EVENT_LOAD_DATA_API,(()=>{for(const e of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(e)})),defineJQueryPlugin(ScrollSpy);export default ScrollSpy;