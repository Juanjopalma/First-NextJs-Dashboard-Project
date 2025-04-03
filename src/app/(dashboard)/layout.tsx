import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import './layout.scss';

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="dashboard">
          {/* LEFT */}
          <div className="sidebar">
            <Link className='sidebar__logo' href="/">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span>Dev School</span>
            </Link>
            <Menu />
          </div>
          {/* RIGHT */}
          <div className="panel">
            <Navbar />
            {children}
          </div>
          
        </div>
    );
  }