import Animation from './animations.js';

window.onload = function () {

    // Define the icons, titles, and descriptions in an array
    const navItems = [
        {
            icon: 'fas fa-user',
            title: 'About Me',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            icon: 'fas fa-gears',
            title: 'Services',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            icon: 'fas fa-briefcase',
            title: 'Experience',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            icon: 'fas fa-school',
            title: 'Education',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            icon: 'fas fa-info',
            title: 'Others',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];
    const searchInput = document.querySelector('.search');
    const container = document.querySelector('.container-1-1-3');

    function animateCards() {
        const cardElements = document.querySelectorAll('.animate-cards');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'slideInBottom', { duration: 500, easing: 'ease-in-out' });
            animate.animate();
        });
    }

    function animateCards1() {
        const cardElements = document.querySelectorAll('.animate-cards-1');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'slideInLeft', { duration: 500, easing: 'ease-in-out' });
            animate.animate();
        });
    }

    function animateCards4() {
        const cardElements = document.querySelectorAll('.animate-cards-4');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'slideInRight', { duration: 500, easing: 'ease-in-out' });
            animate.animate();
        });
    }

    function animateCards2() {
        const cardElements = document.querySelectorAll('.animate-cards-2');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'slideInTop', { duration: 500, easing: 'ease-in-out' });
            animate.animate();
        });
    }

    function animateCards3() {
        const cardElements = document.querySelectorAll('.animate-cards-3');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'blurIn', { duration: 1000, easing: 'ease-in-out' });
            animate.animate();
        });
    }

    function animateCards5() {
        const cardElements = document.querySelectorAll('.animate-cards-5');
        cardElements.forEach((element) => {
            const animate = new Animation(element, 'typewrite', {
                typingSpeed: 100,
                loop: true,
                typeBy: 'char',
                loopDelay: 1000,
            });
            animate.animate();
        });
    }

    // Function to populate the container with nav items
    function populateContainer(navItems) {
        container.innerHTML = ''; // clear the container

        navItems.forEach((item) => {
            const navItem = document.createElement('div');
            navItem.classList.add('container-nav', 'w-max', 'b-rad', 'hover-1');

            const group1 = document.createElement('div');
            group1.classList.add('group-1');
            const icon = document.createElement('i');
            const iconClasses = item.icon.split(' '); // Split the icon string into an array of classes
            iconClasses.forEach((cls) => {
                icon.classList.add(cls); // Add each class individually
            });
            icon.classList.add('icons');
            group1.appendChild(icon);

            const group2 = document.createElement('div');
            group2.classList.add('group-2', 'remove');
            const title = document.createElement('p');
            title.classList.add('title', 'f-weight');
            title.textContent = item.title;
            const description = document.createElement('p');
            description.textContent = item.description;
            group2.appendChild(title);
            group2.appendChild(description);

            navItem.appendChild(group1);
            navItem.appendChild(group2);

            container.appendChild(navItem);

            const animateGroup1 = new Animation(group1, 'flip', { duration: 500, easing: 'ease-in-out' });
            animateGroup1.animate();

            const animateTitle = new Animation(title, 'typewrite', {
                typingSpeed: 150,
                loop: false,
                typeBy: 'char',
                loopDelay: 2000
            });
            animateTitle.animate();

            const animateDesc = new Animation(description, 'typewrite', {
                typingSpeed: 150,
                loop: false,
                typeBy: 'word',
                loopDelay: 2000
            });
            animateDesc.animate();
        });
    }

    // Populate the container with all nav items initially
    populateContainer(navItems);
    animateCards();
    animateCards1();
    animateCards2();
    animateCards3();
    animateCards4();
    animateCards5();

    searchInput.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredNavItems = navItems.filter((item) => {
            return item.title.toLowerCase().includes(searchQuery);
        });

        populateContainer(filteredNavItems);
    });

    const minimizeButton = document.querySelector('.minimize-button');
    const iconsContainer = document.querySelector('.container-1');
    const container3 = document.querySelector('.container-3');
    let isMinimized = false;

    // Add event listener to hover-2 elements
    const hover2Elements = iconsContainer.querySelectorAll('.hover-1');
    hover2Elements.forEach((element) => {
        element.addEventListener('mouseover', (event) => {
            const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
                return child !== element;
            });
            siblings.forEach((sibling) => {
                sibling.classList.add('hover-2-hovered');
            });
        });
        element.addEventListener('mouseout', (event) => {
            const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
                return child !== element;
            });
            siblings.forEach((sibling) => {
                sibling.classList.remove('hover-2-hovered');
            });
        });
    });



    minimizeButton.addEventListener('click', () => {
        if (!isMinimized) {
            iconsContainer.classList.add('minimized');
            isMinimized = true;
            // Hide elements with class "remove"
            const removeElements = iconsContainer.querySelectorAll('.remove');
            removeElements.forEach((element) => {
                element.classList.add('hidden');
            });
            // Add class to container-nav elements to override hover styles
            const navItems = iconsContainer.querySelectorAll('.hover-1');
            navItems.forEach((item) => {
                item.classList.add('hover-2');
                item.classList.remove('hover-1');
            });

            // Add center-icon class to elements with f-c class
            const fCElements = iconsContainer.querySelectorAll('.f-c');
            fCElements.forEach((element) => {
                element.classList.add('center-icon');
            });

            const iconElements = iconsContainer.querySelectorAll('.fa-square-minus');
            iconElements.forEach((element) => {
                element.classList.add('fa-expand');
                element.classList.remove('fa-square-minus');
            });



        } else {
            iconsContainer.classList.remove('minimized', 'hover-2-hovered');
            isMinimized = false;
            // Show elements with class "remove"
            const removeElements = iconsContainer.querySelectorAll('.remove');
            removeElements.forEach((element) => {
                element.classList.remove('hidden');
            });
            // Remove class from container-nav elements to restore hover styles
            const navItems = iconsContainer.querySelectorAll('.hover-2');
            navItems.forEach((item) => {
                item.classList.add('hover-1');
                item.classList.remove('hover-2');
            });
            // Remove center-icon class from elements with f-c class
            const fCElements = iconsContainer.querySelectorAll('.f-c');
            fCElements.forEach((element) => {
                element.classList.remove('center-icon');
            });

            const iconElements = iconsContainer.querySelectorAll('.fa-expand');
            iconElements.forEach((element) => {
                element.classList.add('fa-square-minus');
                element.classList.remove('fa-expand');
            });
        }
    });

    let isContainer3Minimized = false;

    function toggleMinimize() {
        if (window.innerWidth <= 1024) {
            if (!isContainer3Minimized) {
                minimizeButton.click();
                container3.classList.add('minimized');
                isContainer3Minimized = true;
            }
        } else {
            if (isContainer3Minimized) {
                minimizeButton.click();
                container3.classList.remove('minimized');
                isContainer3Minimized = false;
            }
        }
    }

    window.addEventListener('resize', toggleMinimize);
};