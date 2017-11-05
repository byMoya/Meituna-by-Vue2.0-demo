<template>
    <div class="dealcard">
        <div class="dealcard-img imgbox" style="background: none;">
            <img :src="dealData.src" style="width: 100%;height:100%;">
        </div>
        <div class="dealcard-block-right">
            <div class="dealcard-brand single-line">{{dealData.name}}</div>
            <div class="title text-block">[{{dealData.area}}]{{dealData.title}}</div>
            <div class="price">"+
                <span class="strong">{{dealData.disPrice}}</span><span class="strong-color">元</span>
                    <del>&emsp;门市价{{dealData.price}}元</del>
                <span class="line-right">已售{{dealData.order}}</span>
            </div>
        </div>
    </div>
</template>

<script >
    export default {
        name:'dealcard',
        props:{
            'dealData':Object
        }
    }
</script>

<style type="text/css" lang="less">
    @import 'style.less';
</style>