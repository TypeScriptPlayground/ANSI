import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to request the cursor position.
 * @returns Formatted string
 */
export default function position() : string {
    return `${sequences.CSI}6n`;
}


