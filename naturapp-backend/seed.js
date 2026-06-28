// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Category from './models/Category.js';
import User from './models/User.js';

dotenv.config();

// ─── CATEGORÍAS ────────────────────────────
const categories = [
  { name: 'Aceites Esenciales', description: 'Aceites puros para aromaterapia y bienestar', icon: '🌿' },
  { name: 'Infusiones', description: 'Tés y hierbas medicinales para tu bienestar', icon: '🍵' },
  { name: 'Suplementos', description: 'Vitaminas y minerales naturales', icon: '💊' },
  { name: 'Cuidado Personal', description: 'Productos naturales para el cuidado de la piel y cabello', icon: '🧴' },
  { name: 'Miel y Derivados', description: 'Miel pura y productos apícolas naturales', icon: '🍯' },
];

// ─── PRODUCTOS ─────────────────────────────
const products = [
  // ACEITES ESENCIALES
  {
    name: 'Aceite Esencial de Lavanda 10ml',
    description: 'Aceite puro de lavanda para relajación y aromaterapia. Ideal para masajes y difusores. Propiedades calmantes y relajantes.',
    price: 45.00,
    image: 'https://picsum.photos/400/400?random=1',
    stock: 25,
    tags: ['aromaterapia', 'relajación', 'lavanda'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Aceite Esencial de Menta 10ml',
    description: 'Aceite esencial de menta para aliviar dolores de cabeza, mejorar la concentración y refrescar el ambiente.',
    price: 38.00,
    image: 'https://picsum.photos/400/400?random=2',
    stock: 30,
    tags: ['menta', 'concentración', 'dolor'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Aceite Esencial de Eucalipto 10ml',
    description: 'Perfecto para aliviar la congestión nasal, problemas respiratorios y purificar el ambiente.',
    price: 35.00,
    image: 'https://picsum.photos/400/400?random=3',
    stock: 20,
    tags: ['eucalipto', 'respiratorio', 'descongestionante'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },

  // INFUSIONES
  {
    name: 'Infusión de Manzanilla 20 bolsitas',
    description: 'Manzanilla orgánica para calmar el sistema nervioso, mejorar la digestión y conciliar el sueño.',
    price: 18.00,
    image: 'https://picsum.photos/400/400?random=4',
    stock: 50,
    tags: ['manzanilla', 'relajante', 'digestivo'],
    nutritionalInfo: { calories: 2, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Infusión de Boldo 20 bolsitas',
    description: 'Boldo orgánico para aliviar problemas hepáticos, digestivos y desintoxicar el organismo.',
    price: 16.00,
    image: 'https://picsum.photos/400/400?random=5',
    stock: 40,
    tags: ['boldo', 'digestivo', 'hepático'],
    nutritionalInfo: { calories: 2, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Infusión de Menta 20 bolsitas',
    description: 'Menta fresca para aliviar molestias estomacales, refrescar el aliento y mejorar la digestión.',
    price: 15.00,
    image: 'https://picsum.photos/400/400?random=6',
    stock: 45,
    tags: ['menta', 'digestivo', 'refrescante'],
    nutritionalInfo: { calories: 2, protein: '0g', fiber: '0g' }
  },

  // MIEL Y DERIVADOS
  {
    name: 'Miel de Abeja Pura 500g',
    description: 'Miel 100% pura de abejas naturales, sin procesar ni añadir azúcares. Endulzante natural y nutritivo.',
    price: 42.00,
    image: 'https://picsum.photos/400/400?random=7',
    stock: 30,
    tags: ['miel', 'endulzante', 'natural'],
    nutritionalInfo: { calories: 304, protein: '0.3g', fiber: '0g' }
  },
  {
    name: 'Propóleo 30ml',
    description: 'Extracto de propóleo para fortalecer las defensas del organismo y combatir infecciones.',
    price: 28.00,
    image: 'https://picsum.photos/400/400?random=8',
    stock: 25,
    tags: ['propóleo', 'defensas', 'inmunidad'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Jalea Real 50g',
    description: 'Jalea real pura para aumentar la energía, vitalidad y fortalecer el sistema inmunológico.',
    price: 55.00,
    image: 'https://picsum.photos/400/400?random=9',
    stock: 15,
    tags: ['jalea real', 'energía', 'vitalidad'],
    nutritionalInfo: { calories: 60, protein: '5g', fiber: '0g' }
  },

  // CUIDADO PERSONAL
  {
    name: 'Crema de Aloe Vera 250ml',
    description: 'Crema hidratante a base de aloe vera para piel seca, dañada o con quemaduras solares.',
    price: 32.00,
    image: 'https://picsum.photos/400/400?random=10',
    stock: 35,
    tags: ['aloe vera', 'hidratante', 'piel'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Shampoo de Jengibre 300ml',
    description: 'Shampoo natural con jengibre para fortalecer el cabello, estimular su crecimiento y dar brillo.',
    price: 28.00,
    image: 'https://picsum.photos/400/400?random=11',
    stock: 30,
    tags: ['jengibre', 'cabello', 'fortalecedor'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Acondicionador de Aguacate 300ml',
    description: 'Acondicionador natural con aguacate para cabello seco y dañado. Hidrata y nutre intensamente.',
    price: 30.00,
    image: 'https://picsum.photos/400/400?random=12',
    stock: 28,
    tags: ['aguacate', 'hidratante', 'cabello'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },

  // EXTRAS
  {
    name: 'Aceite de Coco Virgen 250ml',
    description: 'Aceite de coco virgen prensado en frío. Ideal para cocina, cuidado personal y masajes.',
    price: 25.00,
    image: 'https://picsum.photos/400/400?random=13',
    stock: 40,
    tags: ['coco', 'cocina', 'hidratante'],
    nutritionalInfo: { calories: 862, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Té de Coca 20 bolsitas',
    description: 'Té de coca orgánico para aliviar el mal de altura, la fatiga y mejorar la digestión.',
    price: 22.00,
    image: 'https://picsum.photos/400/400?random=14',
    stock: 35,
    tags: ['coca', 'mal de altura', 'energía'],
    nutritionalInfo: { calories: 2, protein: '0g', fiber: '0g' }
  },
  {
    name: 'Crema de Uña de Gato 100g',
    description: 'Crema antiinflamatoria a base de uña de gato para aliviar dolores articulares y musculares.',
    price: 38.00,
    image: 'https://picsum.photos/400/400?random=15',
    stock: 20,
    tags: ['uña de gato', 'antiinflamatorio', 'articulaciones'],
    nutritionalInfo: { calories: 0, protein: '0g', fiber: '0g' }
  },
];

// ─── EJECUTAR SEED ──────────────────────────
const seedDatabase = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    // Limpiar datos existentes
    await Product.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});
    console.log('🗑️ Datos anteriores eliminados');

    // Insertar categorías
    const insertedCategories = await Category.insertMany(categories);
    console.log(`✅ ${insertedCategories.length} categorías insertadas`);

    // Asignar categorías a productos (distribuir equitativamente)
    const productsWithCategory = products.map((product, index) => {
      const categoryIndex = index % insertedCategories.length;
      return {
        ...product,
        category: insertedCategories[categoryIndex]._id,
        isActive: true,
      };
    });

    // Insertar productos
    const insertedProducts = await Product.insertMany(productsWithCategory);
    console.log(`✅ ${insertedProducts.length} productos insertados`);

    // Crear usuario admin
    const adminUser = new User({
      name: 'Admin NaturApp',
      email: 'admin@naturapp.com',
      password: 'admin123456',
      phone: '999999999',
      address: {
        street: 'Av. Principal 123',
        city: 'Lima',
        zipCode: '15001'
      },
      role: 'admin',
    });
    await adminUser.save();
    console.log('✅ Usuario admin creado');
    console.log('📧 admin@naturapp.com');
    console.log('🔑 admin123456');

    // Crear usuario de prueba
    const testUser = new User({
      name: 'Cliente Test',
      email: 'test@naturapp.com',
      password: 'test123456',
      phone: '988888888',
      address: {
        street: 'Calle Test 456',
        city: 'Lima',
        zipCode: '15002'
      },
      role: 'customer',
    });
    await testUser.save();
    console.log('✅ Usuario de prueba creado');
    console.log('📧 test@naturapp.com');
    console.log('🔑 test123456');

    console.log('\n🎉 ¡Base de datos sembrada exitosamente!');
    console.log(`📊 Resumen:`);
    console.log(`   - ${insertedCategories.length} categorías`);
    console.log(`   - ${insertedProducts.length} productos`);
    console.log(`   - 2 usuarios (admin + test)`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en seed:', error);
    process.exit(1);
  }
};

seedDatabase();