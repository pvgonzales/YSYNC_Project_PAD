let liked = false;

window.onload = () => {
    let selectedButton = document.querySelector("#connect");
    selectedButton.classList.add("selected");

    // to get posts and connect from connect path to different route
    var posts = JSON.parse(sessionStorage.getItem("posts"));
    var connect = document.getElementsByClassName("connect")[0];

    if (!posts) return

    for (let index = 0; index < posts.length; index++) { // create a new post each time a user creates post
        var tempPost = document.createElement("div");
        tempPost.className = "chat";
        var tempProfile = document.createElement("div");
        tempProfile.className = "chatProfile";
        var tempProfileImage = document.createElement("img");
        tempProfileImage.src = "connect-post-images/profile.jpg";
        tempProfileImage.alt = "profile pic";
        tempProfileImage.className = "profileChat";
        var tempTitle = document.createElement("div");
        tempTitle.className = "chatTitle";

        var tempInfo = document.createElement("div");
        tempInfo.className = "chatInfo";
        tempInfo.innerHTML = "<div class='chatName'><div class='chatN'><h1>Pikachu</h1></div><div class='chatD'><h2 class='chatD2'>September 9, 2024 | 12:30pm</h2></div><div class='chatS'><a id='chatInfoSettings' class='chatInfoSetting' href='connect-trainee-profile.html'>...</a></div></div>"

        tempTitle.innerHTML = "<div class='chatT'><h1 class='chatT2'>EME EME EME</h1></div>"

        var tempP = document.createElement("div");
        tempP.className = "chatP";

        var paragraph = document.createElement("p");
        paragraph.innerHTML = posts[index];

        var tempInteract = document.createElement("div");
        tempInteract.className = "chatInteract";
        tempInteract.innerHTML = `<div class="heartContainerConnect">
                            <button id="heartButtonConnect${index+3}" class="heartIconConnect" onclick="toggleHeart('heartButtonConnect${index+3}')">
                                ♡
                                <h2 id="counterHeartConnect${index+3}"" class="counterHeartConnect">0</h2>
                            </button>
                        </div>
                        
                        <div class="commentContainerConnect">
                            <button class="commentIconConnect">
                              <img
                                src="connect-post-images/speech-bubble.png"
                                alt="Comment Icon"
                                class="speech-icon"
                              />
                            </button>
                            <h2 class="counterCommentConnect">1</h2>
                        </div>`

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

function toggleHeart(id){
    console.log("Pressed")
    liked = !liked;
    var heartIcon = document.getElementById(id);
    if (liked) {
        heartIcon.innerHTML = `<div class="smallHeart">❤</div><h2 id="counterHeartConnect1" class="counterHeartConnect">1</h2>`
    } else {
        heartIcon.innerHTML = `♡<h2 id="counterHeartConnect1" class="counterHeartConnect">0</h2>`
    }
}
