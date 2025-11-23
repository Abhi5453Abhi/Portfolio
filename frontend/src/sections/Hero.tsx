import { personalInfo, companies } from '../data/resume';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight animate-fade-in">
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto md:mx-0">
            {personalInfo.intro}
          </p>

          {/* Worked with section - moved inside the grid for better alignment on desktop */}
          <div className="pt-12 md:pt-16">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6">
              Worked with
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 items-center">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-10 md:h-12 transition-all duration-300"
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-full w-auto max-w-[120px] md:max-w-[150px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.className = 'text-sm md:text-lg font-semibold text-white/80 hover:text-white';
                          span.textContent = company.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  ) : (
                    <span className="text-sm md:text-lg font-semibold text-white/80 hover:text-white">
                      {company.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-surface shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent z-10 opacity-20 group-hover:opacity-10 transition-opacity"></div>
            <img
              src="/profile-image.jpg"
              alt="Abhishek Arora - Senior Software Engineer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

