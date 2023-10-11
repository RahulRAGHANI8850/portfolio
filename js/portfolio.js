ScrollReveal
({
 reset:true,
 distance:'80px',
 duration:2000,
delay:200
});

ScrollReveal().reveal('.home-content', { delay: 500 ,origin:top});


const btn = document.getElementById('submit');
btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const name= document.getElementById('name');

  const email= document.getElementById('email');

  const phone= document.getElementById('phone');

  const msg= document.getElementById('msg');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  name.value = '';
  email.value = '';
  phone.value = '';
  msg.value = '';

});