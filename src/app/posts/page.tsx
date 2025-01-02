"use client";

import Link from "next/link";
import CommentSection from "@/app/components/CommentSection";
import Navbar from "../components/navbar";
export default function Home() {
  const posts = [
    {
      id: 1,
      title: "The Magic of Mediterranean Cuisine",
      image: "./1.png",
      description: `The Mediterranean diet is more than just a way of eating—it's a lifestyle that embodies balance, simplicity, and health. Rooted in centuries of tradition, it draws inspiration from the sun-soaked olive groves of Greece, the fragrant herb gardens of Italy, and the bustling spice markets of Morocco. Every meal is a celebration of fresh, wholesome ingredients and bold, vibrant flavors that nourish both the body and soul.
                    Picture a crisp Greek salad loaded with juicy, vine-ripened tomatoes, creamy feta cheese, and a drizzle of golden olive oil, paired with warm, crusty bread. Or imagine the comforting aroma of a Moroccan tagine, a slow-cooked stew rich with spices like cumin, cinnamon, and saffron, mingling with tender vegetables and savory meats. These dishes are not just delicious—they are steeped in history and culture.
                    The Mediterranean diet isn’t just about flavor; it’s also a key to longevity and wellness. Its focus on fresh produce, healthy fats, lean proteins, and whole grains makes it one of the healthiest diets in the world. Studies have shown that it can promote heart health, reduce inflammation, and even enhance mental well-being.
                    Beyond the food, the Mediterranean lifestyle encourages mindful eating, sharing meals with loved ones, and savoring the moment. It’s not about restrictions—it’s about embracing the joy of eating wholesome, delicious food.
                    Whether you're recreating a traditional Italian pasta dish or exploring the rich flavors of Lebanese mezze, the Mediterranean way of eating invites you to slow down, enjoy the process, and savor every bite. What Mediterranean dish inspires you to bring these flavors into your kitchen?`,
    },
    {
      id: 2,
      title: "Street Food Adventures: Tasting the World One Bite at a Time",
      image: "./2.png",
      description: `Street food is where you truly taste the heart of a city's culture. It’s vibrant, accessible, and brimming with authenticity. Whether it’s the sizzling tacos served with fresh salsa on a bustling street corner in Mexico, the crunchy pani puri filled with tangy tamarind water in India, or the smoky skewered yakitori grilling over open flames in Japan, each bite tells a unique story of tradition, flavor, and ingenuity.
                    One of my most unforgettable street food experiences was in the lively streets of Bangkok. Amid the buzzing chaos of food carts and aromatic spices, I indulged in a plate of Pad Thai cooked right before my eyes. Watching the chef expertly toss rice noodles with tamarind sauce, fresh lime, crunchy peanuts, and fragrant herbs was almost as delightful as eating it. The balance of sweet, sour, salty, and spicy flavors was an explosion of taste I’ll never forget.
                    Street food doesn’t just fill your stomach—it connects you with the essence of a place. In Istanbul, a freshly baked simit sprinkled with sesame seeds pairs perfectly with a cup of tea by the Bosphorus. In Vietnam, the crisp freshness of a banh mi sandwich makes every bite a symphony of textures. Meanwhile, in Colombia, an arepa stuffed with melted cheese provides pure, comforting satisfaction.
                    Each street food experience is a cultural journey, revealing the everyday life and creativity of its people. The variety is endless and the stories behind these dishes are rich. What’s your most memorable street food moment? Is it a savory treat, a sweet indulgence, or something completely unexpected? Share your stories and let’s celebrate the world’s street food treasures!`,
    },
    {
      id: 3,
      title: "Comfort Food: The Universal Hug",
      image: "./3.png",
      description: `No matter where you're from, comfort food is a universal language that transcends cultures and borders. For me, it’s a steaming bowl of chicken noodle soup on a rainy day or a plate of cheesy lasagna shared with family during a cozy evening. These meals aren’t just about nourishment; they evoke feelings of warmth, security, and nostalgia.
                    In Japan, comfort food might mean a warm bowl of ramen, with its rich broth and tender noodles providing solace on a cold winter night. In the Southern United States, it’s all about crispy fried chicken with buttery biscuits, often accompanied by creamy mashed potatoes and gravy—a true feast for the soul.
                    Across the globe, comfort foods take on unique forms: Italy boasts creamy risottos and hearty pastas, while in India, a fragrant bowl of khichdi is the go-to for simplicity and comfort. In Mexico, tamales wrapped in corn husks evoke memories of family gatherings, and in Korea, a bubbling pot of kimchi jjigae warms the heart and body alike.
                    These dishes are more than just meals—they’re traditions passed down through generations, stories shared at the dinner table, and a way to bring people together. Whether it’s a quick snack or a home-cooked feast, comfort food has the power to transport us to a place of peace and happiness.
                    What’s your ultimate comfort food? Is it a childhood favorite, a family recipe, or a dish you discovered along the way? Share your memories, and let’s celebrate the foods that feed our souls.`,
    },
    {
      id: 4,
      title: "Plant-Based Pleasures: A Taste of Sustainability",
      image: "./4.png",
      description: `The plant-based revolution is here, and it’s tastier than ever! With innovative recipes and fresh produce, you can enjoy meals that are good for both you and the planet. Think roasted cauliflower steaks, creamy coconut chickpea curry, or a vibrant smoothie bowl topped with fresh berries. From globally loved staples like Mediterranean falafel and Indian lentil curries to modern twists like jackfruit tacos, beetroot burgers, or mushroom-based “meatballs,” plant-based cuisine is as diverse as it is delicious.
                    The benefits of going plant-based extend far beyond your plate. By choosing plant-based meals, you’re actively contributing to a healthier planet, reducing carbon emissions, conserving water, and promoting sustainable farming practices. It’s not just an ethical choice but an impactful one, helping to combat climate change and support biodiversity.
                   Plant-based diets are also a powerhouse for your health, offering a wealth of nutrients like fiber, vitamins, antioxidants, and healthy fats. They’ve been linked to lower risks of chronic diseases such as heart disease, diabetes, and certain cancers, making it a win-win for your body and the environment.
                   Whether you’re vegan, exploring Meatless Mondays, or simply looking for creative ways to incorporate more greens into your meals, the possibilities are endless. Imagine indulging in cashew-cream pasta, smoky eggplant dip, or a hearty quinoa salad bursting with colorful veggies. Each dish tells a story of innovation, sustainability, and vibrant flavor.
                    Plant-based eating isn’t just a trend; it’s a movement toward a healthier, more sustainable future. What’s your favorite plant-based recipe, or which dish are you excited to try next? Let’s celebrate the beauty and versatility of plants!.`,
    },
    {
      id: 5,
      title: "Desserts Around the Globe: Sweet Endings",
      image: "./5.png",
      description: `No meal is complete without dessert, and the world has no shortage of sweet treats to discover. From French macarons with their delicate shells and creamy fillings to the syrupy layers of Turkish baklava, desserts are the ultimate indulgence. Filipino halo-halo, a vibrant medley of shaved ice, sweet beans, fruits, and jellies, adds a refreshing twist to any meal.
                    For the chocolate lovers, there’s Belgium’s velvety truffles, or perhaps you’d prefer the rich, spiced flavors of Indian gulab jamun soaked in rose syrup. Each dessert carries a unique cultural story, making every bite a journey into the heart of its origin. Whether you enjoy creamy gelato under the Italian sun or decadent New York cheesecake at a café, desserts bring joy to every corner of the world.`,
    },
  ];

  return (
   <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800 p-6">
    <Navbar/>
  <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-md tracking-wide">
          Welcome to the Food Blog
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Discover recipes, tips, and stories from around the world!
        </p>
      </header> 
      
      <div className="space-y-12 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <Link href={`/blog/id${post.id}`}>
                <li className="text-2xl font-bold text-indigo-900 hover:text-blue-800 transition">
                  {post.title}
                </li>
              </Link>
              <p className="text-gray-700 mt-4">{post.description}</p>
              <div className="mt-6">
                <CommentSection postId={`${post.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="text-center mt-16 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Food Blog. All Rights Reserved.
      </footer>
    </div>
  );
}



