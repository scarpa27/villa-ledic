// Keep apartment facts and photos in one place. Pages can simply pick the
// fields they need instead of repeating apartment details in their JSX.

// Apartment A1 photos. 1.jpg is the hero/main photo for the apartment.
import a1Hero from "../assets/images/apartments/a1/1.jpg";
import a1LivingRoom from "../assets/images/apartments/a1/living-room.jpg";
import a1Bedroom from "../assets/images/apartments/a1/bedroom.webp";
import a1Bed from "../assets/images/apartments/a1/bed.jpg";
import a1Sofa from "../assets/images/apartments/a1/sofa.webp";
import a1Kitchen from "../assets/images/apartments/a1/kitchen.webp";
import a1Bathroom from "../assets/images/apartments/a1/bathroom.webp";
import a1SeaView from "../assets/images/apartments/a1/sea-view.webp";

// Apartment A2 photos. 1.jpg is the hero/main photo for the apartment.
import a2Hero from "../assets/images/apartments/a2/1.webp";
import a2LivingRoom1 from "../assets/images/apartments/a2/livingroom-1.webp";
import a2LivingRoom2 from "../assets/images/apartments/a2/livingroom-1-2.webp";
import a2Bedroom1 from "../assets/images/apartments/a2/bedroom-1.webp";
import a2Bedroom1Alt from "../assets/images/apartments/a2/bedroom-1-1.webp";
import a2Bedroom2 from "../assets/images/apartments/a2/bedroom-2.webp";
import a2Bedroom2Alt from "../assets/images/apartments/a2/bedroom-2-1.webp";
import a2DiningTable from "../assets/images/apartments/a2/diningtable.webp";
import a2Kitchen from "../assets/images/apartments/a2/kitchen.webp";
import a2Bathroom1 from "../assets/images/apartments/a2/bathroom-1.webp";
import a2Bathroom1Alt from "../assets/images/apartments/a2/bathroom-1-1.webp";
import a2Hallway from "../assets/images/apartments/a2/hallway.webp";
import a2Balcony from "../assets/images/apartments/a2/balcony.webp";

// Apartment A3 photos. 1.jpg is the hero/main photo for the apartment.
import a3Hero from "../assets/images/apartments/a3/1.jpg";
import a3LivingRoom from "../assets/images/apartments/a3/livingroom.webp";
import a3Bedroom1 from "../assets/images/apartments/a3/bedroom-1.webp";
import a3Bedroom2 from "../assets/images/apartments/a3/bedroom-2.webp";
import a3Kitchen from "../assets/images/apartments/a3/kitchen.webp";
import a3Bathroom from "../assets/images/apartments/a3/bathroom.webp";
import a3Balcony from "../assets/images/apartments/a3/balcony.webp";

// Apartment A4 photos. 1.jpg is the hero/main photo for the apartment.
import a4Hero from "../assets/images/apartments/a4/1.webp";
import a4LivingRoom from "../assets/images/apartments/a4/livingroom.webp";
import a4LivingRoom1 from "../assets/images/apartments/a4/livingroom-1.webp";
import a4Bed from "../assets/images/apartments/a4/bed.webp";
import a4Kitchen from "../assets/images/apartments/a4/kitchen.webp";
import a4Bathroom from "../assets/images/apartments/a4/bathroom.webp";
import a4Terrace from "../assets/images/apartments/a4/terasse.webp";

// Apartment A5 photos. 1.jpg is the hero/main photo for the apartment.
import a5Hero from "../assets/images/apartments/a5/1.webp";
import a5LivingRoom from "../assets/images/apartments/a5/livingroom.webp";
import a5Bed from "../assets/images/apartments/a5/bed.webp";
import a5Bed2 from "../assets/images/apartments/a5/bed-2.webp";
import a5Kitchen from "../assets/images/apartments/a5/kitchen.webp";
import a5Bathroom from "../assets/images/apartments/a5/bathroom.webp";
import a5Balcony from "../assets/images/apartments/a5/balcony.webp";

// Apartment A6 photos. 1.jpg is the hero/main photo for the apartment.
import a6Hero from "../assets/images/apartments/a6/1.webp";
import a6LivingRoom1 from "../assets/images/apartments/a6/livingroom-1.webp";
import a6LivingRoom2 from "../assets/images/apartments/a6/livingroom-2.webp";
import a6Bedroom1 from "../assets/images/apartments/a6/bedroom-1.webp";
import a6Bedroom1Alt from "../assets/images/apartments/a6/bedroom-1-2.webp";
import a6Bedroom2 from "../assets/images/apartments/a6/bedroom-2.webp";
import a6Bedroom2Alt from "../assets/images/apartments/a6/bedroom-2-1.webp";
import a6Kitchen from "../assets/images/apartments/a6/kitchen.webp";
import a6Bathroom1 from "../assets/images/apartments/a6/bathroom-1.webp";
import a6Bathroom1Alt from "../assets/images/apartments/a6/bathroom-1-2.webp";
import a6Bathroom2 from "../assets/images/apartments/a6/bathroom-2.webp";
import a6Bathroom2Alt from "../assets/images/apartments/a6/bathroom-2-1.webp";
import a6Balcony from "../assets/images/apartments/a6/balcony.webp";

// Apartment A7 photos. 1.jpg is the hero/main photo for the apartment.
import a7Hero from "../assets/images/apartments/a7/1.jpg";
import a7LivingRoom from "../assets/images/apartments/a7/livingroom.webp";
import a7LivingRoom1 from "../assets/images/apartments/a7/livingroom-1.webp";
import a7Bedroom1 from "../assets/images/apartments/a7/bedroom-1.webp";
import a7Bedroom2 from "../assets/images/apartments/a7/bedroom-2.webp";
import a7Kitchen from "../assets/images/apartments/a7/kitchen.webp";
import a7Bathroom from "../assets/images/apartments/a7/bathroom.webp";
import a7Balcony from "../assets/images/apartments/a7/balcony.webp";

export const apartments = [
  {
    id: "a1",
    name: "Apartment A1",
    capacity: "2 adults",
    size: "25 m²",
    beds: "1 double bed and 1 sofa bed",
    view: "Sea view",
    hasBalconyOrTerrace: false,
    hasSeaView: true,
    description:
      "A cozy apartment for 2, with its own kitchen and a lovely sea view.",
    features: [
      "Private kitchen",
      "Air conditioning",
      "Flat-screen TV",
      "BBQ",
      "Free Wi-Fi",
    ],
    amenities: [
      "Kitchen",
      "Bath or shower",
      "Wooden/parquet floor",
      "Towels",
      "Bed linen",
      "Cleaning products",
      "Private entrance",
      "TV",
      "Refrigerator",
      "Satellite channels",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Electric kettle",
      "Wardrobe or closet",
      "Stovetop",
    ],
    image: a1Hero,
    gallery: [
      a1Hero,
      a1LivingRoom,
      a1Bedroom,
      a1Bed,
      a1Sofa,
      a1Kitchen,
      a1Bathroom,
      a1SeaView,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a2",
    name: "Apartment A2",
    capacity: "4 adults",
    size: "65 m²",
    beds: "Bedroom 1: 1 large double bed; Bedroom 2: 2 single beds; Living room: 1 sofa bed",
    view: "Sea view",
    hasBalconyOrTerrace: true,
    hasSeaView: true,
    description:
      "A spacious apartment for up to 4 guests, with a balcony and sea view.",
    features: [
      "Private kitchen",
      "Balcony",
      "Sea view",
      "Air conditioning",
      "Dishwasher",
      "Flat-screen TV",
      "BBQ",
      "Free Wi-Fi",
    ],
    amenities: [
      "Kitchen",
      "Sofa",
      "Bath or shower",
      "Wooden/parquet floor",
      "Towels",
      "Bed linen",
      "Cleaning products",
      "Seating area",
      "Private entrance",
      "TV",
      "Refrigerator",
      "Satellite channels",
      "Microwave",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Extra-long beds",
      "Electric kettle",
      "Outdoor dining area",
      "Wardrobe or closet",
      "Oven",
      "Stovetop",
      "Dining area",
      "Toilet paper",
      "Sofa bed",
    ],
    image: a2Hero,
    gallery: [
      a2Hero,
      a2LivingRoom1,
      a2LivingRoom2,
      a2Bedroom1,
      a2Bedroom1Alt,
      a2Bedroom2,
      a2Bedroom2Alt,
      a2DiningTable,
      a2Kitchen,
      a2Bathroom1,
      a2Bathroom1Alt,
      a2Hallway,
      a2Balcony,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a3",
    name: "Apartment A3",
    capacity: "4 adults",
    size: "65 m²",
    beds: "Bedroom 1: 1 large double bed; Bedroom 2: 2 single beds; Living room: 1 sofa bed",
    view: "Sea view",
    hasBalconyOrTerrace: true,
    hasSeaView: true,
    description:
      "A spacious apartment for up to 4 guests, with a balcony and sea view.",
    features: [
      "Private kitchen",
      "Balcony",
      "Sea view",
      "Air conditioning",
      "Dishwasher",
      "Flat-screen TV",
      "BBQ",
      "Free Wi-Fi",
    ],
    amenities: [
      "Kitchen",
      "Sofa",
      "Bath or shower",
      "Wooden/parquet floor",
      "Towels",
      "Bed linen",
      "Cleaning products",
      "Seating area",
      "Private entrance",
      "TV",
      "Refrigerator",
      "Satellite channels",
      "Microwave",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Extra-long beds",
      "Electric kettle",
      "Outdoor dining area",
      "Wardrobe or closet",
      "Oven",
      "Stovetop",
      "Dining area",
      "Toilet paper",
      "Sofa bed",
    ],
    image: a3Hero,
    gallery: [
      a3Hero,
      a3LivingRoom,
      a3Bedroom1,
      a3Bedroom2,
      a3Kitchen,
      a3Bathroom,
      a3Balcony,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a4",
    name: "Apartment A4",
    capacity: "3 adults",
    size: "25 m²",
    beds: "1 single bed and 1 large double bed",
    view: "Standard view",
    hasBalconyOrTerrace: true,
    hasSeaView: false,
    description:
      "A comfortable apartment for 3 guests with a private terrace.",
    features: [
      "Air conditioning",
      "Private bathroom",
      "Flat-screen TV",
      "Terrace",
    ],
    amenities: [
      "Shower",
      "Toilet",
      "Towels",
      "Tea/Coffee maker",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Wardrobe or closet",
      "Dining table",
    ],
    image: a4Hero,
    gallery: [
      a4Hero,
      a4LivingRoom,
      a4LivingRoom1,
      a4Bed,
      a4Kitchen,
      a4Bathroom,
      a4Terrace,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a5",
    name: "Apartment A5",
    capacity: "3 adults",
    size: "23 m²",
    beds: "1 single bed and 1 extra-large double bed",
    view: "Standard view",
    hasBalconyOrTerrace: true,
    hasSeaView: false,
    description:
      "A comfortable apartment for 3 guests with a balcony and private bath.",
    features: [
      "Balcony",
      "Bath",
      "Air conditioning",
      "Private bathroom",
      "Flat-screen TV",
    ],
    amenities: [
      "Shower",
      "Toilet",
      "Towels",
      "Tea/Coffee maker",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Wardrobe or closet",
      "Dining table",
    ],
    image: a5Hero,
    gallery: [
      a5Hero,
      a5LivingRoom,
      a5Bed,
      a5Bed2,
      a5Kitchen,
      a5Bathroom,
      a5Balcony,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a6",
    name: "Apartment A6",
    capacity: "4 adults",
    size: "70 m²",
    beds: "Bedroom 1: 1 extra-large double bed; Bedroom 2: 2 single beds; Living room: 1 sofa bed",
    view: "Standard view",
    hasBalconyOrTerrace: true,
    hasSeaView: false,
    description: "A spacious apartment for 4 guests with a private balcony.",
    features: [
      "Balcony",
      "Air conditioning",
      "Private bathroom",
      "Flat-screen TV",
    ],
    amenities: [
      "Toilet",
      "Bath or shower",
      "Towels",
      "Tea/Coffee maker",
      "Heating",
      "Hairdryer",
      "Wardrobe or closet",
      "Dining area",
      "Dining table",
    ],
    image: a6Hero,
    gallery: [
      a6Hero,
      a6LivingRoom1,
      a6LivingRoom2,
      a6Bedroom1,
      a6Bedroom1Alt,
      a6Bedroom2,
      a6Bedroom2Alt,
      a6Kitchen,
      a6Bathroom1,
      a6Bathroom1Alt,
      a6Bathroom2,
      a6Bathroom2Alt,
      a6Balcony,
    ],
    buttonText: "View Apartment",
  },
  {
    id: "a7",
    name: "Apartment A7",
    capacity: "4 adults",
    size: "75 m²",
    beds: "Bedroom 1: 1 large double bed; Bedroom 2: 1 large double bed; Living room: 1 sofa bed",
    view: "Garden, mountain, city and inner courtyard view",
    hasBalconyOrTerrace: true,
    hasSeaView: false,
    description:
      "Our largest apartment, for up to 4 guests, with a private kitchen and terrace.",
    features: [
      "Private kitchen",
      "Private bathroom",
      "Balcony",
      "Garden view",
      "Mountain view",
      "City view",
      "Inner courtyard view",
      "Air conditioning",
      "Patio",
      "Dishwasher",
      "Flat-screen TV",
      "Soundproofing",
      "BBQ",
      "Terrace",
      "Coffee machine",
      "Free Wi-Fi",
    ],
    amenities: [
      "Free toiletries",
      "Kitchen",
      "Washing machine",
      "Toilet",
      "Sofa",
      "Bath or shower",
      "Wooden/parquet floor",
      "Towels",
      "Bed linen",
      "Socket near the bed",
      "Cleaning products",
      "Tile/marble floor",
      "Desk",
      "Seating area",
      "Private entrance",
      "TV",
      "Refrigerator",
      "Satellite channels",
      "Tea/Coffee maker",
      "Iron",
      "Radio",
      "Microwave",
      "Heating",
      "Hairdryer",
      "Kitchenware",
      "Kitchenette",
      "Extra-long beds",
      "Electric kettle",
      "Outdoor furniture",
      "Outdoor dining area",
      "Cable channels",
      "Wardrobe or closet",
      "Oven",
      "Stovetop",
      "Dining area",
      "Dining table",
      "Upper floors accessible by stairs only",
      "Detached",
      "Private apartment in building",
      "Clothes rack",
      "Toilet paper",
      "Sofa bed",
    ],
    image: a7Hero,
    gallery: [
      a7Hero,
      a7LivingRoom,
      a7LivingRoom1,
      a7Bedroom1,
      a7Bedroom2,
      a7Kitchen,
      a7Bathroom,
      a7Balcony,
    ],
    buttonText: "View Apartment",
  },
];
