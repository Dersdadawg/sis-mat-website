"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export function KaTeXRender({ math, display = false }: { math: string; display?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(math, ref.current, {
        displayMode: display,
        throwOnError: false,
      });
    }
  }, [math, display]);

  return <span ref={ref} />;
}

/**
 * Renders a string with inline ($...$) and display ($$...$$) LaTeX.
 */
export function KaTeXBlock({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Split on display math first, then inline math
    const html = content
      // Display math: $$...$$
      .replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
        const span = document.createElement("span");
        katex.render(tex.trim(), span, { displayMode: true, throwOnError: false });
        return `<div class="my-3">${span.innerHTML}</div>`;
      })
      // Inline math: $...$
      .replace(/\$([^$]+)\$/g, (_, tex) => {
        const span = document.createElement("span");
        katex.render(tex.trim(), span, { displayMode: false, throwOnError: false });
        return span.innerHTML;
      });

    ref.current.innerHTML = html;
  }, [content]);

  return <div ref={ref} />;
}
