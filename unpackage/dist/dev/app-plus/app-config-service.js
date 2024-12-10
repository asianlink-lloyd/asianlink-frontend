
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"navigationBar":{},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"asianlink.ai","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.15","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"uni-app","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/landing/landingScreen","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"landing","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Login","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/register/register","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Register","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/publicService/publicService","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Public Service","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/news/news","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"News","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/Ecommerce/Ecommerce","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Ecommerce","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/profile/profile","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Profile","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/profile/details","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Profile Detail","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/community/community","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Community","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/ai/aiScreen","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Ai","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/bookmark/bookmarkScreen","meta":{"animationType":"none","animationDuration":0,"navigationBar":{"titleText":"Bookmark","style":"custom","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  