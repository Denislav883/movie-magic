const movies = [
    {
    id: "a3682672-0ee4-1284-87559-35ee253329zv",
    title: "Jungle Cruise",
    genre: "Adventure",
    description: "Description: Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fKx-oGPfDAmTKaoNIm6OvbYL4M0dSpex-A&s",
    director: "Jaume Collet-Serra",
    year: "2021",
    rating: "6.6",
    category: "movie"
    },
    {
    id: "z2682672-0ee4-1534-8759-35ee253329ty",
    title: "Man of Steal",
    genre: "Superhero",
    description: "An alien child is evacuated from his dying world and sent to Earth to live among humans.",
    imageURL: "https://play-lh.googleusercontent.com/7_avhryHBfdjEJkKjE7yEtxLfwUBEs97VkHcBhPLPkZCIrQ353Jxx_M1qIBCjdze4bXK=w240-h480-rw",
    director: "Zack Snyder",
    year: "2013",
    rating: "7.1",
    category: "movie"
    },
    {
    id: "81313-08c0-40bf-85bc-1e7cdeebbef9",
    title: "Home Alone",
    genre: "Comedy",
    description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.",
    imageURL: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200",
    director: "Chris Columbus",
    year: "1992",
    rating: "8.3",
    category: "movie"
    },
];

export default class Movie {
    static find() {
        return movies.slice();
    }
}