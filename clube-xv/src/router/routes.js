const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      // ##### LINHA ADICIONADA #####
      // Esta é a rota para a nossa nova página de campeonato
      {
        path: "/campeonato", // O endereço (ex: localhost:9000/campeonato)
        component: () => import("pages/CampeonatoPage.vue"), // O arquivo que vamos criar
      },
      // ##### FIM DA LINHA ADICIONADA #####
    ],
  },

  // Sempre deixe esta rota por último
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
