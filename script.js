// Sidebar and Info Modal Logic

// Info Button Event Listener
document.getElementById('infoButton').addEventListener('click', function() {
    $('#infoModal').modal('show');
});

// Chat send button logic
document.getElementById('sendButton').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput').value;
    if (chatInput) {
        const chatArea = document.querySelector('.chat-area');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = chatInput;
        chatArea.appendChild(userMessage);
        document.getElementById('chatInput').value = '';  // Clear input field
        chatArea.scrollTop = chatArea.scrollHeight; // Scroll to bottom
    }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');

    // Toggle display of sidebar
    if (sidebar.style.display === "block") {
        // Hide sidebar
        sidebar.style.display = "none";
    } else {
        // Show sidebar
        sidebar.style.display = "block";
    }
});

