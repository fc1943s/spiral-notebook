let p=o=>{let i={},h={},c={dispatch(t,f){if(t!=="@dispatch"&&c.dispatch("@dispatch",[t,f,i[t]]),i[t]){let s;i[t].forEach(r=>{let a=i[t].includes(r)&&r(h,f,c);a&&typeof a.then!="function"&&(h={...h,...a},s={...s,...a})}),s&&c.dispatch("@changed",s)}},get:()=>h,on(t,f){return(i[t]||(i[t]=[])).push(f),()=>{i[t]=i[t].filter(s=>s!==f)}}};return o.forEach(t=>{t&&t(c)}),c.dispatch("@init"),c};export{p as c};