'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll-triggered effects: .reveal → .in ; .text-animation → .active ; .hero .bg → .active
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const t0 = setTimeout(() => {
      document.querySelectorAll('.hero .bg').forEach((el) => el.classList.add('active'));
    }, 80);
    const els = document.querySelectorAll('.reveal, .text-animation');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add(e.target.classList.contains('text-animation') ? 'active' : 'in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => { io.disconnect(); clearTimeout(t0); };
  }, [pathname]);
  return null;
}
