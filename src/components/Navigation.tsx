import Link from "next/link"

interface NavigationBarProps {
  font: {
    className: string;
  };
}

export default function NavigationBar({ font }: NavigationBarProps) {
    return (
        <>
      <div className={`${font.className} nav-bar`}>
        <ul className="nav-links">
        <li className="link"><Link href="">Works</Link></li>
        <li className="link"><Link href="">Blog</Link></li>
        <li className="link"><Link href="">Contact</Link></li>
        </ul>
      </div>
      </>
    );
  }