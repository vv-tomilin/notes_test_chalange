import { marked } from 'marked';

const options = {
  autofocus: true,
  previewRender: (plainText) => marked.parse(plainText),
};

export default options;
