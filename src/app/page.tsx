'use client';
import { useState, MouseEventHandler } from 'react';
import { random } from 'lodash';
import { LazyImage } from '@/components/RandomFox';
import Script from 'next/script';

// generate random random function that returns a number between 1 and 123 (inclusive)
const randomNum = () => random(1, 123);

// generate simple unique id
const generateId = () => Math.random().toString(36).substring(2, 15);

export default function Home(): JSX.Element {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItems = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNum()}.jpg`,
    };
    setImages([newImageItem, ...images]);

    window.plausible('add_fox');
  };

  function PageContent() {
    return (
      <div className="pt-10 pb-4 px-4 sm:px-6 lg:px-8">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          Curso React con TypeScript
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Componente Lazy Image
        </h3>
        <div className="max-w-xl mx-auto text-xl text-gray-500 leading-7">
          <p className="mt-4">
            Un componente genérico de React para cargar imágenes con lazy
            loading.
          </p>
          <p className="mt-4">✨✨</p>
          <p className="mt-4">
            Las imágenes agregadas no se descargarán hasta que sean visibles en
            la pantalla
          </p>
          <p className="mt-4">✨✨</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        defer
        data-domain="yourdomain.com"
        src="https://plausible.io/js/script.js"
      />
      <main>
        <main className="text-center">
          <PageContent />
          <div className="m-4">
            <button
              onClick={addNewFox}
              className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Agregar un nuevo zorro
            </button>
          </div>
          {images.map(({ id, url }, index) => (
            <div className="p-4" key={id}>
              <LazyImage
                src={url}
                width="320"
                height="auto"
                className="mx-auto rounded-md bg-gray-300"
                onClick={() => {
                  console.log('holi!');
                }}
                onLazyLoad={(img) => {
                  console.log(`Image #${index + 1} cargada. Nodo:`, img);
                }}
              />
            </div>
          ))}
        </main>

        <footer className="text-center mt-auto p-6 text-sm text-gray-500">
          <p>
            Images from{' '}
            <a href="https://randomfox.ca" target="_blank" rel="noreferrer">
              randomfox.ca
            </a>{' '}
            | Made by{' '}
            <a href="https://www.linkedin.com/in/joaquin-rodriguez-dev/">@JoaquinRodriguez 🦑</a> in{' '}
            <a href="https://twitter.com/platzi">@platzi</a>
          </p>
        </footer>
      </main>
    </>
  );
}
