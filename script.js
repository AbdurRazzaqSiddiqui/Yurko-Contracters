const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});

function toggleMessagingPanel() {
  var messagingPanel = document.getElementById('messagingPanel');
  messagingPanel.style.display = (messagingPanel.style.display === 'block') ? 'none' : 'block';
}