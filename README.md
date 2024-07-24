### ITCSS and atom design

styles architectura
├── settings
│   ├── tailwind imports
│   └── typography.css
├── tools
│    for moment we are no using tools
├── generic
│   └── scrollbar.css
├── elements
│   ├── headings.css
│   ├── images.css
│    └── links.css
├── objects
│   ├── container.css
│   ├── grid.css
│   └── ui-list.css
├── components
│   ├── atoms
│      ├── button.css
│      ├── input.css
│      └── label.css
│   ├── molecules
│       ├── card.css
│       └── form.css
│   └── organisms
│       ├── gallery.css
│       └── header.css
│
├── utilities (we name it shared because rule ! utilities)
│   ├── typography.css
│   └── error.css
└── index.scss

# Settings and Tools

The first two levels are oriented towards preprocessors like Sass: defining color variables, typography, as well as mixins and functions. These two levels do not produce any output in our CSS.

# Generic

In this layer, we will put generic styles such as reset or normalize, and the definition of box-sizing. Here we start generating output in our CSS.

# Elements

We define the styles for HTML elements such as `h1`, `img`, `a`, etc. This is where we start applying our own styles that will change the appearance of our application.

# Objects

In this layer, we start creating classes. Until now, we have only worked with element selectors (which have less specificity). Objects are highly reusable classes that add structural patterns without adding decoration, such as `.container` or `.ui-list`.

# Components

Components are the bulk of our app. Here we will have all the classes that add styles beyond structure. Since they are more specific classes, they will be less reusable: a class `main-header` will be applied fewer times than `container`.

# Utilities

Utility classes like `is-error`, `is-centered`, etc., will always override previous styles when applied. Remember, this is the case where we can use `!important` without making our CSS less maintainable.
