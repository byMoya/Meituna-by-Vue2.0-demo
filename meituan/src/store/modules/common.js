/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-20 16:02:01
 * @version $Id$
 */

const state = {
	$router:{}
};

const actions = {
	setRouter({commit},router){
		 commit("setRouter",router);
    }
};

const mutations = {
	setRouter(state,router){
		state.$router = router;
	}
};

const getters = {
	router:state=>state.$router
};

export default {
    state,
    getters,
    actions,
    mutations
};