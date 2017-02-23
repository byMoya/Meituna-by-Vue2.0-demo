/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-23 11:16:04
 * @version $Id$
 */
import Vue from 'vue';
import common from "../common/common.js";

/**
 * 计时器倒数组件
 * @param  {[type]} [description] timer 目标时间的毫秒值字符串
 * @param  {[type]} [description]
 * @return {[type]} [description]
 */
Vue.component('timepiece',{
  props:{
    'timer':String
  },
  data:function(){
  	return {
  		h:"-",
  		m:"-",
  		s:"-"
  	}
  },
  created:function(){
  	// console.log(this.h,this.m,this.s);
  	var _timer = this.timer-(new Date()).getTime()<0?(new Date()).getTime()+1523205:this.timer;
  	common.intervalTimer.push(function(){
  		var curTime = (new Date()).getTime();
  		var timepiece = _timer - curTime;
  		if(timepiece>=0){
  			var timepieceDate = new Date(timepiece);
  			var y = timepieceDate.getFullYear() - 1970;
  			var month = timepieceDate.getMonth();
  			var d = timepieceDate.getDate();
  			var h = timepieceDate.getHours();
  			var m = timepieceDate.getMinutes();
  			var s = timepieceDate.getSeconds();

  			if(y>0){
  				h += y*365*24;
  			}
  			if(month>0){
  				h += month*30*24;
  			}
  			if(d>0){
  				h += d*24;
  			}

  			this.h = h;
  			this.m = m;
  			this.s = s;

  		}else{
  			this.h = "-";
  			this.m = "-";
  			this.s = "-";
  		}
  		  
  	}.bind(this),1000,"timepiece");

  },
  methods:{
  },
  template: "<div class=\"timepiece\">"+
              "<span class=\"timepiece-item\">{{h}}</span>:"+
              "<span class=\"timepiece-item\">{{m}}</span>:"+
              "<span class=\"timepiece-item\">{{s}}</span>"+
            "</div>"
});

Vue.component("dealcard",{
  props:{
    'dealData':Object,
  },
  template: "<div class=\"dealcard\">"+
                  "<div class=\"dealcard-img imgbox\" style=\"background: none;\">"+
                    "<img :src=\"dealData.src\" style=\"width: 100%;height:100%;\">"+
                  "</div>"+
                "<div class=\"dealcard-block-right\">"+
                    "<div class=\"dealcard-brand single-line\">{{dealData.name}}</div>"+
                    "<div class=\"title text-block\">[{{dealData.area}}]{{dealData.title}}</div>"+
                    "<div class=\"price\">"+
                        "<span class=\"strong\">{{dealData.disPrice}}</span><span class=\"strong-color\">元</span>"+
                          "<del>&emsp;门市价{{dealData.price}}元</del>"+
                        "<span class=\"line-right\">已售{{dealData.order}}</span>"+
                    "</div>"+
                "</div>"+
            "</div>"
});

Vue.component("top-btn",{
  template:"<div class=\"top-btn\" v-show=\"_isshow\">"+
            "<a class=\"react\"><i class=\"fa fa-arrow-up\"></i></a>"+
           "</div>",
  props:{
    isshow:String
  },
  computed:{
    _isshow(){
      if(this.isshow == 0){
        return false;
      }else{
        return true;
      }
    }
  },
  methods:{

  }
});

Vue.component("star-range",{
  props:{
    "dataOptions":Object
  },
  data:function(){
    return {

    }
  },
  computed:{
    starNum(){
      this.dataOptions.val = this.dataOptions.val?parseInt(this.dataOptions.val):0;
      return this.dataOptions.val;
    },
    maxNum(){
      this.dataOptions.max = this.dataOptions.max?parseInt(this.dataOptions.max):5;
      return this.dataOptions.max;
    },
    isEdit(){
      this.dataOptions.edit = this.dataOptions.edit?false:true;
      return this.dataOptions.edit;
    }
  },
  methods:{
  },
  template: "<div class=\"star-range\">"+
              "<div class=\"star-view\">"+
                "<i class=\"fa fa-star\" v-for=\"(item,idx) in maxNum\" :class=\"{'star-activated':idx<starNum}\"></i>"+
              "</div>"+
              "<input type=\"range\" onchange=\"console.log(this.value);\" v-model=\"dataOptions.val\" min=\"0\" :max=\"maxNum\" :disabled=\"isEdit\">"+
              "<label class=\"star-label\">{{starNum}}分</label>"+
            "</div>"
});
Vue.component("com-header",{
  template:"<div></div>"
});

export default {};
