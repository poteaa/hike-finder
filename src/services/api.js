export async function getHikes() {
    const url = `/api/hikes`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hikes",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.hikes
}

export async function getHikesByCity(city) {
    const url = `/api/hikes?city=${city}`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hikes",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return [data, data.length && data[0].city]
}