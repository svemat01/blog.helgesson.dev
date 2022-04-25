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

First of all, I am not sponsored by Tailscale, but it's also not like most other vpns you know about.

Unlike most other vpns, Tailscale is not used to access the global internet (or atleast usually, more on that later). Instead it is used to create your own mesh network like your own litte LAN but globally accessible.