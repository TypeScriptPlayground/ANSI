export const sequences = {
    /** Escape (`ESC`) - `\x1B` */
    ESC: 0x1b,
    /** Control Sequence Introducer (`ESC [`) - `\x9b` */
    CSI: 0x9b,
    /** Device Control String (`ESC P`) - `\x90` */
    DCS: 0x90,
    /** Operating System Command (`ESC ]`) - `\x9d` */
    OSC: 0x9d
} as const;
