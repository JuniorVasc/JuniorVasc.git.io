/* Verifica o status de conexão do navegador e atualiza a classe do elemento de status */
function atualizarStatus() {
    var statusElement = document.getElementById('status');
    if (navigator.onLine) {
      statusElement.textContent = 'Status (online)';
      statusElement.classList.remove('offline'); // Remove a classe 'offline'
      statusElement.classList.add('online'); // Adiciona a classe 'online'
    } else {
      statusElement.textContent = 'Status (offline)';
      statusElement.classList.remove('online'); // Remove a classe 'online'
      statusElement.classList.add('offline'); // Adiciona a classe 'offline'
    }
}

// Executa a função ao carregar a página e registra o evento de alteração de status
atualizarStatus();
window.addEventListener('online', atualizarStatus);
window.addEventListener('offline', atualizarStatus);

