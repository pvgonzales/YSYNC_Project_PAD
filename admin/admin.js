// fixed data
const trainees = [
    {
        name: "John Doe",
        email: "jdoe@up.edu.ph",
        batch: 2023,
        mentor: "NA",
        additionalInfo: "..."
    },
    {
        name: "Ada Lovelace",
        email: "alovelace@up.edu.ph",
        batch: 1999,
        mentor: "NA",
        additionalInfo: "..."
    },
    {
        name: "George Bool",
        email: "gboole@up.edu.ph",
        batch: 2022,
        mentor: "NA",
        additionalInfo: "..."
    },
    {
        name: "Bill Gates",
        email: "bgates@up.edu.ph",
        batch: 2010,
        mentor: "NA",
        additionalInfo: "..."
    }
];

// function for implementing search functionality
function search(){
    var search_input = document.getElementById("search-input").value;
    var tbody = document.getElementById("table-values");
    tbody.innerHTML = '' // remove the existing values since we want to search
    var filtered_result = trainees.filter((trainee) => { // filter the results
        return trainee["name"].toLowerCase().includes(search_input.toLowerCase());
    })
    console.log(filtered_result)
    for (var i = 0; i < filtered_result.length; i++) {
        var tr = document.createElement("tr");

        var nameTd = document.createElement("td");

        var circle = document.createElement("div");
        circle.classList.add("circle");

        var align = document.createElement("div");
        align.classList.add("table-align-picture");
        align.appendChild(circle);
        align.appendChild(document.createTextNode(filtered_result[i]["name"]));

        nameTd.appendChild(align);
        tr.appendChild(nameTd);

        var emailTd = document.createElement("td");
        emailTd.innerHTML = filtered_result[i]["email"];
        tr.appendChild(emailTd);

        var batchTd = document.createElement("td");
        batchTd.innerHTML = filtered_result[i]["batch"];
        tr.appendChild(batchTd);

        var mentorTd = document.createElement("td");
        mentorTd.innerHTML = filtered_result[i]["mentor"];
        tr.appendChild(mentorTd);

        var infoTd = document.createElement("td");
        infoTd.innerHTML = filtered_result[i]["additionalInfo"];
        tr.appendChild(infoTd);

        tbody.appendChild(tr);
    }
}

document.getElementById("search-input").addEventListener("input", search);