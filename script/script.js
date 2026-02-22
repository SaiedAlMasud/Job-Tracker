let interviewed = [];
let rejected = [];

let totalCount = getValueFromId("total-jobs");
let interviewCount = getValueFromId("interview-jobs");
let rejectedCount = getValueFromId("rejected-jobs");

//geting elements
const allJobCards = getValueFromId("all-cards");
const mainContainer = document.querySelector("main");

const allBtn = getValueFromId("all-btn");
const interviewBtn = getValueFromId("interview-btn");
const rejectedBtn = getValueFromId("rejected-btn");

//console.log("all cards: ", allJobCards);

function calculateCounts(){
    totalCount.innerText = allJobCards.children.length;
    interviewCount.innerText = interviewed.length;
    rejectedCount.innerText = rejected.length;
}

calculateCounts();

function toggleStyle(id){
    console.log("Toggling style for id: ", id);
    //reset all buttons to default style
    allBtn.classList.remove("btn-primary", "text-gray-500");
    interviewBtn.classList.remove("btn-primary", "text-gray-500");
    rejectedBtn.classList.remove("btn-primary", "text-gray-500");

    //add primary style to the selected button
    const selectedBtn = getValueFromId(id);
    selectedBtn.classList.add("btn-primary");
}