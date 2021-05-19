function end_meeting(input_time) {
    time_exit = window.setInterval(function () {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var time = h + ":" + m;
    if (time == input_time) {
      document.querySelector('div[aria-label="Leave call"]').click();
      document.querySelector('div[aria-label="Leave call"]').click();
      document.querySelector('div[aria-label="Leave call"]').click();
      document.querySelector('div[aria-label="Leave call"]').click();
      document.querySelector('div[aria-label="Leave call"]').click();
      clearInterval(time_exit);
    }

  }, 1000);
}


if (localStorage.getItem('pass') == 'yes') {
  end_meeting(time_input);
  localStorage.removeItem('pass')
}

if (localStorage.getItem("delete") == "yes") {
  clearInterval(time_exit);
  localStorage.removeItem("delete");
}
