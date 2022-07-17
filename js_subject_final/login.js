const login_form = document.querySelector("#login-form");
const login_id = document.querySelector("#id")
const login_pw = document.querySelector("#pw")

const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERID_KEY = "user_id"; 
const USERPW_KEY = "user_pw";

const savedUserid = localStorage.getItem(USERID_KEY);
const savedUserpw = localStorage.getItem(USERPW_KEY);



function user_login(event)
{
    event.preventDefault();
    login_form.classList.add(HIDDEN_CLASSNAME);
    const user_id = login_id.value;
    const user_pw = login_pw.value;

    if(localStorage.length == 0)
    {
        localStorage.setItem("user_id",user_id);
        localStorage.setItem("user_pw",user_pw);
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);

    if(savedUserid == user_id)
    {   
        if(savedUserpw == user_pw)
        { 
            greeting.innerText = `hello ${savedUserid}`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
            
        }
    }else{
        login_form.classList.remove(HIDDEN_CLASSNAME);
        login_form.addEventListener("submit", user_login);
    }
}

login_form.addEventListener("submit", user_login);





//var login = document.createElement( 'button' );
//var id_input = document.createElement('input');
//var pw_input = document.createElement('input');
//var loginText = document.createTextNode( 'login' );
//const id = document.body.appendChild(id_input);
//const pw = document.body.appendChild(pw_input);
//const btn_click = document.body.appendChild(login);
//id_input.setAttribute("type","text");
//pw_input.setAttribute("type","password");
//login.appendChild(loginText);