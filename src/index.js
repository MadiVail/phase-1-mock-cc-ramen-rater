// write your code here
const url = "http://localhost:3000/"

getRamens = () => {
    fetch(url + "ramens", {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(json => {
        json.forEach(Ramen => {
            viewRamen(Ramen);
        })
    })
}

viewRamen = (ramen) => {
    const menu = document.getElementById("ramen-menu");
    const menuImg = document.createElement("img");
    
    menuImg.addEventListener('click', (e) => {
        e.preventDefault();
        const detailImg = document.getElementById("detail-image");
        const detailName = document.getElementById("detail-name");
        const detailrest = document.getElementById("detail-restaurant");
        const comment = document.getElementById("comment-display");
        const rating = document.getElementById("rating-display");

        detailImg.src = ramen.image;
        detailName.innerHTML = ramen.name;
        detailrest.innerHTML = ramen.restaurant;
        comment.innerHTML = ramen.comment;
        rating.innerHTML = ramen.rating;
    })

    menuImg.src = ramen.image;

    menu.appendChild(menuImg);
}
newRamen = () => {
    const form = document.getElementById("new-ramen");
    const newName = document.getElementById("new-name");
    const newRest = document.getElementById("new-restaurant");
    const newImg = document.getElementById("new-image");
    const newRating = document.getElementById("new-rating");
    const newComment = document.getElementById("new-comment");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRamen = { "name": newName.value, "restaurant": newRest.value, "image": newImg.value, "rating": newRating.value, "comment": newComment.value};
        viewRamen(newRamen);
    })
} 

init = () => {
    getRamens(), newRamen();
}

document.addEventListener("DOMContentLoaded", () => {
    init();
})