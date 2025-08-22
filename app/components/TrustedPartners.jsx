'use client'

export default function TrustedPartners({ dict, lang = 'it' }) {
  const partners = [
    'assets/p1.svg',
    'assets/p2.svg',
    'assets/p3.svg',
    'assets/p4.svg',
    'assets/p5.svg',
    'assets/p6.svg',
    'assets/p7.svg',
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-4 bg-gray-50 overflow-hidden">
      <div className="container-custom mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          {dict?.trustedPartners?.title || "Trusted Partners"}
        </h2>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative mt-5">
        <div className="infinite-slider">
          <div className="slider-track">
            {duplicatedPartners.map((_, index) => (
              <div
             key={index}
                className="slider-item"
              >
                <div className="bg-white rounded-xl  p-8 h-32 flex flex-col items-center justify-center hover:shadow-card transition-shadow duration-300">
                  <div className="text-4xl mb-2">
                    <img src={_} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .infinite-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .slider-track {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .slider-item {
          flex: 0 0 auto;
          width: 250px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause on hover */
        .infinite-slider:hover .slider-track {
          animation-play-state: paused;
        }

        /* Smooth animation */
        @media (prefers-reduced-motion: reduce) {
          .slider-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

const partners = [
  
]