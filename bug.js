```javascript
// Example showing an unexpected behavior when using Tailwind's 
// `@apply` directive with a pseudo-class selector and a responsive modifier.

.my-element {
  @apply hover:bg-blue-500;
  @apply lg:hover:bg-red-500;
}

/* Expected behavior:
 * On hover, the element should have a blue background in all screen sizes.
 * On large screens, when hovering, the background should change to red.
 *
 * Actual behavior:
 * The `lg:hover:bg-red-500` seems to override `hover:bg-blue-500` even on small screens,
 * resulting in red background on hover, regardless of screen size.
*/
```