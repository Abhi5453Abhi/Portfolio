import { achievements } from '../data/resume';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Recognition and milestones from my journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-white/10 hover:border-accent-green/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-accent-green font-bold text-lg mb-2">
                {achievement.year}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-green transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-secondary">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

