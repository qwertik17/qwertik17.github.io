!function(t,n,e,a){function i(n,e){this.element=n,this.options=t.extend({},s,e),this._defaults=s,this._name=o,this.init()}var o="accordion",s={transitionSpeed:300,transitionEasing:"ease",controlElement:"[data-control]",contentElement:"[data-content]",groupElement:"[data-accordion-group]",singleOpen:!0};i.prototype.init=function(){function a(t,n,e){var a;return function(){var i=this,o=arguments;a?clearTimeout(a):e&&t.apply(i,o),a=setTimeout(function(){e||t.apply(i,o),a=null},n||100)}}function i(t){n.requestAnimationFrame?requestAnimationFrame(t):n.webkitRequestAnimationFrame?webkitRequestAnimationFrame(t):n.mozRequestAnimationFrame?mozRequestAnimationFrame(t):setTimeout(t,1e3/60)}function o(t,n){n?v.css({"-webkit-transition":"",transition:""}):v.css({"-webkit-transition":"max-height "+f.transitionSpeed+"ms "+f.transitionEasing,transition:"max-height "+f.transitionSpeed+"ms "+f.transitionEasing})}function s(n){var e=0;n.children().each(function(){e+=t(this).outerHeight(!0)}),n.data("oHeight",e)}function r(n,e,a,i){var o,s=n.filter(".open").find("> [data-content]"),r=s.find("[data-accordion].open > [data-content]");f.singleOpen||(r=r.not(e.siblings("[data-accordion].open").find("> [data-content]"))),o=s.add(r),n.hasClass("open")&&o.each(function(){var n=t(this).data("oHeight");switch(i){case"+":t(this).data("oHeight",n+a);break;case"-":t(this).data("oHeight",n-a);break;default:throw"updateParentHeight method needs an operation"}t(this).css("max-height",t(this).data("oHeight"))})}function c(t){if(t.hasClass("open")){var n=t.find("> [data-content]"),e=n.find("[data-accordion].open > [data-content]"),a=n.add(e);s(a),a.css("max-height",a.data("oHeight"))}}function d(t,n){t.trigger("accordion.close"),x?(E&&r(t.parents("[data-accordion]"),t,n.data("oHeight"),"-"),n.css(H),t.removeClass("open")):(n.css("max-height",n.data("oHeight")),n.animate(H,f.transitionSpeed),t.removeClass("open"))}function h(t,n){t.trigger("accordion.open"),x?(o(n),E&&r(t.parents("[data-accordion]"),t,n.data("oHeight"),"+"),i(function(){n.css("max-height",n.data("oHeight"))}),t.addClass("open")):(n.animate({"max-height":n.data("oHeight")},f.transitionSpeed,function(){n.css({"max-height":"none"})}),t.addClass("open"))}function l(n){n.closest(f.groupElement);var e=n.siblings("[data-accordion]").filter(".open"),a=e.find("[data-accordion]").filter(".open"),i=e.add(a);i.each(function(){var n=t(this);d(n,n.find(f.contentElement))}),i.removeClass("open")}function u(){var t=!!f.singleOpen&&g.parents(f.groupElement).length>0;s(v),t&&l(g),g.hasClass("open")?d(g,v):h(g,v)}var m=this,f=m.options,g=t(m.element),p=g.find("> "+f.controlElement),v=g.find("> "+f.contentElement),E=g.parents("[data-accordion]").length>0,H={"max-height":0,overflow:"hidden"},x=function(){var t=(e.body||e.documentElement).style,n="transition";if("string"==typeof t[n])return!0;var a=["Moz","webkit","Webkit","Khtml","O","ms"];n="Transition";for(var i=0;i<a.length;i++)if("string"==typeof t[a[i]+n])return!0;return!1}();v.each(function(){var n=t(this);0!=n.css("max-height")&&(n.closest("[data-accordion]").hasClass("open")?(o(n),s(n),n.css("max-height",n.data("oHeight"))):n.css({"max-height":0,overflow:"hidden"}))}),g.attr("data-accordion")||(g.attr("data-accordion",""),g.find(f.controlElement).attr("data-control",""),g.find(f.contentElement).attr("data-content","")),p.on("click",u),p.on("accordion.toggle",function(){if(f.singleOpen&&p.length>1)return!1;u()}),p.on("accordion.refresh",function(){c(g)}),t(n).on("resize",a(function(){c(g)}))},t.fn[o]=function(n){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new i(this,n))})}}(jQuery,window,document);