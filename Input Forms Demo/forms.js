const text = document.querySelector('#test');
const textError = document.querySelector('#test-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
    textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
output.textContent = salary.value;
});

