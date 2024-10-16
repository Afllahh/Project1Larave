document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = "adm89";
    const correctPassword = "adm89";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == correctUsername && password == correctPassword){
        alert("Login Berhasil")
        window.location.href = '/';

    }else{
        alert("Username atau password salah")
    }

});