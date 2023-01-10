$(() => {
  // When the form is submitted...
  $('#rewrite-form').submit(event => {
    event.preventDefault();

    // Retrieve the script and selected author
    const script = $('#script').val();
    const author = $('#author').val();

    // Send a POST request to the server to rewrite the script
    $.post('/rewrite', { script, author }, rewrittenScript => {
      // Update the page with the rewritten script
      $('#new-script').text(rewrittenScript);
    });
  });
});
