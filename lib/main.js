   // 1st step is to get the api url
let url = "https://pokeapi.co/api/v2/pokemon/chimchar/"
   // then fetch (url)
fetch (url)
.then((response) => response.json()) // the arrow function is taking the perameter from response
.then(function(data){
    console.log(data);
})
.catch(function(error){

})