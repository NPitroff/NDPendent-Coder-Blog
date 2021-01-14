let idleTime = 0;

$(document).ready(function () {
  //Increment the "idle time" counter for every minute
  let idleCountDown = setInterval(timerIncrement, 60000);

  //Reset the counter on mouse move or keyboard event
  $(this).mousemove(function (x) {
    idleTime = 0;
  });
  $(this).keypress(function (x) {
    idleTime = 0;
  });
});

function timerIncrement() {
  idleTime++;
  if (idleTime > 1) {
    //20 mins
    logout();
  }
}
//logout RESTful api call
async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
