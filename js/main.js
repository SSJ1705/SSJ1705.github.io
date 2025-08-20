document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');

    // Dynamically load game cards
    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        
        // This whole card is now a link to the play page
        col.innerHTML = `
            <a href="play.html?game=${game.path}" class="game-card-link">
                <div class="game-card">
                    <img src="${game.thumbnail}" class="game-card-img" alt="${game.title}">
                    <h5 class="game-card-title">${game.title}</h5>
                </div>
            </a>
        `;
        
        gameGrid.appendChild(col);
    });
    
    // Initialize the FullCalendar scheduler
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
    });
    calendar.render();
});