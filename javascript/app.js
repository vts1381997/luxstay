window.addEventListener('load', handleEventHeader);

function handleEventHeader() {
    var inputHeader = document.querySelector('.header__search-input');
    var dayHeader = document.querySelector('.header__search-days');
    var guestHeader = document.querySelector('.header__search-guests');
    var guestFilter = document.querySelector('.header__search-guests-filter');
    var daysCalendar = document.querySelector('.header__search-days-calendar');
    var moneyNavbtn = document.querySelector('.header__navbar-money');
    var moneyNavfilter = document.querySelector('.header__navbar-money-filters');

    var moneyNavbtnMobile = document.querySelector('.header__navbar-mobile .header__navbar-money');
    var moneyNavfilterMobile = document.querySelector('.header__navbar-mobile .header__navbar-money-filters');

    var searchBorderBtns = document.querySelectorAll('.header__search-border');

    document.addEventListener('click', function(e) {
        searchBorderBtns.forEach(function(btn) {
            btn.classList.remove('search-active');
        })
    })

    inputHeader.addEventListener('click', function(e) {
        var input = this.children[1];
        input.focus();
        this.classList.add('search-active');

        guestHeader.classList.remove('search-active');
        dayHeader.classList.remove('search-active');
        e.stopPropagation();

        input.addEventListener('keydown', function(e) {
            setTimeout(function() {
                inputHeader.classList.add('show');
            }, 2000)
        })

        if(this.classList.contains('show')) {
            var closeInput = this.querySelector('.close-input-search');
            closeInput.addEventListener('click', function(e) {
                input.value = '';
                this.parentElement.classList.remove('show');
            })
        }
    })

    dayHeader.addEventListener('click', function(e) {
        this.classList.toggle('search-active');
        guestHeader.classList.remove('search-active');
        inputHeader.classList.remove('search-active');

        e.stopPropagation();
        if(this.classList.contains('search-active')) {
            daysCalendar.addEventListener('click', function(e) {
                e.stopPropagation();               
            })
        }
    })

    guestHeader.addEventListener('click', function(e) {
        this.classList.toggle('search-active');
        dayHeader.classList.remove('search-active');
        inputHeader.classList.remove('search-active');

        e.stopPropagation();
        if(this.classList.contains('search-active')) {
            guestFilter.addEventListener('click', function(e) {
                e.stopPropagation();               
            })
        }
    
    })

    moneyNavbtn.addEventListener('click', function(e) {
        
        moneyNavbtn.classList.toggle('search-active');
        e.stopPropagation();
        if(this.classList.contains('search-active')) {
            moneyNavfilter.addEventListener('click', function(e) {
                e.stopPropagation();               
            })
        }
        guestHeader.classList.remove('search-active');
        dayHeader.classList.remove('search-active');
    })

    moneyNavbtnMobile.addEventListener('click', function(e) {
        
        this.classList.toggle('search-active');
        e.stopPropagation();
        if(this.classList.contains('search-active')) {
            moneyNavfilterMobile.addEventListener('click', function(e) {
                e.stopPropagation();               
            })
        }
    })

    var headerMenuBtn = document.querySelector('.header__navbar-mobile-btn');
    var menuOverplay = document.querySelector('.header__navbar-mobile-overplay');
    var menuMobile = document.querySelector('.header__navbar-mobile-menu');
    var menuCloseBtn = document.querySelector('.header__navbar-mobile-menu-close');

    headerMenuBtn.addEventListener('click', function() {
        menuMobile.classList.add('show');
        menuOverplay.classList.add('show');
    })

    menuOverplay.addEventListener('click', function(e) {
        if(e.currentTarget === e.target) {
            menuMobile.classList.remove('show');
            menuOverplay.classList.remove('show');
        }
    })

    menuCloseBtn.addEventListener('click', function() {
        menuMobile.classList.remove('show');
        menuOverplay.classList.remove('show');
    })

    var guestFilterBtns = document.querySelectorAll('.filter-btn');
    var minusBtns = document.querySelectorAll('.header__search-guests-filter-btn-minus');
    minusBtns.forEach(function(minusBtn) {
        minusBtn.classList.add('disable');
    })
    guestFilterBtns.forEach(function(btn) {
        var count = 0;
        var itemBtns = btn.querySelectorAll('button');
        itemBtns.forEach(function(itemBtn) {
            itemBtn.addEventListener('click', addGuest)
        })
        
        function addGuest(e) {
            var styles = e.currentTarget.classList;
                    
                    if(styles.contains('header__search-guests-filter-btn-plus')) {
                        count++;
                        if(count > 0) {
                            this.parentElement.querySelector('.header__search-guests-filter-btn-minus').classList.remove('disable');
                        }
                    } else if(styles.contains('header__search-guests-filter-btn-minus')) {
                        count--;
                        if(count == 0) {
                             styles.add('disable');
                        }
                        
                    }
                    
                    if(count < 0) {
                        count = 0;
                    }

                    var value = this.parentElement.querySelector('span');
                    value.textContent = count;
        }
        var clearBtn = document.querySelector('.header__search-guests-filter-erase-btn');
    
        clearBtn.addEventListener('click', function() {
            count = 0;
            var valueGuest = btn.querySelector('span');
            valueGuest.textContent = count;
            var minusBtn = btn.querySelector('.header__search-guests-filter-btn-minus');
            minusBtn.classList.add('disable');
        })
    })


}

