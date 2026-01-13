function sendMessage() {
  const input = document.getElementById("message");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() !== "") {
    // User message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.textContent = input.value;
    chatBox.appendChild(userMsg);

    // Bot reply (simple demo)
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.textContent = "You said: " + input.value;
    chatBox.appendChild(botMsg);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    input.value = "";
  }
}
