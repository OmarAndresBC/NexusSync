// Nexus Sync - Core Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('Nexus Sync cargado correctamente.');
    
    // Simulación de carga de actividad (esto se podría conectar a un backend)
    const activities = [
        { user: 'Tu Compañero', text: 'Ha subido una nueva especificación de API.', time: 'Hace 2 horas', icon: 'file-text' },
        { user: 'Claude (IA)', text: 'He optimizado las consultas a la base de datos.', time: 'Hace 3 horas', icon: 'cpu' },
        { user: 'Sistema', text: 'Nueva versión del plan de implementación disponible.', time: 'Hace 5 horas', icon: 'info' }
    ];

    const feed = document.getElementById('feed');

    activities.forEach(item => {
        const div = document.createElement('div');
        div.className = 'feed-item';
        div.innerHTML = `
            <div class="icon-box"><i data-lucide="${item.icon}"></i></div>
            <div class="feed-content">
                <strong>${item.user}:</strong> ${item.text}
                <span>${item.time}</span>
            </div>
        `;
        feed.appendChild(div);
    });

    // Re-ejecutar Lucide para los nuevos iconos
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
