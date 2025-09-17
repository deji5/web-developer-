const abt= document.getElementById('about')
const cont= document.getElementById('contact')
const skl= document.getElementById('skill')
const about= document.getElementById('about-para')
const contact= document.getElementById('contact-para')
const skills= document.getElementById('skill-para')

abt.onclick = function(){
    about.style.display = "block"
    contact.style.display = "none"
    skills.style.display = "none"
}
cont.onclick = function(){
    about.style.display = "none"
    contact.style.display = "block"
    skills.style.display = "none"
}
skl.onclick = function(){
    about.style.display = "none"
    contact.style.display = "none"
    skills.style.display = "block"
}

