---
layout: page
title: Little Virus
description: generative art, creative coding
img: assets/img/virusteaser.png
importance: 3
category: digital art
---

This project is a generative artwork that creates unique virus forms through randomized algorithms. Users can generate new virus morphologies with a single click, exploring the infinite possibilities of digital organism design through the intersection of art, biology, and computation.




<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <iframe 
            src="{{ '/assets/html/cute-virus-interactive.html' | relative_url }}" 
            width="100%" 
            height="700" 
            frameborder="0" 
            style="border-radius: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
        </iframe>
    </div>
</div>
<div class="caption">
    Click the button to generate new random virus morphologies. Save the image through the button on the top-right.
</div>

## Software
P5js

## Mathematical Foundation
The virus shapes are generated using the **Superformula**:
```
r(θ) = (|cos(mθ/4)/a|^n2 + |sin(mθ/4)/b|^n3)^(-1/n1)
```

## Key Features

- **Activity**: Each virus exhibits different levels of activity, with some moving faster and others slower. The animation was designed to mimics the biological behavioral characteristics
- **Morphology**: The outline is generated through the superformula mathematical model
- **Additional Features**: Colors, eyes, and other visual elements are randomly generated

