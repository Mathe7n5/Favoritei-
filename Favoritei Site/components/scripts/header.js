window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

function abrirFavoritos() {
  window.location.href = '/components/produtos.html';
}

function abrirHomePag() {
  window.location.href = '/components/favoritei.html'
}

function scrollToContainer() {
  document.getElementById('favoritar-container').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProductsContainer() {
  document.getElementById('lista-produtos-container').scrollIntoView({ behavior: 'smooth'});
}

function abrirLoginPage() {
  window.location.href = '/components/login.html'
}

function abrirSuportePage() {
  window.location.href = '/components/suport.html'
}