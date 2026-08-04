let main_container=document.getElementById("container-form");
let form = document.getElementById("container-form");
let student_name=document.getElementById("studentName");
let student_id = document.getElementById("studentId");
let student_branch = document.getElementById("branch");
let student_card = document.getElementById("studentCard");
let error = document.getElementById("errorMsg");


function createCard(sname,sid,sbranch){
    
    student_card.innerHTML="";

    let scard=document.createElement("div")
    scard.className="Student-container";

    let sHeading=document.createElement("h2")
    sHeading.textContent="Student card"

    let studentName=document.createElement("p")
    studentName.textContent="Name: "+sname;

    let studentId = document.createElement("p");
    studentId.textContent = "Id: " + sid;

    let studentBranch = document.createElement("p");
    studentBranch.textContent = "Branch: " + sbranch;

    // Append the elements in to the div

    scard.appendChild(sHeading);
    scard.appendChild(studentName);
    scard.appendChild(studentId);
    scard.appendChild(studentBranch);

    student_card.appendChild(scard);

}

function handleSubmit(event){
    event.preventDefault();

// validate and error handling
// if not raise an error
if( student_name.value ==="" || student_id.value==="" || student_branch.value===""){
    console.log("Inside if cond")
    error.textContent="Fill all the fields."
    student_card.innerHTML = "";
    return;
}
    errorMsg.textContent="";
// Trim spaces
let sname=student_name.value.trim();
let sid=student_id.value.trim();
let sbranch=student_branch.value.trim();

// Creating student card
// 1. Create a card
// 2. Insert heading in to the card
// 3. Insert name in to the card
// 4. Insert Id
// 5. insert branch
createCard(sname,sid,sbranch)
}


form.addEventListener("submit",handleSubmit);
