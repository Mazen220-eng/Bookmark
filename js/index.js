var nameInputs = document.getElementById("nameInput");
var urlInputs = document.getElementById("urlInput");
var duc = document.getElementById("demo");
var close = document.getElementById("exit");
var valueList = [];
if (localStorage.getItem("x") == null) {
  valueList = [];
} else {
  valueList = JSON.parse(localStorage.getItem("x"));
  display();
}

var nameInput = document.querySelector(".bom");
nameInput.addEventListener("input", function () {
  var regex = /^[a-z]{3,}$/i;
  test = nameInput.value;
  var nameInput2 = regex.test(test);
  if (nameInput2 == true) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
  }
});
var urlInputs = document.querySelector(".dom");
urlInputs.addEventListener("input", function () {
  var regex = /^https:[//]{2}[a-z]{3,}\.[a-z]{3,}\.(com|net)$/i;
  test = urlInputs.value;
  var urlInputs2 = regex.test(test);
  if (urlInputs2 == true) {
    urlInputs.classList.add("is-valid");
    urlInputs.classList.remove("is-invalid");
  } else {
    urlInputs.classList.remove("is-valid");
    urlInputs.classList.add("is-invalid");
  }
});

var y = document.querySelector(".btns");
y.addEventListener("click", function () {
  add();
});

function add() {
  if (
    nameInput.classList.contains("is-valid") &&
    urlInputs.classList.contains("is-valid")
  ) {
    x = {
      Name: nameInput.value,
      sur: urlInput.value,
    };
    valueList.push(x);
    localStorage.setItem("x", JSON.stringify(valueList));
    nameInput.classList.remove("is-valid");
    urlInputs.classList.remove("is-valid");

  } else {
    duc.classList.remove("d-none");
    duc.classList.add("d-flex");
  }
  clear();
display();
 
  
}
close.addEventListener("click", function () {
  duc.classList.add("d-none");
  duc.classList.remove("d-flex");
});

function display() {
  var cartona = "";

  for (var i = 1; i < valueList.length; i++) {
    cartona += `
          <tr>
            <td class="text-capitalize">${[i]}</td>
            <td id="book" class="text-capitalize">${valueList[i].Name}</td>
            <td class="text-capitalize"><button onclick="golink(this)" value="link.value" class="btn btn-visit"><i class="fa-regular fa-eye mx-1"></i>visit</button></td>
            <td class="text-capitalize"><button onclick="deletebook(${i})" class="btn btn-danger">Delete</button></td>
          </tr>
        `;
  }
  document.getElementById("my table").innerHTML = cartona;
}
function deletebook(deleteindex) {
  valueList.splice(deleteindex, 1);
  display();
  localStorage.setItem("x", JSON.stringify(valueList));
}

function golink(link){
  window.open(link.value)

}

function clear() {
  nameInput.value = null;
  urlInputs.value = null;
}
