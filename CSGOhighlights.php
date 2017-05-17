<!DOCTYPE html>
<html>

<head>
    <title>CS:GO - The highlights you want</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <link rel="stylesheet" href="css/main.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

    <!-- FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,400,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    
    <script src="js/app1.js"></script>
<?php include 'savetoxml.php';
 ?>

</head>

<body>


<form name="search" method="post" action="" id="submitsearch">
    <div id="custom-search-input">
            <div class="input-group col-md-12">
                <input name="searchtag" id="search-input" type="text" class="  search-query form-control" placeholder="What do you want to see?">
                <input type="submit" hidden>

            

            </div>
        </div>
</form>


    <div class="container-fluid topfix">
<div class="col-md-3 sidebar"><h2 class="subheading">Related</h2></div>
<div class="col-md-9 currentvideo">

        <div class="center-block" id="allcontent">
            <div class="center-block"></div>
            
                <div class="streamable-embed-container" style="width: 100%; height: 0px; position: relative; padding-bottom: 56.338%;">
                    <div class="divWrapper">
                        <p id="videotitle"> </p>
                    </div>
                
<video width="960" height="720" controls loop id="mainvideo">

</video>
                    
                </div>
<!--<button id="next" class="btn btn-primary btn-lg center-block">Next video</button>-->
            

        </div>
</div>
<div class="tagarea">
<div class="innertags">
<h2 class="subheading">Popular tags</h2>
<p class="inline">Filter by:</p>
<select class="inline">
  <option value="Latest hour">Latest hour</option>
  <option value="Today">Today</option>
  <option value="This week">This week</option>
  <option value="This year">This year</option>
 <option value="All time">All time</option>
</select>
</div>

<span class="tags inline">#dosia</span>
<span class="tags inline">#olofmeister</span>
<span class="tags inline">#ESL</span>
<span class="tags inline">#clutch</span>
</div>



    </div>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

    

</body>

</html>

