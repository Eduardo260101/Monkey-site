import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banana, Drumstick, Watermelon, Basketball } from "lucide-react";
import { motion } from "framer-motion";

export default function MonkeysKfcWatermelon() {
  const cardVariants = {
    hover: { scale: 1.08 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 p-6">
      <motion.h1
        className="text-5xl font-extrabold text-center text-rose-600 mb-12 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        🌟 The Ultimate Fun Land: Monkeys, Chicken & Melons! 🏀
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Monkey Soundboard */}
        <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="hover">
          <Card className="bg-yellow-200 transition-transform duration-300 shadow-2xl rounded-2xl cursor-pointer">
            <CardContent className="p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Monkey_Khao_Yai.jpg/640px-Monkey_Khao_Yai.jpg"
                alt="Monkey"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center mb-2">
                <Banana className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-yellow-900">Monkey Soundboard</h2>
              </div>
              <p className="text-yellow-800 mb-2">
                Welcome to Monkey Kingdom! Explore an interactive soundboard where you can tap to hear the hilarious and wild sounds of monkeys communicating. Great for kids and animal lovers!
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white" onClick={() => alert('Ooo-ooo-ahh-ahh! 🐵')}>Play Monkey Sounds</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* KFC Picker */}
        <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="hover">
          <Card className="bg-red-200 transition-transform duration-300 shadow-2xl rounded-2xl cursor-pointer">
            <CardContent className="p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/KFC_Bucket_Chicken.JPG/640px-KFC_Bucket_Chicken.JPG"
                alt="KFC Bucket"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center mb-2">
                <Drumstick className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-red-900">KFC Bucket Picker</h2>
              </div>
              <p className="text-red-800 mb-2">
                Craving some chicken? Use our fun KFC Bucket Picker to randomly select your meal. Tap the button and let fate decide if you get tenders, drumsticks, or a full family bucket!
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => alert('🍗 You got a Mega Bucket!')}>Pick My Bucket</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Melon Juice Mini-Game */}
        <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="hover">
          <Card className="bg-pink-200 transition-transform duration-300 shadow-2xl rounded-2xl cursor-pointer">
            <CardContent className="p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Watermelon_field.jpg/640px-Watermelon_field.jpg"
                alt="Watermelon Farm"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center mb-2">
                <Watermelon className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-pink-900">Melon Juice Mini-Game</h2>
              </div>
              <p className="text-pink-800 mb-2">
                Tap the button to juice as many watermelons as you can in 5 seconds! Can you beat your high score and become the juice master of the farm?
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={() => alert('🍉 Juiced 7 melons in 5 seconds!')}>Juice Melons</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Basketball Dunk Animation */}
        <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="hover">
          <Card className="bg-blue-200 transition-transform duration-300 shadow-2xl rounded-2xl cursor-pointer">
            <CardContent className="p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Outdoor_Basketball_Court.jpg/640px-Outdoor_Basketball_Court.jpg"
                alt="Basketball Court"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center mb-2">
                <Basketball className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold text-blue-900">Basketball Dunk Show</h2>
              </div>
              <p className="text-blue-800 mb-2">
                Welcome to Hoops Paradise! Click the button below to see a player fly into the air and slam dunk like a legend! Great for basketball fans of all levels.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => alert('🏀 Slam Dunk! Boom!')}>Watch Dunk</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
