// fixed data
var typeFlag = "application"; // initial state

const applications = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        applicationForm: "jdoe_appli.pdf",
        mentorDate: "2023-05-01",
        actions: "..."
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        applicationForm: "alovelace_appli.pdf",
        mentorDate: "2023-06-01",
        actions: "..."
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        applicationForm: "gboole_appli.pdf",
        mentorDate: "2023-07-01",
        actions: "..."
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        applicationForm: "bgates_appli.pdf",
        mentorDate: "2023-08-01",
        actions: "..."
    }
];

const deferrals = [
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

// Function for implementing search functionality
function search() {
    var keys = Object.keys(applications[0]);
    var users = applications;

    if (typeFlag === "deferral") {
        keys = Object.keys(deferrals[0]);
        users = deferrals;
    }

    var search_input = document.getElementById("search-input").value;
    var filtered_result = users.filter((user) => {
        return user["name"].toLowerCase().includes(search_input.toLowerCase());
    });
    console.log(filtered_result);
    populateTable(filtered_result, keys);
}

function switchTab(active) {
    let tabs = ["application-tab", "deferral-tab"];

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
    if (type === "application") {
        const list = ["NAME", "EMAIL", "APPLICATION FORM", "MENTOR DATE", "ACTIONS"];
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
        populateTable(applications, Object.keys(applications[0]));
    } else {
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
        populateTable(deferrals, Object.keys(deferrals[0]));
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
            if (key === "applicationForm") {
                var link = document.createElement("a");
                link.innerHTML= users[i][key];
                link.setAttribute("href", "../../assets/sample.pdf");
                link.setAttribute("target", "_blank");
                td.appendChild(link);
            } else if (key === "mentorDate") {
                td.innerHTML = users[i][key];
            } else if (key === "email") {
                td.innerHTML = users[i][key];
            } else if (key === "dateSubmitted") {
                td.innerHTML = users[i][key];
            } else if (key === "reason") {
                td.innerHTML = users[i][key];
            } else if (key === "actions") {
                var buttonDiv = document.createElement("div");
                buttonDiv.classList.add("button-div");

                var acceptButton = document.createElement("button");
                acceptButton.innerHTML = "Accept";
                acceptButton.classList.add("accept-btn");
                acceptButton.onclick = () => acceptDeferral(users[i]);

                var declineButton = document.createElement("button");
                declineButton.innerHTML = "Decline";
                declineButton.classList.add("decline-btn");
                declineButton.onclick = () => declineDeferral(users[i]);
                
                buttonDiv.appendChild(acceptButton);
                buttonDiv.appendChild(declineButton);

                td.appendChild(buttonDiv)
            }
            tr.appendChild(td);
        });
        tbody.append(tr);
    }
}

// Functions for handling accept and decline actions
function acceptDeferral(deferral) {
    console.log("Accepted:", deferral);

}

function declineDeferral(deferral) {
    console.log("Declined:", deferral);

}

// Search listener
document.getElementById("search-input").addEventListener("input", search);

// Tab click listeners
document.getElementById("application-tab").addEventListener("click", () => {
    switchTab("application-tab");
    var secondary = document.getElementsByClassName("header-main-secondary");
    secondary[0].innerHTML = "/ Application";
    typeFlag = "application";
    updateTable(typeFlag);
});

document.getElementById("deferral-tab").addEventListener("click", () => {
    switchTab("deferral-tab");
    var secondary = document.getElementsByClassName("header-main-secondary");
    secondary[0].innerHTML = "/ Deferral";
    typeFlag = "deferral";
    updateTable(typeFlag);
});

// Initial display
updateTable(typeFlag);
