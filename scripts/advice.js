//get advice from the advice slip API
const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    console.log(data);
};

getAdvice();
