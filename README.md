# NeuralTaught

Learn how neural networks work by watching one think.

> [!NOTE]
> **The source code of this project is private.** This repository is its public showcase: the
> README, screenshots and every source file with its types and function signatures, but none of the
> code inside them. If you'd like a demo or to talk about the project, open an issue.

NeuralTaught teaches neural networks from first principles, starting with a single neuron and ending with full backpropagation. It comes in two forms:

1. **A terminal course in pure Python.** Eight animated, narrated lessons that you step through in your terminal. Every multiplication, activation and gradient is printed as it happens.
2. **Neural Nexus, a browser app.** The same eight lessons with quizzes, an animated 3D neural sphere, and tools that unlock as you progress. The last tool trains a real network live on XOR, circle and spiral datasets.

Both forms are built from scratch. They use no ML libraries, no NumPy and no frameworks, so every line of the math is there to read.

---

## The lessons

| # | Lesson | What you see |
|---|--------|--------------|
| 1 | What Is a Neural Network? | Layers, neurons and weighted edges, and where the "intelligence" actually lives |
| 2 | Neurons, Weights and Bias | A single neuron computing `z = w·x + b` step by step |
| 3 | Activation Functions | Sigmoid, tanh, ReLU and softmax, and why non-linearity matters |
| 4 | The Forward Pass | A signal flowing input → hidden → output, with every value shown |
| 5 | Loss Functions | MSE and binary cross-entropy: measuring how wrong a prediction is |
| 6 | Backpropagation | The chain rule in action: how much each weight is to blame |
| 7 | The Training Loop | Epochs, learning rate and gradient descent, repeated until loss falls |
| 8 | Full Network Simulation | Pick your own inputs, then watch a 2 → 2 → 1 network predict, train and improve live |

---

## 1. Terminal course

From the menu:

- `1`–`8` opens a lesson
- `A` runs all lessons in order
- `Q` quits

`Ctrl+C` inside a lesson returns you to the menu.

**What makes it different:** the lessons are written as scenes, with narration, "camera" moves, boxes, tables, progress bars and signal-flow diagrams, all rendered with ANSI escape codes. Lesson 8 lets you enter your own inputs, target, learning rate and epoch count, then narrates a full forward and backward pass through a real network before training it in front of you.

---

## 2. Neural Nexus (web app)

An interactive, game-like version of the course that runs in the browser.

**Features**

- **8 guided lessons**, each ending in a quick-check quiz with explanations
- **Unlockable tools**: finishing lessons unlocks new panels
  - **TRAIN** (after lesson 2): run gradient descent live and watch the loss and accuracy charts
  - **ANALYZE** (after lesson 4): inspect hidden-layer activations, weights and output confidence
  - **DATASETS** (after lesson 6): switch between XOR, Circle (inside/outside a ring) and Spiral (two interleaved spirals)
- **Configurable network**: 2–8 hidden neurons, sigmoid, tanh, ReLU or leaky ReLU activations, and a learning rate from 0.01 to 1.0
- **3D neural sphere** backdrop (Fibonacci-sphere layout) and a 2D network view that animates signals forward and gradients backward
- **Guided tutorials** for each tool, a live activity log of the math being computed, and progress saved in `localStorage` so you can resume later

---

## Project structure

```
NeuralTaught/
├── app.py                     Terminal course: splash screen, menu, lesson runner
├── lessons/
│   ├── lesson_01_what_is_nn.py
│   ├── lesson_02_neurons_weights.py
│   ├── lesson_03_activation.py
│   ├── lesson_04_forward_pass.py
│   ├── lesson_05_loss.py
│   ├── lesson_06_backprop.py
│   ├── lesson_07_training_loop.py
│   └── lesson_08_full_simulation.py
├── utils/
│   ├── display.py             ANSI colours, boxes, tables, animations, signal-flow diagrams
│   └── math_utils.py          Activations, derivatives, losses and a TwoLayerNet with forward/backward
└── web/                       Neural Nexus
    ├── index.html
    ├── css/style.css
    └── js/
        ├── math.js            NN engine: activations, forward/backprop, accuracy, XOR/circle/spiral data
        ├── sphere.js          NeuralSphere (3D backdrop) and FlatNetwork (2D lesson view)
        ├── app.js             Lessons, quizzes, tool unlocking, training loop, charts, settings
        └── renderer.js        Earlier canvas renderer (particles, glow, signal packets); not loaded by index.html
```

---

## The math, in one place

Both versions use the same model: a small fully connected network trained with plain gradient descent on mean squared error.

```
forward:   z_h = W_h · x + b_h        a_h = f(z_h)
           z_o = w_o · a_h + b_o      ŷ   = σ(z_o)

loss:      L = ½ (ŷ − y)²

backward:  δ_o    = (ŷ − y) · σ'(z_o)
           δ_h[j] = δ_o · w_o[j] · f'(z_h[j])

update:    w ← w − lr · ∂L/∂w
```

---

## Tech

- **Terminal course:** Python standard library only (`math`, `time`, `random`, `os`, `sys`)
- **Web app:** vanilla HTML, CSS and JavaScript on `<canvas>`, with no build step and no dependencies apart from Google Fonts

## License

© 2026 Christo Dontchev. All rights reserved. The source code is private and is not licensed for
use, copying or distribution; see [LICENSE](LICENSE).
