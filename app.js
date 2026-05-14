// Nexus Sync - Core Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('Nexus Sync cargado correctamente.');
    loadFeed();
    loadPrompts();
});

function showSection(sectionId) {
    // Ocultar todos los main
    document.querySelectorAll('main').forEach(m => m.style.display = 'none');
    // Quitar active de los links
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    // Mostrar el seleccionado
    document.getElementById(sectionId).style.display = 'block';
    // Poner active al link correspondiente
    event.target.classList.add('active');
}

function loadFeed() {
    const activities = [
        { user: 'Tu Compañero', text: 'Ha subido una nueva especificación de API.', time: 'Hace 2 horas', icon: 'file-text' },
        { user: 'Claude (IA)', text: 'He optimizado las consultas a la base de datos.', time: 'Hace 3 horas', icon: 'cpu' },
        { user: 'Sistema', text: 'Nueva versión del plan de implementación disponible.', time: 'Hace 5 horas', icon: 'info' }
    ];

    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Limpiar

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
    if (window.lucide) window.lucide.createIcons();
}

// Lógica de Prompts
let prompts = [
    { title: 'Generador de Unit Tests', content: 'Actúa como un experto en testing y genera pruebas para el siguiente código...' },
    { title: 'Refactorización Clean Code', content: 'Revisa este código y aplica principios SOLID y Clean Code...' }
];

function loadPrompts() {
    const grid = document.getElementById('promptsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    prompts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>"${p.content.substring(0, 80)}..."</p>
            <button class="btn-primary" onclick="copyPrompt('${p.content}')">Copiar Prompt</button>
        `;
        grid.appendChild(card);
    });
}

function openModal() {
    document.getElementById('promptModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('promptModal').style.display = 'none';
}

function savePrompt() {
    const title = document.getElementById('newPromptTitle').value;
    const content = document.getElementById('newPromptContent').value;

    if (title && content) {
        prompts.push({ title, content });
        loadPrompts();
        closeModal();
        // Limpiar campos
        document.getElementById('newPromptTitle').value = '';
        document.getElementById('newPromptContent').value = '';
    }
}

function copyPrompt(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Prompt copiado al portapapeles');
    });
}
