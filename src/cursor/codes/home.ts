import { sequences } from "../../constants/sequences.ts";

/**
 * Generates formatted string to move the cursor to home position (0, 0).
 * @returns Formatted string
 */
export default function home() : string {
    return `${sequences.CSI}H`;
}

