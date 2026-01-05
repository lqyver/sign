// GitHub Pages SPA 路由处理
(function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.pathname) {
        history.replaceState(null, null, redirect);
    }
})();