        // $.ajax({
        //     url: "/api/getWeather",
        //     data: {
        //       zipcode: 97201
        //     },
        //     success: function( result ) {
        //       $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        //     }
        //   });

// $('#moon').on("click", function() {

// })

/* Example in Node.js ES6 using request-promise, concepts should translate to your language of choice */

// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=50c21e04-ba24-4f94-93a5-7d6ee709d647&start=1&limit=10',
//   qs: {
//     start: 1,
//     limit: 10,
//     convert: 'USD'
//   },
//   // headers: {
//   //   'X-CMC_PRO_API_KEY': '50c21e04-ba24-4f94-93a5-7d6ee709d647'
//   // },
//   json: true,
//   gzip: true,
//   //  success: function(response) {
//   //      var b = response.data;
//   //           for(i=0; i<b.length;i++) {

//   //           }
//   //          $("#crypto-list" ).html( "<strong>" + b[i] + "</strong>" );
//   //       }
// };


// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });

  // document.addEventListener('DOMContentLoaded',function(){
  //   document.getElementById('getMessage').onclick=function(){
  //     req=new XMLHttpRequest();
  //     req.open("GET",'/json/cats.json',true);
  //     req.send();
  //     req.onload=function(){
  //       json=JSON.parse(req.responseText);
  //       var html = "";
  //       json.forEach(function(val) {
  //         html += "<div class = 'cat'>";
  //         // Add your code below this line
  //         html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          
  //         // Add your code above this line
  //         html += "</div><br>";
  //       });
  //       document.getElementsByClassName('message')[0].innerHTML=html;
  //     };
  //    };
  // });

function changeBGColor(color) {
  let colorprop = document.getElementById(color);
  colorprop.className = 'toggled' == colorprop.className ? '' : 'toggled';
}

