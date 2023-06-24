function normalizeData(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function normalizeDataKey(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Manipulator={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${normalizeDataKey(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${normalizeDataKey(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const a of r){let r=a.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=normalizeData(t.dataset[a])}return e},getDataAttribute:(t,e)=>normalizeData(t.getAttribute(`data-bs-${normalizeDataKey(e)}`))};export default Manipulator;