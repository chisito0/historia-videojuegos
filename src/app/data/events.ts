import { GameEvent } from '../models/game-event';

export const EVENTS: GameEvent[] = [
  // 70s–80s
  {
    year: 1972, title: 'Pong',
    description: 'El arcade que popularizó los videojuegos.',
    image: 'assets/img/pong.webp',
    specs: {
      manufacturer: 'Atari',
      generation: 'Arcade (1ª ola)',
      media: 'PCB arcade',
      notable_games: ['Pong'],
    },
    more: 'Diseñado por Allan Alcorn; su éxito desencadena la fiebre arcade.'
  },
  {
    year: 1977, title: 'Atari 2600',
    description: 'Populariza las consolas domésticas y los cartuchos.',
    image: 'https://es.digitaltrends.com/wp-content/uploads/2025/06/atari-2600.webp?resize=1200%2C630&p=1',
    specs: {
      manufacturer: 'Atari',
      generation: '2ª',
      media: 'Cartuchos',
      notable_games: ['Space Invaders', 'Pitfall!'],
      units_sold: '≈30 M'
    }
  },
  {
    year: 1985, title: 'NES',
    description: 'Revitaliza el mercado doméstico.',
    image: 'assets/img/nes.webp',
    specs: {
      manufacturer: 'Nintendo',
      generation: '3ª',
      media: 'Cartuchos',
      notable_games: ['Super Mario Bros.', 'Zelda', 'Metroid'],
      units_sold: '≈61 M'
    },
    more: 'El control de calidad “Seal of Quality” reconstruye la confianza tras el crash del 83.'
  },
  {
    year: 1986,
    title: 'Sega Master System',
    description: 'Rival de NES; fuerte en Europa y Brasil.',
    image: 'https://i.ytimg.com/vi/TGU4sgvsavM/maxresdefault.jpg',
    specs: {
      manufacturer: 'SEGA',
      generation: '3ª',
      media: 'Cartuchos / tarjetas MyCard',
      notable_games: ['Alex Kidd in Miracle World', 'Phantasy Star']
    },
    more: 'Su éxito regional fue enorme (especialmente en Brasil con TecToy).'
  },
  {
  year: 1987,
  title: 'PC Engine / TurboGrafx-16',
  description: 'Pionera en CD-ROM y gran éxito en Japón.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/TurboGrafx16-Console-Set.png',
  specs: {
    manufacturer: 'NEC / Hudson',
    generation: '4ª',
    media: 'HuCard / CD-ROM²',
    notable_games: ['R-Type', 'Bonk', 'Ys I & II']
  },
  more: 'Arquitectura ágil y catálogo potente en shoot ’em ups y arcades.'
},
  {
    year: 1989, title: 'Game Boy',
    description: 'Consola portátil masiva con Tetris.',
    image: 'assets/img/gameboy.webp',
    specs: {
      manufacturer: 'Nintendo',
      generation: 'Portátiles 4ª',
      media: 'Cartuchos',
      notable_games: ['Tetris', 'Pokémon'],
      units_sold: '≈118 M (GB/GBC)'
    }
  },
  {
    year: 1989, title: 'Mega Drive / Genesis',
    description: 'Empuja la era de los 16-bit y la rivalidad con Nintendo.',
    image: 'assets/img/megadrive.webp',
    specs: {
      manufacturer: 'SEGA',
      generation: '4ª (16-bit)',
      media: 'Cartuchos',
      notable_games: ['Sonic 2', 'Streets of Rage 2'],
      units_sold: '≈30-40 M'
    }
  },

  // 90s
  {
    year: 1990, title: 'Super Nintendo (SNES)',
    description: 'Pulido 16-bit; Mode 7 y joyas 2D.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Wikipedia_SNES_PAL.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: '4ª (16-bit)',
      media: 'Cartuchos',
      notable_games: ['Super Mario World', 'Chrono Trigger', 'Super Metroid'],
      units_sold: '≈49 M'
    },
    more: 'Chips especiales (Super FX, SA-1) ampliaban potencia en el propio cartucho.'
  },
  {
    year: 1990,
    title: 'Sega Game Gear',
    description: 'Portátil a color retroiluminada; alto consumo de pilas.',
    image: 'https://static.wikia.nocookie.net/sega/images/b/bb/Game_Gear_Micro_Black.png/revision/latest?cb=20210531090858',
    specs: {
      manufacturer: 'SEGA',
      generation: 'Portátiles',
      media: 'Cartuchos',
      notable_games: ['Sonic Chaos', 'Columns']
    }
  },
  {
    year: 1990,
    title: 'Neo Geo AES',
    description: 'Calidad arcade en el salón (carísimos cartuchos).',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Neo-Geo-AES-Console-Set.jpg',
    specs: {
      manufacturer: 'SNK',
      generation: '4ª',
      media: 'Cartuchos AES',
      notable_games: ['Metal Slug', 'The King of Fighters', 'Samurai Shodown']
    },
    more: 'Compartía hardware con Neo Geo MVS (arcade).'
  },
  {
    year: 1994, title: 'Sega Saturn',
    description: '32-bit enfocada al 2D potente y primeros 3D con CD-ROM.',
    image: 'assets/img/segasaturn.webp',
    specs: {
      manufacturer: 'SEGA',
      generation: '5ª',
      media: 'CD-ROM',
      notable_games: ['Virtua Fighter 2', 'NiGHTS'],
    }
  },
  {
    year: 1994, title: 'PlayStation',
    description: 'CD-ROM y 3D accesible al gran público.',
    image: 'assets/img/playstation1.webp',
    specs: {
      manufacturer: 'Sony',
      generation: '5ª',
      media: 'CD-ROM + tarjetas de memoria',
      notable_games: ['FFVII', 'Gran Turismo', 'Metal Gear Solid'],
      units_sold: '≈102 M'
    }
  },
  {
    year: 1996, title: 'Nintendo 64',
    description: 'Populariza el 3D en consola y el stick analógico.',
    image: 'assets/img/n64.webp',
    specs: {
      manufacturer: 'Nintendo',
      generation: '5ª',
      media: 'Cartuchos',
      notable_games: ['Super Mario 64', 'GoldenEye 007', 'Ocarina of Time'],
      units_sold: '≈33 M'
    }
  },
  {
    year: 1998, title: 'Game Boy Color',
    description: 'Evolución a color del fenómeno portátil.',
    image: 'https://i.ebayimg.com/images/g/8MIAAOSwA7Nkpp1j/s-l1200.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: 'Portátiles',
      media: 'Cartuchos',
      notable_games: ['Pokémon Oro/Plata', 'Oracle of Ages/Seasons']
    }
  },
  {
    year: 1999, title: 'Dreamcast',
    description: 'Pionera en juego online con módem integrado.',
    image: 'assets/img/dreamcast.webp',
    specs: {
      manufacturer: 'SEGA',
      generation: '6ª',
      media: 'GD-ROM',
      notable_games: ['Soulcalibur', 'Crazy Taxi', 'Phantasy Star Online']
    }
  },

  // 2000s
  {
    year: 2000, title: 'PlayStation 2',
    description: 'DVD y retrocompatibilidad; la consola más vendida.',
    image: 'assets/img/playstation2.webp',
    specs: {
      manufacturer: 'Sony',
      generation: '6ª',
      media: 'DVD',
      notable_games: ['GTA: San Andreas', 'Shadow of the Colossus', 'God of War'],
      units_sold: '≈155 M'
    }
  },
  {
    year: 2001,
    title: 'Nintendo GameCube',
    description: 'MiniDVD, mando WaveBird y gran primera hornada de juegos.',
    image: 'https://m.media-amazon.com/images/I/51s+fOXzUbL.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: '6ª',
      media: 'MiniDVD (GameCube)',
      notable_games: ['Metroid Prime', 'Super Smash Bros. Melee', 'The Wind Waker'],
      units_sold: '≈21 M'
    },
    more: 'Diseño compacto con asa; soporte para mando inalámbrico WaveBird.'
  },
  {
    year: 2001, title: 'Game Boy Advance',
    description: 'Portátil 32-bit con catálogo enorme.',
    image: 'https://m.media-amazon.com/images/I/41m7GZdo0lL._UF1000,1000_QL80_.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: 'Portátiles',
      media: 'Cartuchos',
      notable_games: ['Pokémon R/Z/E', 'Metroid Fusion', 'Advance Wars']
    }
  },
  {
    year: 2001, title: 'Xbox',
    description: 'Se consolida el online en consola.',
    image: 'assets/img/xbox.webp',
    specs: {
      manufacturer: 'Microsoft',
      generation: '6ª',
      media: 'DVD + HDD',
      notable_games: ['Halo', 'Fable']
    }
  },
  {
    year: 2003, title: 'Steam (PC)',
    description: 'Despegue de la distribución digital y actualizaciones online.',
    image: 'https://andro4all.com/hero/2024/11/steam-anuncia-que-dejara-de-funcionar-en-windows-7-y-8.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    specs: { manufacturer: 'Valve', generation: 'PC', media: 'Descarga digital' }
  },
  {
    year: 2004, title: 'Nintendo DS',
    description: 'Doble pantalla y táctil; fenómeno mundial.',
    image: 'https://m.media-amazon.com/images/I/51sZpE5vjzL._UF894,1000_QL80_.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: 'Portátiles',
      media: 'Tarjetas DS',
      notable_games: ['Nintendogs', 'Brain Training', 'Pokémon']
    }
  },
  {
    year: 2004, title: 'PSP (PlayStation Portable)',
    description: 'Portátil multimedia potente en formato UMD.',
    image: 'https://m.media-amazon.com/images/I/614vQxfMcLL.jpg',
    specs: {
      manufacturer: 'Sony',
      generation: 'Portátiles',
      media: 'UMD / descarga',
      notable_games: ['God of War: CoO', 'Monster Hunter', 'Crisis Core']
    }
  },
  {
    year: 2005, title: 'Xbox 360 / PlayStation 3',
    description: 'HD, servicios online y tiendas digitales modernas.',
    image: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2013/01/07/xbox-e-ps3.jpg',
    specs: {
      manufacturer: 'Microsoft / Sony',
      generation: '7ª',
      media: 'DVD/BD + descarga',
      notable_games: ['Gears of War', 'Uncharted', 'The Last of Us'],
    }
  },
  {
    year: 2006, title: 'Wii',
    description: 'Control por movimiento y ampliación del público.',
    image: 'assets/img/wii.webp',
    specs: {
      manufacturer: 'Nintendo',
      generation: '7ª',
      media: 'Discos Wii',
      notable_games: ['Wii Sports', 'Mario Galaxy'],
      units_sold: '≈101 M'
    }
  },
  {
    year: 2007, title: 'Boom del juego móvil',
    description: 'Smartphones y tiendas de apps transforman el mercado.',
    image: 'https://images.ctfassets.net/vfkpgemp7ek3/1068706992/349caecfad187ca862a237dbf3629405/2016-top-mobile-games-hero.jpg'
  },

  // 2010s
  {
    year: 2011, title: 'Nintendo 3DS',
    description: 'Efecto 3D sin gafas y gran catálogo.',
    image: 'https://m.media-amazon.com/images/I/613ZmZqXYqL.jpg',
    specs: {
      manufacturer: 'Nintendo',
      generation: 'Portátiles',
      media: 'Tarjetas 3DS / descarga',
      notable_games: ['Mario 3D Land', 'Animal Crossing', 'Pokémon X/Y']
    }
  },
  {
    year: 2011, title: 'PS Vita',
    description: 'Portátil con OLED y gran calidad técnica.',
    image: 'https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/2/9/6/0711719180692/tsp20120217191002/PS-VITA-Wi-Fi.jpg',
    specs: {
      manufacturer: 'Sony',
      generation: 'Portátiles',
      media: 'Tarjetas + descarga',
      notable_games: ['Persona 4 Golden', 'Gravity Rush']
    }
  },
  {
    year: 2012, title: 'Wii U',
    description: 'Doble pantalla en sobremesa; puente hacia Switch.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/1200px-Wii_U_Console_and_Gamepad.png',
    specs: {
      manufacturer: 'Nintendo',
      generation: '8ª',
      media: 'Discos Wii U / descarga',
      notable_games: ['Mario Kart 8', 'Splatoon']
    }
  },
  {
    year: 2013, title: 'PS4 / Xbox One',
    description: 'Streaming, capturas y enfoque en servicios.',
    image: 'assets/img/ps4xboxone.webp',
    specs: {
      manufacturer: 'Sony / Microsoft',
      generation: '8ª',
      media: 'BD / descarga',
      notable_games: ['The Witcher 3', 'Bloodborne', 'Forza Horizon']
    }
  },
  {
    year: 2016, title: 'VR moderna',
    description: 'Oculus Rift, HTC Vive y PSVR popularizan la RV.',
    image: 'https://api.time.com/wp-content/uploads/2016/10/vr-grid-v1.jpg',
    specs: { manufacturer: 'Oculus/HTC/Sony', generation: 'VR consumidor' }
  },

  // 2020s
  {
    year: 2017, title: 'Nintendo Switch',
    description: 'Híbrida portátil/sobremesa.',
    image: 'assets/img/switch.webp',
    specs: {
      manufacturer: 'Nintendo',
      generation: '9ª (híbrida)',
      media: 'Tarjetas / descarga',
      notable_games: ['Breath of the Wild', 'Mario Odyssey'],
      units_sold: '≈140+ M'
    }
  },
  {
    year: 2020, title: 'PS5 / Xbox Series X|S',
    description: 'SSD ultrarrápidos y trazado de rayos.',
    image: 'assets/img/xboxsxps5.webp',
    specs: {
      manufacturer: 'Sony / Microsoft',
      generation: '9ª',
      media: 'UHD-BD / descarga',
      notable_games: ['Elden Ring', 'Spider-Man 2', 'Starfield']
    }
  },

  // NUEVO — Switch 2 (2025)
  {
    year: 2025, title: 'Nintendo Switch 2',
    description: 'Sucesora de Switch con enfoque híbrido. Compatibilidad con juegos de Switch y catálogo de lanzamiento fuerte (según anuncios oficiales de 2025).',
    image: 'https://http2.mlstatic.com/D_NQ_NP_621739-MLA84920367323_052025-O.webp', // opcional: pon aquí tu imagen o URL https
    link: '',
    specs: {
      manufacturer: 'Nintendo',
      generation: '10ª (híbrida)',
      media: 'Tarjetas / descarga',
      notable_games: ['Mario Kart World', '…'],
    },
    more: 'Presentada en 2025; continuidad del concepto híbrido y mejoras de rendimiento. (Consulta la web oficial para detalles concretos.)'
  }
];
