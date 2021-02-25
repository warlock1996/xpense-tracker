const __default_theme = 'light';

export const setTheme = (value) => {
    document.cookie = `theme=${value}`;
}

export const getTheme = () => {
    const cookies = document.cookie.split(";");
    const pos = cookies.indexOf('theme=light') || cookies.indexOf('theme=dark')
    if(pos !== -1) {
        return cookies[pos].split("=")[1];
    }
    // setDefaultThemeCookie and Return
    setTheme(__default_theme);
    return __default_theme;
}