const data = document.querySelector(".data");

const sendBtn = document.querySelector("#btn");

const fieldName = document.getElementById("name");
const fieldRa = document.getElementById("ra");
const fieldSubject = document.getElementById("subject");
const fieldTeacher = document.getElementById("teacher");

const studentsList = [];

sendBtn.addEventListener("click", handleSubmit);


function handleSubmit(event) {
  if (
    !fieldName.value ||
    !fieldRa.value ||
    !fieldSubject.value ||
    !fieldTeacher.value
  ) {
    return;
  }
  event.preventDefault();
  const studentObj = {
    name: fieldName.value,
    ra: fieldRa.value,
    subject: fieldSubject.value,
    Teacher: fieldTeacher.value,
  };
  handleTeacher(studentObj);
  studentsList.push(studentObj);
  handleRender();
}

function handleRender() {
  fieldName.value = "";
  fieldRa.value = "";
  fieldSubject.value = "";
  fieldTeacher.value = "";
  fieldName.focus();
  handleObjectIterable();
}
