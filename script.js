async function api() {
    var pincode = document.getElementById("pincode").value;
    var url = `https://api.postalpincode.in/pincode/${pincode}`;
    var res = await fetch(url);
    var jsonobj = await res.json();

    var p = document.createElement("p");
    p.innerHTML += `<br>City under the Pincode<br><br>`;
    div.append(p);

    for (var i = 0; i < jsonobj[0].PostOffice.length; i++) {
        div.innerHTML += `${jsonobj[0].PostOffice[i].Name}<br>`;
    }
}

var container = document.createElement("container");
container.classList.add("container-fluid");

var div = document.createElement("div");


var heading = document.createElement("h2");
heading.innerHTML = "CITY PINCODES";
heading.style.margin = "25px";

var box = document.createElement("input");
box.setAttribute("type", "input");
box.setAttribute("id", "pincode");
box.setAttribute("placeholder", "Enter Pincode");

var button = document.createElement("button");
button.classList.add("btn", "btn-dark-lg");
button.innerHTML = "Click here";
button.addEventListener("click", api);

div.append(heading, box, button);
container.appendChild(div);
document.body.append(container);