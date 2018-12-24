routes = [
    {
        path: '/',
        url: './index.html',
    },
    {
        path: '/catalog/',
        componentUrl: './pages/catalog.html',
    },
    {
        path: '/truck/:id/',
        componentUrl: './pages/truck.html',
        on: {
            pageInit: function (e, page) {
                $$('.save-truck-data').on('click', function(){
                    let formData = app.form.convertToData('#truckForm');
                    /*console.log(JSON.stringify(formData));
                    console.log(page.route.params.id);*/
                    app.request({
                        url: 'http://rsprm.ru/test/truck/'.concat(page.route.params.id),
                        method: 'PATCH',
                        data: formData,
                        crossDomain: true

                    });
                });
            }
        }
    }
];