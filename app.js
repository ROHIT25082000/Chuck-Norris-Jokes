const button = document.querySelector('.get-jokes');
button.addEventListener('click', getJokes);



function getJokes(e) {

    const numOfJokes = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    let jokes;  
    xhr.open('GET',`http://api.icndb.com/jokes/random/${numOfJokes}`,true);
    
    xhr.onload = function() {
        if(this.status === 200) {

            const ulList = document.querySelector('.jokes');

            jokes = JSON.parse(this.responseText);
            console.log(jokes);
            for(let i = 0; i < jokes.value.length; ++i) {
                const element = document.createElement('li');
                element.innerHTML = jokes.value[i].joke;
                ulList.append(element);
            }
        }
    }
    xhr.send();

    e.preventDefault();
}