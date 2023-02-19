function showUser() {
  let isOnline = sessionStorage.getItem("isOnline");
  if (isOnline) {
    let student = JSON.parse(isOnline);
    let output = document.getElementById("studentDetail");
    let welcomeText = `
        Welcome ${student.stuName}, You can proceed with the Quiz
    `;
    output.innerHTML = welcomeText;
  } else {
    alert("Sorry, you have to Login to proceed with this quiz");
    window.location.href = "registerStudent.html";
  }
}
showUser();
