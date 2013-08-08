<?php

/**
 * @file template.php
 */
 
 /**
* Implements hook_entity_info_alter().
*/
function optimum_entity_info_alter(&$entity_info) {
   $entity_info['node']['view modes']['tabbed_slider'] = array(
    'label' => t('Tabbed Slider'),
    'custom settings' => TRUE,
  );
  //dpm($entity_info);
}

