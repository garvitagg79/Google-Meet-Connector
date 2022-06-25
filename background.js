localStorage.setItem("count_value", "0");
localStorage.setItem("count_icon_value", "0");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkButton1 = document.getElementById("test_button1");
    var checkButton3 = document.getElementById("test_button3");
    var checkform = document.getElementById("option_select");
    var checkimage = document.getElementById("image_click");
    var info_icon = document.getElementById("image_click_2");

    checkButton1.addEventListener(
      "click",
      function () {
        option_dekhle();
      },
      false
    );

    checkButton3.addEventListener(
      "click",
      function () {
        submit_form();
      },
      false
    );

    info_icon.addEventListener(
      "click",
      function () {
        var count_icon_value =
          parseInt(localStorage.getItem("count_icon_value")) + 1;
        localStorage.setItem("count_icon_value", count_icon_value.toString());
        icon_value(count_icon_value);
      },
      false
    );

    checkform.addEventListener(
      "change",
      function () {
        display();
      },
      false
    );

    checkimage.addEventListener(
      "click",
      function () {
        var count = parseInt(localStorage.getItem("count_value")) + 1;
        localStorage.setItem("count_value", count.toString());
        change_background(count);
      },
      false
    );
  },
  false
);

function display() {
  var option_selected = document.getElementById("option_select").value;
  if (option_selected == "Join New Meet") {
    document.getElementById("test_button2").style.display = "block";
    document.getElementById("test_button3").style.display = "none";
    document.getElementById("test_button1").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("image_click_2").style.display = "none";
  } else if (option_selected == "Join through key") {
    document.getElementById("test_button3").style.display = "block";
    document.getElementById("test_button2").style.display = "none";
    document.getElementById("test_button1").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("image_click_2").style.display = "none";
  } else {
    document.getElementById("test_button3").style.display = "none";
    document.getElementById("test_button2").style.display = "none";
    document.getElementById("test_button1").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("image_click_2").style.display = "block";
  }
}

function option_dekhle() {
  alert("Please Select Option");
}

function submit_form() {
  var form_content = document.getElementById("form").elements.item(0).value;

  if (form_content.slice(0, 24) == "https://meet.google.com/") {
    document.getElementById("join_key").href =
      "https://meet.google.com/" + form_content.slice(24);
  } else if (form_content.slice(0, 16) == "meet.google.com/") {
    document.getElementById("join_key").href =
      "https://meet.google.com/" + form_content.slice(16);
  } else {
    document.getElementById("join_key").href =
      "https://meet.google.com/" + form_content;
  }
}

function change_background(count_value) {
  if (count_value % 7 == 0) {
    change_background_1();
  } else if (count_value % 7 == 1) {
    change_background_2();
  } else if (count_value % 7 == 2) {
    change_background_3();
  } else if (count_value % 7 == 3) {
    change_background_4();
  } else if (count_value % 7 == 4) {
    change_background_5();
  } else if (count_value % 7 == 5) {
    change_background_6();
  } else if (count_value % 7 == 6) {
    change_background_7();
  }
}

function change_background_1() {
  document.body.style.backgroundColor = "#E27A7A";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #E27A7A 0%, #DD6A6A  51%, #DD5B5B  100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#703131";
  document.getElementById("test_button2").style.borderRadius = "5px";

  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #E27A7A 0%, #DD6A6A  51%, #DD5B5B  100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#703131";
  document.getElementById("test_button3").style.borderRadius = "5px";
}

function change_background_2() {
  document.body.style.backgroundColor = "#D89366";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #D89366 0%, #BB5F2C  51%, #AF4D16  100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("test_button2").style.borderRadius = "5px";
  document.getElementById("icon").style.color = "#7c4c2c";
  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #D89366 0%, #BB5F2C  51%, #AF4D16  100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#7c4c2c";
  document.getElementById("test_button3").style.borderRadius = "5px";
}
function change_background_3() {
  document.body.style.backgroundColor = "#CFCD5E";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #CFCD5E 0%, #BFBD40 51%, #B4B127  100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("test_button2").style.borderRadius = "5px";
  document.getElementById("icon").style.color = "#656429";
  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #CFCD5E 0%, #BFBD40 51%, #B4B127  100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#656429";
  document.getElementById("test_button3").style.borderRadius = "5px";
}
function change_background_4() {
  document.body.style.backgroundColor = "#7AE2A0";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #7AE2A0 0%, #54C87E 51%, #37BD68 100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#2a6d43";
  document.getElementById("test_button2").style.borderRadius = "5px";
  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #7AE2A0 0%, #54C87E 51%, #37BD68 100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#2a6d43";
  document.getElementById("test_button3").style.borderRadius = "5px";
}
function change_background_5() {
  document.body.style.backgroundColor = "#B77AE2";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #B77AE2 0%, #9950CD 51%, #8631C2 100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("test_button2").style.borderRadius = "5px";
  document.getElementById("icon").style.color = "rgb(62, 3, 90)";
  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #B77AE2 0%, #9950CD 51%, #8631C2 100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "rgb(62, 3, 90)";
  document.getElementById("test_button3").style.borderRadius = "5px";
}
function change_background_6() {
  document.body.style.backgroundColor = "#7A8CE2";
  document.getElementById("test_button2").style.backgroundImage =
    "linear-gradient(to right, #5d72cc 0%, #294c77  51%, #4263af  100%)";
  document.getElementById("test_button2").style.transition = "0.5s";
  document.getElementById("test_button2").style.backgroundSize = "200% auto";
  document.getElementById("test_button2").style.backgroundColor = "white";
  document.getElementById("test_button2").style.borderRadius = "5px";
  document.getElementById("icon").style.color = "#2f3b76";
  document.getElementById("test_button3").style.backgroundImage =
    "linear-gradient(to right, #5d72cc 0%, #294c77  51%, #4263af  100%)";
  document.getElementById("test_button3").style.transition = "0.5s";
  document.getElementById("test_button3").style.backgroundSize = "200% auto";
  document.getElementById("test_button3").style.backgroundColor = "white";
  document.getElementById("icon").style.color = "#2f3b76";
  document.getElementById("test_button3").style.borderRadius = "5px";
}
function change_background_7() {
  modal();
}

function icon_value(count_icon) {
  if (count_icon % 2 == 1) {
    document.getElementById("slide-right").style.display = "block";
    document.getElementById("slide-right").style.animation = "slide-right 1.5s";
  } else {
    document.getElementById("slide-right").style.display = "none";
  }
}

function modal() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
