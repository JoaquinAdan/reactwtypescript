'use client';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { RandomFox } from '@/components/RandomFox';

// generate random random function that returns a number between 1 and 123 (inclusive)
const randomNum = () => Math.floor(Math.random() * 123) + 1;

// generate simple unique id
const generateId = () => Math.random().toString(36).substring(2, 15);

type ImageItems = { id: string; url: string };

export default function Home(): JSX.Element {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItems = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNum()}.jpg`,
    };
    setImages([newImageItem, ...images]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Vitu!</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
