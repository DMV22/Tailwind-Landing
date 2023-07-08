function burgerMenu() {
  const menu = document.querySelector("#menu");
  const burger = document.querySelector(".burger");

  function hideMenu() {
    menu.classList.add("hidden");
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  window.addEventListener("resize", hideMenu);
}
burgerMenu();

// Dark Mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const modeBtn = document.querySelector("#mode");

modeBtn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");

  if (document.querySelector("html").classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});
