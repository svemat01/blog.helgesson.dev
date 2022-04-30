---
title: Tailscale, a better VPN?
description: Let's find out what Tailscale is and how it works!
author: Jakob Helgesson
published: 2022-04-21
modified: 2022-04-21
tags: {
    "Network": {
        color: "#e5f31f",
        textColor: "black"
    },
}
hidden: true
---

<script lang="ts"> 
    import Profile from '$lib/components/Profile.svelte';
</script>

First of all, I am not sponsored or endorsed by Tailscale (hit me up tho Tailscale 😜). However it is really awesome and I plan to make you feel the same today.

Unlike most other VPNs, Tailscale is not used to access the global internet *(or at least usually, more on that later)*. Instead it is used to create your own mesh network like your own little LAN but globally accessible. If you have ever used LogMeIn Hamachi to play games or the like with your friends, you will probably know what I'm talking about.

For me the most amazing thing about Tailscale is how it is even able to work behind firewalls *(Unless tailscale is specifically blocked)*. This means that you could access a device that normally wouldn't allow vpn hosting as it would be blocked by the firewall. So yes this finally means you could hide a server at your school, however I do not condone it.

## How is Tailscale built?

Tailscale is basically built upon wireguard, an amazing protocol/technology for VPNs. By Tailscale building upon this, we get the amazing speeds and latency that wireguard brings to the table.

How Tailscale works on a deeper level is quite a large but however interesting topic. And it seems like the people over at Tailscale agrees, so they decided to make a [blog post](https://tailscale.com/blog/how-tailscale-works/) describing how Tailscale works. I would really recommend reading it if you are more interested in the deeper levels. 

But of course I will go thru a bit more of an simplified version of that blog post.

So essentially Tailscale is built upon two central systems/planes.

* The coordination service
* The DERP network

### The coordination service

Most of the data that travels thru Tailscale is actually getting sent via peer to peer networks that the coordination service helps administer and setup.

This has the following main functionalities.

* Log In
* Public key box, stores all the public encryption keys for the nodes to be able to communicate.
* Configure ACLs (Access Control Lists), access settings for your tailnet.

The coordination server is very light which allows Tailscale to be able to offer it with a free plan. Oh yeah, did I forgot to mention that the basic plan is **free** forever and is most likely more than most people need. It's awesome!

### The DERP network

I talked about how Tailscale usually operates using peer to peer connections, this is done by various means of NAT transversal, however when this isn't possible they have built up a network called the DERP network. This network works as a relay, basically your device connects to it and says I wanna go to my second device and it just sends forward the data. Of course this data has been encrypted and Tailscale can't actually see the data.

## Installing Tailscale

Let's get started by installing tailscale on your computer. Since installation instructions can sometimes change I recommend you to instead visit [their download page](https://tailscale.com/download/). They have a handy installation script at the page I linked to but if you are on linux, your package manager might already have tailscale added, but your result may vary.

For me *(I use Arch btw)* it was as simple as telling pacman to install tailscale :)

```shell
sudo pacman -S tailscale
```

## Usage

As I myself as previously stated is an arch linux user, I am going to go thru how this works on Linux. For other OS's, please refer to the [Tailscale's documentation](https://tailscale.com/kb/).

::: note
On Linux, you sometimes have to manually enable the daemon for tailscale, called `tailscaled`. Normally this is done via systemd, but this may vary depending on your circumstances. In the case of systemd, this is how it's done.

```shell
sudo systemctl enable tailscaled 
sudo systemctl start tailscaled
```
:::

We are going to go thru the following.

* Connecting to the network
* Show other devices on the network
* Advertise exit node

### Setting it up

The steps were going to take are

* Creating an account
* Connecting to the network

#### Sign Up

Before we can connect to the network we need to create an account. Either hop over to [the sign up page here](https://login.tailscale.com/start) or find the link on their website yourself :)

#### Connecting to the network

To connect your device to your tailnet, you should run the following command which will return a link for you to open in your browser where you authenticate.

```shell
 sudo tailscale up
### test

https://login.tailscale.com/a/xxxxxxxxxxx
```
