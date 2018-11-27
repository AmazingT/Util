var Foo = Vue.component("foo", {
	template: "<div>页面A</div>"
});

var Bar = Vue.component("bar", {
	template: "<div>页面B</div>"
});

// 路由映射表，path值为<router-link to="/bar">中to的值
var routes = [
	{path: '/foo', component: Foo},// component对应的是组件实例非组件名字
	{path: '/bar', component: Bar}
];

// 注册路由(路由根据路由映射表来查找对应的组件)
var router = new VueRouter({
	routes: routes
	// routes
});

// 根实例(注入路由)
var app = new Vue({
	el: "#app",
	router: router
	// router
});