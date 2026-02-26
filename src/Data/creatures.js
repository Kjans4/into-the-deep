// Creatures database - Neal.fun inspired content
export const creatures = [
  // SURFACE ZONE (0-200m)
  { 
    name: 'Sea Turtle', 
    emoji: '🐢', 
    depth: 50, 
    size: 'medium', 
    position: { top: '25%', left: '15%' },
    fact: 'Can hold their breath for up to 7 hours while sleeping',
    drift: true
  },
  { 
    name: 'Dolphin', 
    emoji: '🐬', 
    depth: 80, 
    size: 'medium', 
    position: { top: '45%', right: '12%' },
    fact: 'Can recognize themselves in mirrors and have unique whistles as names',
    drift: true
  },
  { 
    name: 'Manta Ray', 
    emoji: '🐟', 
    depth: 120, 
    size: 'large', 
    position: { top: '60%', left: '25%' },
    fact: 'Have the largest brain-to-body ratio of any fish',
    drift: false
  },
  { 
    name: 'Tropical Fish', 
    emoji: '🐠', 
    depth: 150, 
    size: 'small', 
    position: { top: '70%', right: '20%' },
    fact: 'Some species can change sex during their lifetime',
    drift: true
  },
  { 
    name: 'Whale Shark', 
    emoji: '🦈', 
    depth: 180, 
    size: 'xlarge', 
    position: { top: '85%', left: '8%' },
    fact: 'Largest fish in the ocean, but feeds only on tiny plankton',
    drift: false
  },

  // FADING LIGHT (200-500m)
  { 
    name: 'Jellyfish', 
    emoji: '🪼', 
    depth: 250, 
    size: 'small', 
    position: { top: '15%', left: '18%' },
    fact: 'No brain, no heart, but survived for 500 million years',
    drift: true,
    glow: true
  },
  { 
    name: 'Sunfish', 
    emoji: '🐡', 
    depth: 300, 
    size: 'medium', 
    position: { top: '35%', right: '15%' },
    fact: 'Heaviest bony fish, can weigh up to 2,200 kg',
    drift: false
  },
  { 
    name: 'Hammerhead Shark', 
    emoji: '🦈', 
    depth: 400, 
    size: 'large', 
    position: { top: '55%', left: '10%' },
    fact: 'Head shape provides 360-degree vision',
    drift: false
  },
  { 
    name: 'Octopus', 
    emoji: '🐙', 
    depth: 450, 
    size: 'medium', 
    position: { top: '75%', right: '18%' },
    fact: 'Has three hearts and blue blood',
    drift: true
  },

  // TWILIGHT ZONE (500-1000m)
  { 
    name: 'Swordfish', 
    emoji: '🐟', 
    depth: 550, 
    size: 'large', 
    position: { top: '20%', left: '12%' },
    fact: 'Can reach speeds of 97 km/h, one of the fastest fish',
    drift: false
  },
  { 
    name: 'Lanternfish', 
    emoji: '🐠', 
    depth: 650, 
    size: 'small', 
    position: { top: '40%', right: '10%' },
    fact: 'Most abundant vertebrates on Earth, with bioluminescent organs',
    drift: true,
    glow: true
  },
  { 
    name: 'Hatchetfish', 
    emoji: '🐟', 
    depth: 750, 
    size: 'small', 
    position: { top: '60%', left: '20%' },
    fact: 'Produces light to blend with sunlight above, becoming invisible',
    drift: true,
    glow: true
  },
  { 
    name: 'Squid', 
    emoji: '🦑', 
    depth: 900, 
    size: 'medium', 
    position: { top: '80%', right: '15%' },
    fact: 'Can change color and pattern in milliseconds',
    drift: true
  },

  // MIDNIGHT ZONE (1000-3000m)
  { 
    name: 'Anglerfish', 
    emoji: '🐟', 
    depth: 1200, 
    size: 'medium', 
    position: { top: '25%', right: '12%' },
    fact: 'Males are parasitic, fuse to females and become sperm factories',
    drift: false,
    glow: true
  },
  { 
    name: 'Giant Squid', 
    emoji: '🦑', 
    depth: 1500, 
    size: 'xlarge', 
    position: { top: '45%', left: '8%' },
    fact: 'Eyes the size of dinner plates, largest of any animal',
    drift: false
  },
  { 
    name: 'Viperfish', 
    emoji: '🐟', 
    depth: 1800, 
    size: 'small', 
    position: { top: '55%', right: '18%' },
    fact: 'Teeth so large it cannot close its mouth',
    drift: false,
    glow: true
  },
  { 
    name: 'Gulper Eel', 
    emoji: '🐍', 
    depth: 2200, 
    size: 'large', 
    position: { top: '70%', left: '15%' },
    fact: 'Mouth can expand to swallow prey larger than itself',
    drift: true
  },
  { 
    name: 'Vampire Squid', 
    emoji: '🦑', 
    depth: 2800, 
    size: 'small', 
    position: { top: '85%', right: '10%' },
    fact: 'Neither squid nor octopus, surviving fossil species',
    drift: true,
    glow: true
  },

  // DEEP ZONE (3000-4500m)
  { 
    name: 'Dragonfish', 
    emoji: '🐟', 
    depth: 3200, 
    size: 'small', 
    position: { top: '20%', left: '12%' },
    fact: 'Produces red bioluminescence invisible to prey',
    drift: false,
    glow: true
  },
  { 
    name: 'Barreleye Fish', 
    emoji: '🐠', 
    depth: 3500, 
    size: 'small', 
    position: { top: '40%', right: '15%' },
    fact: 'Transparent head allows tubular eyes to look upward',
    drift: true,
    glow: true
  },
  { 
    name: 'Fangtooth', 
    emoji: '🐟', 
    depth: 4000, 
    size: 'small', 
    position: { top: '60%', left: '18%' },
    fact: 'Largest teeth relative to body size of any fish',
    drift: false
  },
  { 
    name: 'Black Swallower', 
    emoji: '🐟', 
    depth: 4300, 
    size: 'small', 
    position: { top: '80%', right: '12%' },
    fact: 'Can swallow fish 10 times its own mass',
    drift: false
  },

  // ABYSSAL ZONE (4500-6000m)
  { 
    name: 'Tripod Fish', 
    emoji: '🐟', 
    depth: 5000, 
    size: 'small', 
    position: { top: '25%', left: '15%' },
    fact: 'Stands on stilt-like fins waiting for prey to drift by',
    drift: false
  },
  { 
    name: 'Grenadier', 
    emoji: '🐠', 
    depth: 5500, 
    size: 'medium', 
    position: { top: '50%', right: '18%' },
    fact: 'One of the most abundant deep-sea fish',
    drift: true
  },
  { 
    name: 'Sea Cucumber', 
    emoji: '🥒', 
    depth: 5800, 
    size: 'small', 
    position: { top: '75%', left: '10%' },
    fact: 'Can expel internal organs as defense and regrow them',
    drift: false
  },

  // HADAL ZONE (6000-10900m)
  { 
    name: 'Snailfish', 
    emoji: '🐟', 
    depth: 7000, 
    size: 'small', 
    position: { top: '30%', right: '15%' },
    fact: 'Deepest living fish ever recorded at 8,178 meters',
    drift: true
  },
  { 
    name: 'Amphipod', 
    emoji: '🦐', 
    depth: 8500, 
    size: 'small', 
    position: { top: '55%', left: '12%' },
    fact: 'Shrimp-like creatures found even in the deepest trenches',
    drift: true
  },
  { 
    name: 'Sea Pig', 
    emoji: '🐷', 
    depth: 9500, 
    size: 'small', 
    position: { top: '80%', right: '10%' },
    fact: 'Type of sea cucumber that walks on tube feet',
    drift: false
  }
];

// Milestones - Human achievements and comparisons
export const milestones = [
  {
    depth: 40,
    title: 'Freediving Record',
    description: 'Herbert Nitsch dove to 214m without equipment in 2007',
    position: { top: '35%', side: 'left' }
  },
  {
    depth: 100,
    title: 'Scuba Diving Limit',
    description: 'Recreational scuba diving maximum depth',
    position: { top: '55%', side: 'right' }
  },
  {
    depth: 332,
    title: 'Deepest Scuba Dive',
    description: 'Ahmed Gabr set the record in 2014',
    position: { top: '75%', side: 'left' }
  },
  {
    depth: 534,
    title: 'Emperor Penguins',
    description: 'Can dive this deep hunting for fish',
    position: { top: '25%', side: 'right' }
  },
  {
    depth: 914,
    title: 'Burj Khalifa Height',
    description: 'World\'s tallest building would fit under water here',
    position: { top: '50%', side: 'left' }
  },
  {
    depth: 1281,
    title: 'Sperm Whale Dive',
    description: 'Deepest recorded sperm whale dive',
    position: { top: '70%', side: 'right' }
  },
  {
    depth: 2400,
    title: 'Elephant Seal',
    description: 'Can dive to extreme depths hunting squid',
    position: { top: '30%', side: 'left' }
  },
  {
    depth: 3800,
    title: 'RMS Titanic',
    description: 'The famous shipwreck rests at this depth',
    position: { top: '50%', side: 'right' }
  },
  {
    depth: 4000,
    title: 'Average Ocean Depth',
    description: 'The mean depth of Earth\'s oceans is 3,688m',
    position: { top: '65%', side: 'left' }
  },
  {
    depth: 6000,
    title: 'Hadal Zone Begins',
    description: 'Deepest ocean zone, named after Hades',
    position: { top: '25%', side: 'right' }
  },
  {
    depth: 6500,
    title: 'USS Johnston Wreck',
    description: 'Deepest shipwreck ever found',
    position: { top: '45%', side: 'left' }
  },
  {
    depth: 8848,
    title: 'Mount Everest',
    description: 'Would be completely submerged at this depth',
    position: { top: '70%', side: 'right' }
  },
  {
    depth: 10908,
    title: 'James Cameron Dive',
    description: 'Solo dive to Challenger Deep in 2012',
    position: { top: '85%', side: 'left' }
  }
];

// Depth lines - Visual indicators at key depths
export const depthLines = [
  { depth: 200, label: '200m' },
  { depth: 500, label: '500m' },
  { depth: 1000, label: '1,000m' },
  { depth: 2000, label: '2,000m' },
  { depth: 3000, label: '3,000m' },
  { depth: 4000, label: '4,000m' },
  { depth: 5000, label: '5,000m' },
  { depth: 6000, label: '6,000m' },
  { depth: 7000, label: '7,000m' },
  { depth: 8000, label: '8,000m' },
  { depth: 9000, label: '9,000m' },
  { depth: 10000, label: '10,000m' }
];