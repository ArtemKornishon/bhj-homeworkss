document.addEventListener("DOMContentLoaded", function () {
    const fontSizeElements = document.querySelectorAll(".font-size");
  
    fontSizeElements.forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault();
  
        fontSizeElements.forEach(function (el) {
          el.classList.remove("font-size_active");
        });
  
        const newSize = element.getAttribute("data-size");
  
        const bookElement = document.getElementById("book");
        bookElement.classList.remove("book_fs-big", "book_fs-small");
        if (newSize === "big") {
          bookElement.classList.add("book_fs-big");
        } else if (newSize === "small") {
          bookElement.classList.add("book_fs-small");
        }
  
        element.classList.add("font-size_active");
      });
    });
  });