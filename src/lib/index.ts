// place files you want to import through the `$lib` alias in this folder.

import { browser } from "$app/environment";

//
export function setTitle(title: string) {
    if (browser) {
        document.title = title;
    }
}
