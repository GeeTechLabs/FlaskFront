var _0x4bbf=["replace","lightmode","find","self","object","#wpop-items","console","removeClass","warn","lswpopcont","get","#sidebar ","toString","getJSON","range_selectors","cachePrefix","data-range","episode","each","setLocalStorage","constructor","stringify","link",".wpop.wpop-monthly","span.ts-ajax-cache[data-id='","getTime","setItem","currentTime",'return /" + this + "/',"ajax","checked","select#chapter option[data-id=",'{}.constructor("return this")( )',".wpop.wpop-weekly","append","getCurrent","active","return (function() ","indexOf","error","#sidebar .wpop","update_selector","done","log","href","darkmode","push","ts_cwpop","content","is_valid_range","apply","#thememode input[type='checkbox']","text","src","lstimename","currentChapterList","param","show_items","html","parse","length","getItem","Chapter ","removeLocalCache","ts_cnwpop","?time=","isSupported","exception",".logos img","pop","monthly","bind","selected","ranges","closest",".epl-title","select#chapter","getLocalStorage","info","addClass","hide",".wpop.wpop-alltime","alltime","removeItem","default","click",".epl-num","localStorage","attach_events","body","thememode"];!function(t,e){var r=function(e){for(;--e;)t.push(t.shift())};!function(){var t={data:{key:"cookie",value:"timeout"},setCookie:function(t,e,r,a){a=a||{};for(var o=e+"="+r,n=0,i=t.length;n<i;n++){var x=t[n];o+="; "+x;var c=t[x];t.push(c),i=t.length,!0!==c&&(o+="="+c)}a.cookie=o},removeCookie:function(){return"dev"},getCookie:function(t,e){var a,o=(t=t||function(t){return t})(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)"));return a=130,r(++a),o?decodeURIComponent(o[1]):void 0}};t.updateCookie=function(){return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(t.removeCookie.toString())};var e=t.updateCookie();e?e?t.getCookie(null,"counter"):t.removeCookie():t.setCookie(["*"],"counter",1)}()}(_0x4bbf);var _0x3d74=function(t,e){return _0x4bbf[t-=0]},_0x5c6b1b=_0x3d74,_0x38f9d4=function(){var t=!0;return function(e,r){var a=t?function(){if(r){var t=r[_0x3d74("0xb")](e,arguments);return r=null,t}}:function(){};return t=!1,a}}(),_0x2bddf2=_0x38f9d4(this,function(){var t=function(){var e=_0x3d74;return!t.constructor(e("0x50"))().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}").test(_0x2bddf2)};return t()});_0x2bddf2();var _0x152271=function(){var t=!0;return function(e,r){var a=t?function(){if(r){var t=r[_0x3d74("0xb")](e,arguments);return r=null,t}}:function(){};return t=!1,a}}(),_0x9c036c=_0x152271(this,function(){for(var t=_0x3d74,e=function(){var t,e=_0x3d74;try{t=Function(e("0x59")+e("0x54")+");")()}catch(e){t=window}return t}(),r=e[t("0x3a")]=e.console||{},a=[t("0x4"),t("0x3c"),t("0x27"),t("0x0"),t("0x1c"),"table","trace"],o=0;o<a[t("0x15")];o++){var n=_0x152271[t("0x48")].prototype[t("0x20")](_0x152271),i=a[o],x=r[i]||n;n.__proto__=_0x152271.bind(_0x152271),n[t("0x40")]=x[t("0x40")][t("0x20")](x),r[i]=n}});function pickSelected(){var t=_0x3d74;jQuery(t("0x53")+chapter_id+"]").attr("selected",t("0x21")),jQuery("select#chapter option[value='']").attr("disabled","disabled")}function loadChList(){var t=_0x3d74;if("object"==typeof localStorage){var e=localStorage[t("0x16")](t("0x10"));if(null!==e){if((e=JSON[t("0x14")](e)).id==post_id)return $(t("0x25")).append(e[t("0x13")]),void pickSelected();localStorage[t("0x2c")]("currentChapterList")}}jQuery[t("0x51")]({url:ajaxurl,type:"post",data:{action:"get_chapters",id:post_id},success:function(e){var r=t;if($(r("0x25"))[r("0x56")](e),r("0x38")==typeof localStorage)return localStorage[r("0x4e")](r("0x10"),JSON[r("0x49")]({id:post_id,html:e})),void pickSelected()}})}function ts_extract_epls(){var t=_0x3d74,e=$(".eplister ul li");if(e[t("0x15")]<1)return[];var r=[];return e[t("0x46")](function(e,a){var o=t;a=jQuery(a);var n={};n[o("0x45")]=a[o("0x36")](o("0x2f"))[o("0xd")](),n.title=a[o("0x36")](o("0x24"))[o("0xd")](),n[o("0x4a")]=a[o("0x36")]("a")[o("0x3e")](0).href,r[o("0x7")](n)}),r}function ts_set_first_ep(){var t=_0x3d74,e=jQuery(".epcur.epcurfirst");if(!(e[t("0x15")]<1)){var r=ts_extract_epls();r[t("0x15")]<1||(r=r[t("0x1e")](),e.parent().attr(t("0x5"),r[t("0x4a")]),e.html(t("0x17")+r[t("0x45")]))}}_0x9c036c();var ts_localStorage={cachePrefix:"tslsc_",isSupported:function(){var t=_0x3d74;try{return"localStorage"in window&&null!==window[t("0x30")]}catch(t){return!1}},setLocalStorage:function(t,e){var r=_0x3d74;if(!this[r("0x1b")]())return!1;localStorage.setItem(t,JSON[r("0x49")](e))},getLocalStorage:function(t){var e=_0x3d74;if(!this[e("0x1b")]())return null;var r=localStorage[e("0x16")](t);return null===r?null:JSON[e("0x14")](r)},setLocalCache:function(t,e,r){var a=_0x3d74,o={v:e,e:(new Date)[a("0x4d")]()+1e3*r};this[a("0x47")](this.cachePrefix+t,o)},getLocalCache:function(t){var e=_0x3d74,r=this[e("0x26")](ts_localStorage[e("0x43")]+t);return r?"e"in r==0||isNaN(r.e)?(this.removeLocalCache(t),null):"v"in r==0?(this[e("0x18")](t),null):(new Date).getTime()>r.e?(this[e("0x18")](t),null):r.v:null},removeLocalCache:function(t){localStorage[_0x3d74("0x2c")](this.cachePrefix+t)},removeAllCache:function(){var t=_0x3d74;for(var e in localStorage)0===e[t("0x5a")](this[t("0x43")])&&localStorage[t("0x2c")](e)}},ts_darkmode={init:function(){var t=_0x3d74;!1!==ts_localStorage.isSupported()&&(null==localStorage[t("0x16")](t("0x33"))?t("0x35")==defaultTheme?jQuery("body")[t("0x28")]("lightmode"):jQuery(t("0x32"))[t("0x3b")](t("0x35")):t("0x35")==localStorage[t("0x16")](t("0x33"))?jQuery(t("0x32")).addClass(t("0x35")):jQuery(t("0x32"))[t("0x3b")](t("0x35")))},listen:function(){var t=_0x3d74;jQuery(t("0xc")).on("change",function(){var e=t;0==jQuery(e("0xc")).prop(e("0x52"))?(jQuery(e("0x1d")).attr(e("0xe"),tsLogoLight),localStorage[e("0x4e")](e("0x33"),e("0x35")),jQuery(e("0x32"))[e("0x28")](e("0x35"))):(jQuery(e("0x1d")).attr(e("0xe"),tsLogoDark),localStorage.setItem(e("0x33"),e("0x6")),jQuery("body")[e("0x3b")]("lightmode"))})}},ts_popular_widget={ranges:[_0x5c6b1b("0x1f"),"weekly",_0x5c6b1b("0x2b")],default:"weekly",range_selectors:{weekly:_0x5c6b1b("0x55"),monthly:_0x5c6b1b("0x4b"),alltime:_0x5c6b1b("0x2a")},update_selector:_0x5c6b1b("0x39"),currentTime:null,lstimename:_0x5c6b1b("0x8"),lswpopcont:_0x5c6b1b("0x19"),is_valid_range:function(t){var e=_0x5c6b1b;return-1!==this[e("0x22")][e("0x5a")](t)},run:function(t){var e=_0x5c6b1b;this[e("0x4f")]=t,this.updateWidget(),this[e("0x12")](this[e("0x2d")]),this[e("0x31")]()},show_items:function(t){var e=_0x5c6b1b;if(ts_popular_widget.is_valid_range(t)){jQuery(e("0x1"))[e("0x29")]();var r=jQuery(e("0x3f")+this[e("0x42")][t]);jQuery("#sidebar .ts-wpop-nav-tabs li")[e("0x3b")](e("0x58")),jQuery("#sidebar .ts-wpop-nav-tabs li a[data-range='"+t+"']")[e("0x23")]("li")[e("0x28")]("active"),r.show()}},getCurrent:function(){var t=_0x5c6b1b,e=jQuery(this[t("0x2")])[t("0x13")]();return e[t("0x34")](/[\n\r]/g,"").replace(/\s\s+/g," ")},updateWidget:function(){var t=_0x5c6b1b,e=ts_localStorage[t("0x26")](this[t("0xf")]);if(isNaN(e))ts_localStorage[t("0x47")](this[t("0xf")],this[t("0x4f")]),ts_localStorage[t("0x47")](this[t("0x3d")],this[t("0x57")]);else{if(e<this[t("0x4f")])return ts_localStorage[t("0x47")](this.lstimename,this[t("0x4f")]),void ts_localStorage[t("0x47")](this[t("0x3d")],this[t("0x57")]());if(e>this.currentTime){var r=ts_localStorage.getLocalStorage(this.lswpopcont);if(!r)return;return void jQuery(this[t("0x2")])[t("0x13")](r)}}},attach_events:function(){var t=_0x5c6b1b;jQuery(".ts-wpop-tab").on(t("0x2e"),function(){var e=t,r=jQuery(this).attr(e("0x44"));ts_popular_widget[e("0xa")](r)&&ts_popular_widget[e("0x12")](r)})}},ts_ajax_cache_buster={param:{},run:function(t){var e=_0x5c6b1b;this[e("0x11")]=t,ts_ajax_cache_buster[e("0x3e")]()},get:function(){var t=_0x5c6b1b;jQuery[t("0x41")](this.param.url+t("0x1a")+this[t("0x11")].time)[t("0x3")](function(e){var r=t;typeof e==typeof{}&&r("0x9")in e!=0&&jQuery(r("0x4c")+e[r("0x37")]+"']")[r("0x13")](e[r("0x9")])}).fail(function(){})}};