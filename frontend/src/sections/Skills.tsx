import { skills } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-white relative overflow-hidden">


      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-accent-green-dark/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl text-accent-green-dark opacity-50 font-serif">"</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-accent-green-dark transition-colors">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white text-gray-600 rounded-lg text-sm border border-gray-200 group-hover:border-gray-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

