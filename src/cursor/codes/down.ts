import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to move the cursor the specified number of rows down.
 * @param rows Number of rows to move down. Defaults to `1`.
 * @returns Formatted string
 */
export default function down(rows = 1) : string {
    return `${sequences.CSI}${rows}B`;
}
