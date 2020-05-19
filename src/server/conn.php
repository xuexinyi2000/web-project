<?php
    $dbServer = "localhost:3308";
    $rootname = "root";
    $rootpwd = "";
    $dbName = "sport";
    $conn = mysqli_connect($dbServer,$rootname,$rootpwd,$dbName);
    if(!$conn){
        die("数据库连接失败！".mysql_error());
    }else {
        // echo "数据库连接成功啦！";
    }
?> 