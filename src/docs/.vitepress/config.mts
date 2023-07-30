import {
    defineConfig
}
from "vitepress";

function generateSide() {
    let datas = fs.readdirSync('../bible')
    let data = {}
    for (var i of datas) {
        data[i] = fs.readdirSync(i)
    }
    for (var i in data) {
        let all = {}
        all.text = i
        all.collapsible = true
        all.items = []
        for (var e of data[i]) {
            all.items.push({text:`第${e.split(".")[0]}章`, link:`/${i}/${e}`})
        }
        re.push(all)
    }
    return re
}
export
default defineConfig({
    lang: "zh-CN",
    title: "Holy Bible",
    description: "the Holy Bible for Web",
    head: [
        ["link", {
            rel: "preconnect",
            href: "https://unpkg.com"
        }],
        ["link", {
            rel: "dns-prefetch",
            href: "https://unpkg.com"
        }],
        ["script", {
            src: "https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        }], ],
    lastUpdated: true,
    markdown: {
        theme: "one-dark-pro",
        lineNumbers: true,
    },
    themeConfig: {
        logo: "",
        nav: [{
            text: "文档",
            link: "/intro"
        }, {
            text: "找我",
            items: [{
                items: [{
                    text: "GitHub",
                    link: "https://github.com/Lisk809"
                }, {
                    text: "QQ",
                    link: "https://qm.qq.com/cgi-bin/qm/qr?k=z_MhzXU1RM0HEnIOBmXiERGNuDxpHglV&noverify=0",
                }, ],
            }, ],
        }, ],
        sidebar: [{
            text: "开始",
            collapsible: true,
            items: [{
                text: "简介",
                link: "/intro"
            }],
        }, {
            text: "bible",
            collapsible: true,
            items: [generateSide()],
        }],
        outline: 2,
        outlineTitle: "大纲",
        socialLinks: [{
            icon: "github",
            link: "https://github.com/Lisk809/Lisk"
        }],
        footer: {
            message: '<a href="https://github.com/Lisk809/bible">the Project</a>使用 <a href="https://github.com/KiviBotLab/docs/blob/main/LICENSE">MIT</a> 协议开放源代码\nPower by <a href="https://vitepress.docschina.org/">VitePress</a><br>Made with Love❤️and confidence.',
            copyright: 'Copyright © 2022-PRESENT <a href="https://github.com/Lisk809">Lisk</a>',
        },
        lastUpdatedText: "上次更新",
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        editLink: {
            pattern: "https://github.com/Lisk809/bible/edit/main/src/docs/:path",
            text: "在 GitHub 上编辑",
        },
    },
});