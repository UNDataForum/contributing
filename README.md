# @undataforum/contributing

This is the repository for https://contributing.undataforum.org.

In order to author content run

    yarn start

or

    docker run --rm -it -v ${pwd}:/contributing -w /contributing -p 8080:8080 mhart/alpine-node:8 yarn start

and author away with [MDX](https://mdxjs.com/).

In order to build the website run

    yarn run build

or

    docker run --rm -it -v ${pwd}:/contributing -w /contributing mhart/alpine-node:8 yarn run build
