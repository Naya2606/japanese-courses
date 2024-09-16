


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

//поп ап на страницах о курсах
let btnCoursPageNode = document.querySelector(`.club-page__promo_button`);
let popCoursPageNode = document.querySelector(`.pop-up__course-page`);
let btnPopClose4Node = document.querySelector(`.pop-up__cross-button-4`);

btnCoursPageNode.addEventListener(`click`, function () {
    popCoursPageNode.classList.toggle(`pop-up__course-page`);
    docNode.classList.add(`document-hidden`);
});

btnPopClose4Node.addEventListener(`click`, function () {
    popCoursPageNode.classList.toggle(`pop-up__course-page`);
    docNode.classList.toggle(`document-hidden`);
});


let btnsCoursPageNode = document.querySelectorAll(`.course-page__course-price_button`);
let descCoursPopNode = document.querySelector(`.pop-up__course_description`);

let descCoursPop1Node = document.querySelector(`.pop-up__course_description-1`).innerText;
let descCoursPop2Node = document.querySelector(`.pop-up__course_description-2`).innerText;
let descCoursPop3Node = document.querySelector(`.pop-up__course_description-3`).innerText;

let priceCours1Node = document.querySelector(`.course-page__course-price_price-1`).innerText;
let priceCours2Node = document.querySelector(`.course-page__course-price_price-2`).innerText;
let priceCours3Node = document.querySelector(`.course-page__course-price_price-3`).innerText;




for (let i = 0; i < btnsCoursPageNode.length; i++) {
    btnsCoursPageNode[i].addEventListener(`click`, function () {
        popCoursPageNode.classList.remove(`pop-up__course-page`);
        docNode.classList.toggle(`document-hidden`);
    });
    btnsCoursPageNode[0].addEventListener(`click`, function () {
        descCoursPopNode.innerHTML = `<ul>
            <li>${descCoursPop1Node}</li>
            <li>${descCoursPop2Node}</li>
            <li>${descCoursPop3Node}</li>
            <li>стоимость: ${priceCours1Node} / мес.</li>
        </ul>`
    });
    btnsCoursPageNode[1].addEventListener(`click`, function () {
        descCoursPopNode.innerHTML = `<ul>
            <li>${descCoursPop1Node}</li>
            <li>${descCoursPop2Node}</li>
            <li>${descCoursPop3Node}</li>
            <li>стоимость: ${priceCours2Node} / 2 мес.</li>
        </ul>`
    });
    btnsCoursPageNode[2].addEventListener(`click`, function () {
        descCoursPopNode.innerHTML = `<ul>
            <li>${descCoursPop1Node}</li>
            <li>${descCoursPop2Node}</li>
            <li>${descCoursPop3Node}</li>
            <li>стоимость: ${priceCours3Node} / 3 мес.</li>
        </ul>`
    });

}