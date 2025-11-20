const button = document.getElementById('testBtn');
const inputTextArea = document.getElementById('inputText');
const resultDiv = document.getElementById('result');

const regexMap = {
    email: '^[a-z_0-9]+@[a-z]+\.[a-z]+\.*[a-z]*$'
};

function testRegex(pattern) {
    try {
        const regex = new RegExp(pattern);
        const testString = inputTextArea.value.trim();
        if (regex.test(testString)) {
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
    if (!currentRegexType) {
        return;
    }
    switch(currentRegexType.value) {
        case 'email': testRegex(regexMap.email); break;
        default: break;
    }
});

inputTextArea.addEventListener('input', function() {
    resultDiv.innerText = '';
    resultDiv.classList.remove('success');
    resultDiv.classList.remove('error');
})