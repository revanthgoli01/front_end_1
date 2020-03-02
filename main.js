fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
     display_info(data.basics);
})

var bodyElement=document.querySelector("#root");

function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");

    //heading
    let heading=document.createElement("h1");
    heading.style.color="red";
    heading.align="center";
    heading.textContent=info.name;

    //details
    let role=document.createElement("h2");
    role.textContent="role: "+info.role;

    let mail=document.createElement("h2");
    let email=document.createElement('a');
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    mail.textContent="mail: ";
    mail.append(email);

    let mob=document.createElement("h2");
    let phone=document.createElement('a');
    phone.href="tel:"+info.mobile;
    phone.textContent=info.mobile;
    mob.textContent="mobile: ";
    mob.append(phone);

    //appending
    bodyElement.append(card);
    card.append(heading);
    
    card.append(document.createElement("hr"));

    card.append(role);
    card.append(mail);

    // card.append(document.createElement("br"));

    card.append(mob);

    var button=document.createElement('a');
    button.textContent='View Profile';
    button.href='https://github.com/revanthgoli01';
    button.classList.add("btn");
    card.append(button);
}
