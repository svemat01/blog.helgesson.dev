---
title: Making a blog in todays dev world
description: Simple right... or is it?
author: Svemat
created: 2022-04-21
modified: 2022-04-21
tags: {
    "Frontend": {
        color: "#f3a51f",
        textColor: "black"
    },
}
hidden: true
---

<script lang="ts"> 
    import Profile from '$lib/components/Profile.svelte';
</script>

We developers sure do like our blogs don't we? Or atleast many of us do.

They are a great source to find out how to use something or just learn about some new cool thing. It's awesome right?

So of course I had to join in on the devblog train just like my two very good friends, <Profile name='luc' /> and <Profile name='antony' />.
I would definatelly recommend you to check out their blogs after finishing this article!

But who am I then? I have already introduced my friend so now it's time for me!

## Me! 👋

I'm Jakob Helgesson and I am 17 year old super stack developer.

Super stack developer? Yes! It is likely a thing that you have never heard of before, I wouldn't be suprised. The idea is that a super stack developer can build the backend, the frontend but also deploy and make sure the stack is scalable. We work with a little of everything I guess you could say :)

But enough of me, let's get cracking on why and how I built this blog.

## Why? 🤔

We already went over this part a bit before, I like joining in on "new" trends and fun ideas in my friend/dev group ([Devtalk](https://devtalk.dev)).

I also like sharing my thoughts but also help teach people on new cool things so we're gonna be exploring new cool stuff together here in the future which I am greatly looking forward to!

## How we got here

The journey here was kinda speciall but very fun!

When creating a blog in todays developer world there are a huge amount of options. At first I didn't know what to go with [Astro](https://astro.build) per <Profile name='luc' />'s recommendation.
However as you may or may not notice, this website is no longer built in Astro, but more on what I did instead later.
What I did know was that I wanted a statically generated website so any SSR *(or Server Side Rendering)* based systems was of the table.

### SSG vs SSR

I mentioned both SSG and SSR but what are they?

#### Server Side Rendering

A SSR webpage is completly or partially rendered on a server when a user requests the website.
This is often used for more personal websites like social media.

The nice thing with SSR is that the end user gets a pre rendered site so unlike SSG the browser doesn't have to update the website to such a large extent.
This means we can get a very customised page without having to use javascript on the client.

So what are the drawbacks of SSR? Well for starters, the web server now has to do small to big calculations on each website request which of course is more resource expensive.
And secondly it's more expensive to host a SSR:ed website as I will get into in the SSG section next.

#### Static Site Generation

Kinda like SSR we render the webpage on the server, however this time we only do it once, specifically on build time. At build time our server will look at our code/content and render it into the simple HTML, CSS and JS. This allows us to deploy the website to free services such as [Vercel](https://vercel.com) and [Netlify](https://netlify.com) or **Signal** 😜 which I will be talking about in a later blog post.

So what's the drawback here then? The client now has to pickup the work that the server did in SSR and render it to the user. However it is often cheaper or even free for the owner of the site to host.

#### Choosing between SSG and SSR

Choosing betwen SSG and SSR *(or others methods)* is a bit of a tricky one. It depends on the project and the project's needs.

For me personally I think SSG is the best choice as it's the easiest in my case to use.

### Astro

What is [Astro](https://astro.build)? Astro is an SSG *(or Static Site Generator)* which has the goal of outputting as little as possible javascript, in some cases even none.

Astro is really awesome in the way it allows you to combine multiple diffrent frameworks in the same projects.

For the first couple months this project was built with Astro, but since it is still very new on the block, it has big changes coming to it all the time, which don't get me wrong is really awesome, but it came with a few too many breaking changes after a while. And at some point there was to much for me to want to handle, so I had to choose between starting over with a newer version of Astro or looking into something else.

After my amazing time with the super loving community over at the [Astro discord](https://astro.build/chat) where I even ended up winning a community award for being helpful in the support channels and contributing to the project, I was quite sad about leaving Astro but I really wanted to try something new.

Astro is still a very intressting project that I will continue to keep my eyes on and will probably go back to in the future when it's more mature. But now I had to choose what I was going to work with instead.

<!-- My choice ended up being between [Next.js](https://nextjs.org) with React and [SvelteKit](https://sveltekit.org) with Svelte. I ended up with Svelte as I was more familiar with it and it was a lot easier to get started with. -->


### SvelteKit and Svelte

I ended up going with SvelteKit using the static adapter and Svelte but the choice was very close with [Next.js](https://nextjs.org) and React but SvelteKit seemed to have and easier markdown setup.

