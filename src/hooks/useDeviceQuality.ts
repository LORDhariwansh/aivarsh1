import { useState, useEffect } from 'react';

type Quality = 'LOW' | 'MEDIUM' | 'HIGH';

export function useDeviceQuality(): Quality {
  const [quality, setQuality] = useState<Quality>('HIGH');

  useEffect(() => {
    // Simple detection based on hardware concurrency and user agent
    const cores = navigator.hardwareConcurrency || 4;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      setQuality('LOW');
    } else if (cores <= 4) {
      setQuality('MEDIUM');
    } else {
      setQuality('HIGH');
    }
  }, []);

  return quality;
}
