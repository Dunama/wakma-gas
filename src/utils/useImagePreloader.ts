import { useEffect, useMemo, useState } from 'react';

export function useImagePreloader(urls: string[]) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const uniqueUrls = useMemo(() => Array.from(new Set(urls.filter(Boolean))), [urls]);

  useEffect(() => {
    if (uniqueUrls.length === 0) {
      setReady(true);
      setProgress(1);
      return;
    }

    let cancelled = false;
    let loaded = 0;

    const update = () => {
      loaded += 1;
      if (cancelled) return;
      setProgress(loaded / uniqueUrls.length);
      if (loaded >= uniqueUrls.length) setReady(true);
    };

    const handles = uniqueUrls.map((src) => {
      const img = new Image();
      img.onload = update;
      img.onerror = update; // treat errors as loaded to avoid blocking the UI forever
      img.src = src;
      return img;
    });

    return () => {
      cancelled = true;
      // best-effort cleanup
      handles.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [uniqueUrls]);

  return { ready, progress } as const;
}
