document.addEventListener('DOMContentLoaded', function() {
    const gameGrid = document.getElementById('game-grid');
    const gameModal = new bootstrap.Modal(document.getElementById('gameModal'));
    const gameFrame = document.getElementById('game-frame');
    const gameModalLabel = document.getElementById('gameModalLabel');

    // Dynamically load games
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'col-md-3';
        gameCard.innerHTML = `
            <div class="game-card">
                <img src="${game.thumbnail}" alt="${game.title}">
                <h5>${game.title}</h5>
            </div>
        `;
        gameCard.addEventListener('click', () => {
            gameModalLabel.textContent = game.title;
            gameFrame.src = game.embedUrl;
            gameModal.show();
        });
        gameGrid.appendChild(gameCard);
    });

    // Navigation
    const sections = {
        games: document.getElementById('games-section'),
        scheduler: document.getElementById('scheduler-section'),
        ai: document.getElementById('ai-section')
    };

    document.getElementById('games-link').addEventListener('click', () => showSection('games'));
    document.getElementById('scheduler-link').addEventListener('click', () => showSection('scheduler'));
    document.getElementById('ai-link').addEventListener('click', () => showSection('ai'));

    function showSection(sectionId) {
        Object.values(sections).forEach(section => section.classList.add('d-none'));
        sections[sectionId].classList.remove('d-none');
    }

    // Initialize Scheduler
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        events: [] // You can add events here
    });
    calendar.render();
});