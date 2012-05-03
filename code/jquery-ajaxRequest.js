$.ajax({
  url : '/path/to/api/resource',
  type : 'POST',
  dataType : 'json',
  data : { foo : bar },
  success : successCallback,
  error : errorCallback,
  complete : completeCallback
});
