
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path:'/Pagamento', component:() => import('pages/Pagamento.vue')},
      { path:'/TipoPagamento', component:() => import('pages/TipoPagamento.vue')},
      { path:'/SenhaPagamento', component:() => import('pages/SenhaPagamento.vue')},
      { path:'/CodigoDeBarras', component:() => import('pages/CodigoDeBarras.vue')},
      { path: '/SenhaCodigoDeBarras', component:() => import('pages/SenhaCodigoDeBarras.vue')},
      { path: '/OperacaoCancelada', component:() => import('pages/OperacaoCancelada.vue')},
      { path: '/ConfirmarPagamento', component:() => import('pages/ConfirmarPagamento.vue')},
      { path: '/InserirCartao', component:() => import('pages/InserirCartao.vue')},
      { path: '/AguardandoPagamento', component:() => import('pages/AguardandoPagamento.vue')},
      { path: '/PagamentoRealizado', component:() => import('pages/PagamentoRealizado.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
