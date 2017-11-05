<template>
    <div class="star-range">
      <div class="star-view">
        <i class="fa fa-star" v-for="(item,idx) in maxNum" :class="{'star-activated':idx<starNum}"></i>
      </div>
      <input type="range" onchange="console.log(this.value);" v-model="dataOptions.val" min="0" :max="maxNum" :disabled="isEdit">
      <label class="star-label">{{starNum}}分</label>
    </div>
</template>

<script >
    export default {
        props:{
            "dataOptions":Object
        },
        data:function(){
            return {}
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
        methods:{}
    }
</script>

<style type="text/css" lang="less">
    @import 'style.less';
</style>