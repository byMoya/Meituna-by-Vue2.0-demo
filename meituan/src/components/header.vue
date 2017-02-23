<template>
    <div>
        <header class="navbar" solt="com-header" v-if="type=='home'">
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

        <mt-header fixed title="" class="mint-header" v-if="type=='user'">
            <mt-button slot="right"><i class="fa fa-cog"></i></mt-button>
            <mt-button slot="right"><i class="fa fa-bell"></i></mt-button>
        </mt-header>

        <mt-header fixed title="套餐详情" class="mint-header-gray" v-if="type=='dealDetailFromHome'">
            <mt-button icon="back" slot="left" @click="toBack"></mt-button>
            <mt-button slot="right"><i class="fa fa-cog"></i></mt-button>
            <mt-button slot="right"><i class="fa fa-bell"></i></mt-button>
        </mt-header>

        <mt-header fixed :title="headerMapObject.title" class="mint-header-gray border-b" v-if="type in headerMap">
            <mt-button v-if="headerMapObject.hasBack" icon="back" slot="left" @click="toBack"></mt-button>
            <mt-button v-for="item in headerMapObject.icons" slot="right">
                <i class="fa fa-bell"></i>
            </mt-button> 
        </mt-header>

    </div>
</template>

<script>
    import common from "../common/common.js";
	export default{
		name:"componentHeader",
		data(){
			return {
				city:"广州",
                searchVal:"",
                type:"",
                headerMap:{
                    orders:{
                        title:"订单",
                        hasBack:false,
                        icons:[]
                    },
                    ordersAccount:{
                        title:"我的订单",
                        hasBack:true,
                        icons:[]
                    },
                },
			}
		},
        methods:{
            toBack(){
                this.$router.back();
            }
        },
        created(){
            common.routerObserver.push(function(r){
                console.log(r);
                this.type = r.name;
            }.bind(this))
        },
        computed:{
            headerMapObject:function(){
                return this.headerMap[this.type];
            }
        }
	}
</script>

