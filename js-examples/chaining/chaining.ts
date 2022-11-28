interface I$ {
    addClass: (cssClass: string) => object,
    toggleClass: (cssClass: string) => object,
    removeClass: (cssClass: string) => object,
    width: (width: string) => object,
    height: (height: string) => object,
    html: (html: string) => object,
}

const $ = function(selector: string):I$ | null {
    let element: HTMLElement | null = document.querySelector(selector)
    if (element) {
        return {
            addClass(cssClass: string):object {
                element!.classList.add(cssClass)
                return this
            },
            toggleClass(cssClass: string):object {
                element!.classList.toggle(cssClass)
                return this
            },
            removeClass(cssClass: string):object {
                element!.classList.remove(cssClass)
                return this
            },
            width(width: string):object {
                element!.style.width = width
                return this
            },
            height(height: string):object {
                element!.style.height = height
                return this
            },
            html(html: string):object {
                element!.innerHTML = html
                return this
            }
        }
    }
    return null
}
