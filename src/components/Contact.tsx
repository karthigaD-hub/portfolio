import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karthinividillinaidu@gmail.com',
      href: 'mailto:karthinividillinaidu@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/karthigad',
      href: 'https://github.com/karthigaD-hub'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthigad',
      href: 'https://www.linkedin.com/in/d-karthiga-297686202/'
    }
  ];
  return (
    <section className="w-full px-6 py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-gray-900 font-semibold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Open to new opportunities and collaborations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-200">
                  <Icon size={28} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                </div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
                  {item.label}
                </div>
                <div className="text-gray-900 font-medium break-all group-hover:text-blue-600 transition-colors duration-200">
                  {item.value}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}