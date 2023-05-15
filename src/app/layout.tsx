import './globals.css';

export const metadata = {
  title: 'Curso de Platzi de React con TypeScript guiado por @jonalvarezz 🦑',
  description: 'Un curso en el que iremos paso a paso dominando React con TypeScript para crear un componente genérico para cargar imágenes con lazy loading.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
