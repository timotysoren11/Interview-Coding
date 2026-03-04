// using callback function
// It takes two arguments 1- name 2- callback function
// callback function is called by name

function greet(name, callback) {
    callback(`Hello, ${name}`);
}

greet('Geek', message => console.log(message));