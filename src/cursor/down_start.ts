import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor to beginning of next line, the specified number of rows down.
 * @param columns Number of rows to move down. Defaults to `1`.
 * @returns Formatted string
 */
export default function downStart(rows = 1) : string {
    return `${sequences.CSI}${rows}E`;
}
