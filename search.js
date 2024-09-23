const searchInput = document.getElementById('search_input');
const searchBtn = document.getElementById('search_btn');
const historyList = document.getElementById('history');
const clearBtn = document.getElementById('clear');

let searchHistory = [];


window.onload = function() {
if (localStorage.getItem('searchHistory')) {
searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
displayHistory();
}
};


searchBtn.addEventListener('click', () => {
const searchTerm = searchInput.value.trim();
if (searchTerm !== "") {
searchHistory.push(searchTerm);
localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
displayHistory();
searchInput.value = "";
}
});


function displayHistory() {
historyList.innerHTML = "";
searchHistory.forEach((term) => {
const li = document.createElement('li');
li.textContent = term;
historyList.appendChild(li);
});
}


clearBtn.addEventListener('click', () => {
searchHistory = [];
localStorage.removeItem('searchHistory');
displayHistory();
});
