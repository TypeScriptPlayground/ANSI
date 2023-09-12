import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to move the cursor one line up, scrolling if needed.
 * @returns Formatted string
 */
export default function upScroll() : string {
    return `${sequences.ESC}M`;
}


