#  Compare Hotwire and React code

This repository illustrates the differences when developing with Hotwire and with React.

You can see what files and code are required with both approaches, and in particular, you will find that Hotwire development requires dramatically less.
With React, you need stuff like JSON APIs, Open API (Swagger documentation), Client-side routers, and Data loaders – With Hotwire, these files are simply unnecessary.

As a result of this compression, Hotwire demands that the HTML templates (ERB files) are owned and written by both Front-end and Back-end developers. The HTML templates will go through multiple stages as both teams incrementally refine the user interface.

This means that close collaboration between Front-end and Back-end is essential for Hotwire development.
I consider this to be a good thing because it increases ownership and commitment across the whole product, usually resulting in a better performing and smoother user interface.

It's also much more fun!!!

## Setup

Assumption: We assume that you have a Ruby and Node environment. 

### Install Ruby gems

```shell
bundle install
```

### Install npm packages

```shell
yarn install
```

### Start Ruby on Rails

```shell
bin/dev
```

Then access http://localhost:3000.
If you may be asked to run pending migrations, press the button and do this. 

### Seed data

To seed the database, run the following command.

```shell
bin/rails db:fixtures:load
```
