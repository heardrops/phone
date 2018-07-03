var screenAniamteElements = {
	'.screen-1' : [
		'.screen-1_heading',
		'.screen-1_phone',
		'.screen-1_shadow'
	],
	'.screen-2' : [
		'.screen-2_heading',
		'.screen-2_phone',
		'.screen-2_subHeading',
		'.screen-2_point',
		'.screen-2_point_i_1',
		'.screen-2_point_i_2',
		'.screen-2_point_i_3'
	],
	'.screen-3' : [
		'.screen-3_heading',
		'.screen-3_phone',
		'.screen-3_subHeading',
		'.screen-3_features'
	],
	'.screen-4' : [
		'.screen-4_heading',
		'.screen-4_subHeading',
		'.screen-4_type_item_i_1',
		'.screen-4_type_item_i_2',
		'.screen-4_type_item_i_3',
		'.screen-4_type_item_i_4'
	],
	'.screen-5' : [
		'.screen-5_heading',
		'.screen-5_subHeading',
		'.screen-5_bg'
	]
};

function setScreenAnimate(screenCls) {
	var screen = document.querySelector(screenCls);//获取当前屏的元素
	var animateElements = screenAniamteElements[screenCls];// 需要设置动画的元素

	var isSetAnimateClass = false;//是否有初始化子元素的样式
	var isAnimateDone = false;//当前屏幕下所有子元素的状态时done吗？
	screen.onclick = function() {
		//初始化样式，增加init
		if(isSetAnimateClass === false){
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');

				element.setAttribute('class', baseCls +' '+ animateElements[i].substr(1)+'_animate_init');
			}
			isSetAnimateClass = true;
			return;
		}

		//切换所有animateElements的init -> done
		if(isAnimateDone === false) {
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');

				element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
			}
			isAnimateDone = true;
			return;
		}

		//切换所有animateElements的done -> init
		if(isAnimateDone === true) {
			for(var i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');

				element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
			}
			isAnimateDone = false;
			return;
		}
	}
}

setScreenAnimate(".screen-1");
setScreenAnimate(".screen-2");
setScreenAnimate(".screen-3");
setScreenAnimate(".screen-4");
setScreenAnimate(".screen-5");
