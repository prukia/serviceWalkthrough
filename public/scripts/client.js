app = angular.module('myApp', []);

app.controller('GifController', function (GifGetter){
  console.log("connected?");

var vm =this;

GifGetter.randomGif().then(function (res){
  console.log("from the controller", res);

  vm.randomGifUrl = res.data.image_url;
});

});
