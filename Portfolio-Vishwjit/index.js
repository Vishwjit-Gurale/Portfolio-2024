let spin = document.querySelector("#spin");

let textLoad = () => {
  setTimeout(() => {
    spin.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    spin.textContent = "Full Stack Developer";
  }, 3000);
};
textLoad();
setInterval(textLoad, 6000);

//todo  I'am text load complete
