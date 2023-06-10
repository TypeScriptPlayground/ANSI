import { sequences } from "../constants/sequences.ts";

/**
 * Request cursor position.
 * @returns Formatted string
 */
export function position() : string {
    return `${sequences.CSI}6n`;
}


