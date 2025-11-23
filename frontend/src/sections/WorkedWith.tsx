import { companies } from '../data/resume';

const WorkedWith = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 md:mb-8">
          Worked with
        </h2>
        <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center md:justify-start">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-full sm:w-40 h-20 sm:h-24 md:w-48 md:h-28 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-accent-green transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/20 p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;

