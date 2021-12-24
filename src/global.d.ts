// SVG files, such as my logo
declare module "*.svg" {
    const content: unknown;
    export default content;
}

// Custom font
declare module "typography-theme-grand-view";

// Dark mode
declare module "gatsby-plugin-dark-mode";

// SCSS modules
declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}

declare module "*.mp3";
