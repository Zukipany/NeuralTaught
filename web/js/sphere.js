// Source code is private. This file shows only its classes and function signatures.

class NeuralSphere {
  constructor(canvas) { /* private */ }
  _buildLessonNodes(r) { /* private */ }
  _canvasXY(e) { /* private */ }
  _hitLesson(cx, cy) { /* private */ }
  _onClick(e) { /* private */ }
  _onHover(e) { /* private */ }
  resize() { /* private */ }
  _fibSphere(n, radius) { /* private */ }
  _buildEdges(maxDist) { /* private */ }
  setMode(mode) { /* private */ }
  _project(x3, y3, z3) { /* private */ }
  render(tMs) { /* private */ }
  _drawLessonNodes(ctx, t) { /* private */ }
  _spawnSignal() { /* private */ }
  _updateSignals(proj, t) { /* private */ }
  _withAlpha(col, a) { /* private */ }
  _parseColor(col) { /* private */ }
}

class FlatNetwork {
  constructor(canvas) { /* private */ }
  resize() { /* private */ }
  _buildLayout() { /* private */ }
  setNet(net) { /* private */ }
  setActivations(inputs, hidden, output) { /* private */ }
  addSignal(fromG, toG, value = 0.7, color = '#00e5ff') { /* private */ }
  addBpWave(fromG, toG, grad = 0.3) { /* private */ }
  clearAll() { /* private */ }
  render(dt = 0.016) { /* private */ }
  _drawLayerLabels(ctx) { /* private */ }
  _drawEdges(ctx) { /* private */ }
  _drawNodes(ctx) { /* private */ }
  _actRGB(a) { /* private */ }
  _drawSignals(ctx) { /* private */ }
  _drawBpWaves(ctx) { /* private */ }
  _flashNode(idx) { /* private */ }
  _hexRGB(hex) { /* private */ }
  signalsDone() { /* private */ }
  bpWavesDone() { /* private */ }
}
