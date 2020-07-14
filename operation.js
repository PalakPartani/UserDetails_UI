var menu = true;

var users = [{ Id: 0, Name: "Palak", Email: "ppartani@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 1, Name: "Palak", Email: "ppartani@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 2, Name: "Palak", Email: "ppartani@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 3, Name: "Palak", Email: "ppartani@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" }];

var text = "";
var i;

text += "<table>";
text += "<tr><th> Name</th><th>Email</th> <th>Status</th><th>Type</th><th>Last Login</th><th>Permission</th> </tr > ";

for (i = 0; i < users.length; i++) {
    text += "<tr><td>" + users[i].Name + "</td><td>" + users[i].Email + "</td>";
    if (users[i].Status.match("Active")) {
        text += "<td><input class='statusButton' type='button' button name='active' value='Active' id='btn' onclick='changeStatus(" + i + ",`InActive`)'></td>";

    }
    if (users[i].Status.match('InActive')) {
        text += "<td><input class='statusButton' type='button' button name='active' value='InActive' id='btn' onclick='changeStatus(" + i + ",`Active`)'></td>";

    }
    text += "<td>" + users[i].Type + "</td><td>" + users[i].LastSeen + "</td><td>" + users[i].Permission + "</td></tr>";
}
text += "</table>";
document.getElementById("table").innerHTML = text;
document.getElementById("count").innerHTML = users.length;

function changeStatus(Id, Status) {
    users.map((data) => {
        if (data.Id == Id) {
            data.Status = Status;
        }
    })
    var textNew = "";
    var i;
    textNew += "<table>";
    textNew += "<tr><th> Name</th><th>Email</th> <th>Status</th><th>Role</th><th>Last Login</th><th>Permission</th> </tr > ";
    for (i = 0; i < users.length; i++) {
        textNew += "<tr><td>" + users[i].Name + "</td><td>" + users[i].Email + "</td>";
        if (users[i].Status == "Active") {
            textNew += "<td><input class='statusButton' type='button' button name='active' value='Active' id='btn' onclick='changeStatus(" + i + ",`InActive`)'></td>";

        }
        if (users[i].Status == "InActive") {
            textNew += "<td><input class='statusButton' type='button' button name='active' value='InActive' id='btn' onclick='changeStatus(" + i + ",`Active`)'></td>";

        }
        textNew += "<td>" + users[i].Type + "</td><td>" + users[i].LastSeen + "</td><td>" + users[i].Permission + "</td></tr>";
    }
    document.getElementById("table").innerHTML = textNew;
    // document.getElementById("table").innerHTML += textNew;
    // var s = document.getElementById('btn').innerHTML = 'invalid';
    // return s;
    // if (status.value == "Active") status.value = "Inactive";
    // else elem.value = "Inactive";
}




function menuOption() {
    if (menu) {
        document.getElementById("verticalMenu").style.display = "block";
        menu = false

    } else {
        document.getElementById("verticalMenu").style.display = "none";
        menu = true

    }

}