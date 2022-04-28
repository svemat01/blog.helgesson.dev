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

Unlike most other vpns, Tailscale is not used to access the global internet *(or atleast usually, more on that later)*. Instead it is used to create your own mesh network like your own little LAN but globally accessible. If you have ever used LogMeIn Hamachi to play games or the like with your friends, you will probably know what I'm talking about.

The cool thing about Tailscale is that it uses wireguard in the background so we get the same amazing speeds and latency as with a normal wireguard vpn. However what's different here is that Tailscale orchestrates the initial communication between all your Tailscale devices. In this initial communication your devices tell Tailscale what the possible ways to contact them are and the keys necessary to do so. In some instances, the Tailscale servers may also be used to relay the connection when there are firewalls or similar devices blocking direct communication.

## Installing Tailscale

Let's get started by installing tailscale on your computer. Since installation instructions can sometimes change I recommend you to instead visit [their download page](https://tailscale.com/download/). They have a handy installation script at the page I linked to but if you are on linux, your package manager might already have tailscale added, but your result may vary.

For me *(I use Arch btw)* it was as simple as asking pacman :)

```shell
sudo pacman -S tailscale
```

On Linux, you sometimes have to manually enable the daemon for tailscale, called `tailscaled`. Normally this is done via systemd, but this may vary depending on your circumstances.

```shell
sudo systemctl enable tailscaled 
sudo systemctl start tailscaled
```

## Usage

