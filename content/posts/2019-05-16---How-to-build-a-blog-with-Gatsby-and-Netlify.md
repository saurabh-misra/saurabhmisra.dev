---
title: How to build a blog with Gatsby and Netlify
date: "2019-05-16T12:49:16.701Z"
template: "post"
draft: false
slug: "/posts/how-to-build-a-blog-with-gatsby-and-netlify"
category: "WEB DEVELOPMENT"
tags:
  - "Gatsby"
  - "Netlify"
  - "Blog"
  - "Web Development"
description: "If you too are a developer like me who wants to quickly spin up a blog and start publishing without worrying too much about hosting costs, etc., then I am sure you will find this article helpful."
---

I recently started working on building a personal blog where I could carelessly document and share my adventures in coding. I love working with React so I was looking forward to using it for building my blog. This is when I came across [Gatsby](https://www.gatsbyjs.org). If you too are a developer like me who wants to quickly spin up a blog and start publishing without worrying too much about hosting costs, etc., then I am sure you will find this article helpful.

### What is Gatsby and why should I use it?

Quick answer: Gatsby is a static-site generator. A static-site generator is basically something that spits out raw HTML, CSS and JS that hosting servers can directly send to browsers without any server-side processing involved. So you don't need PHP or any other server-side scripting language to process and render your web page. You have static web pages already built by the generator ready to be rendered.

So Gatsby is a modern-day site generator based on React. It provides a ton of [features](https://www.gatsbyjs.org/features/) either out of the box or via plugins like CDN, AMP support, PWA support, hot reloading etc. that make building and customizing any kind of website a breeze.

Also, the options for hosting a static-site are plenty and mostly free for starters when you don't have many visitors on your page. You can chose to host your blog on [Github Pages](https://pages.github.com/) which is free and provides many more options as well like custom domains, SSL, etc.

### What is Netlify and why should I use it?

Although Github offers Github Pages as a free hosting service for static sites, that is not really its main area of concern. If your website crosses the restrictions of free usage, Github may notify you of the same and ask you to host your site elsewhere. This is why we use a dedicated hosting provider like Netlify that integrates with your Github codebase and provides a lot of other [features](https://www.netlify.com/github-pages-vs-netlify/) that you expect from a hosting provider.

### Lets get started

With all the new terminology and description of tools taken care of, lets get started with building your brand new blog.

> **Pre-requisites**: Make sure you have installed latest versions of Git, Node, NPM or Yarn.

**Step 1: Install Gatsby**

Use this command in your terminal with administrator privileges to install Gatsby.

```
npm install -g gatsby-cli
```

**Step 2: Deploy starter to Netlify**

[Starters](https://www.gatsbyjs.org/docs/starters/) are basically Gatsby specific boilerplates or templates that quickly setup a specific kind of website like a blog or a shopping website, etc.

For this article, we will be using [gatsby-starter-lumen](http://github.com/alxshelepenok/gatsby-starter-lumen) as a starter template.

Since we are using Netlify, we will first deploy a copy of this starter template to Netlify. Netlify will ask for authorization to access Github. Once you provide it the necessary permissions, it will create a repository in Github where it will store a clone of this starter template. Netlify will also create a sub-domain and point it to this repo.

Visit the starter github repo using the below link and click on the "Deploy to Netlify" button.

https://github.com/alxshelepenok/gatsby-starter-lumen#deploy-with-netlify

Netlify will ask you to authenticate with your Github account and give it access to some permissions. It will also ask for a repository name. Give it any name you like. For this website, I just named the repo with the domain name as _saurabhmisra.dev_. Once you do that, you will be taken to the Netlify Dashboard.

**Step 3: Configure some settings in Netlify**

First thing you will notice is that Netlify will have provided a dummy name for your site, something like - https://wizard-amelia-12345.netlify.com. Lets change that first.

Go to Site Settings->General->Site Details and click on the "Change Site Name" and add a meaningful site name.

Next, we will have to add a user(you) to our site and authorize it. This is because this starter comes with Netlify CMS feature support out of the box. Netlify CMS is basically a simple feature for you to add pages and posts to your site. Basically a stripped down version of Wordpress admin. If you want to access the CMS, you will need a user with which you can login to the CMS and control your site's content. Lets take care of that quickly.

In the Netlify Main Menu, go to Identity and click on "Invite Users" button and specify your email address to invite yourself. Netlify will send you an invitation to access the site you just deployed.

Before you click on the link in the email, you will need to give Netlify some more permissions to access Github otherwise it won't be able to complete your authorization process. To do this, in the Netlify Main Menu, go to Settings->Identity->Services and in the Git Gateway section, click on the "Enable Git Gateway" button and provide the extra permissions to Netlify. Now when you access the invitation link in the email, your user will be completely authorized.

**Step 4: Clone github repo to your local system**

In a terminal with administrator privileges, execute the following commands:

```
> git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
> cd [REPO_NAME]
> yarn
```

Once all the node modules are done being installed, execute the following command:

```
gatsby develop
```

This will start a development server on http://localhost:8000/.

You will also be able to access the Netlify CMS on http://localhost:8000/admin.

**Step 5: Update starter template content with your info**

Lets replace the default content in the starter template with your own.

First, take a square shaped thumbnail of your profile headshot and replace "photo.jpg" at _[REPO_NAME]/static_ folder.

Next, open the _config.js_ file at the root of your repo and replace the dummy text with your own personal info.

After you make changes to your config file, the changes might not automatically reflect on your browser until you re-run `gatsby develop` command.

Next, in case you want to remove some icons from the contact list, remove them from the _config.js_ file and then also from _/src/hooks/use-site-metadata.js_.

Next, update the content in _/content/pages/about.md_ and _/content/pages/contacts.md_.

After this, add some new posts or articles in the _/content/posts/_ folder as Markdown files. Keep the naming format consistent with the sample post files provided in the starter template. Also make sure, you add post metadata inside your new markdown file in the same format as provided in the sample markdown files.

Delete the sample files once you are done referencing them.

**Step 6: Push changes to git**

Run `git push` to push your changes to the git repo. Netlify will automatically update your site's static content from your github repo as soon as it is updated. Visit your Netlify site to verify that your changes have taken effect.

And that's it. Congratulations! You just published your very own personal blog for free. Go crazy publishing!

---

**References**

https://www.gatsbyjs.org/docs/

https://www.gatsbyjs.org/tutorial/

https://github.com/alxshelepenok/gatsby-starter-lumen
