```javascript
/* Solution: Separate base and responsive styles */
.my-element {
  @apply hover:bg-blue-500;
}

@screen lg {
  .my-element:hover {
    @apply bg-red-500;
  }
}

/* Alternatively, use utility classes directly */
.my-element {
  hover:bg-blue-500 lg:hover:bg-red-500
}
```