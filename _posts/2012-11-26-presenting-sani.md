---
layout: post
title: "Presenting Sani - Just A Blogging Framework"
summary: Sani is a blogging framework designed for Jekyll, to be used on Github Pages with Prose.io. 
published: true
categories: sani
comments: true
---

## I love blogging. 

Having said that I would like to emphasise that I love blogging not blog handling. But as those two come in packages, I have to deal with it. I tried a lot of blogging solutions, Wordpress, Tumblr, Blogger, Octopress and Jekyll-Bootstrap. And frankly I hate them all now.

WordPress is just too clunky to satisfy my needs of a simplistic blog. Tumblr far too minimalistic and its hosted.(I like Self hosting my blogs.) 

Coming to Static blogging frameworks, both Octopress and Jekyll Bootstrap, although awesome blogging frameworks, are far too complex. Even a small change in the theme requires changes in the original theme, then installing the theme and finally generating the site. I can list these complexities on and on but I would refrain from doing that for now.

Another great thing that Jekyll Bootstrap and Octopress don't support is Prose.io. I wrote about it a few months ago.(http://arkokoley.github.com/blog/2012/09/07/hello-prose/)

Octopress and Jekyll Bootstrap the set out to simplify blogging with Jekyll but have rather added on to the problem. 

And with that I introduce: 

#<center>Sani</center>
### <center>Just A Blogging Framework</center>

Sani is a blogging framework designed for Jekyll, to be used on Github Pages with Prose.io. 

To start blogging with Jekyll, you need to write your own HTML templates, CSS, Javascripts and set up your configuration. But with Sani, all you need to do is clone or fork Sani, install dependencies, and you’re set. All else is taken care of.(This is when you are setting up from your own computer.)

Setting up Sani is so easy, it can be done even if you don't have access to the device your regularly use.

Just the following steps are needed to setup a Sani powered blog on GH:

1. Fork [Sani(http://github.com/arkokoley/sani/).
2. Rename the forked repo to 'username.github.com', where username is your username.
3. Log in to Prose.io](http://prose.io). It works with Github, don't worry.
4. Navigate to the newly forked repo and edit the _config.yml.
5. Navigate to _posts/ in that repo, create a new file and start writing.

That's it! Only 5 steps and about 5 minutes to setup a blog from zero. 

### So what is Sani is exactly?

Sani is a bunch of HTML, CSS and Javascript script files along with a Rakefile. The HTML, CSS and JS form the theme while rake gives you automation regarding generating and publishing the blog. Sani is an implementation of what people, who don't use Octopress and Jekyll Bootstrap, use to make do with GH pages.

Sani uses Disqus for comments and a theme designed by [Adrian Artiles](http://adrianartiles.com/). (Much obliged, sir) Also, the rakefile is mostly ripped off from Octopress with some modifications.

### What Else?

**Less Terminal. More Writing.** 
The one thing I hate about Octopress and Jekyll-Bootstrap is the frequent jumps from my favourite text editor to the terminal. This is why Sani makes use of Prose.io which allows posts to be created and edited right from the browser and published directly, without the use of the terminal at all. Even so, Sani packs in the Rakefile for automation in post/page creation and publishing. A complete list of rake commands will be available soon.

**Less Options.**
Unlike other Jekyll based frameworks, Sani is minimalistic and I intend to keep it that way. NO plugins of any kind or support for systems other than GH pages. Minor additions will be accepted and anything heavy and bloated will be let go.

** No learning Curve.**
Sani has been created by a noob (Me! :D) so its code is pretty simple. All there is of the code is a Rakefile and HTML, CSS and JS files that make up the theme. Any theme compatible with Jekyll is compatible with Sani. Sani has been built for People and Jekyll, not the other way round.

### FAQ

**Wait, Who the hell are you?** My name is Gaurav Koley. I'm a 16 year old student. I have been blogging since 2009 and creating websites since then using mostly WordPress and Drupal.

**Wait, didn't [someone] do it before? You stole the idea from them!** Well, they probably did do something like this. But I'm going to do it anyway because I created Sani to suit my need and it does that. Further, development and maintaining Sani will give me the experience of maintaing an Open Source project, which is what Sani is: an Open Source Project. As for stealing ideas, yes, I did steal a lot of things! The theme has been designed by [Adrian Artiles](http://adrianartiles.com). The rakefile was stolen from Octopress. Even the idea of the layout of this post was stolen from [John O'Nolan's Ghost](http://john.onolan.org/ghost/).

**Sounds Cool. Where do I get it?** [Its available on Github](http://github.com/arkokoley/sani). [This Blog](http://arkokoley.github.com) is built using Sani and uses the default theme. Its still a rather unfinished product, but I'd love help from people who would like to see Sani bigger, better and stronger. If you are interested in getting involved, let's chat. I'm at [@arkokoley](http://twitter.com/arkokoley) and [arkokoley@live.in](mailto:arkokoley@live.in).

**I hate it/ hate you/ hate everything.** Point duly noted. But then haters gonna hate.
