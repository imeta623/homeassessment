const mongoose = require('mongoose');
require('dotenv').config();

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Sample data
const sampleUsers = [
  { name: "John Doe", email: "johndoe@email.com", age: 30 },
  { name: "Jane Smith", email: "janesmith@email.com", age: 25 },
  { name: "Bob Johnson", email: "bobjohnson@email.com", age: 19 },
  { name: "Alice Brown", email: "alicebrown@email.com", age: 28 },
  { name: "Charlie Wilson", email: "charliewilson@email.com", age: 17 },
  { name: "Diana Davis", email: "dianadavis@email.com", age: 32 }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/homeassessment');
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert sample users
    const users = await User.insertMany(sampleUsers);
    console.log(`Inserted ${users.length} users`);

    // Display user IDs for testing
    console.log('\nUser IDs for testing:');
    users.forEach(user => {
      console.log(`ID: ${user._id}, Name: ${user.name}, Age: ${user.age}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
