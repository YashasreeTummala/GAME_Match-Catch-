
<?PHP
$new_count = 0;
    $con = mysqli_connect ("localhost","root","") or die("Host or database not accessible");
    mysqli_select_db($con, "simplecounter") or die("Couldn't find Database");

    $find_counts = mysqli_query($con , "SELECT * FROM user_count");

    if(!$find_counts){
        $new_count = mysqli_num_rows($find_counts);
    }
    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitors Count</title>
</head>
<body>
<p>
      <h2 id="visitbox">Visitor's Count : <text id="visit"> <?php echo $new_count ?></text> </h2>
  </p>
</body>
</html>