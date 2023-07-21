<script>
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor = {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    })
  })

  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    // Get form input values
  }const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    // Perform form validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields')
    }return
    
    

    // Send form data to server (replace with your own logic)
    // For demonstration purposes, we'll log the form data to the console
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Thank you for your message!');
  )
 
</script>
function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    return greeting;
}

const greetingMessage = getGreeting();
console.log(greetingMessage);

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter button');

// Add event listener to each filter button
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the data-filter value of the clicked button
    const filterValue = button.dataset.filter;

    // Get all project elements
    const projects = document.querySelectorAll('.project');

    // Filter the projects based on the category
    projects.forEach((project) => {
      if (filterValue === 'all') {
        // Show all projects if "All" is selected
        project.style.display = 'block';
      } else {
        const category = project.dataset.category;

        if (category === filterValue) {
          // Show the project if it matches the selected category
          project.style.display = 'block';
        } else {
          // Hide the project if it does not match the selected category
          project.style.display = 'none';
        }
      }
    });

    // Toggle the active class for the filter buttons
    filterButtons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');
  });
});

// Get the form element
const contactForm = document.querySelector('#contact-form');

// Add event listener to the form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form inputs
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  // Get the form input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate the form inputs
  if (name === '') {
    showError(nameInput, 'Please enter your name');
  } else {
    showSuccess(nameInput);
  }

  if (email === '') {
    showError(emailInput, 'Please enter your email');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Please enter a valid email');
  } else {
    showSuccess(emailInput);
  }

  if (message === '') {
    showError(messageInput, 'Please enter your message');
  } else {
    showSuccess(messageInput);
  }
});

// Function to show an error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const errorText = formControl.querySelector('.error-text');
  errorText.textContent = message;
}

// Function to show a success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Function to validate an email address using regular expression
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



// Set an interval to show the next slide every 3 seconds
setInterval(showNextSlide, 3000);

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the target section id from the href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Get the target section element
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();