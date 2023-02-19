function registerSchool() {
  let sName = document.getElementById("sName");
  let sEmail = document.getElementById("sEmail");
  let sPhone = document.getElementById("sPhone");
  let sState = document.getElementById("sState");
  let sAddress = document.getElementById("sAddress");
  let inputs = document.querySelectorAll(".inputs");
  let schoolData = localStorage.getItem("SchoolData");
  let schoolArr = [];
  let check = false;
  inputs.forEach((input) => {
    if (input.value == "" || input.value == null) {
      input.style.borderColor = "red";
      check = true;
    } else {
      input.style.borderColor = "#dedede";
    }
  });
  if (check == false) {
    if (schoolData) {
      schoolArr = JSON.parse(schoolData);
    }
    let schoolObj = {
      sName: sName.value,
      sEmail: sEmail.value,
      sPhone: sPhone.value,
      sState: sState.value,
      sAddress: sAddress.value,
    };
    schoolArr.push(schoolObj);
    localStorage.setItem("SchoolData", JSON.stringify(schoolArr));
    alert("School Successfully Registered");
    sName.value = "";
    sEmail.value = "";
    sPhone.value = "";
    sAddress.value = "";
    sState.value = "";
  }
}

document.getElementById("btn").onclick = function (e) {
  e.preventDefault();
  registerSchool();
};
