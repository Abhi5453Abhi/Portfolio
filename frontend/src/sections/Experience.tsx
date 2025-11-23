import { workExperience } from '../data/resume';

const Experience = () => {
  const getCompanyLogo = (companyName: string) => {
    const logoMap: { [key: string]: string } = {
      'ACV Auctions': '/logos/acv-auctions.png',
      'LeadSquared': '/logos/leadsquared.png',
      'Biofourmis': '/logos/biofourmis.png',
      'Alyve Health': '/logos/alyve-health.png',
    };
    return logoMap[companyName] || '';
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solving user & business problems since last 5+ years.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {workExperience.map((exp, index) => {
            const isEven = index % 2 === 0;
            const logoPath = getCompanyLogo(exp.company);

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  !isEven ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Logo Section */}
                <div
                  className={`${
                    !isEven ? 'md:col-start-2' : ''
                  } flex items-center justify-center min-h-[300px] md:min-h-[400px]`}
                >
                  {logoPath ? (
                    <img
                      src={logoPath}
                      alt={`${exp.company} logo`}
                      className="w-full h-full max-w-[350px] max-h-[250px] object-contain opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                  )}
                </div>

                {/* Text Content Section */}
                <div className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''} space-y-6`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl md:text-2xl text-accent-green-dark font-semibold mb-4">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600 mb-6">
                      <span>{exp.period}</span>
                      <span className="text-gray-400">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-base md:text-lg leading-relaxed flex items-start"
                      >
                        <span className="text-accent-green-dark mr-3 mt-2 text-sm flex-shrink-0">
                          ●
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

