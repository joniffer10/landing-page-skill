// Ambient declarations for template scaffolding in environments without node_modules installed.
declare module 'react' {
  export const useState: any;
  export const useEffect: any;
  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
