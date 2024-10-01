import { storeToken, removeToken } from "./authService"

async function fetchData(url, options) {
    const res = await fetch(url, options)
    console.log('res', res)
    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText} (${res.status})`)
    }
    return res.json()
}

export async function getHikes() {
    const url = `/api/hikes`
    return fetchData(url)
}

export async function getHikesByCity(city) {
    const url = `/api/hikes?city=${city}`
    return fetchData(url)
}

export async function login(username, password) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    };
    try {
        const data = await fetchData("/api/login/", options);

        // Assuming the token is returned in the response data
        const token = data.token
        storeToken(token)
    } catch (error) {
        // Handle the error here, for example:
        console.error("An error occurred during login:", error)
        throw new Error("Failed to login. Please try again.")
    }
}

export async function logout() {
    removeToken()
}