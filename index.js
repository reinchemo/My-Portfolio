const menu = document.getElementById('menu');
const backdrop = document.getElementById('backdrop');
const works = document.getElementById('works');
const contactForm = document.getElementById('contact-form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');

// eslint-disable-next-line
function showMenu() {
  menu.classList.remove('mobile-menu-hide');
  backdrop.classList.remove('backdrop-hidden');
  document.body.style.overflow = 'hidden';
}

// eslint-disable-next-line
function hideMenu() {
  menu.classList.add('mobile-menu-hide');
  backdrop.classList.add('backdrop-hidden');
  document.body.style.overflow = 'auto';
}

// projects
//DOM MANIPULATION
const projectsData = [
  {
    id: 1,
    name: 'E-commerce',
    description:
      'This is a platform where buyers can view prices of electroic products and its ratings ',

    image: 'assets/projects/ecommerce.png',
    liveLink: 'https://reinchemo.github.io/commerce/',
    githubLink: 'https://github.com/reinchemo/commerce',
    technologies: ['HTML', 'Javascript', 'Css'],
  },

  {
    id: 2,
    name: 'Project 2',
    description:
      'A website that notifies one about available food one can book a table and also get delivery.',
    image: 'assets/projects/food.png',
    liveLink: 'https://reinchemo.github.io/Food_Restaurant/',
    githubLink: 'https://github.com/reinchemo/Food_Restaurant',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 3,
    name: 'Project 3',
    description:
      'A movie website that notifies one about the best Tv shows and the most wached movies',
    image: 'assets/projects/movie.png',
    liveLink: 'https://reinchemo.github.io/vim/',
    githubLink: 'https://github.com/reinchemo/vim',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 4,
    name: 'Project 4',
    description:
      'A website that displays clothes, shoes and electronic products with their pricing.',
    image: 'assets/projects/clothes2.png',
    liveLink: ' https://reinchemo.github.io/women_clothes/',
    githubLink: 'https://github.com/reinchemo/women_clothes',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 5,
    name: 'Project 5',
    description:
      'An android mobile App that opens cabinets and switch on lights',
    image: 'assets/projects/App.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://github.com/reinchemo/GAE-closet',
    technologies: ['Mqtt', 'Java'],
  },

  {
    id: 6,
    name: 'Project 6',
    description:
      'A website that displays the Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.',
    image: 'assets/projects/watch.png',
    liveLink: 'https://reinchemo.github.io/rolex-watch/',
    githubLink: 'https://github.com/reinchemo/rolex-watch',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },

];


function createProjectCards(projects) {
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.innerHTML = `
        <div class='card-media' style='background-image: url(${project.image});'>
        </div>
        <div class='card-body'>
            <h2 class='card-title'>
                ${project.name}
            </h2>
            <ul class='card-tags'>
                ${project.technologies.map((tech) => `<li class='card-tag'>${tech}</li>`).join('')}
            </ul>
            <button data-target="modal-${project.id}" onclick="showModal(this)" class='card-btn'>See Project</button>
        </div>
        `;
    works.appendChild(projectCard);
  });
}


function createModals(projects) {
  projects.forEach((project) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-container');
    modal.classList.add('modal-hidden');
    modal.id = `modal-${project.id}`;
    modal.innerHTML = `
    <div class="modal-close">
        <img class="close-icon" onclick="closeModal('modal-${project.id}')" src="assets/Icon.png" alt="close">
    </div>
    <div class="modal-media" style="background-image: url('${project.image}');">
    </div>
    <div class="modal-header">
        <div>
            <h2 class="modal-title">
                ${project.name}
            </h2>
        </div>
        <div class="modal-btns flex-hidden">
            <a href="${project.liveLink}" class="modal-btn">
                See Live
                <img class="ml-1" src="assets/live-btn.svg" alt="">
            </a>
            <a href="${project.githubLink}" class="modal-btn">
                See Source
                <img class="ml-1" src="assets/github-btn.svg" alt="">
            </a>
        </div>
    </div>
    <ul class="modal-tags">
        ${project.technologies.map((tech) => `<li class="modal-tag">${tech}</li>`).join('')}
    </ul>
    <div class="modal-desc">
        <p>
            ${project.description}
        </p>
        <div class="modal-btns lg-hidden mt-2 flex">
        <a href="${project.liveLink}" class="modal-btn">
            See Live
            <img class="ml-1" src="assets/live-btn.svg" alt="">
        </a>
        <a href="${project.githubLink}" class="modal-btn">
            See Source
            <img class="ml-1" src="assets/github-btn.svg" alt="">
        </a>
    </div>
    </div>
  `;
    document.body.appendChild(modal);
  });
}



// eslint-disable-next-line no-unused-vars
function showModal(btn) {
  const modal = document.getElementById(btn.dataset.target);
  modal.classList.remove('modal-hidden');
  backdrop.classList.remove('backdrop-hidden');
}

// eslint-disable-next-line no-unused-vars
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('modal-hidden');
  backdrop.classList.add('backdrop-hidden');
}

// saving info
function saveInfo(fullName, email) {
  const jsonInput = JSON.stringify({ fullName, email });
  localStorage.setItem('userInfo', jsonInput);
}

// form validation
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = contactForm.email.value;
  const fullName = contactForm.name.value;
  const message = contactForm.message.value;

  if (fullName.length === 0 || email.length === 0 || message.length === 0) {
    const error = document.createElement('small');
    error.textContent = 'Please fill in all fields';
    error.classList.add('text-red-500', 'block', 'mt-2');
    contactForm.insertBefore(error, contactForm.lastChild);
  } else if (email !== email.toLowerCase()) {
    const error = document.createElement('small');
    error.textContent = 'Please enter a lowercase email address';
    error.classList.add('text-red-500', 'block', 'mt-2');
    contactForm.insertBefore(error, contactForm.lastChild);
  } else if (email.indexOf('@') === -1) {
    const error = document.createElement('small');
    error.textContent = 'Please enter a valid email address';
    error.classList.add('text-red-500', 'block', 'mt-2');
    contactForm.insertBefore(error, contactForm.lastChild);
  } else {
    contactForm.submit();
    saveInfo(fullName, email);
    const success = document.createElement('small');
    success.textContent = 'Your message was sent successfully';
    success.classList.add('text-green-500', 'block', 'mt-2');
    contactForm.insertBefore(success, contactForm.lastChild);
    contactForm.reset();
  }
});

let userInfo = localStorage.getItem('userInfo');
userInfo = JSON.parse(userInfo);

fullName.value = userInfo?.fullName ? userInfo.fullName : '';
email.value = userInfo?.email ? userInfo.email : '';

createModals(projectsData);
createProjectCards(projectsData);
