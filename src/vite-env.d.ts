/// <reference types="vite/client" />

// Allow CSS module imports
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Allow SVG imports
declare module '*.svg' {
  import type React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
