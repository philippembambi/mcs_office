import AddArticle from './Pages/Articles/Add.vue';
import Index from './Pages/Index.vue';
import Details from './Pages/Articles/Details.vue';
import Edit from './Pages/Articles/Edit.vue';
import AllArticles from './Pages/Articles/All.vue'
import { Charts } from "./Pages/Articles/Charts.vue";
import PageNotFound from './Pages/PageNotFound.vue';
import SellArticle from './Pages/Articles/Sell.vue';

export const routes = [
  { path: '', component: Index },
  { path: '/index', component: Index },
  { path: '/Article/Ajouter', component: AddArticle },
  { path: '/Article/All', component: AllArticles },
  
  { path: '/Article/Chart', component: Charts },
  { path: '/Article/Details/:id', component: Details, name: "details" },
  { path: '/Article/Sell/:id', component: SellArticle, name: "sell" },
  { path: '/Article/Editer/:id', component: Edit, name: "editer" },
  { path: '/error/404', component: PageNotFound, name: "error"},
  { path: '*', redirect: '/error/404'}
];
