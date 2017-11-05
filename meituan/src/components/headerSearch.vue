<template>
    <div>
        <header class="navbar" solt="com-header">
            <div class="nav-wrap-left">
                <a class="react" href="javascript:;">
                    <span class="nav-city">
                        {{city}}
                        <!-- <input type="" name="" v-model="city"> -->
                        <i class="fa fa-angle-down"></i>
                    </span>
                </a>
            </div>
            <div class="box-search">
                <a class="react" rel="" href="javascript:;">
                    <mt-search
                        v-model="searchVal"
                        cancel-text="取消"
                        placeholder="输入商家/品类/商圈">
                    </mt-search>
                </a>
            </div>
            <div class="nav-wrap-right">
                <a class="react" rel="" href="javascript:;">
                    <span class="nav-btn">
                        <i class="fa fa-github"></i>
                        <br>
                        我的
                    </span>
                </a>
            </div>
        </header>
    </div>
</template>

<script>
    import common from "../common/common.js";
	export default{
		name:"componentHeaderSearch",
		data(){
			return {
				city:"广州",
                searchVal:"",
			}
		},
        methods:{
        },
        created(){
        },
        computed:{
        }
	}
</script>

