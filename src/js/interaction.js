
const countGlass = document.querySelector(".countGlass--js");

const buttonAdd = document.querySelector(".buttonAdd--js");
const buttonRemove = document.querySelector(".buttonRemove--js");

const warningMessage = document.querySelector(".warningMessage--js");

const key = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(key) == null){
    localStorage.setItem(new Date().toISOString().slice(0, 10), 0);
    countGlass.innerHTML = 0;
} else {
    countGlass.innerHTML = parseInt(localStorage.getItem(key));
}

buttonRemove.addEventListener("click", () => {

    const value = parseInt(countGlass.innerHTML);

    if (value <= 0){
        warningMessage.innerHTML = "No more glasses can be removed, it's below 0!"
    } else {
        const newValue = value - 1;
        countGlass.innerHTML = newValue;
    };

    localStorage.setItem(key, parseInt(countGlass.innerHTML))
});

buttonAdd.addEventListener("click", () => {

    const value = parseInt(countGlass.innerHTML);

    if (warningMessage.innerHTML.length > 1){
        warningMessage.innerHTML = " ";
    }
    const newValue = value + 1;
    countGlass.innerHTML = newValue;

    localStorage.setItem(key, parseInt(countGlass.innerHTML))
})

