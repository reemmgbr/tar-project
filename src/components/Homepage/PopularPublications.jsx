import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularPublications = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // مدة الأنيميشن
      once: false, 
    });
  }, []);

  const publications = [
    {
      id: 1,
      category: "TECHNOLOGY",
      date: "MAY 24 2023",
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      category: "TECHNOLOGY",
      date: "MAY 24 2023",
      title: "16 Best Graphic Design Online and Offline Courses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-12" data-aos="fade-up">
        <h2 className="text-xl md:text-4xl font-[500] text-gray-900">
          Popular Publications:
        </h2>
        <button className="flex items-center text-xl mt-0 gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
          <span className="text-sm font-medium uppercase">VIEW ALL</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {publications.map((publication, index) => (
          <article
            key={publication.id}
            data-aos="fade-up"
            data-aos-delay={index * 200} 
          >
            <div className="overflow-hidden">
              <img
                src={publication.image}
                alt={publication.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 overflow-hidden"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                  {publication.category}
                </span>
                <span className="text-gray-400 text-sm tracking-wider uppercase">
                  {publication.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-orange-500 transition-colors cursor-pointer">
                {publication.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {publication.description}
              </p>

              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group">
                <span className="text-sm font-medium tracking-wider uppercase">
                  READ MORE
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PopularPublications;
