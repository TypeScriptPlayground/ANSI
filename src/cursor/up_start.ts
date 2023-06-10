import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor to beginning of previous line, the specified number of rows up.
 * @param columns Number of rows to move up. Defaults to `1`.
 * @returns Formatted string
 */
export function upStart(rows = 1) : string {
    return `${sequences.CSI}${rows}F`;
}
