let cacheName = 'v2';

let cacheFiles = [
    '/',
    'restaurant.html',
    'index.html',
    'css/styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg'


self.addEventListener('install', function ( e) {
      e.waitUntil(             caches.open(cacheName).then(fun ction (cach
            return cache.addAll(c        File    );
        })
    );
});

self.addEventListener( 'activa    e', function (e) {
    console.log('Activating n    w service work        );

    e.waitUntil(
         caches.keys            en(function (cacheNam
            return Promi se.all(
                            cacheNames.filter(function (cache) {
                              return cacheNa me.star tsW                    ache !== cacheName;
                         ap(f            (cac         {
                       return caches.delete(cache);
                })
              );
        })
    );
});

//Cal    Fetch event
sel        dEventListener('fe            (e) => {
    co                g('Service worker: Fetching!');                respondW                       fetch(e.request                        .then(res => {                             const resClone = res.clone()                                         s
                          .open(cacheName)
                    .then(cache => {
                         cache.put(e.request, resClone);
                    });
                return res;
            }).catch(error => caches.match(e.request).then(res => res))
    );
});