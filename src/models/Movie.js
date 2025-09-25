import { v4 as uuid } from "uuid";

const movies = [
    {
    _id: "a3682672-0ee4-1284-87559-35ee253329zv",
    title: "Jungle Cruise",
    genre: "Adventure",
    description: "Description: Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fKx-oGPfDAmTKaoNIm6OvbYL4M0dSpex-A&s",
    director: "Jaume Collet-Serra",
    year: "2021",
    rating: "6.6",
    category: "movie"
    },
    {
    _id: "z2682672-0ee4-1534-8759-35ee253329ty",
    title: "Man of Steal",
    genre: "Superhero",
    description: "An alien child is evacuated from his dying world and sent to Earth to live among humans.",
    imageUrl: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/manofsteel_3.png",
    director: "Zack Snyder",
    year: "2015",
    rating: "7.1",
    category: "movie"
    },
    {
    _id: "81313-08c0-40bf-85bc-1e7cdeebbef9",
    title: "Home Alone",
    genre: "Comedy",
    description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.",
    imageUrl: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200",
    director: "Chris Columbus",
    year: "1992",
    rating: "8.3",
    category: "movie"
    },
];

export default class Movie {
    constructor(data) {
        Object.assign(this, data)

        this._id = uuid();
    }
    
    static find(filter = {}) {
        let result = movies.slice();

        if(filter._id) {
            result = movies.filter(movie => movie._id === filter._id);
        }

        if(filter.title) {
            result = result.filter(movie)
        }

        if(filter.genre) {
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        }

        if(filter.year) {
            result = result.filter(movie => movie.year === filter.year);
        }

        return result
    }

    static findOne(filter = {}) {
        let result = movies[0];

        if(filter._id) {
            result = movies.find(movie => movie._id === filter._id);
        }

        return result;
    }

    get id() {
        return this._id;
    }

    save() {
        movies.push(this);
        return this;
    }
}