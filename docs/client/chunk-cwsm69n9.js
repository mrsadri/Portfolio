var n=(r,e)=>{if(import.meta.env?.MODE!=="production")console.warn(`[assets] ${r}`,e)},o=(r,e)=>{try{return new URL(e,r).href}catch(t){return n(`Unable to resolve asset at path "${e}"`,t),e}},c=(r,e,t,s)=>{if(!t)n(`Missing alt text for asset "${e}".`,null);return{src:o(r,e),alt:t||"Decorative image",...s}};
export{c as z};

//# debugId=BEFF015B38DEE1C664756E2164756E21
//# sourceMappingURL=/Portfolio/client/chunk-cwsm69n9.js.map
