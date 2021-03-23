const toggleNavButton = () => {
  const titleButton = document.querySelectorAll("#navLink");

  titleButton.forEach(function (button) {
    if (button.style.display === "revert") {
      button.style.display = "none";
    } else {
      button.style.display = "revert";
    }
  });
};
