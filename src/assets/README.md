Place your local images here and import them in components. Suggested filenames (match case exactly):

- Heroes:
  - wakma5.jpg (home desktop)
  - wakma5mb.jpg (home mobile)
  - wakma3.jpg (services hero)
  - wamka4.jpg (about hero)
  - Wakma1.jpg (contact hero)

- Sections:
  - gascylinder.jpg
  - cng.jpg
  - gasaccessories.jpeg
  - serving-community.png
  - cooking-lpg.jpg (replacement for external LPG image)
  - generator-lpg.jpg (replacement for external generator image)

After adding files, update imports in HomePage.tsx, ServicesPage.tsx, AboutPage.tsx, and ContactPage.tsx to use:

import heroHome from '@/assets/wakma5.jpg';
import heroHomeMb from '@/assets/wakma5mb.jpg';

Note: '@' path alias must map to 'src' in your tsconfig. If not configured, use relative imports like '../../assets/wakma5.jpg'.