export const depthZones = [
  {
    id: 'surface',
    depthStart: 0,
    depthEnd: 200,
    name: 'Sunlight Zone',
    title: 'The Surface',
    text: 'We begin where sunlight touches the sea.',
    animals: [
      { emoji: '🐢', top: '30%', left: '70%', size: 60 },
      { emoji: '🐬', top: '60%', left: '20%', size: 70 }
    ],
    effects: ['sunrays', 'bubbles']
  },
  {
    id: 'twilight',
    depthStart: 200,
    depthEnd: 1000,
    name: 'Twilight Zone',
    title: '200 meters',
    text: 'Light begins to fade. Colors disappear one by one.',
    animals: [],
    effects: []
  },
  {
    id: 'midnight',
    depthStart: 1000,
    depthEnd: 4000,
    name: 'Midnight Zone',
    title: 'The Midnight Zone',
    text: 'No sunlight reaches this depth. Only darkness and bioluminescence.',
    animals: [
      { emoji: '🐟', top: '40%', right: '15%', size: 50, glow: true },
      { emoji: '🦑', bottom: '25%', left: '25%', size: 80, opacity: 0.5 }
    ],
    effects: ['bioluminescence']
  },
  {
    id: 'titanic',
    depthStart: 3800,
    depthEnd: 6000,
    name: 'Abyssal Zone',
    title: '3,800 meters',
    text: 'The wreck of the Titanic rests in silence.',
    subtitle: 'RMS Titanic • April 15, 1912',
    special: true,
    animals: [],
    effects: ['spotlight', 'titanic']
  },
  {
    id: 'abyss',
    depthStart: 6000,
    depthEnd: 10000,
    name: 'Abyssal Zone',
    title: 'The Abyss',
    text: 'Crushing pressure. Near freezing temperatures. Yet life persists.',
    animals: [],
    effects: []
  },
  {
    id: 'challenger',
    depthStart: 10000,
    depthEnd: 10900,
    name: 'Hadal Zone',
    title: 'Challenger Deep',
    text: 'Nearly 11,000 meters below the surface.\nThis is the deepest place on Earth.',
    subtitle: 'Mariana Trench',
    special: true,
    animals: [],
    effects: ['darkness']
  }
];

export const colorStops = [
  { depth: 0, colors: ['#4A90E2', '#87CEEB'] },
  { depth: 200, colors: ['#2C5F8D', '#4A90E2'] },
  { depth: 1000, colors: ['#0A1929', '#1B3A52'] },
  { depth: 4000, colors: ['#000814', '#0A1929'] },
  { depth: 10900, colors: ['#000000', '#000000'] }
];