import { education } from '../data/resume';

const Education = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-center md:text-left">
          Education
        </h2>
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 hover:border-accent-green-dark transition-all duration-300 hover:shadow-lg max-w-3xl w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{education.degree}</h3>
            <p className="text-lg md:text-xl text-accent-green-dark mb-4">{education.institution}</p>
            <p className="text-sm md:text-base text-gray-600 mb-2">
              {education.period} | {education.location}
            </p>
            {education.cgpa && (
              <p className="text-sm md:text-base text-gray-500">
                <span className="font-semibold">CGPA:</span> {education.cgpa}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

