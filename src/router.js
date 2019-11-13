import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    /** 团课 * */
    {
      path: "/groupMain",    //团课首页
      name: "groupMain",
      component: () => import(/* webpackChunkName: "course" */ "./views/group/groupMain")
    },
    {
      path: "/groupInfo",  //团课详情
      name: "groupInfo",
      component: () => import(/* webpackChunkName: "course" */ "./views/group/groupInfo")
    },
    {
      path: "/groupValuate",  //团课评价
      name: "groupValuate",
      component: () => import(/* webpackChunkName: "course" */ "./views/group/groupValuate")
    },

    /** 买卡 * */
    {
      path: "/cardMain",  //买卡首页
      name: "cardMain",
      component: () => import(/* webpackChunkName: "card" */ "./views/card/cardMain")
    },

    /** 我的 * */
    {
      path: "/user/userMain", //我的 首页
      name: "userMain",
      component: () => import(/* webpackChunkName: "user" */ "./views/user/userMain")
    },

    /** 培训 * */
    {
      path: "/drill/drillMain", //培训 首页
      name: "drillMain",
      component: () => import(/* webpackChunkName: "drill" */ "./views/drill/drillMain")
    },
    {
      path: "/drill/drillInfo", //培训 详情
      name: "drillInfo",
      component: () => import(/* webpackChunkName: "drill" */ "./views/drill/drillInfo")
    },

    /** 私教 * */
    {
      path: "/trainer/trainerMain",   //私教首页
      name: "TrainerMain",
      component: () => import(/* webpackChunkName: "trainer" */ "./views/trainer/TrainerMain")
    },
    {
      path: "/trainer/trainerInfo", //私教信息
      name: "TrainerInfo",
      component: () => import(/* webpackChunkName: "trainer" */ "./views/trainer/TrainerInfo")
    },
    {
      path: "/trainer/trainerOrder",  //私教预约
      name: "TrainerOrder",
      component: () => import(/* webpackChunkName: "trainer" */ "./views/trainer/TrainerOrder")
    },

    /** 训练营 * */
    {
      path: "/camp/campMain", //训练营首页
      name: "campMain",
      component: () => import(/* webpackChunkName: "camp" */ "./views/camp/campMain")
    },
    {
      path: "/camp/campInfo", //训练营详情
      name: "campInfo",
      component: () => import(/* webpackChunkName: "camp" */ "./views/camp/campInfo")
    },
      
    /** 单车 * */
    {
      path: "/bike/bikeMain", //单车首页
      name: "bikeMain",
      component: () => import(/* webpackChunkName: "camp" */ "./views/bike/BikeMain")
    },
    {
      path: "/bike/bikeChoose", //单车选座
      name: "BikeChoose",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/bike/BikeChoose")
    }
  ]
});
