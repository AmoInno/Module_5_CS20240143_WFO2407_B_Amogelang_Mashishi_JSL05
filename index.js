// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Impossible", artist:"Shontelle", genre: "R&B"},
    { title: "Too Good At Goodbyes", artist:"Sam Smith", genre:"R&B"},
    { title: "Pretty Little Fears", artist:"6lack", genre:"Hip-Hop"},
    { title: "SMA", artist:"Nasty C ft Rowlene", genre:"Hip-Hop"},
    { title: "We Up", artist:"Emtee", genre:"Hip-Hop"}
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket" : "Hip-Hop",
    "Groot" : "Rock"
};

    // Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Create empty object to store the guardians playlist
const guardiansPlaylist = {};

Object.keys(guardians).map(guardian => {
    // Get the type of genre the respective guardians prefer
    const typeOfGenre = guardians[guardian];

    // Filter the songs based on the type of genre the guardians liked
    const songSelection = songs.filter((song => song.genre === typeOfGenre));

    // Storage of the guardians playlists
    guardiansPlaylist[guardian] = songSelection;

    return guardiansPlaylist;
});

}
function displayPlaylists() {
    const playlists = generatePlaylist(guardians, songs);
    const playlistsDiv = document.getElementById("playlists");
  
    for (const guardian in playlists) {
      const guardianDiv = document.createElement("div");
      guardianDiv.classList.add("guardian-playlist");
  
      const guardianName = document.createElement("h3");
      guardianName.textContent = `${guardian}'s Playlist`;
      guardianDiv.appendChild(guardianName);
  
      const songList = document.createElement("ul");
      playlists[guardian].forEach((song) => {
        const songItem = document.createElement("li");
        songItem.textContent = `${song.title} by ${song.artist}`;
        songList.appendChild(songItem);
      });
  
      guardianDiv.appendChild(songList);
      playlistsDiv.appendChild(guardianDiv);
    }
  }
  
  // Call the displayPlaylists function
  displayPlaylists();




