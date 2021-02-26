const __default_theme = 'dark';

export const setTheme = (value) => {
    document.cookie = `theme=${value}`;
}

export const getTheme = () => {
    const cookies = document.cookie.split(";");
    const pos = cookies.findIndex((item) => item === 'theme=light' || 'theme=dark' )
    if(pos !== -1) {
        return cookies[pos].split("=")[1];
    } else {
        // setDefaultThemeCookie and Return
        setTheme(__default_theme);
        return __default_theme;
    }
}