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

    // text += "<tr><td><svg class='svg-icon' viewBox='0 0 20 20'> <path d='M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'></path></svg>" + users[i].Name + "</td > <td>" + users[i].Email + "</td>";



    text += "<tr><td><svg class='svg-icon' viewBox='0 0 20 20'><path fill='none' d='M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657 C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202 c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z'></path><path fill='none' d='M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678 c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801 C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927 C6.623,9.707,3.848,12.326,3.597,15.639z'></path><path fill='none' d='M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567 C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741 c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z'></path></svg>" + users[i].Name + "</td > <td>" + users[i].Email + "</td>";




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