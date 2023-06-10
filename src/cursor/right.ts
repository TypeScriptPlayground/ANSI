import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor the specified number of columns to the right.
 * @param columns Number of columns to move right. Defaults to `1`.
 * @returns Formatted string
 */
export function right(columns = 1) : string {
    return `${sequences.CSI}${columns}C`;
}