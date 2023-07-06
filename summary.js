$(function () {
  $('#change-color').on('click', function () {
    // 色が変わる（色は任意）
    $('#target').css('color', 'red');
  });
  $('#change-text').on('click', function () {
    // 文字が切り替わる（内容は任意）
    $('#target').css('color', 'red');
    $('#target').text('Hello!');
  });
    
  $('#fade-out').on('click', function() {
    // フェードアウトで文字が消える
    $('#target').css('opacity', 0);
  });
  
  $('#fade-in').on('click', function() {
    // フェードインで文字が現れる
    $('#target').css('opacity', 1);
   });
});