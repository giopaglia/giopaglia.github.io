# giopaglia.github.io

Personal website of Giovanni Pagliarini, built with [Jekyll](https://jekyllrb.com/) on a vendored copy of the [Strata](https://html5up.net/strata) theme by HTML5 UP (via the archived [strata-jekyll-theme](https://github.com/andrewbanchich/strata-jekyll-theme) port).

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Homepage sections live in `_sections/`, ordered by their `order` front matter; set `hide: true` to hide one. Deployed to GitHub Pages via `.github/workflows/jekyll.yml`.
