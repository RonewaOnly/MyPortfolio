var levels = ['Basic', 'Beginner', 'Intermediate', 'Knowledgeable', 'Advanced', 'Proficient'];

var display = document.getElementById("ProjectsDisplay");




function createPosts() {

    //Calling the JSON file with data

    var post = document.createElement("div");
    post.setAttribute("class", "postblock");
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var cardFace = document.createElement("div");
    cardFace.setAttribute("class", "cardFace");
    var img = document.createElement("img");
    img.setAttribute("class", "img");
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    var title = document.createElement("h3");
    title.setAttribute("class", "projectname");
    title.textContent = "Hello";
    var para = document.createElement("p");
    para.setAttribute("class", "description");
    var goBtn = document.createElement("a");
    goBtn.setAttribute("class", "githubBtn");
    goBtn.setAttribute("target", "_blank");
    goBtn.textContent = "Get Source Code";
    post.appendChild(card);

    fetch("./projectStorage.json")
        .then(response => response.json())
        .then(data => {
            //Calling the JSON file with data

            var post = document.createElement("div");
            post.setAttribute("class", "postblock");
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            var cardFace = document.createElement("div");
            cardFace.setAttribute("class", "cardFace");
            var img = document.createElement("img");
            img.setAttribute("class", "img");
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "cardBody");
            var title = document.createElement("h3");
            title.setAttribute("class", "projectname");
            title.textContent = "Hello";
            var para = document.createElement("p");
            para.setAttribute("class", "description");
            var goBtn = document.createElement("a");
            goBtn.setAttribute("class", "githubBtn");
            goBtn.setAttribute("target", "_blank");
            goBtn.textContent = "Get Source Code";
            post.appendChild(card);
            for (let i = 0; i < data.Projects.length; i++) {
                let obj = data.Projects[i];
                for (let key in obj) {
                    let value = obj[key];
                    console.log(key + ': ' + value);
                    
                }
            }
        });

    /*for (let i = 0; i < results.Projects.length; i++) {

        img.src = `${results.Projects[i].Image}`;
        title.textContent = `${results.Projects[i].Project_Name}`;
        para.textContent = `${results.Projects[i].Description}`;
        if (results.Projects[i].Github == null) {
            goBtn.href = `${results.Projects[i].URL}`;
        } else {
            goBtn.style.display = "none"
        }
        card.appendChild(cardFace);
        cardFace.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(para);
        cardBody.appendChild(goBtn);
        display.appendChild(post);

    }*/

    //console.log(post);

}
createPosts();

