
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



//промо блок

let btnFreeNode = document.querySelector(`.main-page__promo_button-try-f-free`);
let popFreeNode = document.querySelector(`.pop-up__free-lesson`);
let btnPopClose1Node = document.querySelector(`.pop-up__cross-button-1`);

let docNode = document.querySelector(`html`);

btnFreeNode.addEventListener(`click`, function () {
    popFreeNode.classList.remove(`pop-up__free-lesson`);
    docNode.classList.add(`document-hidden`);
});

if(btnPopClose1Node) {
    btnPopClose1Node.addEventListener("click",function() {
        popFreeNode.classList.add(`pop-up__free-lesson`);
    docNode.classList.remove(`document-hidden`);
    },true);
}
btnPopClose1Node.addEventListener(`click`, function () {
    popFreeNode.classList.add(`pop-up__free-lesson`);
    docNode.classList.remove(`document-hidden`);
});




//слайдер преподавателей
$(document).ready(function () {
    $('.main-page__teachers_cards').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScrol: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initiaSlide: 0,
        autoplay: false,
        autoplaySpeed: 0,
        draggable: false,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        //медиа
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    initiaSlide: 1
                }
            }
        ],
        mobileFirst: true,
    });
});


//поп ап у преподавателей
let btnTeach1Node = document.querySelector(`.main-page__teachers_button-1`);
let btnTeach2Node = document.querySelector(`.main-page__teachers_button-2`);
let btnTeach3Node = document.querySelector(`.main-page__teachers_button-3`);
let btnTeach4Node = document.querySelector(`.main-page__teachers_button-4`);
let btnTeach5Node = document.querySelector(`.main-page__teachers_button-5`);
let btnTeach6Node = document.querySelector(`.main-page__teachers_button-6`);

let popConsultNode = document.querySelector(`.pop-up__consultation`);
let btnPopClose2Node = document.querySelector(`.pop-up__cross-button-2`);
let nameTeachPopNode = document.querySelector(`.pop-up__caption_teacher`);

btnTeach1Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Кан Александра`;
    docNode.classList.add(`document-hidden`);
});

btnTeach2Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Сато Акира`;
    docNode.classList.add(`document-hidden`);
});

btnTeach3Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Нитобэ Инадзо`;
    docNode.classList.add(`document-hidden`);
});

btnTeach4Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Рябова Дарья`;
    docNode.classList.add(`document-hidden`);
});

btnTeach5Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Иванова Алёна`;
    docNode.classList.add(`document-hidden`);
});

btnTeach6Node.addEventListener(`click`, function () {
    popConsultNode.classList.remove(`pop-up__consultation`);
    nameTeachPopNode.innerHTML = `Миура Рейя`;
    docNode.classList.add(`document-hidden`);
});

btnPopClose2Node.addEventListener(`click`, function () {
    popConsultNode.classList.add(`pop-up__consultation`);
    docNode.classList.remove(`document-hidden`);
});





//поп ап у сертификата
let btnFreeCerNode = document.querySelector(`.main-page__certificate_button-top`);

btnFreeCerNode.addEventListener(`click`, function () {
    popFreeNode.classList.remove(`pop-up__free-lesson`);
    docNode.classList.add(`document-hidden`);
});

btnPopClose1Node.addEventListener(`click`, function () {
    popFreeNode.classList.add(`pop-up__free-lesson`);
    docNode.classList.remove(`document-hidden`);
});




//поп ап тарифы
let btnCours1Node = document.querySelector(`.main-page__courses_card-btn-1-1`);
let btnCours2Node = document.querySelector(`.main-page__courses_card-btn-2-2`);
let btnCours3Node = document.querySelector(`.main-page__courses_card-btn-3`);
let btnCours4Node = document.querySelector(`.main-page__courses_card-btn-4`);
let btnCours5Node = document.querySelector(`.main-page__courses_card-btn-5`);
let btnCours6Node = document.querySelector(`.main-page__courses_card-btn-6`);
let btnCours7Node = document.querySelector(`.main-page__courses_card-btn-7`);
let btnCours8Node = document.querySelector(`.main-page__courses_card-btn-8`);
let btnCours9Node = document.querySelector(`.main-page__courses_card-btn-9`);
let btnCours10Node = document.querySelector(`.main-page__courses_card-btn-10`);
let btnCours11Node = document.querySelector(`.main-page__courses_card-btn-11`);
let btnCours12Node = document.querySelector(`.main-page__courses_card-btn-12`);

let popCoursNode = document.querySelector(`.pop-up__course`);
let btnPopClose3Node = document.querySelector(`.pop-up__cross-button-3`);

let nameCoursPopNode = document.querySelector(`.pop-up__caption_course-name`);
let descCoursPopNode = document.querySelector(`.pop-up__course_description`);
let aboutCoursPopNode = document.querySelector(`.pop-up_more-abt-course`);

btnCours1Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые индивидуальные<br>
    для поступления`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Сато Акира</li>
        <li>стоимость: от 20 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page2.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours2Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские групповые<br>
    для путешествий`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>ближайший старт: 20.05.24</li>
        <li>преподаватель: Нитобэ Инадзо</li>
        <li>стоимость: от 8 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page3.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours3Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские групповые<br>
    для хобби`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>ближайший старт: 01.06.24</li>
        <li>преподаватель: Рябова Дарья</li>
        <li>стоимость: от 8 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page4.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours4Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые групповые<br>
    для путешествий`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: продолжающие</li>
        <li>ближайший старт: 15.04.24</li>
        <li>преподаватель: Миура Рейя</li>
        <li>стоимость: от 10 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page5.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours5Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские индивидуальные<br>
    для поступления`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Иванова Алёна</li>
        <li>стоимость: от 16 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page6.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours6Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые индивидуальные<br>
    для бизнеса`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: продолжающие</li>
        <li>преподаватель: Сато Акира</li>
        <li>стоимость: от 20 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page7.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours7Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые групповые<br>
    для хобби`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>ближайший старт: 30.08.24</li>
        <li>преподаватель: Кан Александра</li>
        <li>стоимость: от 10 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page8.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours8Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские индивидуальные<br>
    для путешествий`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Нитобэ Инадзо</li>
        <li>стоимость: от 14 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page9.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours9Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские индивидуальные<br>
    для хобби`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Рябова Дарья</li>
        <li>стоимость: от 14 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page10.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours10Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые индивидуальные<br>
    для путешествий`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Миура Рейя</li>
        <li>стоимость: от 16 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page11.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours11Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Детские групповые<br>
    для поступления`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>ближайший старт: 10.05.24</li>
        <li>преподаватель: Иванова Алёна</li>
        <li>стоимость: от 10 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page12.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});

btnCours12Node.addEventListener(`click`, function () {
    popCoursNode.classList.remove(`pop-up__course`);
    nameCoursPopNode.innerHTML = `Взрослые индивидуальные<br>
    для хобби`;
    descCoursPopNode.innerHTML = `<ul>
        <li>уровень: с нуля, продолжающие</li>
        <li>преподаватель: Кан Александра</li>
        <li>стоимость: от 16 000 р.*</li>
    </ul>`;
    aboutCoursPopNode.innerHTML = `<a class="pop-up_more-abt-course_link" 
    href="pages/page13.html">подробнее о курсе ></a>`;
    docNode.classList.add(`document-hidden`);
});


btnPopClose3Node.addEventListener(`click`, function () {
    popCoursNode.classList.add(`pop-up__course`);
    docNode.classList.remove(`document-hidden`);
});




//курсы фильтры

let card1Node = document.querySelector(`.main-page__courses_card-1`);
let card2Node = document.querySelector(`.main-page__courses_card-2`);
let card3Node = document.querySelector(`.main-page__courses_card-3`);
let card4Node = document.querySelector(`.main-page__courses_card-4`);
let card5Node = document.querySelector(`.main-page__courses_card-5`);
let card6Node = document.querySelector(`.main-page__courses_card-6`);
let card7Node = document.querySelector(`.main-page__courses_card-7`);
let card8Node = document.querySelector(`.main-page__courses_card-8`);
let card9Node = document.querySelector(`.main-page__courses_card-9`);
let card10Node = document.querySelector(`.main-page__courses_card-10`);
let card11Node = document.querySelector(`.main-page__courses_card-11`);
let card12Node = document.querySelector(`.main-page__courses_card-12`);


let btn1FilNode = document.querySelector(`.main-page__courses_filters-button-1`);
let btn2FilNode = document.querySelector(`.main-page__courses_filters-button-2`);

let btn1RadNode = document.querySelector(`.main-page__courses_filters-btn-1`);
let btn2RadNode = document.querySelector(`.main-page__courses_filters-btn-2`);
let btn3RadNode = document.querySelector(`.main-page__courses_filters-btn-3`);


function click() {
    if (btn1FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn1RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card2Node.classList.add(`main-page__courses_card-none`);
        card3Node.classList.add(`main-page__courses_card-none`);
        card4Node.classList.add(`main-page__courses_card-none`);
        card7Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);

        card1Node.classList.remove(`main-page__courses_card-none`);
        card5Node.classList.remove(`main-page__courses_card-none`);
        card6Node.classList.remove(`main-page__courses_card-none`);
        card8Node.classList.remove(`main-page__courses_card-none`);
        card9Node.classList.remove(`main-page__courses_card-none`);
        card10Node.classList.remove(`main-page__courses_card-none`);
        card12Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn1FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn2RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card1Node.classList.add(`main-page__courses_card-none`);
        card2Node.classList.add(`main-page__courses_card-none`);
        card3Node.classList.add(`main-page__courses_card-none`);
        card4Node.classList.add(`main-page__courses_card-none`);
        card6Node.classList.add(`main-page__courses_card-none`);
        card7Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);


        card5Node.classList.remove(`main-page__courses_card-none`);
        card8Node.classList.remove(`main-page__courses_card-none`);
        card9Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn1FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn3RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card2Node.classList.add(`main-page__courses_card-none`);
        card3Node.classList.add(`main-page__courses_card-none`);
        card4Node.classList.add(`main-page__courses_card-none`);
        card5Node.classList.add(`main-page__courses_card-none`);
        card7Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);


        card1Node.classList.remove(`main-page__courses_card-none`);
        card6Node.classList.remove(`main-page__courses_card-none`);
        card10Node.classList.remove(`main-page__courses_card-none`);
        card12Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn2FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn1RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card1Node.classList.add(`main-page__courses_card-none`);
        card5Node.classList.add(`main-page__courses_card-none`);
        card6Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);

        card2Node.classList.remove(`main-page__courses_card-none`);
        card3Node.classList.remove(`main-page__courses_card-none`);
        card4Node.classList.remove(`main-page__courses_card-none`);
        card7Node.classList.remove(`main-page__courses_card-none`);
        card11Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn2FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn2RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card1Node.classList.add(`main-page__courses_card-none`);
        card4Node.classList.add(`main-page__courses_card-none`);
        card5Node.classList.add(`main-page__courses_card-none`);
        card6Node.classList.add(`main-page__courses_card-none`);
        card7Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);

        card2Node.classList.remove(`main-page__courses_card-none`);
        card3Node.classList.remove(`main-page__courses_card-none`);
        card11Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn2FilNode.classList.contains(`main-page__courses_filters-button-on`) && btn3RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card1Node.classList.add(`main-page__courses_card-none`);
        card2Node.classList.add(`main-page__courses_card-none`);
        card3Node.classList.add(`main-page__courses_card-none`);
        card5Node.classList.add(`main-page__courses_card-none`);
        card6Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);

        card4Node.classList.remove(`main-page__courses_card-none`);
        card7Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn1RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card7Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);

        card1Node.classList.remove(`main-page__courses_card-none`);
        card2Node.classList.remove(`main-page__courses_card-none`);
        card3Node.classList.remove(`main-page__courses_card-none`);
        card4Node.classList.remove(`main-page__courses_card-none`);
        card5Node.classList.remove(`main-page__courses_card-none`);
        card6Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.remove(`main-page__courses_card-none`);

    } else if (btn2RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card6Node.classList.add(`main-page__courses_card-none`);
        card1Node.classList.add(`main-page__courses_card-none`);
        card4Node.classList.add(`main-page__courses_card-none`);
        card7Node.classList.add(`main-page__courses_card-none`);
        card10Node.classList.add(`main-page__courses_card-none`);
        card12Node.classList.add(`main-page__courses_card-none`);

        card2Node.classList.remove(`main-page__courses_card-none`);
        card3Node.classList.remove(`main-page__courses_card-none`);
        card5Node.classList.remove(`main-page__courses_card-none`);
        card8Node.classList.remove(`main-page__courses_card-none`);
        card9Node.classList.remove(`main-page__courses_card-none`);
        card11Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);

    } else if (btn3RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        card2Node.classList.add(`main-page__courses_card-none`);
        card3Node.classList.add(`main-page__courses_card-none`);
        card5Node.classList.add(`main-page__courses_card-none`);
        card8Node.classList.add(`main-page__courses_card-none`);
        card9Node.classList.add(`main-page__courses_card-none`);
        card11Node.classList.add(`main-page__courses_card-none`);

        card6Node.classList.remove(`main-page__courses_card-none`);
        card1Node.classList.remove(`main-page__courses_card-none`);
        card4Node.classList.remove(`main-page__courses_card-none`);
        card7Node.classList.remove(`main-page__courses_card-none`);
        card10Node.classList.remove(`main-page__courses_card-none`);
        card12Node.classList.remove(`main-page__courses_card-none`);

        buttonDownNode.classList.add(`main-page__courses_card-none`);
    }
}


btn1FilNode.addEventListener(`click`, function () {
    btn1FilNode.classList.toggle(`main-page__courses_filters-button-on`);
    btn2FilNode.classList.remove(`main-page__courses_filters-button-on`);

    click();
});

btn2FilNode.addEventListener(`click`, function () {
    btn1FilNode.classList.remove(`main-page__courses_filters-button-on`);
    btn2FilNode.classList.toggle(`main-page__courses_filters-button-on`);

    click();
});


btn1RadNode.classList.add(`main-page__courses_filters-btn-on`)

btn1RadNode.addEventListener(`click`, function () {
    btn1RadNode.classList.add(`main-page__courses_filters-btn-on`);
    btn2RadNode.classList.remove(`main-page__courses_filters-btn-on`);
    btn3RadNode.classList.remove(`main-page__courses_filters-btn-on`);

    click();
});

btn2RadNode.addEventListener(`click`, function () {
    btn1RadNode.classList.remove(`main-page__courses_filters-btn-on`);
    btn2RadNode.classList.toggle(`main-page__courses_filters-btn-on`);
    btn3RadNode.classList.remove(`main-page__courses_filters-btn-on`);

    if (!btn2RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        btn1RadNode.classList.add(`main-page__courses_filters-btn-on`);
    }

    click();
});

btn3RadNode.addEventListener(`click`, function () {
    btn1RadNode.classList.remove(`main-page__courses_filters-btn-on`);
    btn2RadNode.classList.remove(`main-page__courses_filters-btn-on`);
    btn3RadNode.classList.toggle(`main-page__courses_filters-btn-on`);

    if (!btn3RadNode.classList.contains(`main-page__courses_filters-btn-on`)) {
        btn1RadNode.classList.add(`main-page__courses_filters-btn-on`);
    }

    click();
});

let alertRad2Node = document.querySelector(`.main-page__courses_filters-alert-2`);
let alertRad3Node = document.querySelector(`.main-page__courses_filters-alert-3`);

btn2RadNode.addEventListener(`mouseover`, function () {
    alertRad2Node.classList.remove(`main-page__courses_card-none`);
});
btn2RadNode.addEventListener(`mouseout`, function () {
    alertRad2Node.classList.add(`main-page__courses_card-none`);
});

btn3RadNode.addEventListener(`mouseover`, function () {
    alertRad3Node.classList.remove(`main-page__courses_card-none`);
});
btn3RadNode.addEventListener(`mouseout`, function () {
    alertRad3Node.classList.add(`main-page__courses_card-none`);
});

//кнопка для загрузки курсов
let c = 0;

function handleClick() {
    c++;

    if (c === 1) {
        // Действия после первого нажатия
        card7Node.classList.remove(`main-page__courses_card-none`);
        card8Node.classList.remove(`main-page__courses_card-none`);
        card9Node.classList.remove(`main-page__courses_card-none`);

    } else if (c === 2) {
        // Действия после второго нажатия
        card10Node.classList.remove(`main-page__courses_card-none`);
        card11Node.classList.remove(`main-page__courses_card-none`);
        card12Node.classList.remove(`main-page__courses_card-none`);
        buttonDownNode.classList.add(`main-page__courses_card-none`);
        c = 0;
    }
}

let buttonDownNode = document.querySelector(`.main-page__courses_btn`);
buttonDownNode.addEventListener('click', handleClick);





//слайдер отзывов

$(document).ready(function () {
    $('.main-page__feedback_cards').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScrol: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initiaSlide: 0,
        autoplay: false,
        autoplaySpeed: 0,
        draggable: false,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        //медиа
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    initiaSlide: 1
                }
            }
        ],
        mobileFirst: true,
    });
});









//FAQ

let button1Node = document.querySelector(`.main-page__FAQ_button-1`);
let answer1Node = document.querySelector(`.main-page__FAQ_answer-1`);
let buttonimg1Node = document.querySelector(`.main-page__FAQ_button-img-1`);

let button2Node = document.querySelector(`.main-page__FAQ_button-2`);
let answer2Node = document.querySelector(`.main-page__FAQ_answer-2`);
let buttonimg2Node = document.querySelector(`.main-page__FAQ_button-img-2`);

let button3Node = document.querySelector(`.main-page__FAQ_button-3`);
let answer3Node = document.querySelector(`.main-page__FAQ_answer-3`);
let buttonimg3Node = document.querySelector(`.main-page__FAQ_button-img-3`);

let button4Node = document.querySelector(`.main-page__FAQ_button-4`);
let answer4Node = document.querySelector(`.main-page__FAQ_answer-4`);
let buttonimg4Node = document.querySelector(`.main-page__FAQ_button-img-4`);

let button5Node = document.querySelector(`.main-page__FAQ_button-5`);
let answer5Node = document.querySelector(`.main-page__FAQ_answer-5`);
let buttonimg5Node = document.querySelector(`.main-page__FAQ_button-img-5`);

let button6Node = document.querySelector(`.main-page__FAQ_button-6`);
let answer6Node = document.querySelector(`.main-page__FAQ_answer-6`);
let buttonimg6Node = document.querySelector(`.main-page__FAQ_button-img-6`);


function btnClose() {
    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
}

button1Node.addEventListener(`click`, function () {
    answer1Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer1Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer1Node.innerHTML = `Занятия проходят в Discord, в назначенное время урока вы заходите в канал своей группы. <br>
        Преподаватель начинает вести лекцию, показывая презентацию. Занятия будут интерактивными. На каждом уроке у вас будут 
        спрашивать произношение новых слов и диалогов, поправлять при необходимости.<br>
        Также вы можете задавать преподавателю вопросы в чате во время урока.`;
    } else {
        answer1Node.innerHTML = ``;
    }

    buttonimg1Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
});



button2Node.addEventListener(`click`, function () {
    answer2Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer2Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer2Node.innerHTML = `Мы предоставляем свои электронные учебники, 
        которые при желании можно приобрести в бумажном формате индивидуально. 
        Также будет необходимо приобрести прописи.`;
    } else {
        answer2Node.innerHTML = ``;
    }

    buttonimg2Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
});



button3Node.addEventListener(`click`, function () {
    answer3Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer3Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer3Node.innerHTML = `Мы работаем с детьми от 7 лет. Верхних границ нет, 
        всё в ваших руках!`;
    } else {
        answer3Node.innerHTML = ``;
    }

    buttonimg3Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
});


button4Node.addEventListener(`click`, function () {
    answer4Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer4Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer4Node.innerHTML = `В основе нашей учебной программы лежат методики ведущих вузов Японии. <br>
        Наши курсы гарантируют, что вы сдадите международный экзамен JLPT, иначе мы вернем вам деньги.`;
    } else {
        answer4Node.innerHTML = ``;
    }

    buttonimg4Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
});


button5Node.addEventListener(`click`, function () {
    answer5Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer5Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer5Node.innerHTML = `Вы можете перенести или заморозить занятие бесплатно за 12 часов до его начала. Но такая возможность есть не у всех форматов, только у индивидуальных занятий.  <br>
        Подробнее можете уточнить у наших менеджеров, <a class="main-page__FAQ_answer-link" href="#contacts">оставив свой вопрос ></a>`;
    } else {
        answer5Node.innerHTML = ``;
    }

    buttonimg5Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer6Node.classList.remove(`main-page__FAQ_answer-open`);
    answer6Node.innerHTML = ``;
    buttonimg6Node.classList.remove(`main-page__FAQ_button-img-open`);
});


button6Node.addEventListener(`click`, function () {
    answer6Node.classList.toggle(`main-page__FAQ_answer-open`);
    if (answer6Node.classList.contains(`main-page__FAQ_answer-open`)) {
        answer6Node.innerHTML = `Процесс обучения организован таким образом, чтобы вы могли совмещать его с работой, учёбой и личной жизнью. <br>
        Групповые занятия проходят 1 или 2 раза в неделю - в дневное или вечернее время. Занятия у нас проходят с 13:00 дня до 22:00 вечера. <br>
        Также можно выбрать вариант индивидуальных занятий с преподавателем, где вы сами подбираете свой личный график обучения. 
        Индивидуальные занятия проходят с 8:00 утра до 22:00 вечера.`;
    } else {
        answer6Node.innerHTML = ``;
    }

    buttonimg6Node.classList.toggle(`main-page__FAQ_button-img-open`);


    answer1Node.classList.remove(`main-page__FAQ_answer-open`);
    answer1Node.innerHTML = ``;
    buttonimg1Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer2Node.classList.remove(`main-page__FAQ_answer-open`);
    answer2Node.innerHTML = ``;
    buttonimg2Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer3Node.classList.remove(`main-page__FAQ_answer-open`);
    answer3Node.innerHTML = ``;
    buttonimg3Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer4Node.classList.remove(`main-page__FAQ_answer-open`);
    answer4Node.innerHTML = ``;
    buttonimg4Node.classList.remove(`main-page__FAQ_button-img-open`);

    answer5Node.classList.remove(`main-page__FAQ_answer-open`);
    answer5Node.innerHTML = ``;
    buttonimg5Node.classList.remove(`main-page__FAQ_button-img-open`);
});















