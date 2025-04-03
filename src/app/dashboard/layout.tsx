import './layout.scss';

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="dashboard">
          {/* LEFT */}
          <div className="sidebar">l</div>
          {/* RIGHT */}
          <div className="panel">r</div>
        </div>
    );
  }