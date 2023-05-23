Page({
  build() {
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "Gym Routines",
    });

    text.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      text.setProperty(hmUI.prop.MORE, {
        y: 200,
      });
    });
  },
});
