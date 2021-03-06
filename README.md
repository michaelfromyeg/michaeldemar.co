# michaeldemar.co 👋🌐

[![Author](https://img.shields.io/badge/Author-michaelfromyeg-brightgreen.svg)](https://michaeldemar.co)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://michaeldemar.co)

My personal website built using Gatsby. Contains a blog, a graphic design portfolio, write-ups about my personal projects, and a bit about me :-)

## Development

There's just a couple of dependecies to install before running this project locally.

-   [Node.js](https://nodejs.org/en/) and preferably [nvm](https://github.com/nvm-sh/nvm)
-   [gatsby-cli](https://gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli)

If you're on MacOS, Linux, or WSL:

```shellscript
# Install Homebrew (or Linuxbrew) if you haven't already!
brew install node nvm
npm i -g gatsby-cli
```

After cloning the repository, run

```shellscript
$ npm i
> (unfortunately, many dependency warnings...)
$ npm run dev
> You can now view michaeldemar.co in the browser.
 ⠀
   http://localhost:8000/
 ⠀
  View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
   http://localhost:8000/___graphql
 ⠀
  Note that the development build is not optimized.
  To create a production build, use gatsby build
```

If you're looking to publish your Gatsby site to GitHub pages after forking this project, see the [Gatsby documentation](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) for more information. If you're interested in helping me turn this project into a re-usable Gatsby template, reach out via email at [mdemar01@student.ubc.ca](mailto:mdemar01@student.ubc.ca).

## Notes

Anything I think is helpful to know for future me I'll leave here!

### The `static/` folder

The static folder contains files that are "directly" copied (i.e., they are unmodified during copying) to the `public/` folder. [You should avoid using it!](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/)

It's fine for the `favicon.ico` and `robots.txt` files to live here. The `CNAME` doesn't have to live here; GitHub Pages will pick it up from the project root.

## For the future

-   The structure is really bad, I need to use CSS modules. Thankfully this is easy to do with Gatsby.
-   I need to post more content!
-   I need to get more of my personal projects online so I can share them! Good thing I'm stuck inside all summer...

## Inspiration

There really is an art to personal websites. Here are some websites that inspired me when I was still planning mine out. They are really great projects by really great developers!

[Ian Ramzy](https://ianramzy.com/)

[Jacky Zhao](https://jzhao.xyz/)

[Ryan Mehri](https://ryanmehri.tech/)

## FAQ

-   Why Gatsby?
    -   I've been using React on a ton of projects this past year, so once I stumbled across Gatsby I was really intrigued. Suffice to say it was definitely overkill for this project, but I think it's a really good static site generator. I'd also encourage you to look at Jekyll, Hugo, and Pelican. All good choices.

### How did you—

These are just a bunch of tricks I hope developers stumbling across this find useful. If I'm missing something, feel free to ask me!

-   ...create a blog with Gatsby?
    -   I used [this](https://github.com/gatsbyjs/gatsby-starter-blog) starter!
-   ...style the logo on the front header?
    -   All the of the styles are in `global.css` for now. I think it's a nice trick. Just find an svg you like and set it's height to `100vh` and turn down its opacity. The hover animation is just basic key framing.
-   ...create the arrow animation?
    -   This arrow animation is one of the best I've seen, it's from [here](https://freefrontend.com/css-arrows/).
-   ...get the main navbar to act like that?
    -   I used a project created by the creator of Gatsby, [React Headroom](https://www.npmjs.com/package/react-headroom). Maybe I'll create my own implementation later!
-   ...I make my logo?
    -   I used Adobe Illustrator. If you're looking to get into graphic design I recommend using Lynda.com. Usually you can get access for free with a public library card.

Did I miss something? Feel free to email me at michaelfromyeg@gmail.com.
