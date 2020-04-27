const func = () =>{
    const button = document.getElementById('buttons');
    button.style.background = 'rgb(250,214,214';
    button.style.boxShadow='4px 8px 8px #ccc'
    console.log("clicked");

    value=document.getElementById('inputField').value;
    if(!validateEmail(value)){
        const disp=document.getElementById('parag');
        disp.style.display="block";
    }

    else{
        const disp = document.getElementById('parag');
        disp.style.display = "none";
    }
    
}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
        return false;
    }

    return true;

}