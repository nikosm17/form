const loginForm = document.getElementById("form");
const pass = document.getElementById('password');
const button = document.getElementById('login-btn');

loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const username1= document.querySelector("input[id='username']").value;
    const password1 = pass.value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userinput: username1, passinput: password1 })
    });
    const result = await response.json();

    if(result.success){
        timer("nextpage.html");
            loginForm.classList.remove("login-error");
    } else{
        loginForm.classList.add("login-error");
    }
});

function timer(url){
    let i = 0;
    const tt = setInterval(()=>{
        i++;
        const counter = 3 - i;
        button.innerHTML = 'You will be redirected after: ' + counter;
        if(counter === 0){
            clearInterval(tt);
            window.location.href = url;
            button.innerHTML = 'Login';
        }
    }, 1000);
}