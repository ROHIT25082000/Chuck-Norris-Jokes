const button = document.querySelector('.get-jokes');
button.addEventListener('click', getJokes);



function getJokes(e) {

    const numOfJokes = document.querySelector('input[type="number"]').value;
    let jokes = null;
    const ulList = document.querySelector('.jokes');
    while (ulList.lastChild) {
        ulList.removeChild(parent.lastChild);
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.icndb.com/jokes/random/${numOfJokes}`,true);
    
    xhr.onload = function() {
        if(this.status === 200) {

            

            jokes = JSON.parse(this.responseText);
            console.log(jokes);
            for(let i = 0; i < jokes.value.length; ++i) {
                const element = document.createElement('li');
                element.innerHTML = jokes.value[i].joke;
                ulList.append(element);
            }
        }else {
            document.querySelector('body').innerHTML = "ajsdjhasdb";   
        }
    }
    xhr.send();

    e.preventDefault();
}
