<?php //dpm($element['#object']); 

$chapter_id = $element['#object']->field_chapter_id['und'][0]['value'];
//dpm();
?>
<?php foreach ($items as $delta=>$item) { ?>

	<?php //dpm($chapter_id); print l(render($item), decode_entities($chapter_id), array('html'=>TRUE)); ?>
	<a href="#<?php echo $chapter_id; ?>"><?php print render($item); ?></a>
<? } ?>
