<?php
// 获取表单提交的信息
// status 0:登录成功，1：用户名不存在，2：密码错误

$data = json_decode(file_get_contents("php://input"),true);

$username = $data["name"];
$userpwd = $data["pwd"];
$adminid = null;
// 连接数据库
include("../conn.php");

$sql = "select admin_id,admin_name,admin_pwd from admins where admin_name=? and is_delete=0";

$stmt = mysqli_prepare($conn,$sql);
mysqli_stmt_bind_param($stmt,"s",$username);
mysqli_stmt_execute($stmt);
$rs = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_array($rs);
if(!$row){
    $status = 1;
}else {
    if($row["admin_pwd"] == $userpwd){
        // $_SESSION["userid"] = $row["id"];
        // $_SESSION["username"] = $username;
        $adminid = $row["admin_id"];
        $status = 0;
    }else {
        $status = 2;
    }
}

$arrs=[];
array_push($arrs,$status);
array_push($arrs,$adminid);
echo json_encode($arrs);

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>