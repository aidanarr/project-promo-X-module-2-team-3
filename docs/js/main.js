let t={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const p=document.querySelector(".js_form"),b=document.querySelector(".js_name"),v=document.querySelector(".js_job"),y=document.querySelector(".js_tel"),S=document.querySelector(".js_mail"),j=document.querySelector(".js_linkedin"),q=document.querySelector(".js_github");document.querySelector(".colors");const o=document.querySelector(".js_card_color"),n=document.querySelector(".js_socials_color"),T=document.querySelector(".js_reset"),H=document.querySelector(".js_design_down"),M=document.querySelector(".js_fill_down"),E=document.querySelector(".js_share_down"),r=document.querySelector(".js_color_div"),d=document.querySelector(".js_fill_div"),u=document.querySelector(".js_share_div"),F=document.querySelector(".js_legend_box_design"),O=document.querySelector(".js_legend_box_fill"),I=document.querySelector(".js_legend_box_share");document.querySelectorAll(".collapsable");const D=document.querySelectorAll(".js_array_flechas"),a=document.querySelector(".js_btn_share"),h=document.querySelector(".js_create"),f=document.querySelector(".js_cardUrl"),L=document.querySelector(".js_error"),c=document.querySelector(".errormsg"),x=document.querySelector(".js_email"),g=document.querySelector(".js_email_label"),P=document.querySelector(".js-twitter"),C=e=>{const l=e.target.id,s=e.target.value,m=e.target.name;l==="name"?(b.innerHTML=s,t.name=s):l==="position"?(v.innerHTML=s,t.job=s):l==="phone"?(y.href="tel:"+s,t.phone=s):l==="email"?(S.href="mailto:"+s,t.email=s):l==="link"?(j.href="https://www.linkedin.com/in/"+s,t.linkedin=s):l==="gituser"?(q.href="https://github.com/"+s,t.github=s):m==="colors"&&(o.classList.remove("green_text","red_text","blue_text","purple_text","contrast_text","pink_text","coquette_text"),n.classList.remove("green_socials","red_socials","blue_socials","purple_socials","contrast_socials","pink_socials","coquette_socials"),s==="1"?(o.classList.add("green_text"),n.classList.add("green_socials"),t.palette=s):s==="2"?(o.classList.add("red_text"),n.classList.add("red_socials"),t.palette=s):s==="3"?(o.classList.add("blue_text"),n.classList.add("blue_socials"),t.palette=s):s==="4"?(o.classList.add("purple_text"),n.classList.add("purple_socials"),t.palette=s):s==="5"?(o.classList.add("contrast_text"),n.classList.add("contrast_socials"),t.palette=s):s==="6"?(o.classList.add("pink_text"),n.classList.add("pink_socials"),t.palette=s):(o.classList.add("coquette_text"),n.classList.add("coquette_socials"),t.palette=s)),console.log(t.name),console.log(t)};x.addEventListener("blur",R);function A(){p.reset(),a.classList.remove("btn_desac"),a.classList.add("btn"),t.palette="1",t.name="",t.job="",t.phone="",t.email="",t.linkedin="",t.github="",t.photo="",b.innerHTML="Nombre Apellido",v.innerHTML="Front-end developer",y.href="tel:",S.href="mailto:",j.href="https://www.linkedin.com/in/",q.href="https://github.com/",o.classList.remove("green_text","red_text","blue_text","purple_text","contrast_text","pink_text","coquette_text"),o.classList.add("green_text"),n.classList.remove("green_socials","red_socials","blue_socials","purple_socials","contrast_socials","pink_text","coquette_socials"),n.classList.add("green_socials"),k.style.backgroundImage='url("https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_1280.jpg")',w.style.backgroundImage='url("https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_1280.jpg")',localStorage.removeItem("card"),console.log(t)}p.addEventListener("input",C);T.addEventListener("click",A);function U(e){for(const l of D)l===e?(l.classList.remove("fa-chevron-down"),l.classList.add("fa-chevron-up")):(l.classList.remove("fa-chevron-up"),l.classList.add("fa-chevron-down"));console.log(e)}function _(e,l,s,m){e.classList.contains("hidden")||(l.classList.add("hidden"),s.classList.add("hidden")),e.classList.remove("hidden"),U(m)}F.addEventListener("click",e=>{r.classList.toggle("hidden"),_(r,d,u,H)});O.addEventListener("click",e=>{d.classList.toggle("hidden"),_(d,r,u,M)});I.addEventListener("click",e=>{u.classList.toggle("hidden"),_(u,d,r,E)});function B(e){c.innerHTML="",e.includes("name")===!0&&(c.innerHTML+="Falta el nombre.<br>"),e.indexOf("job")>=0&&(c.innerHTML+="Falta el puesto.<br>"),e.indexOf("photo")>=0&&(c.innerHTML+="Falta la imagen.<br>"),e.indexOf("email")>=0&&(c.innerHTML+="Falta el email.<br>"),e.indexOf("phone")>=0&&(c.innerHTML+="Falta el teléfono.<br>"),e.indexOf("linkedin")>=0&&(c.innerHTML+="Falta el Linkedin.<br>"),e.indexOf("github")>=0&&(c.innerHTML+="Falta el Github.<br>"),e.indexOf("ER_DATA_TOO_LONG")>=0&&(c.innerHTML+="La imagen elegida no debe pesar más de 19KB.<br>")}const N=()=>{fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>{if(console.log(e),e.success)f.innerHTML=e.cardURL,f.href=e.cardURL,h.classList.remove("hidden"),L.classList.add("hidden"),P.href=`https://twitter.com/intent/tweet?text=¡He%20creado%20mi%20tarjeta%20con%20Easy%20Peasy%20Cards!%20${e.cardURL}`,localStorage.setItem("card",JSON.stringify(t));else{h.classList.add("hidden"),L.classList.remove("hidden");let l=e.error;B(l)}})};function $(){a.classList.remove("btn"),a.classList.add("btn_desac"),N()}console.log(t);a.addEventListener("click",$);const i=new FileReader,G=document.querySelector(".js__image"),k=document.querySelector(".js_card_pic"),w=document.querySelector(".js_image_preview");function J(e){const l=e.currentTarget.files[0];i.addEventListener("load",K),i.readAsDataURL(l)}function K(){k.style.backgroundImage=`url(${i.result})`,w.style.backgroundImage=`url(${i.result})`,t.photo=i.result}G.addEventListener("change",J);function R(){let e=x.value;e.includes("@")===!1?(e="",g.classList.add("email_class")):g.classList.remove("email_class"),console.log("aquí"),console.log(e)}
//# sourceMappingURL=main.js.map
