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

//Add a click event listener
button.addEventListener('click', () => {
    //Changing the header back to its initial value
    adviceId.innerHTML = "Advice";
    
    //Adding a skeleton loading animation to the page while waiting for content
    advice.innerHTML = `
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
    `;

    //Fetch data from the api when the button is clicked
    getAdvice().then(data => updatUI(data))
    .catch(err => console.log(err));
});