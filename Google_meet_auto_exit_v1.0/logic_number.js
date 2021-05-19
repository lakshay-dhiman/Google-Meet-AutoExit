function exitClass(number) {
  number_exit = setInterval(function () {
    if (
      parseInt(document.getElementsByClassName("wnPUne")[0].innerHTML) < number
    ) {
      document.getElementsByClassName('U26fgb')[2].click();
      clearInterval(number_exit);

    }
  }, 1000);
}

if (localStorage.getItem("pass") == "yes") {
  exitClass(number);
  localStorage.removeItem("pass");
}

if (localStorage.getItem("delete") == "yes") {
  clearInterval(number_exit);
  localStorage.removeItem("delete");
}
