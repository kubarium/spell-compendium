import Vue from "vue";
import Router from "vue-router";
//import Cards from "./views/Cards.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "cards",
      component: Cards
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
