const { NODE_ENV } = import.meta.env;

export let serverUrl: string;

if (NODE_ENV === "development") {
    serverUrl = "http://localhost:5000/"; // адрес сервера на локалке
} else {
    serverUrl = "https://aquaterm-store-backend.onrender.com/";
    // serverUrl = "http://localhost:5000/"; 
}
