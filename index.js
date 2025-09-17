const button = document.getElementById('testBtn');
const inputTextArea = document.getElementById('inputText');
const resultDiv = document.getElementById('result');

const regexMap = {
    email: ''
};

function testRegex(pattern) {
    try {
        const regex = new RegExp(pattern);
        if (regex.test(inputTextArea.textContent)) {
            resultDiv.classList.add('success');
            resultDiv.innerText = 'Success';
        } else {
            resultDiv.classList.add('error');
            resultDiv.innerText = 'Incorrect Regex';
        }
    } catch (error) {
        resultDiv.classList.add('error')
        resultDiv.innerText = 'Invalid Regex!'
    }
}

button.addEventListener('click', function() {
    const currentRegexType = document.querySelector('input[name="regexType"]:checked');

    switch(currentRegexType) {
        case 'email': break;
        default: break;
    }
});

inputTextArea.addEventListener('change', function() {
    resultDiv.classList.remove('success');
    resultDiv.classList.remove('error');
})