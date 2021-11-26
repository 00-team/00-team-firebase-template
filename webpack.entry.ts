// types
import type { Entry } from 'webpack'

const EntryConfig: Entry = {
    // main module
    main: {
        import: './src/index.tsx',
        dependOn: ['react'],
    },
    app: {
        import: './src/App.tsx',
        dependOn: ['react'],
    },
    // dependencies
    react: ['react', 'react-dom'],
}

export default EntryConfig
