$(document).ready(function(){
  //Инициализация всплывающей панели для
  //элементов веб-страницы, имеющих атрибут
  //data-toggle="popover"
  $('[data-toggle="popover"]').popover({
    //Установление направления отображения popover
    placement : 'bottom'
  });
});