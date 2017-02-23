/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-21 14:45:56
 * @version $Id$
 */
import axios from 'axios';

export default {
	apiPath:"http://localhost:8383/",
	resourcePath(name){
		return require("../images/" + name);
	},
	intervalTimer:(function(){
		let data = [];
		function push(fn,time,name){
			let _t = setInterval(fn,time);
			data.push({
				key:_t,
				name:name
			});
		}
		function clear(name){
			data.forEach(function(item,i,arr){
				if(item.name == name || !name){
					clearInterval(item.key);
				}
				
			});
		}
		function get(name){
			if(!name){
				return data;
			}
			let result = [];
			data.forEach(function(item,i,arr){
				if(item.name == name){
					result.push(item);
				}
			});
			return result;
		}
		return {
			push:push,
			clear:clear,
			get:get
		};		
	})(),
	axiosGet:function(url,params,cb){
		axios.get(this.apiPath + url,params).then(function(res){
			// 这里作返回值判断
			if(res.status==200 && res.data.code==200){
				cb(res.data);
			}else{

			}
		});
	},
	axiosPost:function(url,params,cb){
		axios.post(this.apiPath + url,params).then(function(res){
			// 这里作返回值判断
			if(res.status==200 && res.data.code==200){
				cb(res.data);
			}else{
				
			}
		});
	},
	routerObserver:(function(){
		let fns = [];
		let uuid = 0;
		function push(fn){
			fns.push({
				id:uuid,
				fn:fn
			});
			uuid += 1;
			return uuid;
		};
		function notice(router){
			fns.forEach(function(item,idx,arr){
				item.fn(router);
			});
		};
		return {
			push:push,
			notice:notice
		};
	})()
}
