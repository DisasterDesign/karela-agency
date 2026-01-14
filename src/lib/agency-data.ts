/**
 * Photographer Data Configuration
 *
 * HOW TO ADD IMAGES:
 * 1. Create a folder in public/[FolderName]/
 * 2. Add the image filenames to the images array below
 */

export interface Photographer {
  name: string
  title: string
  bio: string
  folderName: string
  images: string[]
}

export const photographers: Record<string, Photographer> = {
  'Dor-2': {
    name: 'Dor Byder',
    title: 'Food & Lifestyle',
    bio: 'Capturing culinary artistry with precision and creativity.',
    folderName: 'Dor_Byder',
    images: ['dor-1.png', 'dor2.png', 'dor3.png', 'dor-4.png', 'Dor5.png', 'Dor6.png', '7.png', 'karela_dor_pgoto.png']
  },
  'Dimitry-1': {
    name: 'Dmitry Pomazan',
    title: 'Commercial Photography',
    bio: 'Transforming brands through powerful visual storytelling.',
    folderName: 'Dmitry_Pomazan',
    images: ['DIM.1png.png', 'DIM.png', 'DIM3.png', 'DIM4.png', 'DIM5.png', 'DIM6.png', '3.png', 'STOR2.png', 'STOR4.png', 'STORY1.png', 'STORY5.png']
  },
  'bar': {
    name: 'Bar Haim',
    title: 'Editorial & Fashion',
    bio: 'Creating bold, editorial imagery that captivates.',
    folderName: 'Bar_Haim',
    images: ['Bar-1.png', 'Baar2.png', 'Bar3.png', 'Baar4.png', 'Bar5.png', '6.png', 'Bar_karela.png']
  },
  'oz': {
    name: 'Oz Ohayon',
    title: 'Hospitality & Interiors',
    bio: 'Showcasing spaces with elegance and atmosphere.',
    folderName: 'Oz_Ohayon',
    images: ['1-2048x1536.jpg', '111-2048x1536.jpg', '122334-2048x1536.jpg', '132-2048x1536.jpg', '55-2048x1536.jpg', '6-1-2048x1536.jpg']
  },
  'jakob': {
    name: 'Jakob Leon',
    title: 'Lifestyle & Portrait',
    bio: 'Authentic moments captured with artistic vision.',
    folderName: 'Jakob_Leon',
    images: ['J1.jpg', 'J-.png', 'J2.png', 'J3.png', 'J4.png', 'J5.png', 'J6.png', 'J7.png', 'J10.png', 'JJ22.png', 'JJJ.png', 'JJJJJLK.png']
  },
  'GUY1': {
    name: 'Guy Ashkenzy',
    title: 'Food & Product',
    bio: 'Elevating products through meticulous composition.',
    folderName: 'Guy_Ashkenzy',
    images: [
      'WhatsApp-Image-2026-01-01-at-12.12.18.jpeg',
      'WhatsApp-Image-2026-01-01-at-12.12.18 (1).jpeg',
      'WhatsApp-Image-2026-01-01-at-12.12.19.jpeg',
      'WhatsApp-Image-2026-01-01-at-12.12.19 (1).jpeg',
      'WhatsApp-Image-2026-01-01-at-12.12.19-2.jpeg',
      'WhatsApp-Image-2026-01-01-at-12.12.19-3.jpeg',
      'WhatsApp-Image-2026-01-14-at-08.24.51.jpeg',
      'WhatsApp-Image-2026-01-14-at-08.24.51 (1).jpeg',
      'WhatsApp-Image-2026-01-14-at-08.24.51-2.jpeg'
    ]
  },
  'or': {
    name: 'Or Harel',
    title: 'Emerging Talent',
    bio: 'Fresh perspectives on culinary photography.',
    folderName: 'Or_Harel',
    images: ['OrHarel-11.jpg', 'OrHarel-12.jpg', 'OrHarel-13.jpg', 'OrHarel-22.jpg', 'OrHarel-23.jpg']
  },
  'daniel': {
    name: 'Daniel Israel',
    title: 'Emerging Talent',
    bio: 'Bringing new energy to visual storytelling.',
    folderName: 'Daniel_Israel',
    images: []
  },
  'sapir': {
    name: 'Sapir Dolkart',
    title: 'Emerging Talent',
    bio: 'Creative vision meets technical excellence.',
    folderName: 'Sapir_Dolkart',
    images: []
  },
  'may': {
    name: 'May Goldstain',
    title: 'Emerging Talent',
    bio: 'Capturing beauty in everyday moments.',
    folderName: 'May_Goldstain',
    images: ['D2A2238.jpeg', 'D2A2641-2048x1366.jpeg', 'דג-מרוקאי-2048x1389.jpeg', 'חלות-2-of-2-2048x1365.jpeg', 'עותק-של-_D2A1622.jpeg']
  }
}
