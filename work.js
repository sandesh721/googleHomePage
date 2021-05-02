function like(colors) { 
  colors.classList.toggle("red")
 }
 function dissapper() {
   console.log("clcickkd");
   let values = document.querySelector(".inputSearch").value;

   document.querySelector("#mike").style.display = "none";
   document.querySelector("#lens").style.display = "none";
   document.querySelector("#src").classList.add("toside");
 }
window.onload = function () {
  
  weather("byndoor");
  //user image
  document.querySelector(".userImg").addEventListener("click", userImg);
  function userImg() {
    window.location =
      "https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1";
  }
  //google lens
  document.querySelector("#lens").addEventListener("click", googlelens);
  function googlelens() {
    window.location = "https://lens.google.com/";
  }
  //search in google

  document
    .querySelector(".ints")
    .addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        let values = document.querySelector(".inputSearch").value;
        let vam = values.split(" ").join("+");
        window.location =
          "https://www.google.com/search?q=" +
          vam +
          "&oq=java&aqs=chrome.2.69i57j0i20i263i433l2j0i433j69i60j69i65j69i60l2.3184j0j7&sourceid=chrome&ie=UTF-8";
        document.querySelector(".inputSearch").value="";
      }
    });

  
    //coping
    
  document.querySelectorAll(".fa-share-alt").forEach(item=>{
      item.addEventListener("click", function () {
      let link = document.createElement("input");
      copy = window.location.href;
      document.body.appendChild(link);
      link.value = copy;
      link.select();
      document.execCommand("copy");
      document.body.removeChild(link);
      alert("link copied");
    });
  });
  //adding cards
  img=1;
  document.querySelector("#submit").addEventListener("click", function () {
    (Element.prototype.appendBefore = function (card) {
      card.parentNode.insertBefore(this, card);
    }),
      false;
    let divs = document.createElement("div");
    let heading = document.querySelector("#hed").value;
    let discription = document.querySelector('#last').value;
    
    if(img<4){
      img = img+1;
    }
    else{
      img=1;
    }
    if(heading.length<30 && discription.length<30){
      alert('Its tooo short!!')
    }
    else{
    divs.innerHTML = `<div class="card">
                <img src="./images/${img}.jpg" alt="laptop">
                 <div class="inside">
                <h3>${heading}</h3>
                <p>${discription}</p>
                <span id="heart"><i class="fas fa-heart" id="her" onclick="like(this)"></i></span>
                <span id="share"><i class="fas fa-share-alt"></i></span>
                <span id="dot"><i class="fas fa-ellipsis-v"></i></span>
                </div>
            </div>`;

    // let infoClass = divs.appendBefore(document.querySelector(".addCard"));

        document.querySelector('.info').appendChild(divs)
    }
   
    document.querySelector("#hed").value=" ";
    document.querySelector("#last").value=" ";
  });


function weather(cityID) {
  // let cityID='Byndoor';
  let key = "47855a3b3b91fe2079b27136cab019cb";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityID +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var max = Math.round(parseFloat(d.main.temp_max) - 273.15);
  var min = Math.round(parseFloat(d.main.temp_min) - 273.15);

  let weather = document.querySelector(".partly").innerHTML = d.weather[0].description;
  // if(d.coord.dt>d.sys.sunrise && d.coord.dt<d.sys.sunset){
  //   document.querySelector(".fa-cloud-sun").innerHTML =
  //     '<i class="fas fa-cloud-moon"></i>';
  // }
  document.querySelector(".place").innerHTML = celcius + "&deg; in Byndoor";
  document.querySelector(".deg").innerHTML = max + "&deg;/" + min + "&deg";
}
}
