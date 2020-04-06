import Typography from "typography"
const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.5,
    headerFontFamily: [
        "Red Hat Display",
        "sans-serif",
    ],
    bodyFontFamily: ["Roboto", "sans-serif"],
    googleFonts : [
        {
            name: 'Red Hat Display',
            styles: [
                '400',
                '600'
            ],
        },
        {
            name: 'Roboto',
            styles: [
                '400'
            ],
        }
   ]
});
export default typography