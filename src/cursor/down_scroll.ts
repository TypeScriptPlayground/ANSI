import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor one line down, scrolling if needed.
 * @returns Formatted string
 */
export function downScroll() : string {
    return `${sequences.ESC}D`;
}


