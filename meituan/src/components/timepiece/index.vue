<!--
    /**
     * 计时器倒数组件
     * @param  {[type]} [description] timer 目标时间的毫秒值字符串
     * @param  {[type]} [description]
     * @return {[type]} [description]
     */
-->
<template>
    <div class="timepiece">
      <span class="timepiece-item">{{h}}</span>:
      <span class="timepiece-item">{{m}}</span>:
      <span class="timepiece-item">{{s}}</span>
    </div>
</template>

<script>
    import common from "../../common/common.js";
	export default {
        props:{
            'timer':String
        },
		data(){
			return {
				h:"-",
                m:"-",
                s:"-"
			}
		},
        methods:{
           
        },
        created(){
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
        computed:{
            headerMapObject:function(){
                return this.headerMap[this.type];
            }
        }
	}
</script>

<style lang="less">
    @import 'style.less';
</style>

