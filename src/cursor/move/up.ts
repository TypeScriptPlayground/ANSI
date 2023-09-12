import { sequences } from "../../constants/sequences.ts";

/**
 * Moves cursor the specified number of rows up.
 * @param rows Number of rows to move up. Defaults to `1`.
 * @returns Formatted string
 */
export default function up(rows = 1) : string {
    return `${sequences.CSI}${rows}A`;
}
