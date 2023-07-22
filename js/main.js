var bookName = document.getElementById("name");
var bookUrl = document.getElementById("url");
var btn = document.getElementById("btn");
// var alrt = document.getElementsByTagName("h5");
if (localStorage.getItem("books") == null) {
  var bookList = [];
} else {
  var bookList = JSON.parse(localStorage.getItem("books"));
  display();
}
btn.onclick = function () {
  console.log("yes");
  if (validation() == true) {
    books();
  } else {
    alert("enter a valid values");
  }
};
// add
function books() {
  var book = {
    bName: bookName.value,
    bUrl: bookUrl.value,
  };

  bookList.push(book);
  console.log(bookList);
  localStorage.setItem("books", JSON.stringify(bookList));
  display();
}
function display() {
  newBook = ``;
  for (var i = 0; i < bookList.length; i++) {
    newBook += `
    <tr>
    <td>${i + 1}</td>
    <td>${bookList[i].bName}</td>
    <td>
      
        <a href="${bookList[i].bUrl}"><button class="btn btn-success">
        <i class="fa-solid fa-eye pe-2"></i>
        Visit
        </button></a>
   
    </td>
    <td>
      <button class="btn btn-danger" onclick="delte(${i})">
        <i class="fa-solid fa-trash-can"></i>
        delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = newBook;
}

// delete
function delte(index) {
  bookList.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(bookList));
  display();
}

// validation
function validation() {
  var nameRegex = /^[A-Z][a-z]{3,9}$/;
  var urlRegex =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

  console.log(bookName.value);
  console.log(bookUrl.value);
  console.log(nameRegex.test(bookName.value));
  if (nameRegex.test(bookName.value) == true) {
    if (urlRegex.test(bookUrl.value) == true) {
      console.log("true");
      return true;
    }
  } else {
    return false;
  }
}
