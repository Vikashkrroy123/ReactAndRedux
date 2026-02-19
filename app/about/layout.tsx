import "../globals.css";
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <> 
        <h1>I am about layout</h1>
        {children}
      </>
  );
}
