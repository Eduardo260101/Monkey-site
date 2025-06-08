import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banana, Drumstick, Watermelon, Basketball } from "lucide-react";
import { motion } from "framer-motion";
import dunkGif from "@/assets/dunk.gif"; // Example path
import monkeySound from "@/assets/monkey-128368.mp3"; // Example path

export default function MonkeysKfcWatermelon() {
  const [melonScore, setMelonScore] = useState(0);
  const [juicing, setJuicing] = useState(false);
  const [kfcResult, setKfcResult] = useState("");
  const [dunking, setDunking] = useState(false);

  const melonJuiceGame = () => {
    if (juicing) return;
    setMelonScore(0);
    setJuicing(true);
    let score = 0;
    const interval = setInterval(() => {
      score++;
      setMelonScore(score);
    }, 300);
    setTimeout(() => {
      clearInterval(interval);
      setJuicing(false);
    }, 5000);
  };

  const playMonkeySound = () => {
    const audio = new Audio(monkeySound);
    audio.play();
  };

  const pickKfcBucket = () => {
    const options = ["Drumsticks", "Tenders", "Zinger Burger", "Family Bucket", "Popcorn Chicken"];
    const result = options[Math.floor(Math.random() * options.length)];
    setKfcResult(result);
  };

  const handleDunk = () => {
    setDunking(true);
    setTimeout(() => setDunking(false), 2500);
  };

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
                Welcome to Monkey Kingdom! Tap the button to hear playful monkey chatter echo through the jungle. This interactive soundboard is perfect for animal fans and curious kids alike!
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white" onClick={playMonkeySound}>Play Monkey Sounds</Button>
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
                Feeling hungry? Press the button and let our fun picker spin the wheel of flavor! It could land on anything from crispy drumsticks to a mega bucket—get ready to be surprised!
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={pickKfcBucket}>Pick My Bucket</Button>
              {kfcResult && <p className="mt-2 font-semibold text-red-900">🍗 You got: {kfcResult}!</p>}
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
                Ready... Set... Juice! Tap the button below and mash those melons as fast as you can before the timer runs out. Can you beat your personal best and become the melon master?
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={melonJuiceGame} disabled={juicing}>Juice Melons</Button>
              {juicing && <p className="mt-2 font-bold text-pink-900">🍉 Juicing... {melonScore} melons so far!</p>}
              {!juicing && melonScore > 0 && <p className="mt-2 font-bold text-pink-900">🍉 Final Score: {melonScore} melons!</p>}
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
                Boom shakalaka! Click the dunk button and watch an epic slam dunk moment come to life on your screen. Perfect for sports fans looking for a slammin’ good time!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleDunk}>Watch Dunk</Button>
              {dunking && <img src={dunkGif} alt="Dunk Animation" className="mt-4 rounded-xl shadow-md" />}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
