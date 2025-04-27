import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Book = ({ title, author, genre, rating, review }) => {
  // Generate a color based on the title for a unique but consistent look
  const generateColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `${hue}, 70%, 45%`;
  };
  
  const color = generateColor(title);
  
  return (
    <motion.div
      className="glass-panel p-0 relative overflow-hidden group rounded-xl shadow-xl border border-indigo-500/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.4)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
      
      {/* Image container with gradient overlay */}
      <div className="relative w-full h-56 overflow-hidden" style={{ background: `linear-gradient(45deg, hsl(${color}) 0%, hsl(${parseInt(color) + 40}, 70%, 30%) 100%)` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-5xl font-bold text-white/80 mb-2">{title.substring(0, 1)}</span>
          <span className="text-white/90 text-sm font-medium truncate max-w-full">{title}</span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-yellow-500/90 text-gray-900 font-bold px-2 py-1 rounded-md flex items-center text-sm backdrop-blur-sm">
            <span className="mr-1">★</span> {rating}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-blue-900/70 text-blue-200 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">{title}</h3>
        <p className="text-blue-200 mb-3 text-sm italic">by {author}</p>
        <p className="text-blue-100 text-sm leading-relaxed">{review}</p>
      </div>
    </motion.div>
  );
};

const CategoryTab = ({ name, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
      isActive 
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
        : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/50 backdrop-blur-sm border border-blue-800/30'
    }`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    {name}
  </motion.button>
);

const Books = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  
  const categories = ['General', 'Spiritual', 'Technical', 'Neuroscience'];
  
  const generalBooks = [
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      genre: "Psychology",
      rating: "9.2/10",
      review: "A fascinating exploration of the two systems that drive our thinking and decision-making processes."
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      rating: "9.4/10",
      review: "A thought-provoking journey through human history, challenging conventional narratives about our species."
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      genre: "Technology",
      rating: "9.0/10",
      review: "A timeless guide to software craftsmanship that has shaped my approach to development."
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
      rating: "9.3/10",
      review: "A masterpiece of world-building that explores complex themes of politics, religion, and ecology."
    },
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      genre: "Philosophy/Science",
      rating: "9.5/10",
      review: "A mind-expanding journey through mathematics, symmetry, intelligence and consciousness."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      rating: "9.5/10",
      review: "A chilling portrayal of totalitarianism and surveillance that remains eerily relevant in today's digital age."
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Literary Fiction",
      rating: "9.6/10",
      review: "A profound psychological thriller exploring guilt, morality, and redemption through the mind of a murderer."
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      genre: "Magical Realism",
      rating: "9.4/10",
      review: "A multi-generational epic that blends fantasy and reality to create a mesmerizing portrait of family and time."
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      genre: "Philosophical Fiction",
      rating: "9.7/10",
      review: "A monumental novel examining faith, doubt, morality and the complex relationships between fathers and sons."
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      genre: "Science",
      rating: "9.3/10",
      review: "A magnificent tour of the universe that makes complex scientific concepts accessible and inspires wonder."
    },
    {
      title: "The Name of the Rose",
      author: "Umberto Eco",
      genre: "Historical Mystery",
      rating: "9.1/10",
      review: "A medieval murder mystery entwined with semiotics, biblical analysis, and medieval studies."
    },
    {
      title: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      genre: "Science Fiction",
      rating: "9.0/10",
      review: "A darkly humorous anti-war novel that uses science fiction elements to illustrate the absurdity of war."
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      rating: "9.8/10",
      review: "A foundational fantasy epic that created an entire mythology and influenced countless works of literature and art."
    },
    {
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      genre: "Anthropology",
      rating: "9.2/10",
      review: "A groundbreaking analysis of how geographical and environmental factors shaped human societies and history."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Literary Fiction",
      rating: "9.4/10",
      review: "A powerful examination of racial injustice and moral growth set in the American South during the 1930s."
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      genre: "Adventure",
      rating: "9.5/10",
      review: "An epic tale of betrayal, imprisonment, treasure, and revenge that explores the limits of human justice."
    }
  ];
  
  const spiritualBooks = [
    {
      title: "Bhagavad Gita",
      author: "Vyasa",
      genre: "Spiritual/Philosophy",
      rating: "9.8/10",
      review: "A profound dialogue between Krishna and Arjuna exploring dharma, duty, reality, and the path to self-realization."
    },
    {
      title: "Mandukya Upanishad",
      author: "Ancient Rishis",
      genre: "Spiritual/Vedanta",
      rating: "9.6/10",
      review: "One of the shortest yet most profound Upanishads, exploring the nature of consciousness and the four states of awareness."
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      genre: "Spiritual/Memoir",
      rating: "9.5/10",
      review: "A deeply insightful account of a spiritual journey that bridges Eastern mysticism with Western understanding."
    },
    {
      title: "The Upanishads",
      author: "Various Sages",
      genre: "Spiritual/Philosophy",
      rating: "9.7/10",
      review: "Foundational texts of Vedanta philosophy exploring the nature of reality, consciousness, and the self."
    },
    {
      title: "The Yoga Sutras of Patanjali",
      author: "Patanjali",
      genre: "Spiritual/Practice",
      rating: "9.4/10",
      review: "A comprehensive framework for spiritual growth through yoga, offering practical wisdom for achieving inner peace."
    },
    {
      title: "Be Here Now",
      author: "Ram Dass",
      genre: "Spiritual/Memoir",
      rating: "9.2/10",
      review: "A transformative journey from Harvard professor Richard Alpert to spiritual teacher Ram Dass, merging Eastern spirituality with Western mindset."
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      genre: "Spiritual/Philosophy",
      rating: "9.1/10",
      review: "A guide to spiritual enlightenment through present moment awareness and transcending thoughts of past and future."
    },
    {
      title: "The Dhammapada",
      author: "Buddha",
      genre: "Spiritual/Buddhism",
      rating: "9.5/10",
      review: "A collection of sayings of the Buddha embodying the essence of Buddhist teachings on mindfulness and ethical conduct."
    },
    {
      title: "Tao Te Ching",
      author: "Lao Tzu",
      genre: "Spiritual/Philosophy",
      rating: "9.6/10",
      review: "Foundational text of Taoism offering profound wisdom on harmonious living and the natural way."
    },
    {
      title: "The Heart of the Buddha's Teaching",
      author: "Thich Nhat Hanh",
      genre: "Spiritual/Buddhism",
      rating: "9.3/10",
      review: "A beautiful introduction to core Buddhist teachings with practical applications for daily mindfulness."
    },
    {
      title: "I Am That",
      author: "Sri Nisargadatta Maharaj",
      genre: "Spiritual/Advaita",
      rating: "9.7/10",
      review: "Transcribed conversations with a self-realized master exploring non-duality and the nature of consciousness."
    },
    {
      title: "The Essence of the Bhagavad Gita",
      author: "Eknath Easwaran",
      genre: "Spiritual/Commentary",
      rating: "9.4/10",
      review: "A thoughtful translation and commentary making the Gita's timeless wisdom accessible to modern readers."
    }
  ];

  const technicalBooks = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      rating: "9.4/10",
      review: "A handbook of agile software craftsmanship that has fundamentally changed how I approach writing readable code."
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma et al.",
      genre: "Software Engineering",
      rating: "9.3/10",
      review: "The classic 'Gang of Four' book outlining reusable patterns for common software design problems."
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow et al.",
      genre: "AI/Machine Learning",
      rating: "9.5/10",
      review: "The definitive textbook on deep learning theory, algorithms, and applications."
    },
    {
      title: "Structure and Interpretation of Computer Programs",
      author: "Abelson & Sussman",
      genre: "Computer Science",
      rating: "9.6/10",
      review: "The legendary MIT course textbook that teaches fundamental principles of programming and abstraction."
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      genre: "System Design",
      rating: "9.7/10",
      review: "An exceptional guide to designing systems that handle data at scale with reliability and efficiency."
    },
    {
      title: "The Art of Computer Programming",
      author: "Donald Knuth",
      genre: "Computer Science",
      rating: "9.8/10",
      review: "A comprehensive monograph on computer programming algorithms and their analysis."
    },
    {
      title: "Refactoring",
      author: "Martin Fowler",
      genre: "Programming",
      rating: "9.2/10",
      review: "A guide to improving the design of existing code through systematic restructuring."
    },
    {
      title: "Python Machine Learning",
      author: "Sebastian Raschka",
      genre: "Machine Learning",
      rating: "9.0/10",
      review: "A practical guide to machine learning with Python, balancing theory with implementation."
    },
    {
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      genre: "Programming",
      rating: "8.9/10",
      review: "A concise guide to JavaScript that focuses on the useful, reliable parts of the language."
    },
    {
      title: "Introduction to Algorithms",
      author: "Cormen et al.",
      genre: "Computer Science",
      rating: "9.5/10",
      review: "The comprehensive reference known as 'CLRS' covering a broad range of algorithms and data structures."
    }
  ];
  
  const neuroscienceBooks = [
    {
      title: "The Brain That Changes Itself",
      author: "Norman Doidge",
      genre: "Neuroscience",
      rating: "9.5/10",
      review: "A groundbreaking exploration of neuroplasticity, revealing how the brain can rewire itself after injury or experience."
    },
    {
      title: "Principles of Neural Science",
      author: "Eric Kandel et al.",
      genre: "Neuroscience/Textbook",
      rating: "9.8/10",
      review: "The definitive textbook in neuroscience, covering everything from molecular mechanisms to cognitive function."
    },
    {
      title: "The Man Who Mistook His Wife for a Hat",
      author: "Oliver Sacks",
      genre: "Neuroscience/Case Studies",
      rating: "9.4/10",
      review: "Fascinating case studies of patients with neurological disorders that reveal the complexity and resilience of the human brain."
    },
    {
      title: "Neuroscience: Exploring the Brain",
      author: "Mark F. Bear et al.",
      genre: "Neuroscience/Textbook",
      rating: "9.3/10",
      review: "A comprehensive introduction to neuroscience, from cellular foundations to neural systems and behavior."
    },
    {
      title: "Connectome",
      author: "Sebastian Seung",
      genre: "Neuroscience",
      rating: "9.2/10",
      review: "An exploration of how the brain's wiring makes us who we are and how mapping these connections could transform neuroscience."
    },
    {
      title: "The Tell-Tale Brain",
      author: "V.S. Ramachandran",
      genre: "Neuroscience",
      rating: "9.5/10",
      review: "A brilliant investigation into human nature and the mysteries of the brain through unusual case studies and evolutionary theory."
    },
    {
      title: "In Search of Memory",
      author: "Eric Kandel",
      genre: "Neuroscience/Memoir",
      rating: "9.6/10",
      review: "A Nobel laureate's account of his pioneering research in memory, blending autobiography with the history of neuroscience."
    },
    {
      title: "The Emotional Brain",
      author: "Joseph LeDoux",
      genre: "Neuroscience",
      rating: "9.1/10",
      review: "A comprehensive look at the neural circuits of emotion, with special focus on fear, revealing how emotions are processed in the brain."
    },
    {
      title: "The Cognitive Neurosciences",
      author: "Michael Gazzaniga (Editor)",
      genre: "Neuroscience/Textbook",
      rating: "9.4/10",
      review: "A landmark reference work covering the full range of topics in cognitive neuroscience from leading researchers in the field."
    },
    {
      title: "Phantoms in the Brain",
      author: "V.S. Ramachandran and Sandra Blakeslee",
      genre: "Neuroscience",
      rating: "9.3/10",
      review: "Explores phenomena like phantom limbs, anosognosia, and synesthesia to reveal fundamental truths about brain function and consciousness."
    }
  ];
  
  const getActiveBooks = () => {
    switch(activeCategory) {
      case 'General': return generalBooks;
      case 'Spiritual': return spiritualBooks;
      case 'Technical': return technicalBooks;
      case 'Neuroscience': return neuroscienceBooks;
      default: return generalBooks;
    }
  };

  // Container animations for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const bookVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="animated-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 mb-4">
            Bookshelf
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Books that have influenced my thinking and broadened my understanding of the world.
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // This forces animation to run when category changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {getActiveBooks().map((book, index) => (
            <motion.div key={`${activeCategory}-${index}`} variants={bookVariants}>
              <Book 
                title={book.title}
                author={book.author}
                genre={book.genre}
                rating={book.rating}
                review={book.review}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Books; 