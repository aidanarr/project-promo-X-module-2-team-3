const cardData = {
    palette:"",
    name:"",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",    
}

const form = document.querySelector(".js_form");
const namePreview = document.querySelector(".js_name");
const jobPreview = document.querySelector(".js_job");
const telPreview = document.querySelector(".js_tel");
const mailPreview = document.querySelector(".js_mail");
const linkedinPreview = document.querySelector(".js_linkedin");
const githubPreview = document.querySelector(".js_github");
const colors = document.querySelector(".colors");
const cardColor = document.querySelector(".js_card_color");
const socialsColor = document.querySelector(".js_socials_color");
const resetBtn = document.querySelector(".js_reset");

//sección colapsar
const downDesign = document.querySelector('.js_design_down');
const downFill = document.querySelector('.js_fill_down');
const downShare = document.querySelector('.js_share_down');

const colorDiv = document.querySelector('.js_color_div');
const fillDiv = document.querySelector('.js_fill_div');
const shareDiv = document.querySelector('.js_share_div');

const legendBoxDesign = document.querySelector(".js_legend_box_design");
const legendBoxFill = document.querySelector(".js_legend_box_fill");
const legendBoxShare = document.querySelector(".js_legend_box_share");

const titles = document.querySelectorAll('.collapsable');

const arrayFlechas = document.querySelectorAll(".js_array_flechas");