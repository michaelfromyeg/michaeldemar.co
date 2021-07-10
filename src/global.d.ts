// SVG files, such as my logo
declare module '*.svg' {
    const content: unknown
    export default content
}

// Custom font
declare module 'typography-theme-anonymous'

// SCSS modules
declare module '*.scss' {
    const content: { [className: string]: string }
    export = content
}
