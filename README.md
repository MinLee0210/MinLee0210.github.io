# minlee0210.github.io

My portfolio — **[minlee0210.github.io](https://minlee0210.github.io)**

I'm Minh, an AI Engineer in Hồ Chí Minh City. I build and deploy machine learning systems —
natural language processing, generative AI, and real-time vision — and I maintain a few open
libraries in Python and Rust:

| Library | | |
|---|---|---|
| [**kalbee**](https://pypi.org/project/kalbee/) | Kalman filtering and state estimation — ten filter families under one API | PyPI |
| [**colonyx**](https://pypi.org/project/colonyx/) | Rust-backed swarm intelligence optimization for Python | PyPI · [crates.io](https://crates.io/crates/colonyx) |
| [**enigmar**](https://crates.io/crates/enigmar) | Enigma M3/M4 simulator with Python bindings | crates.io |

Reach me at [minh.leduc.0210@gmail.com](mailto:minh.leduc.0210@gmail.com),
[LinkedIn](https://www.linkedin.com/in/minhle007/), or [Medium](https://medium.com/@minhle_0210).

## Running it

A [Zola](https://www.getzola.org/) static site. No JavaScript framework, no CSS framework, and
no external requests at runtime — fonts are self-hosted, and the only script is ~1KB for the
theme toggle, the scroll-spy nav, and the copy buttons.

```sh
brew install zola   # or getzola.org/documentation/getting-started/installation
zola serve          # http://127.0.0.1:1111
zola build          # writes to public/
```

Library version numbers are fetched from PyPI and crates.io **at build time**, so the page
can't drift from what is actually published. If a registry is unreachable the version badge
drops rather than the build failing.

## Layout

```
config.toml            site config; [extra].role feeds the <title>
templates/index.html   page shell — rail, glance band, section includes
templates/partials/    one file per section
static/css/style.css   every style, including print
static/css/fonts.css   @font-face rules (generated)
static/fonts/          self-hosted woff2 subsets, incl. Vietnamese
static/js/script.js    theme toggle, scroll-spy, copy buttons
content/               empty; zola serve refuses to run without it
```

Pushing to `main` builds the site and publishes it to the `gh-pages` branch, which is what
GitHub Pages serves.
