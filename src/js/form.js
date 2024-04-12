const handleInput =(event) =>{
        const input = event.target.id;
        const valueInput = event.target.value;
        const colorName = event.target.name;
      
        //console.log(input);
        //console.log(valueInput);
      
        if (input === "name") {
          namePreview.innerHTML = valueInput;
          cardData.name = valueInput;
        } else if (input === "position") {
          jobPreview.innerHTML = valueInput;
          cardData.job = valueInput;
        } else if (input === "phone") {
          telPreview.href = "tel:" + valueInput;
          cardData.phone = valueInput;
        } else if (input === "email") {
          mailPreview.href = "mailto:" + valueInput;
          cardData.email = valueInput;
        } else if (input === "link") {
          linkedinPreview.href = valueInput;
          cardData.linkedin = valueInput;
        } else if (input === "gituser") {
          githubPreview.href = valueInput;
          cardData.github = valueInput;
        } else if (colorName === "colors") {
          cardColor.classList.remove("green_text", "red_text", "blue_text");
          socialsColor.classList.remove(
            "green_socials",
            "red_socials",
            "blue_socials"
          );
          if (valueInput === "1") {
            cardColor.classList.add("green_text");
            socialsColor.classList.add("green_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "2") {
            cardColor.classList.add("red_text");
            socialsColor.classList.add("red_socials");
            cardData.palette = valueInput;
          } else {
            cardColor.classList.add("blue_text");
            socialsColor.classList.add("blue_socials");
            cardData.palette = valueInput;
          }
        }
        console.log(cardData.name);
        console.log(cardData);
      }

form.addEventListener("input", handleInput);

//Sección colapsar:

function arrowUpDownDesign(event) {
  if (downDesign.classList.contains("fa-chevron-down")) {
    downDesign.classList.remove("fa-chevron-down");
    downDesign.classList.add("fa-chevron-up");
  } else {
    downDesign.classList.add("fa-chevron-down");
  }
}

legendBoxDesign.addEventListener("click", (ev) => {
  colorDiv.classList.toggle("hidden");

  arrowUpDownDesign();
});

function arrowUpDownFill(event) {
  if (downFill.classList.contains("fa-chevron-down")) {
    downFill.classList.remove("fa-chevron-down");
    downFill.classList.add("fa-chevron-up");
  } else {
    downFill.classList.add("fa-chevron-down");
  }
}

legendBoxFill.addEventListener("click", (ev) => {
  fillDiv.classList.toggle("hidden");

  arrowUpDownFill();
});

function arrowUpDownShare(event) {
  if (downShare.classList.contains("fa-chevron-down")) {
    downShare.classList.remove("fa-chevron-down");
    downShare.classList.add("fa-chevron-up");
  } else {
    downShare.classList.add("fa-chevron-down");
  }
}

legendBoxShare.addEventListener("click", (ev) => {
  shareDiv.classList.toggle("hidden");

  arrowUpDownShare();
});

