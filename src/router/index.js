import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import MovieDetail from "@/views/MovieDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/movie-:id",
    name: "MovieDetail",
    component: MovieDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
