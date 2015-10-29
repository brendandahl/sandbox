self.addEventListener('message', function(event) {
  // event.source should be the client.
  console.log(event.source);
});
