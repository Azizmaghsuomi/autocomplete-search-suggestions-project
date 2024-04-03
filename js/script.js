let $ = document;
let autoCompletWrapper = $.querySelector(".search-input");
let searchInputElem = $.querySelector("input");
let autoCompletBox = $.querySelector(".autocom-box");

searchInputElem.addEventListener("keyup", function () {
  let searchValue = searchInputElem.value;

  if (searchValue) {
    autoCompletWrapper.classList.add("active");

    let fillterdWords = suggestions.filter(function (word) {
      return word.toLowerCase().startsWith(searchValue.toLowerCase());
    });

    suggestionWordsGenrator(fillterdWords);
  } else {
    autoCompletWrapper.classList.remove("active");
  }
});

function suggestionWordsGenrator(wordsArray) {
  let listItemArray = wordsArray.map(function (word) {
    return "<li>" + word + "</li>";
  });
  let customWord;
  if (!listItemArray.length) {
    customWord = "<li>" + searchInputElem.value + "</li>";
  } else {
    customWord = listItemArray.join("");
  }

  autoCompletBox.innerHTML = customWord;
  select();
}

function select() {
  let allListItems = autoCompletBox.querySelectorAll("li");

  allListItems.forEach(function (wordItem) {
    wordItem.addEventListener("click", function (event) {
      searchInputElem.value = event.target.textContent;
      autoCompletWrapper.classList.remove("active");
    });
  });
}
