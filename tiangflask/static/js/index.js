w2utils.locale('/static/bower_components/w2ui/locale/es-mx.json');
// # /ofertas/mias
// # /overtas/inbox
// # /ofertas/mercado


// # /pedidos/mios
// # /pedidos/inbox
// # /pedidos/mercado


var unidades = ['kg', 'bolsa', 'ramo', 'litro', 'domo', 'manojo', 'pieza'];

// initialization
$(function () {
  $('#main').w2layout(base_layout);
  w2ui['base_layout'].content('left', $().w2sidebar(sidebar));
  w2ui['base_layout'].content('main', $().w2grid(o_mias));
//  w2ui.layout.content('main', $().w2grid(o_mias));
    
//  w2ui.o_mias.autoLoad = false;
//  w2ui.o_mias.skip(0);
});

