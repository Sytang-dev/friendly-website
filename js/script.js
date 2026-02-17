const sources=
[
    "https://www.youtube.com/embed/FDWpDo-oqVo",
    "https://www.youtube.com/embed/s856uVi6PeM",
    "https://www.youtube.com/embed/XppFsYRUARA"
];
const randomFunnyIndex = Math.floor(Math.random() * sources.length);
document.getElementById('randomVanessaVideo').src = sources[randomFunnyIndex];