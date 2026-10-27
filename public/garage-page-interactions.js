/* Garage package selector, live configurator, measurement form and FAQ accordion. */

(function initGarageFeature0() {
const garageHero = document.querySelector('.dars-garage-hero');

    if (!garageHero) {
        return;
    }

    const packageLinks = garageHero.querySelectorAll(
        '[data-config-target], [data-hero-config]'
    );

    /*
     * Scroll to configurator and activate the requested system.
     *
     * Future configurator tabs must use:
     * data-config-system="standard"
     * data-config-system="premium"
     */
    function openConfigurator(systemName) {
        const configurator =
            document.getElementById('door-configurator');

        /*
         * Save selection so the future configurator can also
         * read it after page load.
         */
        try {
            sessionStorage.setItem(
                'darsSelectedGarageSystem',
                systemName
            );
        } catch (error) {
            /* Storage can safely be ignored. */
        }

        /*
         * Activate matching tab if it already exists.
         */
        const matchingTab = document.querySelector(
            '[data-config-system="' + systemName + '"]'
        );

        if (matchingTab) {
            matchingTab.click();
        }

        /*
         * Send a custom event for the configurator JavaScript.
         */
        document.dispatchEvent(
            new CustomEvent(
                'darsGarageSystemSelected',
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

        const stickyHeader =
            document.getElementById('darsPremiumHeader');

        const headerHeight =
            stickyHeader
                ? stickyHeader.offsetHeight
                : 76;

        const targetPosition =
            configurator
                .getBoundingClientRect()
                .top +
            window.pageYOffset -
            headerHeight -
            18;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    packageLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            const systemName =
                link.getAttribute('data-config-target') ||
                link.getAttribute('data-hero-config') ||
                'standard';

            const configurator =
                document.getElementById('door-configurator');

            if (configurator) {
                event.preventDefault();
            }

            openConfigurator(systemName);
        });
    });
})();

(function initGarageFeature1() {
const systemSection = document.querySelector(
        '.dars-system-compare'
    );

    if (!systemSection) {
        return;
    }

    const configureButtons = systemSection.querySelectorAll(
        '[data-config-target]'
    );

    function openDoorConfigurator(systemName) {
        const configurator =
            document.getElementById('door-configurator');

        /*
         * Save the selected system so the configurator can read it.
         */
        try {
            sessionStorage.setItem(
                'darsSelectedGarageSystem',
                systemName
            );
        } catch (error) {
            /* Storage failure does not affect navigation. */
        }

        /*
         * Activate the future configurator tab.
         * Required attributes:
         * data-config-system="premium"
         * data-config-system="standard"
         */
        const selectedTab = document.querySelector(
            '[data-config-system="' + systemName + '"]'
        );

        if (selectedTab) {
            selectedTab.click();
        }

        /*
         * Custom event can also be used by configurator JavaScript.
         */
        document.dispatchEvent(
            new CustomEvent(
                'darsGarageSystemSelected',
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
            document.getElementById('darsPremiumHeader');

        const headerHeight =
            header ? header.offsetHeight : 76;

        const targetPosition =
            configurator.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            18;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    configureButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const systemName =
                button.getAttribute('data-config-target') ||
                'standard';

            if (
                document.getElementById(
                    'door-configurator'
                )
            ) {
                event.preventDefault();
            }

            openDoorConfigurator(systemName);
        });
    });
})();

(function initGarageFeature2() {
const builder = document.querySelector('.dars-door-builder');

    if (!builder) {
        return;
    }

    const whatsappNumber = '971552052347';

    const state = {
        system: 'European Premium',
        systemKey: 'premium',
        colour: 'White',
        width: 3,
        height: 2.4,
        doors: 1,
        schedule: 'Standard installation schedule',
        payment: 'Full advance option',
        addons: [],
        view: 'outside'
    };

    const widthOutput =
        builder.querySelector('#darsDoorWidth');

    const heightOutput =
        builder.querySelector('#darsDoorHeight');

    const widthRange =
        builder.querySelector('#darsWidthRange');

    const heightRange =
        builder.querySelector('#darsHeightRange');

    const doorCountOutput =
        builder.querySelector('#darsDoorCount');

    const liveDoor =
        builder.querySelector('#darsLiveDoor');

    const previewScene =
        builder.querySelector('.dars-live-preview__scene');

    const whatsappButton =
        builder.querySelector('#darsConfigurationWhatsApp');

    function formatNumber(number) {
        return Number(number).toFixed(2);
    }

    function updateSummary() {
        builder.querySelector(
            '#darsSummarySystem'
        ).textContent = state.system;

        builder.querySelector(
            '#darsSummarySystemRow'
        ).textContent = state.system;

        builder.querySelector(
            '#darsSummaryColour'
        ).textContent = state.colour;

        builder.querySelector(
            '#darsSummarySize'
        ).textContent =
            formatNumber(state.width) +
            'm × ' +
            formatNumber(state.height) +
            'm';

        builder.querySelector(
            '#darsSummaryDoors'
        ).textContent =
            state.doors +
            (state.doors === 1 ? ' Door' : ' Doors');

        builder.querySelector(
            '#darsSummarySchedule'
        ).textContent =
            state.schedule.replace(
                ' installation schedule',
                ''
            ).replace(
                ' request',
                ''
            );

        builder.querySelector(
            '#darsSummaryAddons'
        ).textContent =
            state.addons.length
                ? state.addons.join(', ')
                : 'None selected';

        const message =
            'Hello Emirates Aluminium Shutter LLC,\n\n' +
            'I would like an exact quotation for this garage door configuration:\n\n' +
            'System: ' + state.system + '\n' +
            'Colour: ' + state.colour + '\n' +
            'Approximate size: ' +
            formatNumber(state.width) +
            'm × ' +
            formatNumber(state.height) +
            'm\n' +
            'Number of doors: ' +
            state.doors +
            '\n' +
            'Add-ons: ' +
            (
                state.addons.length
                    ? state.addons.join(', ')
                    : 'None selected'
            ) +
            '\n' +
            'Preferred schedule: ' +
            state.schedule +
            '\n' +
            'Payment preference: ' +
            state.payment +
            '\n\n' +
            'I will send my garage photo and location pin.';

        whatsappButton.href =
            'https://wa.me/' +
            whatsappNumber +
            '?text=' +
            encodeURIComponent(message);
    }

    function updateDimensions(width, height) {
        state.width = Math.min(
            7,
            Math.max(2, Number(width))
        );

        state.height = Math.min(
            4.5,
            Math.max(2, Number(height))
        );

        widthRange.value = state.width;
        heightRange.value = state.height;

        widthOutput.textContent =
            formatNumber(state.width);

        heightOutput.textContent =
            formatNumber(state.height);

        updateSummary();
    }

    function activateSystem(systemKey) {
        const systemButtons =
            builder.querySelectorAll(
                '.dars-system-option'
            );

        systemButtons.forEach(function (button) {
            const active =
                button.getAttribute(
                    'data-config-system'
                ) === systemKey;

            button.classList.toggle(
                'is-active',
                active
            );

            if (active) {
                state.systemKey = systemKey;
                state.system =
                    button.getAttribute(
                        'data-system-label'
                    );
            }
        });

        try {
            sessionStorage.setItem(
                'darsSelectedGarageSystem',
                systemKey
            );
        } catch (error) {
            /* Storage is optional. */
        }

        updateSummary();
    }

    /*
     * System selector
     */
    builder.querySelectorAll(
        '.dars-system-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            activateSystem(
                button.getAttribute(
                    'data-config-system'
                )
            );
        });
    });

    /*
     * Popular sizes
     */
    builder.querySelectorAll(
        '.dars-size-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-size-option'
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

    /*
     * Colours and live preview
     */
    builder.querySelectorAll(
        '.dars-colour-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-colour-option'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.colour =
                button.getAttribute('data-colour');

            liveDoor.style.setProperty(
                '--door-colour',
                button.getAttribute(
                    'data-door-colour'
                )
            );

            liveDoor.classList.toggle(
                'is-wood',
                button.getAttribute(
                    'data-texture'
                ) === 'wood'
            );

            liveDoor.classList.toggle(
                'is-glass',
                button.getAttribute(
                    'data-texture'
                ) === 'glass'
            );

            updateSummary();
        });
    });

    /*
     * Range controls
     */
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
            const dimension =
                button.getAttribute('data-dimension');

            const action =
                button.getAttribute('data-action');

            const difference =
                action === 'plus' ? 0.1 : -0.1;

            if (dimension === 'width') {
                updateDimensions(
                    state.width + difference,
                    state.height
                );
            } else {
                updateDimensions(
                    state.width,
                    state.height + difference
                );
            }
        });
    });

    /*
     * Add-ons
     */
    builder.querySelectorAll(
        '.dars-addon-option'
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
                    state.addons.filter(
                        function (item) {
                            return item !== addon;
                        }
                    );
            }

            updateSummary();
        });
    });

    /*
     * Door count
     */
    builder.querySelector(
        '#darsDoorCountMinus'
    ).addEventListener('click', function () {
        state.doors = Math.max(
            1,
            state.doors - 1
        );

        doorCountOutput.textContent =
            state.doors;

        updateSummary();
    });

    builder.querySelector(
        '#darsDoorCountPlus'
    ).addEventListener('click', function () {
        state.doors = Math.min(
            10,
            state.doors + 1
        );

        doorCountOutput.textContent =
            state.doors;

        updateSummary();
    });

    /*
     * Schedule
     */
    builder.querySelectorAll(
        '.dars-schedule-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-schedule-option'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.schedule =
                button.getAttribute(
                    'data-schedule'
                );

            updateSummary();
        });
    });

    /*
     * Payment
     */
    builder.querySelectorAll(
        '.dars-payment-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-payment-option'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.payment =
                button.getAttribute(
                    'data-payment'
                );

            updateSummary();
        });
    });

    /*
     * Outside / inside preview
     */
    builder.querySelectorAll(
        '.dars-view-option'
    ).forEach(function (button) {
        button.addEventListener('click', function () {
            builder.querySelectorAll(
                '.dars-view-option'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.view =
                button.getAttribute('data-view');

            previewScene.setAttribute(
                'data-view-mode',
                state.view
            );
        });
    });

    /*
     * Receive selection from Hero or comparison cards.
     */
    document.addEventListener(
        'darsGarageSystemSelected',
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

    /*
     * Read previously selected system.
     */
    try {
        const storedSystem =
            sessionStorage.getItem(
                'darsSelectedGarageSystem'
            );

        if (
            storedSystem === 'standard' ||
            storedSystem === 'premium'
        ) {
            activateSystem(storedSystem);
        }
    } catch (error) {
        activateSystem('premium');
    }

    updateDimensions(3, 2.4);
    updateSummary();
})();

(function initGarageFeature3() {
const processSection = document.querySelector(
        '.dars-garage-process'
    );

    if (!processSection) {
        return;
    }

    const configLink = processSection.querySelector(
        '[data-process-config]'
    );

    if (!configLink) {
        return;
    }

    configLink.addEventListener('click', function (event) {
        const configurator =
            document.getElementById('door-configurator');

        if (!configurator) {
            return;
        }

        event.preventDefault();

        const selectedSystem =
            configLink.getAttribute(
                'data-process-config'
            ) || 'premium';

        try {
            sessionStorage.setItem(
                'darsSelectedGarageSystem',
                selectedSystem
            );
        } catch (error) {
            /* Storage is optional. */
        }

        const matchingTab = document.querySelector(
            '[data-config-system="' +
            selectedSystem +
            '"]'
        );

        if (matchingTab) {
            matchingTab.click();
        }

        document.dispatchEvent(
            new CustomEvent(
                'darsGarageSystemSelected',
                {
                    detail: {
                        system: selectedSystem
                    }
                }
            )
        );

        const stickyHeader =
            document.getElementById(
                'darsPremiumHeader'
            );

        const headerHeight =
            stickyHeader
                ? stickyHeader.offsetHeight
                : 76;

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
    });
})();

(function initGarageFeature5() {
const faqSection = document.querySelector(
        '.dars-garage-faq'
    );

    if (!faqSection) {
        return;
    }

    const faqItems = faqSection.querySelectorAll(
        '.dars-garage-faq-item'
    );

    faqItems.forEach(function (item) {
        const button = item.querySelector(
            '.dars-garage-faq-item__question'
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
                    '.dars-garage-faq-item__question'
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

(function initGarageMeasurementForm() {
    const section = document.querySelector('.dars-measurement');
    if (!section) return;
    const form = section.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const value = (name) => {
            const el = form.querySelector('[name="' + name + '"]');
            return el ? (el.value || '').trim() : '';
        };
        const lines = [
            'Hello Emirates Aluminium Shutter LLC,',
            '',
            'I would like to book a garage door site measurement / request a quote.',
            'Name: ' + value('your-name'),
            'WhatsApp / Phone: ' + value('whatsapp-number'),
            'Emirate: ' + value('emirate'),
            'Area / Community: ' + value('area-community'),
            'Project Type: ' + value('project-type'),
            'Preferred Contact: ' + value('contact-method'),
            'Preferred Visit Time: ' + value('visit-time'),
            'Door Condition: ' + value('door-condition'),
            'Project Details: ' + value('project-details'),
            '',
            'I can send garage photos and location on WhatsApp.'
        ];
        const consent = form.querySelector('[name="measurement-consent"]');
        if (consent && !consent.checked) {
            consent.focus();
            return;
        }
        window.open('https://wa.me/971552052347?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer');
    });
})();
