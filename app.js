
function start() {
    let totalsum = 0;
    let message = document.querySelector('.game h1');
    let sum = document.querySelector('.sum ');
    let card_res = document.querySelector('#card-res');
    let sum_res = document.querySelector('#sum-res');
    let new_butt = document.querySelector('.new');
    let startagain_butt = document.querySelector('.start');
    initializing();
    startagain_butt.addEventListener('click', () => initializing());
    new_butt.addEventListener('click', function () {
        let card = getRandom();
        if (card >= 10) card = 10;
        totalsum += card;
        card_res.textContent += '---' + card;
        sum_res.textContent = totalsum;
        if (totalsum > 21) {
            message.textContent = 'You are out';
            new_butt.style.display = "none";
        }
        else if (totalsum == 21) {
            message.textContent = 'Congratulations! You won a BlackJack';
            new_butt.style.display = "none";
        }
        else message.textContent = 'You are just short!';
    });


    function initializing() {
        new_butt.style.display = 'inline';
        let card1 = getRandom();
        if (card1 >= 10) card1 = 10;
        let card2 = getRandom();
        if (card2 >= 10) card2 = 10;
        totalsum=card1+card2
        message.textContent = "Let's Play";
        sum_res.textContent = totalsum;
        // console.log(card1 + " " + card2);
        
        card_res.textContent = card1 + '---' + card2;
        sum_res.textContent = totalsum;
    }

    






    function getRandom(){
        return Math.floor(Math.random() * 14);
    }
}



start();