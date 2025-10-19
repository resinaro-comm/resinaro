// src/data/directory.ts

/**
 * Richer listing type. All new fields are optional so existing data stays valid.
 * You can gradually backfill: price, tags, badges, lastUpdated, etc.
 */
export interface Listing {
  slug: string;
  name: string;
  short?: string;
  address?: string;
  phone?: string;
  website?: string;
  mapsUrl?: string;
  menuUrl?: string;
  image?: string;

  /** Optional enrichers */
  price?: "£" | "££" | "£££";
  tags?: string[]; // e.g., ["Neapolitan", "Fresh pasta", "Aperitivo"]
  badges?: Array<"editors-pick" | "hand-checked" | "community">;
  lastUpdated?: string; // ISO date
  openingNote?: string;

  review?: {
    snippet: string;
    author?: string;
    source?: string;
  };
}

export const listingsByCityAndCategory: Record<string, Record<string, Listing[]>> = {
  /* -------------------- MANCHESTER -------------------- */
  manchester: {
    restaurants: [
      {
        slug: "san-carlo",
        name: "San Carlo",
        short: "City-centre institution for classic Italian dining.",
        address: "40–42 King Street West, Manchester M3 2WY",
        phone: "0161 834 6226",
        website: "https://sancarlo.co.uk/restaurants/san-carlo-manchester/",
        mapsUrl: "https://maps.google.com/?q=San+Carlo+Manchester",
        menuUrl: "https://sancarlo.co.uk/menus/",
        image: "/images/San-Carlo.webp",
        price: "£££",
        tags: ["Classic", "Seafood", "Special occasions"],
        badges: ["editors-pick", "hand-checked"],
        lastUpdated: "2025-02-01",
      },
      {
        slug: "salvis-mozzarella-bar",
        name: "Salvi’s Mozzarella Bar (Corn Exchange)",
        short: "Family-run Neapolitan deli & restaurant in the Corn Exchange.",
        address: "Unit 1, The Corn Exchange, Manchester M4 3TR",
        phone: "0161 222 8021",
        website: "https://www.salvismanchester.co.uk/mozzarella-bar",
        mapsUrl: "https://maps.google.com/?q=Salvi%E2%80%99s+Mozzarella+Bar+Corn+Exchange+Manchester",
        menuUrl: "https://www.salvismanchester.co.uk/menu",
        image: "/images/corn-exchange.png",
        price: "££",
        tags: ["Mozzarella", "Deli plates"],
        badges: ["community", "hand-checked"],
        lastUpdated: "2025-01-22",
      },
      {
        slug: "noi-quattro",
        name: "Noi Quattro",
        short: "Independent Neapolitan pizzeria in the Northern Quarter.",
        address: "120 High St, Northern Quarter, Manchester M4 1HQ",
        phone: "0161 834 9032",
        website: "https://www.noiquattro.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Noi+Quattro+Manchester",
        menuUrl: "https://www.noiquattro.co.uk/menu/",
        image: "/images/noi-quattro.jpg",
        price: "££",
        tags: ["Neapolitan pizza", "Casual"],
        badges: ["hand-checked"],
        lastUpdated: "2025-02-05",
      },
    ],
    delis: [
      {
        slug: "lina-stores-manchester",
        name: "Lina Stores (Delicatessen – Quay St)",
        short: "Delicatessen counter with panini, salads and Italian pastries.",
        address: "17 Quay Street, Manchester M3 3HN",
        phone: "0161 470 5625",
        website: "https://www.linastores.co.uk/locations/manchester",
        mapsUrl: "https://maps.google.com/?q=Lina+Stores+Manchester",
        image: "/images/linastores.png",
        review: {
          snippet: "Fresh, homemade pasta that's full of flavour.",
          author: "Tripadvisor reviewer",
          source: "Tripadvisor",
        },
        price: "££",
        tags: ["Pasta", "Counter"],
        badges: ["hand-checked"],
      },
      {
        slug: "roma-caffe-deli",
        name: "Roma Caffè & Deli (Whitefield)",
        short: "Family-run Italian caffè, bakery and deli with imported groceries.",
        address: "268 Bury New Rd, Whitefield, Manchester M45 8QS",
        phone: "0161 766 2941",
        website: "https://roma.ltd.uk/",
        mapsUrl: "https://maps.google.com/?q=Roma+Caff%C3%A8+%26+Deli+Whitefield",
        image: "/images/roma-deli.png",
        review: {
          snippet: "Lovely home cooked Italian food and a lovely atmosphere.",
          author: "Tripadvisor reviewer",
          source: "Tripadvisor",
        },
        price: "£",
        tags: ["Bakery", "Coffee"],
        badges: ["community"],
      },
      {
        slug: "lupo-caffe-italiano",
        name: "Lupo Caffè Italiano (Prestwich)",
        short: "Roman pasticceria & café for pastries, pasta and espresso.",
        address: "Unit 65 Ardent Way, Mountheath Trading Estate, Prestwich M25 9WE",
        phone: "07950 468333",
        website: "https://www.lupocaffe.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Lupo+Caff%C3%A8+Italiano+Prestwich",
        image: "/images/lupo.jpg",
        review: {
          snippet: "Quirky place, great food.",
          author: "Tripadvisor reviewer",
          source: "Tripadvisor",
        },
        price: "£",
        tags: ["Pasticceria", "Coffee"],
      },
    ],
    shops: [
      {
        slug: "salvis-deli-corn-exchange",
        name: "Salvi’s Deli (Corn Exchange)",
        short: "Original Neapolitan deli — meats, cheeses, pantry goods & sweets.",
        address: "Unit 1, The Corn Exchange, Manchester M4 3TR",
        phone: "0161 832 3369",
        website: "https://www.salvismanchester.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Salvi%27s+Corn+Exchange+Manchester",
        image: "/images/salvis-deli.jpg",
        review: {
          snippet: "Great selection of Italian produce at the deli counter.",
          author: "Local customer",
          source: "Customer",
        },
        tags: ["Groceries", "Cheese"],
      },
      {
        slug: "vino-buono-heaton-chapel",
        name: "Vino Buono (Italian Wine & Deli)",
        short: "Italian wine shop & deli — wines on tap, Roman pinsa and staples.",
        address: "984 Wellington Rd N, Heaton Chapel, Stockport SK4 1TW",
        phone: "07404 456300",
        website: "https://www.vinobuono.uk/",
        mapsUrl: "https://maps.google.com/?q=Vino+Buono+Stockport",
        image: "/images/vino-buono.jpg",
        review: {
          snippet: "Hidden gem serving wine from the barrel and delicious Roman pinsa.",
          author: "Tripadvisor reviewer",
          source: "Tripadvisor",
        },
        price: "££",
        tags: ["Wine", "Pinsa"],
      },
      {
        slug: "the-pasta-factory-shop",
        name: "The Pasta Factory (Shop & Deli)",
        short: "Take-home fresh pasta, Italian wines and a small deli area.",
        address: "77 Shudehill, Manchester M4 4AN",
        phone: "0161 222 9250",
        website: "https://www.pastafactory.co.uk/",
        mapsUrl: "https://maps.google.com/?q=The+Pasta+Factory+Manchester",
        image: "/images/pasta-factory.jpg",
        review: {
          snippet: "Another fantastic meal — the gem of Manchester.",
          author: "Rachel E.",
          source: "Google",
        },
        tags: ["Fresh pasta", "Wine"],
      },
    ],
  },

  /* -------------------- LEEDS -------------------- */
  leeds: {
    restaurants: [
      {
        slug: "stuzzi-leeds",
        name: "Stuzzi",
        short: "Modern Italian small plates & pasta in the city centre.",
        address: "7 Merrion Street, Leeds LS1 6PQ",
        phone: "0113 245 5323",
        website: "https://stuzzi.co.uk/leeds/",
        mapsUrl: "https://maps.google.com/?q=Stuzzi+Leeds",
        image: "/images/leeds-stuzzi.jpg",
        price: "£££",
        tags: ["Small plates", "Pasta"],
        badges: ["editors-pick", "hand-checked"],
      },
      {
        slug: "sarto",
        name: "Sarto",
        short: "Fresh, handmade pasta in Munro House.",
        address: "Unit 1C, Munro House, Duke St, Leeds LS9 8AG",
        phone: "0113 345 2074",
        website: "https://sartopasta.uk/",
        mapsUrl: "https://maps.google.com/?q=Sarto+Leeds",
        menuUrl: "https://sartopasta.uk/menu",
        image: "/images/leeds-sarto.jpg",
        price: "££",
        tags: ["Fresh pasta", "Casual"],
        badges: ["community", "hand-checked"],
      },
      {
        slug: "salvos",
        name: "Salvo’s",
        short: "Headingley icon serving southern Italian classics since 1976.",
        address: "115 Otley Road, Headingley, Leeds LS6 3PX",
        phone: "0113 275 5017",
        website: "https://salvos.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Salvo%27s+Leeds",
        image: "/images/leeds-salvos.jpg",
        price: "£££",
        tags: ["Classic", "Family"],
      },
    ],
    delis: [
      {
        slug: "salvos-salumeria",
        name: "Salvo’s Salumeria (Café & Deli)",
        short: "Neighbouring deli-café for Italian produce, coffee and lunches.",
        address: "107–109 Otley Road, Headingley, Leeds LS6 3PX",
        phone: "0113 275 8877",
        website: "https://salvos.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Salvo%27s+Salumeria+Leeds",
        image: "/images/leeds-salumeria.jpg",
        price: "££",
        tags: ["Deli counter", "Coffee"],
      },
      {
        slug: "livinitaly-deli",
        name: "LIVIN’Italy (Deli & Bar, Granary Wharf)",
        short: "Family-run restaurant, deli & wine bar by the canal.",
        address: "Arch Z, Granary Wharf, Wharf Approach, Leeds LS1 4BR",
        phone: "0113 243 0090",
        website: "https://livinitaly.com/",
        mapsUrl: "https://maps.google.com/?q=LIVIN%27Italy+Granary+Wharf+Leeds",
        image: "/images/leeds-livinitaly.jpg",
        price: "££",
        tags: ["Wine bar", "Canal"],
      },
      {
        slug: "la-piola",
        name: "La Piola Italian Café & Bistro",
        short: "Piedmont-inspired café-bistro with deli vibes near Park Square.",
        address: "2 Park Square East, Leeds LS1 2NE",
        website: "https://www.lapiolaleeds.co.uk/",
        mapsUrl: "https://maps.google.com/?q=La+Piola+Leeds",
        image: "/images/leeds-lapiola.jpg",
        price: "££",
        tags: ["Piedmont", "Bistro"],
      },
    ],
    shops: [
      {
        slug: "la-bottega-milanese",
        name: "La Bottega Milanese (Bond Court)",
        short: "Italian espresso bar with panini, pastries & retail beans.",
        address: "Bond Court, Leeds LS1 2JZ",
        website: "https://labottegamilanese.co.uk/",
        mapsUrl: "https://maps.google.com/?q=La+Bottega+Milanese+Leeds",
        image: "/images/leeds-bottega.jpg",
        tags: ["Coffee", "Panini"],
      },
      {
        slug: "veeno-leeds",
        name: "Veeno Leeds (Italian Wine Bar & Shop)",
        short: "Sicilian wines, platters and bottles to take home.",
        address: "5 Wellington Pl, Leeds LS1 4AP",
        website: "https://www.theveenocompany.com/venues/veeno-leeds",
        mapsUrl: "https://maps.google.com/?q=Veeno+Leeds",
        image: "/images/leeds-veeno.jpg",
        tags: ["Wine", "Platters"],
      },
      {
        slug: "livinitaly-bottega",
        name: "LIVIN’Italy (Bottega Retail)",
        short: "Take-home Italian goods from the Granary Wharf deli.",
        address: "Arch Z, Granary Wharf, Leeds LS1 4BR",
        website: "https://livinitaly.com/",
        mapsUrl: "https://maps.google.com/?q=LIVIN%27Italy+Granary+Wharf+Leeds",
        image: "/images/leeds-livinitaly-bottega.jpg",
        tags: ["Groceries", "Wine"],
      },
    ],
  },

  /* -------------------- BRADFORD -------------------- */
  bradford: {
    restaurants: [
      {
        slug: "mamma-mia-bradford",
        name: "Mamma Mia",
        short: "Old-school Italian favourite in Bradford city centre.",
        address: "3 Upper Piccadilly, Bradford BD1 3PE",
        phone: "01274 733834",
        website: "https://mammamiab.co.uk/",
        mapsUrl: "https://maps.google.com/?q=Mamma+Mia+Bradford",
        image: "/images/bradford-mammamia.jpg",
        price: "££",
        tags: ["Classic", "Family"],
      },
      {
        slug: "la-caverna-pizzeria",
        name: "La Caverna Pizzeria",
        short: "Classic pizzas & pasta next to Mamma Mia on Upper Piccadilly.",
        address: "40 Upper Piccadilly, Bradford BD1 3PE",
        phone: "01274 723776",
        website: "https://www.lacavernabradford.co.uk/",
        mapsUrl: "https://maps.google.com/?q=La+Caverna+Pizzeria+Bradford",
        image: "/images/bradford-lacaverna.jpg",
        price: "£",
        tags: ["Pizza", "Casual"],
      },
      {
        slug: "san-angelo-ristorante",
        name: "San Angelo Ristorante",
        short: "Family-run Italian dining in Shipley (near Saltaire).",
        address: "22 Otley Rd, Shipley BD17 7HB",
        phone: "01274 597583",
        website: "https://sanangelouk.com/",
        mapsUrl: "https://maps.google.com/?q=San+Angelo+Ristorante+Shipley",
        image: "/images/bradford-san-angelo.jpg",
        tags: ["Classic", "Family"],
      },
    ],
    delis: [
      {
        slug: "buonissimo-delicatessen",
        name: "Buonissimo Delicatessen (Saltaire)",
        short: "Italian deli-café for panini, pastries & imported staples.",
        address: "59 Bingley Rd, Saltaire, Shipley BD18 4SB",
        phone: "01274 581381",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g672783-d6925755-Reviews-Buonissimo_Delicatessen-Shipley_Bradford_West_Yorkshire_England.html",
        mapsUrl: "https://maps.google.com/?q=Buonissimo+Delicatessen+Saltaire",
        image: "/images/bradford-buonissimo.jpg",
        review: {
          snippet: "“A taste of Italy in Saltaire.”",
          author: "Tripadvisor reviewer",
          source: "Tripadvisor",
        },
        tags: ["Deli counter", "Pastries"],
      },
      {
        slug: "italianissimo-saltaire",
        name: "Italianissimo (Saltaire)",
        short: "Local Italian kitchen with takeaway and deli feel.",
        address: "211 Bingley Rd, Shipley BD18 4DH",
        phone: "01274 592765",
        website: "https://www.facebook.com/italianissimosaltaire/",
        mapsUrl: "https://maps.google.com/?q=Italianissimo+Saltaire",
        image: "/images/bradford-italianissimo.jpg",
        review: {
          snippet: "“Lovely homemade Italian dishes.”",
          author: "Customer",
          source: "Customer",
        },
        price: "£",
        tags: ["Takeaway", "Homemade"],
      },
      {
        slug: "emporio-italia-ilkley",
        name: "Emporio Italia (Ilkley)",
        short: "Italian deli & café with regional groceries and wines.",
        address: "7 Railway Rd, Ilkley LS29 8HQ",
        phone: "01943 430005",
        website: "https://www.yell.com/biz/emporio-italia-ilkley-4756145/",
        mapsUrl: "https://maps.google.com/?q=Emporio+Italia+Ilkley",
        image: "/images/bradford-emporio-italia.jpg",
        tags: ["Groceries", "Wine"],
      },
    ],
    shops: [
      {
        slug: "buonissimo-shop",
        name: "Buonissimo (Deli Shop, Saltaire)",
        short: "Shelves of Italian pantry goods, sweets and cheeses.",
        address: "59 Bingley Rd, Saltaire, Shipley BD18 4SB",
        phone: "01274 581381",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g672783-d6925755-Reviews-Buonissimo_Delicatessen-Shipley_Bradford_West_Yorkshire_England.html",
        mapsUrl: "https://maps.google.com/?q=Buonissimo+Delicatessen+Saltaire",
        image: "/images/bradford-buonissimo.jpg",
        tags: ["Pantry", "Cheese"],
      },
      {
        slug: "emporio-italia-shop",
        name: "Emporio Italia (Shop, Ilkley)",
        short: "Italian wines, salumi, cheeses and gift hampers.",
        address: "7 Railway Rd, Ilkley LS29 8HQ",
        phone: "01943 430005",
        website: "https://www.yell.com/biz/emporio-italia-ilkley-4756145/",
        mapsUrl: "https://maps.google.com/?q=Emporio+Italia+Ilkley",
        image: "/images/bradford-emporio-italia.jpg",
        tags: ["Wine", "Salumi", "Gifts"],
      },
      {
        slug: "roswithas-darley-street-market",
        name: "Roswitha’s Delicatessen (Darley Street Market)",
        short: "Continental deli with Italian staples & cured meats.",
        address: "16–24 Darley St Market, Bradford BD1 3HH",
        phone: "01274 307876",
        website:
          "https://www.visitbradford.com/things-to-do/shopping/roswithas-delicatessen-p1621281",
        mapsUrl: "https://maps.google.com/?q=Roswitha%27s+Delicatessen+Bradford",
        image: "/images/bradford-roswithas.jpg",
        tags: ["Deli", "Market"],
      },
    ],
  },

  /* -------------------- NEWCASTLE UPON TYNE -------------------- */
  newcastle: {
    restaurants: [
      {
        slug: "panis-cafe",
        name: "Pani’s Café",
        short:
          "Beloved Sardinian café-restaurant on High Bridge—homemade pasta, regional specials & warm service.",
        address: "61–65 High Bridge, Newcastle upon Tyne NE1 6BX",
        phone: "0191 232 4366",
        website: "https://www.squaremeal.co.uk/restaurants/panis-cafe_1867",
        mapsUrl: "https://maps.google.com/?q=Pani’s+Cafe+Newcastle+NE1",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Sardinian", "Homemade pasta"],
        badges: ["hand-checked", "community"],
        lastUpdated: "2025-10-19",
      },
      {
        slug: "marco-polo-dean-st",
        name: "Marco Polo",
        short:
          "Long-running Italian on Dean Street for classic antipasti, pizza & pasta in a grand townhouse setting.",
        address: "33 Dean St, Newcastle upon Tyne NE1 1PQ",
        phone: "0191 232 5533",
        website: "https://www.getintonewcastle.co.uk/business/marco-polo-restaurant",
        mapsUrl: "https://maps.google.com/?q=Marco+Polo+Newcastle+NE1",
        image: "/images/landscape-image.png",
        price: "£££",
        tags: ["Classic", "City centre"],
        badges: ["community"],
        lastUpdated: "2025-10-19",
      },
    ],
    delis: [
      {
        slug: "cafe-corsaro-gosforth",
        name: "Café Corsaro (Italian Deli & Enoteca)",
        short:
          "Independent Italian deli-café and enoteca in Gosforth—espresso, panini and shelves of Italian staples.",
        address: "44 Salters Rd, Gosforth, Newcastle upon Tyne NE3 1DX",
        phone: "0191 625 0683",
        website: "https://www.cafecorsaro.com/",
        mapsUrl: "https://mapquest.com/gb/newcastle-upon-tyne/381377911",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Deli counter", "Enoteca"],
        badges: ["community"],
        lastUpdated: "2025-10-19",
      },
    ],
    shops: [
      {
        slug: "di-meos-gelato-whitley-bay",
        name: "Di Meo’s Gelato (Whitley Bay)",
        short:
          "Award-winning, fourth-generation Italian gelateria by the coast—fresh gelato made daily.",
        address: "9 Marine Avenue, Whitley Bay NE26 1QN",
        website: "https://www.visitnorthtyneside.com/venues/venue/di-meos/",
        mapsUrl: "https://maps.google.com/?q=Di+Meo’s+Whitley+Bay",
        image: "/images/landscape-image.png",
        price: "£",
        tags: ["Gelato", "Family-run"],
        badges: ["community"],
        lastUpdated: "2025-10-19",
      },
    ],
  },

    /* -------------------- GLASGOW -------------------- */
  glasgow: {
    restaurants: [
      {
        slug: "paesano-pizza-miller-street",
        name: "Paesano Pizza (Miller Street)",
        short: "Neapolitan pizza specialists fired in wood-burning ovens.",
        address: "94 Miller St, Glasgow G1 1DT",
        phone: "0141 258 1212",
        website: "https://paesanopizza.co.uk/locations/paesano-pizza-miller-street/",
        mapsUrl: "https://maps.google.com/?q=Paesano+Pizza+94+Miller+St+Glasgow",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Neapolitan", "Casual"],
        badges: ["hand-checked", "community"],
        lastUpdated: "2025-10-19",
      },
      {
        slug: "la-lanterna-queen-st",
        name: "La Lanterna (City Centre)",
        short: "Long-running Glasgow institution for classic Italian dining.",
        address: "35 Queen St, Glasgow G1 3EF",
        phone: "0141 221 9160",
        website: "https://lalanterna-glasgow.co.uk/locations/city-centre/",
        mapsUrl: "https://maps.google.com/?q=La+Lanterna+35+Queen+St+Glasgow",
        image: "/images/landscape-image.png",
        price: "£££",
        tags: ["Classic", "Seafood", "Special occasions"],
        badges: ["editors-pick"],
        lastUpdated: "2025-10-19",
      },
    ],

    delis: [
      {
        slug: "eusebi-deli",
        name: "Eusebi Deli",
        short: "West End deli-restaurant for fresh pasta, pastries & provisions.",
        address: "152 Park Rd, Glasgow G4 9HB",
        phone: "0141 648 9999",
        website: "https://eusebideli.com/",
        mapsUrl: "https://maps.google.com/?q=Eusebi+Deli+152+Park+Rd+Glasgow",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Deli counter", "Fresh pasta", "Bakery"],
        badges: ["hand-checked"],
        lastUpdated: "2025-10-19",
      },
      {
        slug: "celinos-partick",
        name: "Celino’s (Partick Deli & Café)",
        short: "Neighbourhood Italian deli-café with retail shelves & espresso.",
        address: "235 Dumbarton Rd, Glasgow G11 6AB",
        website: "https://celinos.com/partick/",
        mapsUrl: "https://maps.google.com/?q=Celino%E2%80%99s+Partick+235+Dumbarton+Rd+Glasgow",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Deli", "Espresso", "Panini"],
        badges: ["community"],
        lastUpdated: "2025-10-19",
      },
    ],

    shops: [
      {
        slug: "celinos-alexandra-parade",
        name: "Celino’s (Alexandra Parade – Deli & Shop)",
        short: "Family-run Italian deli-shop for groceries, salumi & gifts.",
        address: "620 Alexandra Parade, Glasgow G31 3BT",
        phone: "0141 554 0523",
        website: "https://celinos.com/alexandra-parade/",
        mapsUrl: "https://maps.google.com/?q=Celino%E2%80%99s+620+Alexandra+Parade+Glasgow",
        image: "/images/landscape-image.png",
        price: "££",
        tags: ["Groceries", "Salumi", "Gifts"],
        badges: ["hand-checked"],
        lastUpdated: "2025-10-19",
      },
      {
        slug: "crollas-gelateria-byres-road",
        name: "Crolla’s Gelateria (Byres Road)",
        short: "Fourth-generation Italian gelato parlour in the West End.",
        address: "221 Byres Rd, Glasgow G12 8UD",
        phone: "0141 341 0465",
        website: "https://crollasgelateria.com/", // brand site
        mapsUrl: "https://maps.google.com/?q=Crolla%E2%80%99s+Gelateria+221+Byres+Rd+Glasgow",
        image: "/images/landscape-image.png",
        price: "£",
        tags: ["Gelato", "Family-run"],
        badges: ["community"],
        lastUpdated: "2025-10-19",
      },
    ],
  },


  /* -------------------- 15 NEW CITY STUBS (ready to backfill) -------------------- */
 /* -------------------- LONDON -------------------- */
london: {
  restaurants: [
    {
      slug: "padella-borough-market",
      name: "Padella (Borough Market)",
      short: "Fresh, hand-rolled pasta & a few perfect sauces — the London queue classic.",
      address: "6 Southwark St, London SE1 1TQ",
      website: "https://www.padella.co/locations/borough-market",
      mapsUrl: "https://maps.google.com/?q=Padella+Borough+Market+SE1+1TQ",
      image: "/images/london-padella.jpg", // TODO: add photo
      price: "££",
      tags: ["Fresh pasta", "Walk-in friendly", "Borough Market"],
      badges: ["editors-pick", "hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "bocca-di-lupo-soho",
      name: "Bocca di Lupo (Soho)",
      short: "Seasonal regional Italian small & large plates; a Soho institution.",
      address: "12 Archer St, London W1D 7BB",
      phone: "020 7734 2223",
      website: "https://boccadilupo.com/",
      mapsUrl: "https://maps.google.com/?q=12+Archer+Street+W1D+7BB",
      image: "/images/london-bocca-di-lupo.jpg", // TODO: add photo
      price: "£££",
      tags: ["Regional Italian", "Soho", "Reservations"],
      badges: ["community", "hand-checked"],
      lastUpdated: "2025-10-19",
    },
  ],
  delis: [
    {
      slug: "lina-stores-delicatessen-soho",
      name: "Lina Stores (Delicatessen, Soho)",
      short: "Iconic 1944 Soho deli — fresh pasta, cured meats, dolci & Italian staples.",
      address: "18 Brewer St, London W1F 0SH",
      website: "https://www.linastores.co.uk/locations/",
      mapsUrl: "https://maps.google.com/?q=18+Brewer+Street+W1F+0SH",
      image: "/images/london-lina-stores-deli.jpg", // TODO
      price: "££",
      tags: ["Deli counter", "Fresh pasta", "Historic"],
      badges: ["hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "giacobazzis-hampstead",
      name: "Giacobazzi’s (Hampstead)",
      short: "Beloved neighbourhood Italian deli & wine shop near the Heath.",
      address: "1–3 Fleet Rd, London NW3 2ET",
      phone: "020 7794 5370",
      website: "https://hampsteadvillagelondon.com/listing/giacobazzis-delicatessen/",
      mapsUrl: "https://maps.google.com/?q=1-3+Fleet+Road+NW3+2ET",
      image: "/images/london-giacobazzis.jpg", // TODO
      price: "££",
      tags: ["Deli", "Wine", "Neighbourhood"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
  shops: [
    {
      slug: "eataly-london-bishopsgate",
      name: "Eataly London (Bishopsgate)",
      short: "Huge Italian food hall & market: groceries, wine, bakeries, restaurants.",
      address: "135 Bishopsgate, London EC2M 3YD",
      phone: "020 3936 8100",
      website: "https://eataly.co.uk/pages/eataly-london",
      mapsUrl: "https://maps.google.com/?q=135+Bishopsgate+EC2M+3YD",
      image: "/images/london-eataly.jpg", // TODO
      price: "££",
      tags: ["Market hall", "Groceries", "Wine"],
      badges: ["hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "prezzemolo-vitale-notting-hill",
      name: "Prezzemolo & Vitale (Notting Hill)",
      short: "Sicilian grocer — fresh counters, cheeses, charcuterie & pantry staples.",
      address: "117-119 Portobello Rd, London W11 2DY",
      phone: "020 8037 7025",
      website: "https://www.prezzemoloevitale.co.uk/pages/our-stores",
      mapsUrl: "https://maps.google.com/?q=117-119+Portobello+Road+W11+2DY",
      image: "/images/london-prezzemolo-vitale.jpg", // TODO
      price: "££",
      tags: ["Sicilian", "Groceries", "Counter"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
},

  // src/data/directory.ts  (append the new city into listingsByCityAndCategory)

/* -------------------- BIRMINGHAM -------------------- */
birmingham: {
  restaurants: [
    {
      slug: "san-carlo-birmingham",
      name: "San Carlo (Temple Street)",
      short: "Flagship city-centre classic for seafood, pasta and white-tablecloth service.",
      address: "4 Temple Street, Birmingham B2 5BN",
      phone: "0121 633 0251",
      website: "https://sancarlo.co.uk/restaurants/san-carlo-birmingham/",
      mapsUrl: "https://maps.google.com/?q=San+Carlo+Birmingham+B2+5BN",
      image: "/images/San-Carlo.webp",
      price: "£££",
      tags: ["Classic", "Seafood", "Special occasions"],
      badges: ["hand-checked", "community"],
      lastUpdated: "2025-10-19"
    },
    {
      slug: "tropea-harborne",
      name: "Tropea (Harborne)",
      short: "Neighbourhood Italian with seasonal small plates and fresh pasta in Harborne.",
      address: "27 Lordswood Rd, Birmingham B17 9RP",
      phone: "0121 427 9777",
      website: "https://tropeabirmingham.com/",
      mapsUrl: "https://maps.google.com/?q=Tropea+27+Lordswood+Rd+B17+9RP",
      image: "/images/landscape-image.png", // TODO: add venue photo to /public/images
      price: "£££",
      tags: ["Seasonal", "Fresh pasta", "Neighbourhood"],
      badges: ["editors-pick", "community"],
      lastUpdated: "2025-10-19"
    }
  ],
  delis: [
    {
      slug: "ciaro-italian-deli-bearwood",
      name: "Ciaro Italian Deli (Bearwood)",
      short: "Independent Italian deli-café with espresso, panini and shelves of imports.",
      address: "530 Bearwood Rd, Smethwick B66 4BX",
      phone: "", // not published on their socials at time of writing
      website: "https://www.instagram.com/ciaroitaliandeli/",
      mapsUrl: "https://maps.google.com/?q=530+Bearwood+Rd+B66+4BX",
      image: "/images/landscape-image.png", // TODO: add a deli photo
      price: "££",
      tags: ["Deli counter", "Coffee"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
      review: {
        snippet: "Proper Italian sandwiches, coffee and friendly service.",
        source: "Community"
      }
    }
    // TODO: Add a second deli once verified (e.g., another Birmingham/Moseley option).
  ],
  shops: [
    // TODO: Add 1–2 specialist Italian grocers/wine shops in Birmingham we’re confident to recommend.
  ]
},

 /* -------------------- LIVERPOOL -------------------- */
liverpool: {
  restaurants: [
    {
      slug: "il-forno-duke-st",
      name: "Il Forno",
      short:
        "Long-standing independent for wood-fired pizza, fresh pasta and a lively dining room.",
      address: "132 Duke St, Liverpool L1 5AG",
      phone: "0151 709 4002",
      website: "https://www.instagram.com/ilfornoliverpool/",
      mapsUrl: "https://maps.google.com/?q=Il+Forno+132+Duke+St+Liverpool+L1+5AG",
      image: "/images/landscape-image.png", // TODO: swap for a real venue photo
      price: "££",
      tags: ["Wood-fired pizza", "Fresh pasta", "City centre"],
      badges: ["community", "hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "casa-italia-stanley-st",
      name: "Casa Italia",
      short:
        "Beloved Liverpool institution serving classic pizza & pasta in a bustling trattoria setting.",
      address: "36–40 Stanley St, Liverpool L1 6AL",
      phone: "0151 227 5774",
      website: "https://www.casaitalialiverpool.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Casa+Italia+Liverpool+L1+6AL",
      image: "/images/landscape-image.png", // TODO
      price: "££",
      tags: ["Classic", "Family-friendly"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],

  delis: [
    {
      slug: "italian-club-bakery-bold-st",
      name: "The Italian Club Bakery (Bold St)",
      short:
        "Proper Italian breads, pastries and coffee from the Italian Club team — perfect for a quick bite.",
      address: "8 Bold St, Liverpool L1 4DS",
      phone: "",
      website: "https://italianclubliverpool.co.uk/italian-club-bakery/",
      mapsUrl: "https://maps.google.com/?q=8+Bold+St+Liverpool+L1+4DS",
      image: "/images/landscape-image.png", // TODO
      price: "£",
      tags: ["Bakery", "Coffee", "Pasticceria"],
      badges: ["community", "hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "in-tavola-italian-deli",
      name: "In Tavola – Italian Deli",
      short:
        "Independent deli for cured meats, cheeses, fresh sandwiches and Italian pantry staples.",
      address: "829 Prescot Rd, Liverpool L13 3BS",
      phone: "0151 739 5800",
      website: "https://www.intavola.uk/",
      mapsUrl: "https://maps.google.com/?q=829+Prescot+Road+Liverpool+L13+3BS",
      image: "/images/landscape-image.png", // TODO
      price: "£",
      tags: ["Deli counter", "Groceries"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],

  shops: [
    {
      slug: "pd-italian-bakery",
      name: "P&D Italian Bakery (Italian Quarter)",
      short:
        "Artisanal breads, cakes and Italian treats from Paolo & Donato’s Italian Quarter.",
      address: "Queens Sq / Williamson Sq area, Liverpool L1",
      phone: "",
      website: "https://www.tripadvisor.co.uk/Restaurant_Review-g186337-d25823993-Reviews-P_D_Italian_Bakery-Liverpool_Merseyside_England.html",
      mapsUrl: "https://maps.google.com/?q=P%26D+Italian+Bakery+Liverpool",
      image: "/images/landscape-image.png", // TODO
      price: "£",
      tags: ["Bakery", "Dolci"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "in-tavola-italian-grocer",
      name: "In Tavola (Grocer)",
      short:
        "Retail shelves of sauces, pasta, oils and regional Italian produce to stock your pantry.",
      address: "829 Prescot Rd, Liverpool L13 3BS",
      phone: "0151 739 5800",
      website: "https://www.intavola.uk/",
      mapsUrl: "https://maps.google.com/?q=829+Prescot+Road+Liverpool+L13+3BS",
      image: "/images/landscape-image.png", // TODO
      price: "£",
      tags: ["Groceries", "Take-home"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
},

  sheffield: {},
  nottingham: {},
  leicester: {},
  bristol: {},
  /* -------------------- EDINBURGH -------------------- */
edinburgh: {
  restaurants: [
    {
      slug: "locanda-de-gusti",
      name: "Locanda De Gusti",
      short: "Beloved Dalry trattoria—Abruzzo/South Italian cooking, seafood & handmade pasta.",
      address: "102 Dalry Rd, Edinburgh EH11 2DW",
      phone: "",
      website: "https://www.locandadegusti.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Locanda+De+Gusti+Edinburgh",
      image: "/images/landscape-image.png",
      price: "£££",
      tags: ["Seafood", "Pasta", "Family-run"],
      badges: ["hand-checked", "community"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "vittoria-on-the-bridge",
      name: "Vittoria On The Bridge",
      short: "Grand city-centre Italian—classic antipasti, pizza & pasta near the Old Town.",
      address: "19 George IV Bridge, Edinburgh EH1 1EN",
      phone: "",
      website: "https://vittoriagroup.co.uk/restaurant/vittoria-on-the-bridge/",
      mapsUrl: "https://maps.google.com/?q=Vittoria+On+The+Bridge+Edinburgh",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Classic", "Family", "City centre"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
  delis: [
    {
      slug: "valvona-and-crolla-elm-row",
      name: "Valvona & Crolla (Elm Row)",
      short: "Historic Italian deli & wine merchant—cheese, salumi, pasta, pastries and café.",
      address: "19 Elm Row, Edinburgh EH7 4AA",
      phone: "",
      website: "https://www.valvonacrolla.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Valvona+%26+Crolla+Elm+Row+Edinburgh",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Deli counter", "Wine merchant", "Café"],
      badges: ["hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "sicilian-pastry-shop",
      name: "The Sicilian Pastry Shop",
      short: "Leith favourite for cannoli, arancini, celebration cakes & proper espresso.",
      address: "11–15 Albert St, Edinburgh EH7 5NG",
      phone: "",
      website: "https://www.facebook.com/thesicilianpastryshop/",
      mapsUrl: "https://maps.google.com/?q=Sicilian+Pastry+Shop+Edinburgh",
      image: "/images/landscape-image.png",
      price: "£",
      tags: ["Sicilian", "Bakery", "Coffee"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
  shops: [
    {
      slug: "little-italy-lothian-road",
      name: "Little Italy (Espresso & Deli)",
      short: "Lively espresso bar & Italian grocery—panini, biscotti, sauces, seasonal treats.",
      address: "Earl Grey St (Lothian Rd), Edinburgh EH3 9BN",
      phone: "",
      website: "https://www.littleitalycoffee.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Little+Italy+Lothian+Road+Edinburgh",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Coffee", "Groceries", "Panini"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "ciao-roma-gelateria",
      name: "Ciao Roma Gelateria (South Bridge)",
      short: "House-made Italian gelato & desserts next to the long-running trattoria.",
      address: "64 South Bridge, Edinburgh EH1 1LS",
      phone: "",
      website: "https://www.ciaoroma.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Ciao+Roma+Gelateria+Edinburgh",
      image: "/images/landscape-image.png",
      price: "£",
      tags: ["Gelato", "Desserts", "Family-run"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
},

  cardiff: {},
  brighton: {},
  oxford: {},
  cambridge: {},
 /* -------------------- YORK -------------------- */
york: {
  restaurants: [
    {
      slug: "delrios-york",
      name: "Delrio’s",
      short: "Long-loved trattoria by Micklegate Bar—Sardinian specials, hearty pasta, warm hospitality.",
      address: "10–12 Blossom Street, York YO24 1AE",
      phone: "01904 622695",
      website: "https://www.delriosrestaurant.com/",
      mapsUrl: "https://maps.google.com/?q=Delrio%E2%80%99s+York",
      image: "/images/landscape-image.png", // TODO: drop a venue photo in /public/images
      price: "£££",
      tags: ["Sardinian", "Pasta", "Classic"],
      badges: ["community", "hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "cresci-pizzeria-york",
      name: "Cresci Pizzeria",
      short: "AVPN-certified Neapolitan pizza, spritz & friendly pace in the centre.",
      address: "20 Piccadilly, York YO1 9NU",
      phone: "01904 522666",
      website: "https://www.crescigroup.co.uk/york",
      mapsUrl: "https://maps.google.com/?q=Cresci+Pizzeria+York",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Neapolitan pizza", "Casual"],
      badges: ["hand-checked"],
      lastUpdated: "2025-10-19",
    },
  ],
  delis: [
    {
      slug: "trinacria-sicilian-york",
      name: "Trinacria – Sicilian Café & Deli",
      short: "Neighbourhood Sicilian on Bishy Road—espresso, cannoli, arancini & shelves of Italian staples.",
      address: "54 Bishopthorpe Rd, York YO23 1JJ",
      phone: "01904 656566",
      website: "https://www.trinacria.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Trinacria+54+Bishopthorpe+Rd+York",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Sicilian", "Deli counter", "Coffee"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
  shops: [
    {
      slug: "henshelwoods-delicatessen",
      name: "Henshelwoods Delicatessen",
      short: "Award-winning city-centre deli with Italian cheeses, salumi, antipasti & pantry goods.",
      address: "10 Newgate, York YO1 7LA",
      phone: "01904 673877",
      website: "https://www.henshelwoods-delicatessen.co.uk/",
      mapsUrl: "https://maps.google.com/?q=Henshelwoods+Delicatessen+York",
      image: "/images/landscape-image.png",
      price: "££",
      tags: ["Cheese", "Salumi", "Pantry"],
      badges: ["hand-checked"],
      lastUpdated: "2025-10-19",
    },
    {
      slug: "roberto-authentic-italian-gelato",
      name: "Roberto – Authentic Italian Gelato",
      short: "Italian gelato & desserts made daily; classic tiramisù and Sicilian cannoli.",
      address: "York (city centre) — see site for current trading spot",
      phone: "",
      website: "https://www.facebook.com/robertoauthenticgelato/",
      mapsUrl: "https://maps.google.com/?q=Roberto+Authentic+Italian+Gelato+York",
      image: "/images/landscape-image.png",
      price: "£",
      tags: ["Gelato", "Desserts", "Family-run"],
      badges: ["community"],
      lastUpdated: "2025-10-19",
    },
  ],
},

  bath: {},
};

export const cities = Object.keys(listingsByCityAndCategory);
// Export Listing for consumers; keep a legacy alias just in case
export type { Listing as DefaultListing };
