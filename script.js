document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#tabs li a');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const currentTab = document.querySelector('.active');
      currentTab.classList.remove('active');
      tab.classList.add('active');
    });
  });
});
