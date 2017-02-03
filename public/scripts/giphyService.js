app.service('GifGetter', function ($http){

  var publicAPIkey = "dc6zaTOxFJmzC";
  var giphyUrl = "http://api.giphy.com/v1/gifs/";

this.randomGif = function (){
  return $http({
    type: 'GET',
    url: giphyUrl + 'random?api_key=' + publicAPIkey
  }).then(function(response){
    console.log(response);
    return response.data;
  }).catch(function(error){
    console.log(error);
  })

}








});
