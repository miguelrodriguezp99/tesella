# Tesella - User Guide

## What is Tesella?

Tesella is a CSS Grid and Tailwind layout generation tool designed to help developers easily create custom grid structures. The application allows you to visually configure a grid and automatically generates the corresponding code in HTML, CSS, JSX, and Tailwind formats.

## Quick Start Guide

### 1. Grid Configuration

At the top of the application, you'll find controls to configure your grid:

- **Columns**: Define the number of columns in your grid
- **Rows**: Define the number of rows in your grid
- **Row Height**: Set the height of each row (in pixels)
- **Gap**: Set the space between grid elements (in pixels)

Use the `+` and `-` buttons to adjust these values according to your needs.

### 2. Working with Grid Elements

- **Add elements**: Click on any empty cell in the grid to add a new element
- **Move elements**: Drag any element to reposition it within the grid
- **Resize**: Use the resize handle in the bottom right corner of each element to adjust its size
- **Remove elements**: Click the `X` button in the top right corner of any element to delete it

### 3. Getting the Code

The bottom section of the application displays the generated code for your current grid. You can access different formats through tabs:

- **HTML**: HTML code with CSS classes to recreate your grid
- **JSX**: React/JSX code to implement your grid in React applications
- **CSS**: CSS styles for your grid structure
- **Tailwind**: HTML code using Tailwind CSS utility classes

To copy any code block:

1. Click the copy button in the top right corner of the code block
2. The code will be copied to your clipboard
3. A confirmation toast will appear

## Main Features

- Visual grid editor with drag-and-drop functionality
- Real-time code generation in multiple formats
- Responsive design preview
- Copy to clipboard functionality
- Customizable grid parameters (columns, rows, height, gap)
