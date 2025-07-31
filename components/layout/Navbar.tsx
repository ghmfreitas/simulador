import { Logo } from './Logo';

export function Navbar() {
  return (
    <div
      className="w-full bg-white border-b border-[#e4e7ec] flex justify-center px-4 h-[70px] items-center"
      data-name="Navbar"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Logo />
    </div>
  );
}