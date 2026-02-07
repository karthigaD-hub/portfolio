import { FileText, Briefcase, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 lg:gap-16 items-start">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="flex justify-center md:justify-start">
  <div className="w-56 h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
    <img
      src="/profile.jpeg"
      alt="Karthiga UI Developer"
      className="w-full h-full object-cover"
    />
  </div>
</div>

</div>

          {/* Content */}
          <div className="pt-4">
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-2 font-light tracking-tight">Karthiga D</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-600"></div>
              <p className="text-xl text-gray-700 font-light">Frontend / UI Developer</p>
            </div>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl font-light">
              Specialized in building responsive, scalable web interfaces with modern technologies. 
              Focused on delivering clean code, optimal user experience, and maintainable solutions 
              for complex business requirements.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4">
  <a
  href="/resume.png"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
>
  

    <FileText size={20} strokeWidth={1.5} />
    <span className="font-normal">View Resume</span>
  
  </a>

  <button 
    onClick={scrollToProjects}
    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
  >
    <span className="font-normal">View Projects</span>
    <ArrowRight size={20} strokeWidth={1.5} />
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}