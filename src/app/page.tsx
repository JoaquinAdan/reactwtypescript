'use client';
import { useState, MouseEventHandler } from 'react';
import { LazyImage } from '@/components/RandomFox';

// generate random random function that returns a number between 1 and 123 (inclusive)
const randomNum = () => Math.floor(Math.random() * 123) + 1;

// generate simple unique id
const generateId = () => Math.random().toString(36).substring(2, 15);

export default function Home(): JSX.Element {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItems = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNum()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }, index) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            width={320}
            height="auto"
            title="Random fox"
            className="rounded bg-gray-300"
            onLazyLoad={(img) =>
              console.log(`Image #${index + 1} cargada. Nodo:`, img)
            }
            onClick={() => console.log('hola')}
          />
        </div>
      ))}
    </main>
  );
}
