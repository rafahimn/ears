 
(function () {
    const shutterHero = document.querySelector(
        '.dars-shutter-hero'
    );

    if (!shutterHero) {
        return;
    }

    const links = shutterHero.querySelectorAll(
        '[data-shutter-target]'
    );

    function openShutterConfigurator(systemName) {
        const configurator =
            document.getElementById(
                'shutter-configurator'
            );

        try {
            sessionStorage.setItem(
                'darsSelectedShutterSystem',
                systemName
            );
        } catch (error) {
            /* Storage is optional. */
        }

        const matchingTab = document.querySelector(
            '[data-shutter-system="' +
            systemName +
            '"]'
        );

        if (matchingTab) {
            matchingTab.click();
        }

        document.dispatchEvent(
            new CustomEvent(
                'darsShutterSystemSelected',
                {
                    detail: {
                        system: systemName
                    }
                }
            )
        );

        if (!configurator) {
            return;
        }

        const header =
            document.getElementById(
                'darsPremiumHeader'
            );

        const headerHeight =
            header ? header.offsetHeight : 76;

        const position =
            configurator
                .getBoundingClientRect()
                .top +
            window.pageYOffset -
            headerHeight -
            18;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    links.forEach(function (link) {
        link.addEventListener(
            'click',
            function (event) {
                const systemName =
                    link.getAttribute(
                        'data-shutter-target'
                    ) || 'single';

                if (
                    document.getElementById(
                        'shutter-configurator'
                    )
                ) {
                    event.preventDefault();
                }

                openShutterConfigurator(systemName);
            }
        );
    });
})();

 
(function () {
    const section = document.querySelector('.dars-shutter-types');

    if (!section) {
        return;
    }

    const shutterData = {
        single: {
            title: 'Single-Skin Rolling Shutter',
            description:
                'A durable and practical shutter curtain for shops, warehouses, garages and service entrances that require dependable daily security.',
            applications: [
                'Retail Shops',
                'Warehouses',
                'Service Entrances'
            ],
            features: [
                'Aluminium or galvanised-steel slats',
                'Manual or motorised operation',
                'Heavy-duty side guides',
                'Remote and wall-switch options'
            ],
            recommendation:
                'Cost-effective security for frequently used openings',
            material: 'Solid single-skin slats',
            materialNote: 'Aluminium or galvanised steel option',
            productStyle: 'single',
            configuratorSystem: 'single'
        },

        insulated: {
            title: 'Double-Insulated Rolling Shutter',
            description:
                'An upgraded shutter system designed to improve thermal control, reduce outside noise and provide additional strength for villas, warehouses and enclosed commercial spaces.',
            applications: [
                'Villas',
                'Air-Conditioned Areas',
                'Premium Warehouses'
            ],
            features: [
                'Double-wall insulated slats',
                'Improved heat and sound control',
                'Motorised operation',
                'Multiple finish options'
            ],
            recommendation:
                'Openings where insulation, comfort and stronger construction matter',
            material: 'Double-wall insulated slat',
            materialNote: 'Designed for improved thermal performance',
            productStyle: 'insulated',
            configuratorSystem: 'insulated'
        },

        vision: {
            title: 'Vision Polycarbonate Shutter',
            description:
                'A transparent security curtain that protects the opening while keeping retail displays and showroom interiors visible after closing hours.',
            applications: [
                'Shopping Malls',
                'Showrooms',
                'Retail Displays'
            ],
            features: [
                'Transparent polycarbonate links',
                'Visibility after closing',
                'Motorised operation',
                'Suitable for indoor retail fronts'
            ],
            recommendation:
                'Retail locations requiring security without hiding the display',
            material: 'Transparent polycarbonate curtain',
            materialNote: 'Visibility combined with controlled access',
            productStyle: 'vision',
            configuratorSystem: 'vision'
        },

        window: {
            title: 'Window Roller Shutter',
            description:
                'A compact roller-shutter solution for residential and commercial windows requiring shade, privacy, weather protection and an added security layer.',
            applications: [
                'Villa Windows',
                'Offices',
                'Residential Projects'
            ],
            features: [
                'Compact shutter-box design',
                'Privacy and shade control',
                'Manual or motorised options',
                'Multiple colour finishes'
            ],
            recommendation:
                'Windows requiring privacy, sun control and added protection',
            material: 'Compact window-shutter slats',
            materialNote: 'Designed for residential and office windows',
            productStyle: 'window',
            configuratorSystem: 'window'
        }
    };

    const tabs = section.querySelectorAll(
        '.dars-shutter-type-tab'
    );

    const product = section.querySelector(
        '#darsShutterProduct'
    );

    const configureButton = section.querySelector(
        '#darsShutterConfigure'
    );

    function renderList(container, values) {
        container.innerHTML = '';

        values.forEach(function (value) {
            const item = document.createElement('span');
            item.textContent = value;
            container.appendChild(item);
        });
    }

    function activateType(typeKey) {
        const data =
            shutterData[typeKey] ||
            shutterData.single;

        tabs.forEach(function (tab) {
            const isActive =
                tab.getAttribute('data-shutter-tab') === typeKey;

            tab.classList.toggle('is-active', isActive);

            tab.setAttribute(
                'aria-selected',
                isActive ? 'true' : 'false'
            );
        });

        section.querySelector(
            '#darsShutterTitle'
        ).textContent = data.title;

        section.querySelector(
            '#darsShutterDescription'
        ).textContent = data.description;

        section.querySelector(
            '#darsShutterRecommendation'
        ).textContent = data.recommendation;

        section.querySelector(
            '#darsShutterMaterial'
        ).textContent = data.material;

        section.querySelector(
            '#darsShutterMaterialNote'
        ).textContent = data.materialNote;

        renderList(
            section.querySelector(
                '#darsShutterApplications'
            ),
            data.applications
        );

        renderList(
            section.querySelector(
                '#darsShutterFeatures'
            ),
            data.features
        );

        product.setAttribute(
            'data-product-style',
            data.productStyle
        );

        configureButton.setAttribute(
            'data-shutter-target',
            data.configuratorSystem
        );

        try {
            sessionStorage.setItem(
                'darsSelectedShutterSystem',
                data.configuratorSystem
            );
        } catch (error) {
            /* Optional storage. */
        }
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            activateType(
                tab.getAttribute('data-shutter-tab')
            );
        });
    });

    configureButton.addEventListener('click', function (event) {
        const systemName =
            configureButton.getAttribute(
                'data-shutter-target'
            ) || 'single';

        const configurator =
            document.getElementById(
                'shutter-configurator'
            );

        try {
            sessionStorage.setItem(
                'darsSelectedShutterSystem',
                systemName
            );
        } catch (error) {
            /* Optional storage. */
        }

        const matchingTab = document.querySelector(
            '[data-shutter-system="' +
            systemName +
            '"]'
        );

        if (matchingTab) {
            matchingTab.click();
        }

        document.dispatchEvent(
            new CustomEvent(
                'darsShutterSystemSelected',
                {
                    detail: {
                        system: systemName
                    }
                }
            )
        );

        if (!configurator) {
            return;
        }

        event.preventDefault();

        const header =
            document.getElementById('darsPremiumHeader');

        const headerHeight =
            header ? header.offsetHeight : 76;

        const position =
            configurator.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            18;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });

    



    document.addEventListener(
        'darsShutterSystemSelected',
        function (event) {
            if (
                !event.detail ||
                !event.detail.system
            ) {
                return;
            }

            const matchingType =
                event.detail.system === 'vision'
                    ? 'vision'
                    : event.detail.system === 'insulated'
                        ? 'insulated'
                        : event.detail.system === 'window'
                            ? 'window'
                            : 'single';

            activateType(matchingType);
        }
    );

    try {
        const storedType =
            sessionStorage.getItem(
                'darsSelectedShutterSystem'
            );

        if (
            storedType &&
            shutterData[storedType]
        ) {
            activateType(storedType);
        } else {
            activateType('single');
        }
    } catch (error) {
        activateType('single');
    }
})();

 
(function () {
    const builder = document.querySelector('.dars-shutter-builder');

    if (!builder) {
        return;
    }

    const state = {
        requirement: 'New rolling shutter installation',
        systemKey: 'single',
        system: 'Single-Skin Rolling Shutter',
        material: 'Galvanised steel slats',
        width: 3,
        height: 3,
        motor: 'Standard automatic motor',
        cover: 'No external shutter-box cover',
        addons: [],
        quantity: 1,
        schedule: 'Standard project schedule',
        location: '',
        view: 'outside'
    };

    const whatsappNumber = '971552052347';

    const widthOutput = builder.querySelector('#darsShutterWidth');
    const heightOutput = builder.querySelector('#darsShutterHeight');

    const widthRange =
        builder.querySelector('#darsShutterWidthRange');

    const heightRange =
        builder.querySelector('#darsShutterHeightRange');

    const countOutput =
        builder.querySelector('#darsShutterCount');

    const locationInput =
        builder.querySelector('#darsShutterLocation');

    const scene =
        builder.querySelector('#darsShutterScene');

    const whatsappButton =
        builder.querySelector('#darsShutterWhatsApp');

    function numberFormat(value) {
        return Number(value).toFixed(2);
    }

    function shortText(value) {
        return value
            .replace(' rolling shutter installation', ' shutter')
            .replace('Rolling Shutter', '')
            .trim();
    }

    function updateSummary() {
        builder.querySelector(
            '#darsShutterSummaryTitle'
        ).textContent = state.system;

        builder.querySelector(
            '#darsSummaryRequirement'
        ).textContent = shortText(state.requirement);

        builder.querySelector(
            '#darsSummaryType'
        ).textContent = state.system;

        builder.querySelector(
            '#darsSummaryMaterial'
        ).textContent = state.material;

        builder.querySelector(
            '#darsSummaryDimensions'
        ).textContent =
            numberFormat(state.width) +
            'm × ' +
            numberFormat(state.height) +
            'm';

        builder.querySelector(
            '#darsSummaryMotor'
        ).textContent = state.motor;

        builder.querySelector(
            '#darsSummaryQuantity'
        ).textContent =
            state.quantity +
            (
                state.quantity === 1
                    ? ' Shutter'
                    : ' Shutters'
            );

        builder.querySelector(
            '#darsSummaryAddons'
        ).textContent =
            state.addons.length
                ? state.addons.join(', ')
                : 'None selected';

        builder.querySelector(
            '#darsSummaryLocation'
        ).textContent =
            state.location || 'Not entered';

        scene.setAttribute(
            'data-shutter-style',
            state.systemKey
        );

        scene.setAttribute(
            'data-view-mode',
            state.view
        );

        const message =
            'Hello Emirates Aluminium Shutter LLC,\n\n' +
            'I would like an exact quotation for this rolling shutter configuration:\n\n' +
            'Requirement: ' + state.requirement + '\n' +
            'Shutter type: ' + state.system + '\n' +
            'Material: ' + state.material + '\n' +
            'Approximate opening size: ' +
            numberFormat(state.width) +
            'm × ' +
            numberFormat(state.height) +
            'm\n' +
            'Operation / motor: ' + state.motor + '\n' +
            'Shutter-box cover: ' + state.cover + '\n' +
            'Optional features: ' +
            (
                state.addons.length
                    ? state.addons.join(', ')
                    : 'None selected'
            ) +
            '\n' +
            'Quantity: ' + state.quantity + '\n' +
            'Schedule: ' + state.schedule + '\n' +
            'Location: ' +
            (
                state.location || 'I will send the location pin'
            ) +
            '\n\n' +
            'I will also send opening photos or a short video.';

        whatsappButton.href =
            'https://wa.me/' +
            whatsappNumber +
            '?text=' +
            encodeURIComponent(message);
    }

    function selectSingle(selector, button, callback) {
        builder.querySelectorAll(selector).forEach(function (item) {
            item.classList.remove('is-active');
        });

        button.classList.add('is-active');

        callback();
        updateSummary();
    }

    function updateDimensions(width, height) {
        state.width = Math.min(
            10,
            Math.max(1, Number(width))
        );

        state.height = Math.min(
            7,
            Math.max(1, Number(height))
        );

        widthRange.value = state.width;
        heightRange.value = state.height;

        widthOutput.textContent =
            numberFormat(state.width);

        heightOutput.textContent =
            numberFormat(state.height);

        updateSummary();
    }

    builder.querySelectorAll(
        '.dars-shutter-size'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-shutter-size'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            updateDimensions(
                button.getAttribute('data-width'),
                button.getAttribute('data-height')
            );
        });
    });

    builder.querySelectorAll(
        '.dars-shutter-requirement'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-requirement',
                button,
                function () {
                    state.requirement =
                        button.getAttribute(
                            'data-requirement'
                        );
                }
            );
        });
    });

    function activateSystem(systemKey) {
        builder.querySelectorAll(
            '.dars-shutter-system'
        ).forEach(function (button) {
            const isActive =
                button.getAttribute(
                    'data-shutter-system'
                ) === systemKey;

            button.classList.toggle(
                'is-active',
                isActive
            );

            if (isActive) {
                state.systemKey = systemKey;
                state.system =
                    button.getAttribute(
                        'data-system-label'
                    );
            }
        });

        try {
            sessionStorage.setItem(
                'darsSelectedShutterSystem',
                systemKey
            );
        } catch (error) {
            /* Storage is optional. */
        }

        updateSummary();
    }

    builder.querySelectorAll(
        '.dars-shutter-system'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            activateSystem(
                button.getAttribute(
                    'data-shutter-system'
                )
            );
        });
    });

    builder.querySelectorAll(
        '.dars-shutter-material'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-material',
                button,
                function () {
                    state.material =
                        button.getAttribute(
                            'data-material'
                        );
                }
            );
        });
    });

    widthRange.addEventListener('input', function () {
        updateDimensions(
            widthRange.value,
            state.height
        );
    });

    heightRange.addEventListener('input', function () {
        updateDimensions(
            state.width,
            heightRange.value
        );
    });

    builder.querySelectorAll(
        '[data-dimension]'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            const direction =
                button.getAttribute('data-action') === 'plus'
                    ? 0.1
                    : -0.1;

            if (
                button.getAttribute('data-dimension') === 'width'
            ) {
                updateDimensions(
                    state.width + direction,
                    state.height
                );
            } else {
                updateDimensions(
                    state.width,
                    state.height + direction
                );
            }
        });
    });

    builder.querySelectorAll(
        '.dars-shutter-motor'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-motor',
                button,
                function () {
                    state.motor =
                        button.getAttribute(
                            'data-motor'
                        );
                }
            );
        });
    });

    builder.querySelectorAll(
        '.dars-shutter-cover'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-cover',
                button,
                function () {
                    state.cover =
                        button.getAttribute(
                            'data-cover'
                        );
                }
            );
        });
    });

    builder.querySelectorAll(
        '.dars-shutter-addon'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            const addon =
                button.getAttribute('data-addon');

            button.classList.toggle('is-active');

            if (button.classList.contains('is-active')) {
                if (!state.addons.includes(addon)) {
                    state.addons.push(addon);
                }
            } else {
                state.addons =
                    state.addons.filter(function (item) {
                        return item !== addon;
                    });
            }

            updateSummary();
        });
    });

    builder.querySelector(
        '#darsShutterCountMinus'
    ).addEventListener('click', function () {
        state.quantity = Math.max(
            1,
            state.quantity - 1
        );

        countOutput.textContent =
            state.quantity;

        updateSummary();
    });

    builder.querySelector(
        '#darsShutterCountPlus'
    ).addEventListener('click', function () {
        state.quantity = Math.min(
            20,
            state.quantity + 1
        );

        countOutput.textContent =
            state.quantity;

        updateSummary();
    });

    builder.querySelectorAll(
        '.dars-shutter-schedule'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-schedule',
                button,
                function () {
                    state.schedule =
                        button.getAttribute(
                            'data-schedule'
                        );
                }
            );
        });
    });

    locationInput.addEventListener('input', function () {
        state.location =
            locationInput.value.trim();

        updateSummary();
    });

    builder.querySelectorAll(
        '.dars-shutter-view'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            selectSingle(
                '.dars-shutter-view',
                button,
                function () {
                    state.view =
                        button.getAttribute(
                            'data-view'
                        );
                }
            );
        });
    });

    document.addEventListener(
        'darsShutterSystemSelected',
        function (event) {
            if (
                event.detail &&
                event.detail.system
            ) {
                activateSystem(
                    event.detail.system
                );
            }
        }
    );

    try {
        const storedSystem =
            sessionStorage.getItem(
                'darsSelectedShutterSystem'
            );

        if (
            storedSystem === 'single' ||
            storedSystem === 'insulated' ||
            storedSystem === 'vision' ||
            storedSystem === 'window'
        ) {
            activateSystem(storedSystem);
        }
    } catch (error) {
        activateSystem('single');
    }

    updateDimensions(3, 3);
    updateSummary();
})();

 
(function () {

    const projectSection = document.querySelector(
        '.dars-real-shutter-projects'
    );

    if (!projectSection) {
        return;
    }

    const track = projectSection.querySelector(
        '.dars-real-shutter-projects__track'
    );

    const cards = Array.from(
        projectSection.querySelectorAll(
            '.dars-real-project-card'
        )
    );

    const previousButton = projectSection.querySelector(
        '[data-real-project-action="previous"]'
    );

    const nextButton = projectSection.querySelector(
        '[data-real-project-action="next"]'
    );

    const dotsContainer = projectSection.querySelector(
        '.dars-real-shutter-projects__dots'
    );

    const currentCounter = projectSection.querySelector(
        '#darsRealProjectCurrent'
    );

    const totalCounter = projectSection.querySelector(
        '#darsRealProjectTotal'
    );

    let currentIndex = 0;
    let autoplayTimer = null;
    let resizeTimer = null;
    let touchStartX = 0;
    let touchEndX = 0;

    




    function getVisibleCards() {

        if (window.innerWidth <= 640) {
            return 1;
        }

        if (window.innerWidth <= 850) {
            return 2;
        }

        return 3;
    }

    function getMaximumIndex() {
        return Math.max(
            0,
            cards.length - getVisibleCards()
        );
    }

    function formatNumber(number) {
        return String(number).padStart(2, '0');
    }

    function createDots() {

        dotsContainer.innerHTML = '';

        const totalPositions =
            getMaximumIndex() + 1;

        for (
            let index = 0;
            index < totalPositions;
            index += 1
        ) {

            const dot =
                document.createElement('button');

            dot.type = 'button';

            dot.className =
                'dars-real-shutter-projects__dot';

            dot.setAttribute(
                'aria-label',
                'Show project slide ' +
                (index + 1)
            );

            dot.addEventListener(
                'click',
                function () {

                    currentIndex = index;

                    updateCarousel();
                    restartAutoplay();
                }
            );

            dotsContainer.appendChild(dot);
        }
    }

    function pauseAllVideos() {

        projectSection
            .querySelectorAll(
                '.dars-real-project-card__video'
            )
            .forEach(function (video) {

                video.pause();

                const card =
                    video.closest(
                        '.dars-real-project-card'
                    );

                const button =
                    card
                        ? card.querySelector(
                            '.dars-real-project-card__play'
                        )
                        : null;

                if (button) {
                    button.classList.remove(
                        'is-playing'
                    );

                    const text =
                        button.querySelector(
                            '.dars-real-project-card__play-text'
                        );

                    if (text) {
                        text.textContent =
                            'Play Video';
                    }

                    button.setAttribute(
                        'aria-label',
                        'Play project video'
                    );
                }
            });
    }

    function updateCarousel() {

        if (!cards.length) {
            return;
        }

        const maximumIndex =
            getMaximumIndex();

        currentIndex =
            Math.min(
                Math.max(currentIndex, 0),
                maximumIndex
            );

        const cardWidth =
            cards[0]
                .getBoundingClientRect()
                .width;

        const trackStyle =
            window.getComputedStyle(track);

        const gap =
            parseFloat(trackStyle.gap) ||
            parseFloat(trackStyle.columnGap) ||
            0;

        const offset =
            currentIndex *
            (cardWidth + gap);

        track.style.transform =
            'translate3d(-' +
            offset +
            'px, 0, 0)';

        const dots =
            dotsContainer.querySelectorAll(
                '.dars-real-shutter-projects__dot'
            );

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                'is-active',
                index === currentIndex
            );
        });

        currentCounter.textContent =
            formatNumber(
                currentIndex + 1
            );

        totalCounter.textContent =
            formatNumber(
                cards.length
            );

        pauseAllVideos();
    }

    function goNext() {

        const maximumIndex =
            getMaximumIndex();

        currentIndex =
            currentIndex >= maximumIndex
                ? 0
                : currentIndex + 1;

        updateCarousel();
    }

    function goPrevious() {

        const maximumIndex =
            getMaximumIndex();

        currentIndex =
            currentIndex <= 0
                ? maximumIndex
                : currentIndex - 1;

        updateCarousel();
    }

    function stopAutoplay() {

        if (!autoplayTimer) {
            return;
        }

        window.clearInterval(
            autoplayTimer
        );

        autoplayTimer = null;
    }

    function startAutoplay() {

        stopAutoplay();

        if (
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
        ) {
            return;
        }

        autoplayTimer =
            window.setInterval(
                goNext,
                4800
            );
    }

    function restartAutoplay() {
        startAutoplay();
    }

    previousButton.addEventListener(
        'click',
        function () {

            goPrevious();
            restartAutoplay();
        }
    );

    nextButton.addEventListener(
        'click',
        function () {

            goNext();
            restartAutoplay();
        }
    );

     
    projectSection.addEventListener(
        'mouseenter',
        stopAutoplay
    );

    projectSection.addEventListener(
        'mouseleave',
        startAutoplay
    );

     
    track.addEventListener(
        'touchstart',
        function (event) {

            touchStartX =
                event.changedTouches[0]
                    .screenX;
        },
        {
            passive: true
        }
    );

    track.addEventListener(
        'touchend',
        function (event) {

            touchEndX =
                event.changedTouches[0]
                    .screenX;

            const difference =
                touchStartX -
                touchEndX;

            if (
                Math.abs(difference) < 45
            ) {
                return;
            }

            if (difference > 0) {
                goNext();
            } else {
                goPrevious();
            }

            restartAutoplay();
        },
        {
            passive: true
        }
    );

     
    projectSection
        .querySelectorAll(
            '.dars-real-project-card__play'
        )
        .forEach(function (button) {

            button.addEventListener(
                'click',
                function () {

                    const card =
                        button.closest(
                            '.dars-real-project-card'
                        );

                    const video =
                        card
                            ? card.querySelector(
                                '.dars-real-project-card__video'
                            )
                            : null;

                    const text =
                        button.querySelector(
                            '.dars-real-project-card__play-text'
                        );

                    if (!video) {
                        return;
                    }

                    stopAutoplay();

                    if (video.paused) {

                        


                        projectSection
                            .querySelectorAll(
                                '.dars-real-project-card__video'
                            )
                            .forEach(function (otherVideo) {

                                if (
                                    otherVideo !== video
                                ) {
                                    otherVideo.pause();
                                }
                            });

                        const playPromise =
                            video.play();

                        if (
                            playPromise &&
                            typeof playPromise.catch ===
                            'function'
                        ) {
                            playPromise.catch(
                                function () {
                                    /* Browser may block playback. */
                                }
                            );
                        }

                        button.classList.add(
                            'is-playing'
                        );

                        if (text) {
                            text.textContent =
                                'Pause Video';
                        }

                        button.setAttribute(
                            'aria-label',
                            'Pause project video'
                        );

                    } else {

                        video.pause();

                        button.classList.remove(
                            'is-playing'
                        );

                        if (text) {
                            text.textContent =
                                'Play Video';
                        }

                        button.setAttribute(
                            'aria-label',
                            'Play project video'
                        );

                        startAutoplay();
                    }
                }
            );
        });

     
    projectSection
        .querySelectorAll(
            '.dars-real-project-card__video'
        )
        .forEach(function (video) {

            video.addEventListener(
                'ended',
                function () {

                    const card =
                        video.closest(
                            '.dars-real-project-card'
                        );

                    const button =
                        card
                            ? card.querySelector(
                                '.dars-real-project-card__play'
                            )
                            : null;

                    if (!button) {
                        return;
                    }

                    button.classList.remove(
                        'is-playing'
                    );

                    const text =
                        button.querySelector(
                            '.dars-real-project-card__play-text'
                        );

                    if (text) {
                        text.textContent =
                            'Play Video';
                    }

                    startAutoplay();
                }
            );
        });

     
    window.addEventListener(
        'resize',
        function () {

            window.clearTimeout(
                resizeTimer
            );

            resizeTimer =
                window.setTimeout(
                    function () {

                        currentIndex =
                            Math.min(
                                currentIndex,
                                getMaximumIndex()
                            );

                        createDots();
                        updateCarousel();
                    },
                    180
                );
        }
    );

    createDots();
    updateCarousel();
    startAutoplay();
})();

 
(function () {

    const faqSection = document.querySelector(
        '.dars-shutter-faq'
    );

    if (!faqSection) {
        return;
    }

    const faqItems = faqSection.querySelectorAll(
        '.dars-shutter-faq-item'
    );

    faqItems.forEach(function (item) {

        const button = item.querySelector(
            '.dars-shutter-faq-item__question'
        );

        if (!button) {
            return;
        }

        button.addEventListener('click', function () {

            const wasOpen =
                item.classList.contains('is-open');

            faqItems.forEach(function (faqItem) {

                faqItem.classList.remove('is-open');

                const faqButton = faqItem.querySelector(
                    '.dars-shutter-faq-item__question'
                );

                if (faqButton) {
                    faqButton.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                }
            });

            if (!wasOpen) {

                item.classList.add('is-open');

                button.setAttribute(
                    'aria-expanded',
                    'true'
                );
            }
        });
    });
})();
