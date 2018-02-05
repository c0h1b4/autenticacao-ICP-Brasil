<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>Cerificado Digital ICP-Brasil</h1>
  <hr>
  <?php
  if ($_SERVER['SSL_CLIENT_VERIFY']) {
    $SSL_CLIENT_VERIFY = $_SERVER['SSL_CLIENT_VERIFY'];
    $SSL_CLIENT_S_DN = $_SERVER['SSL_CLIENT_S_DN'];
  } else {
    $SSL_CLIENT_VERIFY = false;
  }

  if ($SSL_CLIENT_VERIFY) {
    echo 'Cerificado autenticado, dados: ' . $SSL_CLIENT_S_DN;
  } else {
    echo 'Certificado não autenticado ou ausente.';
  }
  
  ?>
</body>
</html>