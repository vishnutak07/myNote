let i = Object.keys(localStorage);
i.forEach(function (element) {
  let div = document.getElementById("con");
  let newAtr = document.createElement("div");
  newAtr.id = "firstDiv";
  newAtr.className = "box";
  newAtr.innerHTML = `<h1 class="heading">${element}</h1><div class="text"><p>${localStorage.getItem(
    element
  )}</p></div>`;
  console.log(element + ":" + localStorage.getItem(element));
  div.appendChild(newAtr);
});

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function (event) {
  let form = document.getElementById("form1");
  form.style.display = "flex";
  event.preventDefault();
});

let add = document.getElementById("add");
add.addEventListener("click", function (event) {
  let heading = document.getElementById("txt").value;
  let text = document.getElementById("atxt").value;
  let div = document.getElementById("con");

  window.localStorage.setItem(heading, text);
  if (heading !== "") {
    if (text !== "") {
      let newAtr = document.createElement("div");
      newAtr.className = "box";
      newAtr.innerHTML = `<h1 class="heading">${heading}</h1><div class="text"><p>${text}</p></div>`;
      div.appendChild(newAtr);
      heading = document.getElementById("txt");
      heading.value = "";

      text = document.getElementById("atxt");
      text.value = "";
      let form = document.getElementById("form1");
      form.style.display = "none";
    } else {
      alert("Enter Any Text");
    }
  } else {
    alert("Enter Heading");
  }
  event.preventDefault();
});

let camcel = document.getElementById("cencel");
camcel.addEventListener("click", function (elm) {
  let form = document.getElementById("form1");
  heading = document.getElementById("txt");
      heading.value = "";

      text = document.getElementById("atxt");
      text.value = "";
  form.style.display = "none";
  elm.preventDefault();
});
