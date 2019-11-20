// import Vue from "vue";
// import Router from "vue-router";
// import Home from "./views/Home.vue";
//
// Vue.use(Router);
//
// export default new Router({
//
//   routes: [
//     {
//       path: '*',
//       redirect: '/home'
//     },
//     {
//       path: "/home",
//       name: "home",
//       component: Home
//     },
//
//     /** 团课 * */
//     {
//       path: "/groupMain",    //团课首页
//       name: "groupMain",
//       component: () => import( "./views/group/groupMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/groupInfo/:id",  //团课详情
//       name: "groupInfo",
//       component: () => import("./views/group/groupInfo"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/groupValuate",  //团课评价
//       name: "groupValuate",
//       component: () => import("./views/group/groupValuate"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 买卡 * */
//     {
//       path: "/cardMain",  //买卡首页
//       name: "cardMain",
//       component: () => import( "./views/card/cardMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 我的 * */
//     {
//       path: "/user/userMain", //我的 首页
//       name: "userMain",
//       component: () => import("./views/user/userMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 培训 * */
//     {
//       path: "/drill/drillMain", //培训 首页
//       name: "drillMain",
//       component: () => import( "./views/drill/drillMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/drill/drillInfo", //培训 详情
//       name: "drillInfo",
//       component: () => import("./views/drill/drillInfo"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 私教 * */
//     {
//       path: "/trainer/trainerMain",   //私教首页
//       name: "TrainerMain",
//       component: () => import("./views/trainer/TrainerMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/trainer/trainerInfo", //私教信息
//       name: "TrainerInfo",
//       component: () => import( "./views/trainer/TrainerInfo"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/trainer/trainerOrder",  //私教预约
//       name: "TrainerOrder",
//       component: () => import("./views/trainer/TrainerOrder"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 训练营 * */
//     {
//       path: "/camp/campMain", //训练营首页
//       name: "campMain",
//       component: () => import("./views/camp/campMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/camp/campInfo", //训练营详情
//       name: "campInfo",
//       component: () => import("./views/camp/campInfo"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//
//     /** 单车 * */
//     {
//       path: "/bike/bikeMain", //单车首页
//       name: "bikeMain",
//       component: () => import("./views/bike/BikeMain"),
//       meta: {
//         title: '会员中心'
//       }
//     },
//     {
//       path: "/bike/bikeChoose", //单车选座
//       name: "BikeChoose",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("./views/bike/BikeChoose"),
//       meta: {
//         title: '会员中心'
//       }
//     }
//   ]
// });
//
// // // add route path
// // routes.forEach(route => {
// //   route.path = route.path || '/' + (route.name || '');
// // });
// //
// // const router = new Router({ routes });
// //
// // router.beforeEach((to, from, next) => {
// //   const title = to.meta && to.meta.title;
// //   if (title) {
// //     document.title = title;
// //   }
// //   next();
// // });
// //
// // export {
// //   router
// // };



import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'user',
    component: () => import('./views/camp/campInfo'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./views/bike/BikeChoose'),
    meta: {
      title: '购物车'
    }
  },

];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};

