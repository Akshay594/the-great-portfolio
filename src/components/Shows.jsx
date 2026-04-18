import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Show = ({ title, genre, rating, review }) => {
  return (
    <motion.div
      className="relative bg-dark-card border border-gold-muted/40 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/20 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display text-xl text-gold">{title}</h3>
          <span className="font-accent text-sm text-cream/50 italic">{genre}</span>
        </div>
        <span className="font-display text-sm text-gold-muted">{rating}</span>
      </div>
      
      <p className="font-body text-cream/60 text-sm leading-relaxed">{review}</p>
    </motion.div>
  );
};

const CategoryTab = ({ name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 font-display text-sm tracking-widest uppercase transition-all duration-300 border ${
      isActive 
        ? 'bg-gold text-dark border-gold' 
        : 'bg-transparent text-cream/60 border-gold-muted/30 hover:border-gold hover:text-gold'
    }`}
  >
    {name}
  </button>
);

const Shows = () => {
  const [activeCategory, setActiveCategory] = useState('Series');
  
  const categories = ['Series', 'Anime', 'Movies'];
  
  const tvShows = [
    {
      title: "Breaking Bad",
      genre: "Drama/Crime",
      rating: "9.5/10",
      review: "A masterpiece that explores the transformation of a mild-mannered chemistry teacher into a ruthless drug kingpin."
    },
    {
      title: "The Wire",
      genre: "Drama/Crime",
      rating: "9.3/10",
      review: "A complex, realistic portrayal of Baltimore's drug scene, law enforcement, and institutions.",
      image: "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
    },
    {
      title: "Black Mirror",
      genre: "Sci-Fi/Thriller",
      rating: "8.8/10",
      review: "Thought-provoking anthology series exploring the dark side of technology and its impact on society.",
      image: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      title: "Succession",
      genre: "Drama/Comedy",
      rating: "9.0/10",
      review: "A captivating portrayal of family dynamics within a powerful media empire, with sharp dialogue and character development.",
      image: "https://m.media-amazon.com/images/M/MV5BMDVjNGItZTMtZGFkMC00YTJkLWI2ZGUtYTQ1ZTY5ZDUyYWEyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
    },
    {
      title: "Mr. Robot",
      genre: "Drama/Thriller",
      rating: "8.7/10",
      review: "A compelling psychological thriller about a cybersecurity engineer with social anxiety who becomes entangled in a hacking conspiracy.",
      image: "https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
    },
    {
      title: "Dark",
      genre: "Sci-Fi/Mystery",
      rating: "8.9/10",
      review: "A mind-bending German series exploring time travel, family secrets, and interconnected lives across generations.",
      image: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg"
    },
    {
      title: "The Big Bang Theory",
      genre: "Comedy/Sitcom",
      rating: "8.6/10",
      review: "A hilarious sitcom about a group of brilliant but socially awkward physicists and their interactions with the wider world."
    }
  ];
  
  const animeShows = [
    {
      title: "Dragon Ball Z",
      genre: "Action/Adventure",
      rating: "9.2/10",
      review: "Vegeta training in the gravity chamber while everyone else performs at the tournament. The prince who works alone.",
      image: "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      title: "Death Note",
      genre: "Psychological/Thriller",
      rating: "9.5/10",
      review: "L solving the case alone in a dark room. No performance. Just the work. The real protagonist.",
      image: "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    },
    {
      title: "Code Geass",
      genre: "Mecha/Drama",
      rating: "9.1/10",
      review: "A gripping tale of rebellion, politics, and moral ambiguity with one of anime's most compelling protagonists.",
      image: "https://m.media-amazon.com/images/M/MV5BYmEyM2VlZWItNWY5MS00Y2FmLWEzZTUtYjMwMDIyNWJiZDQxXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg"
    },
    {
      title: "Spirited Away",
      genre: "Fantasy/Adventure",
      rating: "9.6/10",
      review: "A breathtaking masterpiece about a young girl navigating a spirit world to save her parents.",
      image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "Demon Slayer",
      genre: "Action/Supernatural",
      rating: "9.0/10",
      review: "A visually stunning journey following Tanjiro's quest to cure his sister and avenge his family.",
      image: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4Yi00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
    },
    {
      title: "Attack on Titan",
      genre: "Dark Fantasy/Action",
      rating: "9.4/10",
      review: "A brutal, complex narrative about humanity's struggle against gigantic humanoids, with unprecedented plot twists.",
      image: "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg"
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      genre: "Adventure/Fantasy",
      rating: "9.7/10",
      review: "A perfectly crafted story about two brothers seeking to restore their bodies after a failed alchemical experiment.",
      image: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      title: "Steins;Gate",
      genre: "Sci-Fi/Thriller",
      rating: "9.3/10",
      review: "A time travel narrative that evolves from light-hearted to intensely dramatic with complex scientific concepts.",
      image: "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg"
    },
    {
      title: "Hunter x Hunter",
      genre: "Adventure/Fantasy",
      rating: "9.5/10",
      review: "A coming-of-age story that subverts shonen tropes with exceptional character development and complex power systems.",
      image: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg"
    },
    {
      title: "Neon Genesis Evangelion",
      genre: "Mecha/Psychological",
      rating: "9.2/10",
      review: "A groundbreaking psychological exploration disguised as a mecha anime, delving into depression and human connection.",
      image: "https://m.media-amazon.com/images/M/MV5BMGRlZTIzZjEtODZjYS00ZmExLWFkZTgtOTRkMWJlYzIzYjUzXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg"
    },
    {
      title: "My Hero Academia",
      genre: "Superhero/Action",
      rating: "8.9/10",
      review: "In a world where 80% of people have powers, a powerless boy pursues his dream of becoming a hero.",
      image: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1MTFkYmZiMWU2XkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg"
    },
    {
      title: "One Punch Man",
      genre: "Action/Comedy",
      rating: "9.0/10",
      review: "A brilliant satire of superhero tropes featuring a protagonist who defeats any enemy with a single punch.",
      image: "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
    },
    {
      title: "Cowboy Bebop",
      genre: "Space Western/Noir",
      rating: "9.3/10",
      review: "A stylish space western following bounty hunters with haunted pasts, set to an iconic jazz soundtrack.",
      image: "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg"
    },
    {
      title: "Naruto",
      genre: "Action/Adventure",
      rating: "8.8/10",
      review: "Itachi running the long game while everyone else reacts. The one who saw the whole board.",
      image: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      title: "Your Lie in April",
      genre: "Drama/Music",
      rating: "9.0/10",
      review: "A heartbreaking story about a piano prodigy who rediscovers music and emotion through a free-spirited violinist.",
      image: "https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
    },
    {
      title: "Vinland Saga",
      genre: "Historical/Action",
      rating: "9.1/10",
      review: "Thorfinn building a farm. The arc from violence to quiet construction. What comes after revenge.",
      image: "https://m.media-amazon.com/images/M/MV5BN2UwOTMwMjMtZTE5MS00YmY4LTg4YjAtZDE3ZTg3YTU5MmQ2XkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_.jpg"
    }
  ];
  
  const movies = [
    {
      title: "Interstellar",
      genre: "Sci-Fi/Drama",
      rating: "9.4/10",
      review: "A breathtaking exploration of space travel, time dilation, and the transcendent power of love across dimensions.",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "The Martian",
      genre: "Sci-Fi/Adventure",
      rating: "9.0/10",
      review: "A gripping survival story about an astronaut stranded on Mars who uses science and wit to stay alive.",
      image: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg"
    },
    {
      title: "Black Swan",
      genre: "Psychological/Thriller",
      rating: "8.9/10",
      review: "A haunting descent into the psyche of a ballet dancer whose pursuit of perfection drives her to madness.",
      image: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg"
    },
    {
      title: "Whiplash",
      genre: "Drama/Music",
      rating: "9.3/10",
      review: "An intense portrayal of a young drummer and his abusive instructor, exploring the cost of artistic greatness.",
      image: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "Rockstar",
      genre: "Drama/Music",
      rating: "8.8/10",
      review: "A Bollywood masterpiece about a musician whose heartbreak fuels his artistic journey and eventual self-destruction.",
      image: "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg"
    },
    {
      title: "A Star Is Born",
      genre: "Drama/Music",
      rating: "8.7/10",
      review: "A poignant romance between a fading musical star and a talented newcomer, exploring fame, addiction, and sacrifice.",
      image: "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: "9.7/10",
      review: "A profound tale of hope, friendship, and redemption set in a prison, widely regarded as one of the greatest films ever made.",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    },
    {
      title: "Forrest Gump",
      genre: "Drama/Comedy",
      rating: "9.3/10",
      review: "The extraordinary journey of a simple man who unwittingly influences several defining events in U.S. history.",
      image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
      title: "The Man Who Knew Infinity",
      genre: "Biography/Drama",
      rating: "8.6/10",
      review: "The moving story of Indian mathematician Srinivasa Ramanujan and his friendship with his professor at Cambridge.",
      image: "https://m.media-amazon.com/images/M/MV5BMTU2NDkwNzA5OV5BMl5BanBnXkFtZTgwNTUzNjY2ODE@._V1_.jpg"
    },
    {
      title: "The Pursuit of Happyness",
      genre: "Biography/Drama",
      rating: "8.8/10",
      review: "A powerful true story of a struggling salesman who rises from homelessness to build a better life for his son.",
      image: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg"
    },
    {
      title: "Good Will Hunting",
      genre: "Drama",
      rating: "9.2/10",
      review: "A janitor with extraordinary mathematical abilities navigates life, love, and therapy in this deeply human story.",
      image: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
      title: "The Theory of Everything",
      genre: "Biography/Drama",
      rating: "8.7/10",
      review: "The inspiring story of physicist Stephen Hawking and his relationship with Jane Wilde as he faces a debilitating disease.",
      image: "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_.jpg"
    }
  ];
  
  const getActiveShows = () => {
    switch(activeCategory) {
      case 'Series': return tvShows;
      case 'Anime': return animeShows;
      case 'Movies': return movies;
      default: return tvShows;
    }
  };

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
            On Media & Stories
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gold-muted"></div>
            <span className="font-accent italic text-gold-muted">a curated collection</span>
            <div className="w-16 h-px bg-gold-muted"></div>
          </div>
          <p className="font-body text-cream/60 max-w-2xl mx-auto mb-12">
            Stories across different mediums that have captivated my imagination and left lasting impressions.
          </p>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <CategoryTab 
                key={category}
                name={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getActiveShows().map((show, index) => (
            <Show 
              key={`${activeCategory}-${index}`}
              title={show.title}
              genre={show.genre}
              rating={show.rating}
              review={show.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows; 