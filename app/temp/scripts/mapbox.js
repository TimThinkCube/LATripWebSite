var days = ["day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11"];

function openMapbox(obj) {
  var mapbox = obj.getAttribute("data-map-box");
  for(i in days){
      document.getElementById(days[i]).style.display = "none";
  }
  if (mapbox == "day1") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day2") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day3") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day4") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day5") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day6") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day7") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day8") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day9") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day10") {
    document.getElementById(mapbox).style.display = "block";
  } else if (mapbox == "day11") {
  }
}
