<?php

class pessoa{
    public function pessoa(){
        $params = json_decode($_POST['params']);
        $id = $params->id;
        $nome = $params->nome;
        $sexo = $params->sexo;

        echo "$id, $nome, $sexo";
    }
}

?>