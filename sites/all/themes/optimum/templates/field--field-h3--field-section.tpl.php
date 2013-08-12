<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
 <div class="field-items"<?php print $content_attributes; ?>>
    <?php foreach ($items as $delta => $item):?>
      <h3><?php print render($item); ?></h3>
    <?php endforeach; ?>
  </div>
</div>