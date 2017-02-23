<template>
    <div>
        <mt-header fixed :title="headerParams.title" :class="{'mint-header-gray':!headerParams.isGreen,'border-b':true}">
            <mt-button v-if="headerParams.hasBack" icon="back" slot="left" @click="headerParams.backFn"></mt-button>
            <mt-button v-for="item in headerParams.icons" slot="right">
                <i :class="'fa '+item.fa" @click="item.fn"></i>
            </mt-button> 
        </mt-header>
    </div>
</template>

<script>
    import common from "../common/common.js";
	export default{
		name:"componentHeaderPublic",
        props:{
            headerParams:Object
        },
		data(){
            return {

            };
		},
        methods:{
        },
        created(){

        },
        computed:{
        }
	}
</script>

