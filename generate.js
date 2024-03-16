#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const langs = {
    "en": require("./lang/en.json"),
    "hu": require("./lang/hu.json"),
    "de": require("./lang/de.json")
}

const original = fs.readFileSync("index.html").toString()

const generateLang = (lang) => {
    console.log(lang)
    l = langs[lang]

    let text = original + ""
    Object.keys(l).forEach(key => {
        text = text.replaceAll(`|${key}|`, l[key])
    });

    text = text.replaceAll("|locale|", lang)
    text = text.replaceAll(`|activateon-${lang}|`, "active")

    fs.writeFileSync(path.join(__dirname, "docs", `${lang}.html`), text)
}



Object.keys(langs).forEach(lang => generateLang(lang))
fs.cpSync(path.join(__dirname, "assets"), path.join(__dirname, "docs", "assets"), {recursive: true})
fs.cpSync(path.join(__dirname, "style.css"), path.join(__dirname, "docs", "style.css"))
fs.cpSync(path.join(__dirname, "docs", "en.html"), path.join(__dirname, "docs", "index.html"))
fs.cpSync(path.join(__dirname, "docs", "en.html"), path.join(__dirname, "docs", "404.html"))