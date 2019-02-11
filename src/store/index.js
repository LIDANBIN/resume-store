import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		resumeTemplates: [{
				pic: 'http://pic1.win4000.com/pic/d/60/82be56fb03.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/d/60/56a7bf5508.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/d/60/9b0944172c.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/d/60/3d8db4108d.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/d/60/12ed87b973.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/3/e8/c48d6d8a95.jpg',
				title: '模版一'
			},
			{
				pic: 'http://pic1.win4000.com/pic/3/e8/7987622413.jpg',
				title: '模版一'
			}
		] // 模版数据
	},
	mutations: {

	},
	actions: {

	}
})

export default store
