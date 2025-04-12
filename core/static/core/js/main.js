// Futuramente você pode colocar animações aqui
console.log("Site TP Solutions carregado com sucesso");

// Exemplo: animação suave no scroll (para futuras seções)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
