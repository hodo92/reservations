var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var claimReservation = function () {
  //document.getElementById(reservation).style.visibility = "visible";
  var getName = document.getElementById("isReserved").value;
  var name = getName[0].toUpperCase() + getName.slice(1).toLowerCase();

  if(reservations[name]) {
    if(reservations[name]["claimed"]) {
      document.getElementById("newReservation").innerHTML = name + ', your reservation is already claimed';
    } else {
      document.getElementById("newReservation").innerHTML = 'Welcome ' + name;
    }
  } else {
    reservations[name] = { claimed: true };
    document.getElementById("newReservation").innerHTML = name + ' you just got a new reservation';
  }
}



 