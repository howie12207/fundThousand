const scrollTo = (
    target = '.error-item',
    block: ScrollLogicalPosition = 'center',
    inline: ScrollLogicalPosition = 'center'
) => {
    setTimeout(() => {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth', block, inline });
    }, 0);
};

export const scrollToTop = (
    target = 'body',
    block: ScrollLogicalPosition = 'start',
    inline: ScrollLogicalPosition = 'start'
) => {
    setTimeout(() => {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth', block, inline });
    }, 0);
};

export default scrollTo;
