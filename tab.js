/*
 * tabbox: 切换按钮；
 * tabcon：切换区域；
 * index:初始化索引；
 * tabhover：高亮样式；
 * autoplay：是否自动切换；
 * autotime：自动切换时间；
 * outtime：淡入时间；
 * intime：淡出时间；
 * crosstime：鼠标无意识划过时间；
 * ajax：是否开启ajax；
 * ajaxFun：开启ajax后执行的函数；
 */
$.b5m = $.b5m || {};
$.b5m.tab = function(el,options) {
    
    'use strict';

    var base = this;
    base.init = function(){

    options=$.extend({tabbox:null,tabcon:null,index:0,tabhover:'cur',autoplay:false,autotime:4000,outtime:100,intime:150,crosstime:60},options||{});
    var acrossFun=null,hasCls=false,autoSlide=null;
    //切换函数
    function changeFun(n){
        options.tabcon.filter(':visible').fadeOut(options.outtime, function(){
            options.tabcon.eq(n).fadeIn(options.intime).siblings().hide();
        });
        options.tabbox.eq(n).addClass(options.tabhover).siblings().removeClass(options.tabhover);
    }
    //初始高亮第一个
    changeFun(options.index);
    //鼠标事件
    options.tabbox.hover(function(){
        options.index=options.tabbox.index(this);
        if(options.autoplay){
            clearInterval(autoSlide);
        }
        hasCls = $(this).hasClass(options.tabhover);
        //避免无意识划过时触发
        acrossFun=setTimeout(function(){
            //避免当前高亮时划入再次触发
            if(!hasCls){
                changeFun(options.index);
            }
        },options.crosstime);
    },function(){
        clearTimeout(acrossFun);
        //ajax调用
        if(options.ajax){
            options.ajaxFun();
        }
        if(options.autoplay){
            //自动切换
            autoSlide = setInterval(function(){
                options.index++;
                changeFun(options.index);
                if (options.index == options.tabcon.size()) {
                    changeFun(0);
                    options.index=0;
                }
            }, options.autotime)
        }
    }).eq(0).trigger('mouseleave');
    }
    
};

$.fn.b5mTab = function(options) {
return this.each(function(){
new $.b5m.tab(this,options).init();
});
}
