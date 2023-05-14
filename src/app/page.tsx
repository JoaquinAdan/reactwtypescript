'use client';
import { useState } from 'react';
import { RandomFox } from '@/components/RandomFox';

// generate random random function that returns a number between 1 and 123 (inclusive)
const randomNum = () => Math.floor(Math.random() * 123) + 1;

export default function Home(): JSX.Element {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${randomNum()}.jpg`,
    `https://randomfox.ca/images/${randomNum()}.jpg`,
    `https://randomfox.ca/images/${randomNum()}.jpg`,
    `https://randomfox.ca/images/${randomNum()}.jpg`,
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Facu!</h1>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox alt={`imagen de zorro n° ${randomNum()}`} image={image} />
        </div>
      ))}
    </main>
  );
}
