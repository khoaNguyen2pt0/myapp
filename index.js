const hello = name => {
  return `Welcome to our site, ${name}`;
};

module.exports = { sayHello: hello };
console.log(hello("Professor Walker"));
