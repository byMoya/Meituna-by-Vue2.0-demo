<template>
	<div class="container">
		<H1 class="text-center">
			{{msg}}
			<br/>
			欢迎
		</H1>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg: 'MEITUAN By DongMoya'
			}
		},
		/* 页面渲染时调用 */
		created(){
		},
		/* 激活keep-alive时调用 */
		activated(){
			setTimeout(function(){
	            this.$router.replace('home');
	        }.bind(this), 1500);
		},
		/* 停止keep-alive时调用 */
		deactivated(){
			
		},
	    methods:{
	    }
	};
</script>
