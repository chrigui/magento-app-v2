function Service($rootScope, $http, Config) {

    var api = {
        website: Config.baseUrl + '/restconnect/store/websiteinfo',
        store: Config.baseUrl + '/restconnect/store/storeinfo',
        user: Config.baseUrl + '/restconnect/customer/status',
				forgotpwd: Config.baseUrl + '/restconnect/customer/forgotpwd',
        menus: Config.baseUrl + '/restconnect/?cmd=menu',
        products: Config.baseUrl + '/restconnect/',
        login: Config.baseUrl + '/restconnect/customer/login',
        logout: Config.baseUrl + '/customer/account/logout',
        register: Config.baseUrl + '/restconnect/customer/register',
        search: Config.baseUrl + '/restconnect/search',
        productDetail: Config.baseUrl + '/restconnect/products/getproductdetail',
        productImg: Config.baseUrl + '/restconnect/products/getPicLists',
        productOption: Config.baseUrl + '/restconnect/products/getcustomoption',
        cartGetQty: Config.baseUrl + '/restconnect/cart/getQty',	//直接post到这个接口就返回参数
        cartAdd: Config.baseUrl + '/restconnect/cart/add/'	//直接post到这个接口就返回参数
        /*
        product_detail: defines.baseWeb + '/catalog/product/view/id/%s', //这个是直接详情页面
        product_rest: defines.baseApi + '/restconnect/products/getproductdetail/productid/%s',
        product_img: defines.baseSite + '/api/rest/products/%s/images/',
        product_attr: defines.baseApi + '/restconnect/products/getcustomeattr/productid/%s', //开发中
        product_option: defines.baseApi + '/restconnect/products/getcustomoption/productid/%s',
        cart_add: defines.baseApi + '/restconnect/cart/add/',	//直接post到这个接口就返回参数
        cart_get_qty: defines.baseApi + '/restconnect/cart/getQty'	//直接post到这个接口就返回参数
        */
    };

    $rootScope.service = {
        get: function (key, params, success, error) {
            if (typeof params === 'function') {
                error = success;
                success = params;
                params = null;
            }

            var url = api[key];

            $http.get(url, {
                params: params
            }).then(function (res) {
                success(res.data);
            }, error);
        },
        post: function (key, params, success, error) {
            if (typeof params === 'function') {
                callback = params;
                params = null;
            }

            var url = api[key];

            $.post(url, {
                params: params
            }).then(function (res) {
                success(res.data);
            }, error);
        }
    }
}
