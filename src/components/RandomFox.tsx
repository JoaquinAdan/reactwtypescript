type Props = { image: string; alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  return <img alt={alt} width={320} height="auto" src={image} className="rounded" />;
};
