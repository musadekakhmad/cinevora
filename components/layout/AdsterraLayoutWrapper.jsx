// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-2588685b0e7a2dbe0b2e89a73118d7bd');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/2588685b0e7a2dbe0b2e89a73118d7bd/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/c8/81/43/c88143903460c0596d6b47e4b335f156.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="e86dfb1927e7f50aa6adf7367c930be1"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/e8/6d/fb/e86dfb1927e7f50aa6adf7367c930be1.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}