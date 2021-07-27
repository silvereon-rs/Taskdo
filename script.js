// Caraousel
var start = 1,
  end = 6;
posts(0)

function posts(i) {
  console.log("object")
  var PostList = document.getElementsByClassName("post");
  if (start === 1 && i === -1) return;
  if (end === PostList.length && i === 1) return;
  else {
    start += i;
    end += i;
  }
  for (let i = 0; i < PostList.length; i++) {
    if (i + 1 !== start && i + 1 !== start + 1 && i + 1 !== start + 2 && i + 1 !== start + 3 && i + 1 !== start + 4 && i + 1 !== start + 5 && i + 1 !== end)
      document.getElementById(i + 1).setAttribute("style", "display: none;")
    else {
      document.getElementById(i + 1).setAttribute("style", "display: inline-block;")
    }
  }
}



// Dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close Dropdown
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
