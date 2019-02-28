# emotion-box-sizing-reset

[box-sizing reset](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) for [Emotion](https://emotion.sh/) CSS-in-JS library.

## Usage

	npm install --save emotion-meyer-reset

### Javascript

```javascript
	import {Global,css} from "@emotion/core";
	import reset from "emotion-box-sizing-reset";

	// …

	<Global
	  styles={css`
	    ${reset}
	    html,
	    body {
	      background: white;
	      min-height: 100%;
	      font-family: Helvetica, Arial, sans-serif;
	      // …
	    }
	  `}
	/>
```

## License

[UNLICENSED (public domain)](./LICENSE)
