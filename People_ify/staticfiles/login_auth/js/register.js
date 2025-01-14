document.addEventListener('DOMContentLoaded', () => {
    var isopen = false;

    document.querySelector('.closebtn').onclick = () => {
        if(isopen==false){
            document.getElementById("mySidebar").style.width = "450px";
            isopen = true;
        }
        else if(isopen==true){
            isopen = false;  
            document.getElementById("mySidebar").style.width = "63px";            
        }
    }

    // form submission

    document.querySelector('#form').onsubmit = () => {

        const request = new XMLHttpRequest();

        const fname = document.querySelector('#fname').value;
        const lname = document.querySelector('#lname').value;
        const uname = document.querySelector('#dname').value;
        const email = document.querySelector('#email').value;
        const passwd = document.querySelector('#passwd').value;
       
        request.open('POST', '/register');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.message == "no_mail") {// check for white-spacing of curly braces
                
                const contents = '<div class="alert alert-primary" role="alert">Error! Looks like email already exists."</div>';
                
                document.querySelector('#label-email').value = "";
                document.querySelector('#label-fname').value = "";
                document.querySelector('#label-lname').value = "";
                document.querySelector('#label-uname').value = "";
                document.querySelector('#label-password').value = "";

                document.querySelector('#message').innerHTML = contents;

            } else if (data.message == "no_uname") {
                
                const contents = '<div class="alert alert-primary" role="alert">Error! Looks like Username is already taken."</div>';

                document.querySelector('#label-uname').value = "";
                document.querySelector('#label-password').value = "";
                                
                document.querySelector('#message').innerHTML = contents;

            } else if (data.message == "wrong") {
                const contents = '<div class="alert alert-primary" role="alert">Error! Something went wrong."</div>';

                document.querySelector('#label-email').value = "";
                document.querySelector('#label-fname').value = "";
                document.querySelector('#label-lname').value = "";
                document.querySelector('#label-uname').value = "";
                document.querySelector('#label-password').value = "";

                // window.location.replace("/");
                document.querySelector('#message').innerHTML = contents;
                
            }
        }
        const data = new FormData();
        data.append('fname', fname); 
        data.append('lname', lname);
        data.append('uname', uname);
        data.append('email', email);
        data.append('passwd', passwd);
    
        request.send(data);
        return false;
    }
});