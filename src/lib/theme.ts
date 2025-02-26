import { createTheme, rem, MantineColorsTuple } from '@mantine/core';

const feldgrau: MantineColorsTuple = [
    "#f3f6f5",
    "#e9e9e9",
    "#cdd3d1",
    "#afbcb6",
    "#95a8a0",
    "#849c92",
    "#7a968b",
    "#678277",
    "#5a7469",
    "#49655a"
];

const pigmentGreen: MantineColorsTuple = [
    '#ecfbec',
    '#ddf1dd',
    '#bce0ba',
    '#97cf95',
    '#79c076',
    '#65b761',
    '#5ab356',
    '#499d46',
    '#3f8b3c',
    '#317930'
];

const onyx: MantineColorsTuple = [

    "#f4f5f5",
    "#e8e8e8",
    "#cecece",
    "#b3b3b3",
    "#9b9b9b",
    "#8d8d8d",
    "#858686",
    "#727374",
    "#636768",
    "#51595c"

];

const tomato: MantineColorsTuple = [
    "#ffece5",
    "#ffd9d0",
    "#fab3a1",
    "#f5896f",
    "#f06644",
    "#ee5029",
    "#ee441a",
    "#d4350e",
    "#bd2d0a",
    "#a62203"
]

export const theme = createTheme({
    colors: {
        // potential theme colors
        pigmentGreen,
        feldgrau,
        onyx,
        tomato,
    },

    shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },

    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: { fontSize: rem(36) },
        },
    },
});
