import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to move the cursor to the beginning of previous line, the specified number of rows up.
 * @param columns Number of rows to move up. Defaults to `1`.
 * @returns Formatted string
 */
export default function upStart(rows = 1) : string {
    return `${sequences.CSI}${rows}F`;
}
