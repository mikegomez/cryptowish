$('#newrow').click(runtask);

function runtask() {
    $("#myTable > tbody").append("<tr><td>" + '<select id="dropdown2"><option value="BTC" selected>Bitcoin</option><option value="ETH">Ethereum</option><option value="XRP">XRP</option><option value="LTC">Litecoin</option><option value="EOS">EOS</option><option value="BCH">Bitcoin Cash</option><option value="XLM">Stellar</option><option value="ADA">Cardano</option><option value="TRX">Tron</option></select>'  + "</td><td>" + '<input type="date" id="date1" value="" name="dateBought" />' + "</td><td>" + '<input type="text" value="" name="Quantity bought"  class="number1"/>' + "</td><td>" + '<input type="text"  class="number2" name="Price paid" value="" />' + "</td><td>" + '<input type="text" value=""  name="Total Cost" class="number3"/>' + "</td><td><button type=\"submit\" id=\"save-btn\">" + 'Save' + "</button></td>" + "</tr>");
}


 $("#save-btn").on("click", function(event) {
      event.preventDefault();
      var newPick = {
        coinz: $("#dropdown1").val().trim(),
        dates: $("#date1").val().trim(),
        name: $(".number1").val().trim(),
        role: $(".number2").val().trim(),
        // date: moment().format("YYYY-MM-DD HH:mm:ss"),
        age: $(".number3").val().trim()
       
      };
      console.log(newPick);

$.post("/api", newPick)

  .then(function() {
    var row = $("<table><tr>");
      // row.addClass("chirp");

      row.append("<td class='newRowTable'>" + newPick.coinz + "</td><td class='newRowTable'>" + newPick.dates + "</td><td class='newRowTable'>" + newPick.name + "</td><td class='newRowTable'>" + newPick.role + "</td><td class='newRowTable'>" + newPick.age + "</td><td class='newRowTable'>" + newPick.profit + "</td></table>");
      // row.append("<p>"  "</p>");
      // row.append("<p>" +  + "</p>");
      // row.append("<p>At " + moment(newPick.date).format("h:mma on dddd") + "</p>");

      $("#resultsDiv").append(row);

    });

    $("#dropdown1").val("");
    $("#date1").val("");
    $(".number1").val("");
    $(".number2").val("");
    $(".number3").val("");
  
    });
      // Question: What does this code do??
    //   $.post("/api", newPick)
    //     .then(function(data) {
    //       console.log("index.html", data);
    //       alert("Adding character...");
    //     });
    // });
//+ '<span class="currencyinput">$<input type="text" value="" name="Profit/Loss"  class="number4" /></span>'
// trainData.on("child_added", function(childSnapshot, prevChildKey){
//   $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + "Every " + frequency + " minutes" + "</td><td>" + nextTrainConverted + "</td><td>" + tMinutesTillTrain + "</td></tr>");

// });

// function addnewrow() {
//   let table =  document.getElementById('myTable');
//   let row = table.insertRow(0);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   let cell3 = row.insertCell(2);
//   let cell4 = row.insertCell(3);
//   let cell5 = row.insertCell(4);

// }
// $(document).ready(function() {
// var queryURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=Y50c21e04-ba24-4f94-93a5-7d6ee709d647";

// $.ajax({
// url: queryURL,
// method: "GET",
// })
// // We store all of the retrieved data inside of an object called "response"
// .then(function(response) {

// // Log the queryURL
// console.log(queryURL);

// // Log the resulting object
// console.log(response);
// $("#crypto-list").html("<h1>" + response[0].id + "</h1>");
// $("#crypto-list1").html("<h1>" + response[2].id + "</h1>");
// console.log("Wind Speed: " + response[1].id);
// }); 


      $(document).ready(function() {
  // $.getJSON(url, callback);
//   $.getJSON('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=3&page=1', function(json) {
//     tableGenerator('#tableName', json);
//   });
// });

//data = JSON.parse('{"event1":{"title":"My birthday","start":"12\/27\/2011 10:20 ","end":"12\/27\/2011 00:00 "},"event2":{"title":"My birthday again","start":"12\/27\/2011 10:20 ","end":"12\/27\/2011 00:00 "}}')
var ajaxResp = $.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5&page=1",
  dataType: "json"
  })
.done(function(response) {
  $.each(response, function(i, item) {
        $('<tr>').append(
            $('<td>').text(item.name),
            $('<tr>'),
            $('<td>').text(item.current_price),
            $('<tr>'),
            $('<td>').text(item.market_cap_rank)
        ).appendTo('#apicontainer');
  console.log("success");
  // console.log(response);
  // response.forEach(function(data) { 
  // var lat = data.id;  
  // var lng = newsObject.name;
  // var imgs = newsObject.image;
  // var lop = newsObject.current_price;
  // var lap = newsObject.market_cap_rank;

//document.getElementById("apicontainer").innerHTML = lng + ", " + imgs + ", " + lop + ", " + lap;

  }); 
  

//function tableGenerator(selector, data) { // data is an array
//    var keys = [];// Get the keys to make the header
//   // // Add header
//   var head = '<thead><tr>';
//    keys.forEach(function(key) {
//     head += '<th>'+key+'</th>';
//   });
//   $(selector).append(head+'</tr></thead>');
//   var body = '<tbody>';
//   data.forEach(function(obj) { // For each row
//     var row = '<tr>';
//     keys.forEach(function(key) { // For each column
//       row += '<td>';
//       if (obj.hasOwnProperty(key)) { // If the obj doesnt has a certain key, add a blank space.
//         row += obj[key];
//       // row += "<img src = '" + key.imageLink + "' " + "alt='" + key.altText + "'></td> ";
//       }
//        row += '</td>';

//     });
//     body += row+'<tr>';
      
//   })
//   $(selector).append(body+'</tbody>');

  



// 
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log('complete');
});

//$.getJSON('', function(json) {

//var txt = json;
//var txt = '[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":3538.09814293831,"market_cap":61904059836.1851,"market_cap_rank":1,"total_volume":2813894537.69397,"high_24h":3691.44953776744,"low_24h":3478.65899978562,"price_change_24h":-147.29536189714,"price_change_percentage_24h":-3.99673363791083,"market_cap_change_24h":-2557667670.23369,"market_cap_change_percentage_24h":-3.96773057312032,"circulating_supply":"17492537.0","total_supply":21000000,"ath":19665.3949272416,"ath_change_percentage":-81.9842931309472,"ath_date":"2017-12-16T00:00:00.000Z","roi":null,"last_updated":"2019-01-21T02:50:49.004Z"},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/XRP.png?1547033685","current_price":0.316557979953131,"market_cap":12999421329.224,"market_cap_rank":2,"total_volume":391625598.732056,"high_24h":0.328060732010947,"low_24h":0.314203626752192,"price_change_24h":-0.0113004631258068,"price_change_percentage_24h":-3.44675068291167,"market_cap_change_24h":-469350170.369581,"market_cap_change_percentage_24h":-3.48472888105454,"circulating_supply":"41040405095.0","total_supply":100000000000,"ath":3.39845,"ath_change_percentage":-90.6754052238184,"ath_date":"2018-01-07T00:00:00.000Z","roi":null,"last_updated":"2019-01-21T02:51:41.945Z"},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1547034048","current_price":117.224706802741,"market_cap":12252760390.8277,"market_cap_rank":3,"total_volume":1923065073.54984,"high_24h":123.133133001259,"low_24h":116.652255553394,"price_change_24h":-5.51841617373627,"price_change_percentage_24h":-4.49590660553246,"market_cap_change_24h":-572517780.771149,"market_cap_change_percentage_24h":-4.46397944053153,"circulating_supply":"104485184.0928","total_supply":null,"ath":1448.1800861342,"ath_change_percentage":-91.8975752717559,"ath_date":"2018-01-13T00:00:00.000Z","roi":{"times":43.283465221318984,"currency":"btc","percentage":4328.346522131898},"last_updated":"2019-01-21T02:51:44.518Z"}]'
// var obj = JSON.parse(txt);
// document.getElementById("apicontainer").innerHTML = obj[0].id + ", " + obj[0].name + ", " + obj[0].current_price + ", " + obj[0].market_cap_rank;

// });


// arr = []
// for(var event in data){
//     var dataCopy = data[event]
//     for(key in dataCopy){
//         if(key == "start" || key == "end"){
//             // needs more specific method to manipulate date to your needs
//             dataCopy[key] = new Date(dataCopy[key])
//         }
//     }
//     arr.push(dataCopy)
// }

// alert( JSON.stringify(arr) )

// function tableGenerator(selector, data) { // data is an array
//   var keys = Object.keys(Object.assign({}, ...data));// Get the keys to make the header
//   // Add header
//   var head = '<thead><tr>';
//   keys.forEach(function(key) {
//     head += '<th>'+key+'</th>';
//   });
//   $(selector).append(head+'</tr></thead>');
//   var body = '<tbody>';
//   data.forEach(function(obj) { // For each row
//     var row = '<tr>';
//     keys.forEach(function(key) { // For each column
//       row += '<td>';
//       if (obj.hasOwnProperty(key)) { // If the obj doesnt has a certain key, add a blank space.
//         row += obj[key];
//       // row += "<img src = '" + key.imageLink + "' " + "alt='" + key.altText + "'></td> ";
//       }
//        row += '</td>';

//     });
//     body += row+'<tr>';
      
//   })
//   $(selector).append(body+'</tbody>');

//   }

// coin input data calculations
$(".number1, .number2").bind('change', function(){
      $(".number3").val($(".number1").val() * $(".number2").val());
});

$(".number5, .number6").bind('change', function(){
      $(".number7").val($(".number5").val() * $(".number6").val());
});

// add new row functionality
// document.getElementById('getMessage').onclick=function(){
//             req=new XMLHttpRequest();
//             req.open("GET",'/json/cats.json',true);
//             req.send();
//             req.onload=function(){
//               json=JSON.parse(req.responseText);
//               var html = "";
//               json.forEach(function(val) {
//                 html += "<div class = 'cat'>";
//                 // Add your code below this line
//                 html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
                
//                 // Add your code above this line
//                 html += "</div><br>";
//               });
//               document.getElementsByClassName('message')[0].innerHTML=html;
//             }; 

})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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

