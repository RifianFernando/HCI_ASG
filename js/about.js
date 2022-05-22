
const join = async () => {
	const email = document.querySelector("#email_join").value;
    let valid = true;
    if(email.length == 0){
        alert("Email must be filled");
        return;
    }
    if(email.includes("@") == false){
        alert("Email must contain @");
        return
    }
    if(email.includes(".") == false){
        alert("Email must contain .");
        return
    }
    if(email.indexOf(" ") >= 0){
        alert("Email cannot contain spaces");
        return
    }
    if(valid == true){
        alert("We will send our latest news to your email");
    }
};