import { sequences } from "../../constants/sequences.ts";

/**
 * Moves cursor one line up, scrolling if needed.
 * @returns Formatted string
 */
export default function upScroll() : string {
    return `${sequences.ESC}M`;
}

