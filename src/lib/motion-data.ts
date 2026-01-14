/**
 * Motion/Video Data Configuration
 *
 * HOW TO ADD VIDEOS:
 * 1. Place video files in public/video/
 * 2. Add the filename, title, and description to the videos array below
 * 3. Landscape videos should be placed first
 */

export interface Video {
  filename: string
  title: string
  description: string
  category?: string
}

export const videos: Video[] = [
  // Priority videos with descriptions
  { filename: 'Meatbar.mp4', title: 'Meat Bar', description: 'Dor Bayder, Dimitry Pauzer, Asaf Karela, Dimitry Pauzer' },
  { filename: 'Montifiore-Final-11.mp4', title: 'HOTEL MONTEFIORE', description: 'Dimitry Pauzman & Asaf Karela' },
  { filename: 'Maze-calimela-italy.mp4', title: 'Calimala Firenze Italy', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'Meatbar-Burger.mp4', title: 'Meat Bar', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'PEREH.mp4', title: 'Pere Hotel', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'Mire-golan.mp4', title: 'Mire Golan', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'Gaijin.mp4', title: 'Gaijin', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'TYO.mp4', title: 'TYO', description: 'Dor Bayder, Asaf Karela' },
  { filename: 'NESPRESSO-OPA-TREYSAR.mp4', title: 'Nespreso & Ari Galil', description: 'Guy Ashkenazy' },
  { filename: 'ILU-birds.mp4', title: 'ILU Birds', description: 'Dor Bayder, Guy Ashkenazy, Asaf Karela' },
  { filename: 'Nela_asaf-edit-1.mp4', title: 'Nela Amsterdam', description: 'Dima Pozman, Asaf Karela' },
  { filename: 'ARIA-Baby-Jam.mp4', title: 'ARIA & Meshek Bechor', description: 'Dor Bayder, Bar Haim, Asaf Karela' },
  { filename: 'Lokal-Burger.mp4', title: 'Lokal', description: 'Dor Bayder' },
  { filename: 'Shams.mp4', title: 'Shams', description: 'Dor Byder' },
  // Videos without descriptions (at the end)
  { filename: 'GreenOnyx-FrenchToast.mp4', title: 'WannaGreen & R2M', description: '' },
  { filename: 'IBIZA.mp4', title: 'Ibiza', description: '' },
  { filename: 'HIBA-by-YOSSI-SHITRIT.mp4', title: 'Hiba', description: '' },
  { filename: 'BAR-in-Berlin.mp4', title: 'Bar in Berlin', description: '' },
  { filename: 'HIBAR_1.mp4', title: 'Hibar', description: '' },
  { filename: 'DSC02566.mp4', title: 'DSC', description: '' },
  { filename: 'santi-1.mp4', title: 'Santi', description: '' },
  { filename: 'naifa-new-1.mp4', title: 'Naifa', description: '' },
  { filename: 'Assaf-winery-Rossi-shitrit-.mp4', title: 'Assaf Winery', description: '' },
  { filename: 'CAROL.mp4', title: 'Carol', description: '' },
  { filename: 'TANIA.mp4', title: 'Tania', description: '' },
]
