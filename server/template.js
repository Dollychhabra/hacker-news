// export default ({ body, title }) => {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>${title}</title>
//         <link rel="stylesheet" href="./main.css">
//       </head>

//       <body>
//         <div id="root">${body}</div>
//       </body>
//     </html>
//   `;
// };

export default function renderFullPage({ body, title }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="./src/index.scss">
      </head>
     
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
}
