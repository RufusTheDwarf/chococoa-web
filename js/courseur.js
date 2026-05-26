document.body.style.cursor = "none";

const cursor = document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.background = "rgba(128, 68, 20, 0.5)";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.transform = "translate(-50%, -50%)";
cursor.style.zIndex = "9999";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});