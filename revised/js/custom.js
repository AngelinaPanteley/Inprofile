/*
 * Inprofile Custom Code b0.1
 */

// Double input on sign up focus state

$('.double-input input').focus(function() {
  $(this).parent().addClass('on-focus');
});

$('.double-input input').focusout(function() {
  $(this).parent().removeClass('on-focus');
});

// Initialize Tooltipster.js

$('[data-tooltipster]').tooltipster();

// Initialize Selectize.js

$('.select-small').selectize();

// Initialize Typeahead.js
// for recruiter registration on company lookup
//
// * M, Atensao *
// Aca puse el ejemplo que dan en el plugin como para poder laburarlo sin real-data (poder probarlo y stylearlo con CSS). Cualquier cosa avisame! 
//
// Examples: https://twitter.github.io/typeahead.js/examples/
// Docs: https://github.com/twitter/typeahead.js

// var companyList = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   prefetch: '/revised/js/examples/company.json',
//   remote: {
//     url: '/revised/js/examples/%QUERY.json',
//     wildcard: '%QUERY'
//   }
// });

// $('#companySearch').typeahead(null, {
//   name: 'companies',
//   display: 'value',
//   source: companyList,
//   templates: {
//     empty: [
//       '<div class="empty-message">',
//         'Unable to find company',
//       '</div>'
//     ].join('\n'),
//     suggestion: Handlebars.compile('<div class="tt-company"><i class="tt-logo"><img src="/revised/js/examples/logo.png"></i><p>{{value}}</p></div>')
//   }
// });

var positionList = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '/internal-api/positions',
  remote: {
    url: '/internal-api/positions?q=%QUERY',
    wildcard: '%QUERY'
  }
});

$('#headerSearchInput').typeahead(null, {
  name: 'positions',
  display: 'value',
  source: positionList,
  templates: {
    empty: [
      '<div class="empty-message">',
        'No results.',
      '</div>'
    ].join('\n'),
    suggestion: Handlebars.compile('<div class="tt-position"><p>{{value}} <span>- {{recruiters}} recruiters</span></p></div>')
  }
});

$('#searchInput').typeahead(null, {
  name: 'positions',
  display: 'value',
  source: positionList,
  templates: {
    empty: [
      '<div class="empty-message">',
        'No results.',
      '</div>'
    ].join('\n'),
    suggestion: Handlebars.compile('<div class="tt-position"><p>{{value}} <span>- {{recruiters}} recruiters</span></p></div>')
  }
});