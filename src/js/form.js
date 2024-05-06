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
          linkedinPreview.href ="https://www.linkedin.com/in/"+valueInput;
          cardData.linkedin = valueInput;
        } else if (input === "gituser") {
          githubPreview.href = "https://github.com/"+valueInput;
          cardData.github = valueInput;
        } else if (colorName === "colors") {
          cardColor.classList.remove("green_text", "red_text", "blue_text", "purple_text", "contrast_text", "pink_text", "coquette_text" );
          socialsColor.classList.remove(
            "green_socials",
            "red_socials",
            "blue_socials",
            "purple_socials", 
            "contrast_socials", "pink_socials", "coquette_socials"
            
          );
          if (valueInput === "1") {
            cardColor.classList.add("green_text");
            socialsColor.classList.add("green_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "2") {
            cardColor.classList.add("red_text");
            socialsColor.classList.add("red_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "3"){
            cardColor.classList.add("blue_text");
            socialsColor.classList.add("blue_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "4") {
            cardColor.classList.add("purple_text");
            socialsColor.classList.add("purple_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "5"){
            cardColor.classList.add("contrast_text");
            socialsColor.classList.add("contrast_socials");
            cardData.palette = valueInput;
          } else if (valueInput === "6"){ 
            cardColor.classList.add("pink_text");
            socialsColor.classList.add("pink_socials");
            cardData.palette = valueInput;
          } else{
            cardColor.classList.add("coquette_text");
            socialsColor.classList.add("coquette_socials");
            cardData.palette = valueInput;
          }
        }
        console.log(cardData.name);
        console.log(cardData);
      }

      validateEmail.addEventListener("blur", emailValidation);

function handleClick() {
  form.reset();

  btnShare.classList.remove('btn_desac');
  btnShare.classList.add('btn');

  cardData.palette = "1";
  cardData.name = "";
  cardData.job = "";
  cardData.phone = "";
  cardData.email = "";
  cardData.linkedin = "";
  cardData.github = "";
  cardData.photo = "";

  namePreview.innerHTML = "Nombre Apellido";
  jobPreview.innerHTML = "Front-end developer";
  telPreview.href = "tel:";
  mailPreview.href = "mailto:";
  linkedinPreview.href = "https://www.linkedin.com/in/";
  githubPreview.href = "https://github.com/";
  cardColor.classList.remove("green_text", "red_text", "blue_text", "purple_text", "contrast_text", "pink_text", "coquette_text");
  cardColor.classList.add("green_text");
  socialsColor.classList.remove(
    "green_socials",
    "red_socials",
    "blue_socials",
    "purple_socials",
    "contrast_socials",
    "pink_text",
    "coquette_socials"
  );
  socialsColor.classList.add("green_socials");
  profileImage.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_1280.jpg")`;
  profilePreview.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_1280.jpg")`;
  localStorage.removeItem('card');
  console.log(cardData);
}

form.addEventListener("input", handleInput);

resetBtn.addEventListener("click", handleClick);

//Sección colapsar:

//funcion de las flechas que iba bien hasta el collapse excluyente
// function arrowUpDown(item) {
//   if (item.classList.contains("fa-chevron-down")) {
//     item.classList.remove("fa-chevron-down");
//     item.classList.add("fa-chevron-up");
//   } else {
//     item.classList.add("fa-chevron-down");
//   }
// }

//funcion para que las flechas dependan de la clase de lo que escucha el evento
// function arrowUpDown2(title, arrow) {
//   if (!title.classList.contains("hidden")) {
//     arrow.classList.remove("fa-chevron-down");
//     arrow.classList.add("fa-chevron-up");
//   } else {
//     // arrow.classList.remove("fa-chevron-up");
//     arrow.classList.add("fa-chevron-down");
//   }
// }

function arrowUpDown2(arrow) {
  for (const item of arrayFlechas) {
    if (item === arrow) {
      item.classList.remove("fa-chevron-down");
      item.classList.add("fa-chevron-up");
    } else {
      item.classList.remove("fa-chevron-up");
      item.classList.add("fa-chevron-down");
    }
  }
  console.log(arrow);
}

//haciendo click en la seccion designada para ello, le quitamos 'hidden' y se la añadimos a los otros dos
//hacerlo con parametros:

function collapse(open, close1, close2, arrow) {
  if (!open.classList.contains("hidden")) {
    close1.classList.add("hidden");
    close2.classList.add("hidden");
  }
  open.classList.remove("hidden");
  arrowUpDown2(arrow);
}

// function collapse(arr){
//     for (let i = 0; i<arr.length; i++){

//         if (arr[i].classList.contains("fa-chevron-down")){

//         }
//     }
// }

legendBoxDesign.addEventListener("click", (ev) => {
  colorDiv.classList.toggle("hidden");
  //arrowUpDown(downDesign);

  collapse(colorDiv, fillDiv, shareDiv, downDesign);
  //collapse(titles);
});

legendBoxFill.addEventListener("click", (ev) => {
  fillDiv.classList.toggle("hidden");
  // arrowUpDown(downFill);
  collapse(fillDiv, colorDiv, shareDiv, downFill);
});

legendBoxShare.addEventListener("click", (ev) => {
  shareDiv.classList.toggle("hidden");
  // arrowUpDown(downShare);
  collapse(shareDiv, fillDiv, colorDiv, downShare);
});

/*function arrowUpDownDesign(event) {
  if (downDesign.classList.contains("fa-chevron-down")) {
    downDesign.classList.remove("fa-chevron-down");
    downDesign.classList.add("fa-chevron-up");
  } else {
    downDesign.classList.add("fa-chevron-down");
  }
}*/

/*
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
*/

/*function arrowUpDownShare(event) {
  if (downShare.classList.contains("fa-chevron-down")) {
    downShare.classList.remove("fa-chevron-down");
    downShare.classList.add("fa-chevron-up");
  } else {
    downShare.classList.add("fa-chevron-down");
  }
}*/

function renderError(error) {
  errorMsg.innerHTML = "";
  if(error.includes("name") === true) {
    errorMsg.innerHTML += "Falta el nombre.<br>";
  }
  if (error.indexOf("job") >= 0) {
    errorMsg.innerHTML += "Falta el puesto.<br>";
  }
  if (error.indexOf("photo") >= 0) {
    errorMsg.innerHTML += "Falta la imagen.<br>";
  }
  if (error.indexOf("email") >= 0) {
    errorMsg.innerHTML += "Falta el email.<br>";
  }
  if (error.indexOf("phone") >= 0) {
    errorMsg.innerHTML += "Falta el teléfono.<br>";
  }
  if (error.indexOf("linkedin") >= 0) {
    errorMsg.innerHTML += "Falta el Linkedin.<br>";
  }
  if (error.indexOf("github") >= 0) {
    errorMsg.innerHTML += "Falta el Github.<br>";
  }
  if (error.indexOf("ER_DATA_TOO_LONG") >= 0) {
    errorMsg.innerHTML += "La imagen elegida no debe pesar más de 19KB.<br>";
  }
}

const createCard =()=>{
  fetch('https://dev.adalab.es/api/card/',{
    method: 'POST',
    body: JSON.stringify(cardData),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then((response)=> response.json())
  .then((dataResponse) => {
    console.log(dataResponse);

    if (dataResponse.success) {
      cardLink.innerHTML = dataResponse.cardURL;
      cardLink.href = dataResponse.cardURL;
      create.classList.remove('hidden');
      errorContainer.classList.add("hidden");
      twitterLink.href = `https://twitter.com/intent/tweet?text=¡He%20creado%20mi%20tarjeta%20con%20Easy%20Peasy%20Cards!%20${dataResponse.cardURL}`;
      localStorage.setItem('card', JSON.stringify(cardData));
    } else {
      create.classList.add('hidden');
      errorContainer.classList.remove("hidden");
      let error = dataResponse.error;
      renderError(error);
      
    }

  })
};

function handleClickShare(){
    btnShare.classList.remove('btn');
    btnShare.classList.add('btn_desac');
  // create.classList.remove('hidden');
  createCard();
  
}
console.log(cardData);
btnShare.addEventListener('click', handleClickShare);