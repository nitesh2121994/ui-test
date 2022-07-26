let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateElements = (numArray) => {
    const numberElement = document.getElementById('numbers');
    if (numberElement.innerHTML) {
        numberElement.innerHTML = null;
    }
    numArray.forEach(item => {
        const element = document.createElement('div');
        element.innerText = item;
        element.classList.add('number-item');
        numberElement.appendChild(element);
    })
}


(() => {
    generateElements(numbers);
})()

const shuffleArray = () => {
    numbers = numbers.sort((a, b) => 0.5 - Math.random());
    generateElements(numbers);
}

const sortArray = () => {
    numbers = numbers.sort();
    generateElements(numbers);
}