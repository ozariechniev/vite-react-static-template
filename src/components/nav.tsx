import { Link } from '@tanstack/react-router';

export default function Nav() {
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex gap-2 bg-white p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
  );
}
