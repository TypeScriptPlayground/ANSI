import { sequences } from "../../constants/sequences.ts";

/**
 * Moves the cursor to x (column) and y (row).
 * 
 * Starts with index `x = 0` (most left) and `y = 0` (most top).
 * @param x Screen X position
 * @param y Screen Y position
 * @returns Formatted string
 */
export default function to(x : number, y : number) : string {
    const line = y + 1;
    const column = x + 1;

    return `${sequences.CSI}${line};${column}H`;
}
