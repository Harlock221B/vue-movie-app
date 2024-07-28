export function loadFonts() {
  import('webfontloader').then(WebFont => {
    WebFont.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900&display=swap'],
      },
    });
  });
}
