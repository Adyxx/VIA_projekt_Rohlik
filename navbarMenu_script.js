document.addEventListener('DOMContentLoaded', () => {
    const hoverMenu = document.getElementById('hoverMenu');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-btn[data-hover="kategorie"]');
    let isHovering = false;
    let hoverTimeout;

    const showMenu = (menuName) => {
        let content = '';
        if (menuName === 'Ovoce a zelenina') {
            content = `
<div class="grid-container">

    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (1).avif" alt="Ovoce" class="grid-image">
        </div>
        <div class="grid-right">
            <a href="#"><b>Ovoce</b></a>
            <a href="#">Banány a exotické ovoce</a>
            <a href="#">Citrusy</a>
            <a href="#">Jablka a hrušky</a>
            <a href="#">+ Více</a>
        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (2).avif" alt="Zelenina" class="grid-image">
        </div>
        <div class="grid-right">
                    <a href="#"><b>Zelenina</b></a>
            <a href="#">Rajčata</a>
            <a href="#">Mrkev a kořenová zelenina</a>
            <a href="#">Okurky, cukety a lilky</a>
            <a href="#">+ Více</a>
        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (3).avif" alt="Bobulové ovoce" class="grid-image">
        </div>
        <div class="grid-right">
                    <a href="#"><b>Čerstvě sklizeňo</b></a>
            <a href="#">Ovoce</a>
            <a href="#">Zelenina</a>
            <a href="#">Bylinky</a>
            <a href="#">+ Více</a>
        </div>
    </div>

    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (4).avif" alt="Tropické ovoce" class="grid-image">
        </div>
        <div class="grid-right">
                <a href="#"><b>BIO ovoce a zelenina</b></a>
            <a href="#">BIO Bylinky</a>
            <a href="#">BIO Ovoce</a>
            <a href="#">BIO Zelenina</a>
            <a href="#">BIO Mixované bedýnky</a>
        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (5).avif" alt="Koření" class="grid-image">
        </div>
        <div class="grid-right">
                    <a href="#"><b>Bylinky a akoření</b></a>
            <a href="#">Řezané</a>
            <a href="#">V květináči</a>
            <a href="#">Květináče a truhlíky</a>
            <a href="#">+ Více</a>
        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (6).avif" alt="Nápoje" class="grid-image">
        </div>
        <div class="grid-right">
                    <a href="#"><b>Houby</b></a>
            <a href="#">Čerstvé</a>
            <a href="#">Sušené</a>

        </div>
    </div>
    <!-- Row 3 -->
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (7).avif" alt="Mléčné výrobky" class="grid-image">
        </div>
        <div class="grid-right">
            <a href="#"><b>Kuchařské boxy s čerstvou zeleninou</b></a>
        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (8).avif" alt="Pečivo" class="grid-image">
        </div>
        <div class="grid-right">
                    <a href="#"><b>Ovocné a zeleninové bydýnky</b></a>
            <a href="#">Farmářské tašky - Rohlík.cz</a>
            <a href="#">BIO bedýnky</a>

        </div>
    </div>
    <div class="grid-item">
        <div class="grid-left">
            <img src="src/img2/hover-menu/1 (9).avif" alt="Lahůdky" class="grid-image">
        </div>
        <div class="grid-right">
            <a href="#"><b>Květiny</b></a>
            <a href="#">Celoroční dekorace</a>
            <a href="#">Řezané</a>
            <a href="#">V květináči</a>
            <a href="#">+ Více</a>
        </div>
    </div>
</div>
            `;
        } else if (menuName === 'Mléčné a chlazené') {
            content = `
                <div class="menu-item">
                    <img src="path_to_image" alt="Mléčné a chlazené">
                    <strong>Mléčné a chlazené</strong>
                    <div class="buttons">
                        <button>Mléko</button>
                        <button>Sýry</button>
                        <button>Jogurty</button>
                        <button>+ Více</button>
                    </div>
                </div>
                <!-- More items for Mléčné a chlazené -->
            `;
        } else if (menuName === 'Maso a ryby') {
            content = `
                <div class="menu-item">
                    <img src="path_to_image" alt="Maso a ryby">
                    <strong>Maso a ryby</strong>
                    <div class="buttons">
                        <button>Hovězí maso</button>
                        <button>Vepřové maso</button>
                        <button>Ryby</button>
                        <button>+ Více</button>
                    </div>
                </div>
                <!-- More items for Maso a ryby -->
            `;
        } else {
            content = `<strong>Coming Soon</strong>`;
        }

        hoverMenu.innerHTML = content;
        hoverMenu.style.display = 'block';
        dropdownContent.style.display = 'block'; 
    };

    const hideMenu = () => {
        if (!isHovering) {
            hoverMenu.style.display = 'none';
            dropdownContent.style.display = 'none';
        }
    };

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            const menuName = item.getAttribute('data-menu');
            isHovering = true;
            clearTimeout(hoverTimeout);
            showMenu(menuName);
        });

        item.addEventListener('mouseout', () => {
            isHovering = false;
            hoverTimeout = setTimeout(hideMenu, 200);
        });
    });

    hoverMenu.addEventListener('mouseover', () => {
        isHovering = true;
        clearTimeout(hoverTimeout);
    });

    hoverMenu.addEventListener('mouseout', () => {
        isHovering = false;
        hoverTimeout = setTimeout(hideMenu, 200);
    });

    dropdownContent.addEventListener('mouseover', () => {
        isHovering = true;
        clearTimeout(hoverTimeout);
        dropdownContent.style.display = 'block'; 
    });

    dropdownContent.addEventListener('mouseout', () => {
        isHovering = false;
        hoverTimeout = setTimeout(hideMenu, 200);
    });

    dropdownButton.addEventListener('mouseover', () => {
        isHovering = true;
        clearTimeout(hoverTimeout);
        dropdownContent.style.display = 'block';
    });

    dropdownButton.addEventListener('mouseout', () => {
        isHovering = false;
        hoverTimeout = setTimeout(hideMenu, 200);
    });
});








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
  