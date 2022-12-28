import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },

    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiredAuth: true },
    },
    {
      path: "/requests",
      component: RequestReceived,
      meta: { requiredAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiredUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// Global route
router.beforeEach((to, _, next) => {
  if (to.meta.requiredAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiredUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
