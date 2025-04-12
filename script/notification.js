document.addEventListener("DOMContentLoaded", () => {
    const updatesList = document.querySelector(".updates-list");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d5b050ce05b2cc1909766cb5ba8dfc13";

    const placeholderUpdates = [
        {
            category: "safety",
            icon: "🚨",
            message: "Road closure reported due to an accident on Main Street.",
            time: "30 minutes ago",
        },
        {
            category: "health",
            icon: "💊",
            message: "Free health checkup camp at City Hall this weekend.",
            time: "2 hours ago",
        },
        {
            category: "community",
            icon: "🏠",
            message: "Community shelter open at 123 Elm St., food and beds available.",
            time: "1 hour ago",
        },
    ];
    async function fetchWeatherUpdates() {
        try {
            const response = await fetch(WEATHER_API_URL);
            if (!response.ok) {
                throw new Error(`Failed to fetch weather updates: ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Weather API Response:", data);
            if (!data.name || !data.weather || !data.main) {
                throw new Error("Incomplete weather data received from API");
            }

            return [
                {
                    category: "weather",
                    icon: "🌤️",
                    message: `Current weather in ${data.name}: ${data.weather[0].description}, temperature: ${(data.main.temp - 273.15).toFixed(1)}°C.`,
                    time: "Just now",
                },
            ];
        } catch (error) {
            console.error("Error fetching weather updates:", error);
            return [
                {
                    category: "weather",
                    icon: "❌",
                    message: "Unable to fetch weather updates at the moment.",
                    time: "Just now",
                },
            ];
        }
    }
    async function fetchUpdates() {
        const weatherUpdates = await fetchWeatherUpdates();
        return [...weatherUpdates, ...placeholderUpdates];
    }
    function renderUpdates(updates, filter = "all") {
        updatesList.innerHTML = ""; 
        const filteredUpdates = updates.filter(
            (update) => filter === "all" || update.category === filter
        );

        filteredUpdates.forEach((update) => {
            const listItem = document.createElement("li");
            listItem.className = "update-item";
            listItem.innerHTML = `
                <div>
                    <span class="icon">${update.icon}</span>
                    ${update.message}
                </div>
                <span class="time">${update.time}</span>
            `;
            updatesList.appendChild(listItem);
        });
    }

   
    filterButtons.forEach((button) => {
        button.addEventListener("click", async () => {
           
            filterButtons.forEach((btn) => btn.classList.remove("active"));
           
            button.classList.add("active");

         
            const updates = await fetchUpdates();
            renderUpdates(updates, button.dataset.filter);
        });
    });

  
    fetchUpdates().then((updates) => renderUpdates(updates));
});




document.addEventListener("DOMContentLoaded", () => {
    const enableNotificationsBtn = document.getElementById("enableNotificationsBtn");
    enableNotificationsBtn.addEventListener("click", () => {
        if (Notification.permission === "granted") {
            alert("Notifications are already enabled!");
        } else if (Notification.permission === "denied") {
            alert("You have denied notifications. Please enable them in your browser settings.");
        } else {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    alert("Notifications have been enabled!");
                } else {
                    alert("Notifications were not enabled.");
                }
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const smsAlerts = document.getElementById("smsAlerts");
    const emailAlerts = document.getElementById("emailAlerts");
    const pushNotifications = document.getElementById("pushNotifications");
    const notificationFrequency = document.getElementById("notificationFrequency");
    smsAlerts.addEventListener("change", () => {
        console.log(`SMS Alerts: ${smsAlerts.checked ? "Enabled" : "Disabled"}`);
    });

    emailAlerts.addEventListener("change", () => {
        console.log(`Email Alerts: ${emailAlerts.checked ? "Enabled" : "Disabled"}`);
    });

    pushNotifications.addEventListener("change", () => {
        console.log(`Push Notifications: ${pushNotifications.checked ? "Enabled" : "Disabled"}`);
    });
    notificationFrequency.addEventListener("change", () => {
        console.log(`Notification Frequency: ${notificationFrequency.value}`);
    });
});