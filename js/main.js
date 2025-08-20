document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');

    // Dynamically load game cards
    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        
        // IMPORTANT: The link now also passes the game's title in the URL.
        // We use encodeURIComponent to make sure titles with spaces or symbols work correctly.
        const encodedTitle = encodeURIComponent(game.title);
        const gameUrl = `play.html?game=${game.path}&title=${encodedTitle}`;

        col.innerHTML = `
            <a href="${gameUrl}" class="game-card-link">
                <div class="game-card">
                    <img src="${game.thumbnail}" class="game-card-img" alt="${game.title}">
                    <h5 class="game-card-title">${game.title}</h5>
                </div>
            </a>
        `;
        
        gameGrid.appendChild(col);
    });
});