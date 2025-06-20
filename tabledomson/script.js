async function datafetch() {
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = ""; // Köhnə sətirləri təmizlə

  const response = await fetch("http://localhost:3001/books");
  const data = await response.json();

  data.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.bookname}</td>
      <td>${book.author}</td>
      <td>${book.count}</td>
      <td>${book.price}</td>
      <td>${book.title}</td>
      <td><button class="delete-btn" data-id="${book.id}">Sil</button></td>
    `;
    tableBody.appendChild(row);
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", async () => {
      const bookId = button.getAttribute("data-id");
      const response = await fetch(`http://localhost:3001/books/${bookId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        console.log(`Kitab silindi: ${bookId}`);
        button.closest("tr").remove();
      } else {
        console.error("Kitab silinərkən xəta baş verdi.");
      }
    });
  });

  console.log(data);
}
datafetch();