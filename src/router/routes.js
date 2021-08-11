
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      //PAGAMENTO
      { path:'/Pagamento', component:() => import('src/pages/pagamento/Pagamento.vue')},
      { path:'/TipoPagamento', component:() => import('src/pages/pagamento/TipoPagamento.vue')},
      { path:'/SenhaPagamento', component:() => import('src/pages/pagamento/SenhaPagamento.vue')},
      { path:'/CodigoDeBarras', component:() => import('src/pages/pagamento/CodigoDeBarras.vue')},
      { path: '/SenhaCodigoDeBarras', component:() => import('src/pages/pagamento/SenhaCodigoDeBarras.vue')},
      { path: '/OperacaoCancelada', component:() => import('src/pages/pagamento/OperacaoCancelada.vue')},
      { path: '/ConfirmarPagamento', component:() => import('src/pages/pagamento/ConfirmarPagamento.vue')},
      { path: '/InserirCartao', component:() => import('src/pages/pagamento/InserirCartao.vue')},
      { path: '/AguardandoPagamento', component:() => import('src/pages/pagamento/AguardandoPagamento.vue')},
      { path: '/PagamentoRealizado', component:() => import('src/pages/pagamento/PagamentoRealizado.vue')},
      //SALDO
      { path: '/saldo', component:()=> import('src/pages/saldo/Saldo.vue')},
      { path: '/saldoAtual', component:()=> import('src/pages/saldo/SaldoAtual.vue')},
      { path: '/FinalizarOperacao', component: ()=> import('src/pages/saldo/OperacaoFinalizada.vue')},
      { path: '/operacaoCancelada', component:()=> import('src/pages/saldo/OperacaoCancelada.vue')},
      //EXTRATO
      { path: '/Extrato', component:()=> import('src/pages/extrato/Extrato.vue')},
      //TRANSFERENCIA
      { path: '/Transferencia', component:()=> import('src/pages/transferencia/Transferencia.vue')}
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
