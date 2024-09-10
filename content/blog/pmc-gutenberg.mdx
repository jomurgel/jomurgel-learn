---
title: "Moving on, My Time at PMC"
description: "Talking about the work I did at Penske Media, as much as I can, anyway."
coverImage: "/pmc-gutenberg/cover.jpg"
date: "2024-08-13"
tags: [
  "wordpress",
  "gutenberg"
]
---

Although my time at Penske Media Corporation ([PMC](https://www.pmc.com/)) has come to a close, the work I did there was a pivotal part of my journey. I was hired by PMC in 2021 to help facilitate migration from the Legacy WordPress editor platform onto the new Block Editor. Gutenberg was the code name of this editor, which I may refer to interchangeably.

I won't dive into the details of the Block Editor; you can read about that [here](https://wordpress.org/documentation/article/wordpress-block-editor/), but I will tell you that it fundamentally changed how content was saved, formatted, read, and interacted with in the WordPress admin. While WordPress makes most of this backward compatible, working in  Enterprise WordPress and for many different website uses, some of which were built nearly ten years prior, the way data was saved was anything but standard, adding complexity to the project.

Now, I can't get into strict details because they are PMC's property. Still, I can speak to high-level considerations, some organizational decisions, and my role in the project that lasted nearly a year and a half.

## The Before Times
Before I was hired, the status of the platform update was underway. Work had been done to determine how and what features of the Block Editor would be used, what would be disabled, and how it would be implemented. In retrospect, many of the decisions made are in line with how WordPress Core, specifically the [create-block](https://developer.wordpress.org/block-editor/getting-started/tutorial/) features are set up. Kudos.

The downside is that it still needed to be unified. There needed to be a shared understanding of how Gutenberg worked or how content or files should be organized. Despite rolling out in WordPress 5.0 in late 2019, the Block Editor was still in active development, and as far as PMC was concerned, there was barely a twinkle in their eye. JavaScript and React were also new to most of the engineers. In fact, despite my best efforts, I left the company still having the most extensive understanding of both the custom PMC codebase and the Gutenberg Core codebase.

## I had a lot of work to do.
This is where we put a big old redacted sticker on the post. I can only talk about some of what we built for the sites PMC owns and operates, such as The Rolling Stone, Variety, Hollywood Reporter, Deadline, IndieWire, and others. But here's what I can say:
* The Block Editor implementation was a plugin. All owned and operated brands (some 20 using WordPress) would utilize this plugin and have various features shared throughout.
* They all (at the time) relied on their design system [pmc-larva](https://github.com/penske-media-corp/pmc-larva), which was a consideration. It meant that many core features were unavailable by default and would need to be removed, hidden, or altered. All blocks need to be rendered server-side.
* There needed to be a way to specify which brands utilized which features (such as blocks, filters, sidebars, etc.) within their themes.

## Moving onto Improvement Mode
The initial implementation of the plugin went fairly successfully, enabling the rollout of the new Block Editor to all brands over five weeks. After a few months of performance improvements, understanding how the editorial staff utilized the Block Editor, and really diving into the user experience improvements, we had what was effectively a stable product.

However, I wanted more. We have a new design framework in the works, which introduced new considerations into the mix, and the codebase had bloated over the twelve months of rollout. While I always aim for a DRY (Don't Repeat Yourself) codebase, code bloat happens. Things fall through the cracks, get replaced, or, in many cases, are deprecated in favor of other Core WordPress features.

I was afforded a few months to clean up and rethink how this plugin interacted with the brands. Up to this point, as I mentioned above, the brand themes were responsible for configuring the plugin while the plugin housed all of the features. This ended up causing some slowdowns when features needed to be rolled out or improved. We also only had a little test or validation coverage. While the time allotted to make improvements didn't leave wiggle room for implementing end-to-end testing, it did allow us to rethink a few aspects of the codebase and improve the PHP Unit tests and how we thought about configurations.

So here are the improvements we made:
* We stripped out all of the configurations (in PHP) that lived in the themes and moved them over into the plugin in the form of JSON. This allowed us to centralize brand configurations (which are more straightforward to find and roll out) and define custom [schema](https://json-schema.org/) to validate the JSON. It also meant that they were easier (or even possible in the first place) to consume in JavaScript, which was helpful given that Gutenberg was built on top of React.
* A PHP system was installed to consume these JSON files, allowing other plugins to filter them if necessary.
* The JSON configs were also added to work directly with the [theme.json](https://developer.wordpress.org/themes/global-settings-and-styles/) files. Typically, they were reserved for the WordPress theme, but this addition allowed brands to be defined by individual configurations in the plugin. It also allowed for per-post-type configurations which the core theme.json still needs to support.
* We built a system to centralize code frameworks. That Larva system would eventually be deprecated, and rather than dealing with it at the time that that happens, we pulled all of the code into a module that could be removed entirely without consequence.

## How it Turned Out
Here's where I take a step back with my goggles of retrospect. The Block Editor is a robust new tool. While it did end up having a lot of rollout hiccups, the year and a half between rollout and when PMC had decided to adopt the update was enough time to solidify many of the core features that the Block Editor would bring to the table and in the future. In 2021, we were aware of the goals of WordPress's [long-term roadmap](https://wordpress.org/about/roadmap/). While my task was to take advantage of the existing Larva framework and all of the code that had been built to that point, I should have taken a step back and considered the future of the implementation to avoid some major pitfalls in the future.

Overall, I'm happy with the work I did at PMC. Although I can't talk about many of the awesome features we built there, I know that organizationally and fundamentally, they're in a much better spot for future WordPress improvements than when I started.
