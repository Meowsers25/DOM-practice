// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf);

// let books = document.querySelector('#book-list li .name');
// // console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// // console.log(books);

// books.forEach(function(book){
// 	console.log(book);
// });

// let books = document.querySelectorAll('#book-list li .name');

//you dont need to make an array with querySelectorAll
// books.forEach(function(book) {
// 	book.textContent += ' (book title)';
// });

// const bookList = document.querySelector('#book-list');
// // console.log(bookList.innerHTML);
//changes all HTML into the h2
// // bookList.innerHTML = '<h2>Books and More Books</h2>';
//This appends to the end
// bookList.innerHTML += '<p>This is how you add HTML</p>';

//Working with nodes
// const banner = document.querySelector('#page-banner');
// console.log(banner.nodeType);
// console.log(banner.nodeName);
// console.log(banner.hasChildNodes());

// const cloneNode = banner.cloneNode(true);//true clones children / false just the div
// console.log(cloneNode);

// const bookList = document.querySelector('#book-list');
// console.log(bookList.parentNode);
// console.log(bookList.children);

// console.log(bookList.nextElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += "<br>Too cool!!"

// let h2 = document.querySelector('#book-list h2');

// h2.addEventListener('click', function(e){
// 	console.log(e.target);
// 	console.log(e);
// });

// let btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(function(btn){
// 	btn.addEventListener('click', function(e){
// 		const li = e.target.parentElement;
// 		li.parentNode.removeChild(li);
// 	})
// });


//delete books -- this is a better way than above because of event bubbling
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	// console.log(value);

	//create elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	//add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	//add classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');

	//append to DOM
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);

	document.getElementById('add-book').reset();
});

//hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e) {
	if(hideBox.checked){
		list.style.display = "none";
	} else {
		list.style.display = "initial";
	}
});

//search books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {
	const term = e.target.value.toLowerCase();
	const books = list.querySelectorAll('li');
	books.forEach(function(book){
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	})

});