document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelectorAll('.Centraliser').forEach(function(el) {
      el.style.transform = `translate(${-x}px, ${-y}px)`;
    });
  });
});
