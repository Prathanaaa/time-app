let bangkokElement = document.querySelector("#bangkok");
let bangkokDateElement = bangkokElement.querySelector(".date");
let bangkokTimeElement = bangkokElement.querySelector(".time");
let bangkokTime = moment();

bangkokDateElement.innerHTML = bangkokTime.format("dddd Do MMMM");
bangkokTimeElement.innerHTML = bangkokTime.format(
  "h:mm:ss"[(<small>A</small>)]
);
