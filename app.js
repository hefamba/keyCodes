const insert = document.getElementById("insert");
const showKeyCode = (event) => {
  insert.innerHTML = `
        <div>
          <h1>${event.keyCode}</h1>
        </div>
        <div class="key">
          ${event.key}
          <small>event.key</small>
        </div>

        <div class="key">
          ${event.keyCode}
          <small>event.keyCode</small>
        </div>
        <div class="key">
          ${event.code}
          <small>event.code</small>
        </div>
  `;
};
window.addEventListener("keydown", showKeyCode);
