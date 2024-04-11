
form.addEventListener("input", (event)=> {
    const input = event.target.id;
    const valueInput = event.target.value;

    if (input === "name") {
        namePreview.innerHTML = valueInput;
    } else if (input === "position") {
        jobPreview.innerHTML = valueInput;
    } else if (input === "phone") {
        telPreview.href = "tel:" + valueInput;
    } else if (input === "email") {
        mailPreview.href = "mailto:" + valueInput;
    } else if (input === "link") {
        linkedinPreview.href = valueInput;
    } else if (input === "gituser") {
        githubPreview.href = valueInput;
    }
});

//Sección colapsar:

function arrowUpDownDesign(event) {
    if (downDesign.classList.contains("fa-chevron-down")){
        downDesign.classList.remove("fa-chevron-down");
        downDesign.classList.add("fa-chevron-up");
    } else {
        downDesign.classList.add("fa-chevron-down");
    } 
};

legendBoxDesign.addEventListener('click', (ev)=>{

    colorDiv.classList.toggle('hidden');

    arrowUpDownDesign(); 
});

function arrowUpDownFill(event) {
    if (downFill.classList.contains("fa-chevron-down")){
        downFill.classList.remove("fa-chevron-down");
        downFill.classList.add("fa-chevron-up");
    } else {
        downFill.classList.add("fa-chevron-down");
    } 
};

legendBoxFill.addEventListener('click', (ev)=>{
    fillDiv.classList.toggle('hidden');

    arrowUpDownFill(); 
});


function arrowUpDownShare(event) {
    if (downShare.classList.contains("fa-chevron-down")){
        downShare.classList.remove("fa-chevron-down");
        downShare.classList.add("fa-chevron-up");
    } else {
        downShare.classList.add("fa-chevron-down");
    } 
};

legendBoxShare.addEventListener('click', (ev)=>{
    shareDiv.classList.toggle('hidden');

    arrowUpDownShare(); 
});