<template>
    <div class="top-btn" v-show="_isshow">
        <a class="react"><i class="fa fa-arrow-up"></i></a>
    </div>
</template>

<script>
    import common from "../../common/common.js";
	export default {
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
	}
</script>

<style lang="less">
    @import 'style.less';
</style>

