let guess = Math.trunc(Math.random() * 20 + 1);
let score = 5;

let Content  = document.querySelector('.title');
let gp = document.querySelector('#g-p');
let gid = document.getElementById('g-id');
let btn  = document.querySelector('.btn');


const trywin = function(msg){
    document.querySelector('.try-win').textContent = msg;
}
const scoree = function(score){
    document.querySelector('.id').textContent = score;
}

const bg = function(color){
    document.querySelector('.try-win').style.backgroundColor = color;
}

const aura = function(fColor){
    Content.style.color  = fColor;
    gid.style.color = fColor;
    gp.style.color = fColor;
}
btn.addEventListener('click',
function() {
    const number = Number(document.querySelector('.input').value);
   
    console.log(number,guess);
    if(!number){
        trywin('Please enter a number');
    }
    else if(number == guess){
        document.querySelector('.number').textContent = guess;
        trywin('You Guess it Right');
        console.log(number);
        score++;
        scoree(score);

    document.querySelector('body').style.backgroundColor = '#B8FFD5'
    bg('#1f8c4c');
   }

   else if (number !== guess){

       if(score> 1){
       document.querySelector('.try-win').textContent = guess < number ? 
       'Too high' : 'To low';
    
       score--;
       scoree(score);
       bg('#FFCBCE');
       document.querySelector('.try-win').style.borderColor = '#FFCBCE'
       }
    
       else{
            Content.textContent = 'You lose!!'
            document.querySelector('.number').textContent = guess;
            document.querySelector('body').style.backgroundColor = 'black'
            aura('white');
            gid.textContent = 'Nope'
            gp.innerText = 'Wrong'
        }
    }

   
});

document.querySelector('.reset').addEventListener('click',
function(){
    score = 5;
    document.querySelector('.id').textContent = score;

    document.querySelector('.input').value = '';
    guess = Math.trunc(Math.random() * 20 +1);
    document.querySelector('.number').textContent = guess; 
    bg('#3C6FFF');
    document.querySelector('body').style.backgroundColor = '#f2f8fc '
    Content.textContent = 'Guess The Number.'
    trywin('meow..')
    document.querySelector('.number').textContent = '?';
    aura('black');
    Content.textContent = 'Guess The Number.';
    gid.textContent = 'I am thinking of a number between 1-20.';
    gp.textContent = 'Can you Guess it?'    
});


// event listener for the enter keypress
document.querySelector('.input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});