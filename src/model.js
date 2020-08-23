import image from "./assets/img.jpg";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";
import { css } from "./utils";

export const model = [
  new TitleBlock("Javascript site contsructor", {
    tag: "h1",
    styles: css({
      background: "lightgray",
      color: "blue",
      "text-align": "center",
      background: "linear-gradient(to right, white, grey)",
    }),
  }),

  new ImageBlock(image, {
    styles: "padding: 2rem 0; display:flex; justify-content: center;",
    alt: "my image",
    imageStyles: " width:500px; height:auto;",
  }),

  new TextBlock("Конструируем сайт используя блоки различного типа.", {
    styles: "color: blue; padding-top: 20px; text-align:center",
  }),

  new TextColumnsBlock(
    [
      "Быстро - создавать структуру сайта",
      "Легко - вносить корректировки",
      "Доступно - понятно каждому",
    ],
    { styles: "padding:2rem;font-size:2rem; color: darkgrey" }
  ),
];
