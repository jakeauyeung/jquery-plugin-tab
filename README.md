###Tab标签切换插件，写的很简单，已作封装 

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

###示例
```
$(document).b5mTab({
		tabbox:$('ul#J_indexSlideNav>li'),
		tabcon:$('div#J_indexSlideBox>div.show'),
		autoplay: true,
		crosstime:120,
		outtime:200,
		autotime:4000,
		intime:300
	});
```