export const sequences = {
    /** Escape (`ESC`) - `\x1B` */
    ESC: '\x1b',
    /** Control Sequence Introducer (`ESC [`) - `\x9b` */
    CSI: '\x9b',
    /** Device Control String (`ESC P`) - `\x90` */
    DCS: '\x90',
    /** Operating System Command (`ESC ]`) - `\x9d` */
    OSC: '\x9d'
} as const;
