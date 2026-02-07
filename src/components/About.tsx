export function About() {
  return (
    <section className="w-full px-6 py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px,1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              About
            </h2>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-2xl text-gray-900 leading-relaxed mb-8 font-light">
              Frontend / UI Developer with hands-on experience building responsive web
              interfaces using HTML, CSS, and React.js.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Experienced in real-world projects involving multi-role systems, legal-tech platforms, 
              and deployed web applications. Strong focus on usability, accessibility, and clean UI 
              design principles. Committed to writing semantic, maintainable code that scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}