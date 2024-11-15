/*  your js code here. If applicable */
const addBtn = document.getElementById("submit");
const tbody = document.getElementById("book-list");

addBtn.addEventListener("click", () => {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const isbn = document.getElementById("isbn").value;
	
	const row = document.createElement("tr")

	row.innerHTML = `
	<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete btn btn-danger">X</button></td>
	`
	
	tbody.appendChild(row);

	const delBtn = row.querySelector(".delete");
	delBtn.addEventListener("click", () => {
		row.remove();
	})

document.getElementById("title").value = "";
document.getElementById("author").value = "";
document.getElementById("isbn").value = "";
});