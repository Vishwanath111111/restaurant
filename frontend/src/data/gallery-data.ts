export interface GalleryItem {
  id: string;
  title: string;
  category: "Food" | "Interior" | "Chefs" | "Decor" | "Weddings" | "Private Dining";
  image: string;
  subtitle: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Maharaja Private Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Carved Jharokha views & golden chandeliers"
  },
  {
    id: "gal-02",
    title: "Royal Murgh Musallam",
    category: "Food",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Saffron almond cream with 24K edible gold leaf"
  },
  {
    id: "gal-03",
    title: "Rajasthani Jaali Arches",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Hand-crafted sandstone filigree and teakwood decor"
  },
  {
    id: "gal-04",
    title: "Hyderabadi Dum Handi",
    category: "Food",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Sealed clay handi dum biryani with rose petals"
  },
  {
    id: "gal-05",
    title: "Executive Master Chef at Charcoal Mangal",
    category: "Chefs",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Chef Rathore inspecting live tandoori skewers"
  },
  {
    id: "gal-06",
    title: "Royal Wedding Destination Catering",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Silver thali banquet for 1,200 wedding guests"
  },
  {
    id: "gal-07",
    title: "Live Sitar Performance Courtyard",
    category: "Private Dining",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Acoustic Sitar renditions during dinner service"
  },
  {
    id: "gal-08",
    title: "Authentic Kulhad Masala Chai",
    category: "Food",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Brewed with ginger, cardamom in clay pots"
  }
];
