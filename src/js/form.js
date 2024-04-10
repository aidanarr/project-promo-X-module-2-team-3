
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

downDesign.addEventListener('click', (ev)=>{
    //ev.preventDefault();
    colorDiv.classList.toggle('hidden');

    if (downDesign.classList.contains("fa-chevron-down")){
        downDesign.classList.remove("fa-chevron-down");
        downDesign.classList.add("fa-chevron-up");
    } else {
        downDesign.classList.add("fa-chevron-down");
    } 
});

downFill.addEventListener('click', (ev)=>{
    //ev.preventDefault();
console.log("relleno?");
    fillDiv.classList.toggle('hidden');

    if (downFill.classList.contains("fa-chevron-down")){
        downFill.classList.remove("fa-chevron-down");
        downFill.classList.add("fa-chevron-up");
    } else {
        downFill.classList.add("fa-chevron-down");
    } 

});

downShare.addEventListener('click', (ev)=>{
    //ev.preventDefault();
console.log("comparto?");
    shareDiv.classList.toggle('hidden');

    if (downShare.classList.contains("fa-chevron-down")){
        downShare.classList.remove("fa-chevron-down");
        downShare.classList.add("fa-chevron-up");
    } else {
        downShare.classList.add("fa-chevron-down");
    } 
});