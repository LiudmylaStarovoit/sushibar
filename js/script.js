const tabs = document.querySelectorAll('.tabs-item'),
      fontAwesome = document.querySelectorAll('.font-awesome'),
      g = document.querySelectorAll('.g'),
      tabsText = document.querySelectorAll('.tabs-text'),
      cardItem = document.querySelectorAll('.card-item'),
      btn = document.querySelectorAll('.slide-btn'),
      modalMask = document.querySelectorAll('.modal-mask'),
      modal = document.querySelectorAll('.modal'),
      close = document.querySelectorAll('.modal-close'),
      dowozItem = document.querySelectorAll('.dowoz-item'),
      strefa1 = document.querySelectorAll('.strefa-1'),
      strefa2 = document.querySelectorAll('.strefa-2'),
      strefa3 = document.querySelectorAll('.strefa-3'),
      strefa4 = document.querySelectorAll('.strefa-4'),
      dowozInfoItem = document.querySelectorAll('.dowoz-info-item'),
      menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');

});
menu.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');
});

tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
        cardItem.forEach(card => {
            card.classList.add('d-none');
        });
        cardItem[i].classList.remove('d-none');
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        item.classList.add('active-tab');
        
    });
});

btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalMask[i].classList.add('show');
        modal[i].classList.add('show');
        modalMask[i].classList.remove('hide');
        modal[i].classList.remove('hide');
    });
});

close.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalMask[i].classList.add('hide');
        modal[i].classList.add('hide');
        modalMask[i].classList.remove('show');
        modal[i].classList.remove('show');
    });
});

modalMask.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalMask[i].classList.add('hide');
        modal[i].classList.add('hide');
        modalMask[i].classList.remove('show');
        modal[i].classList.remove('show');
    });
});

let strefaArr = [strefa1, strefa2, strefa3, strefa4];
dowozItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        strefaArr.forEach(strefa => {
            strefa.forEach(sub => {
                sub.style.fill = '#000';
            });
        });
        dowozInfoItem.forEach(info => {
            info.classList.add('d-none');
        });
        dowozItem.forEach(dowoz => {
            dowoz.classList.remove('dowoz-item-active');
        });
        item.classList.add('dowoz-item-active');
        strefaArr[i].forEach(strefa => {
            strefa.style.fill = '#11402F';
/*             strefa.style.strokeWidth = '25px';
            strefa.style.stroke = '#000'; */
        });
        dowozInfoItem[i].classList.remove('d-none');
    });
});

new WOW().init();
