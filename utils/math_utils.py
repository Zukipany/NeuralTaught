# Source code is private. This file shows only its classes and function signatures.

"""
math_utils.py  —  Pure-math helpers for NeuralTaught.
All activation functions, their derivatives, loss functions, and gradient helpers.
"""
import math


def sigmoid(x):
    """Smooth squash to (0, 1)."""
    ...


def sigmoid_deriv(x):
    """d/dx sigmoid(x) = sigmoid(x) * (1 - sigmoid(x))."""
    ...


def tanh_act(x):
    """Centered squash to (-1, 1)."""
    ...


def tanh_deriv(x):
    """d/dx tanh(x) = 1 - tanh(x)^2."""
    ...


def relu(x):
    """Hard gate: pass positives, block negatives."""
    ...


def relu_deriv(x):
    """d/dx ReLU(x) = 1 if x > 0 else 0."""
    ...


def softmax(xs):
    """Competition stage: turn a list of scores into a probability distribution."""
    ...


def mse(pred, target):
    """Mean Squared Error: 0.5 * (pred - target)^2."""
    ...


def mse_deriv(pred, target):
    """dL/d(pred) for MSE."""
    ...


def binary_cross_entropy(pred, target):
    """
    Binary cross-entropy loss.
    pred is clamped to avoid log(0).
    """
    ...


def bce_deriv(pred, target):
    """dL/d(pred) for binary cross-entropy."""
    ...


class TwoLayerNet:
    """
    A minimal 2-input → 2-hidden → 1-output network for simulation lessons.
    Uses sigmoid everywhere for simplicity.
    """

    def __init__(self, w_h=None, b_h=None, w_o=None, b_o=0.0):
        ...

    def forward(self, x1, x2):
        ...

    def backward(self, target, lr=0.1):
        ...
