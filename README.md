<img src="./src/images/ptm-logo-deep.png" width="150">

## Peace Through Music 2020 campaign site
### Based on customised render of Iceberg Gatsby theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/d42b0f72-3937-4b15-b7e2-27178195b1e4/deploy-status)](https://app.netlify.com/sites/pfc2020-v4/deploys)

A starter Internationalization / i18n without third party plugins or packages for Posts and Pages. Different URLs dependending on the language. Focused on SEO, PWA, Image Optimization, Styled Components and more. This starter is also integrate with Netlify CMS to manage all pages, posts and images.

-   Translations by using GraphQL, hooks and context API
-   General translations for any content
-   Creation of menus using json, translations and GraphQL
-   Netlify CMS to manage all pages, posts and images
-   Settings for speedy and optimized images
-   Focus on SEO
-   PWA

## 🚀 Getting Started

Assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed, run the following commands to install the project:

**With git clone**:
```
$ git clone https://github.com/boneal2020/pfc2020-v4.git your-project-name # Clone the project

cd pfc2020-v4

yarn install # or npm install
gatsby develop # or yarn run develop
```

Note: Yarn is preferred method.

Using the preferred command `yarn run develop` (or you can use the standard `gatsby develop`), you will see the following URLs:

```
http://localhost:8000
http://localhost:8000/___graphql
http://localhost:8000/admin
```

## File Structure

Top-level files and directories

```
├── config
│   ├── language-mapping
│   ├── menu
│   │   ├── en.json
│   │   ├── pt.json
│   ├── translations
│   │   ├── en.json
│   │   ├── pt.json
│   ├── i18n.js
├── src
├── static
│   ├── admin
│   │   ├── config.yml
│   ├── assets
│   │   ├── img
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── wrapPageElement.js

```


1. **config**:
   All language settings: languages, strings, menu...
   In `i18n.js` you can set the languages and some others important info

2. **src**:
   Components, hooks, templates and fixed pages (Different of markdown pages, these pages have the same url for all languages and the text content needs to be inserted in `config/translations` files).

3. **static**:
   Netlify settings and images.

4. **gatsby-browser.js**:
   External files and the layout wrapper setting.

5. **gatsby-config.js**:
   Gatsby plugins.

6. **gatsby-node.js**:
   Logic for generating pages and posts by manipulating GraphQL.

7. **wrapPageElement.js**
   As this component wraps every page (due to the wrapPageElement API) we can be sure to have the locale available everywhere!

## About Netlify CMS
You must change the Netlify data "repo" and "site_domain" according your Github repository in `static/admin/config.yml`.

```
backend:
    name: github # Local
    # name: git-gateway # Prod
    repo: _owner-name/repo-name_ # Path to your GitHub repository
    branch: master
    site_domain: _site-url_ # If site extists
```

Realize that you need to use `name: github` for local development and `name: git-gateway` for prod environment (netlify)

## Important notes:

-   General information for languages are defined in `config/i18n.js`.
-   The general content translations are located in `config/translations` and the `useTranslations` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.
-   The menu items translations are located in `config/menu` and the `useMenu` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.
-   **✨ New**: Adding corresponding urls are locating in `config/language-mapping` and the `useLanguageMapping` custom hook pulls these translations (via GraphQL query) and inserts them into the pages. It is used together with the language switcher so that the page is directed to a page corresponding to the other language.
-   Due to the use of a global layout / context API and the language code passed to all pages (see `gatsby-node.js`), you know on all pages which language is currently displayed.
-   A custom component for the <a> tag is implemented - this way links can stay the same for every language, without the need to manually write path prefixes.

