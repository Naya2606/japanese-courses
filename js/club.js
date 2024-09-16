//шапка

let breakpoint1024 = window.matchMedia("(max-width: 1024px)");
let btnHeadNode = document.querySelector(`.main-page__header_button`);

if (breakpoint1024.matches) {
    btnHeadNode.classList.remove(`main-page__header_button-none`);

}

let headMobNode = document.querySelector(`.main-page__header_links-mobile`);
let headerNode = document.querySelector(`.main-page__header`);
btnHeadNode.addEventListener(`click`, function () {
    btnHeadNode.classList.toggle(`main-page__header_button-close`);
    headMobNode.classList.toggle(`main-page__header_links-mobile-none`);
});

let headLink1Node = document.querySelector(`.main-page__header_link-mobile-1`);
let headLink2Node = document.querySelector(`.main-page__header_link-mobile-2`);
let headLink3Node = document.querySelector(`.main-page__header_link-mobile-3`);
let headLink4Node = document.querySelector(`.main-page__header_link-mobile-4`);
let headLink5Node = document.querySelector(`.main-page__header_link-mobile-5`);
let headLink6Node = document.querySelector(`.main-page__header_link-mobile-6`);
function clickLink() {
    btnHeadNode.classList.toggle(`main-page__header_button-close`);
    headMobNode.classList.toggle(`main-page__header_links-mobile-none`);
}
headLink1Node.addEventListener(`click`, function () {
    clickLink()
});
headLink2Node.addEventListener(`click`, function () {
    clickLink()
});
headLink3Node.addEventListener(`click`, function () {
    clickLink()
});
headLink4Node.addEventListener(`click`, function () {
    clickLink()
});
headLink5Node.addEventListener(`click`, function () {
    clickLink()
});
headLink6Node.addEventListener(`click`, function () {
    clickLink()
});

let docNode = document.querySelector(`html`);

let btnClubPageNode = document.querySelector(`.club-page__promo_button`);
let popClubPageNode = document.querySelector(`.pop-up__club-request`);
let btnPopClose5Node = document.querySelector(`.pop-up__cross-button-5`);

btnClubPageNode.addEventListener(`click`, function () {
    popClubPageNode.classList.toggle(`pop-up__club-request`);
    docNode.classList.add(`document-hidden`);
});

btnPopClose5Node.addEventListener(`click`, function () {
    popClubPageNode.classList.toggle(`pop-up__club-request`);
    docNode.classList.toggle(`document-hidden`);
});