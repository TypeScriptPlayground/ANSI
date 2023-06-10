import { sequences } from "../constants/sequences.ts";

/**
 * Moves cursor to home position (0, 0).
 * @returns Formatted string
 */
export function home() : string {
    return `${sequences.CSI}H`;
}
