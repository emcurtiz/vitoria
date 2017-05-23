$ (document).ready(function() {
  $ (".clickablemap").click(function() {
    $ ("#map-hidden").fadeToggle();
    $ ("#map-showing").fadeToggle();
  });
});

$ (document).ready(function() {
  $ (".clickablesquare").click(function() {
    $ ("#square-hidden").fadeToggle();
    $ ("#square-showing").fadeToggle();
  });
});

$ (document).ready(function() {
  $ (".clickablefiesta").click(function() {
    $ ("#fiesta-hidden").fadeToggle();
    $ ("#fiesta-showing").fadeToggle();
  });
});
