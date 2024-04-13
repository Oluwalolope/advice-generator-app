const button = document.querySelector('button');
const adviceId = document.querySelector('h1');
const advice = document.querySelector('.advice');

const updatUI = (data) => {
    console.log(data);

    //Destructuring properties
    const id = data.slip.id;
    const adviceData = data.slip.advice;

    //update advice ID
    adviceId.innerHTML = `Advice #${id}`;

    //update the advice
    advice.innerHTML = `<p>"${adviceData}"</p>`;
};

//Fetch data from the api when the button is clicked
button.addEventListener('click', () => {
    getAdvice().then(data => updatUI(data))
    .catch(err => console.log(err));
});