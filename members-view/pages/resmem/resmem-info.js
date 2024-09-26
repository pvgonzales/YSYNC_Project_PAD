// fixed data

var typeFlag = "trainees"
const trainees = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        batch: 2023,
        mentor: "NA",
        additionalInfo: "⋮"
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        batch: 1999,
        mentor: "NA",
        additionalInfo: "⋮"
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        batch: 2022,
        mentor: "NA",
        additionalInfo: "⋮"
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        batch: 2010,
        mentor: "NA",
        additionalInfo: "⋮"
    }
];

const members = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        batch: 2023,
        orgbatch: "System7",
        additionalInfo: "⋮"
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        batch: 1999,
        orgbatch: "nightMode",
        additionalInfo: "⋮"
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        batch: 2022,
        orgbatch: "Reboot",
        additionalInfo: "⋮"
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        batch: 2010,
        orgbatch: "Batch from Home",
        additionalInfo: "⋮"
    }
]
// function for implementing search functionality
function search(){
    // check what type of user is clicked
    var keys = Object.keys(trainees[0]);
    var users = trainees;   
    if(typeFlag === "members"){
        keys = Object.keys(members[0]);
        users = members;
    }

    var search_input = document.getElementById("search-input").value;
    var filtered_result = users.filter((user) => { // filter the results
        return user["name"].toLowerCase().includes(search_input.toLowerCase());
    })
    console.log(filtered_result)
    populateTable(filtered_result, keys)
}

function switchTab(active){
    let tabs = ["trainees-tab", "members-tab","alumni-tab"];

    tabs.forEach((tabId) => {
        const tab = document.getElementById(tabId);
        if (tabId === active){
            tab.classList.add("active");
        }
        else{
            tab.classList.remove("active");
        }
    })

}

// function for updating the table based on its column data
function updateTable(type){

    if(type === "trainees"){
        const list = ["NAME", "EMAIL", "BATCH", "MENTOR", ""]
        var table = document.getElementById("account-table-id");
        table.innerHTML=""; 
        var tr = document.createElement("tr");
        list.forEach((column) => {
            var th = document.createElement("th");
            th.innerHTML=column;
            tr.appendChild(th);
        })
        var tbody = document.createElement("tbody");
        tbody.setAttribute("id", "table-values");
        table.appendChild(tr);
        table.appendChild(tbody);
        populateTable(trainees, Object.keys(trainees[0]));
    } else{
        const list = ["NAME", "EMAIL", "BATCH", "ORG BATCH", ""]
        var table = document.getElementById("account-table-id");
        table.innerHTML=""; 
        var tr = document.createElement("tr");
        list.forEach((column) => {
            var th = document.createElement("th");
            th.innerHTML=column;
            tr.appendChild(th);
        })
        var tbody = document.createElement("tbody");
        tbody.setAttribute("id", "table-values");
        table.appendChild(tr);
        table.appendChild(tbody);
        populateTable(members, Object.keys(members[0]));

    }
}

// function for populating the table when switching tabs
function populateTable(users, keys){
    var tbody = document.getElementById("table-values");
    tbody.innerHTML = '' // remove the existing values since we want to search
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");
        keys.forEach((key) => {
            if (key === "additionalInfo") {
                var button = document.createElement("button");
                button.classList.add("vert-ellipsis");
                button.innerHTML = users[i][key];

                button.addEventListener("click", (event) => {
                    event.stopPropagation(); 
                    var popup = document.createElement("div");
                    popup.classList.add("pop-up");
                    
                    var editButton = document.createElement("button");
                    editButton.innerHTML = "Edit User";
                    editButton.classList.add("edit-button"); 
                
                    var deleteButton = document.createElement("button");
                    deleteButton.innerHTML = "Delete User";
                    deleteButton.classList.add("delete-button"); 
                
                    popup.appendChild(editButton);
                    popup.appendChild(deleteButton);
                
                    // position the popup
                    const rect = button.getBoundingClientRect();
                    const popupWidth = 200; 
                    popup.style.left = `${rect.right-(popupWidth/2)}px`; 
                    popup.style.top = `${rect.top - 30}px`;
                
                    document.body.appendChild(popup);
                
                    // close popup on hover out
                    popup.addEventListener("mouseleave", () => {
                        popup.remove();
                    });
                
                    // can also remove popup when clicking outside
                    function handleClickOutside(event) {
                        if (!popup.contains(event.target) && event.target !== button) {
                            popup.remove();
                            document.removeEventListener("click", handleClickOutside);
                        }
                    }
                
                    document.addEventListener("click", handleClickOutside);
                });

                var td = document.createElement("td");
                td.appendChild(button);
                tr.appendChild(td);
                tbody.append(tr);
                return;
            }
            var td = document.createElement("td");
            if(key === "name"){
                var circle = document.createElement("div");
                circle.classList.add("circle");

                var align = document.createElement("div");
                align.classList.add("table-align-picture");
                align.appendChild(circle);
                align.appendChild(document.createTextNode(users[i]["name"]));

                td.appendChild(align);
                tr.appendChild(td);
                return;
            }
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        })
        tbody.append(tr);
    }
}
// search listener
document.getElementById("search-input").addEventListener("input", search);

// document listeners for the tabs
document.getElementById("trainees-tab").addEventListener("click", () => {
    switchTab("trainees-tab");
    var secondary = document.getElementsByClassName("header-main-secondary")
    secondary[0].innerHTML="/ Trainees";
    typeFlag = "trainees";
    updateTable(typeFlag);
})
document.getElementById("members-tab").addEventListener("click", () => {
    switchTab("members-tab");
    var secondary = document.getElementsByClassName("header-main-secondary")
    secondary[0].innerHTML="/ Members";
    typeFlag = "members";
    updateTable(typeFlag);
})

updateTable(typeFlag);


