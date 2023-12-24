//DEFINE ROUTING RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import QuizView from "../views/QuizView.vue";
import QuestionView from "../views/QuestionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView,
      children: [
        {
          path: "question",
          component: QuestionView,
        },
      ],
    },
  ],
});

export default router;
