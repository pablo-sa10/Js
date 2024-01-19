<?php

require './projeto.php'

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>

    <script>
        $(document).ready(() => {

            function pessoa() {
                let id = parseInt($('#id').val());
                let nome = $('#nome').val();
                let sexo = $('#sexo').val();

                let = params = {
                    id: id,
                    nome: nome,
                    sexo: sexo
                }
            }
        })
    </script>
</head>

<body>
    <form method="post">
        <label for="">ID</label>
        <input type="number" name="id" id="id">
        <br><br>

        <label for="">Nome</label>
        <input type="text" name="nome" id="nome">
        <br><br>

        <label for="">Sexo</label>
        <input type="text" name="sexo" id="sexo">
    </form>
</body>

</html>