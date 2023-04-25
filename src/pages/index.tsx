export default function HomePage() {
  return (
    <>
      {Array(150)
        .fill(null)
        .map((_, index) => (
          <h1 >Hello Word {index}</h1>
        ))}
    </>
  );
}
