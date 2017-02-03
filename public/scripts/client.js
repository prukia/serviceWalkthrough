var app = angular.module('myApp', []);


app.controller('GifController', function (GifGetter){
  console.log("connected?");

var vm =this;

vm.searchQuery = '';

vm.randomGif = function (){
  GifGetter.randomGif().then(function (res){
    console.log("from the controller", res);
//set url for tag:
    vm.randomGifUrl = res.data.image_url;

});
}
vm.searchGif= function (searchQuery){
  //searching gif
  GifGetter.searchGif(vm.searchQuery).then(function (res){
    console.log("searchGif", res);
    //store array of gifs in searchGifUrl
    vm.searchGifUrl = res.data;

  })
}

});
