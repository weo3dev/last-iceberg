import React, { useEffect } from 'react';

export default function useScript({ src, id, onload }) {
  useEffect(() => {
    const existingScript = document.getElementById(id);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      document.body.appendChild(script);

      script.onload = () => {
        if (onload) {
          onload();
        }
      };
    }

    if (existingScript && onload) {
      onload();
    }

    return () => {
      if (existingScript && onload) {
        existingScript.remove();
      }
    };
  }, [onload, src, id]);
}
