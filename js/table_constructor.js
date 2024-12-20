document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-item-form");
    const tableBody = document.querySelector("#order-table tbody");

    function deleteRow(event) {
        const row = event.target.closest("tr");
        row.remove();
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("dessert-name").value;
        const quantity = parseFloat(document.getElementById("dessert-quantity").value);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td><button type="button" class="delete-row">Удалить</button></td>
        `;

        row.querySelector(".delete-row").addEventListener("click", deleteRow);

        tableBody.appendChild(row);

        form.reset();
    });
});
