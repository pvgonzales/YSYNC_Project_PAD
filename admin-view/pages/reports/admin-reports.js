// fixed data
var typeFlag = "pending"; // initial state

const pending = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        dateSubmitted: "2023-09-01",
        reason: "Personal reasons",
        actions: "..."
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        dateSubmitted: "2023-09-02",
        reason: "Health issues",
        actions: "..."
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        dateSubmitted: "2023-09-03",
        reason: "Family commitments",
        actions: "..."
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        dateSubmitted: "2023-09-04",
        reason: "Traveling",
        actions: "..."
    }
];

const resolved = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        dateSubmitted: "2023-05-01",
        reason: "Personal reasons",
        dateResolved: "2023-09-05"
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        dateSubmitted: "2023-06-01",
        reason: "Health issues",
        dateResolved: "2023-09-06"
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        dateSubmitted: "2023-07-01",
        reason: "Family commitments",
        dateResolved: "2023-09-07"
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        dateSubmitted: "2023-08-01",
        reason: "Traveling",
        dateResolved: "2023-09-08"
    }
];

// Function for implementing search functionality
function search() {
    var keys = Object.keys(pending[0]);
    var users = pending;

    if (typeFlag === "resolved") {
        keys = Object.keys(resolved[0]);
        users = resolved;
    }

    var search_input = document.getElementById("search-input").value;
    var filtered_result = users.filter((user) => {
        return user["name"].toLowerCase().includes(search_input.toLowerCase());
    });
    console.log(filtered_result);
    populateTable(filtered_result, keys);
}

function switchTab(active) {
    let tabs = ["pending-tab", "resolved-tab"];

    tabs.forEach((tabId) => {
        const tab = document.getElementById(tabId);
        if (tabId === active) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

// Function for updating the table based on active type
function updateTable(type) {
    if (type === "pending") {
        const list = ["NAME", "EMAIL", "DATE SUBMITTED", "REASON", "ACTIONS"];
        var table = document.getElementById("account-table-id");
        table.innerHTML = ""; 
        var tr = document.createElement("tr");
        list.forEach((column) => {
            var th = document.createElement("th");
            th.innerHTML = column;
            tr.appendChild(th);
        });
        var tbody = document.createElement("tbody");
        tbody.setAttribute("id", "table-values");
        table.appendChild(tr);
        table.appendChild(tbody);
        populateTable(pending, Object.keys(pending[0]));
    } else {
        const list = ["NAME", "EMAIL", "DATE SUBMITTED", "REASON", "DATE RESOLVED"];
        var table = document.getElementById("account-table-id");
        table.innerHTML = ""; 
        var tr = document.createElement("tr");
        list.forEach((column) => {
            var th = document.createElement("th");
            th.innerHTML = column;
            tr.appendChild(th);
        });
        var tbody = document.createElement("tbody");
        tbody.setAttribute("id", "table-values");
        table.appendChild(tr);
        table.appendChild(tbody);
        populateTable(resolved, Object.keys(resolved[0]));
    }
}

// Function for populating the table
function populateTable(users, keys) {
    var tbody = document.getElementById("table-values");
    tbody.innerHTML = ''; // remove existing values
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");
        keys.forEach((key) => {
            var td = document.createElement("td");
            if (key === "name") {
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
            if (key === "email") {
                td.innerHTML = users[i][key];
            } else if (key === "dateSubmitted") {
                td.innerHTML = users[i][key];
            } else if (key === "reason") {
                td.innerHTML = users[i][key];
            } else if (key === "dateResolved") {
                td.innerHTML = users[i][key];
            } else if (key === "actions") {
                var buttonDiv = document.createElement("div");
                buttonDiv.classList.add("button-div");

                var resolveButton = document.createElement("button");
                resolveButton.innerHTML = "Resolve";
                resolveButton.classList.add("accept-btn");
                resolveButton.onclick = () => acceptDeferral(users[i]);

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.classList.add("decline-btn");
                deleteButton.onclick = () => declineDeferral(users[i]);
                
                buttonDiv.appendChild(resolveButton);
                buttonDiv.appendChild(deleteButton);

                td.appendChild(buttonDiv);
            }
            tr.appendChild(td);
        });
        tbody.append(tr);
    }
}

// Functions for handling resolve and delete actions
function acceptDeferral(deferral) {
    console.log("Resolved:", deferral);
}
    
function declineDeferral(deferral) {
    console.log("Deleted:", deferral);
}

// Search listener
document.getElementById("search-input").addEventListener("input", search);

// Tab click listeners
document.getElementById("pending-tab").addEventListener("click", () => {
    switchTab("pending-tab");
    var secondary = document.getElementsByClassName("header-main-secondary");
    secondary[0].innerHTML = "/ Pending";
    typeFlag = "pending";
    updateTable(typeFlag);
});

document.getElementById("resolved-tab").addEventListener("click", () => {
    switchTab("resolved-tab");
    var secondary = document.getElementsByClassName("header-main-secondary");
    secondary[0].innerHTML = "/ Resolved";
    typeFlag = "resolved";
    updateTable(typeFlag);
});

// Initial display
updateTable(typeFlag);
