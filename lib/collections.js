export let Rankings = new Meteor.Collection("Rankings");

export let teacherCategories = [
    "Schülerliebling",
    "Schülerschreck",
    "Korrekturschnecke",
    "Korrekturblitz",
    "Technikneandertaler",
    "Kopiermonster",
    "Während-des-Unterrichts-Kopierer",
    "Sauklaue",
    "Motivationsbündel",
    "immer top vorbereitet",
    "am verplantesten",
    "Wer bin ich und was tue ich hier?",
    "größter Abschweifer",
    "Meister der Klausurersatzleistungen",
    "EVA-Schreck",
    "Ruhe in Person",
    "Stress in Person",
    "Notenwürfler",
    "Pausen-Dieb",
    "best dressed",
    "schönstes Kabinett",
    "Klassenmutter/-vater",
    "Gute Seele",
    "bestes Immunsystem"
];

export let studentCategories = [
    "Lehrerliebling",
    "Lehrerschreck",
    "Labertasche",
    "Klugscheißer",
    "Schleimer",
    "Faultier",
    "größtes Allgemeinwissen",
    "typisch blond",
    "Sprachkrüppel",
    "Nachplapperer",
    "Tollpatsch",
    "Klausur-Zuerst-Verlasser",
    "Fehlstunden-Sammler",
    "Zuspätkommer",
    "Klassenclown",
    "Morgenmuffel",
    "Nobelpreisträger",
    "forever Hotel Mama",
    "Schwiegermutterschreck",
    "Partyanimal",
    "Party-Shuttle",
    "#king/#queen-of-social-media",
    "Diva",
    "Sportskanone",
    "Supertalent",
    "Zocker",
    "Seriensuchti",
    "Everybody's Darling",
    "Stilles Wasser",
    "Führerschein-Zuerst-Verlierer"
];

if (Meteor.isClient)
    Meteor.subscribe("Rankings");