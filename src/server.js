import { createServer, Model } from "miragejs"

createServer({
    models: {
        hikes: Model,
        users: Model
    },
    seeds(server) {
        server.create("hike", {
            id: "1",
            name: "Fløyen",
            city:"Bergen",
            country:"Norway",
            distance: "10.2 km",
            estimated: "5 h",
            description: "Fløibanen is one of Norway's most visited attractions. At the top of Fløyen you will find a large and varied hiking area, spectacular views of the city.",
            imgSrc: "/src/assets/floyen.png"
        })
        server.create("hike", {
            id: "2",
            name: "Ulriken",
            city:"Bergen",
            country:"Norway",
            distance: "3.5 km",
            estimated: " 2 h 30 m",
            description: "Ulriken is the highest of the Seven Mountains that surround the city of Bergen, Norway. It has a height of 643 meters (2,110 ft) above sea level.",
            imgSrc: "/src/assets/ulriken.png"
        })
        server.create("hike", {
            id: "3",
            name: "Landåsfjellet",
            city:"Bergen",
            country:"Norway",
            distance: "4.3 km",
            estimated: "1 h 25 m",
            description: "Landåsfjellet is a lower plateau south of Ulriken/Haugavarden which offers numerous trails, and is almost a separate hiking region by its own.",
            imgSrc: "/src/assets/Landasfjellet.png"
        })
        server.create("hike", {
            id: "4",
            name: "Guatavita",
            city:"Bogotá",
            country:"Colombia",
            distance: "4.3 km",
            estimated: "1 h 25 m",
            description: "Landåsfjellet is a lower plateau south of Ulriken/Haugavarden which offers numerous trails, and is almost a separate hiking region by its own.",
            imgSrc: "/src/assets/guatavita-lake.jpg"
        })
        server.create("hike", {
            id: "5",
            name: "Nemocon",
            city:"Bogotá",
            country:"Colombia",
            distance: "4.3 km",
            estimated: "1 h 25 m",
            description: "Landåsfjellet is a lower plateau south of Ulriken/Haugavarden which offers numerous trails, and is almost a separate hiking region by its own.",
            imgSrc: "/src/assets/nemocon-salt-mine.jpg"
        })
        server.create("user", {
            id: "1",
            username: "admin",
            password: "12345"
        })
    },
    routes() {
        this.namespace = "api"
        
        this.get("/hikes", (schema, request) => {
            const city = request.queryParams.city
            if (city) {
                const allHikes = schema.hikes.all().models
                return allHikes.filter(hike => hike.city.toLowerCase().includes(city.toLowerCase()))
            }
            return schema.hikes.all().models
        }, { timing: 2000 })
        
        this.get("/hikes/:id", (schema, request) => {
            const id = request.params.id
            const hike = schema.hikes.find(id)
            if (!hike) {
                return new Response(404, { some: 'header' }, { errors: ['Resource not found'] })
            }
            return schema.hikes.find(id).models
        }, { timing: 1000 })

        this.post("/login", (schema, request) => {
            const { username, password } = JSON.parse(request.requestBody)
            const user = schema.users.findBy({ username })
            if (!user || user.password !== password) {
                throw new Error("Invalid username or password")
            }
        
            return { token: "123456", error: null, code: 200 }
        })
    }
})