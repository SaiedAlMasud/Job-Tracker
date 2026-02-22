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
const interviewList = getValueFromId("interviewed-list");
const rejectedList = getValueFromId("rejected-list");

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

    if(id === "interview-btn"){
        allJobCards.classList.add("hidden");
        interviewList.classList.remove("hidden");
    }
    else if(id === "all-btn"){
        allJobCards.classList.remove("hidden");
        interviewList.classList.add("hidden");
    }
    else if(id === "rejected-btn"){
        allJobCards.classList.add("hidden");
        interviewList.classList.add("hidden");
        rejectedList.classList.remove("hidden");
    }
}

mainContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("interview-btn")){
        //console.log("Parent element:", event.target.parentNode.parentNode);
        const card = event.target.parentNode.parentNode;
        const jobTitle = card.querySelector(".job-title").innerText;
        const jobRole = card.querySelector(".job-role").innerText;
        const jobSalary = card.querySelector(".job-salary").innerText;
        const jobDescription = card.querySelector(".job-description").innerText;
        const jobStatus = card.querySelector(".status-badge").innerHTML;
        const jobData = {
            jobTitle,
            jobRole,
            jobSalary,
            jobDescription,
            jobStatus: "INTERVIEW"
        };
        //console.log("Job data: ", jobData);
        const jobExistsInterview = interviewed.find(job => job.jobTitle === jobTitle);
        if(!jobExistsInterview){
            interviewed.push(jobData);
            calculateCounts();
            console.log("Added to interviewed: ", jobData);
        }
        renderInterviewedList(); 
    }
    else if(event.target.classList.contains("rejected-btn")){
        //console.log("Parent element:", event.target.parentNode.parentNode);
        const card = event.target.parentNode.parentNode;
        const jobTitle = card.querySelector(".job-title").innerText;
        const jobRole = card.querySelector(".job-role").innerText;
        const jobSalary = card.querySelector(".job-salary").innerText;
        const jobDescription = card.querySelector(".job-description").innerText;
        const jobStatus = card.querySelector(".status-badge").innerHTML;
        const jobData = {
            jobTitle,
            jobRole,
            jobSalary,
            jobDescription,
            jobStatus: "REJECTED"
        };
        //console.log("Job data: ", jobData);
        const jobExistsInterview = rejected.find(job => job.jobTitle === jobTitle);
        if(!jobExistsInterview){
            rejected.push(jobData);
            calculateCounts();
            console.log("Added to rejected: ", jobData);
        }
        renderRejectedList(); 
    }
});


function renderInterviewedList(){
    interviewList.innerHTML = ""; // Clear previous content
    //jobStatus.classList.add("hidden");
    for(let job of interviewed){
        let div = document.createElement("div");
        div.classList.add("card", "w-full", "bg-base-100", "my-4");
        div.innerHTML = `<div class="card-body w-full">
                    <!-- Header with title and delete button -->
                    <div class="flex items-start justify-between">
                        <div>
                            <h2 class="job-title text-xl text-black-300">${job.jobTitle}</h2>
                            <p class="job-role text-lg text-gray-500 mt-2">${job.jobRole}</p>
                            <p class="job-salary text-[14px] text-gray-500 mt-2">${job.jobSalary}</p>
                        </div>
                        <button class="btn btn-ghost btn-circle text-gray-500 border-1 hover:bg-error/10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Status badge -->
                    <div class="not-applied mt-2">
                        <span class="status-badge badge bg-[#EEF4FF] w-36 p-4 text-[16px] font-medium">${job.jobStatus}</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="job-description text-black-500 text-[16px] mt-3">
                        ${job.jobDescription}
                    </p>
                    
                    <!-- Action buttons -->
                    <div class="card-actions mt-4">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>`;
        
        interviewList.appendChild(div);

    }
}

function renderRejectedList(){
    rejectedList.innerHTML = ""; // Clear previous content
    //jobStatus.classList.add("hidden");
    for(let job of rejected){
        let div = document.createElement("div");
        div.classList.add("card", "w-full", "bg-base-100", "my-4");
        div.innerHTML = `<div class="card-body w-full">
                    <!-- Header with title and delete button -->
                    <div class="flex items-start justify-between">
                        <div>
                            <h2 class="job-title text-xl text-black-300">${job.jobTitle}</h2>
                            <p class="job-role text-lg text-gray-500 mt-2">${job.jobRole}</p>
                            <p class="job-salary text-[14px] text-gray-500 mt-2">${job.jobSalary}</p>
                        </div>
                        <button class="btn btn-ghost btn-circle text-gray-500 border-1 hover:bg-error/10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Status badge -->
                    <div class="not-applied mt-2">
                        <span class="status-badge badge bg-[#EEF4FF] w-36 p-4 text-[16px] font-medium">${job.jobStatus}</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="job-description text-black-500 text-[16px] mt-3">
                        ${job.jobDescription}
                    </p>
                    
                    <!-- Action buttons -->
                    <div class="card-actions mt-4">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>`;
        
        rejectedList.appendChild(div);

    }
}