// json2html.js
export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];
  let html = `<table data-user="rasuriharshitha@gmail.com">
    <thead>
      <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
    </thead>
    <tbody>`;
  
  data.forEach(item => {
    html += '<tr>';
    columns.forEach(col => {
      html += `<td>${item[col] || ''}</td>`;
    });
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  return html;
}
