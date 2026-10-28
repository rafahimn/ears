 

(function boot(init) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})(function () {

    const motorHero = document.querySelector(
        '.dars-motor-hero'
    );

    if (!motorHero) {
        return;
    }

    const links = motorHero.querySelectorAll(
        '[data-motor-target]'
    );

    function openMotorSelector(motorName) {

        const selector =
            document.getElementById(
                'motor-selector'
            );

        try {
            sessionStorage.setItem(
                'darsSelectedMotorSystem',
                motorName
            );
        } catch (error) {
            /* Storage is optional. */
        }

        const matchingTab = document.querySelector(
            '[data-motor-system="' +
            motorName +
            '"]'
        );

        if (matchingTab) {
            matchingTab.click();
        }

        document.dispatchEvent(
            new CustomEvent(
                'darsMotorSystemSelected',
                {
                    detail: {
                        system: motorName
                    }
                }
            )
        );

        if (!selector) {
            return;
        }

        const header =
            document.querySelector('.site-header');

        const headerHeight =
            header ? header.offsetHeight : 76;

        const position =
            selector
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

                const motorName =
                    link.getAttribute(
                        'data-motor-target'
                    ) || 'sliding';

                if (
                    document.getElementById(
                        'motor-selector'
                    )
                ) {
                    event.preventDefault();
                }

                openMotorSelector(motorName);
            }
        );
    });
});

 
(function boot(init) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})(function () {

    const selector = document.querySelector(
        '.dars-motor-selector'
    );

    if (!selector) {
        return;
    }

    const whatsappNumber = '971552052347';

    const systemData = {
        sliding: {
            application: 'Sliding Gate',
            title: 'Sliding Gate Automation',
            packagePrefix: 'sliding gate',
            packages: [
                {
                    label: 'Standard Duty',
                    full: 'Standard-duty sliding gate motor',
                    note: 'Suitable for standard villa and residential sliding gates',
                    tag: 'Recommended'
                },
                {
                    label: 'Heavy Duty',
                    full: 'Heavy-duty sliding gate motor',
                    note: 'For larger gates, longer panels and frequent daily use',
                    tag: 'Commercial'
                },
                {
                    label: 'High Cycle',
                    full: 'High-cycle commercial gate motor',
                    note: 'For compounds, warehouses and high-frequency access points',
                    tag: 'Intensive Use'
                }
            ]
        },

        swing: {
            application: 'Swing Gate',
            title: 'Swing Gate Automation',
            packagePrefix: 'swing gate',
            packages: [
                {
                    label: 'Standard Arms',
                    full: 'Standard swing-gate arm motor system',
                    note: 'For standard single or double-leaf villa gates',
                    tag: 'Residential'
                },
                {
                    label: 'Heavy Gate',
                    full: 'Heavy-duty swing-gate motor system',
                    note: 'For larger metal gates and heavier gate leaves',
                    tag: 'Heavy Duty'
                },
                {
                    label: 'Underground',
                    full: 'Concealed underground swing-gate automation',
                    note: 'For premium properties requiring discreet automation',
                    tag: 'Premium'
                }
            ]
        },

        garage: {
            application: 'Garage Door',
            title: 'Garage Door Motor System',
            packagePrefix: 'garage door',
            packages: [
                {
                    label: 'Standard Operator',
                    full: 'Standard garage-door operator',
                    note: 'For normal residential sectional garage doors',
                    tag: 'Residential'
                },
                {
                    label: 'Quiet Drive',
                    full: 'Quiet-drive garage-door motor',
                    note: 'For villas requiring smoother and quieter operation',
                    tag: 'Quiet'
                },
                {
                    label: 'Heavy Door',
                    full: 'Heavy-duty garage-door operator',
                    note: 'For larger, insulated or frequently used garage doors',
                    tag: 'Heavy Duty'
                }
            ]
        },

        barrier: {
            application: 'Parking Barrier',
            title: 'Automatic Parking Barrier',
            packagePrefix: 'parking barrier',
            packages: [
                {
                    label: 'Standard Barrier',
                    full: 'Standard parking barrier system',
                    note: 'For residential buildings and normal parking access',
                    tag: 'Standard'
                },
                {
                    label: 'Fast Opening',
                    full: 'Fast-opening barrier system',
                    note: 'For busier vehicle entrances and controlled parking',
                    tag: 'Fast'
                },
                {
                    label: 'High Cycle',
                    full: 'High-cycle commercial parking barrier',
                    note: 'For continuous vehicle access and high daily traffic',
                    tag: 'Commercial'
                }
            ]
        }
    };

    const state = {
        systemKey: 'sliding',
        application: 'Sliding Gate',
        title: 'Sliding Gate Automation',
        package: 'Standard-duty sliding gate motor',
        packageLabel: 'Standard Duty',
        packageNote:
            'Suitable for standard villa and residential sliding gates',
        requirement:
            'New motor installation and automation',
        addons: [
            'Remote controls'
        ],
        schedule:
            'Standard installation or inspection schedule',
        location: '',
        size: ''
    };

    const tabs = selector.querySelectorAll(
        '.dars-motor-system-tab'
    );

    const packageButtons = selector.querySelectorAll(
        '.dars-motor-package'
    );

    const scene = selector.querySelector(
        '#darsMotorSelectorScene'
    );

    const locationInput = selector.querySelector(
        '#darsMotorLocation'
    );

    const sizeInput = selector.querySelector(
        '#darsMotorSize'
    );

    const quoteButton = selector.querySelector(
        '#darsMotorQuoteButton'
    );

    function shortRequirement(value) {
        if (value.indexOf('New motor') === 0) {
            return 'New Installation';
        }

        if (value.indexOf('Replace') === 0) {
            return 'Motor Replacement';
        }

        return 'Repair Existing System';
    }

    function shortSchedule(value) {
        return value.indexOf('Urgent') === 0
            ? 'Urgent Inspection'
            : 'Standard Schedule';
    }

    function renderPackageButtons(systemKey) {

        const system = systemData[systemKey];

        packageButtons.forEach(function (button, index) {

            const item = system.packages[index];

            button.setAttribute(
                'data-package',
                item.full
            );

            button.setAttribute(
                'data-package-label',
                item.label
            );

            button.setAttribute(
                'data-package-note',
                item.note
            );

            button.querySelector(
                '.dars-motor-package__main strong'
            ).textContent = item.label;

            button.querySelector(
                '.dars-motor-package__main small'
            ).textContent = item.note;

            button.querySelector(
                '.dars-motor-package__tag'
            ).textContent = item.tag;

            button.classList.toggle(
                'is-active',
                index === 0
            );
        });

        const firstPackage = system.packages[0];

        state.package = firstPackage.full;
        state.packageLabel = firstPackage.label;
        state.packageNote = firstPackage.note;
    }

    function updateSummary() {

        selector.querySelector(
            '#darsMotorApplicationTitle'
        ).textContent = state.title;

        selector.querySelector(
            '#darsMotorSummaryTitle'
        ).textContent = state.title;

        selector.querySelector(
            '#darsMotorSummaryPackage'
        ).textContent = state.packageNote + '.';

        selector.querySelector(
            '#darsMotorSummaryApplication'
        ).textContent = state.application;

        selector.querySelector(
            '#darsMotorSummaryDuty'
        ).textContent = state.packageLabel;

        selector.querySelector(
            '#darsMotorSummaryRequirement'
        ).textContent =
            shortRequirement(state.requirement);

        selector.querySelector(
            '#darsMotorSummaryAddons'
        ).textContent =
            state.addons.length
                ? state.addons.join(', ')
                : 'Standard controls only';

        selector.querySelector(
            '#darsMotorSummarySchedule'
        ).textContent =
            shortSchedule(state.schedule);

        selector.querySelector(
            '#darsMotorSummaryLocation'
        ).textContent =
            state.location || 'Not entered';

        scene.setAttribute(
            'data-motor-preview',
            state.systemKey
        );

        const message =
            'Hello Emirates Aluminium Shutter LLC,\n\n' +
            'I would like an official quotation for this motor and automation requirement:\n\n' +
            'Application: ' + state.application + '\n' +
            'Selected duty level: ' + state.packageLabel + '\n' +
            'Motor preference: ' + state.package + '\n' +
            'Required work: ' + state.requirement + '\n' +
            'Controls and safety options: ' +
            (
                state.addons.length
                    ? state.addons.join(', ')
                    : 'Standard controls'
            ) +
            '\n' +
            'Preferred schedule: ' + state.schedule + '\n' +
            'Approximate gate or door size: ' +
            (
                state.size ||
                'I will send photos and dimensions'
            ) +
            '\n' +
            'Location: ' +
            (
                state.location ||
                'I will send the location pin'
            ) +
            '\n\n' +
            'I will send clear photos and a short video for technical review.';

        quoteButton.href =
            'https://wa.me/' +
            whatsappNumber +
            '?text=' +
            encodeURIComponent(message);
    }

    function activateSystem(systemKey) {

        const system =
            systemData[systemKey] ||
            systemData.sliding;

        state.systemKey = systemKey;
        state.application = system.application;
        state.title = system.title;

        tabs.forEach(function (tab) {

            const isActive =
                tab.getAttribute(
                    'data-motor-system'
                ) === systemKey;

            tab.classList.toggle(
                'is-active',
                isActive
            );

            tab.setAttribute(
                'aria-selected',
                isActive ? 'true' : 'false'
            );
        });

        renderPackageButtons(systemKey);

        try {
            sessionStorage.setItem(
                'darsSelectedMotorSystem',
                systemKey
            );
        } catch (error) {
            /* Optional storage. */
        }

        updateSummary();
    }

    tabs.forEach(function (tab) {

        tab.addEventListener('click', function () {

            activateSystem(
                tab.getAttribute(
                    'data-motor-system'
                )
            );
        });
    });

    packageButtons.forEach(function (button) {

        button.addEventListener('click', function () {

            packageButtons.forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.package =
                button.getAttribute(
                    'data-package'
                );

            state.packageLabel =
                button.getAttribute(
                    'data-package-label'
                );

            state.packageNote =
                button.getAttribute(
                    'data-package-note'
                );

            updateSummary();
        });
    });

    selector.querySelectorAll(
        '.dars-motor-requirement'
    ).forEach(function (button) {

        button.addEventListener('click', function () {

            selector.querySelectorAll(
                '.dars-motor-requirement'
            ).forEach(function (item) {
                item.classList.remove('is-active');
            });

            button.classList.add('is-active');

            state.requirement =
                button.getAttribute(
                    'data-requirement'
                );

            updateSummary();
        });
    });

    selector.querySelectorAll(
        '.dars-motor-addon'
    ).forEach(function (button) {

        button.addEventListener('click', function () {

            const addon =
                button.getAttribute(
                    'data-addon'
                );

            button.classList.toggle('is-active');

            const marker =
                button.querySelector('span');

            if (button.classList.contains('is-active')) {

                marker.textContent = '✓';

                if (!state.addons.includes(addon)) {
                    state.addons.push(addon);
                }

            } else {

                marker.textContent = '+';

                state.addons =
                    state.addons.filter(function (item) {
                        return item !== addon;
                    });
            }

            updateSummary();
        });
    });

    selector.querySelectorAll(
        '.dars-motor-schedule'
    ).forEach(function (button) {

        button.addEventListener('click', function () {

            selector.querySelectorAll(
                '.dars-motor-schedule'
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

    locationInput.addEventListener('input', function () {
        state.location = locationInput.value.trim();
        updateSummary();
    });

    sizeInput.addEventListener('input', function () {
        state.size = sizeInput.value.trim();
        updateSummary();
    });

    document.addEventListener(
        'darsMotorSystemSelected',
        function (event) {

            if (
                event.detail &&
                event.detail.system &&
                systemData[event.detail.system]
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
                'darsSelectedMotorSystem'
            );

        if (
            storedSystem &&
            systemData[storedSystem]
        ) {
            activateSystem(storedSystem);
        } else {
            activateSystem('sliding');
        }

    } catch (error) {
        activateSystem('sliding');
    }
});

 
(function boot(init) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})(function () {

    const section = document.querySelector(
        '.dars-motor-brands-process'
    );

    if (!section) {
        return;
    }

    const motorLinks = section.querySelectorAll(
        '[data-brand-motor-target]'
    );

    motorLinks.forEach(function (link) {

        link.addEventListener('click', function (event) {

            const system =
                link.getAttribute(
                    'data-brand-motor-target'
                ) || 'sliding';

            const selector =
                document.getElementById(
                    'motor-selector'
                );

            try {
                sessionStorage.setItem(
                    'darsSelectedMotorSystem',
                    system
                );
            } catch (error) {
                /* Storage is optional. */
            }

            const tab = document.querySelector(
                '.dars-motor-system-tab[data-motor-system="' +
                system +
                '"]'
            );

            if (tab) {
                tab.click();
            }

            document.dispatchEvent(
                new CustomEvent(
                    'darsMotorSystemSelected',
                    {
                        detail: {
                            system: system
                        }
                    }
                )
            );

            if (!selector) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector('.site-header');

            const offset =
                header
                    ? header.offsetHeight + 18
                    : 90;

            const position =
                selector
                    .getBoundingClientRect()
                    .top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        });
    });
});

 
(function boot(init) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})(function () {

    const faqSection = document.querySelector(
        '.dars-gate-motor-faq'
    );

    if (!faqSection) {
        return;
    }

    const faqItems = faqSection.querySelectorAll(
        '.dars-gate-motor-faq-item'
    );

    faqItems.forEach(function (item) {

        const button = item.querySelector(
            '.dars-gate-motor-faq-item__question'
        );

        if (!button) {
            return;
        }

        button.addEventListener('click', function () {

            const isCurrentlyOpen =
                item.classList.contains('is-open');

            faqItems.forEach(function (faqItem) {

                faqItem.classList.remove('is-open');

                const faqButton = faqItem.querySelector(
                    '.dars-gate-motor-faq-item__question'
                );

                if (faqButton) {
                    faqButton.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                }
            });

            if (!isCurrentlyOpen) {
                item.classList.add('is-open');

                button.setAttribute(
                    'aria-expanded',
                    'true'
                );
            }
        });
    });
});
