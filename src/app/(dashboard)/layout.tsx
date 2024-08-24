
export default function Dashboard_Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body > {children}</body>
      </html>
    );
  }
  