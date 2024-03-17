---
title: 'Post with an image '
description: "Eleventy's own build-time image transformations. Find more info on11ty.dev/docs/plugins/image/ and edit settings in config-folder."
date: 2022-10-12
tags: ['image', 'feature']
image: './src/assets/images/gallery/asturias-1.jpg'
alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
credit: Lene took this photo.
---

This starter uses Eleventy's build-time image transformations.

Find more info on https://www.11ty.dev/docs/plugins/image/ and edit settings in `config/shortcodes/image`.

## Syntax

In the most basic version it contains the path to the image, alt text (can be an empty string if the image is decorative), and may hold a caption.

{% raw %}

```jinja2
{% eleventyImage "path to image", "alt text", "caption text" %}
```

{% endraw %}

It defaults to `loading = 'lazy'`, the picture element gets its set of images from `widths = [440, 880, 1024, 1360]` and compares to a condition of `90vw`.

If you want to be very specific, you can pass in manually all the conditions, add `null` to skip.

The class names are passed in the outer container, the `<picture>` or `<figure>` element (`<figure>` is added if you set a caption).

{% raw %}

```jinja2
{% eleventyImage "path to image", "alt text", "caption text", "eager", "class names", "(min-width:30em) 50vw, 100vw", [200, 400] %}
{% eleventyImage "path to image", "alt text", null, "eager" %}
```

{% endraw %}

### Example image with a caption

{% raw %}

```jinja2
{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}
```

{% endraw %}

{% eleventyImage "./src/assets/images/gallery/asturias-2.jpg", "Close-up of a delicate white flower with a yellow center, surrounded by green leaves", "Jasmine nightshades blooming in July" %}

### Example image with all the arguments


{% eleventyImage "./src/assets/images/blog/PIA08386.tif", "The preview for social media", "An interesting caption text." %}

{% eleventyImage "./src/assets/images/blog/stairs.jpg", "The preview for social media", "An interesting caption text." %}



{% raw %}

```jinja2
{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", null, "lazy", "class-that-does-nothing", "(min-width:30em) 50vw, 100vw", [200, 400] %}
```

{% endraw %}

{% eleventyImage "./src/assets/images/gallery/asturias-3.jpg", "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains", null, "lazy", "class-that-does-nothing", "(min-width:30em) 50vw, 100vw", [200, 400] %}

## Markdown sytnax

Thanks to the [markdown-it-eleventy-img](https://github.com/solution-loisir/markdown-it-eleventy-img) package markdown also has it own image syntax. `src` is already prepended here, see `config/plugins/markdown.js`.

```markdown
![alt text](/path/to/image)
![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg)
```

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green gras](/assets/images/gallery/asturias-4.jpg)

<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/v1709828779/plane-landing_o1twzy.jpg" alt="" class="cld-responsive">
<p class="photo-credit">Photo by <a href="https://unsplash.com/@zhpix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pascal Meier</a> on <a href="https://unsplash.com/photos/white-biplane-UYiesSO4FiM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>

<img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='cld-responsive' data-src='https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,w_auto/alley.jpg?_a=BAMHUyLRA'/> 