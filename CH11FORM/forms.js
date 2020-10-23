document.getElementById('submit').onclick=function() {

    var doSubmit = validateForm();

    if(doSubmit == false) {

        return false;
    }
}

function validateForm() {
    var nameFirst = document.getElementById('nameFirst');
    var theValue = nameFirst.value;

    if(theValue != "Nick") {

        console.log("will tis fire?");

        var messageHolder = document.getElementById('target');
        messageHolder.style.color = "purple";
        messageHolder.innerHTML = "<h2>PUT MY NAME MAYNEEE!!</h2>";
        nameFirst.select();

        return false;
    }
}