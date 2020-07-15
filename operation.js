var menu = true;

var users = [{ Id: 0, Name: "Palak Partani", Email: "ppartani@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 1, Name: "Shri Partani", Email: "shri@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 2, Name: "Puji Partani", Email: "puji@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 3, Name: "Pallavi Partani", Email: "plvi@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 4, Name: "Shri Partani", Email: "shri@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 5, Name: "Puji Partani", Email: "puji@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 6, Name: "Pallavi Partani", Email: "plvi@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
{ Id: 7, Name: "Shri Partani", Email: "shri@gmail.com", Status: "Active", Type: "User", LastSeen: "2d Ago", Permission: "Valid" },
];

var text = "";
var i;

text += "<table>";

text += "<tr><th>Name</th><th>Email</th><th>Status</th><th>Type</th><th>Last Login</th><th>Permission</th><th></th></tr> ";

for (i = 0; i < users.length; i++) {

    // text += "<tr><td><svg class='svg-icon' viewBox='0 0 20 20'> <path d='M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'></path></svg>" + users[i].Name + "</td > <td>" + users[i].Email + "</td>";

    text += "<tr><td style='color: blueviolet'>";
    text += "<img src='img/user.svg'>";
    text += "&nbsp;&nbsp;" + users[i].Name + "</td > <td>" + users[i].Email + "</td>";

    if (users[i].Status.match("Active")) {
        text += "<td><input class='statusButton' type='button' button name='active' value='Active' id='btn' onclick='changeStatus(" + i + ",`InActive`)'></td>";

    }
    if (users[i].Status.match('InActive')) {
        text += "<td><input class='statusButton' type='button' button name='active' value='InActive' id='btn' onclick='changeStatus(" + i + ",`Active`)'></td>";

    }
    text += "<td>" + users[i].Type + "</td><td>" + users[i].LastSeen + "</td><td>" + users[i].Permission + "</td><td>...  </td></tr>";
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
    textNew += "<tr><th> Name</th><th>Email</th> <th>Status</th><th>Role</th><th>Last Login</th><th>Permission</th><th></th> </tr > ";
    for (i = 0; i < users.length; i++) {

        textNew += "<tr><td style='color: blueviolet'>";
        textNew += "<img src='img/user.svg'>";
        textNew += "&nbsp;&nbsp;" + users[i].Name + "</td > <td>" + users[i].Email + "</td>";

        if (users[i].Status == "Active") {
            textNew += "<td><input class='statusButton' type='button' button name='active' value='Active' id='btn' onclick='changeStatus(" + i + ",`InActive`)'></td>";

        }
        if (users[i].Status == "InActive") {
            textNew += "<td><input class='statusButton' type='button' button name='active' value='InActive' id='btn' onclick='changeStatus(" + i + ",`Active`)'></td>";

        }
        textNew += "<td>" + users[i].Type + "</td><td>" + users[i].LastSeen + "</td><td>" + users[i].Permission + "</td><td>...</td></tr>";
    }
    document.getElementById("table").innerHTML = textNew;
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