import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to move th cursor the specified number of column.
 * @param columns Column position
 * @returns Formatted string
 */
export default function column(columns : number) : string {
    return `${sequences.CSI}${columns}G`;
}
