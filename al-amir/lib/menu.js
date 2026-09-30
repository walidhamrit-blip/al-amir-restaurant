// Bilingual menu data. Add / edit dishes here — pages update automatically.
export const menuSections = [
  {
    key: 'dining',
    title: { en: 'Dining Menu', ar: 'قائمة المطعم' },
    image: '/images/dish1.jpg',
    groups: [
      {
        title: { en: 'Small Plates', ar: 'أطباق صغيرة' },
        items: [
          { name: { en: 'Edamame', ar: 'إدامامي' }, desc: { en: 'Sea salt, yuzu kosho', ar: 'ملح البحر، يوزو كوشو' }, price: 18 },
          { name: { en: 'Wagyu Tataki', ar: 'واغيو تاتاكي' }, desc: { en: 'Seared wagyu, ponzu, crispy garlic', ar: 'واغيو محمّر، بونزو، ثوم مقرمش' }, price: 85 },
          { name: { en: 'Crispy Rice Spicy Tuna', ar: 'أرز مقرمش بالتونة الحارة' }, desc: { en: 'Jalapeño, spicy mayo', ar: 'هالابينو، مايونيز حار' }, price: 48 },
          { name: { en: 'Miso Soup', ar: 'شوربة ميسو' }, desc: { en: 'Tofu, wakame, scallion', ar: 'توفو، واكامي، بصل أخضر' }, price: 15 },
        ],
      },
      {
        title: { en: 'Nigiri & Sashimi', ar: 'نيغيري وساشيمي' },
        items: [
          { name: { en: 'Salmon (Sake)', ar: 'سلمون (ساكي)' }, desc: { en: 'Per piece', ar: 'للقطعة' }, price: 14 },
          { name: { en: 'Bluefin Tuna (Maguro)', ar: 'تونة زرقاء (ماغورو)' }, desc: { en: 'Per piece', ar: 'للقطعة' }, price: 22 },
          { name: { en: 'Yellowtail (Hamachi)', ar: 'هاماتشي' }, desc: { en: 'Per piece', ar: 'للقطعة' }, price: 18 },
          { name: { en: 'Chef’s Sashimi Selection', ar: 'تشكيلة الشيف من الساشيمي' }, desc: { en: '12 pieces, daily selection', ar: '12 قطعة، تشكيلة يومية' }, price: 160 },
        ],
      },
      {
        title: { en: 'Signature Rolls', ar: 'لفائف مميزة' },
        items: [
          { name: { en: 'Al Amir Dragon Roll', ar: 'لفافة الأمير دراغون' }, desc: { en: 'Shrimp tempura, eel, avocado, unagi sauce', ar: 'تمبورا روبيان، أنقليس، أفوكادو، صلصة أوناغي' }, price: 72 },
          { name: { en: 'Mediterranean Roll', ar: 'لفافة المتوسط' }, desc: { en: 'Grilled sea bass, sun-dried tomato, basil aioli', ar: 'قاروص مشوي، طماطم مجففة، أيولي ريحان' }, price: 65 },
          { name: { en: 'Spicy Salmon Roll', ar: 'لفافة سلمون حار' }, desc: { en: 'Cucumber, tobiko, spicy mayo', ar: 'خيار، توبيكو، مايونيز حار' }, price: 55 },
        ],
      },
      {
        title: { en: 'Large Plates', ar: 'أطباق رئيسية' },
        items: [
          { name: { en: 'Miso Black Cod', ar: 'سمك القد الأسود بالميسو' }, desc: { en: '48h marinated, pickled ginger', ar: 'متبّل 48 ساعة، زنجبيل مخلل' }, price: 145 },
          { name: { en: 'Chicken Teriyaki', ar: 'دجاج ترياكي' }, desc: { en: 'Grilled thigh, seasonal vegetables, steamed rice', ar: 'فخذ مشوي، خضروات موسمية، أرز مطهو على البخار' }, price: 68 },
          { name: { en: 'Tonkotsu-Style Ramen', ar: 'رامن على طريقة تونكوتسو' }, desc: { en: 'Rich chicken broth, soft egg, nori', ar: 'مرق دجاج غني، بيض طري، نوري' }, price: 58 },
        ],
      },
    ],
  },
  {
    key: 'delivery',
    title: { en: 'Delivery Menu', ar: 'قائمة التوصيل' },
    image: '/images/dish2.jpg',
    groups: [
      {
        title: { en: 'Bento Boxes', ar: 'صناديق بينتو' },
        items: [
          { name: { en: 'Salmon Teriyaki Bento', ar: 'بينتو سلمون ترياكي' }, desc: { en: 'Rice, salad, gyoza, 4 pcs maki', ar: 'أرز، سلطة، غيوزا، 4 قطع ماكي' }, price: 75 },
          { name: { en: 'Chicken Katsu Bento', ar: 'بينتو دجاج كاتسو' }, desc: { en: 'Rice, cabbage slaw, tonkatsu sauce', ar: 'أرز، سلطة ملفوف، صلصة تونكاتسو' }, price: 65 },
          { name: { en: 'Vegetarian Bento', ar: 'بينتو نباتي' }, desc: { en: 'Tofu steak, avocado maki, edamame', ar: 'ستيك توفو، ماكي أفوكادو، إدامامي' }, price: 55 },
        ],
      },
      {
        title: { en: 'Platters', ar: 'أطباق للمشاركة' },
        items: [
          { name: { en: 'Sushi Platter for 2', ar: 'طبق سوشي لشخصين' }, desc: { en: '24 pieces, chef’s selection', ar: '24 قطعة، اختيار الشيف' }, price: 195 },
          { name: { en: 'Family Platter', ar: 'الطبق العائلي' }, desc: { en: '48 pieces, nigiri & rolls', ar: '48 قطعة، نيغيري ولفائف' }, price: 360 },
        ],
      },
    ],
  },
  {
    key: 'drinks',
    title: { en: 'Drinks Menu', ar: 'قائمة المشروبات' },
    image: '/images/dish3.jpg',
    groups: [
      {
        title: { en: 'Signature Mocktails', ar: 'مشروبات مميزة' },
        items: [
          { name: { en: 'Yuzu Garden', ar: 'يوزو غاردن' }, desc: { en: 'Yuzu, mint, cucumber, soda', ar: 'يوزو، نعناع، خيار، صودا' }, price: 32 },
          { name: { en: 'Amir Blossom', ar: 'زهرة الأمير' }, desc: { en: 'Cherry blossom syrup, lychee, tonic', ar: 'شراب زهر الكرز، ليتشي، تونيك' }, price: 35 },
          { name: { en: 'Matcha Cloud', ar: 'ماتشا كلاود' }, desc: { en: 'Ceremonial matcha, oat milk, vanilla foam', ar: 'ماتشا احتفالية، حليب شوفان، رغوة فانيليا' }, price: 30 },
        ],
      },
      {
        title: { en: 'Tea & Coffee', ar: 'شاي وقهوة' },
        items: [
          { name: { en: 'Sencha', ar: 'سينشا' }, desc: { en: 'Japanese green tea, pot', ar: 'شاي أخضر ياباني، إبريق' }, price: 22 },
          { name: { en: 'Hojicha', ar: 'هوجيتشا' }, desc: { en: 'Roasted green tea, pot', ar: 'شاي أخضر محمّص، إبريق' }, price: 22 },
          { name: { en: 'Espresso', ar: 'إسبريسو' }, desc: { en: 'Single / double', ar: 'مفرد / مزدوج' }, price: 12 },
        ],
      },
    ],
  },
  {
    key: 'happy',
    title: { en: 'Afternoon Set', ar: 'عرض ما بعد الظهيرة' },
    image: '/images/dish5.jpg',
    subtitle: { en: 'Daily 3:00 pm – 6:00 pm', ar: 'يومياً من 3:00 حتى 6:00 مساءً' },
    groups: [
      {
        title: { en: 'Sets', ar: 'العروض' },
        items: [
          { name: { en: 'Maki Set', ar: 'عرض ماكي' }, desc: { en: '8 pcs roll + miso soup + tea', ar: '8 قطع لفائف + شوربة ميسو + شاي' }, price: 45 },
          { name: { en: 'Nigiri Set', ar: 'عرض نيغيري' }, desc: { en: '6 pcs nigiri + edamame + tea', ar: '6 قطع نيغيري + إدامامي + شاي' }, price: 60 },
          { name: { en: 'Gyoza & Mocktail', ar: 'غيوزا ومشروب' }, desc: { en: '5 pcs gyoza + any signature mocktail', ar: '5 قطع غيوزا + أي مشروب مميز' }, price: 50 },
        ],
      },
    ],
  },
  {
    key: 'dessert',
    title: { en: 'Dessert Menu', ar: 'قائمة الحلويات' },
    image: '/images/dish4.jpg',
    groups: [
      {
        title: { en: 'Desserts', ar: 'الحلويات' },
        items: [
          { name: { en: 'Matcha Tiramisu', ar: 'تيراميسو ماتشا' }, desc: { en: 'Black sesame tuile', ar: 'رقاقة سمسم أسود' }, price: 38 },
          { name: { en: 'Mochi Ice Cream', ar: 'آيس كريم موتشي' }, desc: { en: 'Three pieces: mango, strawberry, green tea', ar: 'ثلاث قطع: مانجو، فراولة، شاي أخضر' }, price: 32 },
          { name: { en: 'Yuzu Cheesecake', ar: 'تشيز كيك يوزو' }, desc: { en: 'Citrus gel, shortbread crumble', ar: 'جل حمضيات، فتات بسكويت' }, price: 36 },
          { name: { en: 'Dorayaki', ar: 'دوراياكي' }, desc: { en: 'Red bean pancake, vanilla ice cream', ar: 'فطيرة فاصولياء حمراء، آيس كريم فانيليا' }, price: 30 },
        ],
      },
    ],
  },
];

export const galleryImages = [
  { src: '/images/dish1.jpg', alt: { en: 'Wagyu tataki', ar: 'واغيو تاتاكي' } },
  { src: '/images/dish2.jpg', alt: { en: 'Dragon roll', ar: 'لفافة دراغون' } },
  { src: '/images/dish3.jpg', alt: { en: 'Yuzu mocktail', ar: 'مشروب يوزو' } },
  { src: '/images/dish4.jpg', alt: { en: 'Matcha tiramisu', ar: 'تيراميسو ماتشا' } },
  { src: '/images/dish5.jpg', alt: { en: 'Ramen', ar: 'رامن' } },
  { src: '/images/about.jpg', alt: { en: 'Sushi platter', ar: 'طبق سوشي' } },
  { src: '/images/hero.jpg', alt: { en: 'Dining room', ar: 'قاعة الطعام' } },
  { src: '/images/catering.jpg', alt: { en: 'Private event', ar: 'مناسبة خاصة' } },
];
