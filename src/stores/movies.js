import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    filteredMovies: [],
    filterList: [],
    isLoading: false,
    error: null,
    search: "",
    selectedMovie: null,
  }),

  actions: {
    async fetchMovies() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch(
          "https://f8321ccf5efbe5ef.mokky.dev/movies_list"
        );
        const data = await response.json();
        this.movies = data
        this.filteredMovies = data;
      } catch (error) {
        this.error = error;
        console.error("Error fetching movies:", error);
      } finally {
        this.isLoading = false;
      }
    },

    filterByTag(list) {
        this.filteredMovies = list.filter((movie) => {
          const genres = movie.ganre.split("/");
          return genres.some((genre) => this.filterList.includes(genre.trim()));
        });
    },

    toggleBadgeToFilterList(genre) {
      const index = this.filterList.indexOf(genre);

      if (index !== -1) {
        this.filterList.splice(index, 1);
      } else {
        this.filterList.push(genre);
      }

      this.Filter()
    }, 

    filterBySearch(list) {
      this.filteredMovies = list.filter((movie) => {
        return movie.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    Filter() {
      if (this.search === "" && this.filterList.length != 0) {
        this.filterByTag(this.movies);
      } else if(this.filterList.length === 0 && this.search != "") {
        this.filterBySearch(this.movies);
      } else if(this.filterList.length != 0 && this.search != "") {
        this.filterByTag(this.movies);
        this.filterBySearch(this.filteredMovies);
      } else {
        this.filteredMovies = this.movies;
      }
    },

    setSearchText(search) {
      this.search = search;
      this.Filter();
    },
    
    async getMovieById(id) {
      await this.fetchMovies();
      this.selectedMovie = this.movies.find(movie => movie.id == id);
    },
  },

  getters: {
    getNotActiveFilter() {
      const allGenres = new Set();

      for (const movie of this.movies) {
        const genres = movie.ganre.split("/");

        genres.forEach((genre) => {
          const trimmedGenre = genre.trim();
          if (!this.filterList.includes(trimmedGenre)) {
            allGenres.add(trimmedGenre);
          }
        });
      }

      return [...allGenres];
    },

    getActiveFilters() {
      return this.filterList;
    },

    getMoviesList() {
      return this.filteredMovies;
     },

    getHotMovies() {
      return this.movies.filter(movie => movie.extras && movie.extras.isHot);
    },

    getSelectedMovie() {
      return this.selectedMovie;
    },
  },
});
