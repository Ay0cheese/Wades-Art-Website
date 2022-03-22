
// TODO: //
//1: put a drop down in the product type area, and stype the <p> like the others//


const inputs = document.querySelectorAll('input');

const patterns = {
    fName:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,  
    email:/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/,
    phone:/^\d{3}(-)?\d{3}(-)?\d{4}$/gi,
    description:/^[ A-Za-z0-9_@./!#&$+-]*$/ 
};

// validation function//
function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    };
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e,target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});