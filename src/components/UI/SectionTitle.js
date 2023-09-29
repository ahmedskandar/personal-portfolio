function SectionTitle({children}) {
  return (
    <div className="text-center m-20 lg:m-40">
      <h2 className="text-center mt-10 text-secondary text-3xl font-serif tracking-widest sm:text-4xl lg:text-5xl">
        <span className="line-before-and-after"></span>
        {children}
        <span className="line-before-and-after"></span>
      </h2>
    </div>
  );
}

export default SectionTitle