export default function PageContainer({ children, className = "" }) {
  return (
    <main
      className={`w-auto h-auto p-5 xl:px-100 xl:py-50 ${className} gap-15`}
    >
      {children}
    </main>
  );
}
