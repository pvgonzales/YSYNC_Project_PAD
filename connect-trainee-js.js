
window.onload = () => {
    let selectedButton = document.querySelector("#connect");
    selectedButton.classList.add("selected");

    // to get posts and connect from connect path to different route
    var posts = JSON.parse(sessionStorage.getItem("posts"));
    var connect = document.getElementsByClassName("connect")[0];

    for (let index = 0; index < posts.length; index++) { // create a new post each time a user creates post
        var tempPost = document.createElement("div");
        tempPost.className = "chat";
        var tempProfile = document.createElement("div");
        tempProfile.className = "chatProfile";
        var tempProfileImage = document.createElement("img");
        tempProfileImage.src = "profile.jpg";
        tempProfileImage.alt = "profile pic";
        tempProfileImage.className = "profileChat";
        var tempTitle = document.createElement("div");
        tempTitle.className = "chatTitle";

        var tempInfo = document.createElement("div");
        tempInfo.className = "chatInfo";
        tempInfo.innerHTML = "<div class='chatName'><div class='chatN'><h1>Pikachu</h1></div><div class='chatD'><h2 class='chatD2'>September 9, 2024 | 12:30pm</h2></div><div class='chatS'><button id='chatInfoSettings' class='chatInfoSetting'>...</button></div></div>"

        tempTitle.innerHTML = "<div class='chatT'><h1 class='chatT2'>EME EME EME</h1></div>"

        var tempP = document.createElement("div");
        tempP.className = "chatP";

        var paragraph = document.createElement("p");
        paragraph.innerHTML = posts[index];

        var tempInteract = document.createElement("div");
        tempInteract.className = "chatInteract";
        tempInteract.innerHTML = "<div class='heartContainerConnect'> <button id='heartButtonConnect' class='heartIconConnect'>❤</button><h2 class='counterHeartConnect'>1</h2> </div> <div class='commentContainerConnect'> <button class='commentIconConnect'> <img src='speech-bubble.png' alt='Comment Icon' class='speech-icon' /> </button> <h2 class='counterCommentConnect'>1</h2> </div> "


        tempP.appendChild(paragraph);
        tempTitle.appendChild(tempP);
        tempProfile.appendChild(tempProfileImage);
        tempPost.appendChild(tempProfile);
        tempPost.appendChild(tempInfo);
        tempInfo.appendChild(tempTitle);
        tempInfo.appendChild(tempInteract);
        connect.appendChild(tempPost);
    }
}

function createPost(){

    var posts = []; // create post array

    if (sessionStorage.getItem("posts")) { // if posts array have data then load data to posts
       posts = JSON.parse(sessionStorage.getItem("posts")); // load old data to post
    }

    var textInput = document.getElementsByClassName("inputSize")[0]; // get the text from inputSize class
    posts.push(textInput.value);    // add to posts

    sessionStorage.setItem("posts", JSON.stringify(posts)); //add to session storage when post is created
}
