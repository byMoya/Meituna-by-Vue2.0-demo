<template>
	<div class="container">
		<H1 class="text-center">
			{{msg}}
			<br/>
			欢迎
		</H1>
		<div class="text-center margin-tm">
			<input type="" name="">
		</div>
		<div class="text-center">
			<input type="" name="">
		</div>
		<div class="text-center">
			<input type="" name="">
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg: 'WEILCOME TO MEITUAN'
			}
		},
		/* 页面渲染时调用 */
		created(){
		},
		/* 激活keep-alive时调用 */
		activated(){

		},
		/* 停止keep-alive时调用 */
		deactivated(){
			
		},
	    methods:{
	    }
	};
</script>
