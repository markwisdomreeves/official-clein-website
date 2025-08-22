"use client";

import { useEffect, useState, useRef } from "react";
import { HiUsers, HiLocationMarker, HiCalendar, HiStar } from "react-icons/hi";

const fallbackStats = [
  {
    icon: HiUsers,
    value: 500,
    suffix: "+",
    label: "Verified Providers",
    color: "text-blue-600"
  },
  {
    icon: HiCalendar,
    value: 50,
    suffix: "k",
    label: "Completed Bookings",
    color: "text-green-600"
  },
  {
    icon: HiLocationMarker,
    value: 40,
    suffix: "+",
    label: "Cities Served",
    color: "text-purple-600"
  },
  {
    icon: HiStar,
    value: 4.8,
    suffix: "★",
    label: "Average Rating",
    color: "text-orange-600"
  }
];

function useCountUp(end, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimatedRef.current) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        hasAnimatedRef.current = true;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, isActive]);

  useEffect(() => {
    hasAnimatedRef.current = false;
    startTimeRef.current = null;
    if (!isActive) {
      setCount(0);
    }
  }, [end, isActive]);

  return count;
}

export default function Stats({ dict }) {
  const getStatsData = () => {
    if (dict?.stats?.items && Array.isArray(dict.stats.items)) {
      return dict.stats.items.map((item, index) => {
        const fallback = fallbackStats[index] || fallbackStats[0];
        const valueMatch = item.value.match(/^([\d.,]+)(.*)$/);
        if (valueMatch) {
          let numberStr = valueMatch[1];
          if ((numberStr.match(/\./g) || []).length > 1 || 
              (numberStr.includes('.') && numberStr.split('.')[1] && numberStr.split('.')[1].length === 3)) {
            numberStr = numberStr.replace(/\./g, '');
          }
          if (numberStr.includes(',')) {
            numberStr = numberStr.replace(',', '.');
          }
          const numericValue = parseFloat(numberStr);
          const suffix = valueMatch[2];
          
          if (suffix && suffix.toLowerCase().includes('k')) {
            return {
              icon: fallback.icon,
              value: numericValue * 1000,
              suffix: '+',
              label: item.label,
              color: fallback.color
            };
          }
          
          return {
            icon: fallback.icon,
            value: numericValue,
            suffix: suffix || fallback.suffix,
            label: item.label,
            color: fallback.color
          };
        } else {
          return {
            icon: fallback.icon,
            value: fallback.value,
            suffix: fallback.suffix,
            label: item.label || fallback.label,
            color: fallback.color
          };
        }
      });
    }
    return fallbackStats;
  };

  const stats = getStatsData();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="stats-section" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict?.stats?.title || 'CLEIN by the'} <span className="gradient-text">{dict?.stats?.titleHighlight || 'Numbers'}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.stats?.subtitle || 'Trusted by thousands across Italy for quality home services'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible }) {
  const Icon = stat.icon;
  const animatedValue = useCountUp(stat.value, 2000, isVisible);
  
  const formatValue = (value) => {
    if (stat.value >= 10000) {
      return Math.floor(value / 1000) + 'k';
    } else if (stat.value % 1 !== 0) {
      return value.toFixed(1);
    } else {
      return Math.floor(value);
    }
  };
  
  const displayValue = formatValue(animatedValue);
  
  return (
    <div className="text-center bg-white rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow">
      <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {displayValue}{stat.suffix}
      </div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );
}