export type MovieProps = {
  title: string;
  director: string;
  image: string;
  link: string;
};

export const movies = [
  {
    title: "Eternity",
    director: "David Freyne",
    image: require("../../public/movies/eternity.jpg"),
    link: "https://www.imdb.com/title/tt24950660/?ref_=fn_t_1",
  },
  {
    title: "Monkey Man",
    director: "Dev Patel",
    image: require("../../public/movies/monkey-man.jpg"),
    link: "https://www.imdb.com/title/tt9214772/?ref_=ext_shr_lnk",
  },
  {
    title: "The Apprentice",
    director: "Ali Abbasi",
    image: require("../../public/movies/the-apprentice.jpg"),
    link: "https://www.imdb.com/title/tt8368368/?ref_=ext_shr_lnk",
  },
  {
    title: "The Trial of the Chicago 7",
    director: "Aaron Sorkin",
    image: require("../../public/movies/chicago-seven.jpg"),
    link: "https://www.imdb.com/title/tt1070874/?ref_=ext_shr_lnk",
  },
  {
    title: "Manto",
    director: "Nandita Das",
    image: require("../../public/movies/manto.jpg"),
    link: "https://www.imdb.com/title/tt6923462/?ref_=ext_shr_lnk",
  },
  {
    title: "Rush",
    director: "Ron Howard",
    image: require("../../public/movies/rush.jpg"),
    link: "https://www.imdb.com/title/tt1979320/?ref_=ext_shr_lnk",
  },
  {
    title: "Love & Other Drugs",
    director: "Edward Zick",
    image: require("../../public/movies/love-other-drugs.jpg"),
    link: "https://www.imdb.com/title/tt0758752/?ref_=ext_shr_lnk",
  },
  {
    title: "Watchmen",
    director: "Zack Snyder",
    image: require("../../public/movies/watchmen.jpg"),
    link: "https://www.imdb.com/title/tt0409459/?ref_=ext_shr_lnk",
  },
  {
    title: "The Departed",
    director: "Martin Scorses",
    image: require("../../public/movies/departed.jpg"),
    link: "https://www.imdb.com/title/tt0407887/?ref_=ext_shr_lnk",
  },
  {
    title: "Footloose",
    director: "Herbert Ross",
    image: require("../../public/movies/footloose.jpg"),
    link: "https://www.imdb.com/title/tt0087277/?ref_=ext_shr_lnk",
  },
];
