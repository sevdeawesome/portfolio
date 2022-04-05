    $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#purplz').fadeOut();
     }
    else
     {
      $('#purplz').fadeIn();
     }
 });


var words = ['small business','community','blog', 'webstore', 'wordpress site'],
    currentStep = 0,
    textEl = document.querySelector('.change-text'),
    oldWord = '';


setTimeout(changeWord, 1000);

function changeWord() {
  oldWord = textEl.innerHTML;
  
  
  if (oldWord.length < 1) {

    if (currentStep !== words.length -1) {
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 800);
  }
  
};

function deleteWord() {
  var WordLength = oldWord.length,
      currentWord = textEl.innerHTML,
      currentLength = currentWord.length;
  

 
  if (currentLength < 1) {
    changeWord();
    return;
  }
  

  textEl.innerHTML = currentWord.substring(0, currentLength - 1);
  
  setTimeout(deleteWord, 200);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
      currentLength = currentWord.length,
      nextWord = words[currentStep],
      nextWordLength = nextWord.length;
    
  
  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  

  textEl.innerHTML = nextWord.substring(0, currentLength + 1);
    
  setTimeout(addNextWord, 200);
  
  
}
$(document).ready(function () {
  
  var $nav = $('#navigation'),
      posTop = $nav.position().top;
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > posTop) { $nav.addClass('fixed'); }
    else { $nav.removeClass('fixed'); }
  });
    
  
});
$('body')
  .on('click', 'div.three button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.three input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.four button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.four input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.five button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.five input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.six button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.six input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.thirteen button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.thirteen input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.fourteen button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.fourteen input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
;