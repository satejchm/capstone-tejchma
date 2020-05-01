function init() {
  let navOpen = false;
  //function to display bars when the screen resolution is a certain width
  $(".bars").click(function (e) {
    if (navOpen) {
      $("nav").css("display", "none");
      navOpen = false;
    } else {
      $("nav").css("display", "flex");
      navOpen = true;
    }
    $("nav").click(function (e) {
      $("nav").css("display", "none");
      navOpen = false;
    });
  });
}

function initNav() {
  //adds the nav links to the page
  navHome();
  navBreeds();
  navDonate();
  navContact();
  siteResources();
  navHomeLogo();
}

//link to home
function navHome() {
  $("#home").click(function (e) {
    $(".content").html(SERVICE.homeContent());
    console.log("Displayed content");
  });
}

//link to home using the logo
function navHomeLogo() {
  $("#logo-home").click(function (e) {
    $(".content").html(SERVICE.homeContent());
    console.log("Displayed content");
  });
}

//link to breeds
function navBreeds() {
  $("#breeds").click(function (e) {
    $(".content").html(SERVICE.breedsContent());
  });
}

//link to donations
function navDonate() {
  $("#donate").click(function (e) {
    $(".content").html(SERVICE.donateContent());
    createDonateMerchContent();
    createDonateFoodContent();
    createDonateModalContent();
  });
}

//opens modal to donate money and get merch
function createDonateMerchContent() {
  $("#donate-merch").click(function (e) {
    e.preventDefault();
    console.log("donate clicked");
    $(".modal").css("display", "flex");
    $(".alert-box").html(SERVICE.donateMerchModalContent());
    donateMerchButton();
  });

  //close modal when you click on cancel or x button
  $(".closeModal").click(function (e) {
    $(".modal").css("display", "none");
  });
}

function donateMerchButton() {
  //when you click donate button it donates and sends info to database
  $("#verify-merch").click(function (e) {
    e.preventDefault();
    let fNameMerch = $("#first-name-merch").val();
    let lNameMerch = $("#last-name-merch").val();
    let cardNumMerch = $("#card-num-merch").val();
    let mOption = $("#merch-option").val();
    let dMerch = $("#donation-amt-merch").val();

    if (
      fNameMerch != "" &&
      lNameMerch != "" &&
      cardNumMerch != "" &&
      mOption != "" &&
      dMerch != ""
    ) {
      SERVICE.addDataMerch(
        fNameMerch,
        lNameMerch,
        cardNumMerch,
        mOption,
        dMerch
      );
      $(".modal").css("display", "none");
      $(".content").html(SERVICE.donateContent());
    } else {
      swal("please finish form to complete donation! ");
    }
  });
}

//modal for food donation
function createDonateFoodContent() {
  $("#donate-food").click(function (e) {
    e.preventDefault();
    console.log("donate clicked");
    $(".modal").css("display", "flex");
    $(".alert-box").html(SERVICE.donateFoodModalContent());
    donateFoodButton();
  });
  //close modal when you click on cancel or x button
  $(".closeModal").click(function (e) {
    $(".modal").css("display", "none");
  });
}

function donateFoodButton() {
  //when you click donate button it donates and sends info to database
  $("#verify-food").click(function (e) {
    e.preventDefault();
    let fNameFood = $("#first-name-food").val();
    let lNameFood = $("#last-name-food").val();
    let cardNumFood = $("#card-num-food").val();
    let fOption = $("#food-option").val();
    let dFood = $("#donation-amt-food").val();

    if (
      //if the string is not empty(someone entered into each input) then it will adData to database and browse page
      fNameFood != "" &&
      lNameFood != "" &&
      cardNumFood != "" &&
      fOption != "" &&
      dFood != ""
    ) {
      SERVICE.addDataFood(fNameFood, lNameFood, cardNumFood, fOption, dFood);
      $(".modal").css("display", "none");
      $(".content").html(SERVICE.donateContent());
    } else {
      swal("please finish form to complete donation! ");
    }
  });
}

function donateMoneyButton() {
  //when you click donate button it donates and sends info to database
  $("#verify-money").click(function (e) {
    e.preventDefault();
    let fName = $("#first-name").val();
    let lName = $("#last-name").val();
    let cardNum = $("#card-num").val();
    let donation = $("#donation-amt").val();

    if (fName != "" && lName != "" && cardNum != "" && donation != "") {
      SERVICE.addDataMoney(fName, lName, cardNum, donation);
      $(".modal").css("display", "none");
      $(".content").html(SERVICE.donateContent());
    } else {
      swal("please finish form to complete donation! ");
    }
  });
}

//modal to send donation
function createDonateModalContent() {
  $("#donate-money").click(function (e) {
    e.preventDefault();
    console.log("donate clicked");
    $(".modal").css("display", "flex");
    $(".alert-box").html(SERVICE.donateModalContent());
    donateMoneyButton();
  });

  //close modal when you click on cancel or x button
  $(".closeModal").click(function (e) {
    $(".modal").css("display", "none");
  });
}

//link to nav
function navContact() {
  $("#contact").click(function (e) {
    $(".content").html(SERVICE.contactContent());
    sendQuestionButton();
    shelterLink();
  });
}

//sends question to database
function sendQuestionButton() {
  //when you click donate button it donates and sends info to database
  $("#verify-question").click(function (e) {
    e.preventDefault();
    let fullName = $("#full-name").val();
    let email = $("#email").val();
    let question = $("#question").val();

    if (fullName != "" && email != "" && question != "") {
      SERVICE.addDataQuestion(fullName, email, question);
      $(".content").html(SERVICE.contactContent());
    } else {
      swal("please finish form to send question! ");
    }
  });
}

//link to site resources
function siteResources() {
  $("#resource-link").click(function (e) {
    $(".content").html(SERVICE.resourcesContent());
  });
}

//link to nearby shelter list
function shelterLink() {
  $("#contact-shelter-button").click(function (e) {
    var url =
      "https://www.dogloversdigest.com/indiana-rescue-shelters-and-organizations/";
    window.open(url, "_self");
  });
}

$(document).ready(function () {
  $(".content").html(SERVICE.homeContent());
  SERVICE.initFirebase(init);
  init();
  initNav();
});
