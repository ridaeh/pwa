if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('https://cdn.jsdelivr.net/gh/ridaeh/pwa@master/pwa.js')
      .then(
        function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful');
        },
        function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        }
      );
  });
}
