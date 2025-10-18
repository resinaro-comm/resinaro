// src/data/directory.ts

// Public type for a directory listing item
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
  review?: {
    snippet: string;
    author?: string;
    source?: string;
  };
}

export const listingsByCityAndCategory: Record<string, Record<string, Listing[]>> = {
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
        review: { snippet: "“Best Italian in Leeds.”", author: "Steven D.", source: "Tripadvisor" },
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
        review: { snippet: "“Fresh, delicious pasta and a chilled vibe.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“Always great atmosphere and consistently good food.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“The Salumeria and Enoteca are excellent.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“Warm, friendly service and proper Italian flavours.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
      },
      {
        slug: "la-piola",
        name: "La Piola Italian Café & Bistro",
        short: "Piedmont-inspired café-bistro with deli vibes near Park Square.",
        address: "2 Park Square East, Leeds LS1 2NE",
        website: "https://www.lapiolaleeds.co.uk/",
        mapsUrl: "https://maps.google.com/?q=La+Piola+Leeds",
        image: "/images/leeds-lapiola.jpg",
        review: { snippet: "“Feels like dinner at friends in Rome.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
      },
      {
        slug: "veeno-leeds",
        name: "Veeno Leeds (Italian Wine Bar & Shop)",
        short: "Sicilian wines, platters and bottles to take home.",
        address: "5 Wellington Pl, Leeds LS1 4AP",
        website: "https://www.theveenocompany.com/venues/veeno-leeds",
        mapsUrl: "https://maps.google.com/?q=Veeno+Leeds",
        image: "/images/leeds-veeno.jpg",
      },
      {
        slug: "livinitaly-bottega",
        name: "LIVIN’Italy (Bottega Retail)",
        short: "Take-home Italian goods from the Granary Wharf deli.",
        address: "Arch Z, Granary Wharf, Leeds LS1 4BR",
        website: "https://livinitaly.com/",
        mapsUrl: "https://maps.google.com/?q=LIVIN%27Italy+Granary+Wharf+Leeds",
        image: "/images/leeds-livinitaly-bottega.jpg",
      },
    ],
  },

  /* -------------------- BRADFORD (incl. Saltaire/Shipley/Ilkley area) -------------------- */
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
        review: { snippet: "“Lovely traditional Italian fare and great service.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“Great pizza, friendly staff.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“Proper Italian cooking and warm hospitality.”", author: "Google reviewer", source: "Google" },
      },
    ],
    delis: [
      {
        slug: "buonissimo-delicatessen",
        name: "Buonissimo Delicatessen (Saltaire)",
        short: "Italian deli-café for panini, pastries & imported staples.",
        address: "59 Bingley Rd, Saltaire, Shipley BD18 4SB",
        phone: "01274 581381",
        website: "https://www.tripadvisor.com/Restaurant_Review-g672783-d6925755-Reviews-Buonissimo_Delicatessen-Shipley_Bradford_West_Yorkshire_England.html",
        mapsUrl: "https://maps.google.com/?q=Buonissimo+Delicatessen+Saltaire",
        image: "/images/bradford-buonissimo.jpg",
        review: { snippet: "“A taste of Italy in Saltaire.”", author: "Tripadvisor reviewer", source: "Tripadvisor" },
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
        review: { snippet: "“Lovely homemade Italian dishes.”", author: "Customer", source: "Customer" },
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
        review: { snippet: "“Proper Italian produce and espresso.”", author: "Customer", source: "Customer" },
      },
    ],
    shops: [
      {
        slug: "buonissimo-shop",
        name: "Buonissimo (Deli Shop, Saltaire)",
        short: "Shelves of Italian pantry goods, sweets and cheeses.",
        address: "59 Bingley Rd, Saltaire, Shipley BD18 4SB",
        phone: "01274 581381",
        website: "https://www.tripadvisor.com/Restaurant_Review-g672783-d6925755-Reviews-Buonissimo_Delicatessen-Shipley_Bradford_West_Yorkshire_England.html",
        mapsUrl: "https://maps.google.com/?q=Buonissimo+Delicatessen+Saltaire",
        image: "/images/bradford-buonissimo.jpg",
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
      },
      {
        slug: "roswithas-darley-street-market",
        name: "Roswitha’s Delicatessen (Darley Street Market)",
        short: "Continental deli with Italian staples & cured meats.",
        address: "16–24 Darley St Market, Bradford BD1 3HH",
        phone: "01274 307876",
        website: "https://www.visitbradford.com/things-to-do/shopping/roswithas-delicatessen-p1621281",
        mapsUrl: "https://maps.google.com/?q=Roswitha%27s+Delicatessen+Bradford",
        image: "/images/bradford-roswithas.jpg",
      },
    ],
  },
};

export const cities = Object.keys(listingsByCityAndCategory);
// Export Listing for consumers; keep a legacy alias just in case
export type { Listing as DefaultListing };
