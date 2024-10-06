import Link from 'next/link';

export default function Navigation({ navItems }) {
  return (
    <ul className="flex space-x-4">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:text-[#FFD21E] transition-colors duration-300">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}