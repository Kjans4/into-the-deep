export const depthZones = [
  {
    id: 'surface',
    depthStart: 0,
    depthEnd: 200,
    name: 'Sunlight Zone',
    title: '10 meters',
    text: 'We begin where sunlight touches the sea.\n\nWarm. Bright. Alive.\n\nThis is where most ocean life exists.',
    animals: [
      { emoji: '🐢', top: '30%', left: '70%', size: 60 },
      { emoji: '🐬', top: '60%', left: '20%', size: 70 }
    ],
    effects: ['sunrays', 'bubbles']
  },
  {
    id: 'fading-light',
    depthStart: 200,
    depthEnd: 500,
    name: 'Fading Light',
    title: '200 meters',
    text: 'The photic zone boundary.\n\nRed light has already vanished.\nOrange follows.\n\nOnly blue remains.',
    animals: [
      { emoji: '🐠', top: '45%', left: '30%', size: 45, opacity: 0.8 }
    ],
    effects: [],
    showMarker: true,
    markerLabel: 'Photic Zone Boundary',
    markerSublabel: 'Last traces of red light'
  },
  {
    id: 'twilight',
    depthStart: 500,
    depthEnd: 1000,
    name: 'Twilight Zone',
    title: '500 meters',
    text: 'The twilight zone.\n\nDim. Cold. Silent.\n\nPhotosynthesis is no longer possible.\nHunters wait in the shadows.',
    animals: [],
    effects: []
  },
  {
    id: 'midnight',
    depthStart: 1000,
    depthEnd: 3000,
    name: 'Midnight Zone',
    title: '1,200 meters',
    text: 'Light begins to fade. Colors disappear one by one.\n\nNo sunlight reaches this depth.\nOnly darkness and bioluminescence remain.\n\nCreatures here have never seen the sun.',
    animals: [
      { emoji: '🐟', top: '40%', right: '15%', size: 50, glow: true },
      { emoji: '🦑', bottom: '25%', left: '25%', size: 80, opacity: 0.5 }
    ],
    effects: ['bioluminescence'],
    showMarker: true,
    markerLabel: 'Aphotic Zone',
    markerSublabel: 'Total darkness'
  },
  {
    id: 'approaching-titanic',
    depthStart: 3000,
    depthEnd: 3800,
    name: 'The Deep',
    title: '3,000 meters',
    text: 'The weight of the ocean presses down.\n\n300 times surface pressure.\nNear freezing.\nCompletely black.\n\nSomething rests below in the darkness.',
    animals: [],
    effects: []
  },
  {
    id: 'titanic',
    depthStart: 3800,
    depthEnd: 4500,
    name: 'Abyssal Zone',
    title: '3,800 meters',
    text: 'The wreck of the Titanic.\n\nUndisturbed for over a century.\nPreserved by the cold and pressure.\n\nResting in eternal silence.',
    subtitle: 'RMS Titanic • April 15, 1912',
    special: true,
    animals: [],
    effects: ['spotlight', 'titanic']
  },
  {
    id: 'abyss',
    depthStart: 4500,
    depthEnd: 6000,
    name: 'Abyssal Zone',
    title: '4,500 meters',
    text: 'The abyssal plain.\n\nCrushing pressure: 450 atmospheres.\nTemperature: 2°C.\n\nYet life persists.\nAdapted. Transformed. Surviving.',
    animals: [],
    effects: [],
    showMarker: true,
    markerLabel: 'Abyssal Plain',
    markerSublabel: '450+ atmospheres of pressure'
  },
  {
    id: 'hadal-approach',
    depthStart: 6000,
    depthEnd: 8000,
    name: 'Hadal Approach',
    title: '6,000 meters',
    text: 'Beyond the abyss lies something deeper.\n\nThe hadal zone.\nThe ocean trenches.\n\nWhere the earth itself folds into darkness.',
    animals: [],
    effects: []
  },
  {
    id: 'deep-trench',
    depthStart: 8000,
    depthEnd: 10500,
    name: 'Hadal Zone',
    title: '8,000 meters',
    text: 'Inside the trench.\n\nA place where mountains would be swallowed.\nWhere tectonic plates collide.\nWhere pressure crushes almost everything.\n\nAlmost.',
    animals: [],
    effects: []
  },
  {
    id: 'challenger',
    depthStart: 10500,
    depthEnd: 10900,
    name: 'Challenger Deep',
    title: '10,900 meters',
    text: 'Challenger Deep.\n\nThe deepest place on Earth.\nThe bottom of the world.\n\n1,086 atmospheres of pressure.\nColder than the surface of Mars.\n\n...',
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