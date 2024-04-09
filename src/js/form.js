
form.addEventListener("input", (event)=> {
    const input = event.target.id;
    const valueInput = event.target.value;

    if (input === "name") {
        namePreview.innerHTML = valueInput;
    } else if (input === "position") {
        jobPreview.innerHTML = valueInput;
    } else if (input === "phone") {
        telPreview.href = valueInput;
    } else if (input === "email") {
        mailPreview.href = valueInput;
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
});

downFill.addEventListener('click', (ev)=>{
    //ev.preventDefault();
console.log("relleno?");
    fillDiv.classList.toggle('hidden');
});

downShare.addEventListener('click', (ev)=>{
    //ev.preventDefault();
console.log("comparto?");
    shareDiv.classList.toggle('hidden');
});