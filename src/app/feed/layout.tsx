interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-rose-500 w-full">I am a Navbar</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
