const screen = document.getElementById("screen");
const buttons = Array.from(document.getElementsByClassName("value"));

let itemValue = "";

// Get the Number from the button
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    itemValue = e.target.innerText;

    showInScreen();
  });
});

// Show Number on  Screen

const showInScreen = () => {
  screen.innerHTML += itemValue;
};

// Show the result on  Screen

const result = () => {
  try {
    screen.innerHTML = eval(screen.innerHTML);
  } catch (err) {
    alert("wrong arithmetic");
  }
};

// clear the result from Screen
const c = () => {
  screen.innerHTML = "";
};

// remove the last item from Screen
const remove = () => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
};
