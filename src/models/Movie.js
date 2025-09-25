const movies = [
    {
    id: "a3682672-0ee4-1284-87559-35ee253329zv",
    title: "Jungle Cruise",
    genre: "Adventure",
    description: "Description: Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
    imageURL: "/img/jungle-cruise.jpeg",
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
    imageURL: "http://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BM15BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
    director: "Zack Snyder",
    year: "2013",
    rating: "7.1",
    category: "movie"
    },
];

export default class Movie {
    static find() {
        return movies.slice();
    }
}