/* leny/emotion-box-sizing-reset
 *
 * /src/index.js - Box-Sizing Reset for emotion
 *
 * coded by leny@flatLand!
 * started at 28/02/2019
 */

import {css} from "@emotion/core";

export default css`
    html {
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;
