var p=(o)=>o<0.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,h=(o,s={})=>{if(typeof window>"u")return;let{duration:n=800,offset:c=0}=s,t=window.scrollY,a=o.getBoundingClientRect(),e=Math.max(0,Math.min(a.top+t-c,document.documentElement.scrollHeight-window.innerHeight));if(n<=0){window.scrollTo({top:e,behavior:"auto"});return}let m=performance.now(),i=(l)=>{let u=l-m,r=Math.min(u/n,1),d=p(r),w=t+(e-t)*d;if(window.scrollTo({top:w,behavior:"auto"}),r<1)window.requestAnimationFrame(i)};window.requestAnimationFrame(i)};
export{h as e};

//# debugId=C06F5F06B4A7386764756E2164756E21
//# sourceMappingURL=/Portfolio/client/chunk-7gddxx59.js.map
