import Fade from 'react-reveal';

export default function Header() {
  return (
    <div className="h-28 mb-8">
      <Fade>
        <h1 className="py-8 text-center text-xl font-bold md:text-3xl">
          Welcome to, <span className="underline">Nowted!!📒</span>
        </h1>
      </Fade>
      <hr />
    </div>
  );
}
