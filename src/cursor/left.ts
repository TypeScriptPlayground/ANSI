import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor the specified number of columns to the left.
 * @param columns Number of columns to move left. Defaults to `1`.
 * @returns Formatted string
 */
export function left(columns = 1) : string {
    return `${sequences.CSI}${columns}D`;
}
