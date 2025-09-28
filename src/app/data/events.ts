import { GameEvent } from '../models/game-event';

export const EVENTS: GameEvent[] = [
  // 70s–80s
  { year: 1972, title: 'Pong', description: 'El arcade que popularizó los videojuegos.', image: 'assets/img/pong.webp' },
  { year: 1977, title: 'Atari 2600', description: 'Populariza las consolas domésticas y los cartuchos.', image: 'https://es.digitaltrends.com/wp-content/uploads/2025/06/atari-2600.webp?resize=1200%2C630&p=1' },
  { year: 1985, title: 'NES / Super Mario Bros.', description: 'Revitaliza el mercado doméstico.', image: 'assets/img/nes.webp' },
  { year: 1989, title: 'Game Boy', description: 'Consola portátil masiva con Tetris.', image: 'assets/img/gameboy.webp' },
  { year: 1989, title: 'Mega Drive / Genesis', description: 'Empuja la era de los 16-bit y la rivalidad con Nintendo.', image: 'assets/img/megadrive.webp' },

  // 90s
  { year: 1990, title: 'Super Nintendo (SNES)', description: 'Pulido de la era de 16-bit; Mode 7 y joyas 2D.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Wikipedia_SNES_PAL.jpg' },
  { year: 1994, title: 'Sega Saturn', description: 'Consola de 32-bit enfocada a 2D potente y primeros 3D con CD-ROM.', image: 'assets/img/segasaturn.webp' },
  { year: 1994, title: 'PlayStation', description: 'CD-ROM y 3D accesible al gran público.', image: 'assets/img/playstation1.webp' },
  { year: 1996, title: 'Nintendo 64', description: 'Populariza el 3D en consola y el stick analógico de serie.', image: 'assets/img/n64.webp' },
  { year: 1998, title: 'Game Boy Color', description: 'Evolución a color del fenómeno portátil.', image: 'https://i.ebayimg.com/images/g/8MIAAOSwA7Nkpp1j/s-l1200.jpg' },
  { year: 1999, title: 'Dreamcast', description: 'Pionera en juego online con módem integrado y títulos adelantados a su tiempo.', image: 'assets/img/dreamcast.webp' },

  // 2000s
  { year: 2000, title: 'PlayStation 2', description: 'DVD y retrocompatibilidad; la consola más vendida de la historia.', image: 'assets/img/playstation2.webp' },
  { year: 2001, title: 'Game Boy Advance', description: 'Potente portátil de 32-bit con catálogo enorme.', image: 'https://m.media-amazon.com/images/I/41m7GZdo0lL._UF1000,1000_QL80_.jpg' },
  { year: 2001, title: 'Xbox', description: 'Entra Microsoft y se consolida el juego online en consola.', image: 'assets/img/xbox.webp' },
  { year: 2003, title: 'Steam (PC)', description: 'Despegue de la distribución digital y actualizaciones online.', image: 'https://andro4all.com/hero/2024/11/steam-anuncia-que-dejara-de-funcionar-en-windows-7-y-8.jpg?width=768&aspect_ratio=16:9&format=nowebp' },
  { year: 2004, title: 'Nintendo DS', description: 'Doble pantalla y táctil; fenómeno mundial.', image: 'https://m.media-amazon.com/images/I/51sZpE5vjzL._UF894,1000_QL80_.jpg' },
  { year: 2004, title: 'PSP (PlayStation Portable)', description: 'Portátil multimedia potente en formato UMD.', image: 'https://m.media-amazon.com/images/I/614vQxfMcLL.jpg' },
  { year: 2005, title: 'Xbox 360 / PlayStation 3', description: 'HD, servicios online y tiendas digitales modernas.', image: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2013/01/07/xbox-e-ps3.jpg' },
  { year: 2006, title: 'Wii', description: 'Control por movimiento y ampliación del público.', image: 'assets/img/wii.webp' },
  { year: 2007, title: 'Boom del juego móvil', description: 'Smartphones y App Store/Google Play transforman el mercado.', image: 'https://images.ctfassets.net/vfkpgemp7ek3/1068706992/349caecfad187ca862a237dbf3629405/2016-top-mobile-games-hero.jpg' },

  // 2010s
  { year: 2011, title: 'Nintendo 3DS', description: 'Efecto 3D sin gafas y gran catálogo portátil.', image: 'https://m.media-amazon.com/images/I/613ZmZqXYqL.jpg' },
  { year: 2011, title: 'PS Vita', description: 'Portátil con pantalla OLED y potencia de sobremesa en mini.', image: 'https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/2/9/6/0711719180692/tsp20120217191002/PS-VITA-Wi-Fi.jpg' },
  { year: 2012, title: 'Wii U', description: 'Doble pantalla en sobremesa; puente conceptual hacia Switch.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/1200px-Wii_U_Console_and_Gamepad.png' },
  { year: 2013, title: 'PS4 / Xbox One', description: 'Streaming, capturas y enfoque en servicios.', image: 'assets/img/ps4xboxone.webp' },
  { year: 2016, title: 'VR moderna', description: 'Oculus Rift, HTC Vive y PSVR llevan la realidad virtual al gran público.', image: 'https://api.time.com/wp-content/uploads/2016/10/vr-grid-v1.jpg' },

  // 2020s
  { year: 2017, title: 'Nintendo Switch', description: 'Híbrida portátil/sobremesa.', image: 'assets/img/switch.webp' },
  { year: 2020, title: 'PS5 / Xbox Series X|S', description: 'SSD ultrarrápidos y trazado de rayos.', image: 'assets/img/xboxsxps5.webp' }
];
