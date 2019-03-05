import Vue from 'vue'
import Router from 'vue-router'
import DzIndex from '../pages/DzIndex'
import DzStrategy from '../pages/DzStrategy'
import DzPhotograph from '../pages/DzPhotograph'
import DzFollow from '../pages/DzFollow'
import DzMine from '../pages/DzMine'
import DownUpdata from '../pages/DownUpdata'
import ExitPage from '../pages/ExitPage'

// partOne
import VsCar from "../pages/partOne/VsCar"
import VsBeaut from "../pages/partOne/VsBeaut"
import VsBeautKuan from "../pages/partOne/VsBeautKuan"
import VsHome from "../pages/partOne/VsHome"
import VsMyCar from "../pages/partOne/VsMyCar"
import VsXuanCar from "../pages/partOne/VsXuanCar"
import VsDl from "../pages/partOne/VsDl"
import VsReg from "../pages/partOne/VsReg"

// partTwo
import IndexFood from '../pages/partTwo/IndexFood'
import IndexMovie from '../pages/partTwo/IndexMovie'
import IndexMovieListFilm from '../components/IndexMovie/IndexMovieListFilm'
import IndexMovieDemand from '../components/IndexMovie/IndexMovieDemand'
import IndexMovieMarket from '../components/IndexMovie/IndexMovieMarket'
import IndexMovieShow from '../components/IndexMovie/IndexMovieShow'
import IndexToGo from '../pages/partTwo/IndexToGo'
import ToGo from '../components/IndexToGo/ToGo'
import OrderForm from '../components/IndexToGo/OrderForm'
import MySelf from '../components/IndexToGo/MySelf'
import IndexToGoShoppingCar from '../pages/partTwo/IndexToGoShoppingCar'
// partThree
import HairdRessing from '../pages/partThree/HairdRessing'
import Parenting from "../pages/partThree/Parenting";
import TicketsSpots from "../pages/partThree/TicketsSpots";
import SearchPage from "../pages/partThree/SearchPage";
import ShopsDetails from "../pages/partThree/ShopsDetails";
import ParentClass from "../pages/partThree/ParentClass";

// partFour
import Train from "../pages/partFour/Train"
import Bawangcan from "../pages/partFour/Bawangcan"
import Comment from "../pages/partFour/Comment"
import Local from "../pages/partFour/Local"
Vue.use(Router)

const router= new Router({
  routes: [
    {path: '/', component: DzIndex, redirect:'/DzIndex'},
    {path: '/DzIndex', name: 'DzIndex', component: DzIndex},
    {path: '/DzStrategy', name: 'DzStrategy', component: DzStrategy},
    {path: '/DzPhotograph', name: 'DzPhotograph', component: DzPhotograph,meta:{requireAuth:true}},
    {path: '/DzFollow', name: 'DzFollow', component: DzFollow},
    {path: '/DzMine', name: 'DzMine', component: DzMine,meta:{requireAuth:true}},
    {path: '/DownUpdata', name: 'DownUpdata', component: DownUpdata},
    {path: '/ExitPage', name: 'ExitPage', component: ExitPage},


    // partOne
    {path: '/VsCar', name: 'VsCar', component: VsCar},
    {path: '/VsBeaut', name: 'VsBeaut', component: VsBeaut},
    {path: '/VsBeautKuan', name: 'VsBeautKuan', component: VsBeautKuan},
    {path: '/VsHome', name: 'VsHome', component: VsHome},
    {path: '/VsMyCar', name: 'VsMyCar', component: VsMyCar},
    {path: '/VsXuanCar', name: 'VsXuanCar', component: VsXuanCar},
    {path: '/VsDl', name: 'VsDl', component: VsDl},
    {path: '/VsReg', name: 'VsReg', component: VsReg},

    // partTwo
    {path: '/IndexFood', name: 'IndexFood', component:IndexFood},
    {path: '/IndexToGoShoppingCar', name: 'IndexToGoShoppingCar', component:IndexToGoShoppingCar,meta:{requireAuth:true}},
    {path: '/IndexMovie', component:IndexMovie, children:[
        {path: '/', component: IndexMovieListFilm},
        {path: '/IndexMovieListFilm', name:"IndexMovieListFilm", component: IndexMovieListFilm},
        {path: '/IndexMovieDemand', name:"IndexMovieDemand", component: IndexMovieDemand},
        {path: '/IndexMovieMarket', name:"IndexMovieMarket", component: IndexMovieMarket},
        {path: '/IndexMovieShow', name:"IndexMovieShow", component: IndexMovieShow}
        ]},
    {path: '/IndexToGo', component:IndexToGo, children:[
        {path: '/', component: ToGo},
        {path: '/ToGo', name:"ToGo", component: ToGo},
        {path: '/OrderForm', name:"OrderForm", component: OrderForm},
        {path: '/MySelf', name:"MySelf", component: MySelf}
      ]},

    // partThree
    {path: '/HairdRessing', name: 'HairdRessing', component: HairdRessing},
    {path:'/Parenting',name:'Parenting',component: Parenting},
    {path:'/TicketsSpots',name:'TicketsSpots',component: TicketsSpots},
    {path:'/SearchPage',name:'SearchPage',component: SearchPage},
    {path:'/ShopsDetails',name:'ShopsDetails',component: ShopsDetails},
    {path:'/ParentClass',name:'ParentClass',component: ParentClass},

    // partFour
    {path: '/Local', name: "Local", component:Local},
    {path: '/Train', name: "Train", component:Train},
    {path: '/Bawangcan', name: "Bawangcan", component:Bawangcan},
    {path: '/Comment', name: "Comment", component:Comment},

  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log('navigation-guards');
  console.log(to);
  console.log(from);
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (JSON.parse(localStorage.getItem('islogin'))) { //判断本地是否存在access_token
      next();
    } else {
      next({
        path: '/VsDl'
      })
    }
  } else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath === "/VsDl") {
    if (JSON.parse(localStorage.getItem('islogin'))) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
})
export default router;
