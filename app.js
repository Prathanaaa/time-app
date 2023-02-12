function displayDate(event) {
  let city = event.target.value;
  if (city == "paris") {
    alert(
      moment()
        .tz("Europe/Paris")
        .format("[It is] dddd, MMMM D, YYYY LT [in Europe/Paris]")
    );
  }
  if (city == "tokyo") {
    alert(
      moment()
        .tz("Asia/Tokyo")
        .format("[It is] dddd, MMMM D, YYYY LT [in Asia/Tokyo]")
    );
  }
  if (city == "sydney") {
    alert(
      moment()
        .tz("Australia/Sydney")
        .format("[It is] dddd, MMMM D, YYYY LT [in Australia/Sydney]")
    );
  }
}

let citySelect = document.querySelector("#time");
citySelect.addEventListener("change", displayDate);
