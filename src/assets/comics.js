const comics = [
  {
    id: 1,
    title: 'Iron Man & Vendicatori',
    description:
      "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman's new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
    thumb:
      'https://upload.wikimedia.org/wikipedia/it/4/4e/Vendicatori_%28Alan_Davis%29.jpg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original://www.google.com/search?q=fumetti+marvel&sca_esv=4c696476a5c72516&udm=2&biw=1710&bih=952&sxsrf=APpeQntyFboIwvYmU9Ie4-MV4eM4Cwjbyw%3A1790003851247&ei=i0qxaoTLDoON-d8P0Z21oAo&ved=2ahUKEwjEvMz9-_-WAxWDRv4FHdFODaQQ4dUDegQIBhAN&uact=5&oq=fumetti+marvel&gs_lp=Egtnd3Mtd2l6LWltZyIOZnVtZXR0aSBtYXJ2ZWwyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgoQABiABBiKBRhDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj0F1AAWJEOcAB4AJABAJgBkAGgAYgKqgEDOS41uAEDyAEA-AEBmAIOoALdCsICBxAjGMkCGCfCAgsQABiABBixAxiDAcICBBAAGAPCAgYQABgDGArCAggQABiABBixA8ICDRAAGIAEGIoFGEMYsQOYAwCSBwM5LjWgB59HsgcDOS41uAfdCsIHBjAuMS4xM8gHOIAIAQ&sclient=gws-wiz-img#sv=CAMSURoyKhBlLXF1TUt2bkhUQ3BUYUdNMg5xdU1Ldm5IVENwVGFHTToORU5RT0JyeXBKVUNHT00gBCoXCgFzEhBlLXF1TUt2bkhUQ3BUYUdNGAEwARgHIN61gfMLSggQARgBIAEoAQ',
    price: '$19.99',
    series: 'Action Comics',
    sale_date: '2018-10-02',
    type: 'comic book',
    artists: ['José Luis García-López', 'Clay Mann', 'Rafael Albuquerque'],
    writers: ['Brad Meltzer', 'Tom King', 'Scott Snyder'],
  },
  {
    id: 2,
    title: 'The Avengers',
    description:
      "America is broken. Trust between the government and the American public has crumbled. Paranoia reigns supreme. It's 1976, and this is the concluding chapter of the Eisner Award-winning American Vampire! Skinner Sweet has exhausted all efforts to regain his lost immortality. With his powers and purpose gone, he is now determined to go out with a bang. At a seedy motorcycle rally in the desert where he's closer than ever to his death wish, Pearl Jones and a shocking partner track him down for one last, desperate mission: The force known as the Gray Trader and its minions are tunneling through the bowels of the world to unleash hell on Earth—just in time for America's bicentennial. With catastrophe looming, it's up to Skinner and Pearl to reconcile and change the course of history—or die trying. The series that launched the careers of superstars Scott Snyder and Rafael Albuquerque returns for nine final issues and the closing chapter of the legacy of American Vampire.",
    thumb:
      'https://taschen.makaira.media/taschen/image/upload/f_webp,w_1200/v1722868002/products-live/1ea1adb59f6ec6cc27403e13d90ee5e6.png',
    price: '$3.99',
    series: 'American Vampire 1976',
    sale_date: '2020-10-06',
    type: 'comic book',
    artists: ['Rafael Albuquerque'],
    writers: ['Scott Snyder'],
  },
  {
    id: 3,
    title: 'Deadpool & Wolverine. Di nuovo insieme (Vol. 1)',
    description:
      "Enraged by rumors of Arthur's survival in the slums of Atlantis, the ruthless King Rath orders the use of ancient Atlantean techno-magic to track down the Aquaman at all costs! But the ex-king Arthur can't hide for long when his fate collides with that of a mysterious young woman on the run from Rath's own secret police. Her name: Dolphin. Collects AQUAMAN #25-30.",
    thumb:
      'https://m.media-amazon.com/images/I/71ZB9F8RBaL._SY522_.jpg',
    price: '$16.99',
    series: 'Aquaman',
    sale_date: '2018-01-24',
    type: 'graphic novel',
    artists: ['Stjepan Sejic'],
    writers: ['Dan Abnett'],
  },
  {
    id: 4,
    title: 'Secret wars',
    description:
      '“Beyond Burnside” Chapter One: The Batgirl you know and love is going global with Eisner Award-winning and New York Times best-selling writer Hope Larson (A Wrinkle in Time, Goldie Vance) and all-star artist Rafael Albuquerque (AMERICAN VAMPIRE). In order to up her game, Babs travels to Japan on a quest to train with the most elite modern combat masters of the East. But when a chance meeting with an old friend puts a target on her back, Batgirl may need to use her new skills to solve a deadly mystery.',
    thumb:
      'https://m.media-amazon.com/images/I/51w5YYH5kyL._SY445_SX342_ML2_.jpg',
    price: '$2.99',
    series: 'Batgirl',
    sale_date: '2016-07-27',
    type: 'comic book',
    artists: ['Rafael Albuquerque'],
    writers: ['Hope Larson'],
  },
  {
    id: 5,
    title: "L'omo ragno",
    description:
      "The Dark Knight's looking to drop both the hammer and sickle on the KGBeast. The Russian super-assassin has gone too far, and Batman will stop at nothing to hunt him down. But is the Dark Knight willing to step into the darkness himself to find justice?",
    thumb:
      'https://upload.wikimedia.org/wikipedia/it/8/82/Copertina_Uomo_Ragno_MI_430.png?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original',
    price: '$3.99',
    series: 'Batman',
    sale_date: '2018-10-03',
    type: 'comic book',
    artists: ['Tony S. Daniel'],
    writers: ['Tom King'],
  },
  {
    id: 6,
    title: 'Punisher',
    description:
      '“THE RETURN” part one! Terry McGinnis is back as Batman, much to the delight of his family and friends. But is the original Joker really back as well? Inspired by the possible return of their role model, the Jokerz have taken over an entire section of Gotham City and are determined to wreak havoc in the still-rebuilding city. While Batman battles chaos on the streets, his friend Dana is at the mercy of the new leader of the now-unified gang.',
    thumb:
      'https://m.media-amazon.com/images/I/51EQtob6ruL._SY445_SX342_ML2_.jpg',
    price: '$2.99',
    series: 'Batman Beyond',
    sale_date: '2016-10-26',
    type: 'comic book',
    artists: ['Bernard Chang'],
    writers: ['Dan Jurgens'],
  },
  {
    id: 7,
    title: 'Devil & Hulk',
    description:
      "Up in the sky, in the dark of the night, trust no one - for the infected walk among us. Spinning out of the devastating events of THE BATMAN WHO LAUGHS, Superman and Batman are together once more in an all-new monthly series - and they're facing a terrifying new threat that could strike from anywhere. The Dark Knight and the Man of Steel must journey into the depths of Gotham City to learn which of their fellow heroes has been transformed into the horrifying horseman of their most dangerous and deranged foe ever. Our heroes will need to fight to survive, but an even more dangerous question lurkes in the shadows: Can Superman and Batman even trust each other?",
    thumb:
      'https://upload.wikimedia.org/wikipedia/it/9/90/Hulk_%28Dale_Keown%29.jpg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original',
    price: '$3.99',
    series: 'Batman/Superman',
    sale_date: '2019-08-28',
    type: 'comic book',
    artists: ['David Marquez'],
    writers: ['Joshua Williamson'],
  },
  {
    id: 8,
    title: 'Thor',
    description:
      'On a dark and stormy night in the fifth dimension, two mortal foes meet to settle an age-old question once and for all: In a fight between Batman and Superman, who would win? The combatants? Mr. Mxyzptlk and Bat-Mite. And in this battle for the ages, you will find out if a fifth-dimensional imp can bleed. It’s all in this, the ultimate slugfest between the Dark Knight and the Man of Steel-plus a whole lot of magic!',
    thumb:
      'https://upload.wikimedia.org/wikipedia/it/e/e0/Thor_%28Alan_Davis%29.jpg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original',
    price: '$4.99',
    series: 'Batman/Superman Annual',
    sale_date: '2020-09-29',
    type: 'comic book',
    artists: ['Clayton Henry', 'Gleb Melnikov', 'Dale Eaglesham'],
    writers: ['Joshua Williamson'],
  },
  {
    id: 9,
    title: 'Captain America',
    description:
      'Gotham City is a battleground as The Joker takes over the Wayne fortune and wages a street war against the Dark Knight and his allies! Enter the “war zone” with short stories featuring characters like Cassandra Cain, Stephanie Brown, and Luke Fox and see how they’re fighting back in a city under siege! Also, the brutal full debut of the mysterious new anti-hero known as Clownhunter!',
    thumb:
      'https://www.yourdecoration.it/cdn/shop/files/pyramid-mpp50428-marvel-comics-captain-america-retro-poster-40x50cm_grande.jpg?v=1767620010',
    series: 'Batman: The Joker War Zone',
    sale_date: '2020-09-29',
    type: 'comic book',
    artists: [
      'Guillem March',
      'Ashley A. Woods',
      'Olivier Coipel',
      'James Stokoe',
      'Darko Lafuente',
    ],
    writers: ['Sam Johns', 'Joshua Williamson', 'John Ridley'],
  },
  {
    id: 10,
    title: 'Thanos',
    description:
      'Thirty years after Batman: The Killing Joke changed comics forever, Three Jokers reexamines the myth of who, or what, The Joker is and what at the heart of his eternal battle with Batman. New York Times bestselling writer Geoff Johns and Jason Fabok reunite to tell the ultimate story of Batman and The Joker!',
    thumb:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0nXnGuI28qOod6vLfbVSXNzMjohIfKQOHUTJZ7D4get9cbSAWLGLalQ&s=10',
    price: '$6.99',
    series: 'Batman: Three Jokers',
    sale_date: '2020-08-25',
    type: 'comic book',
    artists: ['Jason Fabok'],
    writers: ['Geoff Johns'],
  },
  {
    id: 11,
    title: 'Age of Utron',
    description:
      'The Joker is dead, Bruce Wayne is behind bars...and Gotham City is just starting to redefine itself without Batman.',
    thumb:
      'https://m.media-amazon.com/images/I/A1x-rx+mqtL._UF1000,1000_QL80_.jpg',
    price: '$4.99',
    series: 'Batman: White Knight Presents: Harley Quinn',
    sale_date: '2020-10-20',
    type: 'comic book',
    artists: ['Matteo Scalera'],
    writers: ['Katana Collins'],
  },
  {
    id: 12,
    title: 'The invincible Iron Man',
    description:
      'Following her near-miss wedding with Batman, Catwoman hits the streets to expose a copycat.',
    thumb:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFm92QUa3rJo3axBBiN5mdblYQOAZZKmo1fiS2F0TIA&s=10',
    price: '$16.99',
    series: 'Catwoman',
    sale_date: '2019-04-10',
    type: 'graphic novel',
    artists: ['Fernando Blanco', 'Joëlle Jones'],
    writers: ['Joëlle Jones'],
  },
];
export default comics;