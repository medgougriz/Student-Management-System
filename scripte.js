var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var score = document.getElementById('score')
var add = document.getElementById('add')
var UT = 'add'
var D = 'nd'
var num;

var Database = []

score.addEventListener("input",function number(){
if(isNaN(score.value) === true || Number(score.value)<0 || Number(score.value)>=100){
    score.setAttribute('disabled',true);
    score.value ='';
    D = 'd'
}
if(D='d'){
    score.removeAttribute('disabled');
    D = 'nd'
}
})


// create
function create(){
    var student = {
        fullname:fullname.value,
        email:email.value,
        score:score.value,
    };

    if(fullname.value !== '' && email.value !== '' && score.value !==''){
        if(UT === 'add'){Database[Database.length] = student}
        else{
            Database[num] = student
            UT = 'update'
            document.getElementById('Add').innerHTML = 'Add'
        }
    }
    read()
    clean ()
}

// read
function read(){
    var table = ''
    for(var i=0; i<Database.length; i++){
        table +=  `<tr>
                    <td>${i+1}</td>
                    <td>${Database[i].fullname}</td>
                    <td>${Database[i].email}</td>
                    <td>${Database[i].score}</td>
                    <td><button onclick="update(${i})">Update</button></td>
                    <td><button onclick="deletee(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('tbody').innerHTML = table
}
// delete
function deletee(i){
Database.splice(i,1)
read()
}

// update
function update(i){
   fullname.value = Database[i].fullname
   email.value =  Database[i].email
   score.value = Database[i].score
   document.getElementById('Add').innerHTML = 'update'
   UT = 'update'
   num = i
}
// clean
function clean (){
    fullname.value = ''
    email.value = ''
    score.value = '' 
}