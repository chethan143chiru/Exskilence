const form = document.getElementById("ageForm");
const dob = document.getElementById("dob");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (dob.value === "") {

        result.innerHTML = "";

        alert("Please select Date of Birth");

        return;
    }

    const birthDate = new Date(dob.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (today.getDate() < birthDate.getDate()) {

        months--;

        if(months < 0){
            years--;
            months +=12;
        }

    }

    result.innerHTML = `
        <div class="result-card">

            <h2>Your Age</h2>

            <p>Years: ${years}</p>

            <p>Months: ${months}</p>

        </div>
    `;

});