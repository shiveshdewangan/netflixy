Animations can turn a boring application into one that sparks life - quickly!

That's exactly what you're to do here.

If you check the final result, you'll also notice that the app "feels faster" upon route changes now.
That's another benefit of using animations - when done rightly.

This is just a CSS thing. There's little or no Javascript involved.

If you check `StyledPoster.js` you'll find the animation for the poster image:

```js
const show = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

...
opacity: 0;
  transform: translateY(-100px);
  animation: ${show} 500ms forwards;
  animation-delay: ${props =>
    props.index ? `${props.index / 10}s` : "initial"}

...
```

Very little code change for a subtle effect.

Note that the `index` prop is passed upon iterating through the `movies` data in `Movies.js` line 61. have a look.

Also, in `MovieDetails.js` you find the following within the `StyledMovieInfo` component:

```js
  &,
  & > * {
    transform: translateX(-150px);
    opacity: 0;
    animation-name: ${show};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
```

This makes sure that the animation values are set for the parent element and all its children.

Then, in the children elements, I set different animation durations.

e.g.

```js
const StyledMovieDesc = styled.div`
  ... animation-delay: 0.4s;
`;
const StyledSmallBtn = styled.a`
  ... animation-delay: 0.5s;
`;
```

GO have a look at the code, and enjoy the animations :)
