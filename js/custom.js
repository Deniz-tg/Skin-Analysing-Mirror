Module.register("compliments", {
  defaults: {
    remoteFile: "compliments.json"
  },

  start: function () {
    this.compliments = {};
    this.loadCompliments();
    this.scheduleUpdate();
  },

  loadCompliments: function () {
    fetch(this.file(this.config.remoteFile))
      .then(res => res.json())
      .then(json => {
        this.compliments = json;
        this.updateDom();
      })
      .catch(err => console.error("Fehler beim Laden der compliments.json", err));
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    const now = new Date();
    const hour = now.getHours();
    const weekday = now.toLocaleString("de-AT", { weekday: "long" }).toLowerCase();

    let timeOfDay = "anytime";
    if (hour >= 6 && hour < 12) timeOfDay = "morning";
    else if (hour >= 12 && hour < 18) timeOfDay = "afternoon";
    else timeOfDay = "evening";

    const timeCompliments = this.compliments[timeOfDay] || [];
    const dayCompliments = this.compliments[weekday] || [];
    const allCompliments = [...timeCompliments, ...dayCompliments, ...(this.compliments.anytime || [])];

    const random = Math.floor(Math.random() * allCompliments.length);
    wrapper.innerHTML = allCompliments[random] || "Hallo!";

    return wrapper;
  },

  scheduleUpdate: function () {
    setInterval(() => {
      this.updateDom();
    }, 30 * 1000); // alle 30 Sekunden neues Kompliment
  }
});
