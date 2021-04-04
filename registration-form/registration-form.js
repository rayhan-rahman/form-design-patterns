
class Reveal {
    constructor(input) {
        this.input = document.getElementById(input);
        this.createButton();
    }

    createButton() {
        this.revealButton = document.createElement('button');
        this.revealButton.id = "passwordReveal";
        this.revealButton.innerText = "Show";
        this.input.parentNode.appendChild(this.revealButton);
        this.revealButton.addEventListener('click', this.onClick.bind(this));
    }

    onClick(e){
        if (this.input.type === 'password') {
            this.input.type = 'text';
            this.revealButton.innerText = "Hide";
        } else {
            this.input.type = 'password';
            this.revealButton.innerText = "Show";
        }
        e.preventDefault();
    }
}

/*

function PasswordReveal(input){
    this.input = input;
    this.createButton();
}

PasswordReveal.prototype.createButton = function() {
    this.button = $('<button type="button" id="passwordReveal">Show</button>');
    $(this.input).parent().append(this.button);
    this.button.on('click', $.proxy(this, 'onButtonClick'));
}

PasswordReveal.prototype.onButtonClick = function(e) {
    if(this.input.type === 'password') {
        this.input.type = 'text';
        this.button.text('Hide');
    } else {
        this.input.type = 'password';
        this.button.text('Show');
    }
}
*/

// var passwordReveal = new PasswordReveal(document.getElementById('password'));


var passwordReveal = new Reveal('password');