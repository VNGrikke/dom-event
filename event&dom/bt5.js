let ul = document.getElementById('list');
var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
document.write("<h2>Danh sách tên:</h2>");
document.write("<ul>");
for (var i = 0; i < names.length; i++) {
  document.write(`<li>${names[i]}</li>`);
}

document.write("</ul>");