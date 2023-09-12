export const codes = {
    /** Terminal bell - `\a` */
    BEL: 0x07,
    /** Backspace - `\b` */
    BS: 0x08,
    /** Horizontal TAB - `\t` */
    HT: 0x09,
    /** Linefeed (newline) - `\n` */
    LF: 0x0a,
    /** Vertical TAB - `\v` */
    VT: 0x0b,
    /** Formfeed (also: New page NP) - `\f` */
    FF: 0x0c,
    /** Carriage return - `\r` */
    CR: 0x0d,
    /** 
     * Escape character - `\e`
     * 
     * **Note:** Some control escape sequences, like `\e` for ESC, are not guaranteed to work in all languages and
     * compilers.
     * 
     * It is recommended to use the decimal, octal or hex representation as escape code.
     */
    ESC: 0x1b,
    /** Delete character - None */
    DEL: 0x7f
} as const
