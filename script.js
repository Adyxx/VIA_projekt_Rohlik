document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav2nd button');
  const dropdown = document.querySelector('.nav2nd .dropdown-content');
  const dropdownBtn = document.querySelector('.nav2nd .dropdown-btn');

  dropdown.style.display = 'none';

  function updateButtonsVisibility() {
    const maxVisible = getMaxButtonsVisible();
    let buttonsCount = 0;

    dropdown.innerHTML = '';

    buttons.forEach((button, index) => {
      if (button !== dropdownBtn) {
        if (buttonsCount < maxVisible - 1) { 
          button.style.display = 'inline-block';
          buttonsCount++;
        } else {
          button.style.display = 'none';
          const clone = button.cloneNode(true); 
          dropdown.appendChild(clone);
        }
      } else {
        button.style.display = 'inline-block';
        buttonsCount++;
      }
    });

    if (buttonsCount < buttons.length) {
      dropdownBtn.style.display = 'inline-block';
    } else {
      dropdownBtn.style.display = 'none';
    }
  }


  function getMaxButtonsVisible() {
    const containerWidth = document.querySelector('.nav2nd').offsetWidth;
    const buttonWidth = buttons[0].offsetWidth;
    const maxVisibleButtons = Math.floor(containerWidth / buttonWidth - 2); 
    return maxVisibleButtons;
  }


  updateButtonsVisibility();

  window.addEventListener('resize', function () {
    updateButtonsVisibility();
  });

  dropdownBtn.addEventListener('click', function () {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    console.log(dropdownBtn);
    console.log(dropdown);

  });
});
