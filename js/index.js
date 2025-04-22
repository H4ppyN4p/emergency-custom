//Dialogs for the cards

const dialog_one = document.querySelector("#dialog-one")
const show_dalog_one = document.querySelector("#show-dialog-one")
const close_dialog_one = document.querySelector("#close-dialog-one")

show_dalog_one.addEventListener("click", () => {
    dialog_one.showModal();
});

close_dialog_one.addEventListener("click", () => {
    dialog_one.close()
}) 

//Dialogs for the articles

const article_dialog_one = document.querySelector("#article-dialog-one")
const show_article_dalog_one = document.querySelector("#show-article-dialog-one")
const close_article_dialog_one = document.querySelector("#close-article-dialog-one")

show_article_dalog_one.addEventListener("click", () => {
    article_dialog_one.showModal();
});

close_article_dialog_one.addEventListener("click", () => {
    article_dialog_one.close()
}) 



const article_dialog_two = document.querySelector("#article-dialog-two")
const show_article_dalog_two = document.querySelector("#show-article-dialog-two")
const close_article_dialog_two = document.querySelector("#close-article-dialog-two")

show_article_dalog_two.addEventListener("click", () => {
    article_dialog_two.showModal();
});

close_article_dialog_two.addEventListener("click", () => {
    article_dialog_two.close()
}) 