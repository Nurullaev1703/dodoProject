const setInfo = () => {
    let header = document.querySelector("header .container");
    header.innerHTML += setHeaderContent(user);
};
setInfo()