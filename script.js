function drawCircle(canvasId, percent, color, textColor="#000") {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  let radius = canvas.width / 2 - 8;
  let lineWidth = 6;
  let startAngle = -0.5 * Math.PI;
  let endAngle = startAngle + (2 * Math.PI * percent / 100);
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;

  // الخلفية الرمادي
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  // الدائرة الملونة
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  // النص
  ctx.fillStyle = textColor;
  ctx.font = "bold 14px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(canvasId.toUpperCase(), centerX, centerY);
}

// رسم الـ Skills
drawCircle("Laravel", 90, "#f57c00", "#000");   // Ai
drawCircle("php", 75, "#2196f3", "#000");   // Ps
drawCircle("js", 60, "#e91e63", "#000");   // Id
drawCircle("css", 45, "#ffc107", "#000");  // Css

//-----------------------------------------------------------------------

