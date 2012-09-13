
/*
 * GET home page.
 */

exports.index = function(req, res){
  
  // convert all this to node

// // open connection to MongoDB server
// $conn = new Mongo('localhost');
// $db = $conn->notes;
// $collection = $db->notes;

// $comment = "";

// if(isset($_POST['note'])){
// 	if($_SERVER['HTTP_X_REQUESTED_WITH'] == "XMLHttpRequest"){
// 		$collection->update( array( 'user' => 'napalm1' ), array( '$set' => array('comment' => $_POST['note'])), array("upsert" => true ) );
// 		exit;
// 	}
// } else {
// 	$cursor = $collection->find();
// 	foreach ($cursor as $obj) {
// 		$comment = $obj['comment'];
// 	}
// }
// $conn->close();


	res.render('index', { title: 'napNotes' })
};