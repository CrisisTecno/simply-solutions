const informacion = {
    Birthdate: "09/13/1996",
    Email: "info@website.com",
    Phone: "+ (123) 456-7890",
    Skype: "John_Doe",
    Address: "12345 Fake ST NoWhere AB Country",
  };
  const logos=["asdas","safas"];
  const expertise = {
    "Front-End FullStack in asd": [
      "69",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio quae",
    ],
    "Front-End FullStack in uwu": [
      "69",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio quae",
    ],
    "Front-End FullStack in owo": [
      "69",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio quae",
    ],
  };
  
  const infoList = document.getElementById("info-list");
  const logoList = document.getElementById("logo-list");
  const expertiseList = document.getElementById("expertise-list");
  for (let key in informacion) {
    if (informacion.hasOwnProperty(key)) {
      let value = informacion[key];

      let listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${key}:</strong> ${value}`;

      infoList?.appendChild(listItem);
    }
  }
  for (let item in logos) {
    let logoitem =document.createElement("li");
    logoitem.innerHTML=`
        <a href="#">${logos[item]}</a>
    `;
    logoList?.appendChild(logoitem);
  }
  for (let key in expertise) {
    let value = expertise[key];

    let expertiseItem = document.createElement("div");
    expertiseItem.innerHTML = `
                <div class="card-about">
                    <a class="logo">${value[0]}</a>
                    <div class="expertise">
                        <h3>${key}</h3>
                        <h4>${value[1]}</h4>
                    </div>
                </div>
    `;
    expertiseList?.appendChild(expertiseItem);
  }