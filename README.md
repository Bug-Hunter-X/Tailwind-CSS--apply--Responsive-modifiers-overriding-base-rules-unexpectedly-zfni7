# Tailwind CSS @apply Bug: Responsive Modifier Override

This repository demonstrates an unexpected behavior when using Tailwind's `@apply` directive with pseudo-class selectors and responsive modifiers. The responsive modifier seems to override the base rule unexpectedly, even when the screen size doesn't meet the responsive modifier's condition. 

## Bug Description
When applying styles with `@apply`,  a responsive modifier like `lg:` unexpectedly overrides the base rule, even when not applying to the current screen size. 

## Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install necessary dependencies (if any).
3. Observe the unexpected behavior in the provided example code.

## Expected Behavior
The styles should be applied based on the screen size and hover state, with the responsive modifier only taking effect on large screens.

## Actual Behavior
The responsive modifier overrides the base rule on all screen sizes.

## Solution
The solution involves restructuring the CSS to apply the base styles separately and then apply the responsive modifier as a separate rule, or using utility classes directly instead of `@apply`.