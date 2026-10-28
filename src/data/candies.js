export const PRODUCTS = [
  {
    id: 'katttooo-special',
    name: 'KATTTOOO Signature Edition',
    category: 'Special on NBL Shop',
    price: 9.99,
    rating: 5.0,
    reviewsCount: 888,
    badge: '👑 SPECIAL ON NBL SHOP',
    badgeColor: 'bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white font-extrabold shadow-lg',
    description: 'The viral sensation! Velvety strawberry layered cake cloud bites infused with whipped cream, sparkling sugar crystals, and sweet strawberry coulis.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['KATTTOOO', 'Special on NBL Shop', 'Viral Sensation', 'Sweet Paw']
  },
  {
    id: 'sour-belts',
    name: 'Electric Neon Sour Belts',
    category: 'Sour',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 342,
    badge: '⚡ Fan Favorite',
    badgeColor: 'bg-yellow-400 text-yellow-950',
    description: 'Rainbow ribbon belts dusted in tongue-tingling tart crystals with green apple and blue razz punch.',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=700&q=80',
    tags: ['Super Sour', 'Gelatin Free', 'Rainbow']
  },
  {
    id: 'cosmic-gummies',
    name: 'Cosmic Stardust Bears',
    category: 'Gummies',
    price: 7.00,
    rating: 5.0,
    reviewsCount: 512,
    badge: '✨ Best Seller',
    badgeColor: 'bg-purple-400 text-purple-950',
    description: 'Infused with organic wild berry purée and edible gold dust for an ethereal, bouncy chew.',
    image: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=700&q=80',
    tags: ['Wild Berry', 'Natural Colors', 'Glittery']
  },
  {
    id: 'ruby-cocoa',
    name: 'Ruby Cocoa Cloud Bites',
    category: 'Chocolate',
    price: 8.50,
    rating: 4.8,
    reviewsCount: 198,
    badge: '🍫 Handcrafted',
    badgeColor: 'bg-pink-400 text-pink-950',
    description: 'Silky Swiss ruby chocolate truffles stuffed with whipped raspberry marshmallow creme.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80',
    tags: ['Ruby Cacao', 'Rich & Creamy', 'Velvet']
  },
  {
    id: 'cloudberry-marshmallows',
    name: 'Cotton Candy Puffs',
    category: 'Vegan',
    price: 6.00,
    rating: 4.9,
    reviewsCount: 276,
    badge: '🌿 100% Plant Based',
    badgeColor: 'bg-emerald-400 text-emerald-950',
    description: 'Pillow-soft gourmet marshmallows spun with agave nectar and real vanilla bean specks.',
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=700&q=80',
    tags: ['Vegan', 'Gluten Free', 'Zero Gelatin']
  },
  {
    id: 'watermelon-fizz',
    name: 'Watermelon Fizz Bombs',
    category: 'Sour',
    price: 6.50,
    rating: 4.7,
    reviewsCount: 164,
    badge: '🍉 Limited Batch',
    badgeColor: 'bg-rose-400 text-rose-950',
    description: 'Crunchy outer crust that cracks open into an explosive effervescent watermelon sour center.',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=700&q=80',
    tags: ['Effervescent', 'Summer Splash', 'Crunchy']
  },
  {
    id: 'lavender-mint',
    name: 'Botanical Lavender Gems',
    category: 'Vegan',
    price: 7.50,
    rating: 4.9,
    reviewsCount: 221,
    badge: '🌸 Artisanal',
    badgeColor: 'bg-indigo-400 text-indigo-950',
    description: 'Delicate crystalline lozenges scented with French culinary lavender and Moroccan spearmint.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    tags: ['Aromatherapeutic', 'Plant Based', 'Organic']
  }
];

export const BOX_FLAVORS = [
  {
    id: 'bf-katttooo',
    name: 'KATTTOOO Fluff Paw',
    type: 'Special on NBL Shop',
    color: 'from-amber-400 via-pink-500 to-purple-500',
    border: 'border-amber-400',
    icon: '🐾',
    description: 'Exclusive strawberry cat paw marshmallow chew.'
  },
  {
    id: 'bf-1',
    name: 'Pink Cotton Swirl',
    type: 'Gummy',
    color: 'from-pink-400 to-rose-400',
    border: 'border-pink-300',
    icon: '🍭',
    description: 'Spun strawberry and spun sugar cloud chew.'
  },
  {
    id: 'bf-2',
    name: 'Electric Blue Razz',
    type: 'Sour',
    color: 'from-sky-400 to-blue-500',
    border: 'border-sky-300',
    icon: '⚡',
    description: 'Intense mouth-watering blue raspberry crystals.'
  },
  {
    id: 'bf-3',
    name: 'Matcha White Choc Drops',
    type: 'Chocolate',
    color: 'from-emerald-300 to-teal-400',
    border: 'border-emerald-300',
    icon: '🍵',
    description: 'Uji ceremonial grade matcha creamy chocolate drops.'
  },
  {
    id: 'bf-4',
    name: 'Golden Peach Sunset',
    type: 'Sour',
    color: 'from-amber-300 to-orange-400',
    border: 'border-amber-300',
    icon: '🍑',
    description: 'Juicy Georgia peach gummies with a tangy kick.'
  },
  {
    id: 'bf-5',
    name: 'Blackberry Dark Velvet',
    type: 'Chocolate',
    color: 'from-purple-500 to-indigo-600',
    border: 'border-purple-300',
    icon: '🫐',
    description: '70% dark single-origin chocolate with wild blackberry jam.'
  },
  {
    id: 'bf-6',
    name: 'Tropical Dragonfruit Chew',
    type: 'Vegan',
    color: 'from-fuchsia-400 to-pink-500',
    border: 'border-fuchsia-300',
    icon: '🐉',
    description: 'Vibrant magenta dragonfruit & passionfruit jelly.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chloe V.',
    role: 'Verified Candy Connoisseur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quoteBefore: 'The Electric Sour Belts are ',
    highlight: 'genuinely unmatched',
    quoteAfter: '. Not that artificial chemical taste — pure real fruit tartness with a melt-in-your-mouth finish. Already ordered my third box!',
    tag: 'Ordered: Neon Sour Belts',
    productId: 'sour-belts'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Design Director & Sweet Tooth',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quoteBefore: 'The unboxing experience is like walking into ',
    highlight: 'Willy Wonka’s private atelier',
    quoteAfter: '. From the biodegradable pastel packaging to the cosmic stardust bears, NBL Candy is in a league of its own.',
    tag: 'Ordered: Custom 3-Pack Box',
    action: 'box-builder'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Pastry Chef & Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quoteBefore: 'Finally, high-end artisanal vegan sweets that do not sacrifice texture! The Cotton Candy Puffs are ',
    highlight: 'heavenly clouds',
    quoteAfter: '. Plus, their customer support is as sweet as their treats.',
    tag: 'Ordered: Cotton Candy Puffs',
    productId: 'cloudberry-marshmallows'
  }
];
