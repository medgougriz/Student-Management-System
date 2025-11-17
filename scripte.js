var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var score = document.getElementById('score')
var add = document.getElementById('add')
var UT = 'add'
var D = 'nd'
var num;
var em ;
var Database
if (localStorage.student != null) {
    Database = JSON.parse(localStorage.student)
} else {
    Database = [];
}

// evant for verification fullname
fullname.addEventListener("input",function string(){
    fullname.value = fullname.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '');
})


// event for verification score
score.addEventListener("input", function number() {
    if (isNaN(score.value) === true || Number(score.value) < 0 || Number(score.value) > 100) {
        score.setAttribute('disabled', true);
        score.value = '';
        D = 'd'
    }
    if (D === 'd') {
        score.removeAttribute('disabled');
        D = 'nd'
    }
})


// create
function create() {
    var student = {
        fullname: fullname.value,
        email: email.value,
        score: score.value,
    };

    // event for verification email

    if (!email.value.includes("@") || !email.value.includes(".")){
        em = "fl"
    } else {
        let atIndex = email.value.indexOf("@");
        let dotIndex = email.value.indexOf(".", atIndex);
        
        if (dotIndex > atIndex) {
            em = "tr";
        } else {
             em = "fl";
        }
    }

    if (fullname.value !== '' && email.value !== '' && score.value !== '' && em ==='tr') {
        if (UT === 'add') { Database[Database.length] = student }
        else {
            Database[num] = student
            UT = 'add'
            document.getElementById('Add').innerHTML = 'Add'
        }
    }

    

    localStorage.setItem('student', JSON.stringify(Database))
    read()
    clean()
}

// read
function read() {
    var table = ''
    for (var i = 0; i < Database.length; i++) {
        table += `<tr>
                    <td>${i + 1}</td>
                    <td>${Database[i].fullname}</td>
                    <td>${Database[i].email}</td>
                    <td>${Database[i].score}</td>
                    <td><button onclick="update(${i})">Update</button></td>
                    <td><button onclick="deletee(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('tbody').innerHTML = table
    // button of search

    if (JSON.parse(localStorage.student).length === 0) {
        document.getElementById('Search').style.display = 'none'
    }
    else {
        document.getElementById('Search').style.display = 'block';

    }
}
read()

// delete
function deletee(i) {
    Database.splice(i, 1)
    localStorage.student = JSON.stringify(Database);
    read()
}

// update
function update(i) {
    fullname.value = Database[i].fullname
    email.value = Database[i].email
    score.value = Database[i].score
    document.getElementById('Add').innerHTML = 'Update'
    UT = 'update'
    num = i
}
// clean
function clean() {
    fullname.value = ''
    email.value = ''
    score.value = ''
}



//function of search
function search(value){
    let table1 = ''
    for(var a = 0;a<Database.length;a++){

        if(Database[a].fullname.includes(value)){
            table1 += `<tr>
                    <td>${a + 1}</td>
                    <td>${Database[a].fullname}</td>
                    <td>${Database[a].email}</td>
                    <td>${Database[a].score}</td>
                    <td><button onclick="update(${a})">Update</button></td>
                    <td><button onclick="deletee(${a})">Delete</button></td>
                </tr>`
        }
    }
    document.getElementById('tbody').innerHTML = table1
}

function Searchfn(){
    document.getElementById('Searchfn').style.display = 'block'
}