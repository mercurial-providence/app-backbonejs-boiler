
<?php
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASS", "");
    define("DB_NAME", "sizil");
	$connection = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME) or die("<div style=\"margin: 1em 0;background:darkred;padding:1em 0.6em;color:white;\"><b>Error connecting to Database</b> ".mysqli_error($connection)."</div>");
	
    $query = mysqli_real_escape_string($connection, $_POST['query']);
    $returndata = "";
    $result = mysqli_query ( $connection, $query )  or die("<div style=\"margin: 1em 0;background:darkred;padding:1em 0.6em;color:white;\"><b>Error querying Database : </b> <b style=\"display:block\">{$query}</b> ".mysqli_error($connection)."</div>");
        
    if($result ){
        while ( $data = mysqli_fetch_row ( $result )) {
        $returndata.=json_encode($data)."<br/>";
            
        }
        
        echo "<div style=\"margin: 1em 0;background:limegreen;padding:1em 0.6em;color:white;\">Hello from Server, Take some data! : <b style=\"display:block\">{$query}</b><pre style=\"overflow:auto\"overflow><code>{$returndata}</pre></code></div>";
    }

    mysqli_close($connection);

?>