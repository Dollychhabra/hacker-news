export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="./main.css">
      </head>
     
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
