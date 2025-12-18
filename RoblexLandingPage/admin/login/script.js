const form = document.getElementById("admin-login-form");
const peekButton = document.querySelector(".peek");
const passwordField = form?.querySelector("input[name='password']");

peekButton?.addEventListener("click", () => {
  if (!passwordField) return;
  const show = passwordField.type === "password";
  passwordField.type = show ? "text" : "password";
  peekButton.classList.toggle("peek--active", show);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  console.table(payload);

  const button = form.querySelector(".Buttons");
  if (!button) return;

  const defaultLabel = button.textContent?.trim() || "Продолжить";
  button.disabled = true;
  button.textContent = "Проверяем доступ...";

  setTimeout(() => {
    button.disabled = false;
    button.textContent = defaultLabel;
    alert("Admin login endpoint is not wired up yet. Replace this stub with a call to your backend.");
  }, 900);
});
