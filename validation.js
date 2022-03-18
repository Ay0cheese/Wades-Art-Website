const inputs = document.querySelectorAll('input');

const patterns = {
//fName:/^[a-z]$/gix,
    phone:/^\d{10}$/gi,

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