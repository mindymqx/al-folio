---
layout: page
title: Little Virus
description: generative art, creative coding
img: assets/img/virusteaser.png
importance: 3
category: digital art
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

## Interactive Experience

This project is a generative art installation that creates unique virus forms through randomized genetic algorithms. Users can generate new virus morphologies with a single click, exploring the infinite possibilities of digital organism design through the intersection of art, biology, and computation.

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3 mt-md-0">
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
    Interactive Generative Art - Click the button to generate new random virus morphologies. Save the image through the button on the top-right.
</div>

## Technical Implementation

This project combines several advanced computational concepts:

### Genetic Algorithm Framework
- **DNA Encoding**: Each virus is represented by a 15-gene chromosome
- **Random Generation**: New random seeds create unique morphologies
- **Superformula Mathematics**: Organic shape generation using mathematical formulas
- **Visual Diversity**: Each refresh creates completely different forms

### Mathematical Foundation
The virus shapes are generated using the **Superformula**:
```
r(θ) = (|cos(mθ/4)/a|^n2 + |sin(mθ/4)/b|^n3)^(-1/n1)
```

### Interactive Features
- **One-Click Generation**: Single button creates new random forms
- **Instant Refresh**: Immediate visual feedback with new morphologies
- **Infinite Variety**: Each generation is completely unique
- **Simplified Interface**: Focus on visual exploration rather than complex controls

## Key Features

- **🧬 Genetic Diversity**: Each virus has unique genetic traits
- **🎨 Visual Variety**: Completely different shapes and colors each refresh
- **🖱️ One-Click Interaction**: Simple button generates new forms
- **🔄 Instant Refresh**: Immediate new morphologies
- **♾️ Infinite Possibilities**: Endless variety of virus designs

## Design Philosophy

This project explores the intersection of **generative art**, **mathematical beauty**, and **simplified interaction**. By providing a single button interface, it focuses user attention on the visual exploration of infinite morphological possibilities rather than complex controls.

The "cute" aesthetic subverts traditional representations of viruses, transforming potentially threatening biological entities into playful, interactive art objects that invite exploration and wonder at the infinite variety of mathematical form generation.

## Development Process

The project was developed using:
- **p5.js** for creative coding and visualization
- **Genetic Algorithm** implementation for evolutionary processes
- **Superformula mathematics** for organic shape generation
- **Interactive design** principles for user engagement

## Future Enhancements

- **Multi-species Evolution**: Multiple virus types competing
- **Environmental Factors**: External influences on evolution
- **Sound Integration**: Audio feedback for interactions
- **Data Visualization**: Real-time genetic analysis
- **Export Functionality**: Save evolved virus designs
