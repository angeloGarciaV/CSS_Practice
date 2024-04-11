const idList = ["Frog", "Grassy", "Flowers", "Seaside", "Forest"];

for (let i = 0; i < idList.length; i++) {
  document.getElementById(`${idList[i]}Pic`).onmouseover = function () {
    document.getElementById(`${idList[i]}`).style.display = "block";
  };
  document.getElementById(`${idList[i]}Pic`).onmouseout = function () {
    document.getElementById(`${idList[i]}`).style.display = "none";
  };
}
