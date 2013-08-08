<?php

/**
 * @file field.tpl.php
 * Default template implementation to display the value of a field.
 *
 * This file is not used and is here as a starting point for customization only.
 * @see theme_field()
 *
 * Available variables:
 * - $items: An array of field values. Use render() to output them.
 * - $label: The item label.
 * - $label_hidden: Whether the label display is set to 'hidden'.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - field: The current template type, i.e., "theming hook".
 *   - field-name-[field_name]: The current field name. For example, if the
 *     field name is "field_description" it would result in
 *     "field-name-field-description".
 *   - field-type-[field_type]: The current field type. For example, if the
 *     field type is "text" it would result in "field-type-text".
 *   - field-label-[label_display]: The current label position. For example, if
 *     the label position is "above" it would result in "field-label-above".
 *
 * Other variables:
 * - $element['#object']: The entity to which the field is attached.
 * - $element['#view_mode']: View mode, e.g. 'full', 'teaser'...
 * - $element['#field_name']: The field name.
 * - $element['#field_type']: The field type.
 * - $element['#field_language']: The field language.
 * - $element['#field_translatable']: Whether the field is translatable or not.
 * - $element['#label_display']: Position of label display, inline, above, or
 *   hidden.
 * - $field_name_css: The css-compatible field name.
 * - $field_type_css: The css-compatible field type.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess_field()
 * @see theme_field()
 *
 * @ingroup themeable
 * field--field-tab-slider--field-tabs.tpl.php
 * field--field-body--field-tab-slider.tpl.php //old
 
$node = node_load(1);
$ids = array(); 
$test = entity_load('field_collection_item');
$id_text = array();

foreach($node->field_section['und'] as $delta=>$entity_id) { //get the ID of each field_section field_collections
  $ids[$entity_id['value']] = $entity_id['value'];
  //dpm($ids[$delta]['value']);
 }
 
foreach ($test as $item) { 
	if(isset($item->field_tab_id['und'][0]['value'])){
		$id_text[$item->item_id] = $item->field_tab_id['und'][0]['value'];
}}

$arr2ordered = array() ;

foreach (array_keys($ids) as $key) {
    $arr2ordered[$key] = $id_text[$key] ;
}
dpm($arr2ordered);*/
$id = $element['#object']->field_tab_id['und'][0]['value'];
$count = count($element['#object']->field_tab_slider['und']);
?>

<div id="<?php echo $id; ?>" class="carousel slide">

  <div class="carousel-inner"<?php print $content_attributes; ?>>
    <?php foreach ($items as $delta => $item): ?>
      <div class="item <?php if($delta==0) echo "active ";  print $delta % 2 ? 'odd' : 'even';?>"<?php print $item_attributes[$delta]; ?>>
		
		<?php print render($item); ?>
	  </div>
    <?php endforeach; ?>
  </div>
<?php if($count >1) { ?>  
  <a class="left carousel-control" href="#<?php echo $id; ?>" data-slide="prev">
    <span class="icon-prev"></span>
  </a>
  <a class="right carousel-control" href="#<?php echo $id; ?>" data-slide="next">
    <span class="icon-next"></span>
  </a>
<?php } ?>
<i class="icon-shield"></i>&nbsp; normal<br></i>
</div>
