<!--{
  "title": "The Swocial manifesto",
  "status": null,
  "previous": null,
  "next": null
}-->
# The Swocial manifesto

There is a growing trend of walled gardens on the Internet. At the same time there's an increased exposure of information about its inhabitants. The driving forces behind these trends does not seem to be about protecting the users and creating a better experience for them, but rather about increasing value for stockholders and exposure for advertisers.

Walled gardens have their uses, but they need to serve the needs of the private citizens, and not the needs of advertisers, corporations and governments and others that may have interests misaligned with those of the users. In other words, walled gardens are good if we are the gardeners.

## The book

[The Swocial project](http://github.com/swocial) seeks to empower users with tools that enable them to handle their data, administrate them across service providers, and to let their data be utilized in new and innovative ways. There are many facets of this, consisting of many, intertwined challenges, which is why I've decided to lay them out in this manifesto.

It is a book that's in the making, and if you want to start reading what's available, start with the [Introduction](http://swocial.github.io/intro) (in time it will also be available in other formats, such as PDF, EPUB and Mobi, but for now it's only available as a web page). If you're wondering about the status of chapters (i.e. "How finished are they?"), please read [the wiki](https://github.com/swocial/swocial.github.io/wiki).

The book will be structured into two parts; the first part will explain some fundamental concepts necessary to understand to follow the ensuing discussion. The second part will dwell on the different aspects of a distributed social network that needs to be secure, ensure a user's privacy, be easy to use and provide a good user experience, and offer a flexible range of means to distribute and consume data. It will also take into account that such an environment needs to offer incentives to service providers, i.e. allow them to make profit, as all systems are somehow bound to economics (financial surplus being one for service providers).

The Internet is a wonder of technological and cultural achievement. It is also - albeit a fact disliked by many computer scientists - very human. One aspect of this is the social networks, where a ever-growing number of people decides to partake and share their lives.

I hope that this book can be part of a movement that envisions a world where the power of the share lies with users that do it - not the corporations and governments that aggregate it for their own profits.

### How to generate the book

For now only Markdown-to-HTML is supported. In the future scripts for generating PDF, EPUB and MOBI will also be available.

    grunt github
    grunt watch:gh

The first command generates the file index.html from README.md, i.e. this text that you're reading now. It also takes all the chapters, which are located in `book/xx/y.md`, where *xx* is the two-siffered number of the chapter, and *y* is the name of the chapter in [Camel case](http://en.wikipedia.org/wiki/CamelCase). The chapters are flattened to the root folder, so that they can be easily linked.

Meta-information about each HTML file are expressed in a comment block, which contains a JSON object, located in the top of each MD file. Below is an example:

    <!--{
      'key': 'value'
    }-->

In addition to generating the HTML files, the first command also generates the CSS files necessary. These are generated using [Sass](http://sass-lang.com/), a CSS pre-processor.

The second command automates the first so that whenever you save a MD or a SCSS file, it will run the first command.

## Ways to contribute

There are several ways to contribute to the project:

* Create a project that's based on ideas presented in this manifesto, and I'll add as part of [the Swocial project](https://github.com/swocial).
* Disagree with the manifesto? [Create an issue](https://github.com/swocial/swocial.github.io/issues).
* Want to contribute text? [Send a pull request](https://github.com/swocial/swocial.github.io/pulls).
* Want to connect? Contact me on [Twitter](https://twitter.com/megoth) or by [email](mailto:arne.hassel@gmail.com).

Do note that the book holds no license (or rather, this repository hasn't listed any), and is free to use as you wish. As ideas should be.