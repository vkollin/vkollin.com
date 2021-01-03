export const navObserver = (navigation: HTMLElement) => {
    const sentinel = document.createElement('div');
    sentinel.className = 'sentinel'

    document.body.insertBefore(sentinel, document.body.firstChild)

    const observer = new IntersectionObserver((e) => {
        if (!e[0].isIntersecting) {
            navigation.classList.add('sticky')
        } else {
            navigation.classList.remove('sticky')
        }
    })

    observer.observe(sentinel);
};
