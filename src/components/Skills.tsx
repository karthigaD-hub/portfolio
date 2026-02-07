export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design']
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Figma', 'GitHub', 'Version Control']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Computer Vision', 'OCR', 'Natural Language Processing']
    }
  ];

  return (
    <section className="w-full px-6 py-20 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px,1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-base text-gray-900 font-medium mb-4 tracking-tight">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-gray-600 font-light flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}