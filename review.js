document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("review-form");
    const reviewsContainer = document.getElementById("reviews");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

    
        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const reviewText = document.getElementById("review").value.trim();

        if (!name || !rating || !reviewText) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.innerHTML = `
            <h3>${name}</h3>
            <p class="rating">${"⭐".repeat(rating)}</p>
            <p>"${reviewText}"</p>
        `;

        reviewsContainer.prepend(reviewDiv);

        form.reset();
    });
});