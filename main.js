const form = document.getElementById("form");

const approvedImg = '<i class="fa-solid fa-check"></i>';
const reprovedImg = '<i class="fa-solid fa-xmark"></i>';

const inputActivity = document.getElementById("activity-input");
const inputGrade = document.getElementById("grade-input");

const minGrade = parseInt(prompt("Insert minimum grade: "));
let lines = "";
const gradeArray = [];
const activityArray = [];

form.addEventListener("submit", function(e){
    e.preventDefault();


    insertTable();
    tableUpdate();
    calcFinalGrade();
    gradeUpdate()

    inputActivity.value = "";
    inputGrade.value = "";
})

function insertTable() {

    if(activityArray.includes(inputActivity.value)){
        alert(`${inputActivity.value} has already been entered.`);
    }
    else {
        gradeArray.push(parseFloat(inputGrade.value));
        activityArray.push(inputActivity.value);

        let line = "<tr>";
        line += `<td> ${inputActivity.value} </td>`;
        line += `<td> ${inputGrade.value} </td>`;
        line += `<td> ${inputGrade.value >= minGrade ? approvedImg : reprovedImg} </td>`;
        line += "</tr>";
    
        lines += line;
    }
}

function tableUpdate(){
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = lines;
}

function gradeUpdate() {
    const finalGrade = calcFinalGrade();

    const finalGradeLine = document.getElementById("final-grade").innerHTML = finalGrade.toFixed(2);
    const finalGradeImg = document.getElementById("final-grade-img").innerHTML = finalGrade >= minGrade ?  approvedImg : reprovedImg;
}

function calcFinalGrade(){
    let total = 0;

    for(let i=0; i < gradeArray.length; i++){
        total += gradeArray[i];
    }

    return total / gradeArray.length; 
}