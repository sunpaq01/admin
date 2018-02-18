ecui.esr.addRoute('woo', {
	url: 'woo/index.html',
    main: 'main_support',
    view: jingoal.loadIframe,
    onbeforerender: function (context) { 
    	 context.url = 'woo/index.html';
    }
});
 