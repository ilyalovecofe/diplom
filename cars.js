// Функция для применения фильтров
function applyFilters() {
    const year = parseInt(document.getElementById('filterYear').value);
    const mileage = parseInt(document.getElementById('filterMileage').value);
    const owners = parseInt(document.getElementById('filterOwners').value);

    const filteredCars = filterCars(cars, year, mileage, owners);
    renderCars(filteredCars);
}

// Функция для рендеринга карточек автомобилей
function renderCars(cars) {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // Очищаем список перед рендерингом
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class='car-image'/>
            <h4>${car.name}</h4>
            <p>Цена: ${car.price} руб.</p>
            <button onclick='addToCart(${car.id})'>Добавить в корзину</button>
            <div class="car-info">
                <p>Год выпуска: ${car.year}</p>
                <p>Пробег: ${car.mileage}</p>
                <p>Владельцы: ${car.owners}</p>
                <p>Участие в ДТП: ${car.accidents}</p>
                <p>Комментарий: ${car.comment}</p>
            </div>
        `;
        carList.appendChild(carItem);
    });
}

// Загрузка карточек автомобилей при старте
function loadCars() {
    renderCars(cars); // Отображаем все автомобили при загрузке
}

// Обновление UI авторизации
function updateAuthUI() {
    const authInfo = document.getElementById('authInfo');
    if (currentUser ) {
        authInfo.innerHTML = `
            <span>Привет, ${currentUser .email}!</span>
            <button onclick='logout()'>Выйти</button>`;
    } else {
        authInfo.innerHTML = `
            <a href='#' onclick='showAuthModal("login")'>Вход</a> | 
            <a href='#' onclick='showAuthModal("register")'>Регистрация</a>`;
    }
}