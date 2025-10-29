---
layout: page
title: Mind Resonator
description: interactive installation, EEG sensor
img: assets/img/mindteaser.png
importance: 1
category: digital art
---


Mind Resonator is an interactive installation that utilizes brainwave technology to capture and interpret people's brainwave patterns. By translating these brainwaves into various visual images, the installation aims to help individuals promote their self-awareness and self-perception.


## Technology

Arduino TGAM brain sensor + Processing

## Concept and Design



**Concept:** The name Mind Resonator combines the concepts of "mind" and "resonator" to convey the idea of exploring the inner world through brainwaves transformed into abstract images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mind1.gif" title="Mind Resonator - Focused State" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mind2.gif" title="Mind Resonator - Transition State" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mind3.gif" title="Mind Resonator - Relaxed State" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Different mental states visualized through brainwave patterns. Left: Focused state with normal facial features and cool tones. Middle: Transition state showing mixed characteristics. Right: Relaxed state with scattered features and dreamy colors.
</div>

**Design:** Attention and relaxation metrics acquried through EEG sensor are used for generating the visual representations. Based on the degree of users' alertness and tension levels, we map users' mental states into visual elements within the picture. The core principle is that when users are more focused and intense, the facial features in the image appear more normal and the color palette adopts cooler tones. Conversely, when users are relaxed and unfocused, the imagery becomes more unconventional—facial features scatter across the canvas and colors become more dreamy and soft. For example, as attention decreases and relaxation increases, the position of the five senses in the image deviates from the normal position, the number of eyes increases, and the eyes widen to reflect the user's state of distraction. Other elements in the image that can be affected by brainwaves include length of facial hair, mouth openness, background color, direction of gaze, etc.

## Demo Video

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/mind.mp4" class="img-fluid rounded z-depth-1" preload="metadata" controls="true" %}
    </div>
</div>
<div class="caption">
    Demonstration of Mind Resonator in action, showing real-time brainwave visualization.
</div>


