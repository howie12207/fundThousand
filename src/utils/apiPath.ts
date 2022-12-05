const local = 'http://localhost:5173';

export const base: string =
    import.meta.env.MODE === 'development' ? `${local}/proxyBase` : import.meta.env.VITE_API_BASE;
export const port8081: string =
    import.meta.env.MODE === 'development' ? `${local}/proxy8081` : import.meta.env.VITE_API_8081;
