var form, menu, footer;

window.addEventListener('load', () => {
    form = document.getElementById('form');
    menu = document.getElementById('menu');
    footer = document.getElementById('footer');

    window.addEventListener('resize', resizeForm);
    window.addEventListener('onorientationchange', resizeForm);
    resizeForm();
});

function resizeForm() {
    var formHeight = getHeight();
    formHeight -= menu.clientHeight;
    formHeight -= footer.clientHeight;

    form.style.height = `${formHeight}px`;
}

function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
}