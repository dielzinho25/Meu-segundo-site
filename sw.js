self.addEventListener("push", function(event) {
 self.registration.showNotification("Agenda", {
  body: event.data.text(),
  icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
 });
});
